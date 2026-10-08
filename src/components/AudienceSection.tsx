import Image from "next/image";
import { useMessages, useTranslations } from "next-intl";

import { CheckList } from "@/components/CheckList";
import { appStoreHref, playStoreHref, signupHref } from "@/lib/links";

export function AudienceSection() {
  const t = useTranslations("home.audience");
  const { clinicians } = useMessages().home.audience;

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

          {/* The official Italian badges (Apple marketing toolbox, Google Play
              badge generator), shown at the same height. */}
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <a href={appStoreHref} data-event="App Store" className="block">
              <Image
                src="/badges/app-store-it.svg"
                alt={t("app.storeBadges.ios")}
                width={120}
                height={40}
                className="block h-11 w-auto"
              />
            </a>
            <a href={playStoreHref} data-event="Google Play" className="block">
              <Image
                src="/badges/google-play-it.png"
                alt={t("app.storeBadges.android")}
                width={646}
                height={192}
                sizes="148px"
                className="block h-11 w-auto"
              />
            </a>
          </div>

          <a
            href={signupHref}
            data-event="Signup"
            data-placement="audience"
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

          <CheckList items={clinicians.benefits} className="mb-5 text-[14.5px]" />

          <p className="mb-7 text-[14.5px] leading-[1.6] text-charcoal">{t("clinicians.note")}</p>

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
