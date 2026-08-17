import DemoShell from '../_components/DemoShell';
import Reveal from '../_components/Reveal';
import styles from './page.module.css';

export const metadata = {
  title: 'Osteria Vento — Cucina di stagione, Ancona',
};

const navLinks = [
  { href: '#menu', label: 'Menu' },
  { href: '#storia', label: 'La Storia' },
  { href: '#prenota', label: 'Prenota' },
];

export default function RistorantePage() {
  return (
    <div className={styles.pageRoot}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Piazzolla:ital,wght@0,400;0,600;1,500;1,600&family=Work+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <DemoShell logo="Osteria Vento" navLinks={navLinks} footerText="Osteria Vento · Ancona — sito dimostrativo">
        <section className={styles.hero}>
          <div className={styles.wrap}>
            <div className={styles.eyebrow}>Ancona · dal 2019</div>
            <h1>Cucina di stagione, con radici marchigiane.</h1>
            <p>
              Ingredienti locali, ricette semplici, una carta che cambia con le stagioni. Un tavolo
              caldo in centro città.
            </p>
            <div className={styles.divider}></div>
            <a href="#prenota" className={styles.btn}>
              Prenota un tavolo
            </a>
          </div>
        </section>

        <section className={styles.section} id="menu">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Stagione autunno</div>
              <h2>Qualche piatto dalla carta</h2>
            </div>
            <div className={styles.menuList}>
              <Reveal>
                <div className={styles.menuItem}>
                  <span className={styles.name}>Tagliatelle al tartufo</span>
                  <span className={styles.leader}></span>
                  <span className={styles.price}>€ 16</span>
                </div>
                <div className={styles.menuItem}>
                  <span className={styles.desc}>
                    Pasta fresca, tartufo nero delle Marche, burro e parmigiano 24 mesi
                  </span>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div className={styles.menuItem}>
                  <span className={styles.name}>Coniglio in porchetta</span>
                  <span className={styles.leader}></span>
                  <span className={styles.price}>€ 19</span>
                </div>
                <div className={styles.menuItem}>
                  <span className={styles.desc}>Ricetta della tradizione, patate al rosmarino</span>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className={styles.menuItem}>
                  <span className={styles.name}>Crema catalana alla lavanda</span>
                  <span className={styles.leader}></span>
                  <span className={styles.price}>€ 8</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className={styles.section} id="storia">
          <div className={styles.wrap}>
            <div className={styles.story}>
              <Reveal className={styles.storyVisual}>
                <div className={styles.frame}></div>
                <span className={styles.cap}>— dalla cucina, ogni sera</span>
              </Reveal>
              <Reveal delay={100}>
                <div className={styles.storyEyebrow}>La nostra storia</div>
                <h2 className={styles.storyTitle}>Una cucina di famiglia, aperta a tutti.</h2>
                <p>
                  Osteria Vento nasce dalla voglia di portare in tavola i sapori di casa, con
                  materie prime scelte ogni mattina al mercato. Poche portate, cambiate spesso,
                  fatte bene.
                </p>
                <p>Sala raccolta, cantina curata, servizio senza fretta.</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className={styles.section} id="prenota" style={{ borderBottom: 'none' }}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Informazioni</div>
              <h2>Vi aspettiamo</h2>
            </div>
            <div className={styles.infoGrid}>
              <Reveal>
                <div className={styles.k}>Orari</div>
                <div className={styles.v}>Mar–Dom, 19:30–23:00</div>
              </Reveal>
              <Reveal delay={80}>
                <div className={styles.k}>Dove</div>
                <div className={styles.v}>
                  <a
                    href="https://maps.google.com/?q=Via+del+Vento+12,+Ancona"
                    target="_blank"
                    rel="noopener"
                    className={styles.mapLink}
                  >
                    Via del Vento 12, Ancona ↗
                  </a>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className={styles.k}>Prenotazioni</div>
                <div className={styles.v}>
                  <a href="tel:071000000" className={styles.mapLink}>
                    071 000 0000
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </DemoShell>
    </div>
  );
}
