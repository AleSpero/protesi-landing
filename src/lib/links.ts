/** Every href on the landings. The copy itself lives in messages/it.json. */

import { appLoginHref, appSignupHref } from "@/lib/app-links";

/* Every signup and login entry point opens the app (see app-links.ts), with
   the account type that matches the landing preselected. */
export const signupHref = appSignupHref("private");
export const producerSignupHref = appSignupHref("product_company");
export const retailerSignupHref = appSignupHref("selling_company");
export const loginHref = appLoginHref;

/* PLACEHOLDERS — pages that don't exist yet. They point at `#` so nothing 404s. */
export const contactHref = "#";
export const privacyHref = "#";
/** The app's store listings, behind the badges on `/`. */
export const appStoreHref = "#";
export const playStoreHref = "#";

/** The sibling audience landings. */
export const produttoriHref = "/produttori";
export const rivenditoriHref = "/rivenditori";

/** Audience switcher in the header; SiteHeader marks the current one. `key`
 *  picks the label under `common.header.nav` in the messages. */
export const nav = [
  { key: "professionisti", href: "/" },
  { key: "produttori", href: produttoriHref },
  { key: "rivenditori", href: rivenditoriHref },
] as const;
