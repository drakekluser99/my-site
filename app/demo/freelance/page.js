import DemoShell from '../_components/DemoShell';
import Reveal from '../_components/Reveal';
import Rewrites from './Rewrites';
import ToneSwitcher from './ToneSwitcher';
import { steps, services, quotes } from './content';
import styles from './page.module.css';

export const metadata = {
  title: 'Marta Ferri — Copywriter freelance, Ancona',
};

const navLinks = [
  { href: '#lavori', label: 'Prima / dopo' },
  { href: '#voce', label: 'Tono di voce' },
  { href: '#come', label: 'Come lavoro' },
  { href: '#tariffe', label: 'Tariffe' },
];

const cta = { href: '#contatti', label: 'Scrivimi' };

export default function FreelancePage() {
  return (
    <div className={styles.pageRoot}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <DemoShell
        logo={
          <>
            marta<span className={styles.dot}>.</span>ferri
          </>
        }
        navLinks={navLinks}
        cta={cta}
        footerText="marta.ferri, copywriter · Ancona — sito dimostrativo"
      >
        {/* ---------------------------------------------------------- hero */}
        <section className={styles.hero}>
          <div className={`${styles.wrap} ${styles.heroInner}`}>
            <div className={styles.eyebrow}>Copywriter freelance · Ancona</div>
            <h1 className={styles.heroTitle}>
              Scrivo testi che <mark className={styles.mark}>si capiscono al primo colpo.</mark>
            </h1>
            <p className={styles.heroText}>
              Aiuto piccole imprese e professionisti a dire quello che fanno senza giri di parole.
              Qui sotto non trovi un elenco di aggettivi: trovi <em>i testi prima e dopo</em> che
              ci ho messo le mani.
            </p>
            <div className={styles.heroCtas}>
              <a href="#lavori" className={styles.btn}>
                Guarda i prima / dopo
              </a>
              <a href="#contatti" className={styles.btnOutline}>
                Scrivimi
              </a>
            </div>

            <div className={styles.heroMeta}>
              <span>Nove anni di mestiere</span>
              <span className={styles.sep} aria-hidden="true"></span>
              <span>Oltre 120 progetti</span>
              <span className={styles.sep} aria-hidden="true"></span>
              <span>Risposta entro 48 ore</span>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------- settori */}
        <div className={styles.trust}>
          <div className={styles.wrap}>
            <p className={styles.trustLbl}>Ho scritto per attività in questi settori</p>
            <div className={styles.trustRow}>
              <span>Formazione</span>
              <span>Artigianato</span>
              <span>Consulenza</span>
              <span>Retail</span>
              <span>Ospitalità</span>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------- lavori */}
        <section className={styles.section} id="lavori">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Il lavoro</div>
              <h2 className={styles.sectionTitle}>Prima e dopo, senza ritocchi</h2>
              <p className={styles.sectionLead}>
                Tre testi veri, con il permesso di chi li ha commissionati. A sinistra quello che
                c’era, a destra quello che c’è adesso.
              </p>
            </div>
            <Rewrites />
          </div>
        </section>

        {/* --------------------------------------------------------- voce */}
        <section className={`${styles.section} ${styles.sectionSoft}`} id="voce">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Tono di voce</div>
              <h2 className={styles.sectionTitle}>La stessa cosa, detta in tre modi</h2>
              <p className={styles.sectionLead}>
                «Ma poi ci farà sembrare quelli che non siamo?» È la domanda che mi fanno tutti.
                Ecco la risposta, su un caso solo.
              </p>
            </div>
            <ToneSwitcher />
          </div>
        </section>

        {/* --------------------------------------------------------- come */}
        <section className={styles.section} id="come">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Come lavoro</div>
              <h2 className={styles.sectionTitle}>Cinque passaggi, nessuna sorpresa</h2>
            </div>
            <ol className={styles.steps}>
              {steps.map((s, i) => (
                <Reveal key={s.n} as="li" delay={i * 60} className={styles.step}>
                  <div className={styles.stepNum}>{s.n}</div>
                  <div>
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <p className={styles.stepText}>{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ------------------------------------------------------ tariffe */}
        <section className={`${styles.section} ${styles.sectionSoft}`} id="tariffe">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Tariffe</div>
              <h2 className={styles.sectionTitle}>Quanto costa, detto prima</h2>
              <p className={styles.sectionLead}>
                Punti di partenza, non listini. Dopo la prima chiacchierata ti mando un preventivo
                con una cifra sola, e quella resta.
              </p>
            </div>
            <div className={styles.services}>
              {services.map((s, i) => (
                <Reveal key={s.name} delay={i * 70} className={styles.service}>
                  <div className={styles.serviceTop}>
                    <h3 className={styles.serviceName}>{s.name}</h3>
                    <div className={styles.servicePrice}>{s.price}</div>
                  </div>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                  <div className={styles.serviceTime}>Tempi indicativi: {s.time}</div>
                  <ul className={styles.serviceList}>
                    {s.includes.map((i2) => (
                      <li key={i2}>{i2}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------- quotes */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.quotes}>
              {quotes.map((q, i) => (
                <Reveal key={q.who} delay={i * 80} className={styles.quote}>
                  <p className={styles.quoteText}>{q.text}</p>
                  <div className={styles.quoteWho}>{q.who}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ contatti */}
        <section className={styles.contact} id="contatti">
          <div className={`${styles.wrap} ${styles.contactInner}`}>
            <div>
              <h2 className={styles.contactTitle}>Raccontami cosa devi dire</h2>
              <p className={styles.contactText}>
                Due righe sull’attività e cosa ti serve. Ti rispondo entro quarantotto ore, e se il
                lavoro non fa per me te lo dico subito — di solito con il nome di qualcuno che lo fa
                meglio.
              </p>
            </div>
            <div className={styles.contactSide}>
              <a href="mailto:marta@martaferri.it" className={styles.btn}>
                marta@martaferri.it
              </a>
              <span className={styles.contactSub}>
                Oppure 071 000 0002, dal lunedì al venerdì
              </span>
            </div>
          </div>
        </section>
      </DemoShell>
    </div>
  );
}
