'use client';

import { useState } from 'react';
import { matterTypes } from './content';
import styles from './page.module.css';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className={`${styles.formCard} ${styles.formSent}`}>
        <div className={styles.sentRef}>Rif. pratica — in attesa di protocollo</div>
        <h3 className={styles.sentTitle}>Richiesta registrata</h3>
        <p className={styles.sentText}>
          Ti ricontattiamo entro 24 ore lavorative per fissare il primo incontro. Se la questione è
          urgente, chiamaci allo 071 000 0000.
        </p>
        <p className={styles.sentNote}>
          (Questo è un prototipo dimostrativo: nessun dato è stato trasmesso né conservato.)
        </p>
        <button type="button" className={styles.linkBtn} onClick={() => setSent(false)}>
          Compila una nuova richiesta
        </button>
      </div>
    );
  }

  return (
    <form className={styles.formCard} onSubmit={handleSubmit}>
      <div className={styles.formHead}>
        <span className={styles.formRef}>Modulo 01</span>
        <span>Richiesta di primo incontro</span>
      </div>

      <div className={styles.fieldRow}>
        <label className={styles.field}>
          <span className={styles.label}>Nome e cognome</span>
          <input className={styles.input} type="text" name="nome" required />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Società (facoltativo)</span>
          <input className={styles.input} type="text" name="societa" />
        </label>
      </div>

      <div className={styles.fieldRow}>
        <label className={styles.field}>
          <span className={styles.label}>Email</span>
          <input className={styles.input} type="email" name="email" required />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Telefono</span>
          <input className={styles.input} type="tel" name="tel" required />
        </label>
      </div>

      <label className={styles.field}>
        <span className={styles.label}>Materia</span>
        <select className={styles.input} name="materia" defaultValue={matterTypes[0]}>
          {matterTypes.map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span className={styles.label}>In breve, di cosa si tratta</span>
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          name="messaggio"
          rows={4}
          placeholder="Poche righe bastano: al primo incontro approfondiamo."
        />
      </label>

      <button type="submit" className={styles.btn}>
        Invia la richiesta
      </button>
      <p className={styles.formFoot}>
        Il primo incontro è gratuito e senza impegno. Quanto ci scrivi è coperto dal segreto
        professionale.
      </p>
    </form>
  );
}
