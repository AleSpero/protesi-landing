import Image from "next/image";

import { HighlightGrid } from "@/components/HighlightGrid";
import { documentHighlights } from "@/lib/content";

export function DocumentSection() {
  return (
    <section className="bg-white gutter-x pt-6 pb-20 xl:pb-25">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="flex justify-center [--dm:0.8] sm:[--dm:1]">
          {/* Window on the product-detail screen, cropped exactly as in the design. */}
          <div className="relative h-[calc(600px*var(--dm))] w-[calc(320px*var(--dm))] overflow-hidden">
            <Image
              src="/mockups/mockup_laterale_4.png"
              alt="Scheda di dettaglio di un ausilio in ProteSì"
              width={2000}
              height={1500}
              sizes="(min-width: 640px) 1000px, 800px"
              className="h-auto w-[calc(1000px*var(--dm))] max-w-none ml-[calc(-334px*var(--dm))] mt-[calc(-98px*var(--dm))]"
            />
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-balance font-display text-[32px] leading-[1.08] font-bold tracking-[-0.025em] text-ink sm:text-[38px] xl:text-[46px]">
            Il paziente esce con tutto scritto.
          </h2>

          <p className="mb-8 max-w-[480px] text-pretty text-[17px] leading-[1.65] text-body">
            Dalla scheda prodotto generi un documento con produttore, classificazione,
            indicazioni e codice prescrittivo quando presente. Chiaro per il paziente, utile
            per chi lo prenderà in carico.
          </p>

          <HighlightGrid items={documentHighlights} />
        </div>
      </div>
    </section>
  );
}
