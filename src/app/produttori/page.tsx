import type { Metadata } from "next";

import { ComparisonSection } from "@/components/ComparisonSection";
import { EmailSignupCta } from "@/components/EmailSignupCta";
import { FaqSection } from "@/components/FaqSection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { HomeLogoSection } from "@/components/produttori/HomeLogoSection";
import { OnboardingSteps } from "@/components/produttori/OnboardingSteps";
import { ProducerDetailSection } from "@/components/produttori/ProducerDetailSection";
import { ProducerHero } from "@/components/produttori/ProducerHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { produttoriHref } from "@/lib/content";
import {
  producerComparison,
  producerFaqs,
  producerFeatures,
  producerSignupHref,
} from "@/lib/content-produttori";

const title = "ProteSì per i produttori — Il tuo catalogo, dove il medico prescrive";
const description =
  "ProteSì mostra i tuoi prodotti nel momento in cui il professionista cerca una soluzione per il paziente: per patologia, distretto o codice. Su iOS, Android e web.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, locale: "it_IT", type: "website", siteName: "ProteSì" },
  twitter: { card: "summary_large_image", title, description },
};

export default function ProduttoriPage() {
  return (
    <div className="bg-white">
      <SiteHeader
        current={produttoriHref}
        signupLabel="Registrati ora"
        signupHref={producerSignupHref}
      />
      <main>
        <ProducerHero />
        <FeatureGrid items={producerFeatures} />
        <ProducerDetailSection />
        <OnboardingSteps />
        <HomeLogoSection />
        <ComparisonSection
          title="Tre modi per farsi trovare. Uno funziona in visita."
          intro="Il professionista decide in pochi minuti, con il paziente davanti. Conta chi è presente in quel momento."
          data={producerComparison}
        />
        <EmailSignupCta
          id="registrati"
          title="Porta il tuo catalogo in ProteSì."
          intro="Registra la tua azienda e carica il catalogo: dalla pubblicazione i tuoi prodotti sono in ricerca."
          buttonLabel="Registrati ora"
          accountType="product_company"
        />
        <FaqSection items={producerFaqs} />
      </main>
      <SiteFooter />
    </div>
  );
}
