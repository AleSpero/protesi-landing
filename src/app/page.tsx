import { AudienceSection } from "@/components/AudienceSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { DocumentSection } from "@/components/DocumentSection";
import { FaqSection } from "@/components/FaqSection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WebAppSection } from "@/components/WebAppSection";

export default function Home() {
  return (
    <div className="bg-white">
      <SiteHeader current="/" />
      <main>
        <Hero />
        <FeatureGrid id="come-funziona" />
        <DocumentSection />
        <WebAppSection />
        <AudienceSection />
        <ComparisonSection />
        <FinalCta />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  );
}
