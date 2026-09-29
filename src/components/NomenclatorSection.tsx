import Image from "next/image";
import { useTranslations } from "next-intl";

/** The first section under the hero, so it is also where "Scopri come funziona"
 *  lands (`#come-funziona`). */
export function NomenclatorSection() {
  const t = useTranslations("home.nomenclator");

  return (
    <section id="come-funziona" className="scroll-mt-4 bg-white gutter-x pt-16 pb-12 xl:pt-25 xl:pb-16">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left-aligned from `sm` to `xl`: centred there, the callout would
            run past the gutter (single column) or into the text beside it. */}
        <div className="flex justify-center sm:justify-start xl:justify-center">
          {/* The ring, connector and callout are placed in % of the phone
              image, on its first "✓ MMG" (62–71% across, 42% down), so they
              stay on it at every size. The callout floats beside the phone
              from `sm` up and drops under it on phones. */}
          <div className="relative flex w-[325px] max-w-full flex-col items-center sm:block sm:w-[377px] lg:w-[310px] xl:w-[390px]">
            <div className="relative w-full">
              <Image
                src="/mockups/home_nomenclatore.png"
                alt={t("imageAlt")}
                width={1479}
                height={2521}
                sizes="(min-width: 1280px) 390px, (min-width: 1024px) 310px, (min-width: 640px) 377px, 325px"
                className="block h-auto w-full"
              />
              <span
                aria-hidden="true"
                className="absolute top-[41%] left-[61.4%] h-[2.8%] w-[10.4%] rounded-full ring-2 ring-success"
              />
              <span
                aria-hidden="true"
                className="absolute top-[42.4%] left-[71.8%] hidden h-0.5 w-[6.2%] bg-success sm:block"
              />
            </div>

            <div className="mt-4 flex w-[232px] items-center gap-3 rounded-2xl border border-[#dde0ff] bg-white px-4 py-3.5 text-left shadow-[0_18px_44px_rgb(26_41_96/0.16)] sm:absolute sm:top-[42.4%] sm:left-[78%] sm:mt-0 sm:-translate-y-1/2">
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-success/12"
              >
                <svg viewBox="0 0 20 20" className="size-5">
                  <path
                    d="M5 10.4l3.2 3.2L15 6.8"
                    fill="none"
                    className="stroke-success"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>
                <span className="mb-0.5 block text-[11px] font-bold tracking-[0.14em] text-success uppercase">
                  {t("badge.label")}
                </span>
                <span className="block text-[13.5px] leading-[1.35] font-semibold text-ink">
                  {t("badge.text")}
                </span>
              </span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-balance font-display text-[32px] leading-[1.08] font-bold tracking-[-0.025em] text-ink sm:text-[38px] xl:text-[46px]">
            {t("title")}
          </h2>

          <div className="flex max-w-[480px] flex-col gap-4 text-pretty text-[17px] leading-[1.65] text-body">
            <p>{t("intro")}</p>
            <p>
              {t.rich("mmg", {
                b: (chunks) => <strong className="font-semibold text-ink">{chunks}</strong>,
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
