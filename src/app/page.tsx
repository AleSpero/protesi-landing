import { AudienceSection } from "@/components/AudienceSection";
import { DocumentSection } from "@/components/DocumentSection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <main>
        <Hero />
        <FeatureGrid />
        <DocumentSection />
        <AudienceSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
