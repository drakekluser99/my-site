/**
 * Content for the freelance copywriter prototype.
 *
 * A copywriter's site is judged on its own copy, so the page's centrepiece is
 * the work itself: real before/after rewrites, and one brief written in three
 * registers. These are the portfolio — everything else is framing.
 */

export const rewrites = [
  {
    id: 'sito',
    tab: 'Pagina servizi',
    client: 'Studio di consulenza · Ancona',
    before:
      'Il nostro studio, forte di una pluriennale esperienza maturata nel settore, è in grado di offrire alla propria clientela un ventaglio di soluzioni personalizzate volte a soddisfare ogni esigenza in ambito fiscale e societario.',
    after:
      'Ci occupiamo di fisco e società per piccole imprese marchigiane. Dodici anni, quattrocento clienti, un referente unico per pratica.',
    changes: [
      '«Ventaglio di soluzioni personalizzate» non dice niente: via.',
      'Dentro i numeri, che invece dicono tutto.',
      // Must match what the component counts on screen — on a copywriter's
      // page a wrong word count is the one error you cannot ship.
      'Trentaquattro parole diventate diciannove.',
    ],
  },
  {
    id: 'prodotto',
    tab: 'Scheda prodotto',
    client: 'Pelletteria artigiana · Tolentino',
    before:
      'Prodotto di alta qualità realizzato con materiali pregiati, selezionati accuratamente dai nostri esperti artigiani per garantire un risultato eccellente e duraturo nel tempo.',
    after:
      'Cuoio conciato al vegetale, cucito a mano a Tolentino. Con l’uso si scurisce: fra due anni sarà più bello di adesso.',
    changes: [
      '«Alta qualità» lo scrivono tutti, anche chi non ce l’ha.',
      'Il nome della concia e della città può scriverlo solo chi ce l’ha davvero.',
      'La frase finale dà un motivo per comprarlo adesso.',
    ],
  },
  {
    id: 'email',
    tab: 'Email ai clienti',
    client: 'Negozio di abbigliamento · Jesi',
    before:
      'Gentile Cliente, siamo lieti di informarLa che è ora disponibile il nostro nuovo catalogo autunno-inverno, ricco di novità che siamo certi sapranno soddisfare le Sue aspettative.',
    after:
      'Il catalogo d’inverno è online. Sono trentadue pezzi nuovi: se ha poco tempo guardi i primi quattro, sono quelli che consiglierei a un’amica.',
    changes: [
      'Un’email non è un comunicato stampa.',
      '«Siamo lieti di informarLa» è tempo rubato a chi legge.',
      'Un consiglio vero vale più di tre aggettivi.',
    ],
  },
];

export const tones = [
  {
    id: 'formale',
    label: 'Formale',
    note: 'Quando il lettore si aspetta una certa distanza — istituzioni, bandi, clientela anziana.',
    text: 'Dal 1958 la nostra pasticceria seleziona materie prime di eccellenza per offrire alla clientela prodotti di elevata qualità artigianale.',
  },
  {
    id: 'diretto',
    label: 'Diretto',
    note: 'L’impostazione che consiglio quasi sempre: dice i fatti e si toglie di mezzo.',
    text: 'Facciamo dolci dal 1958. Burro vero, nessun semilavorato, e i cornetti escono dal forno alle sei e un quarto.',
  },
  {
    id: 'caldo',
    label: 'Caldo',
    note: 'Per chi ha una storia di famiglia e un pubblico che se la ricorda.',
    text: 'Il nonno apriva alle cinque per accendere il forno. Noi facciamo ancora così, e i cornetti sono ancora quelli.',
  },
];

export const steps = [
  {
    n: '01',
    title: 'Ti ascolto',
    text: 'Un’ora al telefono o davanti a un caffè. Mi racconti l’attività, io faccio domande noiose: chi compra, perché, cosa chiede sempre.',
  },
  {
    n: '02',
    title: 'Studio chi legge',
    text: 'Guardo i tuoi concorrenti, le recensioni, le email che ricevi. Le parole giuste sono quasi sempre già nella bocca dei tuoi clienti.',
  },
  {
    n: '03',
    title: 'Scrivo la prima bozza',
    text: 'Te la mando in un documento commentato, con le alternative dove ho avuto un dubbio. Non è un compito da correggere: è l’inizio di una conversazione.',
  },
  {
    n: '04',
    title: 'Affiniamo insieme',
    text: 'Due giri di revisione sono compresi. Di solito ne basta uno, perché al punto 1 ho fatto le domande noiose.',
  },
  {
    n: '05',
    title: 'Consegno testi pronti',
    text: 'Impaginabili così come sono, con i titoli, i pulsanti e i testi alternativi delle immagini. Non ti lascio l’ultimo miglio da fare.',
  },
];

export const services = [
  {
    name: 'Testi per il sito',
    price: 'da € 350',
    time: '2–3 settimane',
    desc: 'Home, chi siamo, pagine servizi. Il pacchetto più richiesto.',
    includes: ['Fino a 5 pagine', 'Titoli e microtesti', 'Due giri di revisione', 'Consegna impaginabile'],
  },
  {
    name: 'Email e newsletter',
    price: 'da € 180',
    time: '1 settimana',
    desc: 'Sequenze di benvenuto o newsletter periodica, con il tuo tono di voce.',
    includes: ['Fino a 4 email', 'Oggetti alternativi da testare', 'Calendario di invio', 'Un giro di revisione'],
  },
  {
    name: 'Revisione di testi tuoi',
    price: 'da € 120',
    time: '3–5 giorni',
    desc: 'Hai già scritto tutto e non ti convince. Lo sistemo io.',
    includes: ['Fino a 6.000 battute', 'Modifiche tracciate', 'Nota sul perché di ogni taglio', 'Mezz’ora di call finale'],
  },
];

export const quotes = [
  {
    text: 'Ha trasformato una pagina di servizi confusa in qualcosa che finalmente i clienti capiscono al primo sguardo. Le richieste di preventivo sono raddoppiate.',
    who: 'Titolare, studio di consulenza · Ancona',
  },
  {
    text: 'Mi ha fatto domande che nessuno mi aveva mai fatto sull’azienda. I testi sono arrivati dopo, ma la cosa utile erano le domande.',
    who: 'Fondatrice, pelletteria artigiana · Tolentino',
  },
];
