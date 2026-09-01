#!/usr/bin/env python3
"""
ExplorerApp — puntcontrole.

Draait alle objecten in data.js langs de harde regels uit de skill `poi`.
Deterministisch: geen model nodig, geen kosten, herhaalbaar. Draai dit na
elke toevoeging en na elke wijziging van de skill.

    python tools/verify.py            # alles
    python tools/verify.py joep       # één object
    python tools/verify.py --offline  # sla netwerkchecks over (snel)

Exit 0 = schoon, 1 = er staan FOUTen open.
"""
import json, re, sys, time, urllib.parse, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
UA = {"User-Agent": "ExplorerApp-verify/1.0 (persoonlijk project)"}
OVERPASS = [
    "https://overpass-api.de/api/interpreter",
    "https://overpass.kumi.systems/api/interpreter",
]

FOUT, WAARSCHUWING, OK = "FOUT", "WAARSCHUWING", "ok"
bevindingen = []


def meld(niveau, obj_id, regel, tekst):
    bevindingen.append((niveau, obj_id, regel, tekst))


# ---------------------------------------------------------------- data laden
def laad():
    """data.js is JS, geen JSON. We knippen het object eruit en laten Node het
    omzetten als dat kan; anders vallen we terug op een tolerante parser."""
    import subprocess, shutil, tempfile, os
    if shutil.which("node"):
        # via een tijdelijk bestand: op Windows loopt `node -e` met de hele
        # dataset tegen de maximale commandoregellengte aan
        fd, pad = tempfile.mkstemp(suffix=".js")
        os.close(fd)
        try:
            with open(pad, "w", encoding="utf-8") as f:
                f.write("globalThis.window={};\n")
                f.write("require(" + json.dumps(str(ROOT / "data.js")) + ");\n")
                f.write("process.stdout.write(JSON.stringify(window.APP));\n")
            r = subprocess.run(["node", pad], capture_output=True, text=True, encoding="utf-8")
            if r.returncode == 0:
                return json.loads(r.stdout)
            print("node kon data.js niet lezen:", r.stderr.strip()[:300], file=sys.stderr)
            sys.exit(2)
        finally:
            os.unlink(pad)
    print("Node.js niet gevonden — verify heeft het nodig om data.js te lezen.", file=sys.stderr)
    sys.exit(2)


def haal(url, timeout=25):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.status, r.read()


def overpass(query):
    for ep in OVERPASS:
        try:
            data = urllib.parse.urlencode({"data": query}).encode()
            req = urllib.request.Request(ep, data=data, headers=UA)
            with urllib.request.urlopen(req, timeout=40) as r:
                return json.loads(r.read())
        except Exception:
            time.sleep(1.5)
    return None


def meters(a, b):
    """Ruwe afstand in meters, prima op stadsschaal."""
    import math
    dlat = (a[0] - b[0]) * 111320
    dlon = (a[1] - b[1]) * 111320 * math.cos(math.radians(a[0]))
    return math.hypot(dlat, dlon)


