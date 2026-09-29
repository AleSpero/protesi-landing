import { useTranslations } from "next-intl";

import { SignupCta } from "@/components/SignupCta";
import { loginHref } from "@/lib/links";

export function FinalCta() {
  const t = useTranslations("home.finalCta");

  return (
    <section id="iscriviti" className="bg-lavender gutter-x py-16 text-center xl:py-22">
      <h2 className="mx-auto mb-4.5 max-w-[700px] text-balance font-display text-[34px] leading-[1.06] font-extrabold tracking-[-0.025em] text-ink sm:text-[42px] xl:text-[50px]">
        {t("title")}
      </h2>

      <p className="mx-auto mb-9 max-w-[520px] text-[17px] leading-[1.6] text-body">
        {t("intro")}
      </p>

      <SignupCta />

      <p className="mt-3.5 text-[13px] text-muted">
        {t.rich("login", {
          login: (chunks) => (
            <a href={loginHref} className="text-brand transition-colors hover:text-accent">
              {chunks}
            </a>
          ),
        })}
      </p>
    </section>
  );
}
