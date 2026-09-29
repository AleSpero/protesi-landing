import Image from "next/image";
import { useMessages, useTranslations } from "next-intl";

import { BrandLogo } from "@/components/BrandLogo";
import { retailerSignupHref } from "@/lib/links";

export function RetailerHero() {
  const t = useTranslations("rivenditori.hero");
  const { nearby } = useMessages().rivenditori.hero;

  return (
    <section id="top" className="bg-white gutter-x pt-10 pb-12 sm:pt-12 xl:pt-16 xl:pb-16">
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <div>
          {/* The lockup stands in for a headline; the tagline under it keeps
              the heading's text meaningful for search and screen readers. */}
          <h1 className="mb-9">
            <BrandLogo
              idPrefix="protesi-logo-hero"
              className="mb-6 block h-auto w-[260px] sm:w-[380px] xl:w-[440px]"
            />
            <span className="block max-w-[520px] text-balance font-display text-[22px] leading-[1.3] font-bold tracking-[-0.01em] text-ink sm:text-[27px] xl:text-[30px]">
              {t("tagline")}
            </span>
          </h1>

          <div className="flex flex-wrap gap-3.5">
            <a
              href={retailerSignupHref}
              className="inline-block rounded-[12px] bg-accent px-8 py-4 text-[16px] font-semibold whitespace-nowrap text-white transition-colors hover:bg-accent-strong"
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
        </div>

        {/* `retail-hero-scale` (globals.css) sets `--h`, scaling the two phones
            and their spacing as one unit so the pair always fits its column. */}
        <div className="retail-hero-scale relative flex flex-col items-center sm:block">
          {/* Each PNG has ~40px of transparent margin either side of the
              device; the second phone's negative margin eats most of it, so
              the two frames sit about 28px apart. */}
          <div className="flex justify-center">
            <Image
              src="/mockups/mockup_protesi_home.png"
              alt={t("imageAlt.home")}
              width={1479}
              height={2521}
              sizes="(min-width: 640px) 270px, 155px"
              priority
              className="block h-auto w-[calc(270px*var(--h))] max-w-none"
            />
            <Image
              src="/mockups/mockup_protesi_phone_3.png"
              alt={t("imageAlt.results")}
              width={1000}
              height={1704}
              sizes="(min-width: 640px) 270px, 155px"
              priority
              className="block h-auto w-[calc(270px*var(--h))] max-w-none ml-[calc(-52px*var(--h))]"
            />
          </div>

          {/* A notch smaller than the design's 312px card, so it covers less of
              the phones. Floats over them from `sm` up; sits under them on phones. */}
          <div className="mt-4 w-[268px] max-w-full rounded-2xl border border-[#dde0ff] bg-white px-4 py-3.5 text-left shadow-[0_18px_44px_rgb(26_41_96/0.16)] sm:absolute sm:bottom-[calc(40px*var(--h))] sm:left-[calc(-10px*var(--h))] sm:mt-0">
            <span className="mb-2 block text-[10px] font-bold tracking-[0.14em] text-muted uppercase">
              {t("nearby.title")}
            </span>
            {/* The first row is the reader's own shop, so it is the one highlighted. */}
            <ul className="flex flex-col gap-1.5">
              {Object.entries(nearby.shops).map(([key, shop], i) => {
                const highlight = i === 0;
                return (
                  <li
                    key={key}
                    className={`flex items-center justify-between rounded-[9px] px-2.5 py-2 ${highlight ? "bg-peach" : "bg-lavender"}`}
                  >
                    <span
                      className={`text-[12.5px] text-ink ${highlight ? "font-semibold" : ""}`}
                    >
                      {shop.name}
                    </span>
                    <span
                      className={`text-[11px] ${highlight ? "font-semibold text-accent" : "text-muted"}`}
                    >
                      {shop.distance}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
