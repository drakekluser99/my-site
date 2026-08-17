import DemoShell from '../_components/DemoShell';
import Reveal from '../_components/Reveal';
import Counter from '../_components/Counter';
import PracticeAccordion from './PracticeAccordion';
import ContactForm from './ContactForm';
import { method, team, matters } from './content';
import styles from './page.module.css';

export const metadata = {
  title: 'Studio Renzi & Associati — Avvocati e consulenti, Ancona',
};

const navLinks = [
  { href: '#pratiche', label: 'Aree di attività' },
  { href: '#metodo', label: 'Come lavoriamo' },
  { href: '#studio', label: 'Lo Studio' },
  { href: '#casi', label: 'Casi' },
];

const cta = { href: '#contatti', label: 'Primo incontro' };

export default function StudioProfessionalePage() {
  return (
    <div className={styles.pageRoot}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=Libre+Franklin:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <DemoShell
        logo={
          <>
            Studio Renzi <span className={styles.amp}>&amp;</span> Associati
          </>
        }
        navLinks={navLinks}
        cta={cta}
        footerText="Studio Renzi & Associati · Corso Garibaldi 45, Ancona — sito dimostrativo"
      >
        {/* ---------------------------------------------------------- hero */}
        <section className={styles.hero}>
          <div className={`${styles.wrap} ${styles.heroInner}`}>
            <div className={styles.heroCopy}>
              <div className={styles.eyebrow}>Ancona · dal 1998</div>
              <h1 className={styles.heroTitle}>
                Consulenza legale che <em>dice le cose</em> come stanno.
              </h1>
              <p className={styles.heroText}>
                Affianchiamo imprese e privati nelle decisioni che contano. Al primo incontro
                trovi tempi, costi e possibili esiti messi per iscritto — anche quando la risposta
                onesta è che non conviene procedere.
              </p>
              <div className={styles.heroCtas}>
                <a href="#contatti" className={styles.btn}>
                  Richiedi un primo incontro
                </a>
                <a href="#pratiche" className={styles.btnOutline}>
                  Aree di attività
                </a>
              </div>
            </div>

            {/* the seal: concentric rules + text on a path, drawn inline */}
            <div className={styles.sealWrap} aria-hidden="true">
              <svg viewBox="0 0 240 240" className={styles.seal}>
                <defs>
                  <path
                    id="sealArcTop"
                    d="M 120,120 m -92,0 a 92,92 0 1,1 184,0"
                    fill="none"
                  />
                  <path
                    id="sealArcBottom"
                    d="M 120,120 m -80,0 a 80,80 0 1,0 160,0"
                    fill="none"
                  />
                </defs>
                <circle cx="120" cy="120" r="112" className={styles.sealRingOuter} />
                <circle cx="120" cy="120" r="104" className={styles.sealRingThin} />
                <circle cx="120" cy="120" r="66" className={styles.sealRingThin} />
                <text className={styles.sealText}>
                  <textPath href="#sealArcTop" startOffset="50%" textAnchor="middle">
                    STUDIO RENZI &amp; ASSOCIATI
                  </textPath>
                </text>
                <text className={styles.sealText}>
                  <textPath href="#sealArcBottom" startOffset="50%" textAnchor="middle">
                    FORO DI ANCONA
                  </textPath>
                </text>
                <text x="120" y="112" textAnchor="middle" className={styles.sealMono}>
                  SR&amp;A
                </text>
                <line x1="92" y1="126" x2="148" y2="126" className={styles.sealRule} />
                <text x="120" y="150" textAnchor="middle" className={styles.sealYear}>
                  MCMXCVIII
                </text>
              </svg>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------- credenziali */}
        <div className={styles.credentials}>
          <div className={`${styles.wrap} ${styles.credRow}`}>
            <Reveal className={styles.credItem}>
              <Counter target={26} className={styles.credNum} />
              <span>anni di attività</span>
            </Reveal>
            <Reveal delay={70} className={styles.credItem}>
              <Counter target={400} suffix="+" className={styles.credNum} />
              <span>pratiche seguite</span>
            </Reveal>
            <Reveal delay={140} className={styles.credItem}>
              <Counter target={3} className={styles.credNum} />
              <span>professionisti iscritti all’albo</span>
            </Reveal>
            <Reveal delay={210} className={styles.credItem}>
              <span className={styles.credNum}>24h</span>
              <span>tempo di risposta dichiarato</span>
            </Reveal>
          </div>
        </div>

        {/* ----------------------------------------------- aree di attività */}
        <section className={styles.section} id="pratiche">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Aree di attività</div>
              <h2>Di cosa ci occupiamo</h2>
              <p className={styles.sectionLead}>
                Quattro materie, seguite internamente. Fuori da queste preferiamo indirizzarti a un
                collega che le pratica ogni giorno.
              </p>
            </div>
            <PracticeAccordion />
          </div>
        </section>

        {/* ---------------------------------------------------- come lavoriamo */}
        <section className={`${styles.section} ${styles.sectionDark}`} id="metodo">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Come lavoriamo</div>
              <h2>Dal primo incontro al mandato</h2>
              <p className={styles.sectionLead}>
                La parte che di solito resta implicita, scritta prima di cominciare.
              </p>
            </div>
            <ol className={styles.method}>
              {method.map((s, i) => (
                <Reveal key={s.n} as="li" delay={i * 70} className={styles.methodStep}>
                  <div className={styles.methodNum}>{s.n}</div>
                  <h3 className={styles.methodTitle}>{s.title}</h3>
                  <p className={styles.methodText}>{s.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* --------------------------------------------------- i professionisti */}
        <section className={styles.section} id="studio">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Lo Studio</div>
              <h2>I professionisti</h2>
            </div>
            <div className={styles.teamList}>
              {team.map((p, i) => (
                <Reveal key={p.name} delay={i * 70} className={styles.person}>
                  <div className={styles.personTop}>
                    <div className={styles.monogram} aria-hidden="true">
                      {p.initials}
                    </div>
                    <div className={styles.personRoleTag}>{p.role}</div>
                  </div>
                  <h3 className={styles.personName}>{p.name}</h3>
                  <p className={styles.personFocus}>{p.focus}</p>
                  <p className={styles.personBar}>{p.bar}</p>
                  <ul className={styles.personExtra}>
                    {p.extra.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ casi */}
        <section className={`${styles.section} ${styles.sectionPaper}`} id="casi">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Casi</div>
              <h2>Qualche pratica recente</h2>
              <p className={styles.sectionLead}>
                Casi rappresentativi, resi anonimi. Ogni vicenda fa storia a sé: nessun esito
                passato garantisce lo stesso risultato.
              </p>
            </div>
            <div className={styles.matters}>
              {matters.map((m, i) => (
                <Reveal key={m.title} delay={i * 60} className={styles.matter}>
                  <div className={styles.matterMeta}>
                    <span className={styles.matterYear}>{m.year}</span>
                    <span className={styles.matterArea}>{m.area}</span>
                  </div>
                  <div>
                    <h3 className={styles.matterTitle}>{m.title}</h3>
                    <p className={styles.matterOutcome}>{m.outcome}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- contatti */}
        <section className={styles.section} id="contatti">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Contatti</div>
              <h2>Fissiamo un primo incontro</h2>
            </div>
            <div className={styles.contactGrid}>
              <Reveal>
                <ContactForm />
              </Reveal>
              <Reveal delay={110} className={styles.contactAside}>
                <dl className={styles.infoList}>
                  <div className={styles.infoRow}>
                    <dt>Telefono</dt>
                    <dd>
                      <a href="tel:0710000000" className={styles.link}>
                        071 000 0000
                      </a>
                      <span className={styles.infoSub}>Lun–Ven, 9:00–18:00</span>
                    </dd>
                  </div>
                  <div className={styles.infoRow}>
                    <dt>Email</dt>
                    <dd>
                      <a href="mailto:info@studiorenzi.it" className={styles.link}>
                        info@studiorenzi.it
                      </a>
                      <span className={styles.infoSub}>Risposta entro 24h lavorative</span>
                    </dd>
                  </div>
                  <div className={styles.infoRow}>
                    <dt>Studio</dt>
                    <dd>
                      <a
                        href="https://maps.google.com/?q=Corso+Garibaldi+45,+Ancona"
                        target="_blank"
                        rel="noopener"
                        className={styles.link}
                      >
                        Corso Garibaldi 45 ↗
                      </a>
                      <span className={styles.infoSub}>60121 Ancona (AN) · secondo piano</span>
                    </dd>
                  </div>
                  <div className={styles.infoRow}>
                    <dt>PEC</dt>
                    <dd>
                      studiorenzi@pec.it
                      <span className={styles.infoSub}>Per comunicazioni con valore legale</span>
                    </dd>
                  </div>
                </dl>

                <div className={styles.noteCard}>
                  <div className={styles.noteRef}>Nota</div>
                  <p>
                    Il primo incontro dura circa quarantacinque minuti, è gratuito e non impegna
                    nessuna delle due parti. Se dall’incontro emerge che la strada migliore è un
                    collega o nessuna causa, te lo diciamo lì.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </DemoShell>
    </div>
  );
}
