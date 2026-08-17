import DemoShell from '../_components/DemoShell';
import Reveal from '../_components/Reveal';
import Counter from '../_components/Counter';
import styles from './page.module.css';

export const metadata = {
  title: 'Forma Athletic Club — Ancona',
};

const navLinks = [
  { href: '#corsi', label: 'Corsi' },
  { href: '#numeri', label: 'Il Club' },
  { href: '#iscriviti', label: 'Iscriviti' },
];

const schedule = [
  { corso: 'Functional HIIT', giorno: 'Lun · Mer · Ven', orario: '18:30' },
  { corso: 'Pesistica Olimpica', giorno: 'Mar · Gio', orario: '19:00' },
  { corso: 'Mobility & Stretching', giorno: 'Tutti i giorni', orario: '07:00' },
  { corso: 'Boxe Fitness', giorno: 'Mar · Gio · Sab', orario: '20:00' },
];

export default function PalestraPage() {
  return (
    <div className={styles.pageRoot}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Anton&family=Barlow:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <DemoShell
        logo={
          <>
            FORMA<span className={styles.dot}>.</span>CLUB
          </>
        }
        navLinks={navLinks}
        footerText="Forma Athletic Club · Ancona — sito dimostrativo"
      >
        <section className={styles.hero}>
          <div className={styles.wrap}>
            <div className={styles.eyebrow}>Ancona · zona Baraccola</div>
            <h1>
              Allena il tuo <span className={styles.hl}>limite.</span>
            </h1>
            <p>
              Sala pesi, functional training, corsi collettivi. Un ambiente serio per chi vuole
              risultati veri, non solo un abbonamento.
            </p>
            <div className={styles.heroCtas}>
              <a href="#iscriviti" className={styles.btn}>
                Prova gratuita
              </a>
              <a href="#corsi" className={styles.btnOutline}>
                Vedi i corsi
              </a>
            </div>
          </div>
        </section>

        <div className={styles.scoreboard} id="numeri">
          <div className={styles.wrap}>
            <div className={styles.scoreRow}>
              <div>
                <Counter target={450} suffix="+" className={styles.num} />
                <div className={styles.lbl}>Iscritti attivi</div>
              </div>
              <div>
                <Counter target={18} className={styles.num} />
                <div className={styles.lbl}>Corsi a settimana</div>
              </div>
              <div>
                <Counter target={6} className={styles.num} />
                <div className={styles.lbl}>Personal trainer</div>
              </div>
              <div>
                <div className={styles.num}>05:30</div>
                <div className={styles.lbl}>Apertura mattutina</div>
              </div>
            </div>
          </div>
        </div>

        <section className={styles.section} id="corsi">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Questa settimana</div>
              <h2>Orario corsi</h2>
            </div>
            <table className={styles.schedule}>
              <thead>
                <tr>
                  <th>Corso</th>
                  <th>Giorno</th>
                  <th>Orario</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, i) => (
                  <Reveal key={row.corso} as="tr" delay={i * 60}>
                    <td>{row.corso}</td>
                    <td>{row.giorno}</td>
                    <td className={styles.time}>{row.orario}</td>
                  </Reveal>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section} id="prezzi" style={{ borderBottom: 'none' }}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Abbonamenti</div>
              <h2>Scegli il tuo piano</h2>
            </div>
            <div className={styles.plans}>
              <Reveal className={styles.plan}>
                <div className={styles.planName}>Base</div>
                <div className={styles.planPrice}>
                  € 35<span>/mese</span>
                </div>
                <div className={styles.planDesc}>Sala pesi e cardio, accesso full-time</div>
              </Reveal>
              <Reveal delay={80} className={`${styles.plan} ${styles.planFeatured}`}>
                <div className={styles.planBadge}>Più scelto</div>
                <div className={styles.planName}>Corsi</div>
                <div className={styles.planPrice}>
                  € 49<span>/mese</span>
                </div>
                <div className={styles.planDesc}>Sala pesi + tutti i corsi collettivi</div>
              </Reveal>
              <Reveal delay={160} className={styles.plan}>
                <div className={styles.planName}>Personal</div>
                <div className={styles.planPrice}>
                  € 89<span>/mese</span>
                </div>
                <div className={styles.planDesc}>Tutto incluso + 2 sedute PT al mese</div>
              </Reveal>
            </div>
          </div>
        </section>

        <div className={styles.ctaBand} id="iscriviti">
          <div className={styles.wrap}>
            <h2>Prima settimana gratis</h2>
            <p style={{ marginBottom: '24px' }}>
              Vieni a provare la sala e un corso a scelta, senza impegno.
            </p>
            <a href="#" className={styles.btn}>
              Prenota la prova
            </a>
          </div>
        </div>
      </DemoShell>
    </div>
  );
}
