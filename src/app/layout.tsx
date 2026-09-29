import type { Metadata } from "next";
import { Inter, Lato, Plus_Jakarta_Sans } from "next/font/google";
import { getTranslations } from "next-intl/server";

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

/** The professionals' landing is the site default; the other landings
 *  override it with their own. */
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("home.metadata");
  const title = t("title");
  const description = t("description");

  return {
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
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${inter.variable} ${jakarta.variable} ${lato.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
