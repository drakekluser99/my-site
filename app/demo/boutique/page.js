import DemoShell from '../_components/DemoShell';
import Reveal from '../_components/Reveal';
import styles from './page.module.css';

export const metadata = {
  title: 'AURA — La carta che non passa inosservata',
};

const navLinks = [
  { href: '#carta', label: 'La carta' },
  { href: '#vantaggi', label: 'Vantaggi' },
  { href: '#come-funziona', label: 'Come funziona' },
];

const cta = { href: '#richiedi', label: 'Richiedi la carta' };

export default function BoutiquePage() {
  return (
    <div className={styles.pageRoot}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <DemoShell logo="AURA" navLinks={navLinks} cta={cta} footerText={null}>
        <section className={styles.hero} id="carta">
          <div className={styles.heroGlow}></div>
          <div className={`${styles.wrap} ${styles.heroInner}`}>
            <div className={styles.eyebrow}>Metallo, non plastica</div>
            <h1>
              La carta che <span className={styles.grad}>non passa inosservata.</span>
            </h1>
            <p>
              Nessuna commissione nascosta, cashback reale, un pezzo di metallo da 18 grammi che si
              sente in tasca prima ancora di vederlo.
            </p>
            <div className={styles.heroCtas}>
              <a href="#richiedi" className={styles.glassBtn}>
                Richiedi AURA
              </a>
              <a href="#vantaggi" className={`${styles.glassBtn} ${styles.glassBtnGhost}`}>
                Scopri i vantaggi
              </a>
            </div>
          </div>
          <div className={styles.cardStage}>
            <div className={styles.cardShadow}></div>
            <div className={styles.cardVisual}>
              <div className={styles.cardChip}></div>
              <div className={styles.cardBrand}>AURA</div>
              <div className={styles.cardNumber}>•••• •••• •••• 4471</div>
              <div className={styles.cardName}>Y. Copparini</div>
            </div>
          </div>
        </section>

        <div className={styles.trust}>
          <div className={styles.wrap}>
            <div className={styles.trustRow}>
              <div>
                <div className={styles.num}>0%</div>
                <div className={styles.lbl}>Commissioni estero</div>
              </div>
              <div>
                <div className={styles.num}>3%</div>
                <div className={styles.lbl}>Cashback su ogni spesa</div>
              </div>
              <div>
                <div className={styles.num}>18g</div>
                <div className={styles.lbl}>Metallo pieno, non placcato</div>
              </div>
              <div>
                <div className={styles.num}>24h</div>
                <div className={styles.lbl}>Approvazione media</div>
              </div>
            </div>
          </div>
        </div>

        <section className={styles.section} id="vantaggi">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Vantaggi</div>
              <h2>Pensata per chi non vuole compromessi</h2>
              <p>
                Ogni dettaglio della carta AURA è stato ripensato: dal materiale ai vantaggi, senza
                le trappole delle carte tradizionali.
              </p>
            </div>
            <div className={styles.featureGrid}>
              <Reveal className={styles.featureCard}>
                <div className={styles.ico}></div>
                <h3>Cashback reale</h3>
                <p>3% su ogni acquisto, accreditato subito — nessun punto da convertire, nessuna scadenza.</p>
              </Reveal>
              <Reveal delay={80} className={styles.featureCard}>
                <div className={styles.ico} style={{ background: 'linear-gradient(135deg,var(--violet),var(--pink))' }}></div>
                <h3>Zero commissioni estero</h3>
                <p>Paghi in qualsiasi valuta al tasso reale, senza sovrapprezzi nascosti in fattura.</p>
              </Reveal>
              <Reveal delay={160} className={styles.featureCard}>
                <div className={styles.ico} style={{ background: 'linear-gradient(135deg,var(--pink),var(--ice))' }}></div>
                <h3>Assicurazione viaggio</h3>
                <p>Copertura medica e bagaglio inclusa su ogni viaggio pagato con la carta.</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className={styles.section} id="come-funziona" style={{ borderBottom: 'none' }}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Come funziona</div>
              <h2>Tre passaggi, non trenta</h2>
            </div>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.n}></div>
                <div>
                  <h3>Richiedi online</h3>
                  <p>Due minuti, nessuna filiale, nessuna coda.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.n}></div>
                <div>
                  <h3>Verifica istantanea</h3>
                  <p>Approvazione in media entro 24 ore lavorative.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.n}></div>
                <div>
                  <h3>La carta arriva a casa</h3>
                  <p>Spedizione tracciata, pronta all’uso in pochi giorni.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaBand} id="richiedi">
          <div className={styles.heroGlow} style={{ top: '-260px' }}></div>
          <div className={styles.wrap} style={{ position: 'relative', zIndex: 1 }}>
            <h2>Pronto a sentirne il peso?</h2>
            <p>Nessun costo di attivazione. Nessun vincolo.</p>
            <a href="#" className={styles.glassBtn}>
              Richiedi AURA ora
            </a>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.wrap}>
            <div className={`${styles.logo} ${styles.manrope}`} style={{ fontWeight: 800, textAlign: 'center' }}>
              AURA
            </div>
            <p className={styles.finePrint}>
              AURA è un prodotto dimostrativo creato a scopo di portfolio — non è un istituto
              finanziario reale e non è possibile richiedere alcuna carta. Eventuali riferimenti a
              tassi, commissioni o condizioni sono puramente illustrativi.
            </p>
          </div>
        </footer>
      </DemoShell>
    </div>
  );
}
