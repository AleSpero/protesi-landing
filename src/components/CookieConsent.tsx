import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

import { CookieConsentClient } from "@/components/CookieConsentClient";
import { cookiePolicyHref, privacyHref } from "@/lib/links";

const LINK = "font-medium text-brand underline underline-offset-2 transition-colors hover:text-accent";

/* Server half of the cookie banner: reads the copy, so the messages never
   ship to the browser, and hands it to the client half. */
export function CookieConsent() {
  const t = useTranslations("common.cookieConsent");
  const link = (href: string) =>
    function Link(chunks: ReactNode) {
      return (
        <a href={href} className={LINK}>
          {chunks}
        </a>
      );
    };

  return (
    <CookieConsentClient
      copy={{
        banner: {
          label: t("banner.label"),
          title: t("banner.title"),
          text: t.rich("banner.text", { link: link(cookiePolicyHref) }),
          reject: t("banner.reject"),
          accept: t("banner.accept"),
          customize: t("banner.customize"),
          close: t("banner.close"),
        },
        preferences: {
          title: t("preferences.title"),
          intro: t("preferences.intro"),
          close: t("preferences.close"),
          necessaryTitle: t("preferences.necessary.title"),
          necessaryStatus: t("preferences.necessary.status"),
          necessaryText: t("preferences.necessary.text"),
          statisticsTitle: t("preferences.statistics.title"),
          statisticsText: t("preferences.statistics.text"),
          rejectAll: t("preferences.rejectAll"),
          save: t("preferences.save"),
          acceptAll: t("preferences.acceptAll"),
          more: t.rich("preferences.more", {
            cookie: link(cookiePolicyHref),
            privacy: link(privacyHref),
          }),
        },
      }}
    />
  );
}
