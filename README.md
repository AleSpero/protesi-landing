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

## Links into the app

Every signup and login button opens the ProteSì app (Flutter web), built from
`src/lib/app-links.ts`:

| Button | Opens |
| --- | --- |
| every signup CTA on `/`, and the hero search field | `APP/#/signup?type=private` |
| every *Registrati ora* on `/produttori` | `APP/#/signup?type=product_company` |
| every *Registra la tua officina* on `/rivenditori` | `APP/#/signup?type=selling_company` |
| the email forms on `/produttori` and `/rivenditori` | the same, plus `&email=…` |
| every *Accedi* | `APP/#/login` |

`APP` is `NEXT_PUBLIC_APP_URL`, defaulting to `https://protesi-app.vercel.app`. When
the app moves to its own domain, set that variable in the Vercel project (or change the
default) and redeploy.

The app uses Flutter's hash routing, so the route and its query live after `#` —
which also keeps a prefilled email out of server logs. The `type` values are the app's
`UserType.value`s; the app preselects that type and prefills the email (see
`protesi-app`: `app_router.dart`, `RegistrationFlowScreen`).

Still placeholders (`#`): `contactHref` (FAQ *Scrivici*, footer *Contatti*) and
`privacyHref` (footer *Privacy*).

## The hero search field

It is not a working search — it is a link into signup that looks like the in-app field,
cycling through example queries. Everything inside it is `aria-hidden` and the link
carries its own `aria-label`; otherwise its accessible name would change every 2.6 s as
the example rotates, which breaks screen readers and voice control.
