'use client';

import { useState } from 'react';
import { tones } from './content';
import styles from './page.module.css';

/**
 * One brief, three registers. Range is the thing a client cannot judge from a
 * list of services, and it is exactly what they are nervous about — "will she
 * make us sound like us?". Showing the same shop described three ways answers
 * that faster than a paragraph claiming versatility.
 */
export default function ToneSwitcher() {
  const [active, setActive] = useState('diretto');
  const tone = tones.find((t) => t.id === active) ?? tones[1];

  return (
    <div className={styles.tone}>
      <div className={styles.toneBrief}>
        <span className={styles.toneBriefLbl}>Il brief</span>
        Pasticceria di famiglia, aperta nel 1958. Una riga per l’apertura del sito.
      </div>

      <div className={styles.toneTabs} role="tablist" aria-label="Registro">
        {tones.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`tone-tab-${t.id}`}
            aria-selected={t.id === active}
            aria-controls={`tone-panel-${t.id}`}
            className={`${styles.toneTab} ${t.id === active ? styles.toneTabOn : ''}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`tone-panel-${tone.id}`}
        aria-labelledby={`tone-tab-${tone.id}`}
        className={styles.tonePanel}
        key={tone.id}
      >
        <p className={styles.toneText}>{tone.text}</p>
        <p className={styles.toneNote}>{tone.note}</p>
      </div>
    </div>
  );
}
