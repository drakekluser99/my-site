'use client';

import { useEffect, useRef } from 'react';
import DemoShell from '../_components/DemoShell';
import Reveal from '../_components/Reveal';
import styles from './page.module.css';

const navLinks = [
  { href: '#servizi', label: 'Servizi' },
  { href: '#processo', label: 'Come lavoro' },
  { href: '#contatti', label: 'Contatti' },
];

const cta = { href: '#contatti', label: 'Scrivimi' };

export default function FreelancePage() {
  const rootRef = useRef(null);
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const START_HUE = 260;
    const END_HUE = 20;

    function onScroll() {
      const root = rootRef.current;
      const section = sectionRef.current;
      const list = listRef.current;
      if (!root || !section || !list) return;

      const items = Array.from(list.children);
      const viewportCenter = window.innerHeight / 2;
      let closest = null;
      let closestDist = Infinity;

      items.forEach((li) => {
        const rect = li.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const dist = Math.abs(itemCenter - viewportCenter);
        li.classList.toggle(styles.active, dist < rect.height * 1.4);
        if (dist < closestDist) {
          closestDist = dist;
          closest = li;
        }
      });

      // safety net: always keep at least the nearest item visible
      if (closest && !items.some((li) => li.classList.contains(styles.active))) {
        closest.classList.add(styles.active);
      }

      // drive the hue across the section's full scroll range (viewport-enter to viewport-exit)
      const secRect = section.getBoundingClientRect();
      const totalRange = secRect.height + window.innerHeight;
      const scrolled = window.innerHeight - secRect.top;
      const progress = Math.min(1, Math.max(0, scrolled / totalRange));
      const hue = START_HUE + (END_HUE - START_HUE) * progress;

      // scoped to this page's own wrapper, not the global document root —
      // keeps the effect self-contained now that this lives inside a
      // multi-page app instead of a single standalone HTML file.
      root.style.setProperty('--hue', hue.toFixed(1));
      root.style.setProperty('--chroma', (0.02 + progress * 0.16).toFixed(3));
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={rootRef} className={styles.pageRoot}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap"
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
        footerText="marta.ferri, copywriter — sito dimostrativo"
      >
        <section className={styles.hero}>
          <div className={styles.heroGlow}></div>
          <div className={`${styles.wrap} ${styles.heroInner}`}>
            <div className={styles.eyebrow}>Copywriter freelance</div>
            <h1>
              Scrivo testi che <span className={styles.grad}>fanno capire, non solo leggere.</span>
            </h1>
            <p>
              Aiuto piccole aziende e professionisti a raccontarsi in modo chiaro — siti, cataloghi,
              comunicazioni: parole che lavorano davvero.
            </p>
            <div className={styles.heroCtas}>
              <a href="#contatti" className={styles.btn}>
                Parliamo del tuo progetto
              </a>
              <a href="#servizi" className={styles.btnOutline}>
                Vedi i servizi
              </a>
            </div>
          </div>
        </section>

        <div className={styles.trust}>
          <div className={styles.wrap}>
            <p>Ho scritto per aziende in questi settori</p>
            <div className={styles.trustLogos}>
              <span>Formazione</span>
              <span>Artigianato</span>
              <span>Consulenza</span>
              <span>Retail</span>
            </div>
          </div>
        </div>

        <section className={styles.echoSection} id="processo" ref={sectionRef}>
          <div className={styles.wrap}>
            <ul className={styles.echoList} ref={listRef}>
              <li>ascolto il brief.</li>
              <li>studio chi lo leggerà.</li>
              <li>scrivo la prima bozza.</li>
              <li>affino ogni frase.</li>
              <li>consegno testi pronti.</li>
            </ul>
          </div>
        </section>

        <section className={styles.section} id="servizi">
          <div className={styles.sectionHead}>
            <div className={styles.eyebrow}>Come posso aiutarti</div>
            <h2>Servizi e tariffe indicative</h2>
          </div>
          <div className={styles.wrap}>
            <div className={styles.services}>
              <Reveal className={styles.service}>
                <div>
                  <div className={styles.name}>Testi per sito web</div>
                  <div className={styles.desc}>
                    Homepage, chi siamo, pagine servizi — copy pensato per convertire.
                  </div>
                </div>
                <div className={styles.price}>da € 350</div>
              </Reveal>
              <Reveal delay={70} className={styles.service}>
                <div>
                  <div className={styles.name}>Newsletter & email</div>
                  <div className={styles.desc}>
                    Sequenze email o newsletter periodica, tono coerente col brand.
                  </div>
                </div>
                <div className={styles.price}>da € 180</div>
              </Reveal>
              <Reveal delay={140} className={styles.service}>
                <div>
                  <div className={styles.name}>Revisione testi esistenti</div>
                  <div className={styles.desc}>
                    Editing e riscrittura di contenuti già presenti sul tuo sito.
                  </div>
                </div>
                <div className={styles.price}>da € 120</div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <Reveal className={styles.quoteBlock}>
              <p>
                &ldquo;Ha trasformato una pagina di servizi confusa in qualcosa che finalmente i
                clienti capiscono al primo sguardo.&rdquo;
              </p>
              <div className={styles.who}>— Titolare, studio di consulenza (Ancona)</div>
            </Reveal>
          </div>
        </section>

        <section className={styles.section} id="contatti" style={{ borderBottom: 'none' }}>
          <div className={styles.wrap}>
            <div className={styles.contactRow}>
              <div>
                <div className={styles.k}>Scriviamoci</div>
                <div className={styles.v}>Risposta entro 48h</div>
              </div>
              <a href="mailto:marta@martaferri.it" className={styles.btn}>
                marta@martaferri.it
              </a>
            </div>
          </div>
        </section>
      </DemoShell>
    </div>
  );
}
