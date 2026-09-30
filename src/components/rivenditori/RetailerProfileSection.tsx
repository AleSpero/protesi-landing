import Image from "next/image";
import { useMessages, useTranslations } from "next-intl";

export function RetailerProfileSection() {
  const t = useTranslations("rivenditori.profile");
  const { points } = useMessages().rivenditori.profile;

  return (
    <section className="bg-ink gutter-x py-16 xl:py-22">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="mb-5 text-balance font-display text-[32px] leading-[1.08] font-bold tracking-[-0.025em] text-white sm:text-[38px] xl:text-[46px]">
            {t("title")}
          </h2>

          <p className="mb-8 max-w-[480px] text-pretty text-[17px] leading-[1.65] text-white/74">
            {t("intro")}
          </p>

          <ul className="flex flex-col gap-3">
            {Object.entries(points).map(([key, point]) => (
              <li key={key} className="text-[15px] text-white/88">
                <span aria-hidden="true">— </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* The partner pop-up as the app shows it. */}
        <div className="flex justify-center">
          <Image
            src="/mockups/mockup_popup_pubblicita.png"
            alt={t("imageAlt")}
            width={1479}
            height={2521}
            sizes="(min-width: 1280px) 290px, (min-width: 640px) 270px, 230px"
            className="block h-auto w-[230px] sm:w-[270px] xl:w-[290px]"
          />
        </div>
      </div>
    </section>
  );
}
