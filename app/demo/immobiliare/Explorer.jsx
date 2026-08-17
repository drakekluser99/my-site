'use client';

import { useMemo, useState } from 'react';
import { listings, zones, zoneById } from './content';
import FloorPlan from './FloorPlan';
import styles from './page.module.css';

const TIPI = [
  { id: 'tutti', label: 'Tutti' },
  { id: 'vendita', label: 'Vendita' },
  { id: 'affitto', label: 'Affitto' },
];

function euro(n) {
  return n.toLocaleString('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
}

export default function Explorer() {
  const [tipo, setTipo] = useState('tutti');
  const [zona, setZona] = useState('tutte');
  const [sort, setSort] = useState('recenti');

  const results = useMemo(() => {
    const filtered = listings.filter(
      (l) => (tipo === 'tutti' || l.tipo === tipo) && (zona === 'tutte' || l.zona === zona)
    );
    // Sale and rent prices are not comparable, so sorting by price only makes
    // sense within one of the two — the control says so when it cannot.
    const sorted = [...filtered];
    if (sort === 'prezzo-asc') sorted.sort((a, b) => a.price - b.price);
    if (sort === 'prezzo-desc') sorted.sort((a, b) => b.price - a.price);
    if (sort === 'mq') sorted.sort((a, b) => b.mq - a.mq);
    return sorted;
  }, [tipo, zona, sort]);

  const mixed = tipo === 'tutti' && sort.startsWith('prezzo');

  return (
    <div>
      <div className={styles.filters}>
        <div className={styles.filterGroup} role="radiogroup" aria-label="Tipo di annuncio">
          {TIPI.map((t) => (
            <button
              key={t.id}
              type="button"
              role="radio"
              aria-checked={t.id === tipo}
              className={`${styles.pill} ${t.id === tipo ? styles.pillOn : ''}`}
              onClick={() => setTipo(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className={styles.filterSelects}>
          <label className={styles.selectWrap}>
            <span className={styles.selectLbl}>Zona</span>
            <select className={styles.select} value={zona} onChange={(e) => setZona(e.target.value)}>
              <option value="tutte">Tutte le zone</option>
              {zones.map((z) => (
                <option key={z.id} value={z.id}>
                  {z.name}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.selectWrap}>
            <span className={styles.selectLbl}>Ordina</span>
            <select className={styles.select} value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="recenti">Più recenti</option>
              <option value="prezzo-asc">Prezzo crescente</option>
              <option value="prezzo-desc">Prezzo decrescente</option>
              <option value="mq">Metratura</option>
            </select>
          </label>
        </div>
      </div>

      <div className={styles.resultBar}>
        <span>
          <strong>{results.length}</strong>{' '}
          {results.length === 1 ? 'immobile trovato' : 'immobili trovati'}
        </span>
        {mixed && (
          <span className={styles.resultWarn}>
            Vendite e affitti ordinati insieme: i prezzi non sono confrontabili.
          </span>
        )}
      </div>

      {results.length === 0 ? (
        <p className={styles.empty}>
          Nessun immobile con questi filtri. Chiamaci: metà di quello che trattiamo non arriva mai
          sul sito.
        </p>
      ) : (
        <div className={styles.grid}>
          {results.map((l) => {
            const z = zoneById[l.zona];
            return (
              <article key={l.id} className={styles.card}>
                <div className={styles.cardPlan}>
                  <FloorPlan variant={l.plan} />
                  <span className={`${styles.tag} ${l.tipo === 'affitto' ? styles.tagRent : ''}`}>
                    {l.tipo}
                  </span>
                  <span className={styles.energy} title={`Classe energetica ${l.classe}`}>
                    {l.classe}
                  </span>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardPrice}>
                    {euro(l.price)}
                    {l.tipo === 'affitto' && <span className={styles.perMonth}>/mese</span>}
                  </div>
                  <h3 className={styles.cardTitle}>{l.titolo}</h3>
                  <div className={styles.cardWhere}>
                    {l.via} · {z.name}
                  </div>

                  <dl className={styles.cardSpecs}>
                    <div>
                      <dt>Superficie</dt>
                      <dd>{l.mq} m²</dd>
                    </div>
                    <div>
                      <dt>Locali</dt>
                      <dd>{l.locali}</dd>
                    </div>
                    <div>
                      <dt>Piano</dt>
                      <dd>{l.piano}</dd>
                    </div>
                    {l.tipo === 'vendita' && (
                      <div>
                        <dt>Al m²</dt>
                        <dd>{euro(Math.round(l.price / l.mq))}</dd>
                      </div>
                    )}
                  </dl>

                  <p className={styles.cardNote}>{l.note}</p>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
