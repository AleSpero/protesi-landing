import { useMessages, useTranslations } from "next-intl";

import { AudienceSection } from "@/components/AudienceSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { NomenclatorSection } from "@/components/NomenclatorSection";
import { PatientDocumentSection } from "@/components/PatientDocumentSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WebAppSection } from "@/components/WebAppSection";

export default function Home() {
  const t = useTranslations("home");
  const { faqs } = useMessages().home;

  return (
    <div className="bg-white">
      <SiteHeader current="/" signupLabel={t("header.signup")} />
      <main>
        <Hero />
        <NomenclatorSection />
        <PatientDocumentSection />
        <WebAppSection />
        <AudienceSection />
        <FinalCta />
        <FaqSection items={faqs} />
      </main>
      <SiteFooter />
    </div>
  );
}
