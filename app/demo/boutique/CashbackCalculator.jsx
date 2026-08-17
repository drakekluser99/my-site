'use client';

import { useState } from 'react';
import styles from './page.module.css';

const RATE = 0.03;
const MIN = 200;
const MAX = 5000;

function euro(n) {
  return n.toLocaleString('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
}

export default function CashbackCalculator() {
  const [monthly, setMonthly] = useState(1200);
  const year = Math.round(monthly * 12 * RATE);
  // Position of the fill, as a % of the track.
  const pct = ((monthly - MIN) / (MAX - MIN)) * 100;

  return (
    <div className={styles.calc}>
      <div className={styles.calcHead}>
        <label htmlFor="spesa" className={styles.calcLabel}>
          Quanto spendi con la carta, al mese
        </label>
        <output htmlFor="spesa" className={styles.calcValue}>
          {euro(monthly)}
        </output>
      </div>

      <div className={styles.sliderWrap}>
        <div className={styles.sliderFill} style={{ width: `${pct}%` }} aria-hidden="true"></div>
        <input
          id="spesa"
          className={styles.slider}
          type="range"
          min={MIN}
          max={MAX}
          step={50}
          value={monthly}
          onChange={(e) => setMonthly(Number(e.target.value))}
        />
      </div>
      {/* Same formatter as the readout: a browser with a trimmed ICU build
          drops the thousands separator, and hard-coded endpoints would then
          disagree with the value above them. */}
      <div className={styles.sliderScale} aria-hidden="true">
        <span>{euro(MIN)}</span>
        <span>{euro(MAX)}</span>
      </div>

      <div className={styles.calcOut}>
        <div className={styles.calcOutMain}>
          <span className={styles.calcOutNum}>{euro(year)}</span>
          <span className={styles.calcOutLbl}>di cashback in un anno</span>
        </div>
        <div className={styles.calcOutSide}>
          <span>{euro(Math.round(monthly * RATE))}</span>
          <span className={styles.calcOutLbl}>al mese</span>
        </div>
      </div>

      <p className={styles.calcNote}>
        Calcolo illustrativo al 3% su un prodotto dimostrativo che non esiste. Serve a mostrare come
        si presenterebbe l’informazione, non a promettere un rendimento.
      </p>
    </div>
  );
}
