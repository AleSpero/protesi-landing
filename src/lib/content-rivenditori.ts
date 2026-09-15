/** Copy for the retailers' landing (`/rivenditori`). Strings mirror the
 *  approved `ProteSi Landing Rivenditori` mockup. */

import { appSignupHref } from "@/lib/app-links";

/** Every "Registra la tua officina" on the page opens the app's registration
 *  with "Azienda venditrice" preselected. */
export const retailerSignupHref = appSignupHref("selling_company");

/** The "Dove trovarlo" card floating over the hero image. */
export const nearbyShops = {
  town: "Padova",
  rows: [
    { name: "La tua officina", distance: "1,2 km", highlight: true },
    { name: "Ortopedia Centro", distance: "3,8 km", highlight: false },
    { name: "Sanitaria Euganea", distance: "6,1 km", highlight: false },
  ],
} as const;

export const retailerSteps = [
  {
    title: "Il medico consiglia l'ausilio",
    body: "Durante la visita cerca il prodotto in ProteSì, lo aggiunge al documento e inserisce il comune del paziente.",
  },
  {
    title: "Il documento indica le officine vicine",
    body: "Accanto al prodotto compaiono i punti vendita registrati più vicini, con indirizzo, orari e contatti. Tu sei uno di questi.",
  },
  {
    title: "Il paziente entra già informato",
    body: "Arriva con nome commerciale, produttore e codice ISO scritti. Meno domande al banco, meno ordini sbagliati.",
  },
] as const;

export const retailerHighlights = [
  { title: "Nome e codice", body: "Prodotto, produttore, ISO" },
  { title: "Riconducibilità SSN", body: "Elenco 1, dove previsto" },
  { title: "Officine vicine", body: "Per comune del paziente" },
  { title: "PDF o email", body: "Leggibile su carta e telefono" },
] as const;

export const profilePoints = [
  "Visibilità locale, per comune e provincia",
  "Marchi e categorie che tratti davvero",
  "Riepilogo mensile dei consigli nella tua zona",
] as const;

/** "Il paziente sceglie dove andare nei dieci minuti dopo la visita." */
export const retailerComparison = {
  protesi: {
    title: "ProteSì",
    points: [
      "Nome della tua officina nel documento di consiglio",
      "Selezione per comune del paziente, non per chi paga di più",
      "Il paziente arriva con prodotto, produttore e codice già scritti",
      "Scheda con orari, servizi, marchi trattati e convenzioni",
      "Riepilogo mensile dei consigli nella tua zona",
    ],
  },
  alternatives: [
    {
      title: "Ricerca su mappe e motori",
      points: [
        "Il paziente deve sapere cosa cercare",
        "Risultati influenzati dalla pubblicità",
        "Nessuna informazione sul prodotto prescritto",
        "Recensioni, non competenza su quell'ausilio",
      ],
    },
    {
      title: "Passaparola e volantini",
      points: [
        "Copre solo i pazienti che passano davanti al negozio",
        "Nessun legame con la prescrizione",
        "Non raggiunge i professionisti",
        "Impossibile misurare",
      ],
    },
  ],
} as const;

export const retailerFaqs = [
  {
    q: "Come viene scelta l'officina che compare nel documento?",
    a: "Per distanza dal comune indicato dal professionista per il paziente. Compaiono le officine registrate più vicine che trattano la categoria di ausilio consigliata. Non è un'asta.",
  },
  {
    q: "Quanto costa registrare la mia officina?",
    a: "La registrazione e la scheda base non hanno costi di attivazione. Il piano dipende dal numero di comuni coperti e dai servizi aggiuntivi: ti inviamo il listino dopo la registrazione.",
  },
  {
    q: "Devo avere a magazzino tutti i prodotti del catalogo?",
    a: "No. Nella scheda indichi i marchi e le categorie che tratti: il documento ti mostra solo quando il consiglio riguarda ausili compatibili con la tua offerta.",
  },
  {
    q: "Cosa vede il paziente della mia officina?",
    a: "Nome, indirizzo, orari, contatti e i servizi che hai indicato: su misura, convenzione ASL, consegna a domicilio. Il paziente sceglie da lì dove andare.",
  },
  {
    q: "Posso registrare più punti vendita?",
    a: "Sì. Ogni punto vendita ha la sua scheda e il suo comune di riferimento, gestiti dallo stesso account.",
  },
] as const;
