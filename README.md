# Portfolio — Y.C

Sito personale statico (HTML/CSS/JS puri, un unico file `index.html`, immagini del logo incluse come base64 — nessuna dipendenza esterna da gestire).

## Struttura

```
portfolio-site/
├── index.html   ← tutto il sito
└── README.md
```

## 1. Metterlo su GitHub

Apri il terminale dentro la cartella `portfolio-site` e lancia, in ordine:

```bash
git init
git add .
git commit -m "Prima versione del sito"
```

Poi crea un nuovo repository vuoto su GitHub (senza README, senza .gitignore — lo hai già qui):
👉 https://github.com/new

Dagli un nome, ad esempio `portfolio` o `sito-personale`, poi collega il repo locale a quello remoto e pusha (GitHub ti mostra questi comandi anche nella pagina appena creata, con il tuo username al posto di `ycopparinibluebee`):

```bash
git branch -M main
git remote add origin https://github.com/ycopparinibluebee/portfolio.git
git push -u origin main
```

Da questo momento il codice è online su GitHub.

## 2. Collegarlo a Vercel

1. Vai su https://vercel.com/new
2. Fai login con il tuo account GitHub (stesso account, `ycopparinibluebee`)
3. Vercel ti mostra la lista dei tuoi repo — seleziona quello appena creato
4. Non serve configurare nulla (è un sito statico): lascia le impostazioni di default e clicca **Deploy**
5. Dopo circa 30 secondi ottieni un link pubblico tipo `portfolio-xxxx.vercel.app`

Da qui in poi, ogni volta che fai `git push` su `main`, Vercel rifà automaticamente il deploy con le modifiche.

## 3. Dominio personalizzato (opzionale, in seguito)

Da Vercel → progetto → Settings → Domains puoi collegare un dominio tuo (es. `yuricopparini.it`) quando vorrai comprarne uno.

## Prossimi passi consigliati

- Aggiungere un vero screenshot/preview dei tre progetti (Blue Bee Group, Easy Training, Master Generation) al posto delle sole descrizioni testuali
- Man mano che ottieni le certificazioni (HTML, CSS, JavaScript, Next.js, Vercel), aggiornare la sezione `stack.txt` spostando le voci da "in arrivo" ad "attuale"
- Quando ti senti pronto, valutare la migrazione da HTML statico a un progetto Next.js vero e proprio — a quel punto il deploy su Vercel resta identico
