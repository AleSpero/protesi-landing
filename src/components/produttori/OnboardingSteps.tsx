import { useMessages, useTranslations } from "next-intl";

export function OnboardingSteps() {
  const t = useTranslations("produttori.onboarding");
  const { steps } = useMessages().produttori.onboarding;

  return (
    <section id="come-funziona" className="scroll-mt-4 bg-ink gutter-x py-16 xl:py-22">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-10 max-w-[760px] text-balance font-display text-[32px] leading-[1.08] font-bold tracking-[-0.025em] text-white sm:text-[38px] lg:mb-13 xl:text-[46px]">
          {t("title")}
        </h2>

        <ol className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {Object.entries(steps).map(([key, step], i) => (
            <li
              key={key}
              className="rounded-3xl border border-periwinkle/28 bg-white/6 p-8"
            >
              <span
                aria-hidden="true"
                className="mb-[18px] block font-display text-[40px] leading-none font-extrabold text-periwinkle"
              >
                {i + 1}
              </span>
              <h3 className="mb-2.5 font-display text-[21px] font-bold text-white">
                {step.title}
              </h3>
              <p className="text-[15px] leading-[1.65] text-white/74">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
