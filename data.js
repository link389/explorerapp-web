/* ExplorerApp — proefdata Kerkrade
 *
 * INVARIANT: geen bron, geen bewering. Elke feitelijke claim hieronder is
 * herleidbaar tot een bron in het `bronnen`-veld van het object.
 * Duiding staat in `verband` en `let_hierop` en is als zodanig herkenbaar.
 *
 * Scores 0-100, drie assen die NOOIT worden samengevoegd:
 *   roem     - hoe bekend is het?
 *   verhaal  - hoeveel verrast het verhaal?
 *   esthetiek- is er iets te zien, en valt het op? (aanwezigheid, geen schoonheid)
 *
 * `niveau` = vulniveau EN zoomniveau waarop de pin verschijnt:
 *   1 = altijd zichtbaar, ook ver uitgezoomd (het skelet van de stad)
 *   2 = vanaf zoom 14
 *   3 = vanaf zoom 16 (de nr.4-objecten waar de app zijn waarde verdient)
 *
 * Esthetiek < 35 => geen pin op de kaart, maar een gebiedsverhaal.
 */

window.APP = {
  gebied: {
    naam: "Kerkrade",
    centrum: [50.865, 6.0655],
    zoom: 15
  },

  themas: {
    mijnbouw: {
      label: "Mijnbouw", kleur: "#c2410c", icoon: "\u26cf", schaal: "streek",
      glance: "Achthonderdvijftig jaar steenkool, en in \u00e9\u00e9n generatie bijna spoorloos verdwenen.",
      verhaal_tekst: "Dit is geen Kerkraads verhaal maar een streekverhaal. De vroegste vermelding staat wel h\u00eder \u2014 in 1113 noteert de abdij Rolduc het woord kalculen, kolenkuilen, de oudste bekende vermelding van steenkoolwinning in Europa. Maar de mijnbouw die daaruit groeide besloeg de hele Oostelijke Mijnstreek: Kerkrade, Heerlen, Landgraaf, Brunssum, en aan de andere kant van de grens het Wurmrevier bij Aken. In Kerkrade alleen al lagen naast de Domaniale ook Neuprick, Hammijn en Voccart. Wat je er nu van ziet is bewust weinig: \u00e9\u00e9n schachtgebouw, twee begroeide steenbergen, een bronzen mijnwerker en een handvol gedenkplaten.",
      elders: [
        { plaats: "Heerlen", waarom: "Oranje-Nassau-mijnen; het Glaspaleis van Peutz staat er ook" },
        { plaats: "Landgraaf", waarom: "Mijn Oranje-Nassau II en de Wilhelminaberg, een steenberg die skihelling werd" },
        { plaats: "Aken en het Wurmrevier (DE)", waarom: "hetzelfde kolenbekken, andere kant van de grens" }
      ],
      bronnen: [
        { titel: "Domaniale mijn \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Domaniale_mijn" },
        { titel: "Neuprick \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Neuprick" }
      ]
    },
    grens: {
      label: "De grens", kleur: "#1d4ed8", icoon: "\u2551", schaal: "streek",
      glance: "Een lijn uit 1815 die dwars door een gegroeide gemeenschap loopt \u2014 en \u00e9\u00e9n keer een muur werd.",
      verhaal_tekst: "Het Congres van Wenen tekende in 1815 nieuwe grenzen door Europa. Hier viel die lijn niet netjes tussen twee steden maar er middendoor: bij het Verdrag van Aken van 26 juni 1816 werd voor de bestraatte Nieuwstraat een uitzondering gemaakt, en liep de grens voortaan door het midden van de straat. Sinds 1968 stond daar zelfs een bakstenen muurtje, twee kilometer lang, dat pas in 1994 verdween \u2014 vijf jaar n\u00e1 de Berlijnse muur. Dezelfde beslissing van 1815 zette ook Burg Rode, de burcht waar Kerkrade zijn naam aan dankt, aan de Duitse kant.",
      elders: [
        { plaats: "Vaals en het Drielandenpunt", waarom: "waar dezelfde grens drie landen raakt" },
        { plaats: "Baarle-Nassau", waarom: "de bekendste Nederlandse grensknoop, met enclaves in enclaves" }
      ],
      bronnen: [
        { titel: "Nieuwstraat (Kerkrade) \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Nieuwstraat_(Kerkrade)" },
        { titel: "Burg Rode \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Burg_Rode" }
      ]
    },
    rolduc: {
      label: "Rolduc", kleur: "#7c3aed", icoon: "\u271d", schaal: "stad",
      glance: "Een klooster uit 1104 dat de stad zijn naam, zijn kerk \u00e9n zijn steenkool gaf.",
      verhaal_tekst: "Ailbertus van Antoing sticht in 1104 een klooster in een pas ontgonnen bos. In 1106 legt hij de fundamenten van de kloosterkerk, in 1108 is de crypte klaar. In datzelfde jaar wordt verderop de Sint-Lambertuskerk gewijd, en de nederzetting daaromheen gaat Kerk-rade heten. De abdij bezit en exploiteert eeuwenlang de kolenwinning: van 1113 tot 1645 en opnieuw vanaf 1742, met een concessie van Maria Theresia in 1766. Alles wat Kerkrade daarna werd komt hier vandaan \u2014 de naam, de parochie en de mijn.",
      elders: [
        { plaats: "Aken", waarom: "de Dom van Karel de Grote; dezelfde kerkelijke invloedssfeer" }
      ],
      bronnen: [
        { titel: "Abdij Rolduc \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Abdij_Rolduc" }
      ]
    },
    romeins: {
      label: "Romeins", kleur: "#a16207", icoon: "\u2169", schaal: "streek",
      glance: "Drie villaterreinen onder \u00e9\u00e9n gemeente \u2014 dit was geen rand van het rijk maar goede landbouwgrond.",
      verhaal_tekst: "Binnen de gemeentegrenzen van Kerkrade liggen bekende Romeinse villaterreinen bij Rolduc, Nieuw Ehrenstein, Kaalheide en Holzkuil. Dat is veel voor \u00e9\u00e9n gemeente. Het verklaart zich uit het landschap: zuidhellingen, l\u00f6ssgrond en beken \u2014 dezelfde eigenschappen die duizend jaar later de monniken van Rolduc naar deze plek brachten. Bovengronds is er vrijwel niets van te zien; het zijn funderingen in de bodem, waarvan er \u00e9\u00e9n als archeologisch rijksmonument beschermd is.",
      elders: [
        { plaats: "Heerlen (Coriovallum)", waarom: "Romeins badhuis en het kruispunt van twee heerbanen" },
        { plaats: "Aken (Aquae Granni)", waarom: "de warmwaterbronnen waar het hele gebied op georganiseerd was" },
        { plaats: "Keulen (Colonia)", waarom: "de provinciehoofdstad waar deze wegen heen liepen" }
      ],
      bronnen: [
        { titel: "Romeinse villa Rolduc \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Romeinse_villa_Rolduc" },
        { titel: "Romeinse villa Kaalheide \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Romeinse_villa_Kaalheide" }
      ]
    },
    muziek: {
      label: "Muziek", kleur: "#059669", icoon: "\u266b", schaal: "stad",
      glance: "Elke vier jaar is dit de wereldhoofdstad van de blaasmuziek.",
      verhaal_tekst: "Sinds 1951 wordt het Wereld Muziek Concours elke vier jaar in Kerkrade gehouden. In 2005 kwamen er ruim negentienduizend muzikanten uit alle delen van de wereld op af en zo\u2019n zeshonderdvijftigduizend bezoekers \u2014 in een stad met een fractie van dat inwonertal. De mars- en showwedstrijden worden in het stadion gehouden. De twintigste editie liep van 9 juli tot 2 augustus 2026. Wat de stad eraan overhoudt is zaalruimte: een theater en de Rodahal, binnen vijf minuten lopen van elkaar.",
      onbevestigd: "Het veelgehoorde verband tussen de mijnwerkersharmonie\u00ebn en het ontstaan van het WMC is in de geraadpleegde bronnen niet bevestigd.",
      elders: [],
      bronnen: [
        { titel: "Wereld Muziek Concours \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Wereld_Muziek_Concours" }
      ]
    },
    water: {
      label: "Water", kleur: "#0891b2", icoon: "\u2248", schaal: "stad",
      glance: "De energiebron v\u00f3\u00f3r de kolen \u2014 en de reden dat mensen hier tweeduizend jaar geleden al gingen wonen.",
      verhaal_tekst: "De Anstelerbeek heeft genoeg verval voor bovenslagmolens, en in het dal liggen er twee: de Hammolen en de Brugmolen, die laatste van omstreeks 1400. Op dezelfde hellingen stonden Romeinse villa\u2019s, en later Kasteel Erenstein. Het water dreef dit dal aan tot de steenkool het overnam; toen de kolen in 1969 verdwenen kwam het water niet terug. Bovenin het dal ligt nu de Cranenweyer, een stuwmeer \u2014 hetzelfde water, maar tegenhouden in plaats van gebruiken.",
      elders: [],
      bronnen: [
        { titel: "Anstelvallei \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Anstelvallei" },
        { titel: "Brugmolen \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Brugmolen" }
      ]
    }
  },

  /* De schaal-stapel. Regel: een hoger niveau vat alleen samen wat lager
     al gesourced is. Geen nieuwe claims bovenin. */
  plaatsen: [
    {
      id: "kerkrade", schaal: "stad", naam: "Kerkrade", ouder: "mijnstreek",
      ondertitel: "Stad in Zuid-Limburg \u00b7 aan de Duitse grens",
      afbeelding: "Kerkrade-Markt.jpg",
      glance: "Een grensstad die begon als ontginning bij een klooster, de oudste steenkoolmijn van Nederland herbergde, en die nu elke vier jaar de blaasmuziekwereld ontvangt.",
      verhaal_tekst: "Rond 1100 werd hier bos gerooid. Zulk vrijgemaakt land heette simpelweg rode.\n\nIn 1104 staan er twee dingen in die open plek: een klooster en een burcht. Allebei heten ze Rode. Daar komt bijna alles vandaan. De nederzetting bij de burcht werd \u2019s-Hertogenrode, en dus Herzogenrath. Die bij de parochiekerk werd Kerk-rade. Het klooster ging in het Frans door als Rode-le-Duc, wat afsleet tot Rolduc. Drie namen, \u00e9\u00e9n bos.\n\nNegen jaar later schrijft iemand in de boekhouding van dat klooster \u00e9\u00e9n woord: kalculen. Kolenkuilen. Het is de oudste bekende vermelding van steenkoolwinning in Europa, en ze staat hier.\n\nWat daarop volgt duurt achthonderd jaar en is op 29 augustus 1969 voorbij. De laatste kolen komen boven. Daarna verdwijnt de mijnbouw bijna spoorloos \u2014 \u00e9\u00e9n schachtgebouw bleef staan.\n\nLoop over de Markt en je vindt er een bronzen mijnwerker. Die kreeg zijn naam pas op de dag dat hij werd onthuld.",
      waarvoor_bekend: "De oudste steenkoolmijn van Nederland, de abdij Rolduc, het Wereld Muziek Concours, en de Nieuwstraat waar de landsgrens door het midden loopt.",
      themas: ["mijnbouw", "grens", "rolduc", "romeins", "muziek", "water"],
      bronnen: [
        { titel: "Abdij Rolduc \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Abdij_Rolduc" },
        { titel: "Domaniale mijn \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Domaniale_mijn" },
        { titel: "Burg Rode \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Burg_Rode" },
        { titel: "Nieuwstraat (Kerkrade) \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Nieuwstraat_(Kerkrade)" }
      ]
    },
    {
      id: "mijnstreek", schaal: "streek", naam: "Oostelijke Mijnstreek", ouder: "limburg",
      ondertitel: "Heerlen \u00b7 Kerkrade \u00b7 Landgraaf \u00b7 Brunssum \u00b7 Beekdaelen \u00b7 Voerendaal \u00b7 Simpelveld",
      afbeelding: null,
      jaar: 1900,
      glance: "Een streek die in twintig jaar van de rijkste van Nederland naar de armste ging.",
      verhaal_tekst: "De naam mijnstreek stamt uit de eerste helft van de twintigste eeuw, toen rond Kerkrade, Heerlen, Hoensbroek, Brunssum, Eygelshoven en Schaesberg industri\u00eble steenkoolwinning op gang kwam. Nederland had twaalf mijnzetels, grotendeels hier. Het tijdperk liep van 1900 tot 31 december 1974, toen de laatste mijnen dichtgingen. Het scherpste cijfer staat niet in de mijnbouwgeschiedenis maar in de inkomensstatistiek: in 1955 stonden vier van deze gemeenten in de landelijke top vijfentwintig van de hoogste inkomens. In 1975 stonden diezelfde gemeenten onderaan. Twintig jaar, van kop naar staart. De streek vergrijst sinds die tijd sterk. De gemeenten werken nu samen als Parkstad Limburg \u2014 een naam bedacht door oud-burgemeester Thijs W\u00f6ltgens van Kerkrade, die verwijst naar het groen tussen de vele kleine kernen.",
      waarvoor_bekend: "Steenkool, en het verlies daarvan.",
      themas: ["mijnbouw", "grens", "romeins"],
      cascade: "Kerkrade is hier de oudste schakel: de eerste vermelding van kolenwinning (1113) staat daar, en de Domaniale sloot in 1969, vijf jaar voor de rest.",
      bronnen: [
        { titel: "Oostelijke Mijnstreek \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Oostelijke_Mijnstreek" },
        { titel: "Steenkolenmijnen \u2014 Canon van Nederland", url: "https://www.canonvannederland.nl/nl/limburg/limburg/venster-94-steenkolenmijnen" }
      ]
    },
    {
      id: "limburg", schaal: "provincie", naam: "Limburg", ouder: "nederland",
      ondertitel: "Provincie",
      afbeelding: null,
      glance: "Nog niet uitgewerkt.",
      verhaal_tekst: "Nog leeg. Dit niveau staat er om te laten zien dat de stapel doorloopt: object, wijk, stad, streek, provincie, land. Als het gevuld wordt, wordt het een eigen verhaal met eigen bronnen \u2014 geen samenvatting van de steden eronder.",
      waarvoor_bekend: "\u2014",
      themas: ["mijnbouw", "grens"],
      onbevestigd: "Nog geen inhoud.",
      bronnen: []
    },
    {
      id: "nederland", schaal: "land", naam: "Nederland", ouder: null,
      ondertitel: "Land",
      afbeelding: null,
      glance: "Nog niet uitgewerkt.",
      verhaal_tekst: "Leeg niveau, bovenaan de stapel.",
      waarvoor_bekend: "\u2014",
      themas: [],
      onbevestigd: "Nog geen inhoud.",
      bronnen: []
    }
  ],

  pois: [
    {
      id: "lambertuskerk",
      jaar: 1108,
      niveau: 1,
      naam: "Sint-Lambertuskerk",
      ondertitel: "Parochiekerk \u00b7 gewijd 1108 \u00b7 rijksmonument 23556",
      coord: [50.8649933, 6.060458],
      coord_bron: "wikidata",
      themas: ["rolduc"],
      roem: 30, verhaal: 80, esthetiek: 82,
      afbeelding: "Kerkrade-Sint-Lambertuskerk (1).jpg",
      bijschrift: "De Sint-Lambertuskerk.",
      glance: "De kerk waar de stad naar heet \u2014 Kerk-rade is de ontginning bij deze kerk.",
      waarom_hier: "De kerk wordt rond 1080 voor het eerst genoemd en werd in 1108 gewijd. De nederzetting groeide eromheen, en gaf die nederzetting haar naam.",
      verhaal_tekst: "Let op het jaartal: 1108. Dat is precies het jaar waarin verderop de romaanse crypte van Rolduc werd voltooid. Binnen \u00e9\u00e9n generatie verrezen hier dus een abdij en een parochiekerk, allebei in een pas ontgonnen bos. Wat je nu ziet is niet dat gebouw meer. In 1842 werd het schip herbouwd in sobere waterstaatsstijl door Lambert Jamin\u00e9, en in 1956 breidde Frits Peutz het uit met een zijbeuk en een hogere toren \u2014 dezelfde Peutz die in Heerlen het Glaspaleis bouwde. Binnen staat een neobarok orgel van de Gebr. M\u00fcller uit 1847, in 1987 gerestaureerd, met achttiende-eeuwse barokke altaren in Luiks-Akense trant en een preekstoel uit 1857 van het atelier Cuypers-Stoltzenberg.",
      let_hierop: "De toren is in 1956 verhoogd. Kijk waar het metselwerk van karakter verandert; daar houdt de oude kerk op en begint Peutz.",
      praktisch: "Aan de rand van het centrum, op loopafstand van de Markt.",
      verbindingen: [
        { id: "drie-rodes", relatie: "de kerk in Kerk-rade" },
        { id: "rolduc", relatie: "beide gewijd rond 1108" },
        { id: "joep", relatie: "vijf minuten lopen naar de Markt" }
      ],
      bronnen: [
        { titel: "Sint-Lambertuskerk (Kerkrade) \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Sint-Lambertuskerk_(Kerkrade)" },
        { titel: "Rijksmonument 23556 — Monumentenregister RCE", url: "https://monumentenregister.cultureelerfgoed.nl/monumenten/23556" }
      ]
    },

    {
      id: "burg-rode",
      jaar: 1104,
      niveau: 1,
      naam: "Burg Rode",
      ondertitel: "Burcht \u00b7 eerste vermelding 1104 \u00b7 Herzogenrath",
      coord: [50.866871, 6.089785],
      coord_bron: "osm",
      themas: ["grens", "rolduc"],
      roem: 28, verhaal: 86, esthetiek: 90,
      afbeelding: "Wurmtal mit Blick auf Burg Rode - Herzogenrath - St\u00e4dteregion Aachen - Nordrhein-Westfalen.jpg",
      bijschrift: "Zicht op Burg Rode vanuit het Wurmdal.",
      glance: "De burcht waar Kerkrade, Herzogenrath \u00e9n Rolduc alle drie hun naam aan danken \u2014 en die sinds 1815 in Duitsland ligt.",
      waarom_hier: "De burcht bewaakte een middeleeuws kruispunt van handelswegen tussen Keulen, Aken en Trier, en hief daar tol. Wie de weg beheerste, beheerste de inkomsten.",
      verhaal_tekst: "In 1104 duikt hier in de administratie een Castrensis Viculus op, een burcht van de graven van Saffenberg. Hetzelfde jaartal als de stichting van Rolduc, drie kilometer verderop. In 1136 kwam de burcht via een huwelijk aan de hertogen van Limburg, daarna aan Brabant, en van 1544 tot de Franse inval in 1794 aan de Habsburgse Nederlanden. In 1282 staat de plaats te boek als \u2019s-Hertogenrode: de ontginning van de hertog. Dat woord is nog altijd te horen in Herzogenrath. Het Congres van Wenen legde de burcht in 1815 aan de Duitse kant van een nieuwe grens \u2014 dezelfde beslissing die verderop de Nieuwstraat doormidden sneed. In de negentiende eeuw werd de burcht in historiserende stijl hersteld.",
      let_hierop: "Vanaf de Kerkraadse kant kijk je naar een Duitse burcht die zeven eeuwen ouder is dan de grens die ertussen ligt.",
      praktisch: "Burgstra\u00dfe, Herzogenrath (DE). Een vereniging organiseert er concerten en tentoonstellingen; elk jaar in juni een burchtfeest.",
      verbindingen: [
        { id: "drie-rodes", relatie: "de hertog uit \u2019s-Hertogenrode" },
        { id: "nieuwstraat", relatie: "dezelfde grens van 1815" },
        { id: "rolduc", relatie: "hetzelfde jaartal: 1104" }
      ],
      bronnen: [
        { titel: "Burg Rode \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Burg_Rode" }
      ]
    },

    {
      id: "abdijkerk",
      jaar: 1108,
      niveau: 2,
      naam: "Abdijkerk Rolduc",
      ondertitel: "Romaanse kloosterkerk \u00b7 rijksmonument 23601",
      coord: [50.868065, 6.082023],
      coord_bron: "osm",
      themas: ["rolduc"],
      roem: 32, verhaal: 78, esthetiek: 90,
      afbeelding: "Kerkrade Abdijkerk Rolduc.JPG",
      bijschrift: "De abdijkerk van Rolduc.",
      glance: "De kerk van de abdij, met een crypte die al in 1108 klaar was en er nog altijd staat.",
      waarom_hier: "Ailbertus van Antoing legde hier in 1106 samen met Embrico van Maysscho\u00df de fundamenten van de kloosterkerk, twee jaar na de stichting van de abdij.",
      verhaal_tekst: "De crypte onder de kerk is het oudste stuk van het hele complex en dateert van 1108. Daar staat ook de sarcofaag waarin in 1895 plechtig het gebeente van stichter Ailbertus werd bijgezet. Onderzoek in 1996 wees uit dat het om laatmiddeleeuwse skeletten gaat \u2014 iemand anders dus, ruim een eeuw lang met alle egards vereerd. De kerk erboven groeide mee met de abdij: romaans van oorsprong, met latere ingrepen, en sinds 1967 beschermd als rijksmonument. Wie hier binnenstapt staat in het enige deel van Rolduc dat er nog bij staat zoals het bedoeld was.",
      let_hierop: "Ga naar beneden. De crypte is negenhonderd jaar oud; alles erboven is jonger, verbouwd of herbouwd.",
      verbindingen: [
        { id: "rolduc", relatie: "de kerk van dit complex" },
        { id: "lambertuskerk", relatie: "beide gewijd rond 1108" }
      ],
      bronnen: [
        { titel: "Abdijkerk Rolduc \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Abdijkerk_Rolduc" },
        { titel: "Abdij Rolduc \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Abdij_Rolduc" },
        { titel: "Rijksmonument 23601 — Monumentenregister RCE", url: "https://monumentenregister.cultureelerfgoed.nl/monumenten/23601" }
      ]
    },

    {
      id: "steenberg-ham",
      jaar: 1952,
      niveau: 2,
      naam: "Steenberg Ham",
      ondertitel: "Mijnsteenberg Domaniale \u00b7 vanaf 1952",
      coord: [50.858197, 6.062286],
      coord_bron: "wikidata",
      themas: ["mijnbouw"],
      roem: 7, verhaal: 66, esthetiek: 58,
      afbeelding: null,
      glance: "Een lage heuvel vlak bij het centrum die er in 1952 nog niet was.",
      waarom_hier: "De Domaniale Mijn had al een steenberg, maar die zat vol. Vanaf 1952 kwam het afvalgesteente hier terecht \u2014 dicht bij de schacht, want gesteente sleep je niet ver.",
      verhaal_tekst: "Hij haalde nooit meer dan vijftien meter boven het maaiveld, wat voor een steenberg bescheiden is. Dat maakt hem juist bruikbaar: laag genoeg om overheen te kijken, hoog genoeg om te zien dat hij er niet hoort. Na de sluiting van de mijn in 1969 is het gebied ingericht als natuur- en recreatiezone met wandelpaden. Wie er nu loopt, loopt over zeventien jaar afval van een mijn die met tussenpozen achthonderdvijftig jaar heeft gedraaid. Het is de tweede steenberg van diezelfde mijn; de eerste ligt aan de andere kant van de stad.",
      let_hierop: "Vijftien meter klinkt weinig. Maar dit is de tw\u00e9\u00e9de afvalberg van \u00e9\u00e9n mijn, opgeworpen in nog geen twintig jaar.",
      verbindingen: [
        { id: "domaniale", relatie: "het afval van deze mijn" },
        { id: "steenberg", relatie: "de andere steenberg van dezelfde mijn" },
        { id: "schacht-nulland", relatie: "vlakbij, waar het gesteente bovenkwam" }
      ],
      bronnen: [
        { titel: "Steenberg Ham \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Steenberg_Ham" }
      ]
    },

    {
      id: "brugmolen",
      jaar: 1400, jaar_circa: true,
      niveau: 3,
      naam: "Brugmolen",
      ondertitel: "Watermolen \u00b7 circa 1400 \u00b7 Anstelerbeek",
      coord: [50.869178, 6.055069],
      coord_bron: "wikidata",
      themas: ["water"],
      roem: 10, verhaal: 70, esthetiek: 70,
      afbeelding: "Kerkrade-Brugmolen.JPG",
      bijschrift: "De Brugmolen aan de Anstelerbeek.",
      glance: "Een korenmolen uit omstreeks 1400 \u2014 vijfhonderd jaar lang de energiebron van dit dal, tot de kolen kwamen.",
      waarom_hier: "De Anstelerbeek heeft in dit dal genoeg verval voor een bovenslagrad: water dat van bovenaf op het rad valt levert meer kracht dan water dat er onderdoor stroomt.",
      verhaal_tekst: "Rond 1400 gebouwd als bovenslagmolen, met houten gangwerk en twee maalstenen, en het hele bestaan lang een korenmolen. In 1890 kreeg het rad nieuwe onderdelen; na 1937 werd het rad met gangwerk vervangen door een turbine. Eind jaren veertig stopte het malen en werd het maalwerk grotendeels verwijderd. De volgorde is veelzeggend: het water dreef dit dal aan tot de steenkool het overnam, en toen de kolen in 1969 weggingen kwam het water niet terug. Twee energiebronnen die deze stad hebben gedragen liggen nu allebei stil, een paar honderd meter uit elkaar.",
      let_hierop: "Zoek waar het water werd opgestuwd. Een bovenslagmolen heeft een aanvoergoot b\u00f3ven het rad nodig, en dat vraagt om een dam of leiwerk stroomopwaarts.",
      verbindingen: [
        { id: "anstelvallei", relatie: "de beek die hem aandreef" },
        { id: "erenstein", relatie: "hetzelfde dal, dezelfde beek" },
        { id: "domaniale", relatie: "de energiebron die het overnam" }
      ],
      bronnen: [
        { titel: "Brugmolen \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Brugmolen" },
        { titel: "Anstelvallei \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Anstelvallei" }
      ]
    },

    {
      id: "anstelvallei",
      niveau: 2,
      naam: "Anstelvallei",
      ondertitel: "Beekdal van de Anstelerbeek",
      coord: [50.873020, 6.054390],
      coord_bron: "wikidata",
      themas: ["water", "romeins"],
      roem: 20, verhaal: 72, esthetiek: 80,
      afbeelding: "Kerkrade - Anstelvallei 4.jpg",
      bijschrift: "De Anstelvallei.",
      glance: "Het groene dal waar tweeduizend jaar Kerkrade zich aan \u00e9\u00e9n beek heeft opgehangen.",
      waarom_hier: "Een beek met verval, steile hellingen en vruchtbare grond. Dat is de reden dat mensen hier neerstreken, en het is elke eeuw opnieuw dezelfde reden geweest.",
      verhaal_tekst: "In dit ene dal liggen: twee Romeinse villaterreinen op de hellingen, Kaalheide en Nieuw Ehrenstein. Twee watermolens, de Hammolen en de Brugmolen. Kasteel Erenstein, met de hoeves Nieuw Erenstein en Klarenanstel. Een stuwmeer, de Cranenweyer. En bovenop de flanken hellingbos dat als natuurgebied beschermd is. Van Romeinse boer tot middeleeuwse molenaar tot negentiende-eeuwse landheer koos iedereen dezelfde helling, om dezelfde reden. Daarmee is dit dal de langste doorlopende lijn in de geschiedenis van deze stad \u2014 langer nog dan de steenkool, die het maar anderhalve eeuw volhield als hoofdrolspeler.",
      let_hierop: "Kijk naar welke kant de hellingen op liggen. De oude bebouwing zit op het zuiden: warmer, en het groeit er beter.",
      praktisch: "Wandelgebied. GaiaZOO en Park Gravenrode liggen in hetzelfde dal.",
      verbindingen: [
        { id: "brugmolen", relatie: "de molen in dit dal" },
        { id: "erenstein", relatie: "het kasteel in dit dal" },
        { id: "romeins-kerkrade", relatie: "twee villaterreinen op deze hellingen" },
        { id: "cranenweyer", relatie: "het stuwmeer bovenin" }
      ],
      bronnen: [
        { titel: "Anstelvallei \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Anstelvallei" }
      ]
    },

    {
      id: "cranenweyer",
      niveau: 3,
      naam: "Cranenweyer",
      ondertitel: "Stuwmeer in de Anstelvallei",
      coord: [50.880351, 6.052379],
      coord_bron: "osm",
      themas: ["water"],
      roem: 14, verhaal: 40, esthetiek: 74,
      afbeelding: "Kerkrade-Cranenweyer (2).jpg",
      bijschrift: "De Cranenweyer.",
      glance: "Het stuwmeer bovenin het dal \u2014 water dat hier wordt vastgehouden in plaats van doorgelaten.",
      waarom_hier: "Bovenin een beekdal met verval is een stuwmeer de logische plek: het vangt piekafvoer op en houdt het dal beneden beheersbaar.",
      verhaal_tekst: "Dit is bewust een dunne kaart. De geraadpleegde open bronnen geven van de Cranenweyer weinig meer dan de ligging en het type. Wat je er wel bij mag denken \u2014 en dat is duiding, geen feit \u2014 is dat waterbeheer in dit dal een doorlopend thema is. Molenaars stuwden water op om hun rad te laten draaien; een stuwmeer houdt het tegen om benedenstrooms droge voeten te houden. Zelfde water, tegengestelde bedoeling, zeshonderd jaar ertussen.",
      let_hierop: "Vergelijk de waterstand hier met de Anstelerbeek verderop in het dal.",
      onbevestigd: "Aanlegjaar, beheerder en de precieze functie zijn niet geverifieerd en daarom weggelaten.",
      verbindingen: [
        { id: "anstelvallei", relatie: "bovenin hetzelfde dal" },
        { id: "brugmolen", relatie: "hetzelfde water, andere bedoeling" }
      ],
      bronnen: [
        { titel: "Cranenweyer \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Cranenweyer" }
      ]
    },

    {
      id: "theater-kerkrade",
      jaar: 1978,
      niveau: 3,
      naam: "Theater Kerkrade",
      ondertitel: "Theatergebouw \u00b7 1978",
      coord: [50.866134, 6.062231],
      coord_bron: "osm",
      themas: ["muziek"],
      roem: 22, verhaal: 46, esthetiek: 58,
      afbeelding: "Grote zaal Kerkrade.jpg",
      bijschrift: "De grote zaal.",
      glance: "Een volwaardig theater in een stad van vijfenveertigduizend inwoners.",
      waarom_hier: "Kerkrade heeft voor zijn omvang veel zaalcapaciteit. Dat hangt samen met het Wereld Muziek Concours, dat hier sinds 1951 elke vier jaar duizenden muzikanten naartoe brengt.",
      verhaal_tekst: "Het theater opende in 1978, negen jaar na de sluiting van de laatste mijn. Die twee gebeurtenissen naast elkaar leggen is verleidelijk, maar de bronnen leggen dat verband niet, dus doen wij het ook niet. Wat wel vaststaat is de uitkomst: een stad die haar economische bestaansgrond verloor, houdt een culturele infrastructuur over die groter is dan haar inwonertal doet vermoeden. Het theater, de Rodahal en de Markt met d\u2019r Joep liggen binnen vijf minuten lopen van elkaar.",
      let_hierop: "Loop van hier naar de Markt en tel de zalen die je passeert. Voor vijfenveertigduizend inwoners is dat veel.",
      onbevestigd: "Een direct verband tussen de mijnsluiting en de bouw van dit theater is in de geraadpleegde bronnen niet vastgesteld.",
      verbindingen: [
        { id: "wmc", relatie: "waarom deze stad zoveel zaalruimte heeft" },
        { id: "rodahal", relatie: "de andere grote zaal, om de hoek" },
        { id: "joep", relatie: "vijf minuten lopen" }
      ],
      bronnen: [
        { titel: "Theater Kerkrade \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Theater_Kerkrade" },
        { titel: "Wereld Muziek Concours \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Wereld_Muziek_Concours" }
      ]
    },

    {
      id: "hamboskapel",
      jaar: 1937,
      niveau: 3,
      naam: "Hamboskapel",
      ondertitel: "Kapel \u00b7 1937",
      coord: [50.859410, 6.055910],
      coord_bron: "wikidata",
      themas: ["rolduc"],
      roem: 9, verhaal: 54, esthetiek: 68,
      afbeelding: "Kerkrade - Hamboskapel.jpg",
      bijschrift: "De Hamboskapel.",
      glance: "\u00c9\u00e9n van de vele kleine kapellen die Kerkrade rijk is \u2014 en dat aantal is zelf het verhaal.",
      waarom_hier: "Kapellen staan zelden willekeurig: ze markeren een pad, een grens, of een plek waar iets is gebeurd.",
      verhaal_tekst: "Kerkrade telt opvallend veel kleine kapellen: de Hamboskapel uit 1937, de Mariakapel uit 1850, de Pi\u00ebtakapel uit 1919, de Onze-Lieve-Vrouw-van-Lourdeskapel uit 1946, de Kerkhofkapel bij Rolduc uit 1875, de Koningin van de Vredekapel uit 1964. Bijna allemaal uit de periode 1850\u20131950 \u2014 precies de eeuw waarin de mijnbouw de bevolking deed exploderen. Een kapel is klein en betaalbaar, een kerk niet. Het is de bouwvorm van een gemeenschap die snel groeit en nog geen geld heeft. De dichtheid aan kapellen is daarmee een kaart van waar de mijnwerkers gingen wonen.",
      let_hierop: "Kijk of er verse bloemen staan. Het verschil tussen een monument en iets wat nog in gebruik is, zie je niet aan het gebouw.",
      onbevestigd: "Stichter, aanleiding en de precieze devotie van d\u00e9ze kapel zijn niet geverifieerd. Het verband tussen de kapellendichtheid en de mijnbouwgroei is duiding op basis van de bouwjaren, geen bronclaim.",
      verbindingen: [
        { id: "lambertuskerk", relatie: "de parochiekerk waar dit onder viel" },
        { id: "domaniale", relatie: "de bevolkingsgroei die dit verklaart" }
      ],
      bronnen: [
        { titel: "Hamboskapel \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Hamboskapel" }
      ]
    },
    {
      id: "joep",
      jaar: 1957,
      niveau: 1,
      naam: "D'r Joep",
      ondertitel: "Nationaal mijnwerkersmonument · 1957",
      coord: [50.865170, 6.062456],   // OSM node, geverifieerd 01-09-2026
      coord_bron: "osm",
      themas: ["mijnbouw"],
      roem: 35, verhaal: 82, esthetiek: 88,
      afbeelding: "Kerkrade-Markt.jpg",
      bijschrift: "De Markt in Kerkrade. Van het beeld zelf bestaat geen vrij te gebruiken foto — zie de opmerking onderaan.",
      glance: "Een bronzen mijnwerker op de Markt — het nationale monument voor alle Nederlandse mijnwerkers.",
      waarom_hier: "Kerkrade is de plek waar de Nederlandse steenkoolwinning begon. Het monument staat daarom niet in Heerlen of Den Haag, maar hier, midden op de Markt van de stad waar de oudste mijn van het land lag.",
      verhaal_tekst: "In 1939 vat Jean Hermans uit Kerkrade een plan op. Zijn vader is omgekomen bij een mijnongeval, en er moet volgens hem een monument komen voor de mijnwerkers. Geen gemeente die dit bedenkt, geen mijndirectie. \u00c9\u00e9n man.\n\nHet duurt achttien jaar.\n\nOp 16 juni 1957 staat het er: brons, van beeldhouwer Wim van Hoorn. Gouverneur Frans Houben trekt het doek weg en zegt, in dialect: \u201eDoa sjteet d\u2019r Joep, inne echte k\u00f6aler!\u201d Daar staat d\u2019r Joep, een echte kolenhouwer.\n\nZo kwam het beeld aan zijn naam \u2014 niet van de maker, niet van de opdrachtgever, maar van een opmerking die iemand er ter plekke uitgooide. Offici\u00eeel heet het De Mijnwerker. Dat zegt niemand.",
      let_hierop: "De naam is er dus pas op de dag van de onthulling bijgekomen. Officieel heet het monument gewoon 'De Mijnwerker'; iedereen zegt d'r Joep.",
      praktisch: "Vrij toegankelijk, midden op de Markt.",
      onbevestigd: "Van het beeld zelf is geen vrij gelicentieerde foto beschikbaar op Wikimedia Commons — wel bestaat er een Polygoon-bioscoopjournaal van de onthulling in 1957.",
      verbindingen: [
        { id: "domaniale", relatie: "herdenkt het werk in deze mijn" },
        { id: "schacht-nulland", relatie: "het enige gebouw dat van die mijn overbleef" },
        { id: "rolduc", relatie: "waar de kolenwinning in 1113 begon" }
      ],
      bronnen: [
        { titel: "D'r Joep — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/D%27r_Joep" },
        { titel: "D'r Joep — Gemeente Kerkrade", url: "https://www.kerkrade.nl/dr-joep" },
        { titel: "Kerkrade — D'r Joep of De Mijnwerker — vanderkrogt.net", url: "https://www.vanderkrogt.net/standbeelden/object.php?record=LI13aa" }
      ]
    },

    {
      id: "schacht-nulland",
      jaar: 1907,
      niveau: 2,
      naam: "Schacht Nulland",
      ondertitel: "Schachtgebouw Domaniale Mijn · 1907 · rijksmonument 23558",
      coord: [50.85969, 6.06495],
      coord_bron: "wikidata",
      themas: ["mijnbouw"],
      roem: 18, verhaal: 74, esthetiek: 80,
      afbeelding: "Schacht Nulland Kerkrade.jpg",
      bijschrift: "Schacht Nulland, Domaniale Mijnstraat 30.",
      glance: "Het laatste overeind staande schachtgebouw van de oudste steenkoolmijn van Nederland.",
      waarom_hier: "Hier zat een van de schachten van de Domaniale Mijn. Toen de mijn in 1969 sloot werd vrijwel alles gesloopt; dit gebouw bleef staan.",
      verhaal_tekst: "In 1907 liet de Aken-Maastrichtsche Spoorweg-Maatschappij hier een luchtschacht aanleggen: 349 meter recht de grond in, met daarboven een ronde bakstenen toren. Ventilatie klinkt bijzaak, maar zonder werkende luchtstroom kon er ondergronds niemand ademen — een mijn valt stil zodra de schacht dat niet meer doet. In 1921 werd het gebouw verbouwd zodat er ook mensen en kolen door konden. Na de sluiting kwam de sloopkogel langs bij bijna alles wat aan de mijnen herinnerde. Dat dit gebouw er nog staat, is het werk van oud-mijnwerkers zelf: de stichting 'De Koempels van de Domaniale' knapte het op en maakte er een museum van. Sinds 2006 is het een vestiging van Discovery Center Continium.",
      let_hierop: "Kijk naar de ronde vorm van de centrale toren. Die is er niet voor de sier — een cilinder is de sterkste vorm om de trekkrachten van een 349 meter diepe schacht op te vangen.",
      praktisch: "Domaniale Mijnstraat 30, 6462 HA Kerkrade. Museum, zie schachtnulland.nl voor openingstijden.",
      verbindingen: [
        { id: "domaniale", relatie: "hoorde bij deze mijn" },
        { id: "joep", relatie: "het monument voor de mensen die hier werkten" },
        { id: "steenberg", relatie: "hetzelfde gesteente kwam hier boven" }
      ],
      bronnen: [
        { titel: "Schachtgebouw van de Kerkraadse mijnen — Rijksmonumenten.nl (23558)", url: "https://rijksmonumenten.nl/monument/23558/schachtgebouw-van-de-kerkraadse-mijnen/kerkrade/" },
        { titel: "Schacht Nulland — officiële site", url: "https://schachtnulland.nl/" },
        { titel: "Schacht Nulland — Open Monumentendag", url: "https://www.openmonumentendag.nl/monument/schacht-nulland/" }
      ]
    },

    {
      id: "nieuwstraat",
      jaar: 1816,
      niveau: 1,
      naam: "Nieuwstraat / Neustraße",
      ondertitel: "Grensstraat Kerkrade–Herzogenrath · sinds 1816",
      coord: [50.858089, 6.076498],  // OSM way 6735722 (middenpunt segment)
      coord_bron: "osm",
      themas: ["grens"],
      roem: 22, verhaal: 95, esthetiek: 55,
      afbeelding: "Hildegard Eschen bij de grensovergang in de Nieuwstraat in Kerkrade, Bestanddeelnr 252-0216.jpg",
      bijschrift: "De grensovergang in de Nieuwstraat (persfoto, Anefo).",
      glance: "Een gewone straat van twee kilometer waar de landsgrens precies door het midden loopt.",
      waarom_hier: "Bij het Congres van Wenen werden de Europese grenzen opnieuw getrokken. Bij het Verdrag van Aken van 26 juni 1816 werd voor dit bestraatte stuk een uitzondering gemaakt: de grens zou niet om de bebouwing heen lopen, maar er middendoor.",
      verhaal_tekst: "Aan de ene kant van de straat woon je in Nederland, aan de overkant in Duitsland. Twee gemeenten, twee talen, twee rechtssystemen, één stoep. Dat ging tweehonderd jaar met horten en stoten, maar in 1968 werd het letterlijk gemaakt: er kwam een muurtje van baksteen, twee kilometer lang, dwars door de straat. Buren die elkaar al generaties kenden, keken over een muur naar elkaars voordeur. Pas in 1994 ging hij neer — vijf jaar ná de Berlijnse muur, waardoor dit muurtje bekend kwam te staan als 'de laatste muur van Europa'. Een jaar later heropende de straat als gedeelde, Europese straat.",
      let_hierop: "Kijk naar het wegdek. De grens is als lijn in de bestrating gemarkeerd — je kunt er met één stap overheen.",
      verbindingen: [
        { id: "raf", relatie: "hier gebeurde dat, in 1978" },
        { id: "eurode", relatie: "een gebouw dat de grens juist opzoekt" }
      ],
      bronnen: [
        { titel: "Nieuwstraat (Kerkrade) — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Nieuwstraat_(Kerkrade)" },
        { titel: "Neustraße/Nieuwstraat — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Neustra%C3%9Fe/Nieuwstraat_(Herzogenrath/Kerkrade)" },
        { titel: "25 jaar Nieuwstraat — Geboorte van Nederland", url: "https://geboortevannederland.nl/kalender_2022/25-jaar-nieuwstraat/" }
      ]
    },

    {
      id: "raf",
      jaar: 1978,
      niveau: 2,
      naam: "Gedenksteen 1 november 1978",
      ondertitel: "Aanslag Rote Armee Fraktion · gedenkteken 2003",
      coord: [50.85481, 6.07592],
      coord_bron: "wikidata",
      themas: ["grens"],
      roem: 12, verhaal: 93, esthetiek: 42,
      afbeelding: "NieuwstraatRAF2.jpg",
      bijschrift: "De plek in de Nieuwstraat waar het gebeurde.",
      glance: "Hier werden in 1978 twee Nederlandse douaniers doodgeschoten door leden van de Rote Armee Fraktion.",
      waarom_hier: "Op deze hoek van de Nieuwstraat en de Kokelestraat hielden vier douaniers een man aan die de grens overstak. De gedenksteen staat precies op die plek en werd op 1 november 2003 onthuld, vijfentwintig jaar na de aanslag.",
      verhaal_tekst: "Het was een routinecontrole. De man riep tweemaal „Aber warum denn!”, trok een revolver en schoot. Een vrouw kwam tevoorschijn met een machinepistool verstopt in een boeket bloemen en opende eveneens het vuur. Er vielen zevenentwintig schoten. Douanier Dyon de Jong (1959) was ter plaatse dood; Jan Goemans (1954) overleed veertien dagen later in het ziekenhuis. Twee collega's overleefden het, van wie één licht gewond. De daders vluchtten in een gekaapte broodbezorgwagen. Het bleken RAF-leden Rolf Heissler en Adelheid Schulz. Beiden kregen levenslang; beiden werden later vrijgelaten. Dat de Duitse stadsguerrilla ook hier neersloeg, op een stoep in Kerkrade, is buiten de regio vrijwel onbekend.",
      let_hierop: "De steen staat op ooghoogte van iemand die stilstaat, niet van iemand die voorbijloopt. Dat is bewust.",
      verbindingen: [
        { id: "nieuwstraat", relatie: "dezelfde straat, de grens als decor" }
      ],
      bronnen: [
        { titel: "Schietincident met Rote Armee Fraktion in Kerkrade — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Schietincident_met_Rote_Armee_Fraktion_in_Kerkrade" }
      ]
    },

    {
      id: "rolduc",
      jaar: 1104,
      niveau: 1,
      naam: "Abdij Rolduc",
      ondertitel: "Kloostercomplex · gesticht 1104 · rijksmonument",
      coord: [50.868226, 6.081674],  // OSM, geverifieerd 01-09-2026 (was 50 m mis)
      coord_bron: "osm",
      themas: ["rolduc", "mijnbouw"],
      roem: 48, verhaal: 88, esthetiek: 92,
      afbeelding: "2012 Abdij Rolduc (1).jpg",
      bijschrift: "Het abdijcomplex Rolduc.",
      glance: "Het grootste abdijcomplex van Nederland — en de plek waar de Europese kolenwinning voor het eerst op papier staat.",
      waarom_hier: "Ailbertus van Antoing stichtte hier in 1104 met zijn twee broers een klooster. In 1106 legde hij samen met Embrico van Mayschoß de fundamenten van de kloosterkerk. De abdij heette toen Kloosterrade, naar '-rode': ontgonnen plaats.",
      verhaal_tekst: "De romaanse crypte was al in 1108 klaar en staat er nog. Daarboven groeide in achthonderd jaar een complex met een E-vormige plattegrond: romaanse kerk, barokke vleugels uit de zeventiende en achttiende eeuw, twintigste-eeuwse seminariegebouwen. Maar het opvallendste aan Rolduc staat niet in de architectuurgids. In de abdijregisters van 1113 duikt het woord 'kalculen' op — kolenkuilen. Dat is de oudste bekende vermelding van steenkoolwinning in Europa. De monniken groeven brandstof uit hun eigen grond, en vanaf 1742 exploiteerde de abdij de mijn zelf; in 1766 verleende Maria Theresia er een concessie voor. Alles wat Kerkrade daarna werd — mijnstad, koempels, d'r Joep op de Markt — begint bij een aantekening van een monnik.",
      let_hierop: "In 1895 werd het gebeente van stichter Ailbertus plechtig in een rijk versierde sarcofaag in de crypte bijgezet. Onderzoek in 1996 wees uit dat het om laatmiddeleeuwse skeletten gaat — iemand anders dus.",
      praktisch: "Heyendallaan 82. Deels hotel en congrescentrum (tot 300 gasten), deels Grootseminarie Rolduc.",
      verbindingen: [
        { id: "domaniale", relatie: "de abdij begon en bezat de mijn" },
        { id: "joep", relatie: "het eindpunt van wat hier in 1113 begon" },
        { id: "romeins-kerkrade", relatie: "op dezelfde helling, duizend jaar eerder" }
      ],
      bronnen: [
        { titel: "Abdij Rolduc — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Abdij_Rolduc" },
        { titel: "Rolduc — Rijksmonumenten.nl", url: "https://rijksmonumenten.nl/monumenten/rolduc-kerkrade/" }
      ]
    },

    {
      id: "eurode",
      niveau: 2,
      naam: "Eurode Business Center",
      ondertitel: "Gebouw op twee grondgebieden",
      coord: [50.862260, 6.081307],  // OSM, geverifieerd 01-09-2026 (was 39 m mis)
      coord_bron: "osm",
      themas: ["grens"],
      roem: 15, verhaal: 68, esthetiek: 58,
      afbeelding: "Eurode-Business-Center.jpg",
      bijschrift: "Het Eurode Business Center.",
      glance: "Een kantoorgebouw dat opzettelijk half in Nederland en half in Duitsland staat.",
      waarom_hier: "Waar tweehonderd jaar lang een grens dwars door de bebouwing liep, en van 1968 tot 1994 zelfs een muur, staat nu een gebouw dat die lijn juist opzoekt in plaats van vermijdt.",
      verhaal_tekst: "Kerkrade en Herzogenrath werken samen onder de naam Eurode. Dit gebouw is daar de fysieke uitdrukking van: het staat op Nederlands én Duits grondgebied tegelijk. Waar elders een grens een gebouw onmogelijk maakt — welk bouwbesluit, welke belastingdienst, welke brandweer — is hier precies dat het punt.",
      let_hierop: "Zoek de grenslijn in of bij het gebouw. Hij is er, en hij is aangegeven.",
      verbindingen: [
        { id: "nieuwstraat", relatie: "dezelfde grens, andere houding" }
      ],
      bronnen: [
        { titel: "Eurode Business Center — Wikidata (Q1374940)", url: "https://www.wikidata.org/wiki/Q1374940" }
      ]
    },

    {
      id: "erenstein",
      niveau: 2,
      naam: "Kasteel Erenstein",
      ondertitel: "Kasteel · rijksmonument 23552",
      coord: [50.871405, 6.054805],  // OSM/Nominatim, geverifieerd 01-09-2026
      coord_bron: "osm",
      themas: ["rolduc"],
      roem: 25, verhaal: 30, esthetiek: 78,
      afbeelding: "Amstelbach 14 Amstelbach an der Burg Erenstein Kerkrade.jpg",
      bijschrift: "Kasteel Erenstein aan het water.",
      glance: "Een kasteel in het dal van de Anstel, aangewezen als rijksmonument.",
      waarom_hier: "Het kasteel ligt in de Anstelvallei, aan het water — de plek waar in dit landschap eeuwenlang macht en molens samenkwamen.",
      verhaal_tekst: "Dit is bewust een dúnne kaart. In de open bronnen die voor deze proef zijn geraadpleegd staat van Erenstein weinig meer dan de monumentstatus en de ligging. Een rijke tekst zou hier verzonnen moeten worden, en dat is precies wat deze app niet doet. Zo ziet een object eruit waarvan de bron nog niet is opgehaald: hij staat op de kaart, hij is eerlijk, en hij is nog niet af.",
      let_hierop: "Vergelijk deze kaart met die van Rolduc of de Nieuwstraat. Dat verschil is geen kwaliteitsverschil in het object — het is een verschil in beschikbare bron.",
      onbevestigd: "Huidige functie, bouwgeschiedenis en eigenaren zijn niet geverifieerd en daarom weggelaten.",
      verbindingen: [
        { id: "anstelvallei", relatie: "het dal waarin het ligt" },
        { id: "brugmolen", relatie: "dezelfde beek, andere eeuw" },
        { id: "romeins-kerkrade", relatie: "vlakbij, en veel ouder" }
      ],
      bronnen: [
        { titel: "Kasteel Erenstein — Wikidata (Q1735307), rijksmonument 23552", url: "https://www.wikidata.org/wiki/Q1735307" }
      ]
    },



    {
      id: "rodahal",
      niveau: 3,
      naam: "Rodahal",
      ondertitel: "Concertgebouw en evenementenhal",
      coord: [50.867882, 6.062513],
      coord_bron: "wikidata",
      themas: ["muziek"],
      roem: 30, verhaal: 35, esthetiek: 60,
      afbeelding: "RodahalKerkrade.jpg",
      bijschrift: "De Rodahal.",
      glance: "De grote zaal van Kerkrade, op loopafstand van de Markt.",
      waarom_hier: "Kerkrade is de vaste thuisstad van het Wereld Muziek Concours, en heeft daardoor voor zijn omvang veel zaalcapaciteit.",
      verhaal_tekst: "Een stad van vijfenveertigduizend inwoners met een concertgebouw van dit formaat is niet vanzelfsprekend. De verklaring ligt bij het WMC — zie het gebiedsverhaal daarover.",
      onbevestigd: "Of de Rodahal zelf een rol speelt in het WMC is in de geraadpleegde bronnen niet bevestigd; het marswedstrijdgedeelte vindt plaats in het stadion.",
      verbindingen: [
        { id: "joep", relatie: "vijf minuten lopen, zelfde centrum" }
      ],
      bronnen: [
        { titel: "Rodahal — Wikidata (Q2328646)", url: "https://www.wikidata.org/wiki/Q2328646" }
      ]
    },

    {
      id: "steenberg",
      jaar: 1950, jaar_circa: true,
      niveau: 3,
      naam: "Steenberg Beerenbosch",
      ondertitel: "Mijnsteenberg",
      coord: [50.875472, 6.076247],
      coord_bron: "wikidata",
      themas: ["mijnbouw"],
      roem: 8, verhaal: 58, esthetiek: 65,
      afbeelding: null,
      glance: "Een heuvel die er niet was: opgeworpen uit het gesteente dat met de kolen mee naar boven kwam.",
      waarom_hier: "Voor elke ton kolen kwam er ook waardeloos gesteente uit de schacht. Dat moest ergens heen, en het ging op een hoop naast de mijn.",
      verhaal_tekst: "Een steenberg is het enige stuk mijnbouw dat je niet kunt slopen — je kunt hem hooguit beplanten. Dat is precies wat er in de mijnstreek gebeurd is: waar vroeger een grijze afvalberg lag, staat nu bos. De heuvel zelf is echter geen natuurlijk landschap maar mensenwerk, van onderop opgestapeld in de jaren dat de mijnen draaiden.",
      let_hierop: "Kijk naar de vorm van de helling. Een natuurlijke heuvel in dit landschap loopt geleidelijk; een steenberg heeft de te regelmatige flank van een stortkegel.",
      onbevestigd: "Bij welke mijn deze steenberg precies hoorde en in welke jaren hij is opgeworpen, is in de geraadpleegde bronnen niet vastgesteld.",
      verbindingen: [
        { id: "domaniale", relatie: "het afval van de mijnbouw" },
        { id: "schacht-nulland", relatie: "hetzelfde gesteente, andere kant" }
      ],
      bronnen: [
        { titel: "Steenberg Beerenbosch — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Steenberg_Beerenbosch" }
      ]
    }
  ],

  /* Objecten met esthetiek < 35: geen pin, wel verhaal.
     Dit is de routeringsregel in werking. */
  gebiedsverhalen: [
    {
      id: "drie-rodes",
      jaar: 1104,
      naam: "Rode, Rode en Rode",
      ondertitel: "Waarom drie plaatsen dezelfde naam dragen",
      themas: ["rolduc", "grens"],
      roem: 12, verhaal: 92, esthetiek: 0,
      afbeelding: null,
      glance: "Kerkrade, Herzogenrath en Rolduc zijn drie namen voor \u00e9\u00e9n middeleeuwse ontginning \u2014 nu verdeeld over twee landen.",
      waarom_geen_pin: "Esthetiek 0. Een naam heeft geen gevel. Dit verhaal hoort bij het hele gebied, want het verklaart de plaatsnamen aan beide kanten van de grens.",
      verhaal_tekst: "Rode betekent ontginning: bos dat is gerooid om er te kunnen wonen. Rond 1100 wordt hier zulk land ontgonnen, en binnen \u00e9\u00e9n jaar staan er twee dingen. In 1104 sticht Ailbertus van Antoing een klooster. In datzelfde jaar duikt in de administratie een burcht op. Daarna splitst \u00e9\u00e9n naam zich in drie. De nederzetting bij de burcht heet in 1282 \u2019s-Hertogenrode, de ontginning van de hertog \u2014 dat werd Herzogenrath. De nederzetting bij de parochiekerk werd Kerk-rade. En het klooster ging in het Frans door het leven als Rode-le-Duc, verbasterd tot Rolduc. Drie namen, \u00e9\u00e9n bos. In 1815 trok het Congres van Wenen er een landsgrens doorheen, en sindsdien ligt \u00e9\u00e9n van de drie in een ander land.",
      verbindingen: [
        { id: "burg-rode", relatie: "de burcht van de hertog" },
        { id: "lambertuskerk", relatie: "de kerk van Kerk-rade" },
        { id: "rolduc", relatie: "Rode-le-Duc" },
        { id: "nieuwstraat", relatie: "de grens die er in 1815 doorheen kwam" }
      ],
      bronnen: [
        { titel: "Burg Rode \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Burg_Rode" },
        { titel: "Abdij Rolduc \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Abdij_Rolduc" },
        { titel: "Sint-Lambertuskerk (Kerkrade) \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Sint-Lambertuskerk_(Kerkrade)" }
      ]
    },
    {
      id: "andere-mijnen",
      jaar: 1852,
      naam: "De andere mijnen",
      ondertitel: "Neuprick, Hammijn, Voccart",
      themas: ["mijnbouw"],
      roem: 8, verhaal: 74, esthetiek: 6,
      afbeelding: "Concessies Neuprick Domaniale.png",
      bijschrift: "Kaart van de concessies Neuprick en Domaniale.",
      glance: "De Domaniale was niet de enige \u2014 onder Kerkrade lagen meerdere mijnen, en van de meeste is niets over.",
      waarom_geen_pin: "Esthetiek 6. Van Neuprick resteert een straatnaam, een parkje en een gedenkplaat. Een pin zou je naar een woonwijk sturen.",
      verhaal_tekst: "Neuprick, in Bleijerheide, is het scherpste voorbeeld. Er werd al vanaf 1645 kolen gehaald, maar als bedrijf draaide de mijn van 1852 tot 1 september 1904: ruim vijftig jaar, \u00e9\u00e9n schacht \u2014 de Catharina, 235 meter diep \u2014 en in totaal 1,484 miljoen ton kolen. Hij ging dicht door uitputting en door zeer grote wateroverlast: het grondwater won. Eigenaar was het Duitse Pannesheider Bergwerksverein, met een Nederlandse maatschappij als exploitant. Wat er nu nog van is: de straatnaam Pricksteenweg, het Prickbos waar de contouren van de gebouwen in het maaiveld zichtbaar zijn gebleven, en een gedenkplaat op de plek waar de Catharinaschacht stond.",
      verbindingen: [
        { id: "domaniale", relatie: "de grote buur" },
        { id: "steenberg-ham", relatie: "wat mijnbouw achterlaat" }
      ],
      bronnen: [
        { titel: "Neuprick \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Neuprick" },
        { titel: "Domaniale mijn \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Domaniale_mijn" }
      ]
    },
    {
      id: "romeins-kerkrade",
      jaar: 150, jaar_circa: true,
      naam: "De Romeinse villa's",
      ondertitel: "Drie villaterreinen in één gemeente",
      themas: ["romeins"],
      roem: 6, verhaal: 62, esthetiek: 18,
      afbeelding: "Kaalheide - Villa rustica Krichelstraat.jpg",
      bijschrift: "Villa rustica aan de Krichelstraat, Kaalheide.",
      glance: "Onder Kerkrade liggen drie Romeinse boerderijterreinen — en bovengronds is er vrijwel niets van te zien.",
      waarom_geen_pin: "Esthetiek 18 van 100. Het zijn funderingen in de bodem. Een pin zou je naar een weiland of een woonwijk sturen; het verhaal hoort bij het gebied.",
      verhaal_tekst: "Binnen de gemeentegrenzen van Kerkrade zijn drie Romeinse villaterreinen bekend: bij Rolduc, bij Nieuw Ehrenstein en bij Kaalheide. Dat laatste is als archeologisch rijksmonument beschermd — een merkwaardig soort monument, want de bescherming betekent vooral dat er niet in gegraven mag worden. Drie villa's in één gemeente is veel. Het zegt dat dit gebied in de Romeinse tijd geen rand van het rijk was maar landbouwgrond die de moeite waard was: zuidhellingen, lössgrond en beken. Precies dezelfde eigenschappen waarom de monniken van Rolduc hier duizend jaar later hun klooster neerzetten.",
      verbindingen: [
        { id: "rolduc", relatie: "dezelfde helling, duizend jaar later" },
        { id: "erenstein", relatie: "één van de villaterreinen ligt vlakbij" }
      ],
      bronnen: [
        { titel: "Romeinse villa Rolduc — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Romeinse_villa_Rolduc" },
        { titel: "Romeinse villa Nieuw Ehrenstein — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Romeinse_villa_Nieuw_Ehrenstein" },
        { titel: "Romeinse villa Kaalheide — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Romeinse_villa_Kaalheide" }
      ]
    },
    {
      id: "domaniale",
      jaar: 1113,
      naam: "De Domaniale mijn",
      ondertitel: "1113 – 1969 · de oudste van Nederland",
      themas: ["mijnbouw", "rolduc"],
      roem: 40, verhaal: 90, esthetiek: 8,
      afbeelding: "Concessies Neuprick Domaniale.png",
      bijschrift: "Kaart van de concessies Neuprick en Domaniale.",
      glance: "De oudste steenkoolmijn van Nederland lag onder deze stad — en er is bovengronds vrijwel niets meer van te zien.",
      waarom_geen_pin: "Esthetiek 8 van 100. Er staat niets. Een pin zou je naar een parkeerplaats sturen. Het verhaal hoort daarom bij het gebied, niet bij een punt.",
      verhaal_tekst: "In 1113 noteert iemand in de registers van de abdij Rolduc het woord 'kalculen' — kolenkuilen. Het is de oudste bekende vermelding van steenkoolwinning in Europa, en hij komt uit Kerkrade. Wat als kuilen begon, werd achthonderd jaar later de Domaniale Mijn: in 1958 werkten hier ongeveer drieduizend mensen. Het eigendom verschoof met de geschiedenis mee — de abdij tot 1645, de familie Prick uit Aken in pacht, de abdij weer vanaf 1742, de Fransen als 'Mines Domaniales', en na het Congres van Wenen in 1815 de Nederlandse staat. Op 29 augustus 1969 stopte de productie. Daarna verdween het bijna volledig. Wat rest is één schachtgebouw, een klein monument bij de vroegere schacht aan de Baamstraat, een heuvel van afvalgesteente, en een bronzen man op de Markt.",
      verbindingen: [
        { id: "rolduc", relatie: "waar het begon" },
        { id: "schacht-nulland", relatie: "wat ervan overbleef" },
        { id: "joep", relatie: "hoe het herdacht wordt" },
        { id: "steenberg", relatie: "wat het achterliet" }
      ],
      bronnen: [
        { titel: "Domaniale mijn — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Domaniale_mijn" }
      ]
    },
    {
      id: "wmc",
      jaar: 1951,
      naam: "Wereld Muziek Concours",
      ondertitel: "Sinds 1951 · elke vier jaar",
      themas: ["muziek"],
      roem: 45, verhaal: 52, esthetiek: 0,
      afbeelding: null,
      glance: "Elke vier jaar verandert deze stad in de wereldhoofdstad van de blaasmuziek.",
      waarom_geen_pin: "Een evenement heeft geen gevel. Het gebeurt op tientallen plekken tegelijk en is 1459 van de 1461 dagen onzichtbaar.",
      verhaal_tekst: "Het WMC wordt sinds 1951 elke vier jaar in Kerkrade gehouden. In 2005 kwamen er ruim negentienduizend muzikanten uit alle delen van de wereld op af, en zo'n zeshonderdvijftigduizend bezoekers — in een stad met een fractie van dat inwonertal. De mars- en showwedstrijden worden in het stadion gehouden. De twintigste editie liep van 9 juli tot 2 augustus 2026.",
      onbevestigd: "Het veelgehoorde verband tussen de mijnwerkersharmonieën en het ontstaan van het WMC is in de geraadpleegde bronnen niet bevestigd. Zolang dat zo is, staat het hier niet als feit.",
      verbindingen: [
        { id: "rodahal", relatie: "de zaal die de stad eraan overhield" }
      ],
      bronnen: [
        { titel: "Wereld Muziek Concours — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Wereld_Muziek_Concours" }
      ]
    }
  ]
};
