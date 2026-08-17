'use client';

import { useState } from 'react';
import styles from './page.module.css';

const partySizes = [2, 3, 4, 5, 6, '7+'];
const slots = ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30'];
// Prototype only: a real build would read availability from the booking system,
// so a couple of slots are hard-coded as full to show the sold-out state.
const fullSlots = ['20:00', '20:30'];

export default function BookingForm() {
  const [party, setParty] = useState(2);
  const [slot, setSlot] = useState('19:30');
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className={styles.formCard}>
        <div className={styles.sentMark} aria-hidden="true">
          ✓
        </div>
        <h3 className={styles.sentTitle}>Richiesta ricevuta</h3>
        <p className={styles.sentText}>
          Tavolo per {party} alle {slot}. Ti richiamiamo entro un’ora per confermare.
        </p>
        <p className={styles.sentNote}>
          (Questo è un prototipo: nessun dato è stato inviato da nessuna parte.)
        </p>
        <button type="button" className={styles.ghostBtn} onClick={() => setSent(false)}>
          Compila di nuovo
        </button>
      </div>
    );
  }

  return (
    <form className={styles.formCard} onSubmit={handleSubmit}>
      <fieldset className={styles.field}>
        <legend className={styles.label}>Quanti siete</legend>
        <div className={styles.chips}>
          {partySizes.map((n) => (
            <button
              key={n}
              type="button"
              className={`${styles.chip} ${n === party ? styles.chipOn : ''}`}
              aria-pressed={n === party}
              onClick={() => setParty(n)}
            >
              {n}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className={styles.field}>
        <legend className={styles.label}>A che ora</legend>
        <div className={styles.chips}>
          {slots.map((s) => {
            const full = fullSlots.includes(s);
            return (
              <button
                key={s}
                type="button"
                disabled={full}
                className={`${styles.chip} ${s === slot ? styles.chipOn : ''} ${full ? styles.chipFull : ''}`}
                aria-pressed={s === slot}
                title={full ? 'Completo' : undefined}
                onClick={() => setSlot(s)}
              >
                {s}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className={styles.fieldRow}>
        <label className={styles.field}>
          <span className={styles.label}>Nome</span>
          <input className={styles.input} type="text" name="nome" placeholder="Il tuo nome" required />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Telefono</span>
          <input className={styles.input} type="tel" name="tel" placeholder="071 000 0000" required />
        </label>
      </div>

      <label className={styles.field}>
        <span className={styles.label}>Allergie o richieste</span>
        <input
          className={styles.input}
          type="text"
          name="note"
          placeholder="Senza glutine, seggiolone, tavolo tranquillo…"
        />
      </label>

      <button type="submit" className={styles.submitBtn}>
        Richiedi il tavolo
      </button>
      <p className={styles.formFoot}>
        Ti confermiamo per telefono. Per gruppi oltre 8 persone chiamaci direttamente.
      </p>
    </form>
  );
}
