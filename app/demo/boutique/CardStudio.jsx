'use client';

import { useState } from 'react';
import { finishes, callouts } from './content';
import styles from './page.module.css';

/**
 * The hero card, plus the finish switcher. Every fintech landing page in
 * existence renders a floating gradient rectangle; the point of difference
 * here is that the card is treated as a manufactured object — brushed metal,
 * a milled edge, laser etching — annotated with leader lines like a spec
 * drawing. The callouts are decorative annotation of the visual, so they are
 * hidden from assistive tech and repeated as real text below on small
 * screens, where the leader lines have nowhere to go.
 */
export default function CardStudio() {
  const [finishId, setFinishId] = useState(finishes[0].id);
  const finish = finishes.find((f) => f.id === finishId) ?? finishes[0];

  return (
    <div className={styles.studio}>
      <div className={styles.stage}>
        <div className={`${styles.cardWrap} ${styles[`finish_${finish.id}`]}`}>
          <div className={styles.card}>
            <div className={styles.cardGrain} aria-hidden="true"></div>
            <div className={styles.cardSheen} aria-hidden="true"></div>
            <div className={styles.cardBrand}>AURA</div>
            <div className={styles.cardChip} aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={styles.cardWave} aria-hidden="true"></div>
            <div className={styles.cardFoot}>
              <span className={styles.cardName}>Y. COPPARINI</span>
              <span className={styles.cardFinish}>{finish.full.toUpperCase()}</span>
            </div>
          </div>
          <div className={styles.cardShadow} aria-hidden="true"></div>
        </div>

        <div className={styles.callouts} aria-hidden="true">
          {callouts.map((c) => (
            <div
              key={c.id}
              className={`${styles.callout} ${c.side === 'left' ? styles.calloutLeft : styles.calloutRight}`}
              style={{ left: `${c.x}%`, top: `${c.y}%` }}
            >
              <span className={styles.calloutLine}></span>
              <span className={styles.calloutBody}>
                <strong>{c.title}</strong>
                {c.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.switcher}>
        <div className={styles.switcherRow} role="radiogroup" aria-label="Finitura della carta">
          {finishes.map((f) => (
            <button
              key={f.id}
              type="button"
              role="radio"
              aria-checked={f.id === finishId}
              className={`${styles.swatch} ${styles[`swatch_${f.id}`]} ${f.id === finishId ? styles.swatchOn : ''}`}
              onClick={() => setFinishId(f.id)}
            >
              <span className={styles.swatchDisc} aria-hidden="true"></span>
              {f.label}
            </button>
          ))}
        </div>
        <dl className={styles.switcherSpec}>
          <div>
            <dt>Materiale</dt>
            <dd>{finish.material}</dd>
          </div>
          <div>
            <dt>Peso</dt>
            <dd>{finish.weight} g</dd>
          </div>
        </dl>
        <p className={styles.switcherNote}>{finish.note}</p>
      </div>

      {/* Same information as the leader lines, for small screens and readers. */}
      <ul className={styles.calloutList}>
        {callouts.map((c) => (
          <li key={c.id}>
            <strong>{c.title}</strong> — {c.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
