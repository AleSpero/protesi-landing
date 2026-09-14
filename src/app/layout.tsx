import type { Metadata } from "next";
import { Inter, Lato, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

/* Only the footer credit uses Lato (the author's brand font), so load one
   weight and skip the preload — it must not compete with the page fonts. */
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: "700",
  preload: false,
});

const title = "ProteSì — Scrivi la patologia, ottieni l'ausilio giusto";
const description =
  "La ricerca semantica di ProteSì attraversa i cataloghi di più aziende e ti restituisce prodotti, codici nomenclatore e il documento di consiglio da dare al paziente.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "it_IT",
    type: "website",
    siteName: "ProteSì",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${inter.variable} ${jakarta.variable} ${lato.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
