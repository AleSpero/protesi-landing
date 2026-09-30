# ProteSì — landing page

Landing pages for ProteSì, built to match the approved Claude Design mockups
pixel-for-pixel at the 1440 px design width, and to degrade cleanly down to mobile.

| Route | Audience | Design file |
| --- | --- | --- |
| `/` | Professionisti sanitari | `ProteSi Landing Final.dc.html` |
| `/produttori` | Produttori | `ProteSi Landing Produttori.dc.html` |
| `/rivenditori` | Rivenditori | `ProteSi Landing Rivenditori.dc.html` |

The audience pages are routes of one app, not separate projects: they share the design
tokens, fonts, header, footer and several sections, and the header nav links them to
each other.




## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **Tailwind CSS v4** — design tokens live in `src/app/globals.css` under `@theme`
- **next/font** — Inter (body) and Plus Jakarta Sans (display), self-hosted at build time
- **next/image** — the four device mockups are optimised and served as WebP/AVIF

## Commands

```bash
npm run dev
```

```bash
npm run build
```

## Structure

| Path | What it is |
| --- | --- |
| `src/app/page.tsx` | Professionals' landing — section composition |
| `src/app/produttori/page.tsx` | Producers' landing, with its own `metadata` |
| `src/app/rivenditori/page.tsx` | Retailers' landing, with its own `metadata` |
| `src/app/globals.css` | Design tokens (`@theme`), gutter scale, base resets |
| `messages/it.json` | **All the copy** of every landing — see [Editing the copy](#editing-the-copy) |
| `src/i18n/request.ts` | next-intl setup: serves `messages/it.json` to the components |
| `src/global.d.ts` | Types every message key against `messages/it.json` |
| `src/lib/links.ts` | Every href: app links, sibling landings, nav, placeholders |
| `src/components/produttori/`, `src/components/rivenditori/` | Sections only that page uses |
| `src/components/EmailSignupCta.tsx` | Email-capture closing CTA shared by the producers' and retailers' pages |
| `src/components/BrandLogo.tsx` | ProteSì lockup, traced from the Figma component (node `55:3959`) |
| `src/components/Hero.tsx` | Headline, search demo and the three-device cluster |
| `src/components/PhoneCluster.tsx` | The three-device cluster closing the heroes of `/` and `/produttori` |
| `src/components/NomenclatorSection.tsx`, `PatientDocumentSection.tsx` | The nomenclator (with the MMG callout) and patient-document sections of `/` |
| `src/components/CheckList.tsx` | Short list with check marks instead of dashes |
| `src/components/BrowserFrame.tsx` | A screenshot in a decorative browser window — used by both pages |
| `src/components/WebAppSection.tsx` | The web app in a browser frame |
| `src/components/FaqSection.tsx` | Accordion on native `<details name>` — one open at a time, no JS; takes `items` |
| `src/components/ContactSection.tsx` | The FAQ's "Scrivici" line, also used alone on `/rivenditori`, which has no FAQ |
| `src/components/FeatureGrid.tsx` | Three feature cards; takes `items`, optionally numbered |
| `public/mockups/` | App screenshots and mockups used across the three pages |
| `public/registration-complete.html` | Standalone page the signup confirmation email lands on, served at `/registration-complete.html`; its *Accedi* link is hardcoded to the app's login |

## Editing the copy

Every visible string — headlines, paragraphs, buttons, FAQs, image alt texts, SEO
title and description — lives in [`messages/it.json`](messages/it.json), served by
[next-intl](https://next-intl.dev). Components hold only layout and read their text by
key, so changing the copy never means touching a `.tsx` file.

The file is ordered like the site:

| Section | What it holds |
| --- | --- |
| `common` | Header, email signup form, FAQ heading, footer — shared by every landing |
| `home` | `/`, section by section in page order, starting with `metadata` (SEO) |
| `produttori` | `/produttori`, same layout |
| `rivenditori` | `/rivenditori`, same layout |

- **Change a text:** edit the string. With `npm run dev` running the page updates live.
- **Add or remove a list item** (FAQ, feature card, highlight…): add or delete
  an entry. Lists are objects, not arrays, so every item has a stable name
  (`faqs.gratuito`); pick any unused name for a new one. Items render in file order.
- **Inline markup:** `<link>…</link>` and `<login>…</login>` mark the linked words,
  `<br></br>` is a line break. Keep the tags; only the text between them is copy.
- **Special characters:** `{` and `}` are placeholders in the ICU message format. To
  show them literally, wrap them in single quotes: `'{'`.

Keys are type-checked: a component that asks for a key missing from the file fails
`npm run build`. Adding a language means adding `messages/<locale>.json` and choosing
the locale in `src/i18n/request.ts`.

## Notes on fidelity

- Every measured box (position, size, colour, radius, shadow, type) matches the mockup
  exactly at 1440 px — verified by diffing computed styles against the design file.
- Two deliberate deviations from the mockup, which was a fixed 1440 px canvas:
  - **Sections are full-bleed.** The mockup caps the whole page at 1440 px; here the
    background bands span the viewport and only the *content* is capped, so the navy and
    lavender sections still reach the edges on wide screens.
  - **The base line-height is `normal`,** not Tailwind's `1.5`, because the mockup
    inherits the browser default. Explicit `leading-*` utilities are used wherever the
    design specifies a value.
- The device cluster scales as a single unit through the `--pm` custom property, so the
  overlaps and crops hold their proportions at every breakpoint.
- Below `lg` the header collapses to logo + *Iscriviti*; the nav anchors point at
  sections of this single-scroll page, so nothing becomes unreachable.

## Links into the app

Every signup and login button opens the ProteSì app (Flutter web), built from
`src/lib/app-links.ts` and wired up in `src/lib/links.ts`:

| Button | Opens |
| --- | --- |
| every signup CTA on `/`, and the hero search field | `APP/#/signup?type=private` |
| every *Registrati ora* on `/produttori` | `APP/#/signup?type=product_company` |
| every *Registra la tua officina* on `/rivenditori` | `APP/#/signup?type=selling_company` |
| the email forms on `/produttori` and `/rivenditori` | the same, plus `&email=…` |
| every *Accedi* | `APP/#/login` |

`APP` is `NEXT_PUBLIC_APP_URL`, defaulting to `https://app.protesi.io`. To point a
deployment at another app instance, set that variable in the Vercel project and redeploy.

The app uses Flutter's hash routing, so the route and its query live after `#` —
which also keeps a prefilled email out of server logs. The `type` values are the app's
`UserType.value`s; the app preselects that type and prefills the email (see
`protesi-app`: `app_router.dart`, `RegistrationFlowScreen`).

Still placeholders (`#`) in `src/lib/links.ts`: `contactHref` (FAQ *Scrivici*, footer
*Contatti*) and `privacyHref` (footer *Privacy*).

## The hero search field

It is not a working search — it is a link into signup that looks like the in-app field,
cycling through example queries. Everything inside it is `aria-hidden` and the link
carries its own `aria-label`; otherwise its accessible name would change every 2.6 s as
the example rotates, which breaks screen readers and voice control.
