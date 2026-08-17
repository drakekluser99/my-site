'use client';

import { useState } from 'react';
import { zones, zoneById, conditions } from './content';
import styles from './page.module.css';

function euro(n) {
  return n.toLocaleString('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
}

/**
 * Indicative valuation: zone €/m² × surface × condition, shown as a range
 * rather than a single number. A single number would look like a promise,
 * and no honest estimate from three inputs is that precise — the copy says
 * as much, and says a survey is what actually settles it.
 */
export default function Valuation() {
  const [zona, setZona] = useState('centro');
  const [mq, setMq] = useState(90);
  const [stato, setStato] = useState('buono');

  const z = zoneById[zona];
  const k = conditions.find((c) => c.id === stato)?.k ?? 1;
  const base = z.eur * mq * k;
  const low = Math.round((base * 0.92) / 1000) * 1000;
  const high = Math.round((base * 1.08) / 1000) * 1000;

  return (
    <div className={styles.valCard}>
      <div className={styles.valFields}>
        <label className={styles.valField}>
          <span className={styles.valLbl}>Zona</span>
          <select className={styles.select} value={zona} onChange={(e) => setZona(e.target.value)}>
            {zones.map((o) => (
              <option key={o.id} value={o.id}>
                {o.name}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.valField}>
          <span className={styles.valLbl}>Superficie</span>
          <div className={styles.mqWrap}>
            <input
              className={styles.select}
              type="number"
              min={20}
              max={500}
              step={5}
              value={mq}
              onChange={(e) => setMq(Math.max(20, Math.min(500, Number(e.target.value) || 20)))}
            />
            <span className={styles.mqUnit}>m²</span>
          </div>
        </label>

        <label className={styles.valField}>
          <span className={styles.valLbl}>Stato</span>
          <select className={styles.select} value={stato} onChange={(e) => setStato(e.target.value)}>
            {conditions.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.valOut}>
        <span className={styles.valOutLbl}>Forbice indicativa</span>
        <div className={styles.valRange}>
          <span>{euro(low)}</span>
          <span className={styles.valDash} aria-hidden="true"></span>
          <span>{euro(high)}</span>
        </div>
        <div className={styles.valBase}>
          Base di zona: {euro(z.eur)}/m² · tempo medio di vendita {z.days} giorni
        </div>
      </div>

      <p className={styles.valNote}>
        Stima automatica da tre soli dati, su valori di mercato inventati per questo prototipo. Non
        tiene conto di esposizione, piano, stato dell’edificio o vincoli: quelli si vedono solo con
        un sopralluogo, che è gratuito.
      </p>
    </div>
  );
}
