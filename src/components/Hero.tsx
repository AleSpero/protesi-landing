import { useMessages, useTranslations } from "next-intl";

import { PhoneCluster } from "@/components/PhoneCluster";
import { SearchDemo } from "@/components/SearchDemo";

export function Hero() {
  const t = useTranslations("home.hero");
  const { search } = useMessages().home.hero;

  return (
    <section id="top" className="overflow-hidden bg-lavender text-center">
      <div className="mx-auto max-w-[1440px] gutter-x pt-12 sm:pt-16 xl:pt-20">
        <h1 className="mx-auto mb-5 max-w-[860px] text-balance font-display text-[38px] leading-[1.05] font-extrabold tracking-[-0.03em] text-ink sm:text-[48px] lg:text-[58px] xl:text-[66px]">
          {t.rich("title", { br: () => <br /> })}
        </h1>

        <p className="mx-auto mb-10 max-w-[600px] text-pretty text-[16px] leading-[1.6] text-body sm:text-[18px] xl:mb-11">
          {t("intro")}
        </p>

        {/* The search field is itself the way into signup, so the hero has no
            separate signup button. */}
        <SearchDemo content={search} />

        <p className="-mt-3 mb-14 text-[13.5px] text-muted">{t("signupNote")}</p>

        <PhoneCluster />
      </div>
    </section>
  );
}
