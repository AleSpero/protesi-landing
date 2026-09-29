import { useMessages, useTranslations } from "next-intl";

import { AudienceSection } from "@/components/AudienceSection";
import { DocumentSection } from "@/components/DocumentSection";
import { FaqSection } from "@/components/FaqSection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WebAppSection } from "@/components/WebAppSection";

export default function Home() {
  const t = useTranslations("home");
  const { features, faqs } = useMessages().home;

  return (
    <div className="bg-white">
      <SiteHeader current="/" signupLabel={t("header.signup")} />
      <main>
        <Hero />
        <FeatureGrid id="come-funziona" items={features} />
        <DocumentSection />
        <WebAppSection />
        <AudienceSection />
        <FinalCta />
        <FaqSection items={faqs} />
      </main>
      <SiteFooter />
    </div>
  );
}
