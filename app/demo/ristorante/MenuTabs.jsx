'use client';

import { useState } from 'react';
import { menuCategories } from './menu';
import styles from './page.module.css';

/**
 * Category switcher for the carta. The tabs are the one interactive moment in
 * the menu section — everything else on the page is static, so this stays a
 * small client island rather than pushing the whole page client-side.
 */
export default function MenuTabs() {
  const [active, setActive] = useState(menuCategories[0].id);
  const current = menuCategories.find((c) => c.id === active) ?? menuCategories[0];

  return (
    <div className={styles.menuBlock}>
      <div className={styles.tabs} role="tablist" aria-label="Categorie del menu">
        {menuCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            id={`tab-${cat.id}`}
            aria-selected={cat.id === active}
            aria-controls={`panel-${cat.id}`}
            className={`${styles.tab} ${cat.id === active ? styles.tabActive : ''}`}
            onClick={() => setActive(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        className={styles.menuPanel}
        key={current.id}
      >
        <p className={styles.menuNote}>{current.note}</p>
        <ul className={styles.menuList}>
          {current.items.map((item) => (
            <li key={item.name} className={styles.menuItem}>
              <div className={styles.menuRow}>
                <span className={styles.name}>{item.name}</span>
                <span className={styles.leader} aria-hidden="true"></span>
                <span className={styles.price}>€ {item.price}</span>
              </div>
              <p className={styles.desc}>
                {item.desc}
                {item.tags.map((tag) => (
                  <span key={tag} className={`${styles.tag} ${styles[`tag_${tag.replace(/\s/g, '')}`] ?? ''}`}>
                    {tag}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
