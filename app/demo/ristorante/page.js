import DemoShell from '../_components/DemoShell';
import Reveal from '../_components/Reveal';
import Counter from '../_components/Counter';
import MenuTabs from './MenuTabs';
import BookingForm from './BookingForm';
import styles from './page.module.css';

export const metadata = {
  title: 'Osteria Vento — Pizzeria a legna e cucina di mare, Ancona',
};

const navLinks = [
  { href: '#firme', label: 'Le firme' },
  { href: '#menu', label: 'La carta' },
  { href: '#forno', label: 'Il forno' },
  { href: '#prenota', label: 'Prenota' },
];

const cta = { href: '#prenota', label: 'Prenota' };

const marquee = [
  'impasto 48 ore',
  'forno a legna 485°',
  'pesce del Conero',
  'farine macinate a pietra',
  'olio EVO delle Marche',
  'cotta in 90 secondi',
];

const signatures = [
  {
    key: 'margherita',
    art: styles.pizzaMargherita,
    name: 'Margherita del Vento',
    line: 'San Marzano, fiordilatte di Agerola, basilico',
    price: '9',
  },
  {
    key: 'diavola',
    art: styles.pizzaDiavola,
    name: 'Diavola di Mare',
    line: '’Nduja di Spilinga, alici del Cantabrico, origano',
    price: '13',
  },
  {
    key: 'bianca',
    art: styles.pizzaBianca,
    name: 'Bianca ai Funghi',
    line: 'Porcini, provola affumicata, nocciole tostate',
    price: '14',
  },
];

const steps = [
  {
    n: '01',
    title: 'La farina',
    text: 'Grano tenero macinato a pietra da un mulino a trenta chilometri da qui. Nient’altro dentro: acqua, sale, lievito madre.',
  },
  {
    n: '02',
    title: 'L’attesa',
    text: 'Quarantotto ore di lievitazione lenta in cella, a temperatura controllata. È il tempo che rende l’impasto leggero.',
  },
  {
    n: '03',
    title: 'Il fuoco',
    text: 'Legna di faggio, cupola a 485 gradi, novanta secondi. Il cornicione si gonfia e si macchia: deve fare così.',
  },
];

const quotes = [
  {
    text: 'Il brodetto migliore che abbiamo mangiato in città, e una margherita che regge il confronto con Napoli.',
    who: 'Gambero Rosso · guida 2024',
  },
  {
    text: 'Sala piccola, servizio senza fretta, carta dei vini quasi tutta marchigiana. Si torna.',
    who: 'Il Resto del Carlino',
  },
  {
    text: 'Abbiamo festeggiato qui il nostro anniversario per il terzo anno di fila. Ci trattano come a casa loro.',
    who: 'Elena e Marco · recensione Google',
  },
];

