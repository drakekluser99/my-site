'use client';

import { useState } from 'react';
import { plans } from './content';
import styles from './page.module.css';

export default function Plans() {
  const [yearly, setYearly] = useState(false);

  return (
    <div>
      <div className={styles.billing}>
        <button
          type="button"
          className={`${styles.billBtn} ${!yearly ? styles.billBtnOn : ''}`}
          aria-pressed={!yearly}
          onClick={() => setYearly(false)}
        >
          Mensile
        </button>
        <button
          type="button"
          className={`${styles.billBtn} ${yearly ? styles.billBtnOn : ''}`}
          aria-pressed={yearly}
          onClick={() => setYearly(true)}
        >
          Annuale
          {/* The three plans save 17.1% / 16.3% / 15.7%, so a flat "−16%"
              would overstate the Personal plan. "Up to" is the true claim. */}
          <span className={styles.billSave}>fino a −17%</span>
        </button>
      </div>

      <div className={styles.plans}>
        {plans.map((p) => (
          <div key={p.id} className={`${styles.plan} ${p.featured ? styles.planOn : ''}`}>
            {p.featured && <div className={styles.planBadge}>Il più scelto</div>}
            <div className={styles.planName}>{p.name}</div>
            <div className={styles.planPrice}>
              <span className={styles.planNum}>€ {yearly ? p.yearly : p.monthly}</span>
              <span className={styles.planPer}>/mese</span>
            </div>
            <div className={styles.planBilled}>
              {yearly ? 'con addebito annuale' : 'senza vincolo di durata'}
            </div>
            <p className={styles.planDesc}>{p.desc}</p>
            <ul className={styles.planList}>
              {p.includes.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className={styles.plansNote}>
        Nessuna quota di iscrizione. Prima settimana di prova gratuita per tutti i piani.
      </p>
    </div>
  );
}
