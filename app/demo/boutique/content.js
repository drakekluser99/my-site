/**
 * Content for the AURA prototype. AURA is a fictional product invented for
 * this portfolio — every figure below is illustrative, and the page carries
 * that disclaimer in the footer and next to the calculator.
 */

export const finishes = [
  {
    id: 'acciaio',
    label: 'Acciaio',
    full: 'Acciaio spazzolato',
    material: 'Acciaio inox 316L',
    weight: '18',
    note: 'La finitura originale. Spazzolatura verticale, bordo lucidato a specchio.',
  },
  {
    id: 'ottone',
    label: 'Ottone',
    full: 'Ottone brunito',
    material: 'Ottone massiccio CuZn37',
    weight: '22',
    note: 'Si ossida con l’uso: dopo un anno la tua non somiglia più a nessun’altra.',
  },
  {
    id: 'grafite',
    label: 'Grafite',
    full: 'Grafite PVD',
    material: 'Acciaio 316L, rivestimento PVD',
    weight: '18',
    note: 'Deposizione fisica da vapore, spessore due micron. Non si scheggia.',
  },
];

/** Callouts pinned to the card in the hero — position is a % of the stage. */
export const callouts = [
  { id: 'edge', x: 4, y: 26, side: 'left', title: 'Bordo fresato', text: 'Smusso a 45°, lucidato a specchio' },
  { id: 'chip', x: 4, y: 68, side: 'left', title: 'Chip EMV', text: 'Contatti placcati oro, contactless' },
  { id: 'etch', x: 96, y: 34, side: 'right', title: 'Incisione laser', text: 'Nessun inchiostro: non si consuma' },
  { id: 'weight', x: 96, y: 74, side: 'right', title: 'Massa', text: 'Metallo pieno, non placcato' },
];

export const specs = [
  { k: 'Materiale', v: 'Acciaio inox 316L' },
  { k: 'Peso', v: '18 g' },
  { k: 'Spessore', v: '0,80 mm' },
  { k: 'Finitura', v: 'Spazzolata verticale' },
  { k: 'Personalizzazione', v: 'Incisione laser, non stampa' },
  { k: 'Chip', v: 'EMV con contatti placcati oro' },
  { k: 'Contactless', v: 'NFC 13,56 MHz' },
  { k: 'Numerazione', v: 'Solo sul retro' },
  { k: 'Temperatura d’esercizio', v: '−25 °C / +70 °C' },
  { k: 'Garanzia', v: '5 anni sul supporto fisico' },
];

export const comparison = [
  { feature: 'Commissioni sul cambio', aura: 'Nessuna, tasso interbancario', other: '1,5 – 3% sull’importo' },
  { feature: 'Cashback', aura: '3%, accreditato subito', other: 'Punti a scadenza' },
  { feature: 'Materiale', aura: 'Metallo pieno, 18 g', other: 'PVC, 5 g' },
  { feature: 'Canone annuo', aura: 'Nessuno', other: '60 – 120 €' },
  { feature: 'Assistenza', aura: 'Persona reale, 24/7', other: 'Menu telefonico' },
  { feature: 'Blocco carta', aura: 'Istantaneo dall’app', other: 'Chiamata al numero verde' },
];

export const steps = [
  { n: '01', title: 'Scegli la finitura', text: 'Acciaio, ottone o grafite. È l’unica scelta che ti chiediamo di fare.' },
  { n: '02', title: 'Verifica in giornata', text: 'Identità confermata online, approvazione media entro 24 ore lavorative.' },
  { n: '03', title: 'Incisione e spedizione', text: 'Il tuo nome inciso a laser, spedizione tracciata in tre giorni.' },
];

export const faqs = [
  {
    q: 'Passa dai metal detector in aeroporto?',
    a: 'Sì. È metallo, quindi lo vedono ai raggi X come vedono le chiavi — nessuna procedura particolare, nessun problema segnalato.',
  },
  {
    q: 'Funziona nei lettori a strisciata?',
    a: 'Sì, la banda è presente sul retro. In pratica non la userai quasi mai: il chip e il contactless coprono la quasi totalità dei terminali.',
  },
  {
    q: 'Cosa succede se la perdo?',
    a: 'La blocchi dall’app in un tocco e ne ordini una nuova. La prima sostituzione è compresa.',
  },
  {
    q: 'Il cashback ha un tetto?',
    a: 'In questo prototipo no: le cifre servono a mostrare come si presenterebbe l’informazione, non a descrivere un prodotto reale.',
  },
];
