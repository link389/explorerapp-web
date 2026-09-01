# ExplorerApp — Kerkrade

*Werknaam. Een proef.*

Een kaart die niet laat zien wáár iets is, maar **wat je aankijkt en waarom het er staat** — en hoe de dingen om je heen samenhangen.

Deze versie gaat over Kerkrade: 18 plekken, 5 gebiedsverhalen, 6 thema's, van een Romeinse villa tot de laatste muur van Europa.

## Wat het probeert te zijn

Je loopt door een stad, ziet een standbeeld of een gebouw, en hebt geen idee waar je naar kijkt. Die informatie bestáát, maar opzoeken doe je niet ter plekke. En het gaat niet om het ene ding dat je opvalt — het gaat om de 99% die je *niet* opvalt en waar je dus ook nooit naar zou vragen.

Twee uitgangspunten:

**Bij nr. 1 verlies je, bij nr. 4 win je.** Iedereen kent de bekendste plek van een stad. Niemand vertelt je over die vierde. Daarom worden roem, verhaalwaarde en esthetiek apart gescoord in plaats van samengevoegd tot één relevantiegetal — dat laatste begraaft precies de objecten waar het om gaat.

**Objectiviteit zit in de claims, verhaal zit in de selectie en de volgorde.** Er wordt niets verzonnen. Wat een tekst tot verhaal maakt is de keuze wélke feiten erin staan en in welke volgorde — niet de toevoeging van sfeer. Elke bewering is herleidbaar tot een bron die erbij staat, en wat niet hard te krijgen was staat als *onbevestigd* gemarkeerd.

## Draaien

```
python tools/serve.py
```

Dan http://localhost:8731. De server print ook het adres voor je telefoon in hetzelfde wifi-netwerk.

```
python tools/verify.py            # controleer alle objecten
python tools/verify.py --offline  # snel, zonder netwerkchecks
```

`verify.py` doet twaalf mechanische controles: verplichte velden, bronnen aanwezig én bereikbaar, scores, tekstlengte, verdachte formuleringen, en — het belangrijkst — de coördinaten kruiselings tegen OpenStreetMap.

Dat laatste is er niet voor niets. Coördinaten uit Wikipedia staan in graden-minuten-seconden, afgerond op hele seconden: ±31 m noord-zuid. Drie punten in deze dataset stonden daardoor 25 tot 50 meter verkeerd. Voor iets waar je vóór moet gaan staan is dat het verschil tussen de goede en de verkeerde kant van de straat.

## Bronnen en licentie

Alle inhoud komt uit open bronnen, per object vermeld in het tabblad **Bronnen**:

- **Wikipedia (NL)** en **Wikidata** — CC BY-SA 4.0 / CC0
- **Wikimedia Commons** — afbeeldingen, per bestand gelicentieerd
- **Rijksmonumentenregister** (Rijksdienst voor het Cultureel Erfgoed) — open data
- **OpenStreetMap** — kaart en coördinaten, © OpenStreetMap-bijdragers, ODbL

De teksten in `data.js` zijn afgeleid van Wikipedia-artikelen en vallen daarmee onder **CC BY-SA 4.0**. De code is vrij te gebruiken.

Afbeeldingen worden rechtstreeks van Wikimedia Commons geladen. Bij serieus gebruik horen die lokaal gekopieerd te worden in plaats van van Commons getrokken.
