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
      label: "Mijnbouw", kleur: "#c2410c", icoon: "\u26cf", schaal: "streek", plaats: "mijnstreek",
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
      label: "De grens", kleur: "#1d4ed8", icoon: "\u2551", schaal: "streek", plaats: "mijnstreek",
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
      label: "Rolduc", kleur: "#7c3aed", icoon: "\u271d", schaal: "stad", plaats: "kerkrade",
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
      label: "Romeins", kleur: "#a16207", icoon: "\u2169", schaal: "streek", plaats: "mijnstreek",
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
      label: "Muziek", kleur: "#059669", icoon: "\u266b", schaal: "stad", plaats: "kerkrade",
      glance: "Elke vier jaar is dit de wereldhoofdstad van de blaasmuziek.",
      verhaal_tekst: "Sinds 1951 wordt het Wereld Muziek Concours elke vier jaar in Kerkrade gehouden. In 2005 kwamen er ruim negentienduizend muzikanten uit alle delen van de wereld op af en zo\u2019n zeshonderdvijftigduizend bezoekers \u2014 in een stad met een fractie van dat inwonertal. De mars- en showwedstrijden worden in het stadion gehouden. De twintigste editie liep van 9 juli tot 2 augustus 2026. Wat de stad eraan overhoudt is zaalruimte: een theater en de Rodahal, binnen vijf minuten lopen van elkaar.",
      onbevestigd: "Het veelgehoorde verband tussen de mijnwerkersharmonie\u00ebn en het ontstaan van het WMC is in de geraadpleegde bronnen niet bevestigd.",
      elders: [],
      bronnen: [
        { titel: "Wereld Muziek Concours \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Wereld_Muziek_Concours" }
      ]
    },
    nakolen: {
      label: "Na de kolen", kleur: "#65a30d", icoon: "\u267b", schaal: "stad", plaats: "kerkrade",
      glance: "Wat een mijnstad bouwde toen de mijnen dichtgingen: een theater, een museum, een stadion, een dierentuin.",
      verhaal_tekst: "Op 29 augustus 1969 stopte de productie in de Domaniale, de laatste Kerkraadse mijn. De streek eromheen zakte in twintig jaar van de hoogste inkomens van het land naar de laagste. Wat Kerkrade daarna bouwde, is af te lezen aan een rij jaartallen. In 1978 opende het theater. In 1995 begon de stoomtrein te rijden over de Miljoenenlijn, een spoorlijn die in 1934 juist v\u00f3\u00f3r de mijnen was aangelegd. In 1998 opende Industrion, een museum over de industriegeschiedenis van de streek, dat inmiddels Discovery Museum heet en over techniek van morgen gaat. In 2000 kreeg Roda JC een nieuw stadion, in 2005 opende GaiaZOO. Alleen het Wereld Muziek Concours was er al: sinds 1951. Vijf grote publiekstrekkers, allemaal van na de kolen \u2014 dat is de tweede stad die op de eerste is gebouwd.",
      elders: [
        { plaats: "Landgraaf", waarom: "de Wilhelminaberg, een steenberg die skihelling werd" }
      ],
      bronnen: [
        { titel: "Domaniale mijn \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Domaniale_mijn" },
        { titel: "Oostelijke Mijnstreek \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Oostelijke_Mijnstreek" },
        { titel: "Theater Kerkrade \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Theater_Kerkrade" },
        { titel: "Discovery Museum \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Discovery_Center_Continium" },
        { titel: "Zuid-Limburgse Stoomtrein Maatschappij \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Zuid-Limburgse_Stoomtrein_Maatschappij" },
        { titel: "Parkstad Limburg Stadion \u2014 Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Parkstad_Limburg_Stadion" },
        { titel: "GaiaZOO \u2014 Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/GaiaZOO" },
        { titel: "Wereld Muziek Concours \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Wereld_Muziek_Concours" }
      ]
    },
    water: {
      label: "Water", kleur: "#0891b2", icoon: "\u2248", schaal: "stad", plaats: "kerkrade",
      glance: "De energiebron v\u00f3\u00f3r de kolen \u2014 en de reden dat mensen hier tweeduizend jaar geleden al gingen wonen.",
      verhaal_tekst: "De Anstelerbeek heeft genoeg verval voor bovenslagmolens, en in het dal liggen er twee: de Hammolen en de Brugmolen, die laatste van omstreeks 1400. Op dezelfde hellingen stonden Romeinse villa\u2019s, en later Kasteel Erenstein. Het water dreef dit dal aan tot de steenkool het overnam; toen de kolen in 1969 verdwenen kwam het water niet terug. Bovenin het dal ligt nu de Cranenweyer, een stuwmeer \u2014 hetzelfde water, maar tegenhouden in plaats van gebruiken.",
      elders: [],
      bronnen: [
        { titel: "Anstelvallei \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Anstelvallei" },
        { titel: "Brugmolen \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Brugmolen" }
      ]
    },

    /* ---- London — thema’s ---- */
    theems: {
      label: "De Theems",
      kleur: "#0d9488",
      icoon: "≈",
      schaal: "stad",
      plaats: "london",
      glance: "De rivier waarom de stad hier ligt: 346 kilometer lang, getij tot Teddington, en rond het jaar 50 al een brug.",
      verhaal_tekst: "De Theems is met 346 kilometer de tweede rivier van het Verenigd Koninkrijk, van Thames Head bij Kemble in Gloucestershire tot het estuarium. Vanaf Teddington Lock is ze getijdenrivier — en juist het getij maakte haar tot handelsweg naar zee. De Romeinen kozen rond 47 de plek waar de rivier voor het laatst te overbruggen was en sloegen er rond 50 een houten brug: [[londinium|Londinium]]. Alles wat daarna kwam, ligt aan of tegenover die oever: [[tower-of-london|de Tower]], [[tower-bridge|Tower Bridge]], de kades van Bazalgette. Die kades zijn een antwoord op een ramp: in 1858 was de rivier de open riool van de stad en stonk ze het parlement uit ([[great-stink|de Great Stink]]). Sinds 1982 beschermt de Thames Barrier bij Woolwich, 520 meter breed, 125 vierkante kilometer stad en 1,25 miljoen mensen tegen stormvloed.",
      elders: [
        { plaats: "Kemble, Gloucestershire", waarom: "Thames Head, waar de rivier begint." },
        { plaats: "Teddington", waarom: "De sluis waar het getij ophoudt." },
        { plaats: "Woolwich", waarom: "De Thames Barrier uit 1982." }
      ],
      bronnen: [
        { titel: "The River Thames — Royal Geographical Society", url: "https://www.rgs.org/schools/resources-for-schools/rivers/the-river-thames" },
        { titel: "Thames Barrier — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Thames_Barrier" },
        { titel: "Lowest bridging point — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Lowest_bridging_point" },
        { titel: "The Roman London Bridge — London Guided Walks", url: "https://londonguidedwalks.co.uk/the-roman-london-bridge-the-foundation-of-londinium/" },
        { titel: "Londinium — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Londinium" },
        { titel: "The Great Stink of 1858 — London Museum", url: "https://www.londonmuseum.org.uk/collections/london-stories/great-stink-of-1858/" }
      ]
    },

    "grote-brand": {
      label: "De Grote Brand van 1666",
      kleur: "#ea580c",
      icoon: "🔥",
      schaal: "stad",
      plaats: "london",
      glance: "Vier dagen vuur in september 1666, 13.200 huizen weg — en een stad die daarna in baksteen en steen werd herbouwd.",
      verhaal_tekst: "In de nacht van zondag 2 september 1666 ontstond brand in de bakkerij van Thomas Farriner in Pudding Lane. Een harde oostenwind dreef het vuur de houten stad in; het brandde tot woensdag en was op 6 september uit. De balans: 13.200 huizen, 87 parochiekerken, de Royal Exchange, Guildhall en de oude St Paul's; officieel zes doden, 130.000 daklozen. De herbouw ging snel en met regels: de Rebuilding Act van februari 1667 verplichtte baksteen of steen en verbood uitkragende verdiepingen. Christopher Wren tekende 51 nieuwe kerken en [[st-pauls|een nieuwe kathedraal]]; met Robert Hooke bouwde hij [[monument|The Monument]], precies 202 voet van de plek waar het begon. De City van nu is grotendeels de stad van na de brand — [[grote-brand-1666|het verhaal van die vier dagen]] hangt aan het hele gebied.",
      elders: [
        { plaats: "Southwark", waarom: "Shakespeare's Globe (1997) kreeg het eerste rieten dak in London sinds de brand van 1666." }
      ],
      bronnen: [
        { titel: "The Great Fire of London — London Fire Brigade", url: "https://www.london-fire.gov.uk/museum/london-fire-brigade-history-and-stories/fires-and-incidents-that-changed-history/the-great-fire-of-london/" },
        { titel: "Great Fire of London 1666 — Historic UK", url: "https://www.historic-uk.com/HistoryUK/HistoryofEngland/The-Great-Fire-of-London/" },
        { titel: "The Great Fire of London — London Museum", url: "https://www.londonmuseum.org.uk/collections/london-stories/great-fire-of-london/" },
        { titel: "The Rebuilding Acts — Designing Buildings", url: "https://www.designingbuildings.co.uk/wiki/The_Rebuilding_Acts" },
        { titel: "Monument to the Great Fire of London — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Monument_to_the_Great_Fire_of_London" },
        { titel: "Shakespeare's Globe — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Shakespeare%27s_Globe" }
      ]
    },

    blitz: {
      label: "De Blitz",
      kleur: "#475569",
      icoon: "✈",
      schaal: "stad",
      plaats: "london",
      glance: "Van 7 september 1940 tot mei 1941 bombardeerde de Luftwaffe de stad — 57 nachten achtereen om te beginnen.",
      verhaal_tekst: "Op zaterdag 7 september 1940 — Black Saturday — vielen de eerste bommen op London: 430 doden en 1.600 gewonden op één dag. Daarna volgden 57 nachten op rij, en de aanvallen gingen door tot 11 mei 1941, toen Duitsland zijn vliegtuigen naar het oosten verplaatste. De Blitz kostte in heel Groot-Brittannië meer dan 40.000 burgers het leven. Londenaren sliepen in de metro: 79 stations werden schuilkelder, en eind september 1940 lagen er 177.000 mensen per nacht. Onder Whitehall vergaderde Churchills oorlogskabinet 115 keer in [[churchill-war-rooms|een versterkte kelder]]. De zwaarste nacht voor de City was 29 december 1940: 28 brandbommen op [[st-pauls|St Paul's]], geblust door vrijwilligers terwijl de waterleidingen kapot lagen. De foto van de koepel boven de rook werd het beeld van de oorlog.",
      elders: [
        { plaats: "Andere Britse steden", waarom: "Na London werden ook andere steden in Groot-Brittannië doelwit van de bombardementen." }
      ],
      bronnen: [
        { titel: "Black Saturday: The first day of the Blitz — London Museum", url: "https://www.londonmuseum.org.uk/collections/london-stories/black-saturday-first-day-blitz/" },
        { titel: "London's Blitz: A city at war — London Museum", url: "https://www.londonmuseum.org.uk/collections/london-stories/londons-blitz-a-city-at-war/" },
        { titel: "The Blitz — Britannica", url: "https://www.britannica.com/event/the-Blitz" },
        { titel: "The Blitz Around Britain — Imperial War Museums", url: "https://www.iwm.org.uk/history/second-world-war/blitz/blitz-around-britain" },
        { titel: "Underground Stations as Shelters — Spartacus Educational", url: "https://spartacus-educational.com/2WWunderground.htm" },
        { titel: "A Short History of The Cabinet War Rooms — Imperial War Museums", url: "https://www.iwm.org.uk/history/a-short-history-of-the-cabinet-war-rooms" },
        { titel: "St Paul's Cathedral (Blitz Stories) — Historic England", url: "https://historicengland.org.uk/whats-new/features/blitz-stories/st-paul-s-cathedral/" },
        { titel: "St Paul's Survives — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/St_Paul%27s_Survives" }
      ]
    },

    kroon: {
      label: "Kroon en macht",
      kleur: "#ca8a04",
      icoon: "♛",
      schaal: "stad",
      plaats: "london",
      glance: "Westminster en de Tower: waar sinds de elfde eeuw gekroond, geregeerd en opgesloten wordt.",
      verhaal_tekst: "In de elfde eeuw bouwde Edward the Confessor op Thorney Island, ten westen van de Romeinse stad, een paleis en een kerk. Die kerk werd op 28 december 1065 ingewijd; op eerste kerstdag 1066 liet Willem de Veroveraar zich er kronen, en sindsdien is elke vorst dat in [[westminster-abbey|Westminster Abbey]] gedaan — Charles III in 2023 als veertigste. Dezelfde Willem bouwde aan de oostkant [[tower-of-london|de Tower]], vesting, paleis en gevangenis, nu de bewaarplaats van de kroonjuwelen. Het paleis van Westminster werd de zetel van het parlement; met zijn klokkentoren, [[big-ben|de Elizabeth Tower]], en de abdij staat het sinds 1987 op de werelderfgoedlijst als symbool van de band tussen monarchie en staat. De vorst zelf woont sinds Victoria in 1837 in [[buckingham-palace|Buckingham Palace]] — of hij thuis is, zie je aan de vlag op het dak.",
      elders: [
        { plaats: "Windsor", waarom: "Windsor Castle, waar dezelfde vlaggenregel geldt: Union Flag als de koning er niet is." },
        { plaats: "Greenwich", waarom: "Charles II stichtte er in 1675 het Royal Observatory." }
      ],
      bronnen: [
        { titel: "Palace of Westminster and Westminster Abbey — UNESCO", url: "https://whc.unesco.org/en/list/426/" },
        { titel: "History of Westminster Abbey — Westminster Abbey", url: "https://www.westminster-abbey.org/history/history-of-westminster-abbey" },
        { titel: "A history of coronations — Westminster Abbey", url: "https://www.westminster-abbey.org/history/coronations-at-the-abbey/a-history-of-coronations" },
        { titel: "Tower of London — Britannica", url: "https://www.britannica.com/topic/Tower-of-London" },
        { titel: "Royal Residences: Buckingham Palace — The Royal Family", url: "https://www.royal.uk/royal-residences-buckingham-palace" },
        { titel: "Buckingham Palace — Changing the Guard", url: "https://changing-guard.com/buckingham-palace.html" },
        { titel: "History of Royal Observatory Greenwich — Royal Museums Greenwich", url: "https://www.rmg.co.uk/royal-observatory/history" }
      ]
    },

    /* ---- Tilburg — thema’s ---- */
    wolstad: {
      label: "Wolstad",
      kleur: "#b45309",
      icoon: "🧶",
      schaal: "stad",
      plaats: "tilburg",
      glance: "Hoe een dorp van gehuchten de wolstad van Nederland werd — en in twaalf jaar bijna alles kwijtraakte.",
      verhaal_tekst: "Rond 1600 was Tilburg al de belangrijkste wolplaats van Brabant. De grote sprong kwam in de negentiende eeuw: in 1871 stonden er 125 wollenstoffenfabrieken, en tussen 1890 en 1914 kreeg de stad de naam wolstad. In 1910 zat ruim driekwart van de Nederlandse wolindustrie in Noord-Brabant, met Tilburg als kern.\n\nEind jaren vijftig kwamen de eerste tekenen dat het misging: productie verschoof naar landen met lagere lonen. Daarna ging het snel. De textiel telde in Tilburg 10.700 werknemers in 1965, 6.035 in 1970 en 2.010 in 1977. Fabrieken kwamen leeg te staan en werden gesloopt; schoorstenen werden opgeblazen, vijf bleven er staan.\n\nWat overbleef, kreeg een tweede leven. De fabriek van Mommers is nu het TextielMuseum, de spinnerij van Thomas de Beer is museum De Pont, en de bijnaam Kruikenzeiker herinnert aan de urine die bij het vollen en verven werd gebruikt.",
      elders: [
        { plaats: "Noord-Brabant", waarom: "In 1910 was ruim 75% van de Nederlandse wolindustrie in deze provincie geconcentreerd." }
      ],
      bronnen: [
        { titel: "Textielindustrie in Tilburg — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Textielindustrie_in_Tilburg" },
        { titel: "Textielindustrie in Nederland — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Textielindustrie_in_Nederland" },
        { titel: "Leegstaande Tilburgse textielfabrieken werden een 'bron van schaamte' — Historiek", url: "https://historiek.net/leegstaande-tilburgse-textielfabrieken-werden-een-bron-van-schaamte/172656/" },
        { titel: "Kruikezeiker — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Kruikezeiker" }
      ]
    },

    spoorzone: {
      label: "Spoorzone",
      kleur: "#475569",
      icoon: "🚂",
      schaal: "stad",
      plaats: "tilburg",
      glance: "Anderhalve eeuw werden hier treinen gerepareerd achter een muur; nu is het de huiskamer van de stad.",
      verhaal_tekst: "In 1868 begon de Maatschappij tot Exploitatie van Staatsspoorwegen in Tilburg met een werkplaats voor het onderhoud van spoorwegmaterieel; de officiële opening volgde in 1870. In 1871 werkten er 291 mensen, die dat jaar 31 locomotieven, 118 rijtuigen en 1479 wagons repareerden. In 1920 telde D'n Atelier, zoals de Tilburgers de werkplaats noemden, 1358 werknemers en was het de grootste werkgever van de stad. Vanaf 1932 werden er alleen nog locomotieven hersteld — de LocHal is uit dat jaar.\n\nIn 2010 verkocht NS grond en gebouwen aan de gemeente; in 2011 sloot de werkplaats en vanaf 2012 verhuisde het werk naar bedrijventerrein Loven. Het afgesloten terrein midden in de stad kreeg een nieuwe bestemming: de LocHal werd bibliotheek, het Van Gend & Loos-terrein ernaast werd het Spoorpark.",
      elders: [
        { plaats: "Haarlem", waarom: "De oudste spoorwegwerkplaats van Nederland (bouw vanaf 1844), in 2022 als enige grote werkplaats nog in bedrijf." },
        { plaats: "Amersfoort", waarom: "Nam in 1930 het goederenmaterieel over van de werkplaatsen in Zwolle, Utrecht en Tilburg." }
      ],
      bronnen: [
        { titel: "Hoofdwerkplaats Tilburg — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Hoofdwerkplaats_Tilburg" },
        { titel: "Spoorwerkplaats Den Atteljee, Tilburg — Brabants Erfgoed", url: "https://www.brabantserfgoed.nl/page/6039/spoorwerkplaats-den-atteljee-tilburg" },
        { titel: "Spoorzone (Tilburg) — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Spoorzone_(Tilburg)" },
        { titel: "Hoofdwerkplaats Haarlem — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Hoofdwerkplaats_Haarlem" },
        { titel: "Hoofdwerkplaats Amersfoort — Somda Railwiki", url: "https://railwiki.nl/index.php/Hoofdwerkplaats_Amersfoort" },
        { titel: "Blootstelling aan chroom-6 bij NS/NedTrain — Universiteit Utrecht (pdf)", url: "https://www.uu.nl/sites/default/files/Blootstelling%20aan%20chroom-6%20NS-NedTrain%20Definitief.pdf" }
      ]
    },

    "willem-ii": {
      label: "Koning Willem II",
      kleur: "#ea580c",
      icoon: "👑",
      schaal: "stad",
      plaats: "tilburg",
      glance: "Een koning die liever in een Brabants dorp zat dan in Den Haag, er een paleis liet bouwen en er stierf voordat het af was.",
      verhaal_tekst: "In 1831 voerde de kroonprins, de latere koning Willem II, het bevel over de Tiendaagse Veldtocht en had hij zijn hoofdkwartier in Tilburg. In 1835 kocht hij twee herenhuizen aan de huidige Bisschop Zwijsenstraat, en bij de rivier de Leij had hij een jachthuis en een tuin met tuinhuis, waar hij zei: „Hier adem ik vrij en voel ik mij gelukkig.”\n\nOp 13 augustus 1847 legde hij zelf de eerste steen van een paleis. Hij heeft er nooit gewoond: op 17 maart 1849 stierf hij in zijn oude woonhuis, 22 dagen voor de oplevering. Op 4 april 1849 werd hij bijgezet in de Nieuwe Kerk in Delft.\n\nDe stad hield hem vast. Voetbalclub Tilburgia noemde zich in 1898 Willem II, in 1924 kocht Tilburg voor 1000 gulden zijn standbeeld uit Den Haag, en zijn boerderijen gaven hun naam aan de trappistenabdij Koningshoeven, waar sinds 1884 La Trappe wordt gebrouwen.",
      elders: [
        { plaats: "Den Haag", waarom: "Zijn standbeeld stond vanaf 1854 bij paleis Kneuterdijk, tot Tilburg het in 1924 kocht." },
        { plaats: "Delft", waarom: "Bijgezet in de koninklijke grafkelder van de Nieuwe Kerk op 4 april 1849." },
        { plaats: "Berkel-Enschot", waarom: "De abdij Koningshoeven (1881) staat op boerderijen die van Willem II waren; sinds 1884 brouwen de trappisten er La Trappe." }
      ],
      bronnen: [
        { titel: "De bijzondere band van Koning Willem II met Tilburg — Omroep Brabant", url: "https://www.omroepbrabant.nl/nieuws/2485844/de-bijzondere-band-van-koning-willem-ii-met-tilburg-hier-adem-ik-vrij-hier-voel-ik-mij-gelukkig" },
        { titel: "Paleis-Raadhuis — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Paleis-Raadhuis" },
        { titel: "Het sterfhuis van Willem II — Geheugen van Tilburg", url: "https://www.geheugenvantilburg.nl/page/14826/het-sterfhuis-van-willem-ii" },
        { titel: "Koninklijk huis — Oude en Nieuwe Kerk Delft", url: "https://www.oudeennieuwekerkdelft.nl/nieuwe-kerk/huis-van-oranje/koninklijk-huis/" },
        { titel: "Willem II — BHIC", url: "https://www.bhic.nl/ontdekken/verhalen/willem-ii" },
        { titel: "Het standbeeld van Willem II in Tilburg — Brabant in Beelden", url: "https://brabantinbeelden.nl/verhalen/het-standbeeld-van-willem-ii-tilburg" },
        { titel: "Abdij Koningshoeven — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Abdij_Koningshoeven" }
      ]
    },

    kruikenstad: {
      label: "Kermis & Kruikenstad",
      kleur: "#db2777",
      icoon: "🎡",
      schaal: "stad",
      plaats: "tilburg",
      glance: "Een kermis die ouder is dan de jaarmarkten, een carnavalsnaam die naar pis verwijst, en een Roze Maandag die als grap begon.",
      verhaal_tekst: "De oudste vermelding van de Tilburgse kermis staat in een akte uit 1567, die een betaling regelt vóór de „Tilborchse kermisse” — terwijl Tilburg pas in 1575 toestemming kreeg voor jaarmarkten. Wat begon met koekkramen, snuisterijen en volksspelen werd eind negentiende eeuw een kermis van draaimolens en machines. Sinds 1969 staat zij in de laatste volle week van juli: 230 tot 240 attracties in een lint van 4,5 kilometer, meer dan een miljoen bezoekers, de grootste kermis van de Benelux.\n\nMet carnaval heet de stad Kruikenstad en de inwoners Kruiken, naar de kruiken urine die volgens de overlevering naar de wolfabrieken werden gebracht. Andere Brabantse steden doen hetzelfde: 's-Hertogenbosch wordt Oeteldonk, Eindhoven Lampegat, naar de gloeilampen van Philips. Zulke namen zijn spotnamen, beroepen of dingen die met de plaats verbonden zijn.",
      elders: [
        { plaats: "'s-Hertogenbosch", waarom: "Heet met carnaval Oeteldonk: oetel is kikker in het dialect, een donk een hoogte in het moeras." },
        { plaats: "Eindhoven", waarom: "Heet met carnaval Lampegat, naar de gloeilampenfabriek van Philips." }
      ],
      bronnen: [
        { titel: "Zo groeide Tilburgse Kermis van wat kraampjes tot een kilometerslang lint — Omroep Brabant", url: "https://www.omroepbrabant.nl/nieuws/6018235/zo-groeide-tilburgse-kermis-van-wat-kraampjes-tot-een-kilometerslang-lint" },
        { titel: "4,5 kilometer aan attracties op Benelux' grootste kermis — Omroep Brabant", url: "https://www.omroepbrabant.nl/nieuws/6018697/45-kilometer-aan-attracties-geopend-op-benelux-grootste-kermis-in-tilburg" },
        { titel: "Tilburgse Kermis — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Tilburgse_Kermis" },
        { titel: "Oeteldonk en Kruikenstad: waarom plaatsen anders heten met carnaval — Omroep Brabant", url: "https://www.omroepbrabant.nl/nieuws/4649441/oeteldonk-en-kruikenstad-dit-is-waarom-plaatsen-anders-heten-met-carnaval" },
        { titel: "Kruikezeiker — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Kruikezeiker" }
      ]
    }
  },

  /* De schaal-stapel. Regel: een hoger niveau vat alleen samen wat lager
     al gesourced is. Geen nieuwe claims bovenin. */
  plaatsen: [
    {
      id: "kerkrade", schaal: "stad", naam: "Kerkrade", ouder: "mijnstreek",
      kaart: { centrum: [50.865, 6.0655], zoom: 14 },
      ondertitel: "Stad in Zuid-Limburg \u00b7 aan de Duitse grens",
      afbeelding: "Kerkrade-Markt.jpg",
      glance: "Grensstad in Zuid-Limburg met ruim 45.000 inwoners \u2014 bakermat van de Nederlandse mijnbouw, thuisbasis van het Wereld Muziek Concours, en van GaiaZOO tot stoomtrein een stad van dagjes uit.",
      verhaal_tekst: "Kerkrade ligt in het uiterste zuidoosten van Nederland, tegen de Duitse grens. Het is een stad van ruim 45.000 inwoners die met het Duitse Herzogenrath \u00e9\u00e9n gegroeid stedelijk gebied vormt \u2014 op \u00e9\u00e9n plek loopt de landsgrens zelfs door het midden van [[nieuwstraat|een gewone straat]], met Nederland op de ene stoep en Duitsland op de andere.\n\nDe stad dankt haar naam aan een middeleeuwse ontginning. Rond 1100 werd hier bos gerooid \u2014 zulk vrijgemaakt land heette rode \u2014 en in 1104 stichtte Ailbertus van Antoing er een klooster: [[rolduc|de abdij Rolduc]], nu het grootste abdijcomplex van Nederland. De nederzetting bij [[lambertuskerk|de parochiekerk]] ging Kerk-rade heten; uit dezelfde ontginning komen ook Herzogenrath en de naam Rolduc voort \u2014 [[drie-rodes|drie namen uit \u00e9\u00e9n bos]]. In de abdijregisters staat in 1113 het woord kalculen, kolenkuilen: de oudste bekende vermelding van steenkoolwinning in Europa.\n\nSteenkool bepaalde daarna eeuwenlang het leven hier. [[domaniale|De Domaniale mijn]], de oudste van Nederland, sloot op 29 augustus 1969, en van die hele wereld is bovengronds weinig bewaard: [[schacht-nulland|\u00e9\u00e9n schachtgebouw]], twee begroeide [[steenberg-ham|steenbergen]] en op de Markt [[joep|d\u2019r Joep]], het nationale monument voor alle Nederlandse mijnwerkers.\n\nHet Kerkrade van nu laat zich van een andere kant zien. Sinds 1951 is de stad om de vier jaar gastheer van [[wmc|het Wereld Muziek Concours]], en met GaiaZOO (2005), het Discovery Museum en de stoomtrein van de Miljoenenlijn kwamen er na de mijnsluiting nieuwe publiekstrekkers bij. Aan de noordrand ligt bovendien [[anstelvallei|een groen beekdal]] met een kasteel, watermolens en een stuwmeer.",
      waarvoor_bekend: "De abdij Rolduc, de oudste steenkoolmijn van Nederland, het Wereld Muziek Concours en de Nieuwstraat, waar de landsgrens door het midden van de straat loopt. Voor een dagje uit: GaiaZOO en het Discovery Museum.",
      /* Het tabblad Doen: de bezoekbare plekken. `link` verwijst naar een object
         in deze dataset; `url` is de offici\u00eble site van een plek die (nog) geen
         eigen pin heeft. Elke claim hieronder is herleidbaar tot de bronnen. */
      doen: [
        { naam: "GaiaZOO", link: "gaiazoo",
          tekst: "Dierentuin uit 2005 met vier landschappen \u2014 savanne, regenwoud, taiga en Limburg \u2014 en meermaals verkozen tot mooiste dierentuin van de Benelux." },
        { naam: "Discovery Museum", link: "discovery-museum",
          tekst: "Museum over wetenschap en techniek, naast station Kerkrade Centrum. Opende in 1998 als Industrion en heet sinds 2021 Discovery Museum." },
        { naam: "Abdij Rolduc", link: "rolduc",
          tekst: "Het grootste abdijcomplex van Nederland, gesticht in 1104. De romaanse crypte uit 1108 is er nog; een deel van het complex is hotel." },
        { naam: "De Miljoenenlijn", link: "station-kerkrade-centrum",
          tekst: "Historische stoomtrein tussen Kerkrade Centrum en Schin op Geul, over een lijn uit 1934 die zijn naam dankt aan de bouwkosten: ruim twaalf miljoen gulden voor twaalfenhalve kilometer." },
        { naam: "Botanische Tuin Kerkrade", link: "botanische-tuin",
          tekst: "Tuin uit 1939, aangelegd in opdracht van de Staatsmijnen als groene aanvulling op het mijnwerkersbestaan. De enige botanische tuin van Nederland waarvan de aanleg als rijksmonument beschermd is." },
        { naam: "Schacht Nulland", link: "schacht-nulland",
          tekst: "Het laatste schachtgebouw van de oudste steenkoolmijn van Nederland, nu een klein museum over de mijnbouw." },
        { naam: "Nieuwstraat / Neustra\u00dfe", link: "nieuwstraat",
          tekst: "De straat waar de landsgrens door het midden loopt \u2014 met \u00e9\u00e9n stap sta je in Duitsland." },
        { naam: "Wandelen in de Anstelvallei", link: "anstelvallei",
          tekst: "Het groene beekdal van de stad, met kasteel Erenstein, twee watermolens en het stuwmeer de Cranenweyer." },
        { naam: "Wereld Muziek Concours", link: "wmc",
          tekst: "Elke vier jaar wekenlang blaasmuziek uit de hele wereld; de twintigste editie liep in de zomer van 2026." },
        { naam: "Roda JC \u2014 Parkstad Limburg Stadion", link: "parkstad-stadion",
          tekst: "Betaald voetbal in een stadion uit 2000. Voorloper Rapid JC werd in 1956 landskampioen van Nederland; fusieclub Roda JC speelt sinds 1962." }
      ],
      themas: ["mijnbouw", "grens", "rolduc", "romeins", "muziek", "water", "nakolen"],
      bronnen: [
        { titel: "Abdij Rolduc \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Abdij_Rolduc" },
        { titel: "Domaniale mijn \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Domaniale_mijn" },
        { titel: "Burg Rode \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Burg_Rode" },
        { titel: "Nieuwstraat (Kerkrade) \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Nieuwstraat_(Kerkrade)" },
        { titel: "Wereld Muziek Concours \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Wereld_Muziek_Concours" },
        { titel: "GaiaZOO \u2014 Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/GaiaZOO" },
        { titel: "Discovery Museum \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Discovery_Center_Continium" },
        { titel: "Spoorlijn Schaesberg\u2013Simpelveld (Miljoenenlijn) \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Spoorlijn_Schaesberg_-_Simpelveld" },
        { titel: "Botanische Tuin \u2014 Rijksmonumenten.nl (513741)", url: "https://rijksmonumenten.nl/monument/513741/botanische-tuin/kerkrade/" },
        { titel: "Rapid JC \u2014 Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Rapid_JC" },
        { titel: "Parkstad Limburg Stadion \u2014 Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Parkstad_Limburg_Stadion" },
        { titel: "Gemeente Kerkrade in cijfers \u2014 AlleCijfers.nl", url: "https://allecijfers.nl/gemeente/kerkrade/" }
      ]
    },
    {
      id: "mijnstreek", schaal: "streek", naam: "Oostelijke Mijnstreek", ouder: "limburg",
      // `kaart` is een weergave-instelling (waar de kaart heen zoomt bij focus
      // op deze plaats), geen inhoudelijke claim \u2014 daarom zonder bronveld.
      kaart: { centrum: [50.90, 5.99], zoom: 11 },
      ondertitel: "Heerlen \u00b7 Kerkrade \u00b7 Landgraaf \u00b7 Brunssum \u00b7 Beekdaelen \u00b7 Voerendaal \u00b7 Simpelveld",
      afbeelding: null,
      jaar: 1900,
      glance: "Een streek die in twintig jaar van de rijkste van Nederland naar de armste ging.",
      verhaal_tekst: "De naam mijnstreek stamt uit de eerste helft van de twintigste eeuw, toen rond Kerkrade, Heerlen, Hoensbroek, Brunssum, Eygelshoven en Schaesberg industri\u00eble [[mijnbouw|steenkoolwinning]] op gang kwam. Nederland had twaalf mijnzetels, grotendeels hier. Het tijdperk liep van 1900 tot 31 december 1974.\n\nHet scherpste cijfer staat niet in de mijnbouwgeschiedenis maar in de inkomensstatistiek.\n\nIn 1955 stonden vier van deze gemeenten in de landelijke top vijfentwintig van de h\u00f3\u00f3gste inkomens. In 1975 stonden diezelfde gemeenten onderaan. Twintig jaar, van kop naar staart. De streek vergrijst sindsdien sterk.\n\nDe gemeenten werken nu samen als Parkstad Limburg \u2014 een naam van oud-burgemeester Thijs W\u00f6ltgens van [[kerkrade|Kerkrade]], die verwijst naar het groen tussen de vele kleine kernen.",
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
      kaart: { centrum: [51.21, 5.93], zoom: 9 },
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
      kaart: { centrum: [52.2, 5.3], zoom: 7 },
      ondertitel: "Land",
      afbeelding: null,
      glance: "Nog niet uitgewerkt.",
      verhaal_tekst: "Leeg niveau, bovenaan de stapel.",
      waarvoor_bekend: "\u2014",
      themas: [],
      onbevestigd: "Nog geen inhoud.",
      bronnen: []
    },

    /* ---- London — schaalstapel ---- */
    {
      id: "london",
      schaal: "stad",
      naam: "London",
      ouder: "engeland",
      kaart: {
        centrum: [51.5074, -0.1278],
        zoom: 13
      },
      ondertitel: "Hoofdstad van het Verenigd Koninkrijk · aan de Theems",
      afbeelding: null,
      glance: "Hoofdstad aan de Theems met 8,8 miljoen inwoners — Romeinse stichting, kroningskerk sinds 1066, twee keer afgebrand en herbouwd, en een stad vol gratis musea.",
      verhaal_tekst: "London ligt in het zuidoosten van Engeland, aan weerszijden van de Theems. Greater London telde bij de volkstelling van 2021 8.804.769 inwoners, verdeeld over 32 boroughs en de City of London — die laatste is de historische kern, met nog geen 11.000 inwoners.\n\nDe stad begon als [[londinium|Londinium]], rond het jaar 47 door de Romeinen gesticht op de plek waar de Theems voor het laatst te overbruggen was; rond 50 lag er een houten brug, vlak bij het huidige London Bridge. Rond 200 kreeg de stad een stenen muur, waarvan bij Tower Hill nog [[london-wall|een stuk van ruim tien meter hoog]] staat. Ten westen daarvan groeide in de elfde eeuw een tweede centrum: Edward the Confessor bouwde in Westminster een paleis en een kerk, [[westminster-abbey|de abdij]] waar sinds 1066 elke vorst gekroond is.\n\nDrie rampen bepaalden hoe de stad er nu uitziet. In september 1666 verwoestte [[grote-brand-1666|de Grote Brand]] 13.200 huizen en 87 kerken; Christopher Wren bouwde daarna 51 nieuwe kerken en [[st-pauls|St Paul's Cathedral]]. Vanaf 7 september 1940 bombardeerde de Luftwaffe de stad 57 nachten achtereen — het begin van [[blitz|de Blitz]], die tot mei 1941 duurde en meer dan 40.000 Britse burgers het leven kostte. En in 1858 dwong de stank van de Theems, toen de open riool van de stad, het parlement tot [[great-stink|de bouw van een rioolstelsel]] dat nog steeds in gebruik is.\n\nVandaag is London de zetel van parlement en koningshuis — [[big-ben|de Elizabeth Tower]], [[buckingham-palace|Buckingham Palace]], [[tower-of-london|de Tower]] met de kroonjuwelen — en een stad van gratis musea: het British Museum, dat in 1759 als eerste nationale museum ter wereld openging, is nog altijd vrij toegankelijk. Sinds 2000 heeft Greater London een gekozen burgemeester.",
      waarvoor_bekend: "Big Ben, de Tower en Tower Bridge, Buckingham Palace, Westminster Abbey en St Paul's; de gratis musea (British Museum, Tate Modern, Natural History Museum), het West End en de Theems.",
      doen: [
        { naam: "British Museum", url: "https://www.britishmuseum.org/", tekst: "Opgericht in 1753 en geopend in 1759 als het eerste gratis nationale museum ter wereld; de collectie telt acht miljoen voorwerpen en de toegang is nog altijd gratis." },
        { naam: "Tower of London", link: "tower-of-london", tekst: "Kasteel van Willem de Veroveraar met de White Tower uit 1078–1100, sinds 1988 werelderfgoed en bewaarplaats van de kroonjuwelen." },
        { naam: "Westminster Abbey", link: "westminster-abbey", tekst: "Kroningskerk sinds 1066: Charles III was in mei 2023 de veertigste vorst die hier gekroond werd. Er liggen meer dan 3.300 mensen begraven." },
        { naam: "Tate Modern", url: "https://www.tate.org.uk/visit/tate-modern", tekst: "Museum voor moderne kunst in de voormalige Bankside-elektriciteitscentrale van Giles Gilbert Scott, geopend op 12 mei 2000." },
        { naam: "Natural History Museum", url: "https://www.nhm.ac.uk/", tekst: "Geopend in 1881; in de Hintze Hall hangt sinds 14 juli 2017 het 25,2 meter lange skelet van de blauwe vinvis Hope." },
        { naam: "Boottocht op de Theems", url: "https://tfl.gov.uk/modes/river/about-river-bus", tekst: "De rivierbus van Uber Boat by Thames Clippers legt aan bij 24 steigers tussen Putney en Barking Riverside, waaronder Westminster, Tower en Greenwich; betalen kan contactloos." },
        { naam: "Borough Market", url: "https://boroughmarket.org.uk/", tekst: "Rond 1014 werd in Southwark al graan, vis en vee verhandeld; sinds een parlementswet van 1756 beheert een stichting van buurtbewoners de markt." },
        { naam: "Hyde Park", url: "https://www.royalparks.org.uk/visit/parks/hyde-park", tekst: "Henry VIII kocht het gebied in 1536 als jachtterrein. Het park van 350 acre heeft sinds 1872 Speakers' Corner, waar iedereen het woord mag nemen." },
        { naam: "Theater in het West End", url: "https://officiallondontheatre.com/", tekst: "The Mousetrap van Agatha Christie speelt sinds 25 november 1952 in het West End — op een coronapauze na onafgebroken — en beleefde op 19 maart 2025 zijn 30.000ste voorstelling." },
        { naam: "Greenwich", url: "https://www.rmg.co.uk/", tekst: "Werelderfgoed sinds 1997. In het Royal Observatory uit 1675 loopt de nulmeridiaan, in 1884 gekozen als nullijn van de wereld; in het droogdok ligt de theeklipper Cutty Sark." }
      ],
      themas: ["theems", "grote-brand", "blitz", "kroon"],
      bronnen: [
        { titel: "London boroughs — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/London_boroughs" },
        { titel: "Demographics of London — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Demographics_of_London" },
        { titel: "Londinium — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Londinium" },
        { titel: "The Roman London Bridge — London Guided Walks", url: "https://londonguidedwalks.co.uk/the-roman-london-bridge-the-foundation-of-londinium/" },
        { titel: "London Wall — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/London_Wall" },
        { titel: "Palace of Westminster and Westminster Abbey — UNESCO", url: "https://whc.unesco.org/en/list/426/" },
        { titel: "The Great Fire of London — London Fire Brigade", url: "https://www.london-fire.gov.uk/museum/london-fire-brigade-history-and-stories/fires-and-incidents-that-changed-history/the-great-fire-of-london/" },
        { titel: "London's Blitz: A city at war — London Museum", url: "https://www.londonmuseum.org.uk/collections/london-stories/londons-blitz-a-city-at-war/" },
        { titel: "The Blitz — Britannica", url: "https://www.britannica.com/event/the-Blitz" },
        { titel: "The Great Stink of 1858 — London Museum", url: "https://www.londonmuseum.org.uk/collections/london-stories/great-stink-of-1858/" },
        { titel: "History — British Museum", url: "https://www.britishmuseum.org/about-us/british-museum-story/history" },
        { titel: "Mayor of London — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Mayor_of_London" },
        { titel: "Tower of London — UNESCO", url: "https://whc.unesco.org/en/list/488" },
        { titel: "A history of coronations — Westminster Abbey", url: "https://www.westminster-abbey.org/history/coronations-at-the-abbey/a-history-of-coronations" },
        { titel: "Buried among the kings — Westminster Abbey", url: "https://www.westminster-abbey.org/history/explore-our-history/buried-among-the-kings" },
        { titel: "History of Tate Modern — Tate", url: "https://www.tate.org.uk/about-us/history-tate/history-of-tate-modern" },
        { titel: "Museum unveils 'Hope' the blue whale skeleton — Natural History Museum", url: "https://www.nhm.ac.uk/discover/news/2017/july/museum-unveils-hope-the-blue-whale-skeleton.html" },
        { titel: "Hintze Hall — Natural History Museum", url: "https://www.nhm.ac.uk/discover/museum-history-hintze-hall.html" },
        { titel: "About River Bus — Transport for London", url: "https://tfl.gov.uk/modes/river/about-river-bus" },
        { titel: "Route Map — Uber Boat by Thames Clippers", url: "https://www.thamesclippers.com/plan-your-journey/route-map" },
        { titel: "Borough Market: London's oldest food-trading hub — London Museum", url: "https://www.londonmuseum.org.uk/collections/london-stories/borough-market-londons-oldest-food-trading-hub/" },
        { titel: "Hyde Park: Where London gathers — London Museum", url: "https://www.londonmuseum.org.uk/collections/london-stories/hyde-park-where-london-gathers-celebrate-protest/" },
        { titel: "The Mousetrap — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/The_Mousetrap" },
        { titel: "'The Mousetrap' celebrates 30,000 performances — London Theatre", url: "https://www.londontheatre.co.uk/theatre-news/news/the-mousetrap-celebrates-30-000-performances-in-the-west-end" },
        { titel: "Guide to Maritime Greenwich — Royal Museums Greenwich", url: "https://www.rmg.co.uk/plan-your-visit/visit-greenwich/guide-maritime-greenwich-london-unesco-world-heritage-site" },
        { titel: "What is the Prime Meridian — Royal Museums Greenwich", url: "https://www.rmg.co.uk/stories/time/what-prime-meridian-why-it-greenwich" }
      ]
    },

    {
      id: "engeland",
      schaal: "land",
      naam: "Engeland",
      ouder: "verenigd-koninkrijk",
      kaart: {
        centrum: [52.5, -1.5],
        zoom: 6
      },
      ondertitel: "Grootste van de vier landen van het Verenigd Koninkrijk",
      afbeelding: null,
      glance: "Het grootste van de vier landen van het Verenigd Koninkrijk: 56,5 miljoen inwoners bij de volkstelling van 2021, met London als hoofdstad.",
      verhaal_tekst: "Engeland is in inwonertal veruit het grootste van de vier landen van het Verenigd Koninkrijk: 56,5 miljoen mensen in 2021, tegen 3,1 miljoen in Wales, 5,5 miljoen in Schotland en 1,9 miljoen in Noord-Ierland. Hoofdstad is [[london|London]], waar parlement en koningshuis zetelen. Het gebied was ooit de Romeinse provincie Britannia, met [[londinium|Londinium]] vanaf rond het jaar 100 als hoofdstad.",
      waarvoor_bekend: "London, het koningshuis en het parlement in Westminster.",
      themas: ["kroon", "theems"],
      bronnen: [
        { titel: "Population and household estimates, England and Wales: Census 2021 — ONS", url: "https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/bulletins/populationandhouseholdestimatesenglandandwales/census2021" },
        { titel: "2021 census: What are the results so far? — House of Commons Library", url: "https://commonslibrary.parliament.uk/2021-census-what-are-the-results-so-far/" },
        { titel: "London — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/London" },
        { titel: "Londinium — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Londinium" }
      ]
    },

    {
      id: "verenigd-koninkrijk",
      schaal: "land",
      naam: "Verenigd Koninkrijk",
      ouder: null,
      kaart: {
        centrum: [54.5, -3],
        zoom: 5
      },
      ondertitel: "Engeland, Schotland, Wales en Noord-Ierland",
      afbeelding: null,
      glance: "Vier landen — Engeland, Schotland, Wales en Noord-Ierland — met samen zo'n 67 miljoen inwoners (2021) en London als hoofdstad.",
      verhaal_tekst: "Het Verenigd Koninkrijk bestaat uit vier landen: [[engeland|Engeland]], Schotland, Wales en Noord-Ierland. Midden 2021 woonden er naar schatting 67,0 miljoen mensen. Hoofdstad is [[london|London]], waar het parlement zetelt in het Palace of Westminster en de koning in [[buckingham-palace|Buckingham Palace]].",
      waarvoor_bekend: "Het koningshuis, het parlement van Westminster en London.",
      themas: ["kroon"],
      bronnen: [
        { titel: "Population estimates for the UK, mid-2021 — ONS", url: "https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/bulletins/annualmidyearpopulationestimates/mid2021" },
        { titel: "2021 census: What are the results so far? — House of Commons Library", url: "https://commonslibrary.parliament.uk/2021-census-what-are-the-results-so-far/" },
        { titel: "Palace of Westminster and Westminster Abbey — UNESCO", url: "https://whc.unesco.org/en/list/426/" },
        { titel: "Royal Residences: Buckingham Palace — The Royal Family", url: "https://www.royal.uk/royal-residences-buckingham-palace" }
      ]
    },

    /* ---- Tilburg — schaalstapel ---- */
    {
      id: "tilburg",
      schaal: "stad",
      naam: "Tilburg",
      ouder: "noord-brabant",
      kaart: {
        centrum: [51.5555, 5.0913],
        zoom: 14
      },
      ondertitel: "Stad in Midden-Brabant · voormalige wolstad",
      afbeelding: "Paleis-raadhuis.jpg",
      glance: "Achtste gemeente van Nederland, ooit de wolstad van het land: fabrieken werden musea, de spoorwerkplaats een bibliotheek, en één week per jaar staat hier de grootste kermis van de Benelux.",
      verhaal_tekst: "Tilburg ligt in het midden van Noord-Brabant en telt 230.746 inwoners (2026), waarmee het de achtste gemeente van Nederland is. Wie met de trein aankomt, stapt uit tegen de [[spoorzone|Spoorzone]]: het terrein van de vroegere spoorwegwerkplaats, met de [[lochal|LocHal]] van 1932 die nu bibliotheek is, en verderop het [[spoorpark|Spoorpark]], door inwoners zelf bedacht.\n\nDe naam is oud: in het Liber aureus uit 1191 is een oorkonde uit 709 overgeschreven die in Tilburg zou zijn opgemaakt, actum publice Tilliburgis. Eeuwenlang was Tilburg geen stad maar een verzameling herdgangen, gehuchten tussen akkers en weiden, die pas langzaam aan elkaar groeiden. Stadsrechten kwamen laat: op 18 april 1809, van koning Lodewijk Napoleon, tijdens een inspectiereis door Brabant en Zeeland.\n\nWat Tilburg groot maakte, was wol. In 1871 stonden er 125 wollenstoffenfabrieken; tussen 1890 en 1914 heette Tilburg [[wolstad|de wolstad]] van Nederland. Uit die fabrieken komt ook de bijnaam van de inwoners, [[kruikenzeiker|Kruikenzeiker]], naar de urine die bij het bewerken van wol werd gebruikt. In dezelfde eeuw koos [[willem-ii|koning Willem II]] de stad als verblijfplaats. Hij liet er een paleis bouwen en stierf er op 17 maart 1849, 22 dagen voor de oplevering — het [[paleis-raadhuis|Paleis-Raadhuis]] staat er nog.\n\nDe wolindustrie verdween tussen 1965 en 1977 grotendeels: van 10.700 naar 2.010 werknemers. Wat de stad ervan bewaarde, kreeg een nieuwe rol: de fabriek van Mommers is het [[textielmuseum|TextielMuseum]], de spinnerij van Thomas de Beer is [[de-pont|museum De Pont]]. Aan de zuidkant ligt de [[piushaven|Piushaven]] uit 1923, in juli de [[tilburgse-kermis|kermis]], en rond de stad Stadsbos013, het grootste stadsbos van Nederland.",
      waarvoor_bekend: "De wolindustrie en wat ervan overbleef (TextielMuseum, De Pont), de LocHal als World Building of the Year 2019, koning Willem II die hier woonde en stierf, de Tilburgse kermis en de bijnaam Kruikenzeiker.",
      doen: [
        { naam: "TextielMuseum", link: "textielmuseum", tekst: "Museum en werkplaats in de wollenstoffenfabriek van C. Mommers & Co aan de Goirkestraat. In het TextielLab worden sinds 2005 ontwerpen van kunstenaars en ontwerpers op industriële machines uitgevoerd." },
        { naam: "LocHal", link: "lochal", tekst: "Locomotiefhal uit 1932, sinds 2019 bibliotheek en cultuurcentrum; in december 2019 uitgeroepen tot World Building of the Year op het World Architecture Festival." },
        { naam: "Museum De Pont", link: "de-pont", tekst: "Hedendaagse kunst in de voormalige wolspinnerij van Thomas de Beer, geopend in 1992; ruim 800 werken van ongeveer tachtig kunstenaars, onder wie Anish Kapoor, Marlene Dumas en Ai Weiwei." },
        { naam: "Paleis-Raadhuis", link: "paleis-raadhuis", tekst: "Het paleis dat koning Willem II in 1847 liet bouwen en nooit bewoonde; sinds 1936 raadhuis. Op de gevel zijn woorden over Tilburg: „Hier adem ik vrij en voel ik mij gelukkig”." },
        { naam: "Tilburgse Kermis", link: "tilburgse-kermis", tekst: "Sinds 1969 in de laatste volle week van juli: 230 tot 240 attracties in een lint van 4,5 kilometer door het centrum, meer dan een miljoen bezoekers, en op Roze Maandag het grootste pride-evenement buiten Amsterdam." },
        { naam: "Spoorpark", link: "spoorpark", tekst: "Stadspark van bijna tien hectare op het oude Van Gend & Loos-terrein, geopend in 2019 en grotendeels door inwoners zelf ontworpen, met de 37 meter hoge Kempentoren." },
        { naam: "Piushaven", link: "piushaven", tekst: "Stadshaven aan het Wilhelminakanaal, geopend op 4 april 1923; sinds 2002 museumhaven met historische vrachtschepen." },
        { naam: "Willem II — Koning Willem II Stadion", link: "willem-ii-stadion", tekst: "Betaald voetbal in een stadion uit 1995 met 14.637 plaatsen. Willem II werd in 1916 als eerste club buiten het westen landskampioen en in 1955 de eerste kampioen van het betaald voetbal." },
        { naam: "Natuurmuseum Brabant", url: "https://www.natuurmuseumbrabant.nl/", tekst: "Natuurhistorisch museum, geopend op 30 juli 1935, sinds 1985 gevestigd in de villa van lakenfabrikant Guillaume Pollet aan de Spoorlaan." },
        { naam: "Stadsbos013", url: "https://stadsbos013.nl", tekst: "Ruim 1600 hectare bos en landgoederen aan de rand van de stad, het grootste stadsbos van Nederland, met de Oude Warande: een sterrenbos uit 1712 met acht lanen vanuit één middelpunt." }
      ],
      themas: ["wolstad", "spoorzone", "willem-ii", "kruikenstad"],
      bronnen: [
        { titel: "Gemeente Tilburg in cijfers — AlleCijfers.nl", url: "https://allecijfers.nl/gemeente/tilburg/" },
        { titel: "Tilburg — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Tilburg" },
        { titel: "De eerste stedelingen van Tilburg uit 1809 — Regionaal Archief Tilburg", url: "https://www.regionaalarchieftilburg.nl/home/blog-detail/algemeen/2021/04/15/de-eerste-stedelingen-van-tilburg-uit-1809/" },
        { titel: "Textielindustrie in Tilburg — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Textielindustrie_in_Tilburg" },
        { titel: "Kruikezeiker — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Kruikezeiker" },
        { titel: "Paleis-Raadhuis — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Paleis-Raadhuis" },
        { titel: "De bijzondere band van Koning Willem II met Tilburg — Omroep Brabant", url: "https://www.omroepbrabant.nl/nieuws/2485844/de-bijzondere-band-van-koning-willem-ii-met-tilburg-hier-adem-ik-vrij-hier-voel-ik-mij-gelukkig" },
        { titel: "TextielMuseum — Geschiedenis en gebouw", url: "https://textielmuseum.nl/geschiedenis-gebouw" },
        { titel: "LocHal — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/LocHal" },
        { titel: "LocHal named 2019 World Building of the Year — Library Journal infoDOCKET", url: "https://www.infodocket.com/2019/12/07/lochal-public-library-tilburg-netherlands-named-2019-building-of-the-year-at-world-architecture-festival/" },
        { titel: "De Pont Museum of Contemporary Art — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/De_Pont_Museum_of_Contemporary_Art" },
        { titel: "Anish Kapoor en museum De Pont — inbrabant.nl", url: "https://www.inbrabant.nl/bibliotheek/anish-kapoor-en-museum-de-pont" },
        { titel: "4,5 kilometer aan attracties op Benelux' grootste kermis — Omroep Brabant", url: "https://www.omroepbrabant.nl/nieuws/6018697/45-kilometer-aan-attracties-geopend-op-benelux-grootste-kermis-in-tilburg" },
        { titel: "Roze Maandag — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Roze_Maandag" },
        { titel: "Spoorpark (Tilburg) — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Spoorpark_(Tilburg)" },
        { titel: "Spoorpark Tilburg — VisitBrabant", url: "https://www.visitbrabant.com/nl/locaties/12525431/spoorpark-tilburg" },
        { titel: "De Kempentoren — Uitkijktorens.nl", url: "https://uitkijktorens.nl/uitkijktorens/de-kempentoren/" },
        { titel: "Geschiedenis — 100 jaar Piushaven", url: "https://www.100jaarpiushaven.nl/geschiedenis/" },
        { titel: "Piushaven — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Piushaven" },
        { titel: "Koning Willem II Stadion — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Koning_Willem_II_Stadion" },
        { titel: "Willem II — BHIC", url: "https://www.bhic.nl/ontdekken/verhalen/willem-ii" },
        { titel: "Geschiedenis — Natuurmuseum Brabant", url: "https://www.natuurmuseumbrabant.nl/en/about-us/history" },
        { titel: "Info — Stadsbos013", url: "https://stadsbos013tilburg.nl/info/" },
        { titel: "Oude Warande gemeentelijk monument — Tilburgers.nl", url: "https://www.tilburgers.nl/oude-warande-gemeentelijke-monument/" }
      ]
    },

    {
      id: "noord-brabant",
      schaal: "provincie",
      naam: "Noord-Brabant",
      ouder: "nederland",
      kaart: {
        centrum: [51.55, 5.1],
        zoom: 9
      },
      ondertitel: "Provincie · hoofdstad 's-Hertogenbosch",
      afbeelding: null,
      glance: "Zuidelijke provincie met 2,7 miljoen inwoners, anderhalve eeuw lang zonder stem in het landsbestuur, daarna de industriële motor van het zuiden.",
      verhaal_tekst: "Noord-Brabant is met 2.676.954 inwoners (2026) de derde provincie van Nederland; hoofdstad is 's-Hertogenbosch, de grootste gemeente is Eindhoven met 249.783 inwoners. Het gebied hoorde vanaf de twaalfde eeuw bij het hertogdom Brabant, dat ook de huidige Belgische provincies Antwerpen en Vlaams-Brabant omvatte. Bij de Vrede van Münster in 1648 kwam het noordelijke deel als Staats-Brabant bij de Republiek, maar als generaliteitsland zonder eigen stem in het landsbestuur, bestuurd door de Staten-Generaal en vooral gezien als bufferzone. Dat duurde tot 1796; in 1815 werd de huidige provincie gevormd. In 1910 zat ruim driekwart van de Nederlandse wolindustrie in Noord-Brabant, met [[tilburg|Tilburg]] als middelpunt.",
      waarvoor_bekend: "Carnaval, waarbij steden en dorpen een andere naam krijgen; Vincent van Gogh, geboren in Zundert; de Efteling; en de technologieregio rond Eindhoven met Philips, ASML en DAF.",
      themas: ["wolstad", "kruikenstad"],
      bronnen: [
        { titel: "Provincie Noord-Brabant in cijfers — AlleCijfers.nl", url: "https://allecijfers.nl/provincie/noord-brabant/" },
        { titel: "Ranglijst gemeenten Noord-Brabant — AlleCijfers.nl", url: "https://allecijfers.nl/ranglijst/grootste-en-kleinste-gemeenten-in-inwoners-in-de-provincie-noord-brabant/" },
        { titel: "Geschiedenis van Noord-Brabant — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Geschiedenis_van_Noord-Brabant" },
        { titel: "Generaliteitsland en ministaatjes — Brabants Erfgoed", url: "https://www.brabantserfgoed.nl/page/3239/generaliteitsland-en-ministaatjes" },
        { titel: "Textielindustrie in Nederland — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Textielindustrie_in_Nederland" },
        { titel: "Informatie over Noord-Brabant — VisitBrabant", url: "https://www.visitbrabant.com/nl/dit-is-brabant/over-noord-brabant" },
        { titel: "Van Gogh Brabant — VisitBrabant", url: "https://www.visitbrabant.com/en/experience-north-brabant/van-gogh-brabant" }
      ]
    }
  ],

  pois: [
    {
      id: "lambertuskerk",
      plaats: "kerkrade",
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
      plaats: "kerkrade",
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
      plaats: "kerkrade",
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
      plaats: "kerkrade",
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
      plaats: "kerkrade",
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
      plaats: "kerkrade",
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
      plaats: "kerkrade",
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
      verhaal_tekst: "De Cranenweyer is een stuwmeer bovenin het Anstelerdal. Aanlegjaar en beheerder zijn in de geraadpleegde bronnen niet vastgelegd, maar wat je hier ziet is de omkering die dit dal heeft doorgemaakt. Eeuwenlang werd het water van de Anstelerbeek juist opgestuwd om te w\u00e9rken: de Brugmolen en de Hammolen draaiden erop, van omstreeks 1400 tot in de twintigste eeuw. Het stuwmeer doet het omgekeerde \u2014 het houdt water tegen om het dal benedenstrooms beheersbaar te houden. Dezelfde beek, tegengestelde bedoeling. Wie eerst bij de Brugmolen kijkt en dan hier, ziet twee antwoorden op \u00e9\u00e9n vraag: wat doe je met water dat van een helling komt?",
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
      plaats: "kerkrade",
      jaar: 1978,
      niveau: 3,
      naam: "Theater Kerkrade",
      ondertitel: "Theatergebouw \u00b7 1978",
      coord: [50.866134, 6.062231],
      coord_bron: "osm",
      themas: ["muziek", "nakolen"],
      roem: 22, verhaal: 46, esthetiek: 58,
      afbeelding: "Grote zaal Kerkrade.jpg",
      bijschrift: "De grote zaal.",
      glance: "Een volwaardig theater in een stad van vijfenveertigduizend inwoners.",
      waarom_hier: "Kerkrade heeft voor zijn omvang veel zaalcapaciteit. Dat hangt samen met het Wereld Muziek Concours, dat hier sinds 1951 elke vier jaar duizenden muzikanten naartoe brengt.",
      verhaal_tekst: "Het theater opende in 1978, negen jaar na de sluiting van de laatste Kerkraadse mijn. Voor een stad van dit formaat is de culturele infrastructuur opvallend ruim: een volwaardig theater, de Rodahal en de Markt met d\u2019r Joep liggen binnen vijf minuten lopen van elkaar. De verklaring die w\u00e9l vaststaat is de muziek: het Wereld Muziek Concours brengt sinds 1951 elke vier jaar duizenden muzikanten en honderdduizenden bezoekers naar de stad, en dat vraagt om podia en zalen.",
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
      plaats: "kerkrade",
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
      plaats: "kerkrade",
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
      verhaal_tekst: "In 1939 vat Jean Hermans uit Kerkrade een plan op. Zijn vader is omgekomen bij een mijnongeval, en er moet volgens hem een monument komen voor de mijnwerkers. Geen gemeente die dit bedenkt, geen mijndirectie. \u00c9\u00e9n man.\n\nHet duurt achttien jaar.\n\nOp 16 juni 1957 staat het er: brons, van beeldhouwer Wim van Hoorn. Gouverneur Frans Houben trekt het doek weg en zegt, in dialect: \u201eDoa sjteet d\u2019r Joep, inne echte k\u00f6aler!\u201d Daar staat d\u2019r Joep, een echte kolenhouwer.\n\nZo kwam het beeld aan zijn naam \u2014 niet van de maker, niet van de opdrachtgever, maar van een opmerking die iemand er ter plekke uitgooide. Offici\u00eeel heet het De Mijnwerker. Dat zegt niemand.\n\nHij herdenkt het werk in [[domaniale|de Domaniale mijn]], waarvan alleen [[schacht-nulland|Schacht Nulland]] nog overeind staat.",
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
      plaats: "kerkrade",
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
      plaats: "kerkrade",
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
      plaats: "kerkrade",
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
      plaats: "kerkrade",
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
      plaats: "kerkrade",
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
      plaats: "kerkrade",
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
      verhaal_tekst: "Aan het water van de Anstelerbeek staat kasteel Erenstein, beschermd als rijksmonument. De geraadpleegde open bronnen geven over het kasteel zelf weinig prijs — de monumentstatus en de ligging, meer niet — maar die ligging valt wel te lezen. Dit is hetzelfde dal waar in de Romeinse tijd boerderijen op de hellingen stonden en waar later twee watermolens op de beek draaiden. Wie hier een kasteel neerzette, koos een plek die al vele eeuwen eerder als goede grond was ontdekt: water, beschutting en vruchtbare hellingen binnen handbereik.",
      let_hierop: "Kijk naar wat het kasteel omringt: de beek, de hoeves Nieuw Erenstein en Klarenanstel, de hellingen. Het dal verklaart de plek.",
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
      plaats: "kerkrade",
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
      plaats: "kerkrade",
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
    },

    /* ---- Het Kerkrade van na de kolen: de plekken waar bezoekers nu voor komen.
       Coördinaten komen uit secundaire bronnen (Wikipedia/Wikidata-infobox) omdat
       OSM vanuit de schrijfomgeving niet bereikbaar was: coord_bron "handmatig",
       natrekken met `python tools/verify.py <id>` zodra dat kan. ---- */
    {
      id: "gaiazoo",
      plaats: "kerkrade",
      jaar: 2005,
      niveau: 2,
      naam: "GaiaZOO",
      ondertitel: "Dierentuin · geopend 2005",
      coord: [50.86944, 6.04944],
      coord_bron: "handmatig",
      themas: ["nakolen"],
      roem: 55, verhaal: 48, esthetiek: 80,
      afbeelding: null,
      glance: "Een dierentuin in vier landschappen — savanne, regenwoud, taiga en Limburg — meermaals verkozen tot mooiste van de Benelux.",
      waarom_hier: "Het park ligt in het groene dal van de Anstelerbeek, in hetzelfde gebied als Park Gravenrode — de rand van de stad waar ruimte was voor iets groots.",
      verhaal_tekst: "De poorten gingen op 23 april 2005 open; op 1 juni van dat jaar opende prinses Margriet het park officieel. Het heette toen GaiaPark, naar Gaia, de Griekse godin van de aarde, en kreeg in 2010 zijn huidige naam. De opzet is een wandeling door vier landschappen: savanne, regenwoud, taiga en een Limburgs deel, met in totaal zo’n 150 diersoorten — van rode panda’s en veelvraten tot giraffen en gorilla’s. Het park werd vier jaar op rij verkozen tot mooiste dierentuin van de Benelux en in 2013 door de ANWB tot leukste uitje van Nederland. Voor Kerkrade is het het jongste van een rij grote publiekstrekkers die de stad na de mijnsluiting van 1969 kreeg — zie [[nakolen|Na de kolen]].",
      let_hierop: "Let op de overgangen tussen de vier landschappen: het park is opgebouwd als een reis van werelddeel naar werelddeel, en het Limburgse deel laat zien hoe het dal er zonder hekken uitziet.",
      praktisch: "Dentgenbachweg 105, Kerkrade. Openingstijden en tickets via gaiazoo.nl.",
      onbevestigd: "Coördinaat is afgeleid uit een secundaire bron en nog niet tegen OpenStreetMap gecontroleerd. Nog geen gecontroleerde vrije afbeelding.",
      verbindingen: [
        { id: "anstelvallei", relatie: "in hetzelfde groene dal" },
        { id: "discovery-museum", relatie: "de andere grote publiekstrekker van na de mijnen" },
        { id: "domaniale", relatie: "gebouwd in de stad die dit achterliet" }
      ],
      bronnen: [
        { titel: "GaiaZOO — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/GaiaZOO" },
        { titel: "GaiaZOO — officiële site", url: "https://www.gaiazoo.nl/" },
        { titel: "Attracties en bezienswaardigheden — Visit Kerkrade", url: "https://www.visitkerkrade.nl/te-doen-in-zuid-limburg/attracties-bezienswaardigheden/" },
        { titel: "Anstelvallei — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Anstelvallei" }
      ]
    },

    {
      id: "discovery-museum",
      plaats: "kerkrade",
      jaar: 1998,
      niveau: 2,
      naam: "Discovery Museum",
      ondertitel: "Museum voor wetenschap en techniek · 1998 (als Industrion)",
      coord: [50.86139, 6.05861],
      coord_bron: "handmatig",
      themas: ["nakolen", "mijnbouw"],
      roem: 40, verhaal: 62, esthetiek: 65,
      afbeelding: null,
      glance: "Het museum dat begon over de industrie van de mijnstreek en nu over de techniek van morgen gaat.",
      waarom_hier: "Het staat naast station Kerkrade Centrum, het eindpunt van de Miljoenenlijn — de spoorlijn die in 1934 voor de mijnen werd aangelegd.",
      verhaal_tekst: "Het museum opende in 1998 als Industrion, met de nadruk op de industriegeschiedenis van de streek: glas, keramiek, steenkool en wat de mijnbouw met de samenleving deed. Op 15 juni 2009 werd het Continium Discovery Center; de verwijzing naar industrie paste niet meer bij het nieuwe concept. Op 2 april 2021 ging het samen met het designmuseum Cube en het aardetheater Columbus verder als Discovery Museum, nadat de provincie Limburg had laten weten door de coronapandemie geen extra subsidie meer te kunnen geven. Wat je nu ziet gaat over wetenschap en techniek in verleden, heden en toekomst — je vecht met robots, loopt door een reusachtig brein en ziet hoe er in de mijnen werd gewerkt. Dat laatste is de rode draad die van Industrion is overgebleven.",
      let_hierop: "Zoek de mijnbouwafdeling op. Het is een van de weinige plekken waar je nog ziet hoe het werk ondergronds ging; bovengronds is daar in de stad bijna niets meer van over.",
      praktisch: "Museumplein 2, Kerkrade, naast station Kerkrade Centrum. Zie discoverymuseum.nl.",
      onbevestigd: "Coördinaat is afgeleid uit een secundaire bron en nog niet tegen OpenStreetMap gecontroleerd. Nog geen gecontroleerde vrije afbeelding.",
      verbindingen: [
        { id: "schacht-nulland", relatie: "het andere mijnmuseum, in het echte gebouw" },
        { id: "station-kerkrade-centrum", relatie: "buurman: het eindpunt van de Miljoenenlijn" },
        { id: "gaiazoo", relatie: "samen de grote uitstapjes van na de kolen" }
      ],
      bronnen: [
        { titel: "Discovery Museum — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Discovery_Center_Continium" },
        { titel: "Discovery Museum (Netherlands) — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Discovery_Museum_(Netherlands)" },
        { titel: "Columbus, Cube en Continium samen verder als Discovery Museum — discoverymuseum.nl", url: "https://www.discoverymuseum.nl/columbus-cube-en-continium-samen-verder-als-discovery-museum/" },
        { titel: "Attracties en bezienswaardigheden — Visit Kerkrade", url: "https://www.visitkerkrade.nl/te-doen-in-zuid-limburg/attracties-bezienswaardigheden/" }
      ]
    },

    {
      id: "station-kerkrade-centrum",
      plaats: "kerkrade",
      jaar: 1934,
      niveau: 3,
      naam: "Station Kerkrade Centrum · Miljoenenlijn",
      ondertitel: "Spoorlijn uit 1934 · museumstoomtrein sinds 1995",
      coord: [50.86139, 6.05751],
      coord_bron: "handmatig",
      themas: ["mijnbouw", "nakolen"],
      roem: 25, verhaal: 72, esthetiek: 55,
      afbeelding: null,
      glance: "Eindpunt van een spoorlijn die zo duur was dat de naam er nog aan herinnert — nu vertrekt hier de stoomtrein.",
      waarom_hier: "De lijn Schaesberg–Kerkrade–Simpelveld werd tussen 1925 en 1934 aangelegd om de Limburgse kolenmijnen te ontsluiten en Kerkrade aan te sluiten. Dit station is het eindpunt.",
      verhaal_tekst: "Twaalfenhalve kilometer spoor, ruim twaalf miljoen gulden. Dat was in 1934 zo’n bedrag dat de lijn van Schaesberg via Kerkrade naar Simpelveld meteen een bijnaam kreeg: de Miljoenenlijn. Het geld ging de grond in — letterlijk. Het heuvellandschap vroeg om enorme grondwerken; er werd drieënhalf miljoen kubieke meter aarde verzet om de hellingen begaanbaar te maken voor kolentreinen. De lijn was bedoeld voor het vervoer van materiaal en mijnwerkers en werd de laatste schakel in het kolenspoornet van de streek. Toen de mijnen dicht waren, verloor ze haar reden. In 1992 verkocht NS het deel Kerkrade Centrum–Simpelveld aan de Zuid-Limburgse Stoomtrein Maatschappij, die er sinds 1995 met stoomtreinen en railbussen rijdt, door naar Schin op Geul en Valkenburg. Het station is tegelijk het eindpunt van de gewone reizigerstrein uit Heerlen.",
      let_hierop: "Twee tijdperken op één perron: de gewone trein uit Heerlen en, in het seizoen, de stoomtrein richting Simpelveld — over rails die voor kolen zijn gelegd.",
      praktisch: "Stationsstraat, Kerkrade. Dienstregeling van de stoomtrein via miljoenenlijn.nl.",
      onbevestigd: "Coördinaat is afgeleid uit een secundaire bron en nog niet tegen OpenStreetMap gecontroleerd. Nog geen gecontroleerde vrije afbeelding.",
      verbindingen: [
        { id: "domaniale", relatie: "de kolen waarvoor dit spoor werd gelegd" },
        { id: "discovery-museum", relatie: "buurman op het Museumplein" },
        { id: "schacht-nulland", relatie: "wat er verder van het mijnspoor-tijdperk overbleef" }
      ],
      bronnen: [
        { titel: "Spoorlijn Schaesberg – Simpelveld — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Spoorlijn_Schaesberg_-_Simpelveld" },
        { titel: "Zuid-Limburgse Stoomtrein Maatschappij — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Zuid-Limburgse_Stoomtrein_Maatschappij" },
        { titel: "Het Miljoenenlijntje — De Mijnstreek", url: "https://www.demijnstreek.net/het-miljoenenlijntje/" },
        { titel: "Kerkrade Centrum railway station — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Kerkrade_Centrum_railway_station" },
        { titel: "De Miljoenenlijn — officiële site", url: "https://miljoenenlijn.nl/" }
      ]
    },

    {
      id: "botanische-tuin",
      plaats: "kerkrade",
      jaar: 1939,
      niveau: 3,
      naam: "Botanische Tuin Kerkrade",
      ondertitel: "Botanische tuin · ontwerp 1939 · rijksmonument 513741",
      coord: [50.87561, 6.03334],
      coord_bron: "handmatig",
      themas: ["mijnbouw"],
      roem: 15, verhaal: 68, esthetiek: 62,
      afbeelding: null,
      glance: "Een tuin die de Staatsmijnen lieten aanleggen voor hun mijnwerkers — de enige botanische tuin van Nederland die rijksmonument is.",
      waarom_hier: "De parochie van Terwinselen, nu een wijk van Kerkrade, gaf de grond; de Staatsmijnen gaven de opdracht voor het ontwerp. Een tuin voor de mensen die onder de grond werkten.",
      verhaal_tekst: "In 1939 tekende tuinarchitect John Bergmans uit Oisterwijk het ontwerp, in opdracht van de Staatsmijnen. Hij koos de Engelse landschapsstijl: een rotstuin, een pad rond de begraafplaats en dan een landschapstuin met vijver en vaste-plantenborder. De officiële omschrijving van het Rijk noemt de tuin een ‘vitaliserende aanvulling op het grauwe bestaan van de mijnwerkers’ — het is de enige botanische tuin van Nederland waarvan aanleg en ontwerp als rijksmonument beschermd zijn. Vandaag telt hij op anderhalve hectare zo’n 785 plantensoorten uit 195 families. De tuin is daarmee een zeldzaam stuk mijnbouwerfgoed: geen schacht of steenberg, maar wat een mijnbedrijf bóven de grond voor zijn mensen aanlegde.",
      let_hierop: "Dit is een aangelegd landschap, geen verzameling in bakken. Let op hoe paden, vijver en borders één beeld vormen — dat ontwerp is wat beschermd is, niet de planten.",
      praktisch: "St. Hubertuslaan 74, Kerkrade (Terwinselen). Openingstijden via botatuin.nl.",
      onbevestigd: "Coördinaat is een schatting op basis van het adres en nog niet tegen OpenStreetMap gecontroleerd — kan enkele honderden meters afwijken. Nog geen gecontroleerde vrije afbeelding. Stichtingsjaar wordt zowel als 1938 als 1939 genoemd; hier staat het ontwerpjaar uit het monumentenregister.",
      verbindingen: [
        { id: "schacht-nulland", relatie: "wat de mijn achterliet; dit is wat ze bewust aanlegde" },
        { id: "hamboskapel", relatie: "gebouwd in dezelfde jaren van snelle groei" },
        { id: "andere-mijnen", relatie: "de andere kant van de mijnbouw: wat er bovengronds voor mensen werd gedaan" }
      ],
      bronnen: [
        { titel: "Botanische Tuin — Rijksmonumenten.nl (513741)", url: "https://rijksmonumenten.nl/monument/513741/botanische-tuin/kerkrade/" },
        { titel: "Botanische Tuin Kerkrade — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Botanische_Tuin_Kerkrade" },
        { titel: "Botanische tuin Kerkrade — European Garden Heritage Network", url: "https://www.eghn.org/en/kerkrade-botanical-garden/" },
        { titel: "Botanische Tuin Kerkrade — officiële site", url: "https://botatuin.nl/" }
      ]
    },

    {
      id: "parkstad-stadion",
      plaats: "kerkrade",
      jaar: 2000,
      niveau: 3,
      naam: "Parkstad Limburg Stadion",
      ondertitel: "Voetbalstadion van Roda JC · 2000",
      coord: [50.85694, 6.00583],
      coord_bron: "handmatig",
      themas: ["nakolen", "muziek"],
      roem: 30, verhaal: 56, esthetiek: 70,
      afbeelding: null,
      glance: "Het stadion van Roda JC — een club waarvan de voorganger in 1956 landskampioen werd, en om de vier jaar het podium van het WMC.",
      waarom_hier: "Roda JC speelde tot 2000 op het Gemeentelijk Sportpark Kaalheide en verhuisde in dat jaar naar dit nieuwe stadion aan de westrand van de stad.",
      verhaal_tekst: "Het stadion werd op 15 augustus 2000 geopend met een oefenwedstrijd tegen Real Zaragoza (2–2) en biedt plaats aan 19.979 toeschouwers. De club die er speelt is jonger dan hij lijkt: Roda JC ontstond op 1 juni 1962 uit een fusie van Rapid JC en Roda Sport. Rapid JC was in 1956 landskampioen van Nederland geworden, maar zat in 1962 zonder geld en degradeerde als laatste uit de Eredivisie. Nieuwe sponsoring was alleen mogelijk als er in de Oostelijke Mijnstreek nog maar één profclub overbleef — en zo fuseerden de buren. Het stadion is niet alleen van het voetbal: tijdens het Wereld Muziek Concours worden hier de mars- en showwedstrijden gehouden, en er zijn concerten en beurzen.",
      let_hierop: "Om de vier jaar is dit geen voetbalstadion maar een concertzaal in de open lucht: de marswedstrijden van het WMC.",
      praktisch: "Roda J.C. Ring 1, Kerkrade. Wedstrijden en rondleidingen via rodajckerkrade.nl.",
      onbevestigd: "Coördinaat is afgeleid uit een secundaire bron en nog niet tegen OpenStreetMap gecontroleerd. Nog geen gecontroleerde vrije afbeelding.",
      verbindingen: [
        { id: "wmc", relatie: "de marswedstrijden zijn hier" },
        { id: "gaiazoo", relatie: "vijf jaar jonger, dezelfde nieuwe stad" },
        { id: "theater-kerkrade", relatie: "de andere zaal die de stad na de mijnen kreeg" }
      ],
      bronnen: [
        { titel: "Parkstad Limburg Stadion — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Parkstad_Limburg_Stadion" },
        { titel: "Rapid JC — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Rapid_JC" },
        { titel: "Historie — Roda JC Kerkrade", url: "https://www.rodajckerkrade.nl/club/over-roda-jc/" },
        { titel: "Gemeentelijk Sportpark Kaalheide — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Gemeentelijk_Sportpark_Kaalheide" },
        { titel: "Wereld Muziek Concours — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Wereld_Muziek_Concours" }
      ]
    },

    /* ---- London — plekken ---- */
    {
      id: "tower-of-london",
      plaats: "london",
      jaar: 1078,
      niveau: 1,
      naam: "Tower of London",
      ondertitel: "Kasteel · White Tower 1078–1100 · werelderfgoed 1988",
      coord: [51.50806, -0.07611],
      coord_bron: "handmatig",
      themas: ["kroon", "theems"],
      roem: 95,
      verhaal: 70,
      esthetiek: 92,
      afbeelding: null,
      glance: "Vesting, paleis, gevangenis en dierentuin van Willem de Veroveraar — nu de bewaarplaats van de kroonjuwelen.",
      waarom_hier: "Willem de Veroveraar zette zijn vesting aan de rivier, op de zuidoosthoek van de oude Romeinse stad: van hier af hield hij zowel de Theems als de stad in de gaten.",
      verhaal_tekst: "Willem de Veroveraar liet na 1066 aan de rivier een vesting bouwen als teken van Normandische macht; de White Tower in het midden kwam tussen 1078 en 1100 overeind, van steen die uit Frankrijk werd aangevoerd. Daarna was de Tower eeuwenlang tegelijk paleis, gevangenis en dierentuin. In 1252 kreeg Henry III van de koning van Noorwegen een witte beer, die gemuilkorfd en aan een ketting in de Theems mocht vissen. Op 19 mei 1536 werd Anne Boleyn, de tweede vrouw van Henry VIII, op Tower Green onthoofd en in de kapel St Peter ad Vincula begraven. Hier liggen de kroonjuwelen, en sinds 1988 is het complex werelderfgoed. Bij [[grote-brand-1666|de Grote Brand van 1666]] bleef de Tower gespaard: het garnizoen blies met buskruit de huizen ervoor op en hield zo het vuur tegen. Vlak ernaast staat nog [[london-wall|de Romeinse stadsmuur]].",
      let_hierop: "Tel de raven: bij traditie en koninklijk besluit zijn er altijd minstens zes op het terrein. En kijk naar de White Tower — het witte middenstuk is het oudste deel.",
      praktisch: "Tower Hill, London EC3N 4AB. Tickets en openingstijden via hrp.org.uk.",
      onbevestigd: "Coördinaat is afgeleid uit een secundaire bron en nog niet tegen OpenStreetMap gecontroleerd. Nog geen gecontroleerde vrije afbeelding.",
      verbindingen: [
        { id: "tower-bridge", relatie: "de brug ernaast, naar het kasteel genoemd" },
        { id: "london-wall", relatie: "de Romeinse muur waar het kasteel tegenaan gebouwd is" },
        { id: "grote-brand-1666", relatie: "het garnizoen stopte hier het vuur met buskruit" },
        { id: "westminster-abbey", relatie: "hier de kroonjuwelen, daar de kroning" }
      ],
      bronnen: [
        { titel: "Tower of London — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Tower_of_London" },
        { titel: "Tower of London — Britannica", url: "https://www.britannica.com/topic/Tower-of-London" },
        { titel: "Tower of London — UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/488" },
        { titel: "Tower of London — EBSCO Research Starters", url: "https://www.ebsco.com/research-starters/history/tower-london" },
        { titel: "8 things you need to know about the Tower of London — Historic Royal Palaces / Google Arts & Culture", url: "https://artsandculture.google.com/story/8-things-you-need-to-know-about-the-tower-of-london-historic-royal-palaces/eAVxSyLgG1zf4Q?hl=en" },
        { titel: "The Tower of London Menagerie — Historic Royal Palaces", url: "https://www.hrp.org.uk/tower-of-london/history-and-stories/the-tower-of-london-menagerie/" },
        { titel: "Anne Boleyn — Historic Royal Palaces", url: "https://www.hrp.org.uk/tower-of-london/history-and-stories/anne-boleyn/" },
        { titel: "Great Fire of London 1666 — Historic UK", url: "https://www.historic-uk.com/HistoryUK/HistoryofEngland/The-Great-Fire-of-London/" }
      ]
    },

    {
      id: "tower-bridge",
      plaats: "london",
      jaar: 1894,
      niveau: 1,
      naam: "Tower Bridge",
      ondertitel: "Basculebrug · 1886–1894",
      coord: [51.50556, -0.07528],
      coord_bron: "handmatig",
      themas: ["theems"],
      roem: 95,
      verhaal: 55,
      esthetiek: 95,
      afbeelding: null,
      glance: "De brug met de twee torens en de klappen die nog zo'n 800 keer per jaar omhooggaan — in 1952 met een bus erop.",
      waarom_hier: "Het oosten van de stad had eind negentiende eeuw een brug nodig, maar schepen moesten de rivier op kunnen. Daarom een brug die open kan, vlak naast de Tower.",
      verhaal_tekst: "Architect Horace Jones en ingenieur John Wolfe Barry tekenden een basculebrug: twee klappen die omhooggaan, tussen twee torens die de hoge loopbruggen dragen. Het ontwerp werd in 1884 goedgekeurd, de bouw duurde van 1886 tot 1894, en Jones overleed voordat de brug af was. Op 30 juni 1894 opende de prins van Wales, de latere Edward VII, hem met veel ceremonie. Op 30 december 1952 vergat de wachter de bel te luiden en de slagbomen te sluiten. Buschauffeur Albert Gunter zag de klap onder zijn bus 78 van Shoreditch naar Dulwich omhoogkomen en gaf gas: de bus sprong de kier over. De klappen gaan nog ongeveer 800 keer per jaar open, sinds 1974 elektrisch-hydraulisch; de oude stoommachines staan in de machinekamers. In 2014 kregen de loopbruggen een glazen vloer, ruim 40 meter boven het water.",
      let_hierop: "Kijk vanaf de kade naar de naad in het midden van het wegdek: daar splitst de brug als hij opengaat. De lifttijden staan op towerbridge.org.uk.",
      praktisch: "Tower Bridge Road, London SE1 2UP. Rijden en lopen over de brug is gratis; de loopbruggen en machinekamers kosten toegang.",
      onbevestigd: "Coördinaat is afgeleid uit een secundaire bron en nog niet tegen OpenStreetMap gecontroleerd. Nog geen gecontroleerde vrije afbeelding.",
      verbindingen: [
        { id: "tower-of-london", relatie: "het kasteel waar de brug naar genoemd is" },
        { id: "londinium", relatie: "de eerste brug over deze rivier lag hier vlakbij, rond het jaar 50" }
      ],
      bronnen: [
        { titel: "Tower Bridge — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Tower_Bridge" },
        { titel: "Tower Bridge: History And Engineering Facts — Institution of Civil Engineers", url: "https://www.ice.org.uk/what-is-civil-engineering/infrastructure-projects/tower-bridge" },
        { titel: "Timeline: The construction of Tower Bridge — Tower Bridge", url: "https://www.towerbridge.org.uk/stories/timeline-the-construction-of-tower-bridge" },
        { titel: "Did a double decker bus really jump over Tower Bridge? — Country Life", url: "https://www.countrylife.co.uk/luxury/motoring/curious-questions-double-decker-bus-really-jump-tower-bridge-192696" },
        { titel: "Tower Bridge Facts — London Tickets", url: "https://www.london-tickets.co.uk/tower-bridge/facts/" }
      ]
    },

    {
      id: "st-pauls",
      plaats: "london",
      jaar: 1710,
      niveau: 1,
      naam: "St Paul's Cathedral",
      ondertitel: "Kathedraal · 1675–1710 · Christopher Wren",
      coord: [51.51381, -0.09841],
      coord_bron: "handmatig",
      themas: ["grote-brand", "blitz"],
      roem: 88,
      verhaal: 72,
      esthetiek: 92,
      afbeelding: null,
      glance: "Wrens koepel van 111 meter op het hoogste punt van de City — gebouwd na de brand van 1666, overeind gebleven in de Blitz.",
      waarom_hier: "Op Ludgate Hill, het hoogste punt van de City, stond al de oude kathedraal die in 1666 afbrandde. Wren bouwde de nieuwe op dezelfde plek.",
      verhaal_tekst: "De kathedraal die hier stond, ging in 1666 in [[grote-brand-1666|de Grote Brand]] verloren. Christopher Wren bouwde tussen 1675 en 1710 de huidige, in Engelse barok, op Ludgate Hill, het hoogste punt van de City. De koepel komt tot ruim 111 meter. Binnen leidt een trap van 257 treden naar de Whispering Gallery, waar een gefluisterd woord tegen de muur aan de overkant hoorbaar is; na 528 treden sta je op de Golden Gallery, op 85 meter. Hier werden de staatsbegrafenissen van Nelson (1806), Wellington en Churchill (1965) gehouden, en trouwden Charles en Diana op 29 juli 1981. Op 10 oktober 1940 raakte een bom het koor en verwoestte het altaar. Op 29 december 1940 vielen 28 brandbommen op het gebouw; Churchill liet weten dat St Paul's 'tegen elke prijs' gered moest worden, en de vrijwilligers van de St Paul's Watch doofden de branden terwijl de waterleidingen kapot lagen. De foto die Herbert Mason die nacht vanaf een dak bij Fleet Street maakte — de koepel boven de rook — werd het beeld van [[blitz|de Blitz]].",
      let_hierop: "Ga in de Whispering Gallery met je rug naar de muur staan en laat iemand aan de overkant fluisteren. En zoek de Golden Gallery bovenin de koepel: dat is het hoogste punt dat je kunt bereiken.",
      praktisch: "St Paul's Churchyard, London EC4M 8AD. Toegang met ticket; kerkdiensten gratis. stpauls.co.uk.",
      onbevestigd: "Coördinaat is afgeleid uit een secundaire bron (vier decimalen) en nog niet tegen OpenStreetMap gecontroleerd. Nog geen gecontroleerde vrije afbeelding.",
      verbindingen: [
        { id: "grote-brand-1666", relatie: "gebouwd op de plek van de kathedraal die toen afbrandde" },
        { id: "monument", relatie: "van dezelfde architecten, over dezelfde brand" },
        { id: "churchill-war-rooms", relatie: "van daaruit kwam het bevel: redden tegen elke prijs" },
        { id: "postmans-park", relatie: "een paar minuten lopen naar het noorden" }
      ],
      bronnen: [
        { titel: "St Paul's Cathedral — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/St_Paul%27s_Cathedral" },
        { titel: "A history of St Paul's Cathedral — London Museum", url: "https://www.londonmuseum.org.uk/collections/london-stories/a-history-of-st-pauls-cathedral/" },
        { titel: "Planning your visit — St Paul's Cathedral", url: "https://www.stpauls.co.uk/planning-your-visit" },
        { titel: "Nelson, Wellington and Churchill — St Paul's Cathedral", url: "https://www.stpauls.co.uk/nelson-wellington-and-churchill" },
        { titel: "Wedding of Prince Charles and Lady Diana Spencer — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Wedding_of_Prince_Charles_and_Lady_Diana_Spencer" },
        { titel: "Wartime damage and repair — St Paul's Cathedral", url: "https://www.stpauls.co.uk/wartime-damage-and-repair" },
        { titel: "St Paul's Cathedral (Blitz Stories) — Historic England", url: "https://historicengland.org.uk/whats-new/features/blitz-stories/st-paul-s-cathedral/" },
        { titel: "St Paul's Survives — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/St_Paul%27s_Survives" }
      ]
    },

    {
      id: "westminster-abbey",
      plaats: "london",
      jaar: 1065,
      niveau: 1,
      naam: "Westminster Abbey",
      ondertitel: "Kroningskerk · ingewijd 1065, herbouwd vanaf 1245 · werelderfgoed 1987",
      coord: [51.49944, -0.12751],
      coord_bron: "handmatig",
      themas: ["kroon"],
      roem: 90,
      verhaal: 60,
      esthetiek: 88,
      afbeelding: null,
      glance: "De kerk waar sinds kerst 1066 elke Engelse en Britse vorst gekroond is — en waar meer dan 3.300 mensen begraven liggen.",
      waarom_hier: "Edward the Confessor bouwde zijn kerk naast zijn paleis op Thorney Island, ten westen van de oude stad. Kroon en kerk staan hier sindsdien naast elkaar.",
      verhaal_tekst: "Edward the Confessor bouwde hier een grote stenen kerk ter ere van Sint Petrus. Ze werd op 28 december 1065 ingewijd, maar de koning was te ziek om erbij te zijn en stierf een paar dagen later. Op eerste kerstdag 1066 liet Willem de Veroveraar zich hier kronen; Normandische soldaten buiten hielden het gejuich voor een aanslag en stichtten brand in de huizen rondom. Sindsdien is elke kroning hier geweest: Charles III was in mei 2023 de veertigste vorst, in de kroningsstoel die Edward I liet maken om de veroverde Stone of Scone in te sluiten. Het huidige gotische gebouw begon Henry III in 1245. Er liggen meer dan 3.300 mensen begraven, onder wie zestien vorsten en acht premiers. Sinds 11 november 1920 ligt hier ook de Unknown Warrior, een naamloze Britse soldaat uit de Eerste Wereldoorlog. Samen met [[big-ben|het Palace of Westminster]] en St Margaret's Church staat de abdij sinds 1987 op de werelderfgoedlijst.",
      let_hierop: "Zoek de kroningsstoel: elke vorst sinds Edward I is erin gekroond. En let op het graf van de Unknown Warrior — het enige graf in de kerk waar niemand overheen loopt.",
      praktisch: "Dean's Yard, London SW1P 3PA. Toegang met ticket; diensten gratis. westminster-abbey.org.",
      onbevestigd: "Coördinaat is afgeleid uit een secundaire bron en nog niet tegen OpenStreetMap gecontroleerd. Nog geen gecontroleerde vrije afbeelding. Dat er niet over het graf van de Unknown Warrior wordt gelopen is een veel herhaald gebruik dat hier nog geen eigen bron heeft.",
      verbindingen: [
        { id: "big-ben", relatie: "samen één werelderfgoed" },
        { id: "tower-of-london", relatie: "de kroonjuwelen die hier worden gebruikt, liggen daar" },
        { id: "buckingham-palace", relatie: "waar de gekroonde vorst woont" }
      ],
      bronnen: [
        { titel: "Westminster Abbey — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Westminster_Abbey" },
        { titel: "History of Westminster Abbey — Westminster Abbey", url: "https://www.westminster-abbey.org/history/history-of-westminster-abbey" },
        { titel: "A history of coronations — Westminster Abbey", url: "https://www.westminster-abbey.org/history/coronations-at-the-abbey/a-history-of-coronations" },
        { titel: "Coronation stories — Westminster Abbey", url: "https://www.westminster-abbey.org/history/coronations-at-the-abbey/coronation-stories" },
        { titel: "Buried among the kings — Westminster Abbey", url: "https://www.westminster-abbey.org/history/explore-our-history/buried-among-the-kings" },
        { titel: "Unknown Warrior — Westminster Abbey", url: "https://www.westminster-abbey.org/abbey-commemorations/commemorations/unknown-warrior" },
        { titel: "Palace of Westminster and Westminster Abbey — UNESCO", url: "https://whc.unesco.org/en/list/426/" }
      ]
    },

    {
      id: "big-ben",
      plaats: "london",
      jaar: 1859,
      niveau: 1,
      naam: "Big Ben / Elizabeth Tower",
      ondertitel: "Klokkentoren van het Palace of Westminster · 1859 · werelderfgoed 1987",
      coord: [51.50083, -0.12444],
      coord_bron: "handmatig",
      themas: ["kroon"],
      roem: 96,
      verhaal: 62,
      esthetiek: 92,
      afbeelding: null,
      glance: "Big Ben is de klok, niet de toren: 13,7 ton, gebarsten in 1859 en nog steeds met die barst in gebruik.",
      waarom_hier: "De toren staat aan de noordkant van het Palace of Westminster, het parlementsgebouw aan de Theems — de klok is er voor het parlement gemaakt.",
      verhaal_tekst: "Big Ben is officieel de naam van de klok, niet van de toren: de Great Bell van 13,7 ton. De toren van 96 meter aan de noordkant van het Palace of Westminster heette Clock Tower en kreeg in 2012 de naam Elizabeth Tower, voor het diamanten jubileum van Elizabeth II. Het ontwerp is van Augustus Pugin; de toren was in 1859 klaar. De klok sloeg voor het eerst op 11 juli 1859 en barstte in september van datzelfde jaar. Vier jaar bleef ze stil, tot iemand een oplossing vond: de klok een kwartslag draaien zodat de hamer op een andere plek sloeg, een lichtere hamer, en een vierkantje uit de rand zagen zodat de scheur niet verder liep. De barst zit er nog en geeft de slag zijn eigen toon. Het uurwerk wordt bijgesteld met oude pennies van voor 1971 op de slinger: één penny erbij en de klok wint twee vijfde seconde per dag.",
      let_hierop: "Luister om het hele uur: eerst de vier kwartierklokken, dan de zware slag van Big Ben zelf.",
      praktisch: "Palace of Westminster, London SW1A 0AA. Van buiten vrij te zien; rondleidingen in de toren alleen via parliament.uk.",
      onbevestigd: "Coördinaat is afgeleid uit een secundaire bron en nog niet tegen OpenStreetMap gecontroleerd. Nog geen gecontroleerde vrije afbeelding.",
      verbindingen: [
        { id: "westminster-abbey", relatie: "samen één werelderfgoed" },
        { id: "churchill-war-rooms", relatie: "aan de overkant van Parliament Square, onder de grond" },
        { id: "great-stink", relatie: "in dit gebouw hingen in 1858 de gordijnen in chloorkalk" }
      ],
      bronnen: [
        { titel: "Big Ben — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Big_Ben" },
        { titel: "Facts and figures: Big Ben and Elizabeth Tower — UK Parliament", url: "https://www.parliament.uk/about/living-heritage/building/palace/big-ben/facts-figures/" },
        { titel: "Great Clock facts — UK Parliament", url: "https://www.parliament.uk/about/living-heritage/building/palace/big-ben/facts-figures/great-clock-facts/" },
        { titel: "Big Ben — Britannica", url: "https://www.britannica.com/topic/Big-Ben-clock-London" },
        { titel: "The arrival of Big Ben at Westminster in 1858 — IanVisits", url: "https://www.ianvisits.co.uk/articles/the-arrival-of-big-ben-at-westminster-1098/" },
        { titel: "Palace of Westminster and Westminster Abbey — UNESCO", url: "https://whc.unesco.org/en/list/426/" }
      ]
    },

    {
      id: "buckingham-palace",
      plaats: "london",
      jaar: 1703,
      niveau: 2,
      naam: "Buckingham Palace",
      ondertitel: "Koninklijke residentie · stadshuis 1703, paleis sinds 1837",
      coord: [51.50083, -0.14194],
      coord_bron: "handmatig",
      themas: ["kroon"],
      roem: 94,
      verhaal: 40,
      esthetiek: 80,
      afbeelding: null,
      glance: "775 kamers, sinds 1837 het Londense huis van de vorst — en of hij thuis is, staat op het dak.",
      waarom_hier: "Het begon als het stadshuis van een hertog aan de rand van St James's Park; George III kocht het voor zijn vrouw, en pas Victoria maakte er de hoofdresidentie van.",
      verhaal_tekst: "Het begon in 1703 als Buckingham House, een groot stadshuis voor de hertog van Buckingham. George III kocht het in 1761 als privéwoning voor koningin Charlotte. John Nash bouwde het om tot paleis en ging daarbij zo ver over het budget dat hij ontslagen werd; Edward Blore maakte het werk af onder William IV. De eerste vorst die er woonde was Victoria, in juli 1837. Het paleis telt 775 kamers: 19 staatsiezalen, 52 slaapkamers voor koninklijke familie en gasten, 188 personeelsslaapkamers, 92 kantoren en 78 badkamers. Of de koning thuis is, staat op het dak: hangt de Royal Standard, dan is hij er; hangt de Union Flag, dan niet — en dan staan er twee in plaats van vier wachten voor de deur. De staatsiezalen zijn elke zomer voor publiek geopend, in 2026 van 9 juli tot 27 september.",
      let_hierop: "Kijk eerst naar de vlag op het dak en tel dan de wachten voor de gevel: vier betekent dat de koning thuis is, twee dat hij weg is.",
      praktisch: "London SW1A 1AA. Buitenkant vrij te zien; de staatsiezalen alleen in de zomer, tickets via rct.uk.",
      onbevestigd: "Coördinaat is afgeleid uit een secundaire bron en nog niet tegen OpenStreetMap gecontroleerd. Nog geen gecontroleerde vrije afbeelding.",
      verbindingen: [
        { id: "westminster-abbey", relatie: "waar de bewoner gekroond wordt" },
        { id: "big-ben", relatie: "het parlement, een kilometer verder in dezelfde wijk" }
      ],
      bronnen: [
        { titel: "Royal Residences: Buckingham Palace — The Royal Family", url: "https://www.royal.uk/royal-residences-buckingham-palace" },
        { titel: "Buckingham Palace — Royal Collection Trust", url: "https://www.rct.uk/visit/buckingham-palace" },
        { titel: "Buckingham Palace — EBSCO Research Starters", url: "https://www.ebsco.com/research-starters/history/buckingham-palace" },
        { titel: "Buckingham Palace — Changing the Guard", url: "https://changing-guard.com/buckingham-palace.html" },
        { titel: "Buckingham Palace Garden — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Buckingham_Palace_Garden" }
      ]
    },

    {
      id: "monument",
      plaats: "london",
      jaar: 1677,
      niveau: 2,
      naam: "The Monument",
      ondertitel: "Gedenkzuil voor de Grote Brand · 1671–1677 · Wren en Hooke",
      coord: [51.51017, -0.08604],
      coord_bron: "handmatig",
      themas: ["grote-brand"],
      roem: 45,
      verhaal: 85,
      esthetiek: 75,
      afbeelding: null,
      glance: "Een zuil van 202 voet, precies 202 voet van de bakkerij waar de brand begon — en heimelijk een telescoop.",
      waarom_hier: "De zuil staat op de hoek van Monument Street en Fish Street Hill, 202 voet ten westen van Pudding Lane: de afstand tot het beginpunt van de brand is in de hoogte herhaald.",
      verhaal_tekst: "Loop vanaf hier 202 voet — ruim 61 meter — naar het oosten en je staat in Pudding Lane, waar op 2 september 1666 in de bakkerij van Thomas Farriner [[grote-brand-1666|de Grote Brand]] begon. De zuil is precies even hoog: 202 voet. Christopher Wren en Robert Hooke ontwierpen hem, een Dorische zuil van Portlandsteen, gebouwd tussen 1671 en 1677 — zes jaar, omdat er niet genoeg steen van het juiste formaat te krijgen was. Bovenop staat een koperen urn met vlammen. Binnenin klimt een wenteltrap van 311 treden naar het uitzichtplatform. Maar Hooke wilde meer dan een gedenkteken: onder de zuil zit een rond laboratorium, bereikbaar via een luik in de vloer, en de holle schacht was bedoeld als telescoop om recht omhoog naar de sterren te kijken. Dat mislukte — het verkeer eromheen liet het instrument trillen. Het is de hoogste vrijstaande stenen zuil ter wereld.",
      let_hierop: "Ga aan de voet staan en kijk naar het oosten: even ver als de zuil hoog is, ligt Pudding Lane. Boven klim je 311 treden voor het uitzicht over de City.",
      praktisch: "Fish Street Hill, London EC3R 8AH. Beklimmen met ticket; themonument.org.uk.",
      onbevestigd: "Coördinaat is afgeleid uit een secundaire bron en nog niet tegen OpenStreetMap gecontroleerd. Nog geen gecontroleerde vrije afbeelding.",
      verbindingen: [
        { id: "grote-brand-1666", relatie: "gedenkt deze brand, op deze afstand van het beginpunt" },
        { id: "st-pauls", relatie: "van dezelfde architect, uit dezelfde herbouw" },
        { id: "tower-of-london", relatie: "de vesting die het vuur aan de oostkant tegenhield" }
      ],
      bronnen: [
        { titel: "Monument to the Great Fire of London — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Monument_to_the_Great_Fire_of_London" },
        { titel: "About — The Monument", url: "https://www.themonument.org.uk/about" },
        { titel: "History — The Monument", url: "https://www.themonument.org.uk/history" },
        { titel: "Visiting The Secret Laboratory Inside The Monument — Londonist", url: "https://londonist.com/2016/01/monument" },
        { titel: "The Great Fire of London Monument — History Hit", url: "https://www.historyhit.com/locations/the-great-fire-of-london-monument/" },
        { titel: "Thomas Farriner — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Thomas_Farriner" }
      ]
    },

    {
      id: "london-wall",
      plaats: "london",
      jaar: 200,
      jaar_circa: true,
      niveau: 3,
      naam: "Romeinse stadsmuur bij Tower Hill",
      ondertitel: "Stadsmuur · ca. 190–225 · Romeins onder, middeleeuws boven",
      coord: [51.50936, -0.07601],
      coord_bron: "handmatig",
      themas: ["theems"],
      roem: 20,
      verhaal: 80,
      esthetiek: 55,
      afbeelding: null,
      glance: "Ruim tien meter muur naast een metrostation: de onderste 4,4 meter is Romeins, de rest middeleeuws — met een keizer ervoor die van een schroothoop komt.",
      waarom_hier: "Dit is de zuidoosthoek van de Romeinse stad, waar de muur naar de rivier liep. De Tower werd er later tegenaan gebouwd, en dat is waarom dit stuk bleef staan.",
      verhaal_tekst: "Rond het jaar 200 — archeologen dateren de bouw tussen 190 en 225 — kreeg [[londinium|Londinium]] een stenen muur van ongeveer vier kilometer om een gebied van 134 hectare. Naast metrostation Tower Hill staat een stuk van 10,6 meter hoog. Alleen de onderste 4,4 meter is Romeins, herkenbaar aan de rode banden van baksteen; de 6,4 meter erboven is middeleeuws, opgemetseld tussen de twaalfde en de zeventiende eeuw. Ervoor staat een bronzen keizer Trajanus, die nooit in Brittannië geweest is. Het beeld werd in de jaren vijftig door dominee 'Tubby' Clayton gevonden op een schroothoop in Southampton; na zijn dood in 1972 zette de Tower Hill Improvement Trust het in 1980 hier neer, zoals hij gewild had. Iets noordelijker, aan Cooper's Row, staat nog een stuk muur waarin de middeleeuwse schietgaten te zien zijn.",
      let_hierop: "Zoek de horizontale rode banden onderin: dat zijn Romeinse baksteenlagen. Waar ze ophouden, houdt Rome op en begint de middeleeuwen.",
      praktisch: "Trinity Place / Tower Hill, London EC3N 4DJ, direct bij de uitgang van metrostation Tower Hill. Vrij toegankelijk (English Heritage).",
      onbevestigd: "Coördinaat is afgeleid uit een secundaire bron en nog niet tegen OpenStreetMap gecontroleerd. Nog geen gecontroleerde vrije afbeelding.",
      verbindingen: [
        { id: "londinium", relatie: "het zichtbare stuk van deze verdwenen stad" },
        { id: "tower-of-london", relatie: "tegen deze muur aan gebouwd" }
      ],
      bronnen: [
        { titel: "London Wall — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/London_Wall" },
        { titel: "History of London Wall — English Heritage", url: "https://www.english-heritage.org.uk/visit/places/london-wall/history/" },
        { titel: "The Old Roman City Wall Of London On Tower Hill — London Walking Tours", url: "https://www.london-walking-tours.co.uk/secret-london/roman-wall-tower-hill.htm" },
        { titel: "Statue of Trajan, Tower Hill — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Statue_of_Trajan,_Tower_Hill" },
        { titel: "London's Roman City Wall Walk — Historic UK", url: "https://www.historic-uk.com/HistoryMagazine/DestinationsUK/Londons-Roman-City-Wall/" }
      ]
    },

    {
      id: "postmans-park",
      plaats: "london",
      jaar: 1900,
      niveau: 3,
      naam: "Postman's Park — Watts Memorial",
      ondertitel: "Park 1880 · Memorial to Heroic Self-Sacrifice 1900",
      coord: [51.51681, -0.09764],
      coord_bron: "handmatig",
      themas: ["grote-brand"],
      roem: 10,
      verhaal: 95,
      esthetiek: 50,
      afbeelding: null,
      glance: "Een houten galerij met 54 tegels voor 62 gewone mensen die stierven terwijl ze iemand anders redden.",
      waarom_hier: "Het park ontstond in 1880 op de oude kerkhoven van drie kerken, naast het hoofdpostkantoor; de postbodes die hier lunchten gaven het zijn naam. Watts koos het in 1900 voor zijn monument.",
      verhaal_tekst: "In september 1887 schreef de schilder George Frederic Watts een brief aan The Times: het gouden jubileum van Victoria kon het best gevierd worden met een monument voor 'heldendom in het dagelijks leven', voor mensen die anders vergeten zouden worden. Hij noemde Alice Ayres, een kindermeisje dat op 24 april 1885 bij een brand in Union Street drie kinderen redde door eerst een matras en toen de kinderen uit het raam te laten vallen, en zelf de val niet overleefde. Op 30 juli 1900 werd zijn Memorial to Heroic Self-Sacrifice onthuld: een houten galerij met tegeltableaus. Er waren er toen vier. Nu zijn het 54 tegels voor 62 mensen. De laatste kwam er op 11 juni 2009: Leigh Pitt, die in 2007 een jongen van negen uit een kanaal in Thamesmead redde en zelf verdronk — de eerste nieuwe tegel in 78 jaar. Het park zelf ontstond in 1880 op oude kerkhoven en dankt zijn naam aan de postbodes van het hoofdpostkantoor ernaast, die hier hun lunch aten. In de film Closer (2004) draait het plot om de naam op één van de tegels: Alice Ayres.",
      let_hierop: "Lees de tegels een voor een — elke tegel is één verhaal in één zin. Zoek Alice Ayres, en de nieuwste, Leigh Pitt (2009), die er een eeuw na de rest bij kwam.",
      praktisch: "King Edward Street / Little Britain, London EC1A 7BT. Vrij toegankelijk, overdag open (City of London).",
      onbevestigd: "Coördinaat is afgeleid uit een secundaire bron en nog niet tegen OpenStreetMap gecontroleerd. Nog geen gecontroleerde vrije afbeelding.",
      verbindingen: [
        { id: "st-pauls", relatie: "een paar minuten lopen naar het zuiden" },
        { id: "monument", relatie: "ook een gedenkteken voor een brand, maar dan voor één stad" }
      ],
      bronnen: [
        { titel: "Postman's Park — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Postman%27s_Park" },
        { titel: "Memorial to Heroic Self-Sacrifice — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Memorial_to_Heroic_Self-Sacrifice" },
        { titel: "The Watts Memorial to Heroic Self-Sacrifice — postmanspark.org.uk", url: "https://www.postmanspark.org.uk/about.html" },
        { titel: "Alice Ayres — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Alice_Ayres" },
        { titel: "How Did Postman's Park Get Its Name? — Londonist", url: "https://londonist.com/london/history/how-did-postman-s-park-get-its-name" },
        { titel: "Postman's Park — City of London", url: "https://www.cityoflondon.gov.uk/things-to-do/city-gardens/find-a-garden/postmans-park" },
        { titel: "Closer (film) — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Closer_(film)" }
      ]
    },

    {
      id: "churchill-war-rooms",
      plaats: "london",
      jaar: 1939,
      niveau: 2,
      naam: "Churchill War Rooms",
      ondertitel: "Ondergronds hoofdkwartier · in gebruik 1939–1945 · museum sinds 1984",
      coord: [51.50208, -0.12903],
      coord_bron: "handmatig",
      themas: ["blitz", "kroon"],
      roem: 55,
      verhaal: 78,
      esthetiek: 40,
      afbeelding: null,
      glance: "De kelder onder Whitehall waar het oorlogskabinet 115 keer vergaderde — met een geheime telefoonlijn achter een toiletdeur.",
      waarom_hier: "De kelder ligt onder het ministerie van Financiën aan King Charles Street, op loopafstand van Downing Street en het parlement: de regering kon hier doorwerken terwijl boven de bommen vielen.",
      verhaal_tekst: "Onder het ministerie van Financiën aan King Charles Street ligt een kelder die op 27 augustus 1939 in gebruik werd genomen, een week voor de oorlogsverklaring. Churchills oorlogskabinet vergaderde hier 115 keer, van Duinkerken tot de Slag om Engeland en Stalingrad. In de Map Room kwamen zes jaar lang dag en nacht de berichten binnen; op 16 augustus 1945 ging het licht er voor het eerst uit, en iemand vierde het door op een van de klokken een vierkant om de V te tekenen. Naast de kaartenkamer zit een kastje met een toiletslot op de deur. Iedereen dacht dat het de privé-wc van de premier was; het was de Transatlantic Telephone Room, waar Churchill via de geheime SIGSALY-scrambler met de Amerikaanse president sprak. Op 4 april 1984 opende het Imperial War Museum de kamers voor publiek; in 2005 kwam het Churchill Museum erbij. Vanuit deze kelder kwam op 29 december 1940 het bevel dat [[st-pauls|St Paul's]] tegen elke prijs gered moest worden.",
      let_hierop: "Kijk in de Map Room naar de klokken en zoek het vierkant om de V. En let op het slot van de telefoonkamer: 'bezet' betekende dat de premier met Washington sprak.",
      praktisch: "Clive Steps, King Charles Street, London SW1A 2AQ. Toegang met ticket; iwm.org.uk.",
      onbevestigd: "Coördinaat is afgeleid uit een secundaire bron en nog niet tegen OpenStreetMap gecontroleerd. Nog geen gecontroleerde vrije afbeelding. Dat het bevel over St Paul's letterlijk vanuit deze kelder kwam is een aanname op basis van de functie van de ruimte; de bronnen zeggen alleen dat Churchill het bericht stuurde.",
      verbindingen: [
        { id: "st-pauls", relatie: "het gebouw dat volgens Churchill tegen elke prijs gered moest worden" },
        { id: "big-ben", relatie: "het parlement boven de grond, aan de overkant" }
      ],
      bronnen: [
        { titel: "Churchill War Rooms — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Churchill_War_Rooms" },
        { titel: "A Short History of The Cabinet War Rooms — Imperial War Museums", url: "https://www.iwm.org.uk/history/a-short-history-of-the-cabinet-war-rooms" },
        { titel: "80 Years Of The WW2 Cabinet War Rooms — Imperial War Museums", url: "https://www.iwm.org.uk/history/80-years-of-the-cabinet-war-rooms" },
        { titel: "The Cabinet War Rooms — History Hit", url: "https://www.historyhit.com/locations/cabinet-war-rooms/" },
        { titel: "Ten Hidden Details At The Churchill War Rooms — Living London History", url: "https://livinglondonhistory.com/ten-hidden-details-at-the-churchill-war-rooms/" },
        { titel: "Go Behind the Glass of Churchill's Underground War Rooms — Smithsonian", url: "https://www.smithsonianmag.com/history/behind-glass-churchills-underground-war-rooms-180964586/" },
        { titel: "St Paul's Cathedral (Blitz Stories) — Historic England", url: "https://historicengland.org.uk/whats-new/features/blitz-stories/st-paul-s-cathedral/" }
      ]
    },

    {
      id: "cleopatras-needle",
      plaats: "london",
      jaar: 1878,
      niveau: 3,
      naam: "Cleopatra's Needle",
      ondertitel: "Egyptische obelisk · 15e eeuw v.Chr. · hier sinds 1878",
      coord: [51.50852, -0.12034],
      coord_bron: "handmatig",
      themas: ["theems"],
      roem: 35,
      verhaal: 88,
      esthetiek: 70,
      afbeelding: null,
      glance: "Een obelisk van 3.500 jaar oud aan de Theems, die zes zeelieden het leven kostte en nog de scherfgaten van een bom uit 1917 draagt.",
      waarom_hier: "De obelisk staat op de Victoria Embankment, de kade die Bazalgette in 1870 uit de rivier won — een nieuwe oever die om een monument vroeg.",
      verhaal_tekst: "Deze granieten obelisk is in de vijftiende eeuw v.Chr. gehouwen in Heliopolis, in opdracht van farao Thoetmosis III — ruim veertienhonderd jaar voor Cleopatra, met wie hij niets te maken heeft. In 12 v.Chr. werd hij met zijn tweelingbroer naar Alexandrië verplaatst; die andere staat sinds 1881 in Central Park in New York. In 1819 schonk Muhammad Ali de omgevallen obelisk aan Groot-Brittannië, maar de regering vond het vervoer te duur. Pas in 1877 betaalde de arts Erasmus Wilson 10.000 pond. De steen ging in een speciaal gebouwde ijzeren cilinder, de Cleopatra, op sleeptouw achter de stoomboot Olga. Op 14 oktober 1877 dreigde de cilinder in de Golf van Biskaje te zinken; zes vrijwilligers van de Olga verdronken bij een reddingspoging. Op 12 september 1878 stond de obelisk hier, op Bazalgettes nieuwe [[great-stink|Victoria Embankment]], met een tijdcapsule eronder. De bronzen sfinxen kwamen er in 1881 bij. Op 4 september 1917 viel vlakbij een Duitse bom; de scherfgaten in de westelijke sfinx zijn nooit hersteld.",
      let_hierop: "Kijk naar de westelijke sfinx: de gaten en groeven in het brons zijn van de bom van 4 september 1917. Op de sokkel staan de namen van de zes verdronken zeelieden.",
      praktisch: "Victoria Embankment, London WC2N 6PB, tussen Embankment en Waterloo Bridge. Vrij toegankelijk.",
      onbevestigd: "Coördinaat is afgeleid uit een secundaire bron en nog niet tegen OpenStreetMap gecontroleerd. Nog geen gecontroleerde vrije afbeelding.",
      verbindingen: [
        { id: "great-stink", relatie: "staat op de kade die uit die crisis voortkwam" },
        { id: "big-ben", relatie: "de Embankment begint bij het parlement" }
      ],
      bronnen: [
        { titel: "Cleopatra's Needle, London — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Cleopatra%27s_Needle,_London" },
        { titel: "Cleopatra's Needles — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Cleopatra%27s_Needles" },
        { titel: "How Cleopatra's Needle came to London — London Museum", url: "https://www.londonmuseum.org.uk/collections/london-stories/how-cleopatras-needle-came-london/" },
        { titel: "Cleopatra's Needle — Royal Museums Greenwich", url: "https://www.rmg.co.uk/stories/maritime-history/cleopatras-needle" },
        { titel: "Cleopatra's needle - crew members lost — London Remembers", url: "https://www.londonremembers.com/memorials/cleopatra-s-needle-crew-members-lost" },
        { titel: "Cleopatras Needle And Sphinxes — IWM War Memorials Register", url: "https://www.iwm.org.uk/memorials/item/memorial/39718" },
        { titel: "Cleopatra's Needle (New York City) — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Cleopatra%27s_Needle_(New_York_City)" },
        { titel: "Thames Embankment — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Thames_Embankment" }
      ]
    },

    /* ---- Tilburg — plekken ---- */
    {
      id: "textielmuseum",
      plaats: "tilburg",
      jaar: 1861,
      niveau: 1,
      naam: "TextielMuseum",
      ondertitel: "Museum in wollenstoffenfabriek C. Mommers & Co · 1861-1920 · rijksmonument",
      coord: [51.57083, 5.07972],
      coord_bron: "handmatig",
      themas: ["wolstad"],
      roem: 55,
      verhaal: 62,
      esthetiek: 70,
      afbeelding: "Tilburg textielmuseum1.jpg",
      bijschrift: "Het TextielMuseum aan de Goirkestraat.",
      glance: "Een wolfabriek uit 1861 waar nog steeds geweven wordt — nu voor kunstenaars en ontwerpers.",
      waarom_hier: "Christiaan Mommers begon hier in 1861 met wollen stoffen en bouwde het complex uit tot het in 1920 op zijn grootst was. Het museum, dat elders in de stad was begonnen, trok in 1986 in de leegstaande fabriek.",
      verhaal_tekst: "In 1861 begint Christiaan Mommers in een bestaand fabriekje aan de Goirkestraat met het maken van wollen stoffen. Hij bouwt bij: een lage weverij met houten sheddak (1876-1878), een hoge spinnerij (1885, verlengd in 1894), ketelhuizen, machinekamers, schoorstenen. In 1920 is het complex op zijn grootst.\n\nHet Nederlands Textielmuseum ontstaat in 1958 elders in de stad, in een herenhuis aan de Gasthuisstraat. In 1986 verhuist het naar de fabriek van Mommers; een jaar eerder is er al een stoommachine uit 1906 naartoe gebracht, afkomstig van de wollenstoffenfabriek Mutsaerts.\n\nSinds 2000 werkt het museum als 'museum in bedrijf', en sinds 2005 is er het TextielLab, waar kunstenaars en ontwerpers hun ontwerpen door specialisten op industriële machines laten uitvoeren: weven, breien, printen, borduren, laseren en tuften. De zes grote textielschermen die in [[lochal|de LocHal]] de ruimtes afscheiden, zijn hier geweven.",
      let_hierop: "Het lage gebouw met het zaagtanddak was de weverij, het hoge gebouw de spinnerij — twee bouwvormen die op vrijwel elk Tilburgs fabrieksterrein terugkwamen.",
      praktisch: "Goirkestraat 96, 5046 GN Tilburg. Openingstijden en tickets: textielmuseum.nl.",
      onbevestigd: "Coördinaat is afgeleid uit een secundaire bron en nog niet tegen OpenStreetMap gecontroleerd. De bronnen noemen zowel 1985 als 1986 als jaar van vestiging in de fabriek.",
      verbindingen: [
        { id: "lochal", relatie: "de textielschermen daar zijn hier geweven" },
        { id: "de-pont", relatie: "ook een wolfabriek die museum werd" },
        { id: "einde-wolstad", relatie: "een van de weinige fabrieken die de sloop overleefden" }
      ],
      bronnen: [
        { titel: "Fabriekscomplex Mommers — Heemkundekring Tilburg", url: "https://www.monumententilburg.nl/monumenten/fabriekscomplex-mommers/" },
        { titel: "TextielMuseum (Tilburg) — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/TextielMuseum_(Tilburg)" },
        { titel: "TextielMuseum — Geschiedenis en gebouw", url: "https://textielmuseum.nl/geschiedenis-gebouw" },
        { titel: "Voormalig fabriekscomplex — Rijksmonumenten.nl (46925)", url: "https://rijksmonumenten.nl/monument/46925/voormalig-fabriekscomplex/tilburg/" },
        { titel: "De stoommachine in het Nederlands Textiel Museum — alexdenouden.nl", url: "http://www.alexdenouden.nl/technischerfgoed/tilburg.htm" },
        { titel: "LocHal Library — ArchDaily", url: "https://www.archdaily.com/909540/lochal-library-mecanoo-plus-civic-architects-plus-braaksma-and-roos-architectenbureau" },
        { titel: "Textile Museum (Tilburg) — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Textile_Museum_(Tilburg)" }
      ]
    },

    {
      id: "lochal",
      plaats: "tilburg",
      jaar: 1932,
      niveau: 1,
      naam: "LocHal",
      ondertitel: "Locomotiefhal · 1932 · bibliotheek sinds 2019",
      coord: [51.56111, 5.08583],
      coord_bron: "handmatig",
      themas: ["spoorzone"],
      roem: 60,
      verhaal: 75,
      esthetiek: 85,
      afbeelding: "De LocHal in de zomer van 2019.jpg",
      bijschrift: "De LocHal in de zomer van 2019, het jaar van de opening.",
      glance: "Een locomotiefhal uit 1932 die in 2019 werd gekozen tot gebouw van het jaar van de wereld — als bibliotheek.",
      waarom_hier: "Dit was de hal waar de spoorwegwerkplaats van Tilburg vanaf 1932 locomotieven onderhield en repareerde. Toen NS het terrein in 2010 aan de gemeente verkocht, bleef de hal staan en werd het middelpunt van de nieuwe Spoorzone.",
      verhaal_tekst: "De hal werd in 1932 gebouwd voor het onderhoud en de reparatie van locomotieven van de Nederlandse Spoorwegen. Vanaf datzelfde jaar deed de Tilburgse [[spoorzone|werkplaats]] alleen nog locomotieven; dit was het hart van dat werk.\n\nTussen 2017 en 2019 werd de hal verbouwd tot bibliotheek, kunst- en ontmoetingscentrum, met de Bibliotheek Midden-Brabant als grootste gebruiker. De verbouwing kostte ruim dertig miljoen euro en omvat 11.200 vierkante meter. Civic Architects tekende het ontwerp, Braaksma & Roos deed restauratie en transformatie, Inside Outside van Petra Blaisse het interieur en de textielschermen, met Mecanoo als vierde bureau. De staalconstructie, de hoge glaswanden en de loopkranen waarmee locomotieven werden gehesen bleven zitten. Zes textielschermen, geweven in het TextielLab van het [[textielmuseum|TextielMuseum]], verdelen de ruimte.\n\nIn december 2019 riep het World Architecture Festival de LocHal uit tot World Building of the Year.",
      let_hierop: "Kijk omhoog naar de loopkranen onder het dak: daar hingen locomotieven aan. Kijk daarna naar de textielschermen — die komen uit een wolfabriek twee kilometer verderop.",
      praktisch: "Burgemeester Brokxlaan 1000, 5041 SG Tilburg. Vrij toegankelijk tijdens openingstijden van de bibliotheek; zie lochal.nl.",
      onbevestigd: "Coördinaat is afgeleid uit een secundaire bron en nog niet tegen OpenStreetMap gecontroleerd.",
      verbindingen: [
        { id: "textielmuseum", relatie: "waar de textielschermen geweven zijn" },
        { id: "spoorpark", relatie: "hetzelfde spoorterrein, iets westelijker" },
        { id: "piushaven", relatie: "de herontwikkeling daar diende als voorbeeld voor de Spoorzone" }
      ],
      bronnen: [
        { titel: "LocHal — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/LocHal" },
        { titel: "LocHal named 2019 World Building of the Year — Library Journal infoDOCKET", url: "https://www.infodocket.com/2019/12/07/lochal-public-library-tilburg-netherlands-named-2019-building-of-the-year-at-world-architecture-festival/" },
        { titel: "LocHal Library — ArchDaily", url: "https://www.archdaily.com/909540/lochal-library-mecanoo-plus-civic-architects-plus-braaksma-and-roos-architectenbureau" },
        { titel: "Civic Architects creates LocHal public library in vast locomotive shed — Dezeen", url: "https://www.dezeen.com/2019/02/27/lochal-public-library-civic-architects/" },
        { titel: "Hoofdwerkplaats Tilburg — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Hoofdwerkplaats_Tilburg" }
      ]
    },

    {
      id: "de-pont",
      plaats: "tilburg",
      jaar: 1992,
      niveau: 1,
      naam: "Museum De Pont",
      ondertitel: "Museum voor hedendaagse kunst · wolspinnerij Thomas de Beer · 1992",
      coord: [51.56741, 5.07501],
      coord_bron: "handmatig",
      themas: ["wolstad"],
      roem: 62,
      verhaal: 55,
      esthetiek: 65,
      afbeelding: "Museum de Pont - Tilburg- NL nov 2019.jpg",
      bijschrift: "Museum De Pont aan het Wilhelminapark.",
      glance: "Hedendaagse kunst in de wolspinnerij die de naamgever in de jaren zestig zelf van de ondergang redde.",
      waarom_hier: "Jan de Pont hielp in de jaren zestig de failliete wolspinnerij Thomas de Beer weer op gang. Toen het bedrijf definitief verdween, werd precies dit gebouw het museum dat zijn naam draagt.",
      verhaal_tekst: "Jan de Pont (1915-1987), jurist en ondernemer, had in Tilburg gewoond en zag met zorg hoe de textielindustrie wegzakte. In de jaren zestig hielp hij de wolspinnerij Thomas de Beer weer op de been na een faillissement. Het museum dat naar hem is genoemd, opende in 1992 in datzelfde gebouw, vijf jaar na zijn dood.\n\nMels Crouwel van Benthem Crouwel Architecten bouwde de spinnerij om. Het lange sheddak bleef en geeft de grote zaal zijn licht; de kleine 'wolhokken' waar de wol lag opgeslagen zijn kabinetten geworden. In een van die wolhokken maakte Anish Kapoor Descent into Limbo.\n\nDe Pont verzamelt niet breed maar diep: veel werk van een beperkt aantal kunstenaars, onder wie Marlene Dumas, Richard Serra, Richard Long, Bill Viola, Sigmar Polke, Ai Weiwei en Anish Kapoor. Sinds de opening groeide de collectie tot meer dan 800 werken van ongeveer tachtig kunstenaars. Het museum ligt aan het Wilhelminapark, aangelegd in 1898 en omzoomd door villa's uit de bloeitijd van de textiel.",
      let_hierop: "Loop de wolhokken in: lage, smalle ruimtes langs de grote hal. Hier lag ooit de ruwe wol; nu hangt er per hok één kunstenaar.",
      praktisch: "Wilhelminapark 1, 5041 EA Tilburg. Openingstijden en tickets: depont.nl.",
      onbevestigd: "Coördinaat is afgeleid uit een secundaire bron met vier decimalen en nog niet tegen OpenStreetMap gecontroleerd.",
      verbindingen: [
        { id: "textielmuseum", relatie: "de andere wolfabriek die museum werd" },
        { id: "einde-wolstad", relatie: "het faillissement dat De Pont probeerde te keren" }
      ],
      bronnen: [
        { titel: "De Pont Museum of Contemporary Art — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/De_Pont_Museum_of_Contemporary_Art" },
        { titel: "About De Pont Museum — depont.nl", url: "https://www.depont.nl/en/about-the-museum" },
        { titel: "Architectuur: Museum De Pont — Tilburgers.nl", url: "https://www.tilburgers.nl/architectuur-de-pont/" },
        { titel: "Anish Kapoor en museum De Pont — inbrabant.nl", url: "https://www.inbrabant.nl/bibliotheek/anish-kapoor-en-museum-de-pont" },
        { titel: "Wilhelminapark (Tilburg) — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Wilhelminapark_(Tilburg)" }
      ]
    },

    {
      id: "paleis-raadhuis",
      plaats: "tilburg",
      jaar: 1847,
      niveau: 1,
      naam: "Paleis-Raadhuis",
      ondertitel: "Paleis van koning Willem II · 1847-1849 · rijksmonument 35745",
      coord: [51.55471, 5.08686],
      coord_bron: "handmatig",
      themas: ["willem-ii"],
      roem: 40,
      verhaal: 85,
      esthetiek: 80,
      afbeelding: "Paleis-Raadhuis Tilburg 057.jpg",
      bijschrift: "Het Paleis-Raadhuis aan het Stadhuisplein.",
      glance: "Het paleis dat een koning voor zichzelf liet bouwen en 22 dagen te vroeg miste.",
      waarom_hier: "Willem II legde op 13 augustus 1847 zelf de eerste steen, op een steenworp van het huis waar hij sinds 1835 verbleef. Het is het enige paleis dat een Nederlandse koning buiten Den Haag, Apeldoorn en Amsterdam voor zichzelf liet bouwen in een stad waar hij ook stierf.",
      verhaal_tekst: "Op 13 augustus 1847 legt koning Willem II zelf de eerste steen. Architect Jan Boon tekent een paleis in Engelse romantische stijl, aannemer Adriaan Goijaerts bouwt het. Het is bijna klaar als het misgaat.\n\nOp 14 maart 1849 loopt de koning nog een paar keer om zijn paleis heen. De dag erna is hij moe en gaat naar bed. De Tilburgse dokters Van Hees en Haes zien hem naar adem snakken en laten hem aderen, zonder resultaat. In de nacht van 17 maart wordt hij in een stoel gezet; om vijf voor drie stopt zijn hart. Anna Paulowna knielt aan zijn voeten. Hij sterft in zijn oude woonhuis uit 1782 op de hoek van het huidige Stadhuisplein en de Zwijsenstraat. Op 7 april 1849 wordt het paleis opgeleverd: 22 dagen te laat.\n\nZijn erfgenamen schenken het in 1864 aan de gemeente, op voorwaarde dat er een Rijks-HBS in komt, genoemd naar de koning. Van 1866 tot 1934 is het school. Oscar Leeuw verbouwt het in 1934-1936 tot raadhuis. Het sterfhuis is in 1873 gesloopt; sinds 17 maart 1874 staat er een gedenknaald van H.J. van Tulder.",
      let_hierop: "Lees de gevel: „Hier adem ik vrij en voel ik mij gelukkig” — de woorden die Willem II over Tilburg sprak in zijn tuinhuis bij de Koningshoeven.",
      praktisch: "Stadhuisplein 128, Tilburg. Onderdeel van het stadhuis; het Stadsmuseum Tilburg organiseert af en toe open dagen.",
      onbevestigd: "Coördinaat is afgeleid uit een secundaire bron en nog niet tegen OpenStreetMap gecontroleerd. Willem II kreeg in 1847 een herseninfarct (Wikipedia); of dat de doodsoorzaak in 1849 verklaart, zeggen de bronnen niet.",
      verbindingen: [
        { id: "heikese-kerk", relatie: "schuin tegenover, de kerk waar Lodewijk Napoleon in 1809 het raadhuis uit zette" },
        { id: "willem-ii-stadion", relatie: "de club die zich in 1898 naar de koning noemde" },
        { id: "kruikenzeiker", relatie: "vijf minuten lopen, de andere Tilburgse identiteit" }
      ],
      bronnen: [
        { titel: "Paleis-Raadhuis — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Paleis-Raadhuis" },
        { titel: "Paleis-Raadhuis — Rijksmonumenten.nl (35745)", url: "https://rijksmonumenten.nl/monument/35745/paleis-raadhuis/tilburg/" },
        { titel: "Paleis-Raadhuis — Heemkundekring Tilburg", url: "https://www.monumententilburg.nl/monumenten/paleis-raadhuis/" },
        { titel: "Dood van koning Willem II — Geheugen van Tilburg", url: "https://www.geheugenvantilburg.nl/page/12339/dood-van-koning-willem-ii" },
        { titel: "Het sterfhuis van Willem II — Geheugen van Tilburg", url: "https://www.geheugenvantilburg.nl/page/14826/het-sterfhuis-van-willem-ii" },
        { titel: "Willem II der Nederlanden — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Willem_II_der_Nederlanden" },
        { titel: "De bijzondere band van Koning Willem II met Tilburg — Omroep Brabant", url: "https://www.omroepbrabant.nl/nieuws/2485844/de-bijzondere-band-van-koning-willem-ii-met-tilburg-hier-adem-ik-vrij-hier-voel-ik-mij-gelukkig" }
      ]
    },

    {
      id: "heikese-kerk",
      plaats: "tilburg",
      jaar: 1483,
      niveau: 2,
      naam: "Heikese kerk (Sint-Dionysius)",
      ondertitel: "Kerk · toren 15e eeuw, schip 1826-1829 · rijksmonument 34389",
      coord: [51.55501, 5.08501],
      coord_bron: "handmatig",
      themas: ["willem-ii"],
      roem: 15,
      verhaal: 62,
      esthetiek: 72,
      afbeelding: "Heikese kerk.jpg",
      bijschrift: "De Heikese kerk aan de Stadhuisstraat.",
      glance: "De oudste toren van Tilburg, met een kerk die 175 jaar lang deels raadhuis was — tot een koning daar in 1809 een eind aan maakte.",
      waarom_hier: "Hier stond de middeleeuwse parochiekerk van Tilburg, gebouwd tussen 1430 en 1483. Van dat gebouw staat alleen de toren nog; alles eromheen is twee keer opnieuw gebouwd.",
      verhaal_tekst: "De kerk werd gebouwd tussen 1430 en 1483 en in dat laatste jaar gewijd. Na brandschade moesten de katholieken haar in 1648 afstaan aan de protestanten en kerkten zij verder in een schuurkerk. Een deel van het gebouw deed lange tijd dienst als raadhuis. Daar maakte koning Lodewijk Napoleon in 1809 een eind aan — hetzelfde jaar waarin hij Tilburg op 18 april stadsrechten gaf. Pas in 1823 kwam het gebouw terug in katholieke handen.\n\nTussen 1826 en 1829 verving men de gotische kerk door de huidige neoclassicistische waterstaatskerk, gebouwd onder toezicht van het ministerie van Waterstaat naar ontwerp van de architecten Backx en Conrad. Alleen de vijftiende-eeuwse toren bleef staan. Tussen 1892 en 1895 kregen gevel en torenbekleding een neogotische jas van Cees van Hoof.\n\nOfficieel heet de kerk Sint-Dionysius; in de volksmond Heikese kerk, om haar te onderscheiden van de Dionysiuskerk in 't Goirke.",
      let_hierop: "Kijk naar de toren: drie geledingen, een deels ingebouwde traptoren en een spits die van vier naar acht kanten versmalt, met lantaarn en peervormige bekroning. Dat is het enige stuk vijftiende eeuw dat Tilburg nog heeft.",
      praktisch: "Stadhuisstraat 6, 5038 XZ Tilburg. Parochiekerk; toegankelijk rond vieringen.",
      onbevestigd: "Coördinaat is afgeleid uit een secundaire bron en nog niet tegen OpenStreetMap gecontroleerd. De voornaam van architect Conrad wordt in de bronnen zowel als T.W. als F.W. gegeven.",
      verbindingen: [
        { id: "paleis-raadhuis", relatie: "schuin tegenover; de opvolger van het raadhuis dat hier zat" },
        { id: "kruikenzeiker", relatie: "drie minuten lopen, richting Heuvelstraat" }
      ],
      bronnen: [
        { titel: "De H. Dionysiuskerk in Tilburg (Heike) — BHIC", url: "https://www.bhic.nl/ontdekken/verhalen/de-h-dionysiuskerk-in-tilburg-heike" },
        { titel: "Tilburg, Stadhuisstraat 6 — Dionysius (Heikese Kerk) — Reliwiki", url: "https://reliwiki.nl/index.php/Tilburg,_Stadhuisstraat_6_-_Dionysius_(Heikese_Kerk)" },
        { titel: "Sint-Dionysiuskerk of Heikese kerk — Rijksmonumenten.nl (34389)", url: "https://rijksmonumenten.nl/monument/34389/sint-dionysiuskerk-of-heikese-kerk/tilburg/" },
        { titel: "Heikese kerk — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Heikese_kerk" },
        { titel: "De eerste stedelingen van Tilburg uit 1809 — Regionaal Archief Tilburg", url: "https://www.regionaalarchieftilburg.nl/home/blog-detail/algemeen/2021/04/15/de-eerste-stedelingen-van-tilburg-uit-1809/" }
      ]
    },

    {
      id: "willem-ii-stadion",
      plaats: "tilburg",
      jaar: 1995,
      niveau: 2,
      naam: "Koning Willem II Stadion",
      ondertitel: "Voetbalstadion · 1995 · thuis van Willem II (1896)",
      coord: [51.54278, 5.06694],
      coord_bron: "handmatig",
      themas: ["willem-ii"],
      roem: 45,
      verhaal: 55,
      esthetiek: 60,
      afbeelding: "Willem II stadion.jpg",
      bijschrift: "Het stadion aan de Goirleseweg.",
      glance: "De club die zich in 1898 naar een dode koning noemde en in 1955 de eerste kampioen van het Nederlandse betaald voetbal werd.",
      waarom_hier: "Op deze plek aan de Goirleseweg lag het Gemeentelijk Sportpark, dat in 1992 werd gesloopt. Het nieuwe stadion opende hier op 31 mei 1995.",
      verhaal_tekst: "Op 12 augustus 1896 wordt in Tilburg voetbalclub Tilburgia opgericht. Twee jaar later, in 1898, kiest de club een nieuwe naam: Willem II, naar de koning die een halve eeuw eerder in de stad had gewoond en er was gestorven. De clubkleuren rood-wit-blauw leveren de bijnaam Tricolores.\n\nIn 1916 wordt Willem II als eerste club buiten het westen landskampioen. In 1944 volgt de KNVB-beker, in 1952 een tweede titel onder trainer Frantisek Fadrhonc, en in 1955 een derde: de eerste landstitel van het Nederlandse betaald voetbal. In 1963 gebeurt iets zeldzaams — de club degradeert en wint in hetzelfde seizoen de beker.\n\nHet stadion aan de Goirleseweg opende op 31 mei 1995 op de plek van het gesloopte Gemeentelijk Sportpark en telt 14.637 plaatsen. Sinds 2009 heet het Koning Willem II Stadion. Een nog ouder veld van de club verdween in de jaren twintig voor de aanleg van de verbinding met de [[piushaven|Piushaven]].",
      let_hierop: "De naam op de gevel is die van een koning, niet van een sponsor — en de naam is ouder dan het stadion, ouder dan de eredivisie, ouder dan de KNVB-beker.",
      praktisch: "Goirleseweg 34, 5026 PC Tilburg. Wedstrijden en tickets: willem-ii.nl.",
      onbevestigd: "Coördinaat is afgeleid uit een secundaire bron en nog niet tegen OpenStreetMap gecontroleerd. De capaciteit wordt als 14.637 en als 14.700 opgegeven.",
      verbindingen: [
        { id: "paleis-raadhuis", relatie: "de koning naar wie de club zich noemde" },
        { id: "piushaven", relatie: "voor die haven werd een ouder veld van de club opgeofferd" }
      ],
      bronnen: [
        { titel: "Willem II — BHIC", url: "https://www.bhic.nl/ontdekken/verhalen/willem-ii" },
        { titel: "1896-1905: De oprichting van Willem II — willem-ii.nl", url: "https://www.willem-ii.nl/1896-1905-de-oprichting-van-willem-ii" },
        { titel: "Willem II (voetbalclub) — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Willem_II_(voetbalclub)" },
        { titel: "Koning Willem II Stadion — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Koning_Willem_II_Stadion" },
        { titel: "De Tilburgse havens — BHIC", url: "https://www.bhic.nl/ontdekken/verhalen/de-tilburgse-havens" }
      ]
    },

    {
      id: "piushaven",
      plaats: "tilburg",
      jaar: 1923,
      niveau: 2,
      naam: "Piushaven",
      ondertitel: "Stadshaven aan het Wilhelminakanaal · 1923 · museumhaven sinds 2002",
      coord: [51.55394, 5.10333],
      coord_bron: "handmatig",
      themas: ["wolstad", "spoorzone"],
      roem: 25,
      verhaal: 65,
      esthetiek: 60,
      afbeelding: "Piushaven 1, Tilburg.jpg",
      bijschrift: "Aan de Piushaven.",
      glance: "Een haven waar een stad meer dan een eeuw op wachtte, veertig jaar gebruikte en toen half dichtgooide.",
      waarom_hier: "Tilburg had geen bevaarbaar water. Toen het Wilhelminakanaal in 1919 de stad bereikte, werd hier, aan de zuidoostkant van het centrum, de stadshaven gegraven die op 4 april 1923 openging.",
      verhaal_tekst: "Al vóór 1800 maakte Tilburg plannen voor een aansluiting op het vaarwegennet; een fabrieksstad zonder water is duur. Het duurde tot 1905 voordat de wet voor het Wilhelminakanaal werd aangenomen. De bouw begon in 1910 in Geertruidenberg, in 1919 lag het kanaal bij Tilburg, en op 4 april 1923 gingen haven en kanaal van 68 kilometer tegelijk open. Voor de verbinding werd het toenmalige voetbalveld van [[willem-ii-stadion|Willem II]] opgeofferd.\n\nTot in de jaren zestig was het hier druk: brandstof, bouwmaterialen, graan, veevoer en schroot gingen over de kade. Daarna wonnen de vrachtwagen en de snelweg, en verdwenen de fabrieken uit de stad. In 1983 werd de zuidelijke havenarm gedempt.\n\nSinds de jaren negentig keerde het leven terug, met evenementen en een museumhaven waar historische vrachtschepen permanent liggen. De aanpak van de Piushaven werd het voorbeeld voor de herontwikkeling van de [[spoorzone|Spoorzone]].",
      let_hierop: "Kijk waar de haven ophoudt: de zuidelijke arm die in 1983 is gedempt, ligt onder de bebouwing aan die kant.",
      praktisch: "Piushaven, 5017 AM Tilburg. Vrij toegankelijk; horeca aan de kade.",
      onbevestigd: "Coördinaat is afgeleid uit een secundaire bron en nog niet tegen OpenStreetMap gecontroleerd. Naar welke paus Pius de haven is genoemd, staat niet in de geraadpleegde bronnen.",
      verbindingen: [
        { id: "willem-ii-stadion", relatie: "voor de haven verdween een ouder veld van de club" },
        { id: "lochal", relatie: "de Spoorzone volgde het voorbeeld van deze haven" },
        { id: "einde-wolstad", relatie: "de fabrieken die hier hun kolen en wol ontvingen" }
      ],
      bronnen: [
        { titel: "De Tilburgse havens — BHIC", url: "https://www.bhic.nl/ontdekken/verhalen/de-tilburgse-havens" },
        { titel: "Geschiedenis — 100 jaar Piushaven", url: "https://www.100jaarpiushaven.nl/geschiedenis/" },
        { titel: "Historie — Piushaven.nl", url: "https://www.piushaven.nl/historie" },
        { titel: "Piushaven — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Piushaven" }
      ]
    },

    {
      id: "kruikenzeiker",
      plaats: "tilburg",
      jaar: 1987,
      niveau: 3,
      naam: "De Kruikenzeiker",
      ondertitel: "Bronzen beeldje · Henk Smulders · onthuld carnaval 1987",
      coord: [51.55631, 5.08201],
      coord_bron: "handmatig",
      themas: ["kruikenstad", "wolstad"],
      roem: 20,
      verhaal: 90,
      esthetiek: 45,
      afbeelding: null,
      glance: "Een beeldje van zeventig centimeter dat de bijnaam van een hele stad uitbeeldt: een man die in een kruik plast.",
      waarom_hier: "Het beeldje staat in de Nieuwlandstraat bij het Radioplein, aan het eind van de Heuvelstraat. Met carnaval verhuist het naar de Heuvel, waar de Prins van Kruikenstad het onthult — daarmee begint het Tilburgse carnaval officieel.",
      verhaal_tekst: "Bij het bewerken van wol werd urine gebruikt: bij het vollen als reinigings- en glijmiddel, bij het wassen als schoonmaakmiddel, bij het verven om de verf gelijkmatig te verdelen. Een notariële akte uit 1689 spreekt van 'warm stinckende pis of seep' om wol te wassen; een verfrecept uit 1822 vraagt om '15 Emmers Pis'. Het verhaal wil dat Tilburgers hun urine in kruiken naar de fabriek brachten en ervoor betaald kregen. Daar komt de bijnaam vandaan: Kruikenzeiker.\n\nAlleen: de historici Van Doremalen en Spapens vonden geen enkel bewijs voor zo'n handel in urine door inwoners. De naam bleef toch, en met carnaval heet de stad Kruikenstad.\n\nHenk Smulders (1925-1994) maakte het beeldje al in 1965, naar een foto uit 1905 van het personeel van schoenfabriek Nard de Beer aan de Goirkestraat. In 1986 schonk de Carnavalsstichting Tilburg het brons van zeventig centimeter aan de stad; met carnaval 1987 werd het onthuld.",
      let_hierop: "Het is klein — zeventig centimeter — en staat laag. Wie het niet zoekt, loopt eroverheen. Kijk naar de kruik tussen de knieën.",
      praktisch: "Nieuwlandstraat bij het Radioplein, centrum Tilburg. Vrij toegankelijk; met carnaval tijdelijk op de Heuvel.",
      onbevestigd: "Coördinaat is afgeleid uit een secundaire bron (het Wikidata-punt van de Nieuwlandstraat, niet van het beeld zelf) en nog niet tegen OpenStreetMap gecontroleerd; afwijking tot ~150 m mogelijk. Nog geen gecontroleerde vrije afbeelding.",
      verbindingen: [
        { id: "einde-wolstad", relatie: "de industrie waar de bijnaam uit komt" },
        { id: "tilburgse-kermis", relatie: "het andere volksfeest van de stad" },
        { id: "textielmuseum", relatie: "waar het vollen en verven nog te zien is" }
      ],
      bronnen: [
        { titel: "De Kruikenzeiker — Buitencollectie Tilburg", url: "https://buitencollectie.tilburg.nl/kunstwerken/115/" },
        { titel: "Tilburg — Kruikenzeiker — vanderkrogt.net", url: "https://vanderkrogt.net/standbeelden/object.php?record=NB57ah" },
        { titel: "Het beeldje van de Kruikenzeiker — Geheugen van Tilburg", url: "https://www.geheugenvantilburg.nl/page/12325/het-beeldje-van-de-kruikenzeiker" },
        { titel: "De Kruikenzeiker in de Nieuwlandstraat — Tilburgers.nl", url: "https://www.tilburgers.nl/de-kruikenzeiker-in-de-nieuwlandstraat/" },
        { titel: "Kruikezeiker — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Kruikezeiker" },
        { titel: "De Kruikenzeiker — Kruikenstad.nl", url: "https://www.kruikenstad.nl/typisch-kruikenstad/de-kruikenzeiker" }
      ]
    },

    {
      id: "spoorpark",
      plaats: "tilburg",
      jaar: 2019,
      niveau: 2,
      naam: "Spoorpark",
      ondertitel: "Stadspark op het Van Gend & Loos-terrein · 2019",
      coord: [51.56158, 5.06831],
      coord_bron: "handmatig",
      themas: ["spoorzone"],
      roem: 30,
      verhaal: 70,
      esthetiek: 65,
      afbeelding: null,
      glance: "Een park van bijna tien hectare dat niet de gemeente maar de inwoners hebben bedacht, ingericht en deels nog beheren.",
      waarom_hier: "Hier lag het overslagterrein van Van Gend & Loos, aan de westkant van de spoorwerkplaats. De gemeente kocht de 7,5 hectare in 2015 en legde de invulling in handen van de stad.",
      verhaal_tekst: "In 2015 koopt de gemeente Tilburg het oude terrein van Van Gend & Loos, 7,5 hectare langs het spoor. Wat er moet komen, bepaalt zij niet zelf: inwoners, ondernemers en andere betrokkenen bepalen ontwerp en functies. In 2019 gaat het Spoorpark open, een stadspark en dagrecreatiegebied van bijna tien hectare — volgens de initiatiefnemers het grootste burgerinitiatief van de Benelux.\n\nOp een heuveltje staat de Kempentoren, een stalen uitkijktoren van 37 meter. Midden in het park zit het T-Huis, een restaurant en café. Er is een stadscamping met slaapwagens, tipi's en camperplaatsen; aan de westkant een sportzone met beachvelden, fitness, skatepark en pumptrack; en een waterplein waar kinderen in de zomer spelen. De rest is gras, brede paden en water.\n\nHet park ligt aan het uiteinde van de [[spoorzone|Spoorzone]], het terrein van de oude spoorwerkplaats, met de [[lochal|LocHal]] een kilometer oostelijker.",
      let_hierop: "Klim de Kempentoren op: van bovenaf zie je het spoor als een rechte lijn door de stad lopen, met de werkplaatsgebouwen van de Spoorzone erlangs.",
      praktisch: "Spoorpark 1, 5038 LS Tilburg; ingangen aan de Hart van Brabantlaan en de Hazelaarstraat. Vrij toegankelijk; de toren kost een kleine bijdrage.",
      onbevestigd: "Coördinaat is afgeleid uit een secundaire bron en nog niet tegen OpenStreetMap gecontroleerd. De hoogte van de Kempentoren wordt als 37 en als 30 meter opgegeven. Nog geen gecontroleerde vrije afbeelding.",
      verbindingen: [
        { id: "lochal", relatie: "dezelfde Spoorzone, een kilometer oostelijker" },
        { id: "piushaven", relatie: "het andere herwonnen stuk stad" }
      ],
      bronnen: [
        { titel: "Spoorpark (Tilburg) — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Spoorpark_(Tilburg)" },
        { titel: "Spoorpark Tilburg — VisitBrabant", url: "https://www.visitbrabant.com/nl/locaties/12525431/spoorpark-tilburg" },
        { titel: "Spoorpark: een grensverleggend burgerinitiatief — Allesoversport.nl", url: "https://www.allesoversport.nl/thema/beleid/spoorpark-een-grensverleggend-burgerinitiatief/" },
        { titel: "Inwoners brengen met Spoorpark Central Park naar Tilburg — inbrabant.nl", url: "https://www.inbrabant.nl/bibliotheek/spoorpark-tilburg" },
        { titel: "De Kempentoren — Uitkijktorens.nl", url: "https://uitkijktorens.nl/uitkijktorens/de-kempentoren/" },
        { titel: "Spoorpark Tilburg: wat kun je er zien en doen? — Steden.net", url: "https://www.steden.net/nederland/tilburg/spoorpark/" }
      ]
    }
  ],

  /* Objecten met esthetiek < 35: geen pin, wel verhaal.
     Dit is de routeringsregel in werking. */
  gebiedsverhalen: [
    {
      id: "drie-rodes",
      plaats: "kerkrade",
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
      plaats: "kerkrade",
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
      plaats: "kerkrade",
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
      plaats: "kerkrade",
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
      plaats: "kerkrade",
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
    },

    /* ---- London — gebiedsverhalen ---- */
    {
      id: "londinium",
      plaats: "london",
      jaar: 47,
      jaar_circa: true,
      naam: "Londinium",
      ondertitel: "Romeinse stad · ca. 47–5e eeuw",
      themas: ["theems"],
      roem: 40,
      verhaal: 80,
      esthetiek: 15,
      afbeelding: null,
      glance: "De Romeinse stad onder de City: gesticht rond 47, platgebrand door Boudica, hoofdstad van Britannia — met amfitheater en tempel onder de kantoren.",
      waarom_hier: "De Romeinen kozen de plek waar de Theems voor het laatst te overbruggen was en toch bereikbaar bleef voor zeeschepen. Alles wat London werd, begon bij die brug.",
      waarom_geen_pin: "Esthetiek 15: Londinium ligt onder de City. Wat er bovengronds van te zien is, staat op een eigen pin (de muur bij Tower Hill); de rest zit in musea en kelders.",
      verhaal_tekst: "De Romeinen stichtten Londinium rond het jaar 47, op de plek waar de Theems voor het laatst te overbruggen was. Rond 50 lag er een houten brug van ongeveer 280 meter op minstens negentien pijlers, vlak bij het huidige London Bridge, naar Southwark. In 60 of 61 brandde Boudica met haar opstandelingen de stad plat; de aslaag in de grond is tot een halve meter dik. De stad werd als geplande Romeinse stad herbouwd, en rond 100 nam ze de rol van Colchester over als hoofdstad van de provincie Britannia. In de tweede eeuw woonden er naar schatting 45.000 tot 60.000 mensen. De stad ligt er nog, onder de grond. Onder Guildhall werd in 1988 het amfitheater gevonden, voor 6.000 toeschouwers, nu te zien onder de Guildhall Art Gallery. In 1954 vond men op een bomterrein een kop van de god Mithras; zijn tempel uit ongeveer 240 is teruggebouwd onder het Europese hoofdkantoor van Bloomberg, het London Mithraeum. Bovengronds staat alleen nog [[london-wall|de muur]] die de stad rond 200 kreeg.",
      let_hierop: "De twee plekken waar je Londinium kunt binnenlopen: het amfitheater onder de Guildhall Art Gallery en het London Mithraeum onder het Bloomberg-gebouw, beide gratis.",
      onbevestigd: "Nog geen gecontroleerde vrije afbeelding. Of de toegang tot beide sites gratis blijft, is niet apart gecontroleerd.",
      verbindingen: [
        { id: "london-wall", relatie: "het enige stuk dat bovengronds staat" },
        { id: "tower-bridge", relatie: "de brug van nu, vlak bij de brug van toen" }
      ],
      bronnen: [
        { titel: "Londinium — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Londinium" },
        { titel: "A timeline of Roman London — London Museum", url: "https://www.londonmuseum.org.uk/collections/london-stories/timeline-roman-london-londinium/" },
        { titel: "The Roman London Bridge — London Guided Walks", url: "https://londonguidedwalks.co.uk/the-roman-london-bridge-the-foundation-of-londinium/" },
        { titel: "Roman London's Temple of Mithras — London Museum", url: "https://www.londonmuseum.org.uk/collections/london-stories/roman-londons-temple-mithras/" },
        { titel: "Visit London's greatest Roman temple — Idler", url: "https://www.idler.co.uk/article/visit-londons-greatest-roman-temple/" },
        { titel: "London Wall — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/London_Wall" }
      ]
    },

    {
      id: "grote-brand-1666",
      plaats: "london",
      jaar: 1666,
      naam: "De Grote Brand van 1666",
      ondertitel: "Stadsbrand · 2–6 september 1666",
      themas: ["grote-brand"],
      roem: 75,
      verhaal: 70,
      esthetiek: 10,
      afbeelding: null,
      glance: "Vier dagen in september 1666: 13.200 huizen en 87 kerken weg, zes geregistreerde doden, en een stad die in steen werd herbouwd.",
      waarom_hier: "De brand begon in Pudding Lane, in het dichtbebouwde, houten hart van de City, en de oostenwind dreef hem westwaarts over vier vijfde van de stad.",
      waarom_geen_pin: "Esthetiek 10: de brand zelf is niet te zien. Wat ervan overbleef — het Monument, de kerken van Wren, St Paul's — heeft eigen pins.",
      verhaal_tekst: "Zondag 2 september 1666, rond één uur 's nachts: brand in de bakkerij van Thomas Farriner in Pudding Lane. Een harde oostenwind joeg het vuur de houten stad in, en het brandde dag en nacht tot woensdag; op 6 september was het uit. Koning Charles II gaf zijn broer James, hertog van York, de leiding en stond volgens Pepys zelf mee te blussen. Als laatste redmiddel werden huizen met buskruit opgeblazen om brandgangen te maken; het garnizoen van [[tower-of-london|de Tower]] deed dat aan de oostkant en hield het vuur daar tegen. De balans: 13.200 huizen, 87 parochiekerken, de Royal Exchange, Guildhall en de oude St Paul's — ruim vier vijfde van de stad. Officieel werden zes doden geregistreerd; hoeveel het er werkelijk waren, is nooit vastgesteld; 130.000 mensen raakten dakloos. In februari 1667 bepaalde de Rebuilding Act dat nieuwe huizen van baksteen of steen moesten zijn, uitkragende verdiepingen verboden, straten breder. Wren ontwierp 51 nieuwe kerken en [[st-pauls|de kathedraal]]; [[monument|The Monument]] markeert op 202 voet afstand het beginpunt.",
      let_hierop: "Loop van The Monument naar Pudding Lane: dat is de hele afstand tussen gedenkteken en beginpunt. De straatnaam staat er nog.",
      onbevestigd: "Nog geen gecontroleerde vrije afbeelding.",
      verbindingen: [
        { id: "monument", relatie: "gedenkteken op 202 voet van het beginpunt" },
        { id: "st-pauls", relatie: "de kathedraal die ervoor in de plaats kwam" },
        { id: "tower-of-london", relatie: "bleef gespaard, en stopte het vuur aan de oostkant" }
      ],
      bronnen: [
        { titel: "The Great Fire of London — London Fire Brigade", url: "https://www.london-fire.gov.uk/museum/london-fire-brigade-history-and-stories/fires-and-incidents-that-changed-history/the-great-fire-of-london/" },
        { titel: "Great Fire of London 1666 — Historic UK", url: "https://www.historic-uk.com/HistoryUK/HistoryofEngland/The-Great-Fire-of-London/" },
        { titel: "The Great Fire of London — London Museum", url: "https://www.londonmuseum.org.uk/collections/london-stories/great-fire-of-london/" },
        { titel: "Great Fire of London — Britannica", url: "https://www.britannica.com/event/Great-Fire-of-London" },
        { titel: "Pudding Lane — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Pudding_Lane" },
        { titel: "The Rebuilding Acts — Designing Buildings", url: "https://www.designingbuildings.co.uk/wiki/The_Rebuilding_Acts" },
        { titel: "Monument to the Great Fire of London — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Monument_to_the_Great_Fire_of_London" }
      ]
    },

    {
      id: "great-stink",
      plaats: "london",
      jaar: 1858,
      naam: "De Great Stink en het riool van Bazalgette",
      ondertitel: "Gebeurtenis en rioolstelsel · 1858–1875",
      themas: ["theems"],
      roem: 20,
      verhaal: 92,
      esthetiek: 5,
      afbeelding: null,
      glance: "De zomer waarin de Theems zo stonk dat het parlement een riool kocht — ruim 1.000 mijl buizen die nog altijd in gebruik zijn.",
      waarom_hier: "De Theems was de open riool van de stad en het parlement stond met zijn ramen aan het water. De stank kwam letterlijk de vergaderzaal binnen.",
      waarom_geen_pin: "Esthetiek 5: het stelsel ligt onder de grond en de stank is weg. Wat er bovengronds van te zien is — de Victoria Embankment — is een weg langs de rivier.",
      verhaal_tekst: "In de zomer van 1858 stonk de Theems zo dat het parlement er niet meer kon werken. De rivier was de open riool van de stad en het hete weer bakte het afval op de oevers droog. In het House of Commons werden de gordijnen in chloorkalk gedrenkt om de zittingen vol te houden. Binnen weken jaagden de parlementsleden een wet erdoor die geld vrijmaakte voor een rioolstelsel; op 2 augustus 1858 was ze van kracht. Joseph Bazalgette, hoofdingenieur van de Metropolitan Board of Works, kreeg de leiding. Hij verving ruim 150 mijl oude riolen en legde er meer dan 1.000 mijl nieuwe aan, met 318 miljoen bakstenen; in 1875 was het klaar. Bij het berekenen van de buisdiameter nam hij de dichtste bevolking en de ruimste marge — en verdubbelde de uitkomst: 'We doen dit maar één keer, en er is altijd het onvoorziene.' Zonder die verdubbeling waren de riolen in de jaren zestig van de twintigste eeuw overgelopen. De laatste cholera-epidemie, in 1866, trof het East End, het enige deel dat nog niet was aangesloten. Bovengronds zie je zijn werk als de Victoria Embankment: 37¼ acre uit de rivier gewonnen, geopend in juli 1870, met daarin de rioolbuis en de District Railway — en erbovenop [[cleopatras-needle|een Egyptische obelisk]].",
      let_hierop: "Loop over de Victoria Embankment tussen Westminster en Blackfriars: onder je voeten liggen het riool en de District line, en het hele stuk grond is uit de rivier gewonnen.",
      onbevestigd: "Nog geen gecontroleerde vrije afbeelding. Het citaat van Bazalgette is in de gebruikte bronnen niet aan een primair document gekoppeld.",
      verbindingen: [
        { id: "cleopatras-needle", relatie: "staat op de kade die hieruit voortkwam" },
        { id: "big-ben", relatie: "het gebouw waar de gordijnen in chloorkalk hingen" }
      ],
      bronnen: [
        { titel: "The Great Stink of 1858 — London Museum", url: "https://www.londonmuseum.org.uk/collections/london-stories/great-stink-of-1858/" },
        { titel: "How Bazalgette built London's first super-sewer — London Museum", url: "https://www.londonmuseum.org.uk/collections/london-stories/how-bazalgette-built-londons-first-super-sewer/" },
        { titel: "The Story of London's Sewer System — Heritage Calling (Historic England)", url: "https://heritagecalling.com/2019/03/28/the-story-of-londons-sewer-system/" },
        { titel: "London Sewer System — Institution of Civil Engineers", url: "https://www.ice.org.uk/what-is-civil-engineering/infrastructure-projects/london-sewer-system" },
        { titel: "Joseph Bazalgette — Grace's Guide", url: "https://www.gracesguide.co.uk/Joseph_Bazalgette" },
        { titel: "The Big Thames Clean up — Cholera and the Thames", url: "https://www.choleraandthethames.co.uk/cholera-in-london/the-big-thames-clean-up/" },
        { titel: "The Victoria Embankment — British History Online", url: "https://www.british-history.ac.uk/old-new-london/vol3/pp322-329" },
        { titel: "Thames Embankment — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Thames_Embankment" }
      ]
    },

    /* ---- Tilburg — gebiedsverhalen ---- */
    {
      id: "tilburgse-kermis",
      plaats: "tilburg",
      jaar: 1567,
      naam: "Tilburgse Kermis",
      ondertitel: "Volksfeest · eerste vermelding 1567 · laatste volle week van juli",
      themas: ["kruikenstad"],
      roem: 65,
      verhaal: 70,
      esthetiek: 30,
      afbeelding: "Tilburg, reclamedoeken bij de Paleisring - het Piusplein voor de Tilburgse Kermis IMG 5771 2018-07-22 10.11.jpg",
      bijschrift: "Aankondiging van de kermis bij de Paleisring, juli 2018.",
      glance: "Een kermis die ouder is dan de jaarmarkten van de stad en nu 4,5 kilometer lang is.",
      waarom_hier: "De kermis loopt als een lint van 4,5 kilometer door het hele centrum en heeft geen vaste plek; het is een gebeurtenis, geen gebouw.",
      waarom_geen_pin: "Eén week per jaar is dit het grootste kermislint van de Benelux; de overige weken is er niets van te zien. Esthetiek 30.",
      verhaal_tekst: "In 2016 vindt vrijwilliger Ad Pijnenburg in het Regionaal Archief Tilburg een akte uit 1567 waarin een betaling moet gebeuren vóór de „Tilborchse kermisse”. Dat de kermis als tijdsaanduiding dient, betekent dat zij toen al een vaste plaats in het jaar had. Opmerkelijk is het jaar: Tilburg kreeg pas in 1575 toestemming voor jaarmarkten. De kermis was er eerder.\n\nEeuwenlang bestond zij uit koekkramen, snuisterijen, volksspelen en boerenhandel. Eind negentiende eeuw verdrongen draaimolens en machines de volksspelen. Sinds 1969 staat de kermis in de laatste volle week van juli. Nu komen er jaarlijks 230 tot 240 attracties uit binnen- en buitenland, opgesteld over 4,5 kilometer door het centrum, en meer dan een miljoen bezoekers: de grootste kermis van de Benelux.\n\nIn 1990 zette een redacteur van de Gay Krant voor de grap een 'nichtenavond' op teletekst, op de gewoonlijk rustige maandag. Er kwamen onverwacht veel mensen. Op 22 juli 1991 volgde de eerste officiële Roze Maandag; die trekt nu 250.000 tot 300.000 bezoekers, het grootste pride-evenement van Nederland buiten Amsterdam.",
      let_hierop: "Wie buiten juli komt, ziet niets. Wie in de laatste volle week van juli komt, kan het centrum niet oversteken zonder door de kermis te lopen.",
      praktisch: "Laatste volle week van juli, centrum Tilburg. Gratis toegang; zie detilburgsekermis.nl.",
      onbevestigd: "Of de kermis van 1567 een boerenkermis of oogstfeest was, is een veronderstelling in de bronnen, geen vaststaand feit. Nog geen gecontroleerde vrije afbeelding van de kermis zelf; de gebruikte foto toont de aankondiging.",
      verbindingen: [
        { id: "kruikenzeiker", relatie: "het andere volksfeest, carnaval, begint bij dit beeldje" },
        { id: "paleis-raadhuis", relatie: "de kermis loopt langs de Paleisring, om dit gebouw heen" }
      ],
      bronnen: [
        { titel: "Zo groeide Tilburgse Kermis van wat kraampjes tot een kilometerslang lint — Omroep Brabant", url: "https://www.omroepbrabant.nl/nieuws/6018235/zo-groeide-tilburgse-kermis-van-wat-kraampjes-tot-een-kilometerslang-lint" },
        { titel: "4,5 kilometer aan attracties op Benelux' grootste kermis — Omroep Brabant", url: "https://www.omroepbrabant.nl/nieuws/6018697/45-kilometer-aan-attracties-geopend-op-benelux-grootste-kermis-in-tilburg" },
        { titel: "Tilburgse Kermis — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Tilburgse_Kermis" },
        { titel: "Kermis Tilburg — Kermis.nu", url: "https://kermis.nu/kermis/335/tilburg/de-tilburgse-kermis/" },
        { titel: "Roze Maandag — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Roze_Maandag" },
        { titel: "Tijdlijn Roze Maandag — kermistilburg.nl", url: "https://kermistilburg.nl/leesvoer/roze-maandag/" }
      ]
    },

    {
      id: "einde-wolstad",
      plaats: "tilburg",
      jaar: 1965,
      naam: "Het einde van de wolstad",
      ondertitel: "Verdwenen industrie · 1965-1977",
      themas: ["wolstad"],
      roem: 20,
      verhaal: 85,
      esthetiek: 12,
      afbeelding: null,
      glance: "Van 125 fabrieken en 10.700 textielwerkers bleven in twaalf jaar 2.010 werkers en vijf schoorstenen over.",
      waarom_hier: "De fabrieken stonden overal in de stad, tussen de huizen van de oude herdgangen. Het verdwijnen ervan is daarom geen plek maar een laag die over heel Tilburg ligt.",
      waarom_geen_pin: "Het verhaal gaat over wat er niet meer is: van meer dan honderd fabrieken bleven enkele gebouwen en vijf schoorstenen over. Esthetiek 12.",
      verhaal_tekst: "In 1871 telt Tilburg 125 wollenstoffenfabrieken. In 1910 zit ruim driekwart van de Nederlandse wolindustrie in Noord-Brabant, met Tilburg als middelpunt. Eind jaren vijftig komen de eerste tekenen dat het kantelt: de productie verhuist naar landen waar arbeid goedkoper is.\n\nDan gaan de cijfers hard. In 1965 werken er 10.700 mensen in de Tilburgse textiel, in 1970 nog 6.035, in 1977 nog 2.010. Fabriek na fabriek sluit. AaBe, in 1929 opgericht door Adolf van den Bergh aan de Hoevenseweg en in de jaren veertig en vijftig uitgegroeid tot een van de grootste van de stad, komt in 1974 in de problemen en sluit in 1997; op 23 september 2008 volgt het faillissement.\n\nWat ooit de trots van de stad was, wordt een bron van schaamte. In 1974 koopt de gemeente een fabriek en sloopt hem haastig; de kritiek daarop leidt tot een Monumentencommissie. Het Brouwers-complex valt in 1985 na jaren leegstand. Schoorstenen worden opgeblazen — vijf blijven staan. Aan het Korvelplein komt zes hectare vrij. Wat de sloop overleeft, staat er nog: de fabriek van Mommers als [[textielmuseum|TextielMuseum]], de spinnerij van Thomas de Beer als [[de-pont|De Pont]], de productiehallen van AaBe als rijksmonument.",
      let_hierop: "Tel de fabrieksschoorstenen die je in Tilburg nog ziet. Het zijn er vijf; elk daarvan is er een die niet is opgeblazen.",
      onbevestigd: "Nog geen gecontroleerde vrije afbeelding.",
      verbindingen: [
        { id: "textielmuseum", relatie: "een fabriek die bleef staan" },
        { id: "de-pont", relatie: "een fabriek die bleef staan" },
        { id: "kruikenzeiker", relatie: "de bijnaam die de industrie overleefde" },
        { id: "piushaven", relatie: "de haven die met de fabrieken zijn lading verloor" }
      ],
      bronnen: [
        { titel: "Textielindustrie in Tilburg — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Textielindustrie_in_Tilburg" },
        { titel: "Textielindustrie in Nederland — Wikipedia (NL)", url: "https://nl.wikipedia.org/wiki/Textielindustrie_in_Nederland" },
        { titel: "Leegstaande Tilburgse textielfabrieken werden een 'bron van schaamte' — Historiek", url: "https://historiek.net/leegstaande-tilburgse-textielfabrieken-werden-een-bron-van-schaamte/172656/" },
        { titel: "AaBe Fabriek Tilburg: van dekenfabriek tot winkelbestemming — stroomstoringtilburg.nl", url: "https://www.stroomstoringtilburg.nl/geschiedenis-van-tilburg/aabe-fabrieken-in-tilburg-geschiedenis-en-ontwikkelingen/" },
        { titel: "AaBe-fabriek: productiehallen — Rijksmonumenten.nl (511178)", url: "https://rijksmonumenten.nl/monument/511178/aabe-fabriek-productiehallen/tilburg/" },
        { titel: "Textielindustrie – sluiting van de fabrieken — Tijdmachine Tilburg", url: "https://www.tijdmachinetilburg.nl/detailview.aspx?id=1335" }
      ]
    }
  ]
};
