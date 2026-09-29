import Image from "next/image";
import { useMessages, useTranslations } from "next-intl";

import { retailerSignupHref } from "@/lib/links";

export function RetailerHero() {
  const t = useTranslations("rivenditori.hero");
  const { intro, nearby } = useMessages().rivenditori.hero;

  return (
    <section id="top" className="bg-white gutter-x pt-10 sm:pt-12 xl:pt-16">
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <h1 className="mb-[22px] text-balance font-display text-[38px] leading-[1.04] font-extrabold tracking-[-0.03em] text-ink sm:text-[48px] lg:text-[56px] xl:text-[64px]">
            {t.rich("title", { br: () => <br /> })}
          </h1>

          {/* One <p> per entry of `intro`. */}
          <div className="mb-9 flex max-w-[520px] flex-col gap-4">
            {Object.entries(intro).map(([key, paragraph]) => (
              <p key={key} className="text-pretty text-[16px] leading-[1.6] text-body sm:text-[18px]">
                {paragraph}
              </p>
            ))}
          </div>

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

        {/* `retail-hero-scale` (globals.css) sets `--h`. The window is allowed
            to flex-shrink to its column, as in the design, which clips the
            right edge of the phone rather than scaling it. */}
        <div className="retail-hero-scale relative flex flex-col items-center sm:block">
          <div className="relative h-[calc(560px*var(--h))] w-[calc(600px*var(--h))] max-w-full overflow-hidden sm:mx-auto">
            <Image
              src="/mockups/mockup_inclinato_4.png"
              alt={t("imageAlt")}
              width={2000}
              height={1500}
              sizes="(min-width: 640px) 1040px, 600px"
              priority
              className="block h-auto w-[calc(1040px*var(--h))] max-w-none ml-[calc(-230px*var(--h))] mt-[calc(-120px*var(--h))]"
            />
          </div>

          {/* 312px = the design's 270px content box plus padding and border.
              Floats over the image from `sm` up; sits under it on phones. */}
          <div className="mt-4 w-[312px] max-w-full rounded-2xl border border-[#dde0ff] bg-white px-5 py-[18px] text-left shadow-[0_18px_44px_rgb(26_41_96/0.16)] sm:absolute sm:bottom-[calc(60px*var(--h))] sm:left-[calc(-10px*var(--h))] sm:mt-0">
            <span className="mb-2.5 block text-[11px] font-bold tracking-[0.14em] text-muted uppercase">
              {t("nearby.title")}
            </span>
            {/* The first row is the reader's own shop, so it is the one highlighted. */}
            <ul className="flex flex-col gap-2">
              {Object.entries(nearby.shops).map(([key, shop], i) => {
                const highlight = i === 0;
                return (
                  <li
                    key={key}
                    className={`flex items-center justify-between rounded-[10px] px-3 py-2.5 ${highlight ? "bg-peach" : "bg-lavender"}`}
                  >
                    <span
                      className={`text-[13.5px] text-ink ${highlight ? "font-semibold" : ""}`}
                    >
                      {shop.name}
                    </span>
                    <span
                      className={`text-[12px] ${highlight ? "font-semibold text-accent" : "text-muted"}`}
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
