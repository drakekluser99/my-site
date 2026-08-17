import DemoShell from '../_components/DemoShell';
import Reveal from '../_components/Reveal';
import Counter from '../_components/Counter';
import styles from './page.module.css';

export const metadata = {
  title: 'Meridiana Immobiliare — Ancona',
};

const navLinks = [
  { href: '#annunci', label: 'Immobili' },
  { href: '#agenzia', label: "L'Agenzia" },
  { href: '#contatti', label: 'Contatti' },
];

const listings = [
  {
    badge: 'Vendita',
    price: '€ 245.000',
    loc: 'Trilocale, Centro Storico',
    meta: ['85 m²', '3 locali', '2° piano'],
    tone: 'amber',
  },
  {
    badge: 'Affitto',
    price: '€ 750 /mese',
    loc: 'Bilocale, zona Palombina',
    meta: ['60 m²', '2 locali', 'Arredato'],
    tone: 'green',
  },
  {
    badge: 'Vendita',
    price: '€ 410.000',
    loc: 'Villa indipendente, Collemarino',
    meta: ['180 m²', 'Giardino', 'Garage'],
    tone: 'amber',
  },
];

export default function ImmobiliarePage() {
  return (
    <div className={styles.pageRoot}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Petrona:ital,wght@0,400;0,500;0,600;1,500&family=Work+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <DemoShell
        logo="Meridiana"
        navLinks={navLinks}
        footerText="Meridiana Immobiliare · Ancona — sito dimostrativo"
      >
        <section className={styles.hero}>
          <div className={styles.wrap}>
            <div className={styles.eyebrow}>Ancona e provincia</div>
            <h1>Trova la casa giusta, senza sorprese lungo il percorso.</h1>
            <p>
              Selezione di immobili verificati, stime trasparenti, assistenza fino al rogito — dal
              2011 nel mercato immobiliare anconetano.
            </p>
            <div className={styles.heroCtas}>
              <a href="#annunci" className={styles.btn}>
                Vedi gli immobili
              </a>
              <a href="#contatti" className={styles.btnOutline}>
                Richiedi una stima
              </a>
            </div>
          </div>
        </section>

        <section className={styles.section} id="annunci">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <h2>In evidenza questa settimana</h2>
              <div className={styles.eyebrow}>12 immobili disponibili</div>
            </div>
            <div className={styles.listings}>
              {listings.map((l, i) => (
                <Reveal key={l.loc} delay={i * 80} className={styles.listing}>
                  <div
                    className={`${styles.listingVisual} ${l.tone === 'green' ? styles.listingVisualGreen : ''}`}
                  >
                    <span className={styles.badge}>{l.badge}</span>
                  </div>
                  <div className={styles.listingInfo}>
                    <div className={styles.price}>{l.price}</div>
                    <div className={styles.loc}>{l.loc}</div>
                    <div className={styles.meta}>
                      {l.meta.map((m) => (
                        <span key={m}>{m}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="agenzia">
          <div className={styles.wrap}>
            <div className={styles.statsRow}>
              <Reveal>
                <Counter target={14} className={styles.num} />
                <div className={styles.lbl}>Anni di attività</div>
              </Reveal>
              <Reveal delay={80}>
                <Counter target={600} suffix="+" className={styles.num} />
                <div className={styles.lbl}>Immobili venduti</div>
              </Reveal>
              <Reveal delay={160}>
                <div className={styles.num}>4.8/5</div>
                <div className={styles.lbl}>Valutazione media clienti</div>
              </Reveal>
            </div>
            <Reveal delay={220} className={styles.agent}>
              <div className={styles.agentAvatar}>SB</div>
              <div>
                <div className={styles.agentName}>Sara Bianchi</div>
                <div className={styles.agentRole}>Titolare e agente immobiliare — REA AN 000000</div>
                <a href="tel:0710000001" className={styles.agentContact}>
                  071 000 0001
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className={styles.section} id="contatti" style={{ borderBottom: 'none' }}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <h2>Parliamo del tuo immobile</h2>
            </div>
            <p className={styles.contactIntro}>
              Che tu voglia vendere, affittare o trovare casa, il primo passo è una chiacchierata
              senza impegno.
            </p>
            <div className={styles.contactRow}>
              <a href="#" className={styles.btn}>
                Contatta l’agenzia
              </a>
              <a
                href="https://maps.google.com/?q=Ancona"
                target="_blank"
                rel="noopener"
                className={styles.mapLink}
              >
                Vedi la sede in mappa ↗
              </a>
            </div>
          </div>
        </section>
      </DemoShell>
    </div>
  );
}
