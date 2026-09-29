import { useTranslations } from "next-intl";

import { PhoneCluster } from "@/components/PhoneCluster";
import { producerSignupHref } from "@/lib/links";

export function ProducerHero() {
  const t = useTranslations("produttori.hero");

  return (
    <section id="top" className="overflow-hidden bg-lavender text-center">
      <div className="mx-auto max-w-[1440px] gutter-x pt-12 sm:pt-16 xl:pt-20">
        <h1 className="mx-auto mb-5 max-w-[900px] text-balance font-display text-[38px] leading-[1.05] font-extrabold tracking-[-0.03em] text-ink sm:text-[48px] lg:text-[58px] xl:text-[66px]">
          {t.rich("title", { br: () => <br /> })}
        </h1>

        <p className="mx-auto mb-10 max-w-[640px] text-pretty text-[16px] leading-[1.6] text-body sm:text-[18px]">
          {t("intro")}
        </p>

        <div className="mb-14 flex flex-wrap justify-center gap-3.5">
          <a
            href={producerSignupHref}
            className="inline-block rounded-[12px] bg-brand px-8 py-4 text-[16px] font-semibold whitespace-nowrap text-white transition-colors hover:bg-brand-strong"
          >
            {t("signup")}
          </a>
          <a
            href="#come-funziona"
            className="inline-block rounded-[12px] border-[1.5px] border-periwinkle bg-white px-8 py-4 text-[16px] font-semibold whitespace-nowrap text-ink transition-colors hover:border-brand"
          >
            {t("howItWorks")}
          </a>
        </div>

        <PhoneCluster />
      </div>
    </section>
  );
}
