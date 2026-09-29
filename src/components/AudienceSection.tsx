import { useMessages, useTranslations } from "next-intl";

import { signupHref } from "@/lib/links";

export function AudienceSection() {
  const t = useTranslations("home.audience");
  const { app, clinicians } = useMessages().home.audience;

  return (
    <section className="bg-ink gutter-x py-16 xl:py-20">
      <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-periwinkle/28 bg-white/6 p-8 xl:p-11">
          <h3 className="mb-3.5 font-display text-[26px] leading-[1.14] font-bold text-white xl:text-[32px]">
            {t("app.title")}
          </h3>

          <p className="mb-7 text-[15.5px] leading-[1.65] text-white/74">
            {t("app.intro")}
          </p>

          <div className="mb-7 flex flex-wrap gap-3">
            {Object.entries(app.storeBadges).map(([key, badge]) => (
              <span
                key={key}
                className="whitespace-nowrap rounded-[10px] border border-white/30 px-[18px] py-[11px] text-[13px] font-semibold text-white"
              >
                {badge}
              </span>
            ))}
          </div>

          <a
            href={signupHref}
            className="inline-block rounded-[12px] bg-white px-7 py-[15px] text-[15px] font-semibold whitespace-nowrap text-[#101010] transition-colors hover:bg-lavender-deep"
          >
            {t("app.cta")}
          </a>
        </article>

        <article className="rounded-3xl bg-lavender-deep p-8 xl:p-11">
          <h3 className="mb-3.5 font-display text-[26px] leading-[1.14] font-bold text-ink xl:text-[32px]">
            {t("clinicians.title")}
          </h3>

          <p className="mb-7 text-[15.5px] leading-[1.65] text-body">
            {t("clinicians.intro")}
          </p>

          <ul className="mb-7 flex flex-col gap-3">
            {Object.entries(clinicians.benefits).map(([key, benefit]) => (
              <li key={key} className="text-[14.5px] text-charcoal">
                <span aria-hidden="true">— </span>
                {benefit}
              </li>
            ))}
          </ul>

          <a
            href="#come-funziona"
            className="inline-block rounded-[12px] bg-brand px-7 py-[15px] text-[15px] font-semibold whitespace-nowrap text-white transition-colors hover:bg-brand-strong"
          >
            {t("clinicians.cta")}
          </a>
        </article>
      </div>
    </section>
  );
}
