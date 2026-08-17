'use client';

import { useState } from 'react';
import styles from './DemoShell.module.css';

/**
 * Shared chrome for the 6 client demo prototypes: sticky header, nav with a
 * working mobile menu (none of the 6 had one before this), footer, and the
 * fixed "Prototipo dimostrativo" badge. Visual identity (colors, fonts) stays
 * local to each page via CSS custom properties on its own .pageRoot — this
 * component only reads the shared contract: --accent, --bg-panel, --line,
 * --muted, --text.
 */
export default function DemoShell({ logo, navLinks, cta, footerText, children }) {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrap}>
          <div className={styles.logo}>{logo}</div>
          <nav className={styles.navlinks} aria-label="Principale">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          {cta && (
            <a href={cta.href} className={styles.cta}>
              {cta.label}
            </a>
          )}
          <button
            type="button"
            className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
            aria-label={open ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={open}
            aria-controls="demo-mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <nav
          id="demo-mobile-nav"
          className={`${styles.mobileNav} ${open ? styles.mobileNavOpen : ''}`}
          aria-label="Menu mobile"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          {cta && (
            <a href={cta.href} className={styles.ctaMobile} onClick={closeMenu}>
              {cta.label}
            </a>
          )}
        </nav>
      </header>

      {children}

      {footerText && <footer className={styles.footer}>{footerText}</footer>}
      <div className={styles.demoBadge}>Prototipo dimostrativo — Y.C</div>
    </>
  );
}
