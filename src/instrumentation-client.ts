import { track } from "@vercel/analytics";

/* Custom events for Vercel Web Analytics; page views come from <Analytics /> in
   the root layout. A click on any link marked `data-event="Name"` sends that
   event, with `data-placement` (header, hero, audience, final) saying which CTA
   on the page it was. The audience is the page itself, so filter the dashboard
   by page to split them. One delegated listener keeps the CTAs server
   components. Vercel records custom events on the Pro plan only. */
document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const link = event.target.closest<HTMLElement>("a[data-event]");
  if (!link?.dataset.event) return;
  track(link.dataset.event, { placement: link.dataset.placement });
});