# ---------------------------------------------------------------- de regels
def controleer(o, is_gebied, offline):
    i = o["id"]

    # R1 — verplichte velden
    verplicht = ["id", "naam", "glance", "verhaal_tekst", "bronnen", "roem", "verhaal", "esthetiek"]
    for v in verplicht:
        # let op: 0 is een geldige score, dus expliciet op None/leeg testen
        w = o.get(v)
        if w is None or w == "" or w == []:
            meld(FOUT, i, "R1", f"veld '{v}' ontbreekt of is leeg")

    # R2 — geen bron, geen bewering
    if not o.get("bronnen"):
        meld(FOUT, i, "R2", "geen enkele bron opgegeven")
    for b in o.get("bronnen", []):
        if not b.get("url", "").startswith("http"):
            meld(FOUT, i, "R2", f"bron zonder geldige url: {b.get('titel','?')}")

    # R3 — scores binnen bereik en apart gehouden
    for k in ("roem", "verhaal", "esthetiek"):
        v = o.get(k)
        if not isinstance(v, int) or not 0 <= v <= 100:
            meld(FOUT, i, "R3", f"score '{k}' is geen geheel getal 0-100 (nu: {v!r})")

    # R4 — routeringsregel: esthetiek < 35 hoort geen pin te zijn
    est = o.get("esthetiek", 0)
    if not is_gebied and est < 35:
        meld(FOUT, i, "R4", f"esthetiek {est} < 35 maar staat als pin — hoort bij gebiedsverhalen")
    if is_gebied and est >= 35:
        meld(WAARSCHUWING, i, "R4", f"esthetiek {est} >= 35 als gebiedsverhaal — overweeg een pin")

    # R5 — coördinaat: aanwezig, plausibel, en precies genoeg
    if not is_gebied:
        c = o.get("coord")
        if not (isinstance(c, list) and len(c) == 2):
            meld(FOUT, i, "R5", "geen geldige coord")
        else:
            lat, lon = c
            for waarde, naam in ((lat, "lat"), (lon, "lon")):
                dec = len(str(waarde).split(".")[1]) if "." in str(waarde) else 0
                if dec < 5:
                    meld(FOUT, i, "R5",
                         f"{naam}={waarde} heeft {dec} decimalen; minimaal 5 vereist (~1 m)")
            bron = o.get("coord_bron")
            if not bron:
                meld(FOUT, i, "R5", "coord_bron ontbreekt — herkomst van de coördinaat is niet vastgelegd")
            elif bron.endswith("-dms"):
                meld(WAARSCHUWING, i, "R5",
                     "coord komt uit graden-minuten-seconden: afronding op hele seconden geeft "
                     "tot ~30 m afwijking. Natrekken in OSM.")
            elif bron == "handmatig":
                meld(WAARSCHUWING, i, "R5", "coord is handmatig geprikt en niet tegen een bron gecontroleerd")

    # R6 — niveau
    if not is_gebied:
        n = o.get("niveau")
        if n not in (1, 2, 3):
            meld(FOUT, i, "R6", f"niveau moet 1, 2 of 3 zijn (nu: {n!r})")

    # R7 — verbindingen wijzen naar bestaande objecten en zijn beschreven
    for v in o.get("verbindingen", []):
        if v["id"] not in ALLE_IDS:
            meld(FOUT, i, "R7", f"verbinding wijst naar onbekend id '{v['id']}'")
        if not v.get("relatie"):
            meld(FOUT, i, "R7", f"verbinding naar '{v['id']}' heeft geen omschrijving")

    # R8 — lengte van het verhaal
    woorden = len(re.findall(r"\w+", o.get("verhaal_tekst", "")))
    if woorden and not 80 <= woorden <= 220:
        meld(WAARSCHUWING, i, "R8", f"verhaal is {woorden} woorden (richtlijn 100-150, max 220)")
    if len(o.get("glance", "")) > 160:
        meld(WAARSCHUWING, i, "R8", "glance is langer dan één zin")

    # R9 — verboden formuleringen die een claim smokkelen
    verdacht = ["men zegt", "naar verluidt", "waarschijnlijk", "vermoedelijk", "het beroemde",
                "de legendarische", "wordt gezegd", "naar men aanneemt"]
    tekst = " ".join(str(o.get(k, "")) for k in
                     ("glance", "waarom_hier", "verhaal_tekst", "let_hierop")).lower()
    for w in verdacht:
        if w in tekst:
            meld(WAARSCHUWING, i, "R9", f"verdachte formulering: '{w}' — bron of schrappen")

    # R13 — inline verwijzingen [[id]] moeten bestaan
    for veld in ("verhaal_tekst", "waarom_hier", "waarom_geen_pin", "let_hierop", "glance"):
        for doel in re.findall(r"\[\[([a-z0-9-]+)", str(o.get(veld) or "")):
            if doel not in ALLE_IDS:
                meld(FOUT, i, "R13", f"verwijzing [[{doel}]] in '{veld}' wijst nergens heen")

    if offline:
        return

    # R10 — afbeelding bestaat en is bereikbaar
    if o.get("afbeelding"):
        url = ("https://commons.wikimedia.org/wiki/Special:FilePath/"
               + urllib.parse.quote(o["afbeelding"]) + "?width=300")
        try:
            code, _ = haal(url)
            if code != 200:
                meld(FOUT, i, "R10", f"afbeelding geeft HTTP {code}")
        except Exception as e:
            meld(FOUT, i, "R10", f"afbeelding niet op te halen: {e}")
        if any(ch in o["afbeelding"] for ch in "()'"):
            meld(WAARSCHUWING, i, "R10",
                 "bestandsnaam bevat haakjes of quotes — CSS url() moet gequote zijn")

    # R11 — bronnen bereikbaar
    for b in o.get("bronnen", []):
        try:
            code, _ = haal(b["url"], timeout=20)
            if code >= 400:
                meld(FOUT, i, "R11", f"bron geeft HTTP {code}: {b['url']}")
        except Exception as e:
            meld(WAARSCHUWING, i, "R11", f"bron niet te bereiken ({type(e).__name__}): {b['url']}")

    # R12 — coördinaat kruiselings tegen OpenStreetMap
    if not is_gebied and o.get("coord") and o.get("coord_bron") != "osm":
        naam = re.escape(o["naam"].split("/")[0].strip()[:24])
        q = (f'[out:json][timeout:25];nwr(around:350,{o["coord"][0]},{o["coord"][1]})'
             f'["name"~"{naam}",i];out center 3;')
        res = overpass(q)
        if res is None:
            meld(WAARSCHUWING, i, "R12", "OSM niet bereikbaar — coördinaat niet kruiselings gecontroleerd")
        elif not res.get("elements"):
            meld(WAARSCHUWING, i, "R12", "geen gelijknamig OSM-object binnen 350 m gevonden")
        else:
            e = res["elements"][0]
            osm = (e.get("lat") or e.get("center", {}).get("lat"),
                   e.get("lon") or e.get("center", {}).get("lon"))
            if osm[0]:
                d = meters(o["coord"], osm)
                if d > 40:
                    meld(FOUT, i, "R12",
                         f"staat {d:.0f} m van het OSM-object af — OSM zegt {osm[0]:.6f}, {osm[1]:.6f}")
                elif d > 15:
                    meld(WAARSCHUWING, i, "R12",
                         f"{d:.0f} m van OSM — controleer of dat klopt ({osm[0]:.6f}, {osm[1]:.6f})")
        time.sleep(1.2)


