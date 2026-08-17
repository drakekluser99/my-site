# Portfolio — Y.C (versione React / Next.js)

Conversione completa del portfolio da HTML statico a un vero progetto **Next.js 16** (App Router, JavaScript), con:

- Tutte le sezioni del sito principale trasformate in componenti React
- Sistema di traduzione IT/EN tramite React Context (invece dello swap di `innerHTML`)
- CSS Modules per ogni pagina (nessuna collisione di stile tra le 7 pagine diverse)
- Tutta la logica interattiva riscritta in hook React (`useState`, `useEffect`, `useRef`):
  cursore custom, pioggia Matrix, terminale interattivo, menu mobile, accordion, toggle lingua
- I 6 prototipi per i clienti come route separate (`/demo/ristorante`, `/demo/boutique`, ecc.)

## Come avviarlo in locale

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Come pubblicarlo

```bash
npm run build
```

Poi collega il repository a Vercel come faresti con qualsiasi altro progetto Next.js — Vercel riconosce automaticamente Next.js e configura tutto da solo (a differenza del sito statico, qui non serve più caricare `index.html` a mano: basta un `git push`).

## Struttura del progetto

```
app/
  layout.js              ← layout radice: metadata, JSON-LD, favicon
  page.js                ← sito principale (tutte le sezioni)
  page.module.css         ← stili del sito principale
  globals.css             ← reset CSS condiviso da tutta l'app
  icon.png                 ← favicon (Next.js la rileva automaticamente)
  demo/
    ristorante/page.js + page.module.css
    studio-professionale/page.js + page.module.css
    boutique/page.js + page.module.css       ← AURA (fintech)
    palestra/page.js + page.module.css
    immobiliare/page.js + page.module.css
    freelance/page.js + page.module.css       ← Marta Ferri (client component)
lib/
  i18n.jsx                 ← Context per la lingua IT/EN
  translations.js          ← dizionario delle 100 stringhe tradotte
public/
  og-image.png              ← immagine anteprima social
```

## Note tecniche

- **Font**: caricati via `<link>` a Google Fonts (come nella versione HTML originale), non tramite `next/font/google` — scelta fatta per restare più vicini al comportamento del sito originale ed evitare una dipendenza dal fetch in fase di build.
- **Immagini**: il logo, la foto e gli screenshot dei progetti restano incorporati come base64 direttamente nel codice (stessa scelta della versione statica) — un possibile prossimo passo, quando vorrai ottimizzare le performance, è spostarli in `public/` e usare `next/image`.
- **Client vs Server Components**: la home page (`app/page.js`) è quasi interamente un Client Component, perché il sistema di traduzione è usato in modo pervasivo in tutta la pagina. È una scelta pragmatica — in un progetto più maturo si potrebbe suddividere ulteriormente per lasciare più contenuto come Server Component.
