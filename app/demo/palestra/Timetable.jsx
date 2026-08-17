'use client';

import { useState } from 'react';
import { dayKeys, dayLabels, dayShort, timetable, jsDayToKey } from './content';
import { formatMinutes, toMinutes } from './schedule';
import styles from './page.module.css';

/**
 * The weekly timetable, with booking. This is the gym-native interaction —
 * far more use to a visitor than another contact form — so it is where the
 * page spends its interactivity budget.
 *
 * The initial day is fixed (Monday) rather than "today": picking today on the
 * server would need a timezone the server does not have, and would hydrate
 * mismatched. A small effect-free "vai a oggi" button covers the real need.
 */
export default function Timetable() {
  const [day, setDay] = useState('lun');
  const [booked, setBooked] = useState({});

  const classes = timetable[day] ?? [];

  function goToday() {
    setDay(jsDayToKey[new Date().getDay()]);
  }

  function toggle(id) {
    setBooked((b) => ({ ...b, [id]: !b[id] }));
  }

  return (
    <div className={styles.tt}>
      <div className={styles.ttBar}>
        <div className={styles.ttDays} role="tablist" aria-label="Giorno della settimana">
          {dayKeys.map((k) => (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={k === day}
              aria-controls="tt-panel"
              className={`${styles.ttDay} ${k === day ? styles.ttDayOn : ''}`}
              onClick={() => setDay(k)}
            >
              <span className={styles.ttDayShort}>{dayShort[k]}</span>
              <span className={styles.ttDayCount}>{(timetable[k] ?? []).length}</span>
            </button>
          ))}
        </div>
        <button type="button" className={styles.ttToday} onClick={goToday}>
          Vai a oggi
        </button>
      </div>

      <div id="tt-panel" role="tabpanel" className={styles.ttPanel} key={day}>
        <h3 className={styles.ttDayTitle}>
          {dayLabels[day]}
          <span>
            {classes.length} {classes.length === 1 ? 'corso' : 'corsi'}
          </span>
        </h3>

        <ul className={styles.ttList}>
          {classes.map((c) => {
            const id = `${day}-${c.start}`;
            const isBooked = !!booked[id];
            const full = c.free === 0 && !isBooked;
            return (
              <li key={id} className={`${styles.ttItem} ${full ? styles.ttItemFull : ''}`}>
                <div className={styles.ttTime}>
                  <strong>{c.start}</strong>
                  <span>{formatMinutes(toMinutes(c.start) + c.dur)}</span>
                </div>

                <div className={styles.ttMain}>
                  <h4 className={styles.ttName}>{c.name}</h4>
                  <div className={styles.ttMeta}>
                    {c.trainer} · {c.dur} min · max {c.cap} posti
                  </div>
                  <div className={styles.ttIntensity}>
                    <span className={styles.ttIntensityLbl}>Intensità</span>
                    <span className={styles.ttBars} aria-label={`Intensità ${c.intensity} su 5`}>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <span
                          key={n}
                          className={n <= c.intensity ? styles.intSegOn : styles.intSeg}
                        ></span>
                      ))}
                    </span>
                  </div>
                </div>

                <div className={styles.ttAction}>
                  <span className={styles.ttFree}>
                    {full ? 'Completo' : `${isBooked ? c.free - 1 : c.free} posti`}
                  </span>
                  <button
                    type="button"
                    disabled={full}
                    className={`${styles.ttBook} ${isBooked ? styles.ttBookOn : ''}`}
                    onClick={() => toggle(id)}
                  >
                    {isBooked ? 'Prenotato ✓' : 'Prenota'}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        <p className={styles.ttNote}>
          Prototipo: la prenotazione resta su questa pagina e sparisce se la ricarichi.
        </p>
      </div>
    </div>
  );
}