# ---------------------------------------------------------------- uitvoeren
if __name__ == "__main__":
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    offline = "--offline" in sys.argv

    APP = laad()
    pois, gebieden = APP["pois"], APP["gebiedsverhalen"]
    ALLE_IDS = ({o["id"] for o in pois + gebieden}
                | {p["id"] for p in APP.get("plaatsen", [])}
                | set(APP.get("themas", {}).keys()))

    doel = [(o, False) for o in pois] + [(o, True) for o in gebieden]
    if args:
        doel = [(o, g) for o, g in doel if o["id"] in args]
        if not doel:
            print("geen object met dat id"); sys.exit(2)

    print(f"ExplorerApp puntcontrole — {len(doel)} objecten"
          f"{' (offline)' if offline else ''}\n" + "-" * 62)
    for o, g in doel:
        controleer(o, g, offline)

    fouten = [b for b in bevindingen if b[0] == FOUT]
    waarsch = [b for b in bevindingen if b[0] == WAARSCHUWING]

    for niveau, groep in (("FOUT", fouten), ("WAARSCHUWING", waarsch)):
        if not groep:
            continue
        print(f"\n{niveau} ({len(groep)})")
        for _, i, regel, t in groep:
            print(f"  [{regel}] {i}: {t}")

    print("\n" + "-" * 62)
    print(f"{len(doel)} gecontroleerd · {len(fouten)} fout · {len(waarsch)} waarschuwing")
    if not fouten and not waarsch:
        print("Alles schoon.")
    sys.exit(1 if fouten else 0)
