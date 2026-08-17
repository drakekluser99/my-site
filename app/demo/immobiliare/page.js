import DemoShell from '../_components/DemoShell';
import Reveal from '../_components/Reveal';
import Counter from '../_components/Counter';
import Explorer from './Explorer';
import Valuation from './Valuation';
import { zones, steps, team } from './content';
import styles from './page.module.css';

export const metadata = {
  title: 'Meridiana Immobiliare — Case e mercato ad Ancona',
};

const navLinks = [
  { href: '#annunci', label: 'Immobili' },
  { href: '#mercato', label: 'Il mercato' },
  { href: '#stima', label: 'Stima' },
  { href: '#agenzia', label: 'Agenzia' },
];

const cta = { href: '#stima', label: 'Quanto vale casa' };

const maxEur = Math.max(...zones.map((z) => z.eur));

export default function ImmobiliarePage() {
  return (
    <div className={styles.pageRoot}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <DemoShell
        logo="Meridiana"
        navLinks={navLinks}
        cta={cta}
        footerText="Meridiana Immobiliare · Corso Amendola 12, Ancona — sito dimostrativo"
      >
        {/* ---------------------------------------------------------- hero */}
        <section className={styles.hero}>
          <div className={`${styles.wrap} ${styles.heroInner}`}>
            <div>
              <div className={styles.eyebrow}>Ancona e provincia · dal 2011</div>
              <h1 className={styles.heroTitle}>
                Le case, e i numeri che <em>ci stanno sotto.</em>
              </h1>
              <p className={styles.heroText}>
                Prezzi al metro quadro per zona, tempi medi di vendita e scarto fra richiesta e
                chiusura. Pubblichiamo quello che di solito si scopre solo dopo aver firmato
                l’incarico.
              </p>
              <div className={styles.heroCtas}>
                <a href="#annunci" className={styles.btn}>
                  Vedi gli immobili
                </a>
                <a href="#stima" className={styles.btnOutline}>
                  Stima la tua casa
                </a>
              </div>
            </div>

            <div className={styles.heroStats}>
              {[
                { n: <Counter target={14} className={styles.hsNum} />, l: 'anni di attività' },
                { n: <Counter target={600} suffix="+" className={styles.hsNum} />, l: 'immobili trattati' },
                { n: <span className={styles.hsNum}>4,8/5</span>, l: 'valutazione media' },
                { n: <span className={styles.hsNum}>0 €</span>, l: 'costo della stima' },
              ].map((s, i) => (
                <div key={i} className={styles.hs}>
                  {s.n}
                  <span className={styles.hsLbl}>{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------- annunci */}
        <section className={styles.section} id="annunci">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Immobili</div>
              <h2 className={styles.sectionTitle}>Quello che abbiamo adesso</h2>
              <p className={styles.sectionLead}>
                Otto immobili, tutti con documenti già controllati. Le planimetrie sono disegnate:
                le foto te le mandiamo dopo il primo contatto, così le case restano di chi ci vive.
              </p>
            </div>
            <Explorer />
          </div>
        </section>

        {/* ------------------------------------------------------- mercato */}
        <section className={`${styles.section} ${styles.sectionInk}`} id="mercato">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Il mercato</div>
              <h2 className={styles.sectionTitle}>Ancona, zona per zona</h2>
              <p className={styles.sectionLead}>
                Prezzo medio al metro quadro, giorni sul mercato e scarto fra prezzo richiesto e
                prezzo di chiusura.
              </p>
            </div>

            <div className={styles.chart}>
              <div className={styles.chartHead}>
                <span>Zona</span>
                <span>€ / m²</span>
                <span className={styles.chartHeadDays}>Giorni</span>
                <span className={styles.chartHeadGap}>Scarto</span>
              </div>
              {zones.map((z, i) => (
                <Reveal key={z.id} delay={i * 55} className={styles.chartRow}>
                  <span className={styles.chartZone}>{z.name}</span>
                  <span className={styles.chartBarWrap}>
                    <span
                      className={styles.chartBar}
                      style={{ width: `${(z.eur / maxEur) * 100}%` }}
                    ></span>
                    <span className={styles.chartVal}>{z.eur.toLocaleString('it-IT')}</span>
                  </span>
                  <span className={styles.chartDays}>{z.days} gg</span>
                  <span className={styles.chartGap}>−{z.gap.toString().replace('.', ',')}%</span>
                </Reveal>
              ))}
            </div>

            <p className={styles.chartNote}>
              Valori inventati per questo prototipo dimostrativo. In un sito reale arriverebbero
              dalle compravendite effettivamente concluse dall’agenzia, aggiornate ogni trimestre.
            </p>
          </div>
        </section>

        {/* --------------------------------------------------------- stima */}
        <section className={styles.section} id="stima">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Stima</div>
              <h2 className={styles.sectionTitle}>Quanto vale casa tua, all’incirca</h2>
              <p className={styles.sectionLead}>
                Tre dati e ti diamo una forbice. Non è una perizia, ma è il numero da cui partire
                per capire se conviene muoversi adesso.
              </p>
            </div>
            <Valuation />
          </div>
        </section>

        {/* ---------------------------------------------------- come lavoriamo */}
        <section className={`${styles.section} ${styles.sectionSoft}`}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Come lavoriamo</div>
              <h2 className={styles.sectionTitle}>Dal sopralluogo al rogito</h2>
            </div>
            <div className={styles.steps}>
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 70} className={styles.step}>
                  <div className={styles.stepNum}>{s.n}</div>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepText}>{s.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------- agenzia */}
        <section className={styles.section} id="agenzia">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Agenzia</div>
              <h2 className={styles.sectionTitle}>Tre persone, nessun call center</h2>
            </div>
            <div className={styles.teamGrid}>
              {team.map((t, i) => (
                <Reveal key={t.name} delay={i * 70} className={styles.person}>
                  <div className={styles.personBadge} aria-hidden="true">
                    {t.initials}
                  </div>
                  <h3 className={styles.personName}>{t.name}</h3>
                  <p className={styles.personRole}>{t.role}</p>
                  <p className={styles.personCert}>{t.cert}</p>
                </Reveal>
              ))}
            </div>

            <div className={styles.contactBand}>
              <div>
                <h3 className={styles.contactTitle}>Parliamone senza impegno</h3>
                <p className={styles.contactText}>
                  Che tu voglia vendere, affittare o comprare, il sopralluogo e la stima non ti
                  costano niente e non ti vincolano a nulla.
                </p>
              </div>
              <div className={styles.contactActions}>
                <a href="tel:0710000001" className={styles.btn}>
                  071 000 0001
                </a>
                <a
                  href="https://maps.google.com/?q=Corso+Amendola+12,+Ancona"
                  target="_blank"
                  rel="noopener"
                  className={styles.mapLink}
                >
                  Corso Amendola 12, Ancona ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </DemoShell>
    </div>
  );
}
