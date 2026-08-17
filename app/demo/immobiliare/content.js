/**
 * Content for the immobiliare prototype.
 *
 * The agency has no photography, and a prototype that fakes property photos
 * with gradients reads as a placeholder. So the cards carry drawn floor plans
 * instead, and the page competes on the thing an agency actually knows that a
 * portal does not: the local market. Every figure here is invented for the
 * demo — the page says so next to the data.
 */

export const zones = [
  { id: 'centro', name: 'Centro Storico', eur: 2150, days: 96, gap: 6.5 },
  { id: 'passetto', name: 'Passetto', eur: 2980, days: 71, gap: 4.2 },
  { id: 'adriatico', name: 'Q.re Adriatico', eur: 2420, days: 83, gap: 5.1 },
  { id: 'palombina', name: 'Palombina', eur: 1940, days: 108, gap: 7.8 },
  { id: 'collemarino', name: 'Collemarino', eur: 1810, days: 121, gap: 8.4 },
  { id: 'torrette', name: 'Torrette', eur: 1660, days: 134, gap: 9.1 },
];

export const zoneById = Object.fromEntries(zones.map((z) => [z.id, z]));

/**
 * Floor plans as room rectangles on a 200x150 canvas, 5px margin.
 * Drawn rather than photographed — see the note at the top of this file.
 */
export const floorPlans = {
  trilocale: [
    { x: 5, y: 5, w: 110, h: 80, label: 'Soggiorno' },
    { x: 115, y: 5, w: 80, h: 80, label: 'Cucina' },
    { x: 5, y: 85, w: 95, h: 60, label: 'Camera' },
    { x: 100, y: 85, w: 45, h: 60, label: 'Bagno' },
    { x: 145, y: 85, w: 50, h: 60, label: 'Ingr.' },
  ],
  bilocale: [
    { x: 5, y: 5, w: 115, h: 140, label: 'Zona giorno' },
    { x: 120, y: 5, w: 75, h: 85, label: 'Camera' },
    { x: 120, y: 90, w: 75, h: 55, label: 'Bagno' },
  ],
  villa: [
    { x: 5, y: 5, w: 120, h: 90, label: 'Soggiorno' },
    { x: 125, y: 5, w: 70, h: 55, label: 'Cucina' },
    { x: 125, y: 60, w: 70, h: 35, label: 'Bagno' },
    { x: 5, y: 95, w: 95, h: 50, label: 'Camera 1' },
    { x: 100, y: 95, w: 95, h: 50, label: 'Camera 2' },
  ],
  attico: [
    { x: 5, y: 5, w: 130, h: 95, label: 'Soggiorno' },
    { x: 5, y: 100, w: 70, h: 45, label: 'Camera' },
    { x: 75, y: 100, w: 60, h: 45, label: 'Bagno' },
    { x: 135, y: 5, w: 60, h: 140, label: 'Terrazza', open: true },
  ],
};

