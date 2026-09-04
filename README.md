# ProteSì — landing page

Landing page for ProteSì, built to match the approved Figma/Claude Design mockup
(`ProteSi Landing Final.dc.html`) pixel-for-pixel at the 1440 px design width, and to
degrade cleanly down to mobile.

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
| `src/app/page.tsx` | Section composition |
| `src/app/globals.css` | Design tokens (`@theme`), gutter scale, base resets |
| `src/lib/content.ts` | All copy and list data — edit here, not in the markup |
| `src/components/BrandLogo.tsx` | ProteSì lockup, traced from the Figma component (node `55:3959`) |
| `src/components/Hero.tsx` | Headline, search demo and the three-device cluster |
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

Every signup entry point reads `signupHref` from `src/lib/content.ts`, and the
company-side demo request reads `demoHref`. Both are placeholders pointing at the
`#iscriviti` section, so nothing 404s — **swap those two values for the real URLs and
the whole page follows.** They cover:

- the header *Iscriviti* button
- the hero search field (the whole field is a link — see below)
- the hero *Crea il tuo account* button
- *Iscriviti e inizia* and *Richiedi una demo* in the audience cards
- the closing *Crea il tuo account* button

The footer *Privacy* and *Contatti* links still point at `#` and need real pages.

## The hero search field

It is not a working search — it is a link into signup that looks like the in-app field,
cycling through example queries. Everything inside it is `aria-hidden` and the link
carries its own `aria-label`; otherwise its accessible name would change every 2.6 s as
the example rotates, which breaks screen readers and voice control.
