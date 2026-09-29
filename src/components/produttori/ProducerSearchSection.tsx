import { useTranslations } from "next-intl";

import { BrowserFrame } from "@/components/BrowserFrame";

/** ProteSì seen from the producer's side: a web search with the brand filter. */
export function ProducerSearchSection() {
  const t = useTranslations("produttori.search");

  return (
    <section className="bg-white gutter-x pt-16 pb-12 xl:pt-22 xl:pb-16">
      <div className="mx-auto max-w-[1160px] text-center">
        <h2 className="mx-auto mb-4.5 max-w-[860px] text-balance font-display text-[32px] leading-[1.08] font-bold tracking-[-0.025em] text-ink sm:text-[38px] xl:text-[46px]">
          {t("title")}
        </h2>

        <p className="mx-auto mb-10 max-w-[680px] text-pretty text-[17px] leading-[1.6] text-body xl:mb-13">
          {t("intro")}
        </p>

        <div className="relative">
          <BrowserFrame
            url={t("browserUrl")}
            src="/mockups/web_search_carrozzina.webp"
            alt={t("imageAlt")}
            width={1786}
            height={1221}
            sizes="(min-width: 1288px) 1158px, 100vw"
          />

          {/* Overhangs the frame's corner from `md` up; below that the 40px
              overhang would poke past the gutter, so it drops under the frame. */}
          <div className="mt-4 inline-block rounded-2xl bg-ink px-[22px] py-[18px] text-left text-white shadow-[0_18px_40px_rgb(26_41_96/0.3)] md:absolute md:-right-10 md:-bottom-[30px] md:mt-0">
            <span className="mb-1.5 block text-[11px] font-bold tracking-[0.14em] text-periwinkle uppercase">
              {t("badge.label")}
            </span>
            <span className="block font-display text-[20px] font-bold">
              {t("badge.text")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
