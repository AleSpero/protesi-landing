import type { Metadata } from "next";
import { useMessages, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { EmailSignupCta } from "@/components/EmailSignupCta";
import { FaqSection } from "@/components/FaqSection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { HomeLogoSection } from "@/components/produttori/HomeLogoSection";
import { OnboardingSteps } from "@/components/produttori/OnboardingSteps";
import { ProducerDetailSection } from "@/components/produttori/ProducerDetailSection";
import { ProducerHero } from "@/components/produttori/ProducerHero";
import { ProducerSearchSection } from "@/components/produttori/ProducerSearchSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { producerSignupHref, produttoriHref } from "@/lib/links";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("produttori.metadata");
  const title = t("title");
  const description = t("description");

  return {
    title,
    description,
    openGraph: { title, description, locale: "it_IT", type: "website", siteName: "ProteSì" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function ProduttoriPage() {
  const t = useTranslations("produttori");
  const { features, faqs } = useMessages().produttori;

  return (
    <div className="bg-white">
      <SiteHeader
        current={produttoriHref}
        signupLabel={t("header.signup")}
        signupHref={producerSignupHref}
      />
      <main>
        <ProducerHero />
        <ProducerSearchSection />
        <FeatureGrid items={features} numbered />
        <ProducerDetailSection />
        <OnboardingSteps />
        <HomeLogoSection />
        <EmailSignupCta
          id="registrati"
          title={t("signup.title")}
          intro={t("signup.intro")}
          buttonLabel={t("signup.button")}
          accountType="product_company"
        />
        <FaqSection items={faqs} />
      </main>
      <SiteFooter />
    </div>
  );
}
