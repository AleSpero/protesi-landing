import Image from "next/image";
import { useMessages, useTranslations } from "next-intl";

import { HighlightGrid } from "@/components/HighlightGrid";

export function ProducerDetailSection() {
  const t = useTranslations("produttori.detail");
  const { highlights } = useMessages().produttori.detail;

  return (
    <section className="bg-white gutter-x pt-6 pb-20 xl:pb-25">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="mb-5 text-balance font-display text-[32px] leading-[1.08] font-bold tracking-[-0.025em] text-ink sm:text-[38px] xl:text-[46px]">
            {t("title")}
          </h2>

          <p className="mb-8 max-w-[480px] text-pretty text-[17px] leading-[1.65] text-body">
            {t("intro")}
          </p>

          <HighlightGrid items={highlights} />
        </div>

        {/* `showcase-scale` (globals.css) sets `--s`, scaling the box and its contents together. */}
        <div className="showcase-scale flex justify-center">
          {/* 562 = the design's 560 content box plus its 1px border; shrink-0
              keeps it from being squeezed to the 560px column like the design. */}
          <div className="relative size-[calc(562px*var(--s))] shrink-0 overflow-hidden rounded-3xl border border-[#e6e7fb] bg-lavender">
            <Image
              src="/mockups/web_detail.png"
              alt={t("imageAlt.web")}
              width={1430}
              height={1045}
              sizes="(min-width: 640px) 900px, 540px"
              quality={90}
              className="block h-auto w-[calc(900px*var(--s))] max-w-none ml-[calc(-40px*var(--s))]"
            />
            <Image
              src="/mockups/documento_ausili.png"
              alt={t("imageAlt.document")}
              width={1656}
              height={2342}
              sizes="(min-width: 640px) 320px, 192px"
              quality={90}
              className="absolute bottom-[calc(-40px*var(--s))] left-[calc(36px*var(--s))] block h-auto w-[calc(320px*var(--s))] max-w-none rounded-md shadow-[0_20px_40px_rgb(26_41_96/0.25)] ring-1 ring-[#e6e7fb]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
