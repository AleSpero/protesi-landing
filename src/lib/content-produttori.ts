/** Copy for the producers' landing (`/produttori`). Strings mirror the
 *  approved `ProteSi Landing Produttori` mockup. */

import { appSignupHref } from "@/lib/app-links";

/** Every "Registrati ora" on the page opens the app's registration with
 *  "Azienda produttrice" preselected. */
export const producerSignupHref = appSignupHref("product_company");

export const producerFeatures = [
  {
    number: "01",
    title: "Presenza nelle ricerche per patologia",
    body: "Quando un medico scrive «collare per cervicalgia», i tuoi collari compaiono accanto alla classificazione ISO. Non serve che conosca il tuo marchio: lo trova.",
  },
  {
    number: "02",
    title: "Scheda completa, sempre aggiornata",
    body: "Foto, produttore, ISO, distretto, patologie compatibili e specifiche tecniche. La strutturiamo noi dal tuo listino e la manteniamo insieme a te.",
  },
  {
    number: "03",
    title: "Dentro il documento del paziente",
    body: "Il prodotto consigliato finisce nel documento che il paziente porta in officina: con nome commerciale, codice e produttore. Il tuo nome arriva fino al banco.",
  },
] as const;

export const producerHighlights = [
  { title: "Produttore in testa", body: "Subito sotto il nome del prodotto" },
  { title: "Patologie compatibili", body: "Le indicazioni che porti in ricerca" },
  { title: "Alternative stesso ISO", body: "Le tue varianti, una accanto all'altra" },
  { title: "Specifiche tecniche", body: "Taglie, materiali, riconducibilità SSN" },
] as const;

export const onboardingSteps = [
  {
    title: "Registrati al portale",
    body: "Crei l'account azienda con i dati della tua realtà e i referenti del catalogo.",
  },
  {
    title: "Carica il catalogo",
    body: "Listino, schede tecniche, foto: PDF, Excel o link al tuo sito. Nessun formato da convertire.",
  },
  {
    title: "Strutturazione e revisione",
    body: "Ogni prodotto riceve ISO, distretto, sottocategoria e patologie compatibili. Le schede vengono revisionate e tu le approvi.",
  },
  {
    title: "Pubblicazione nel listino",
    body: "I tuoi prodotti entrano nel listino della piattaforma e sono in ricerca su iOS, Android e web.",
  },
] as const;

export const homeLogoPoints = [
  "Pagina azienda con tutti i prodotti",
  "Presente su app e web",
  "Dati aggregati su ricerche e consigli",
] as const;

/** "Tre modi per farsi trovare. Uno funziona in visita." */
export const producerComparison = {
  protesi: {
    title: "ProteSì",
    points: [
      "Comparsa nelle ricerche per patologia, non solo per nome",
      "Schede con ISO, distretto e patologie compatibili",
      "Prodotto inserito nel documento che il paziente porta in officina",
      "Logo azienda nella home di ogni professionista",
      "Aggiornamenti del listino inclusi, su iOS, Android e web",
    ],
  },
  alternatives: [
    {
      title: "Cataloghi cartacei e PDF",
      points: [
        "Consultati raramente durante la visita",
        "Nessuna ricerca per patologia",
        "Si aggiornano solo con una ristampa",
        "Non arrivano al paziente",
      ],
    },
    {
      title: "Sito aziendale e informatori",
      points: [
        "Il medico deve già conoscere il marchio",
        "Un catalogo alla volta, nessun confronto",
        "Copertura limitata al territorio dell'informatore",
        "Nessun legame con il documento di consiglio",
      ],
    },
  ],
} as const;

export const producerFaqs = [
  {
    q: "Quanto costa essere presenti in ProteSì?",
    a: "La registrazione e il caricamento del catalogo non hanno costi di attivazione. Il piano dipende dal numero di prodotti pubblicati e dai servizi di visibilità scelti: ti inviamo il listino dopo la registrazione.",
  },
  {
    q: "In quale formato devo inviare il catalogo?",
    a: "In quello che già usi: PDF, Excel, CSV o un link al tuo sito. La strutturazione in ISO, distretto e patologie la facciamo noi e tu approvi le schede prima della pubblicazione.",
  },
  {
    q: "Quanto tempo passa dal caricamento alla pubblicazione?",
    a: "Dipende dalla dimensione del catalogo. Per un listino di qualche centinaio di referenze la strutturazione e la revisione richiedono in media due o tre settimane.",
  },
  {
    q: "Posso aggiornare prezzi, foto o schede dopo la pubblicazione?",
    a: "Sì. Gli aggiornamenti del listino passano dal portale aziende e vengono pubblicati dopo una breve revisione, senza costi aggiuntivi.",
  },
  {
    q: "Chi vede i miei prodotti?",
    a: "Professionisti sanitari registrati: medici, fisiatri, fisioterapisti, tecnici ortopedici. I dati che ricevi sono aggregati e anonimi: ricerche, visualizzazioni e inserimenti nei documenti.",
  },
] as const;
