/** All landing-page copy, kept in one place so it can be edited without
 *  touching layout. Strings mirror the approved ProteSì mockup. */

import { appLoginHref, appSignupHref } from "@/lib/app-links";

/* Every signup and login entry point on the professionals' landing opens the
   app (see app-links.ts); the other two landings do the same with their own
   account type. */
export const signupHref = appSignupHref("private");
export const loginHref = appLoginHref;

/* PLACEHOLDERS — pages that don't exist yet. They point at `#` so nothing 404s. */
export const contactHref = "#";
export const privacyHref = "#";
/** The sibling audience landings. */
export const produttoriHref = "/produttori";
export const rivenditoriHref = "/rivenditori";

/** Legal entity behind ProteSì, shown in every page's footer. */
export const company = {
  name: "Nolides Srl",
  vat: "04129580124",
  address: "Via Ernesto Cairoli, 5, Varese",
} as const;

/** Audience switcher in the header; SiteHeader marks the current one. */
export const nav = [
  { label: "Per i professionisti", href: "/" },
  { label: "Per i produttori", href: produttoriHref },
  { label: "Per i rivenditori", href: rivenditoriHref },
] as const;

/** Queries cycled through the hero search field. */
export const heroQueries = [
  "collare cervicale per cervicalgia",
  "tutore per ginocchio dopo LCA",
  "tutore per piede equino",
  "corsetto iperestensore per il tronco",
  "06.03.09.095",
] as const;

/** Milliseconds each hero query stays on screen. */
export const heroQueryInterval = 2600;

export const districts = [
  { label: "Cervicale", className: "bg-sky" },
  { label: "Arti superiori", className: "bg-lavender-deep" },
  { label: "Arti inferiori", className: "bg-peach" },
  { label: "Tronco", className: "bg-lavender-deep" },
  { label: "Piede", className: "bg-sky" },
] as const;

export const features = [
  {
    title: "Ricerca ibrida",
    body: "Nome dell'ausilio, patologia da trattare o frase in linguaggio naturale: la ricerca combina testo e significato, così non devi conoscere la nomenclatura per trovare il prodotto.",
  },
  {
    title: "Distretti corporei",
    body: "Parti dal corpo del paziente: seleziona il distretto e le sottocategorie per restringere il catalogo agli ausili che stai valutando davvero.",
  },
  {
    title: "Catalogo multi-azienda",
    body: "Prodotti di produttori diversi confrontabili nella stessa lista, con foto, classificazione ISO e codice quando disponibile.",
  },
] as const;

export const documentHighlights = [
  { title: "Selezione multipla", body: "Più ausili in un unico consiglio" },
  { title: "Codice prescrittivo", body: "Nomenclatore, dove disponibile" },
  { title: "Preferiti", body: "I prodotti che consigli più spesso" },
  { title: "Scheda completa", body: "Produttore, ISO, distretto, indicazioni" },
] as const;

export const clinicianBenefits = [
  "Nessun codice da ricordare: scrivi la patologia",
  "Documento pronto in un tap, PDF o email",
  "Nomenclatore ISO sempre a portata di mano",
] as const;

export const storeBadges = ["App Store — iOS", "Google Play — Android"] as const;

/** "Quello che oggi fai in tre posti, in uno solo." — ProteSì against the two
 *  tools it replaces. */
export const comparison = {
  protesi: {
    title: "ProteSì",
    points: [
      "Ricerca per patologia, nome o codice, in linguaggio naturale",
      "Cataloghi di più produttori confrontabili nella stessa lista",
      "Codice ISO e riconducibilità SSN accanto a ogni prodotto",
      "Documento di consiglio per il paziente in un tap",
      "Gratis, su iOS, Android e browser",
    ],
  },
  alternatives: [
    {
      title: "Nomenclatore e PDF",
      points: [
        "Solo codici e descrizioni generiche",
        "Nessun prodotto reale né foto",
        "Nessuna ricerca per patologia",
        "Il consiglio al paziente resta a mano",
      ],
    },
    {
      title: "Cataloghi dei produttori",
      points: [
        "Un'azienda alla volta, nessun confronto",
        "Devi già sapere quale marchio cercare",
        "Codici ISO spesso assenti",
        "Niente da consegnare al paziente",
      ],
    },
  ],
} as const;

export const faqs = [
  {
    q: "ProteSì è gratuito per i professionisti?",
    a: "Sì. Ricerca, preferiti e documento di consiglio sono gratuiti su iOS, Android e browser. Il servizio è sostenuto dalle aziende che pubblicano il catalogo.",
  },
  {
    q: "Il documento generato vale come prescrizione?",
    a: "No. È un consiglio informativo per il paziente con prodotto, produttore, classificazione ISO e codice quando presente. La prescrizione resta sui canali previsti dal SSN.",
  },
  {
    q: "Quali prodotti trovo nel catalogo?",
    a: "Ortesi e ausili delle aziende partner, con foto, scheda tecnica, distretto e patologie compatibili. Il nomenclatore ISO è consultabile per intero anche per i codici senza prodotto associato.",
  },
  {
    q: "Devo conoscere i codici del nomenclatore?",
    a: "No. Puoi scrivere la patologia o il nome comune dell'ausilio: la ricerca combina testo e significato e ti mostra il codice accanto al prodotto.",
  },
  {
    q: "I dati dei miei pazienti vengono salvati?",
    a: "Nel documento inserisci solo i dati minimi che decidi tu, come il comune per indicare le officine vicine. Non chiediamo né conserviamo dati clinici del paziente.",
  },
] as const;
