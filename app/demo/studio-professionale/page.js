import DemoShell from '../_components/DemoShell';
import Reveal from '../_components/Reveal';
import styles from './page.module.css';

export const metadata = {
  title: 'Studio Renzi & Associati — Consulenza legale e societaria',
};

const navLinks = [
  { href: '#pratiche', label: 'Aree di attività' },
  { href: '#studio', label: 'Lo Studio' },
  { href: '#contatti', label: 'Contatti' },
];

const team = [
  { name: 'Avv. Marco Renzi', role: 'Fondatore — Diritto Societario', years: 'Iscritto all’Albo dal 2000' },
  { name: 'Avv. Elena Costa', role: 'Diritto del Lavoro e Civile', years: 'Iscritta all’Albo dal 2011' },
  { name: 'Dott. Luca Ferri', role: 'Consulenza Tributaria', years: 'Iscritto all’Albo dal 2015' },
];

export default function StudioProfessionalePage() {
  return (
    <div className={styles.pageRoot}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=Libre+Franklin:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <DemoShell
        logo={
          <>
            Studio Renzi <span className={styles.amp}>&amp;</span> Associati
          </>
        }
        navLinks={navLinks}
        footerText="Studio Renzi & Associati — sito dimostrativo"
      >
        <section className={styles.hero}>
          <div className={styles.wrap}>
            <div className={styles.eyebrow}>Ancona · dal 1998</div>
            <h1>Consulenza legale e societaria con un approccio diretto.</h1>
            <p>
              Affianchiamo imprese e privati nelle decisioni che contano, con chiarezza su tempi,
              costi e possibili esiti fin dal primo incontro.
            </p>
            <div className={styles.heroCtas}>
              <a href="#contatti" className={styles.btn}>
                Richiedi una consulenza
              </a>
              <a href="#pratiche" className={styles.btnOutline}>
                Aree di attività
              </a>
            </div>
          </div>
        </section>

        <div className={styles.credentials}>
          <div className={styles.wrap}>
            <div className={styles.credRow}>
              <Reveal className={styles.item}>
                <b>26</b>anni di attività
              </Reveal>
              <Reveal delay={70} className={styles.item}>
                <b>3</b>professionisti iscritti all’albo
              </Reveal>
              <Reveal delay={140} className={styles.item}>
                <b>Foro di Ancona</b>iscrizione n. 0000
              </Reveal>
              <Reveal delay={210} className={styles.item}>
                <b>+400</b>pratiche seguite
              </Reveal>
            </div>
          </div>
        </div>

        <section className={styles.section} id="pratiche">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Aree di attività</div>
              <h2>Come possiamo aiutarti</h2>
            </div>
            <div className={styles.practiceList}>
              <Reveal className={styles.practice}>
                <div className={styles.num}>Pratica — Diritto Societario</div>
                <h3>Costituzione e gestione d’impresa</h3>
                <p>Costituzione società, patti parasociali, operazioni straordinarie e consulenza continuativa.</p>
              </Reveal>
              <Reveal delay={70} className={styles.practice}>
                <div className={styles.num}>Pratica — Diritto del Lavoro</div>
                <h3>Rapporti di lavoro</h3>
                <p>Contrattualistica, contenzioso, consulenza su normativa e gestione del personale.</p>
              </Reveal>
              <Reveal delay={140} className={styles.practice}>
                <div className={styles.num}>Pratica — Diritto Tributario</div>
                <h3>Fiscalità e contenzioso</h3>
                <p>Pianificazione fiscale, assistenza in accertamenti e contenzioso con l’amministrazione finanziaria.</p>
              </Reveal>
              <Reveal delay={210} className={styles.practice}>
                <div className={styles.num}>Pratica — Diritto Civile</div>
                <h3>Contratti e successioni</h3>
                <p>Redazione contrattuale, recupero crediti, successioni e diritto immobiliare.</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className={styles.section} id="studio">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Lo Studio</div>
              <h2>I professionisti</h2>
            </div>
            <div className={styles.teamList}>
              {team.map((person, i) => (
                <Reveal key={person.name} delay={i * 70} className={styles.person}>
                  <div className={styles.personInitial}>{person.name.match(/[A-Z]/g).slice(-2).join('')}</div>
                  <div>
                    <h3>{person.name}</h3>
                    <p className={styles.personRole}>{person.role}</p>
                    <p className={styles.personYears}>{person.years}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="contatti" style={{ borderBottom: 'none' }}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Contatti</div>
              <h2>Fissiamo un primo incontro</h2>
            </div>
            <div className={styles.contactBand}>
              <Reveal>
                <div className={styles.k}>
                  <a href="tel:0710000000">071 000 0000</a>
                </div>
                <div className={styles.v}>Lun–Ven, 9:00–18:00</div>
              </Reveal>
              <Reveal delay={70}>
                <div className={styles.k}>
                  <a href="mailto:info@studiorenzi.it">info@studiorenzi.it</a>
                </div>
                <div className={styles.v}>Risposta entro 24h lavorative</div>
              </Reveal>
              <Reveal delay={140}>
                <div className={styles.k}>
                  <a
                    href="https://maps.google.com/?q=Corso+Garibaldi+45,+Ancona"
                    target="_blank"
                    rel="noopener"
                  >
                    Corso Garibaldi 45 ↗
                  </a>
                </div>
                <div className={styles.v}>60121 Ancona (AN)</div>
              </Reveal>
            </div>
          </div>
        </section>
      </DemoShell>
    </div>
  );
}
