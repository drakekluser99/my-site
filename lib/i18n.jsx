'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations } from './translations';

const LanguageContext = createContext({
  lang: 'it',
  toggleLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('it');

  useEffect(() => {
    const stored = window.localStorage.getItem('site-lang');
    if (stored === 'en' || stored === 'it') setLang(stored);
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'it' ? 'en' : 'it';
      window.localStorage.setItem('site-lang', next);
      return next;
    });
  }, []);

  const t = useCallback(
    (key) => {
      const entry = translations[key];
      if (!entry) return key;
      return entry[lang] ?? entry.it;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/**
 * Renders a translated string. Many original strings contain inline markup
 * (e.g. a <span class="muted"> inside the hero subtitle, or <strong> in the
 * now.txt lines) — those are rendered via a scoped dangerouslySetInnerHTML,
 * matching exactly how the original vanilla-JS version swapped innerHTML.
 * Plain-text entries render as a normal text node (no injection risk there).
 */
export function T({ k, as: Tag = 'span', className, ...rest }) {
  const { t } = useLanguage();
  const value = t(k);
  const isPlain = !/[<>]/.test(value);
  if (isPlain) {
    return (
      <Tag className={className} {...rest}>
        {value}
      </Tag>
    );
  }
  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: value }}
      {...rest}
    />
  );
}
