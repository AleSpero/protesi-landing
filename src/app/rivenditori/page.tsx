import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { ContactSection } from "@/components/ContactSection";
import { EmailSignupCta } from "@/components/EmailSignupCta";
import { RetailerDocumentSection } from "@/components/rivenditori/RetailerDocumentSection";
import { RetailerHero } from "@/components/rivenditori/RetailerHero";
import { RetailerProfileSection } from "@/components/rivenditori/RetailerProfileSection";
import { RetailerSteps } from "@/components/rivenditori/RetailerSteps";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { retailerSignupHref, rivenditoriHref } from "@/lib/links";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("rivenditori.metadata");
  const title = t("title");
  const description = t("description");

  return {
    title,
    description,
    openGraph: { title, description, locale: "it_IT", type: "website", siteName: "ProteSì" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function RivenditoriPage() {
  const t = useTranslations("rivenditori");

  return (
    <div className="bg-white">
      <SiteHeader
        current={rivenditoriHref}
        signupLabel={t("header.signup")}
        signupLabelShort={t("header.signupShort")}
        signupHref={retailerSignupHref}
        background="white"
        signupTone="accent"
      />
      <main>
        <RetailerHero />
        <RetailerDocumentSection />
        <RetailerSteps />
        <RetailerProfileSection />
        <EmailSignupCta
          id="registrati"
          title={t("signup.title")}
          intro={t("signup.intro")}
          buttonLabel={t("signup.button")}
          accountType="selling_company"
          tone="accent"
        />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
