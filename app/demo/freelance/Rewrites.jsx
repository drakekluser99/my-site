'use client';

import { useState } from 'react';
import { rewrites } from './content';
import styles from './page.module.css';

/**
 * The centrepiece: real before/after rewrites. A copywriter's site is judged
 * on its own copy, and nothing argues the case like showing the client's
 * original next to the version that replaced it — no other trade can copy
 * this section without doing the work first.
 *
 * Both columns stay on screen together rather than hiding behind a toggle:
 * the comparison *is* the argument, so making the reader hold one half in
 * memory would weaken it. The tabs switch which piece of work is shown.
 */
export default function Rewrites() {
  const [active, setActive] = useState(rewrites[0].id);
  const item = rewrites.find((r) => r.id === active) ?? rewrites[0];

  return (
    <div className={styles.rw}>
      <div className={styles.rwTabs} role="tablist" aria-label="Esempi di riscrittura">
        {rewrites.map((r) => (
          <button
            key={r.id}
            type="button"
            role="tab"
            id={`rw-tab-${r.id}`}
            aria-selected={r.id === active}
            aria-controls={`rw-panel-${r.id}`}
            className={`${styles.rwTab} ${r.id === active ? styles.rwTabOn : ''}`}
            onClick={() => setActive(r.id)}
          >
            {r.tab}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`rw-panel-${item.id}`}
        aria-labelledby={`rw-tab-${item.id}`}
        className={styles.rwPanel}
        key={item.id}
      >
        <div className={styles.rwClient}>{item.client}</div>

        <div className={styles.rwCols}>
          <div className={styles.rwBefore}>
            <div className={styles.rwLabel}>Prima</div>
            <p className={styles.rwTextBefore}>{item.before}</p>
            <div className={styles.rwCount}>{countWords(item.before)} parole</div>
          </div>

          <div className={styles.rwArrow} aria-hidden="true"></div>

          <div className={styles.rwAfter}>
            <div className={`${styles.rwLabel} ${styles.rwLabelAfter}`}>Dopo</div>
            <p className={styles.rwTextAfter}>{item.after}</p>
            <div className={styles.rwCount}>{countWords(item.after)} parole</div>
          </div>
        </div>

        <div className={styles.rwChanges}>
          <div className={styles.rwChangesLbl}>Cosa è cambiato</div>
          <ul>
            {item.changes.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function countWords(s) {
  return s.trim().split(/\s+/).length;
}
