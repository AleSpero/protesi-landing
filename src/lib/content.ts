/** All landing-page copy, kept in one place so it can be edited without
 *  touching layout. Strings mirror the approved ProteSì mockup. */

/** PLACEHOLDER — every signup entry point on the page points here. Swap this
 *  single value for the real signup URL once the flow exists. */
export const signupHref = "#iscriviti";

/** PLACEHOLDER — company-side demo request. Separate destination from signup. */
export const demoHref = "#iscriviti";

export const nav = [
  { label: "Come funziona", href: "#come-funziona" },
  { label: "Per i professionisti", href: "#professionisti" },
  { label: "Per le aziende", href: "#aziende" },
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

export const companyBenefits = [
  "Presenza nelle ricerche per patologia",
  "Schede complete e verificate",
  "Dati aggregati sulla domanda",
] as const;

export const storeBadges = ["App Store — iOS", "Google Play — Android"] as const;
