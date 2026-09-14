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
| `src/lib/content.ts` | Copy and list data for `/` plus everything shared (nav, link placeholders) |
| `src/lib/content-produttori.ts` | Copy and list data for `/produttori` |
| `src/lib/content-rivenditori.ts` | Copy and list data for `/rivenditori` |
| `src/components/produttori/`, `src/components/rivenditori/` | Sections only that page uses |
| `src/components/EmailSignupCta.tsx` | Email-capture closing CTA shared by the producers' and retailers' pages |
| `src/components/BrandLogo.tsx` | ProteSì lockup, traced from the Figma component (node `55:3959`) |
| `src/components/Hero.tsx` | Headline, search demo, signup CTA and the three-device cluster |
| `src/components/BrowserFrame.tsx` | A screenshot in a decorative browser window — used by both pages |
| `src/components/WebAppSection.tsx` | The web app in a browser frame |
| `src/components/ComparisonSection.tsx` | Three-column comparison; takes `title`, `intro` and `data` per page |
| `src/components/FaqSection.tsx` | Accordion on native `<details name>` — one open at a time, no JS; takes `items` |
| `src/components/FeatureGrid.tsx` | Three feature cards; takes `items`, optionally numbered |
| `public/mockups/` | App screenshots used in the hero and the document section |

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

## Not yet wired

Every link on the page resolves through a placeholder in `src/lib/content.ts`, so
wiring a real destination is a one-line change:

| Constant | Used by | Placeholder |
| --- | --- | --- |
| `signupHref` | header *Iscriviti*, hero search field, both *Crea il tuo account* buttons, *Iscriviti e inizia* | `#iscriviti` |
| `loginHref` | header *Accedi*, "Hai già un account? *Accedi*" | `#` |
| `contactHref` | FAQ *Scrivici*, footer *Contatti* | `#` |
| `privacyHref` | footer *Privacy* | `#` |
| `produttoriHref` | header *Per i produttori* | `/produttori` (built) |
| `producerSignupHref` (`content-produttori.ts`) | every *Registrati ora* on `/produttori`, and the email form's `action` | `#registrati` |
| `retailerSignupHref` (`content-rivenditori.ts`) | every *Registra la tua officina* on `/rivenditori`, and the email form's `action` | `#registrati` |
| `rivenditoriHref` | header *Per i rivenditori* | `/rivenditori` (built) |

`SiteHeader` takes the current page's href and marks that nav item `aria-current="page"`;
it also takes the signup label (plus a short one for phones), the button colour and the
background, so each audience page can style it like its design.

The email forms on `/produttori` and `/rivenditori` submit as a plain GET so the signup page can prefill the
address (`?email=…`). If the real flow should not see the email in the query string, point
its `action` at a POST endpoint instead.

## The hero search field

It is not a working search — it is a link into signup that looks like the in-app field,
cycling through example queries. Everything inside it is `aria-hidden` and the link
carries its own `aria-label`; otherwise its accessible name would change every 2.6 s as
the example rotates, which breaks screen readers and voice control.
