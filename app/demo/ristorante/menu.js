/**
 * Menu data for the ristorante prototype. Kept in a plain module so the server
 * page and the client-side <MenuTabs> both read the same source, and so the
 * "swap in the real carta" edit a client would ask for is one file.
 */
export const menuCategories = [
  {
    id: 'pizze',
    label: 'Pizze',
    note: 'Impasto a 48 ore, cotta 90 secondi nel forno a legna.',
    items: [
      {
        name: 'Margherita del Vento',
        desc: 'San Marzano DOP, fiordilatte di Agerola, basilico, olio EVO delle Marche',
        price: '9',
        tags: ['veg'],
      },
      {
        name: 'Diavola di Mare',
        desc: '’Nduja di Spilinga, alici del Cantabrico, fiordilatte, origano di montagna',
        price: '13',
        tags: ['piccante', 'firma'],
      },
      {
        name: 'Bianca ai Funghi',
        desc: 'Porcini, provola affumicata, timo, nocciole tostate, olio al prezzemolo',
        price: '14',
        tags: ['veg', 'stagione'],
      },
      {
        name: 'Marinara Antica',
        desc: 'Pomodoro, aglio dell’orto, origano, olio EVO — senza mozzarella, come nel 1889',
        price: '7',
        tags: ['veg', 'vegan'],
      },
      {
        name: 'Ancona 1919',
        desc: 'Stocco all’anconetana, patate, rosmarino, pecorino di fossa',
        price: '15',
        tags: ['firma'],
      },
    ],
  },
  {
    id: 'cucina',
    label: 'Dalla cucina',
    note: 'La carta cambia ogni settimana, con quello che troviamo al mercato.',
    items: [
      {
        name: 'Moscioli selvatici in scapece',
        desc: 'Cozze del Conero, pane croccante, aceto di vino cotto',
        price: '12',
        tags: ['stagione'],
      },
      {
        name: 'Tagliatelle al tartufo nero',
        desc: 'Pasta tirata a mano, tartufo di Acqualagna, burro e parmigiano 24 mesi',
        price: '16',
        tags: ['firma'],
      },
      {
        name: 'Coniglio in porchetta',
        desc: 'Ricetta della nonna, finocchietto selvatico, patate al rosmarino',
        price: '19',
        tags: [],
      },
      {
        name: 'Brodetto anconetano',
        desc: 'Tredici pesci dell’Adriatico, pomodoro, pane abbrustolito — per due persone',
        price: '38',
        tags: ['firma'],
      },
    ],
  },
  {
    id: 'dolci',
    label: 'Dolci',
    note: 'Fatti la mattina stessa, finché durano.',
    items: [
      {
        name: 'Crema catalana alla lavanda',
        desc: 'Zucchero bruciato al momento, lavanda del giardino',
        price: '8',
        tags: ['veg'],
      },
      {
        name: 'Cicerchiata',
        desc: 'Il dolce delle feste marchigiane, miele di acacia e scorza d’arancia',
        price: '7',
        tags: ['veg'],
      },
      {
        name: 'Gelato al fiordilatte e olio EVO',
        desc: 'Mantecato in casa, sale di Cervia',
        price: '6',
        tags: ['veg'],
      },
    ],
  },
  {
    id: 'cantina',
    label: 'Cantina',
    note: 'Ottanta etichette, quasi tutte entro cinquanta chilometri da qui.',
    items: [
      {
        name: 'Verdicchio di Matelica ’22',
        desc: 'Secco, sapido, minerale — il compagno naturale del brodetto',
        price: '6 / 26',
        tags: ['al calice'],
      },
      {
        name: 'Rosso Conero Riserva ’19',
        desc: 'Montepulciano in purezza, dodici mesi in botte grande',
        price: '7 / 32',
        tags: ['al calice'],
      },
      {
        name: 'Lacrima di Morro d’Alba ’23',
        desc: 'Naso di rosa e viola, tannino gentile — servito fresco',
        price: '6 / 24',
        tags: ['al calice'],
      },
      {
        name: 'Vernaccia di Serrapetrona spumante',
        desc: 'Rosso frizzante, tre fermentazioni — sulla cicerchiata è perfetto',
        price: '28',
        tags: [],
      },
    ],
  },
];