export default function RistorantePage() {
  return (
    <div className={styles.pageRoot}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500;1,9..144,600&family=Work+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <DemoShell
        logo="Osteria Vento"
        navLinks={navLinks}
        cta={cta}
        footerText="Osteria Vento · Via del Vento 12, Ancona — sito dimostrativo"
      >
        {/* ---------------------------------------------------------- hero */}
        <section className={styles.hero}>
          <div className={styles.emberField} aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`${styles.wrap} ${styles.heroInner}`}>
            <div className={styles.heroCopy}>
              <div className={styles.eyebrow}>Ancona · dal 2012</div>
              <h1 className={styles.heroTitle}>
                Pizza a legna
                <span className={styles.heroAmp}>&amp;</span>
                <em>cucina di mare.</em>
              </h1>
              <p className={styles.heroText}>
                Quarantotto ore di lievitazione, il pesce che arriva la mattina dal porto e ottanta
                etichette marchigiane. Una sala sola, ventiquattro coperti.
              </p>
              <div className={styles.heroCtas}>
                <a href="#prenota" className={styles.btn}>
                  Prenota un tavolo
                </a>
                <a href="#menu" className={styles.btnGhost}>
                  Guarda la carta
                </a>
              </div>
              <div className={styles.heroMeta}>
                <span>Mar–Dom · 19:30–23:00</span>
                <span className={styles.dot}></span>
                <span>Via del Vento 12</span>
              </div>
            </div>

            <div className={styles.ovenStage} aria-hidden="true">
              <div className={styles.ovenGlow}></div>
              <div className={styles.oven}>
                <div className={styles.ovenMouth}>
                  <div className={styles.ovenFire}></div>
                  <div className={styles.ovenLogs}></div>
                </div>
              </div>
              <div className={styles.ovenTemp}>
                <strong>485°</strong>
                <span>cupola</span>
              </div>
              <div className={styles.ovenTime}>
                <strong>90″</strong>
                <span>di cottura</span>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------- marquee */}
        <div className={styles.marquee} aria-hidden="true">
          <div className={styles.marqueeTrack}>
            {[0, 1].map((copy) => (
              <div className={styles.marqueeGroup} key={copy}>
                {marquee.map((word) => (
                  <span key={word}>
                    {word}
                    <i>✦</i>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* -------------------------------------------------- le tre firme */}
        <section className={styles.section} id="firme">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Le tre firme</div>
              <h2>Quelle che non togliamo mai dalla carta</h2>
            </div>
            <div className={styles.signatureGrid}>
              {signatures.map((p, i) => (
                <Reveal key={p.key} delay={i * 90} className={styles.signature}>
                  <div className={styles.pizzaWrap}>
                    <div className={`${styles.pizza} ${p.art}`} aria-hidden="true"></div>
                  </div>
                  <h3 className={styles.signatureName}>{p.name}</h3>
                  <p className={styles.signatureLine}>{p.line}</p>
                  <div className={styles.signaturePrice}>€ {p.price}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- la carta */}
        <section className={`${styles.section} ${styles.sectionAlt}`} id="menu">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>La carta</div>
              <h2>Cosa si mangia stasera</h2>
            </div>
            <MenuTabs />
          </div>
        </section>

        {/* ------------------------------------------------------ il forno */}
        <section className={styles.section} id="forno">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Il forno</div>
              <h2>Tre cose, fatte con calma</h2>
            </div>
            <div className={styles.steps}>
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 90} className={styles.step}>
                  <div className={styles.stepNum}>{s.n}</div>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepText}>{s.text}</p>
                </Reveal>
              ))}
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <Counter target={48} suffix="h" className={styles.statNum} />
                <span className={styles.statLabel}>di lievitazione</span>
              </div>
              <div className={styles.stat}>
                <Counter target={485} suffix="°" className={styles.statNum} />
                <span className={styles.statLabel}>nella cupola</span>
              </div>
              <div className={styles.stat}>
                <Counter target={24} className={styles.statNum} />
                <span className={styles.statLabel}>coperti in sala</span>
              </div>
              <div className={styles.stat}>
                <Counter target={80} suffix="+" className={styles.statNum} />
                <span className={styles.statLabel}>etichette in cantina</span>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------- dicono di noi */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Dicono di noi</div>
              <h2>Passaparola</h2>
            </div>
            <div className={styles.quoteGrid}>
              {quotes.map((q, i) => (
                <Reveal key={q.who} delay={i * 90} className={styles.quote}>
                  <div className={styles.quoteMark} aria-hidden="true">
                    “
                  </div>
                  <p className={styles.quoteText}>{q.text}</p>
                  <div className={styles.quoteWho}>{q.who}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------- prenota */}
        <section className={styles.section} id="prenota">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Prenota</div>
              <h2>Vi aspettiamo</h2>
            </div>
            <div className={styles.bookGrid}>
              <Reveal>
                <BookingForm />
              </Reveal>
              <Reveal delay={110} className={styles.bookInfo}>
                <div className={styles.mapCard} aria-hidden="true">
                  <div className={styles.mapGrid}></div>
                  <div className={styles.mapRoad}></div>
                  <div className={styles.mapRoad2}></div>
                  <div className={styles.mapPin}>
                    <span></span>
                  </div>
                  <div className={styles.mapLabel}>Via del Vento 12</div>
                </div>

                <dl className={styles.infoList}>
                  <div className={styles.infoRow}>
                    <dt>Orari</dt>
                    <dd>
                      Mar–Dom, 19:30–23:00
                      <br />
                      <span className={styles.infoSub}>Lunedì chiuso · domenica anche a pranzo</span>
                    </dd>
                  </div>
                  <div className={styles.infoRow}>
                    <dt>Dove</dt>
                    <dd>
                      <a
                        href="https://maps.google.com/?q=Via+del+Vento+12,+Ancona"
                        target="_blank"
                        rel="noopener"
                        className={styles.link}
                      >
                        Via del Vento 12, Ancona ↗
                      </a>
                    </dd>
                  </div>
                  <div className={styles.infoRow}>
                    <dt>Telefono</dt>
                    <dd>
                      <a href="tel:071000000" className={styles.link}>
                        071 000 0000
                      </a>
                    </dd>
                  </div>
                  <div className={styles.infoRow}>
                    <dt>Buono a sapersi</dt>
                    <dd>
                      Impasto senza glutine su richiesta · seggioloni · dehors di otto tavoli da
                      maggio a settembre
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>
          </div>
        </section>
      </DemoShell>
    </div>
  );
}
