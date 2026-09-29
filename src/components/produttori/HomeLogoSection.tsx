import Image from "next/image";
import { useMessages, useTranslations } from "next-intl";

import { CheckList } from "@/components/CheckList";

export function HomeLogoSection() {
  const t = useTranslations("produttori.homeLogo");
  const { points } = useMessages().produttori.homeLogo;

  return (
    <section className="bg-white gutter-x py-16 xl:py-25">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="showcase-scale flex justify-center">
          {/* Outer size = the design's content box plus its 1px border. */}
          <div className="relative h-[calc(522px*var(--s))] w-[calc(562px*var(--s))] shrink-0 overflow-hidden rounded-3xl border border-[#e6e7fb] bg-lavender">
            <Image
              src="/mockups/mockup_protesi_home.png"
              alt={t("imageAlt")}
              width={1479}
              height={2521}
              sizes="(min-width: 640px) 540px, 330px"
              className="absolute bottom-0 left-1/2 block h-auto w-[calc(540px*var(--s))] max-w-none -translate-x-1/2"
            />
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-balance font-display text-[32px] leading-[1.08] font-bold tracking-[-0.025em] text-ink sm:text-[38px] xl:text-[46px]">
            {t("title")}
          </h2>

          <p className="mb-7 max-w-[480px] text-pretty text-[17px] leading-[1.65] text-body">
            {t("intro")}
          </p>

          <CheckList items={points} className="text-[15px]" />
        </div>
      </div>
    </section>
  );
}
