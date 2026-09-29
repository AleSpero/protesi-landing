import { useMessages, useTranslations } from "next-intl";

export function RetailerSteps() {
  const t = useTranslations("rivenditori.steps");
  const { items } = useMessages().rivenditori.steps;

  return (
    <section id="come-funziona" className="scroll-mt-4 bg-white gutter-x py-16 xl:py-22">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mx-auto mb-10 max-w-[760px] text-center text-balance font-display text-[32px] leading-[1.08] font-bold tracking-[-0.025em] text-ink sm:text-[38px] xl:mb-13 xl:text-[46px]">
          {t("title")}
        </h2>

        <ol className="grid gap-6 md:grid-cols-3">
          {Object.entries(items).map(([key, step], i) => (
            <li key={key} className="rounded-3xl bg-lavender p-7 xl:p-9">
              <span
                aria-hidden="true"
                className="mb-[18px] block font-display text-[40px] leading-none font-extrabold text-periwinkle"
              >
                {i + 1}
              </span>
              <h3 className="mb-2.5 font-display text-[22px] font-bold text-ink">{step.title}</h3>
              <p className="text-[15px] leading-[1.65] text-body">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
