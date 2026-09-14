import type { Metadata } from "next";

import { ComparisonSection } from "@/components/ComparisonSection";
import { EmailSignupCta } from "@/components/EmailSignupCta";
import { FaqSection } from "@/components/FaqSection";
import { RetailerDocumentSection } from "@/components/rivenditori/RetailerDocumentSection";
import { RetailerHero } from "@/components/rivenditori/RetailerHero";
import { RetailerProfileSection } from "@/components/rivenditori/RetailerProfileSection";
import { RetailerSteps } from "@/components/rivenditori/RetailerSteps";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { rivenditoriHref } from "@/lib/content";
import {
  retailerComparison,
  retailerFaqs,
  retailerSignupHref,
} from "@/lib/content-rivenditori";

const title = "ProteSì per i rivenditori — Il paziente arriva da te con il consiglio in mano";
const description =
  "Quando il professionista consiglia un'ortesi, ProteSì indica nel documento le officine più vicine al comune del paziente. Se sei registrato, sei tra quelle.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, locale: "it_IT", type: "website", siteName: "ProteSì" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RivenditoriPage() {
  return (
    <div className="bg-white">
      <SiteHeader
        current={rivenditoriHref}
        signupLabel="Registra la tua officina"
        signupLabelShort="Registrati"
        signupHref={retailerSignupHref}
        background="white"
        signupTone="accent"
      />
      <main>
        <RetailerHero />
        <RetailerSteps />
        <RetailerDocumentSection />
        <RetailerProfileSection />
        <ComparisonSection
          title="Il paziente sceglie dove andare nei dieci minuti dopo la visita."
          intro="La maggior parte delle ortesi si acquista lo stesso giorno della prescrizione. Conta chi c'è scritto sul documento."
          data={retailerComparison}
        />
        <EmailSignupCta
          id="registrati"
          title="Fatti trovare dal prossimo paziente."
          intro="Registra la tua officina in dieci minuti: dal primo consiglio nella tua zona sei già nel documento."
          buttonLabel="Registra la tua officina"
          action={retailerSignupHref}
          tone="accent"
        />
        <FaqSection items={retailerFaqs} />
      </main>
      <SiteFooter />
    </div>
  );
}
