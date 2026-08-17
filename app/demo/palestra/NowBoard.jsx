'use client';

import { useSyncExternalStore } from 'react';
import { dayShort } from './content';
import { findNowAndNext, formatMinutes, toMinutes } from './schedule';
import styles from './page.module.css';

/**
 * The scoreboard in the hero: the visitor's own clock, what is running in the
 * room right now, and what is on next. A gym's real product is a timetable
 * you have to fit your week around, so the page opens with it rather than
 * with a stock photo of someone lifting.
 *
 * The current time is a client-only value — the server cannot know the
 * visitor's clock, and rendering a guess would hydrate mismatched. That makes
 * this a useSyncExternalStore case rather than setState-in-an-effect: the
 * snapshot is the minute bucket (a stable primitive, so React can compare it
 * between renders), and the server snapshot is null so the first paint shows
 * placeholders.
 */
const MINUTE = 60_000;

function subscribe(onChange) {
  // Polled well inside the minute so the displayed clock never lags visibly.
  const id = setInterval(onChange, 15_000);
  return () => clearInterval(id);
}

function getSnapshot() {
  return Math.floor(Date.now() / MINUTE);
}

function getServerSnapshot() {
  return null;
}

export default function NowBoard() {
  const bucket = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const now = bucket === null ? null : new Date(bucket * MINUTE);

  const info = now ? findNowAndNext(now) : null;
  const clock = now
    ? `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
    : '--:--';

  const current = info?.current ?? null;
  const next = info?.next ?? null;
  const openNow = now ? isOpen(now) : null;

  return (
    <div className={styles.board}>
      <div className={styles.boardTop}>
        <span className={styles.boardClock}>{clock}</span>
        <span className={`${styles.boardStatus} ${openNow === false ? styles.boardStatusShut : ''}`}>
          <span className={styles.boardLed} aria-hidden="true"></span>
          {openNow === null ? 'Verifico…' : openNow ? 'Aperto adesso' : 'Chiuso adesso'}
        </span>
      </div>

      <div className={styles.boardRow}>
        <span className={styles.boardKey}>In sala corsi</span>
        {current ? (
          <span className={styles.boardVal}>
            <strong>{current.name}</strong>
            <span className={styles.boardSub}>
              iniziato alle {current.start} · fino alle{' '}
              {formatMinutes(toMinutes(current.start) + current.dur)}
            </span>
          </span>
        ) : (
          <span className={styles.boardVal}>
            <strong className={styles.boardIdle}>
              {now ? 'Nessun corso in questo momento' : '—'}
            </strong>
            {now && <span className={styles.boardSub}>La sala pesi è comunque aperta</span>}
          </span>
        )}
      </div>

      <div className={styles.boardRow}>
        <span className={styles.boardKey}>Prossimo</span>
        {next ? (
          <span className={styles.boardVal}>
            <strong>{next.name}</strong>
            <span className={styles.boardSub}>
              {info.nextOffset === 0 ? 'oggi' : dayShort[info.nextDayKey].toLowerCase()} alle{' '}
              {next.start} · {next.trainer} ·{' '}
              {next.free > 0 ? `${next.free} posti liberi` : 'completo'}
            </span>
          </span>
        ) : (
          <span className={styles.boardVal}>
            <strong className={styles.boardIdle}>—</strong>
          </span>
        )}
      </div>

      <p className={styles.boardNote}>
        Orologio del tuo dispositivo. In un sito reale posti e presenze arriverebbero dal
        gestionale.
      </p>
    </div>
  );
}

/** Mon–Fri 05:30–22:30, Sat 08:00–20:00, Sun 09:00–13:00. */
function isOpen(d) {
  const m = d.getHours() * 60 + d.getMinutes();
  const day = d.getDay();
  if (day === 0) return m >= 9 * 60 && m < 13 * 60;
  if (day === 6) return m >= 8 * 60 && m < 20 * 60;
  return m >= 5 * 60 + 30 && m < 22 * 60 + 30;
}
