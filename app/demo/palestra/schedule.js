import { dayKeys, timetable, jsDayToKey } from './content';

/** "HH:MM" -> minutes from midnight. */
export function toMinutes(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

export function formatMinutes(total) {
  const h = Math.floor(total / 60) % 24;
  const m = total % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

/**
 * What is running right now, and what is on next — walking forward from `now`
 * through at most a week so a Sunday evening still finds Monday's 07:00.
 * Returns { current, next, nextDayKey, nextOffset } with nulls when nothing
 * is scheduled at all.
 */
export function findNowAndNext(now) {
  const todayKey = jsDayToKey[now.getDay()];
  const minutes = now.getHours() * 60 + now.getMinutes();

  const current =
    (timetable[todayKey] ?? []).find((c) => {
      const s = toMinutes(c.start);
      return minutes >= s && minutes < s + c.dur;
    }) ?? null;

  for (let offset = 0; offset < 8; offset += 1) {
    const key = dayKeys[(dayKeys.indexOf(todayKey) + offset) % 7];
    const classes = timetable[key] ?? [];
    const found = classes.find((c) => offset > 0 || toMinutes(c.start) > minutes);
    if (found) return { current, next: found, nextDayKey: key, nextOffset: offset };
  }

  return { current, next: null, nextDayKey: null, nextOffset: 0 };
}
