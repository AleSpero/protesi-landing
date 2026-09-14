import { contactHref, faqs } from "@/lib/content";

type FaqSectionProps = {
  items?: readonly { q: string; a: string }[];
};

/**
 * Native `<details>` sharing one `name`: opening a question closes the others,
 * like the design, without any client JS — and the answers stay in the HTML
 * for search engines and find-in-page. The first question starts open.
 */
export function FaqSection({ items = faqs }: FaqSectionProps) {
  return (
    <section className="bg-white gutter-x py-16 xl:py-24">
      <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div>
          <h2 className="mb-4 text-balance font-display text-[32px] leading-[1.08] font-bold tracking-[-0.025em] text-ink sm:text-[38px] xl:text-[46px]">
            Domande frequenti
          </h2>
          <p className="text-pretty text-[17px] leading-[1.6] text-body">
            Non trovi la risposta?{" "}
            <a href={contactHref} className="text-brand transition-colors hover:text-accent">
              Scrivici
            </a>
            : rispondiamo entro un giorno lavorativo.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {items.map((faq, i) => (
            <details
              key={faq.q}
              name="faq"
              open={i === 0}
              className="group overflow-hidden rounded-2xl bg-lavender"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-[26px] py-[22px] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand [&::-webkit-details-marker]:hidden">
                <span className="text-[17px] leading-[1.4] font-semibold text-ink">{faq.q}</span>
                <span
                  aria-hidden="true"
                  className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-white text-[20px] leading-none font-medium text-brand"
                >
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">–</span>
                </span>
              </summary>
              {/* 692px = the design's 640px content-box max plus 2 x 26px padding. */}
              <p className="max-w-[692px] px-[26px] pb-6 text-[15.5px] leading-[1.65] text-body">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
