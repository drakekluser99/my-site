import DemoShell from '../_components/DemoShell';
import Reveal from '../_components/Reveal';
import CardStudio from './CardStudio';
import CashbackCalculator from './CashbackCalculator';
import { specs, comparison, steps, faqs } from './content';
import styles from './page.module.css';

export const metadata = {
  title: 'AURA — Una carta fatta come si fanno gli oggetti',
};

const navLinks = [
  { href: '#carta', label: 'La carta' },
  { href: '#scheda', label: 'Scheda tecnica' },
  { href: '#numeri', label: 'Cashback' },
  { href: '#confronto', label: 'Confronto' },
];

const cta = { href: '#richiedi', label: 'Richiedi AURA' };

export default function BoutiquePage() {
  return (
    <div className={styles.pageRoot}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <DemoShell logo="AURA" navLinks={navLinks} cta={cta} footerText={null}>
        {/* ---------------------------------------------------------- hero */}
        <section className={styles.hero} id="carta">
          <div className={styles.heroGlow} aria-hidden="true"></div>
          <div className={`${styles.wrap} ${styles.heroInner}`}>
            <div className={styles.eyebrow}>Acciaio 316L · 18 grammi</div>
            <h1 className={styles.heroTitle}>
              Una carta fatta come <em>si fanno gli oggetti.</em>
            </h1>
            <p className={styles.heroText}>
              Non stampata: fresata, spazzolata e incisa a laser. Zero commissioni sul cambio, 3% di
              cashback accreditato subito, e un peso che si sente in tasca prima ancora di vederla.
            </p>
          </div>

          <CardStudio />
        </section>

        {/* --------------------------------------------------------- trust */}
        <div className={styles.trust}>
          <div className={`${styles.wrap} ${styles.trustRow}`}>
            <div className={styles.trustItem}>
              <span className={styles.trustNum}>0%</span>
              <span className={styles.trustLbl}>commissioni sul cambio</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustNum}>3%</span>
              <span className={styles.trustLbl}>cashback su ogni spesa</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustNum}>0 €</span>
              <span className={styles.trustLbl}>canone annuo</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustNum}>24h</span>
              <span className={styles.trustLbl}>approvazione media</span>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------- scheda tecnica */}
        <section className={styles.section} id="scheda">
          <div className={`${styles.wrap} ${styles.specLayout}`}>
            <Reveal className={styles.specIntro}>
              <div className={styles.eyebrow}>Scheda tecnica</div>
              <h2 className={styles.sectionTitle}>I numeri che di solito non ti dicono</h2>
              <p className={styles.sectionLead}>
                Le carte «premium» in metallo sono quasi sempre plastica con una placcatura sottile.
                Qui sotto c’è tutto quello che serve per verificare che questa non lo sia.
              </p>
              <div className={styles.specStamp} aria-hidden="true">
                <span>316L</span>
                <span>18 g</span>
              </div>
            </Reveal>

            <Reveal delay={90} className={styles.specTableWrap}>
              <dl className={styles.specTable}>
                {specs.map((s) => (
                  <div key={s.k} className={styles.specRow}>
                    <dt>{s.k}</dt>
                    <dd>{s.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* ------------------------------------------------------- cashback */}
        <section className={`${styles.section} ${styles.sectionPanel}`} id="numeri">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Cashback</div>
              <h2 className={styles.sectionTitle}>Quanto ti torna indietro</h2>
              <p className={styles.sectionLead}>
                Il 3% arriva sul conto il giorno dopo la spesa. Nessun punto da convertire, nessuna
                soglia da raggiungere, nessuna scadenza.
              </p>
            </div>
            <Reveal>
              <CashbackCalculator />
            </Reveal>
          </div>
        </section>

        {/* ------------------------------------------------------- confronto */}
        <section className={styles.section} id="confronto">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Confronto</div>
              <h2 className={styles.sectionTitle}>AURA e una carta qualsiasi</h2>
            </div>
            <div className={styles.compareWrap}>
              <table className={styles.compare}>
                <thead>
                  <tr>
                    <th scope="col">
                      <span className={styles.srOnly}>Caratteristica</span>
                    </th>
                    <th scope="col" className={styles.compareUs}>
                      AURA
                    </th>
                    <th scope="col">Carta tradizionale</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((r) => (
                    <tr key={r.feature}>
                      <th scope="row">{r.feature}</th>
                      <td className={styles.compareUs}>{r.aura}</td>
                      <td className={styles.compareThem}>{r.other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- come funziona */}
        <section className={`${styles.section} ${styles.sectionPanel}`}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Come funziona</div>
              <h2 className={styles.sectionTitle}>Tre passaggi, non trenta</h2>
            </div>
            <div className={styles.steps}>
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 80} className={styles.step}>
                  <div className={styles.stepNum}>{s.n}</div>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepText}>{s.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ faq */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Domande</div>
              <h2 className={styles.sectionTitle}>Quelle che ci fanno davvero</h2>
            </div>
            <div className={styles.faqGrid}>
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 70} className={styles.faq}>
                  <h3 className={styles.faqQ}>{f.q}</h3>
                  <p className={styles.faqA}>{f.a}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- cta band */}
        <section className={styles.ctaBand} id="richiedi">
          <div className={styles.ctaGlow} aria-hidden="true"></div>
          <div className={`${styles.wrap} ${styles.ctaInner}`}>
            <h2 className={styles.ctaTitle}>Pronto a sentirne il peso?</h2>
            <p className={styles.ctaText}>Nessun costo di attivazione, nessun vincolo.</p>
            <span className={styles.ctaFake}>Richiedi AURA</span>
            <p className={styles.ctaDisclaimer}>
              Il pulsante non porta da nessuna parte: AURA non esiste.
            </p>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.wrap}>
            <div className={styles.footLogo}>AURA</div>
            <p className={styles.finePrint}>
              <strong>Prodotto dimostrativo.</strong> AURA è un marchio inventato a scopo di
              portfolio: non è un istituto finanziario, non è autorizzata da alcuna autorità di
              vigilanza e non è possibile richiedere né ottenere alcuna carta. Materiali, tassi,
              commissioni, cashback e condizioni riportati in questa pagina sono interamente fittizi
              e servono solo a mostrare come sarebbero presentati in un sito reale.
            </p>
          </div>
        </footer>
      </DemoShell>
    </div>
  );
}
