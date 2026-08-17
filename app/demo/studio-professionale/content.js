/**
 * Content for the studio-professionale prototype. Kept out of the page so the
 * "swap in the real practice areas / team / matters" edit a client would ask
 * for is one file, and so the accordion island and the server page read the
 * same source.
 */

export const practices = [
  {
    id: 'societario',
    ref: '01',
    area: 'Diritto societario',
    title: 'Costituzione e gestione d’impresa',
    lead: 'Seguiamo la società dalla costituzione alle operazioni straordinarie, con un referente unico che conosce la storia dell’azienda.',
    services: [
      'Costituzione di società e start-up innovative',
      'Patti parasociali e governance',
      'Cessioni di quote e di rami d’azienda',
      'Operazioni straordinarie: fusioni, scissioni, conferimenti',
      'Consulenza continuativa e assistenza alle assemblee',
    ],
  },
  {
    id: 'lavoro',
    ref: '02',
    area: 'Diritto del lavoro',
    title: 'Rapporti di lavoro e relazioni sindacali',
    lead: 'Assistiamo il datore di lavoro nella gestione ordinaria e nei momenti critici, privilegiando l’accordo quando conviene davvero.',
    services: [
      'Contrattualistica e inquadramenti',
      'Licenziamenti individuali e procedure collettive',
      'Contenzioso davanti al Giudice del Lavoro',
      'Trattative e accordi sindacali',
      'Audit su appalti e somministrazione',
    ],
  },
  {
    id: 'tributario',
    ref: '03',
    area: 'Diritto tributario',
    title: 'Fiscalità d’impresa e contenzioso',
    lead: 'Dalla pianificazione ordinaria alla difesa in giudizio, con una valutazione onesta delle probabilità di successo prima di iniziare.',
    services: [
      'Pianificazione fiscale e interpelli',
      'Assistenza in verifiche e accertamenti',
      'Ricorsi alle Corti di Giustizia Tributaria',
      'Adesione, conciliazione e definizioni agevolate',
      'Fiscalità internazionale e residenza',
    ],
  },
  {
    id: 'civile',
    ref: '04',
    area: 'Diritto civile',
    title: 'Contratti, immobili e successioni',
    lead: 'La materia che tocca le persone prima delle aziende: la trattiamo con la stessa preparazione e un linguaggio comprensibile.',
    services: [
      'Redazione e revisione contrattuale',
      'Recupero crediti e procedure esecutive',
      'Compravendite immobiliari e locazioni',
      'Successioni, divisioni ereditarie e testamenti',
      'Responsabilità civile e risarcimento danni',
    ],
  },
];

export const method = [
  {
    n: '01',
    title: 'Primo incontro',
    text: 'Quarantacinque minuti, senza impegno e senza costo. Ci racconti la situazione e ti diciamo con franchezza se possiamo esserti utili — a volte la risposta è no.',
  },
  {
    n: '02',
    title: 'Preventivo scritto',
    text: 'Perimetro dell’incarico, tempi stimati e compenso, messi nero su bianco prima che tu firmi qualsiasi cosa. Se il perimetro cambia, lo riscriviamo.',
  },
  {
    n: '03',
    title: 'Il mandato',
    text: 'Un solo referente per tutta la pratica. Non ti ritroverai a rispiegare il tuo caso a una persona diversa ogni volta che chiami.',
  },
  {
    n: '04',
    title: 'Aggiornamenti',
    text: 'Ti scriviamo a ogni passaggio rilevante, con il linguaggio che si usa fuori dai tribunali. In fattura non compare mai una voce di cui non abbiamo già parlato.',
  },
];

export const team = [
  {
    name: 'Avv. Marco Renzi',
    initials: 'MR',
    role: 'Fondatore',
    focus: 'Diritto societario e operazioni straordinarie',
    bar: 'Foro di Ancona, iscritto dal 2000',
    extra: ['Cassazionista dal 2014', 'Docente a contratto, UNIVPM', 'Italiano · Inglese'],
  },
  {
    name: 'Avv. Elena Costa',
    initials: 'EC',
    role: 'Socia',
    focus: 'Diritto del lavoro e contenzioso civile',
    bar: 'Foro di Ancona, iscritta dal 2011',
    extra: ['Mediatrice civile accreditata', 'Relatrice in materia giuslavoristica', 'Italiano · Inglese · Francese'],
  },
  {
    name: 'Dott. Luca Ferri',
    initials: 'LF',
    role: 'Of counsel',
    focus: 'Consulenza tributaria e fiscalità d’impresa',
    bar: 'Ordine dei Dottori Commercialisti, iscritto dal 2015',
    extra: ['Revisore legale', 'Difensore tributario abilitato', 'Italiano · Inglese'],
  },
];

export const matters = [
  {
    year: '2024',
    area: 'Societario',
    title: 'Cessione di ramo d’azienda nel manifatturiero',
    outcome: 'Assistenza al venditore dalla due diligence al closing, concluso in quattro mesi.',
  },
  {
    year: '2024',
    area: 'Lavoro',
    title: 'Procedura di licenziamento collettivo, 18 dipendenti',
    outcome: 'Accordo sindacale raggiunto in sede protetta, nessun contenzioso successivo.',
  },
  {
    year: '2023',
    area: 'Tributario',
    title: 'Accertamento induttivo a carico di una S.r.l.',
    outcome: 'Ricorso accolto, pretesa erariale annullata integralmente.',
  },
  {
    year: '2023',
    area: 'Civile',
    title: 'Divisione ereditaria tra cinque eredi, immobili in due Paesi',
    outcome: 'Accordo transattivo sottoscritto senza ricorso al giudizio.',
  },
];

export const matterTypes = [
  'Diritto societario',
  'Diritto del lavoro',
  'Diritto tributario',
  'Diritto civile',
  'Non so ancora / altro',
];
