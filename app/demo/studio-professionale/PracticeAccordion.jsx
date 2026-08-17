'use client';

import { useState } from 'react';
import { practices } from './content';
import styles from './page.module.css';

/**
 * The practice areas read as an index of a legal brief: numbered rows that
 * open to reveal what the firm actually does in that area. One row open at a
 * time — a client scanning for "do they handle my problem" wants the list
 * back, not four expanded panels to scroll past.
 */
export default function PracticeAccordion() {
  const [openId, setOpenId] = useState(practices[0].id);

  return (
    <div className={styles.index}>
      {practices.map((p) => {
        const open = p.id === openId;
        return (
          <div key={p.id} className={`${styles.indexRow} ${open ? styles.indexRowOpen : ''}`}>
            <h3 className={styles.indexHeading}>
              <button
                type="button"
                className={styles.indexTrigger}
                aria-expanded={open}
                aria-controls={`practice-${p.id}`}
                id={`trigger-${p.id}`}
                onClick={() => setOpenId(open ? null : p.id)}
              >
                <span className={styles.indexRef}>{p.ref}</span>
                <span className={styles.indexTitles}>
                  <span className={styles.indexArea}>{p.area}</span>
                  <span className={styles.indexName}>{p.title}</span>
                </span>
                <span className={styles.indexSign} aria-hidden="true"></span>
              </button>
            </h3>
            <div
              id={`practice-${p.id}`}
              role="region"
              aria-labelledby={`trigger-${p.id}`}
              className={styles.indexPanel}
              hidden={!open}
            >
              <p className={styles.indexLead}>{p.lead}</p>
              <ul className={styles.indexList}>
                {p.services.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