export const listings = [
  {
    id: 'a1',
    tipo: 'vendita',
    zona: 'centro',
    titolo: 'Trilocale ristrutturato',
    via: 'Via della Loggia',
    price: 245000,
    mq: 85,
    locali: 3,
    piano: '2° con ascensore',
    classe: 'C',
    plan: 'trilocale',
    note: 'Soffitti a volta, doppia esposizione.',
  },
  {
    id: 'a2',
    tipo: 'affitto',
    zona: 'palombina',
    titolo: 'Bilocale arredato',
    via: 'Via Flaminia',
    price: 750,
    mq: 60,
    locali: 2,
    piano: '1° senza ascensore',
    classe: 'D',
    plan: 'bilocale',
    note: 'A duecento metri dal mare, arredato.',
  },
  {
    id: 'a3',
    tipo: 'vendita',
    zona: 'collemarino',
    titolo: 'Villa indipendente',
    via: 'Via del Golfo',
    price: 410000,
    mq: 180,
    locali: 5,
    piano: 'Su due livelli',
    classe: 'B',
    plan: 'villa',
    note: 'Giardino di 400 m², garage doppio.',
  },
  {
    id: 'a4',
    tipo: 'vendita',
    zona: 'passetto',
    titolo: 'Attico con terrazza',
    via: 'Viale della Vittoria',
    price: 520000,
    mq: 140,
    locali: 4,
    piano: '6° con ascensore',
    classe: 'A',
    plan: 'attico',
    note: 'Terrazza di 60 m² vista mare.',
  },
  {
    id: 'a5',
    tipo: 'affitto',
    zona: 'adriatico',
    titolo: 'Trilocale luminoso',
    via: 'Via Marconi',
    price: 890,
    mq: 95,
    locali: 3,
    piano: '4° con ascensore',
    classe: 'C',
    plan: 'trilocale',
    note: 'Libero da subito, cantina inclusa.',
  },
  {
    id: 'a6',
    tipo: 'vendita',
    zona: 'torrette',
    titolo: 'Bilocale da riordinare',
    via: 'Via Conca',
    price: 98000,
    mq: 55,
    locali: 2,
    piano: '3° senza ascensore',
    classe: 'F',
    plan: 'bilocale',
    note: 'Buon investimento, vicino all’ospedale.',
  },
  {
    id: 'a7',
    tipo: 'vendita',
    zona: 'adriatico',
    titolo: 'Quadrilocale con box',
    via: 'Via Cadore',
    price: 289000,
    mq: 120,
    locali: 4,
    piano: '1° con ascensore',
    classe: 'D',
    plan: 'villa',
    note: 'Box auto e cantina di proprietà.',
  },
  {
    id: 'a8',
    tipo: 'affitto',
    zona: 'centro',
    titolo: 'Monolocale in centro',
    via: 'Corso Mazzini',
    price: 520,
    mq: 38,
    locali: 1,
    piano: '2° senza ascensore',
    classe: 'E',
    plan: 'bilocale',
    note: 'Ideale per studenti o trasfertisti.',
  },
];

/** Condition multipliers for the indicative valuation. */
export const conditions = [
  { id: 'nuovo', label: 'Nuovo o ristrutturato', k: 1.15 },
  { id: 'buono', label: 'Buono stato', k: 1 },
  { id: 'riordinare', label: 'Da riordinare', k: 0.82 },
  { id: 'ristrutturare', label: 'Da ristrutturare', k: 0.65 },
];

export const steps = [
  {
    n: '01',
    title: 'Sopralluogo e stima',
    text: 'Veniamo a vedere l’immobile e ti diamo una forbice di prezzo motivata, con i comparabili della zona alla mano. Gratis, anche se poi non ci incarichi.',
  },
  {
    n: '02',
    title: 'Documenti prima di pubblicare',
    text: 'Visura, planimetria catastale, conformità urbanistica e APE controllati prima dell’annuncio. È qui che saltano fuori i problemi che fanno saltare i rogiti.',
  },
  {
    n: '03',
    title: 'Visite filtrate',
    text: 'Portiamo in casa solo chi ha una capacità di spesa verificata. Meglio quattro visite serie che venti curiosi.',
  },
  {
    n: '04',
    title: 'Dalla proposta al rogito',
    text: 'Seguiamo trattativa, preliminare e atto. Un solo referente, e la provvigione la paghi a rogito fatto.',
  },
];

export const team = [
  {
    initials: 'SB',
    name: 'Sara Bianchi',
    role: 'Titolare, agente immobiliare',
    cert: 'Iscritta al REA di Ancona · n. 000000',
  },
  {
    initials: 'MP',
    name: 'Matteo Pierini',
    role: 'Valutazioni e locazioni',
    cert: 'Perito estimatore · iscritto dal 2016',
  },
  {
    initials: 'GF',
    name: 'Giulia Fabbri',
    role: 'Pratiche e documentazione',
    cert: 'Geometra · conformità e catasto',
  },
];
