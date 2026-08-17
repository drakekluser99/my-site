import "./globals.css";

export const metadata = {
  title: "Y.C — Sviluppatore Web | Portfolio",
  description:
    "Portfolio di Y.C: sviluppatore web da autodidatta, siti realizzati in WordPress, in formazione su HTML, CSS, JavaScript, Next.js e Vercel.",
  openGraph: {
    type: "website",
    url: "https://yuricopparini.vercel.app/",
    title: "Y.C — Sviluppatore Web",
    description:
      "Da autodidatta a sviluppatore: siti realizzati in WordPress, in formazione su HTML, CSS, JavaScript, Next.js e Vercel.",
    images: [{ url: "https://yuricopparini.vercel.app/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Y.C — Sviluppatore Web",
    description:
      "Da autodidatta a sviluppatore: siti realizzati in WordPress, in formazione su HTML, CSS, JavaScript, Next.js e Vercel.",
    images: ["https://yuricopparini.vercel.app/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yuri Copparini",
  alternateName: "Y.C",
  url: "https://yuricopparini.vercel.app/",
  jobTitle: "Junior Marketing & Communication / Web Developer in training",
  worksFor: { "@type": "Organization", name: "Blue Bee Group" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Università degli Studi di Macerata" },
  knowsAbout: ["WordPress", "HTML", "CSS", "JavaScript", "Next.js", "Vercel"],
  sameAs: [
    "https://github.com/drakekluser99",
    "https://github.com/ycopparinibluebee",
    "https://www.linkedin.com/in/yuri-copparini/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
