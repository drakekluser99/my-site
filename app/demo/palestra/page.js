import DemoShell from '../_components/DemoShell';
import Reveal from '../_components/Reveal';
import NowBoard from './NowBoard';
import Timetable from './Timetable';
import Plans from './Plans';
import { disciplines, trainers, facts } from './content';
import styles from './page.module.css';

export const metadata = {
  title: 'Forma Athletic Club — Palestra e corsi ad Ancona',
};

const navLinks = [
  { href: '#orario', label: 'Orario' },
  { href: '#corsi', label: 'Corsi' },
  { href: '#prezzi', label: 'Prezzi' },
  { href: '#team', label: 'Il team' },
];

const cta = { href: '#prova', label: 'Prova gratis' };

export default function PalestraPage() {
  return (
    <div className={styles.pageRoot}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;800;900&family=Barlow+Condensed:wght@500;600;700&display=swap"
        rel="stylesheet"
      />
      <DemoShell
        logo={
          <>
            FORMA<span className={styles.dot}>.</span>CLUB
          </>
        }
        navLinks={navLinks}
        cta={cta}
        footerText="Forma Athletic Club · Via della Baraccola 8, Ancona — sito dimostrativo"
      >
        {/* ---------------------------------------------------------- hero */}
        <section className={styles.hero}>
          <div className={`${styles.wrap} ${styles.heroInner}`}>
            <div className={styles.heroCopy}>
              <div className={styles.eyebrow}>Ancona · zona Baraccola</div>
              <h1 className={styles.heroTitle}>
                Diciotto corsi
                <br />
                a settimana.
                <br />
                <span className={styles.hl}>Trovane uno</span>
                <br />
                che ti torna.
              </h1>
              <p className={styles.heroText}>
                Mille e cento metri quadri, sedici posti al massimo per corso e apertura alle 5:30.
                Nessuna quota di iscrizione, nessun vincolo di durata.
              </p>
              <div className={styles.heroCtas}>
                <a href="#prova" className={styles.btn}>
                  Prima settimana gratis
                </a>
                <a href="#orario" className={styles.btnOutline}>
                  Guarda l’orario
                </a>
              </div>
            </div>

            <NowBoard />
          </div>
        </section>

        {/* --------------------------------------------------------- facts */}
        <div className={styles.facts}>
          <div className={`${styles.wrap} ${styles.factsRow}`}>
            {facts.map((f) => (
              <div key={f.k} className={styles.fact}>
                <span className={styles.factNum}>{f.k}</span>
                <span className={styles.factLbl}>{f.v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* -------------------------------------------------------- orario */}
        <section className={styles.section} id="orario">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Orario</div>
              <h2 className={styles.sectionTitle}>La settimana, per intero</h2>
              <p className={styles.sectionLead}>
                Non un estratto: tutti i corsi di tutti i giorni, con chi li tiene e quanti posti
                restano.
              </p>
            </div>
            <Timetable />
          </div>
        </section>

        {/* --------------------------------------------------------- corsi */}
        <section className={`${styles.section} ${styles.sectionInk}`} id="corsi">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Corsi</div>
              <h2 className={styles.sectionTitle}>Sei discipline, un solo abbonamento</h2>
            </div>
            <div className={styles.discGrid}>
              {disciplines.map((d, i) => (
                <Reveal key={d.name} delay={i * 60} className={styles.disc}>
                  <div className={styles.discTop}>
                    <h3 className={styles.discName}>{d.name}</h3>
                    <span className={styles.discDur}>{d.dur}</span>
                  </div>
                  <p className={styles.discText}>{d.text}</p>
                  <div className={styles.discInt}>
                    <span className={styles.discIntLbl}>Intensità</span>
                    <span className={styles.ttBars} aria-label={`Intensità ${d.intensity} su 5`}>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <span
                          key={n}
                          className={n <= d.intensity ? styles.intSegOn : styles.intSeg}
                        ></span>
                      ))}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- prezzi */}
        <section className={styles.section} id="prezzi">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Prezzi</div>
              <h2 className={styles.sectionTitle}>Tre piani, nessuna sorpresa</h2>
            </div>
            <Plans />
          </div>
        </section>

        {/* ----------------------------------------------------------- team */}
        <section className={`${styles.section} ${styles.sectionSoft}`} id="team">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Il team</div>
              <h2 className={styles.sectionTitle}>Chi ti segue davvero</h2>
              <p className={styles.sectionLead}>
                Quattro tecnici, tutti con un titolo verificabile. In sala c’è sempre qualcuno.
              </p>
            </div>
            <div className={styles.teamGrid}>
              {trainers.map((t, i) => (
                <Reveal key={t.name} delay={i * 60} className={styles.trainer}>
                  <div className={styles.trainerBadge} aria-hidden="true">
                    {t.initials}
                  </div>
                  <h3 className={styles.trainerName}>{t.name}</h3>
                  <p className={styles.trainerRole}>{t.role}</p>
                  <p className={styles.trainerCert}>{t.cert}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- prova */}
        <section className={styles.ctaBand} id="prova">
          <div className={`${styles.wrap} ${styles.ctaInner}`}>
            <div>
              <h2 className={styles.ctaTitle}>Prima settimana gratis</h2>
              <p className={styles.ctaText}>
                Sala, corsi e una chiacchierata con un tecnico. Senza carta di credito e senza
                qualcuno che ti richiama per tre mesi.
              </p>
            </div>
            <div className={styles.ctaSide}>
              <a href="tel:0710000000" className={styles.btnDark}>
                071 000 0000
              </a>
              <span className={styles.ctaSub}>
                Oppure passa e basta: Via della Baraccola 8, Ancona
              </span>
            </div>
          </div>
        </section>
      </DemoShell>
    </div>
  );
}
