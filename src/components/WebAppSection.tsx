import { useTranslations } from "next-intl";

import { BrowserFrame } from "@/components/BrowserFrame";

export function WebAppSection() {
  const t = useTranslations("home.webApp");

  return (
    <section className="bg-lavender gutter-x pt-16 pb-18 xl:pt-22 xl:pb-24">
      <div className="mx-auto max-w-[1160px] text-center">
        <h2 className="mx-auto mb-4.5 max-w-[760px] text-balance font-display text-[32px] leading-[1.08] font-bold tracking-[-0.025em] text-ink sm:text-[38px] xl:text-[46px]">
          {t("title")}
        </h2>

        <p className="mx-auto mb-10 max-w-[560px] text-pretty text-[17px] leading-[1.6] text-body xl:mb-13">
          {t("intro")}
        </p>

        <BrowserFrame
          url={t("browserUrl")}
          src="/mockups/web_home_hd.png"
          alt={t("imageAlt")}
          width={2400}
          height={1904}
          sizes="(min-width: 1288px) 1158px, 100vw"
        />
      </div>
    </section>
  );
}
