/**
 * Content for the palestra prototype. The weekly timetable is the product
 * here, so it is the thing modelled properly: real days, durations, trainers,
 * intensity and remaining places, rather than four decorative rows.
 *
 * Times are local wall-clock minutes-from-midnight helpers away; each class
 * stores `start` as "HH:MM" and `dur` in minutes.
 */

export const dayKeys = ['lun', 'mar', 'mer', 'gio', 'ven', 'sab', 'dom'];

export const dayLabels = {
  lun: 'Lunedì',
  mar: 'Martedì',
  mer: 'Mercoledì',
  gio: 'Giovedì',
  ven: 'Venerdì',
  sab: 'Sabato',
  dom: 'Domenica',
};

export const dayShort = {
  lun: 'Lun',
  mar: 'Mar',
  mer: 'Mer',
  gio: 'Gio',
  ven: 'Ven',
  sab: 'Sab',
  dom: 'Dom',
};

/** getDay() is 0=Sunday; this maps it onto dayKeys. */
export const jsDayToKey = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'];

const HIIT = { name: 'Functional HIIT', trainer: 'Sara M.', intensity: 5, cap: 16 };
const OLY = { name: 'Pesistica olimpica', trainer: 'Diego R.', intensity: 4, cap: 10 };
const MOB = { name: 'Mobility & respiro', trainer: 'Chiara V.', intensity: 1, cap: 20 };
const BOXE = { name: 'Boxe fitness', trainer: 'Karim B.', intensity: 4, cap: 18 };
const FORZA = { name: 'Forza base', trainer: 'Diego R.', intensity: 3, cap: 12 };
const CIRC = { name: 'Circuito metabolico', trainer: 'Sara M.', intensity: 4, cap: 16 };
const OVER = { name: 'Over 60 in forma', trainer: 'Chiara V.', intensity: 2, cap: 14 };

export const timetable = {
  lun: [
    { ...MOB, start: '07:00', dur: 45, free: 9 },
    { ...FORZA, start: '12:30', dur: 60, free: 4 },
    { ...HIIT, start: '18:30', dur: 50, free: 2 },
    { ...OLY, start: '20:00', dur: 75, free: 5 },
  ],
  mar: [
    { ...MOB, start: '07:00', dur: 45, free: 12 },
    { ...OVER, start: '10:00', dur: 50, free: 6 },
    { ...BOXE, start: '19:00', dur: 60, free: 0 },
    { ...CIRC, start: '20:15', dur: 45, free: 7 },
  ],
  mer: [
    { ...MOB, start: '07:00', dur: 45, free: 11 },
    { ...FORZA, start: '12:30', dur: 60, free: 6 },
    { ...HIIT, start: '18:30', dur: 50, free: 1 },
    { ...OLY, start: '20:00', dur: 75, free: 3 },
  ],
  gio: [
    { ...MOB, start: '07:00', dur: 45, free: 14 },
    { ...OVER, start: '10:00', dur: 50, free: 8 },
    { ...BOXE, start: '19:00', dur: 60, free: 3 },
    { ...CIRC, start: '20:15', dur: 45, free: 9 },
  ],
  ven: [
    { ...MOB, start: '07:00', dur: 45, free: 10 },
    { ...FORZA, start: '12:30', dur: 60, free: 5 },
    { ...HIIT, start: '18:30', dur: 50, free: 4 },
    { ...BOXE, start: '20:00', dur: 60, free: 6 },
  ],
  sab: [
    { ...CIRC, start: '09:30', dur: 45, free: 8 },
    { ...OLY, start: '11:00', dur: 75, free: 6 },
    { ...MOB, start: '17:00', dur: 45, free: 15 },
  ],
  dom: [{ ...MOB, start: '10:00', dur: 60, free: 16 }],
};

export const disciplines = [
  {
    name: 'Functional HIIT',
    intensity: 5,
    dur: '50 min',
    text: 'Intervalli brevi, recuperi corti, tutto il corpo. Esci che non riesci a parlare, e va bene così.',
  },
  {
    name: 'Pesistica olimpica',
    intensity: 4,
    dur: '75 min',
    text: 'Strappo e slancio insegnati come si deve, dal bastone in poi. Gruppi da dieci, mai di più.',
  },
  {
    name: 'Boxe fitness',
    intensity: 4,
    dur: '60 min',
    text: 'Guantoni, sacco, footwork. Nessun contatto: la tecnica del pugile senza prenderle.',
  },
  {
    name: 'Forza base',
    intensity: 3,
    dur: '60 min',
    text: 'Squat, panca, stacco. Il corso per chi entra in sala pesi e non sa da dove cominciare.',
  },
  {
    name: 'Circuito metabolico',
    intensity: 4,
    dur: '45 min',
    text: 'Stazioni a rotazione, poco carico e molto ritmo. Il modo più rapido per sudare davvero.',
  },
  {
    name: 'Mobility & respiro',
    intensity: 1,
    dur: '45 min',
    text: 'Articolazioni, catene posteriori, respirazione. Il corso che rende possibili tutti gli altri.',
  },
];

export const plans = [
  {
    id: 'sala',
    name: 'Sala',
    monthly: 35,
    yearly: 29,
    desc: 'Sala pesi e cardio, accesso libero negli orari di apertura.',
    includes: ['Sala pesi e cardio', 'Scheda iniziale', 'Spogliatoi e docce', 'App con i tuoi progressi'],
  },
  {
    id: 'corsi',
    name: 'Corsi',
    monthly: 49,
    yearly: 41,
    featured: true,
    desc: 'Tutto quello che c’è in sala, più i diciotto corsi settimanali.',
    includes: [
      'Tutto il piano Sala',
      'Corsi collettivi illimitati',
      'Prenotazione fino a 7 giorni prima',
      'Ricontrollo scheda ogni 8 settimane',
    ],
  },
  {
    id: 'personal',
    name: 'Personal',
    monthly: 89,
    yearly: 75,
    desc: 'Per chi ha un obiettivo con una data e vuole arrivarci.',
    includes: [
      'Tutto il piano Corsi',
      '2 sedute di personal training al mese',
      'Programma su misura',
      'Consulenza nutrizionale iniziale',
    ],
  },
];

export const trainers = [
  { initials: 'SM', name: 'Sara Marchetti', role: 'Functional e condizionamento', cert: 'Laurea in Scienze Motorie · CrossFit L2' },
  { initials: 'DR', name: 'Diego Rinaldi', role: 'Pesistica e forza', cert: 'Tecnico FIPE di 2° livello' },
  { initials: 'CV', name: 'Chiara Vitali', role: 'Mobility e rieducazione', cert: 'Fisioterapista · istruttrice Pilates' },
  { initials: 'KB', name: 'Karim Bouazza', role: 'Boxe e sport da combattimento', cert: 'Tecnico FPI · ex agonista' },
];

export const facts = [
  { k: '05:30', v: 'apertura, tutti i giorni feriali' },
  { k: '1.100', v: 'metri quadri su due piani' },
  { k: '18', v: 'corsi ogni settimana' },
  { k: '16', v: 'posti massimi per corso' },
];
