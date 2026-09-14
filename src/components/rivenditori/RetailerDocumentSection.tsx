import Image from "next/image";

import { HighlightGrid } from "@/components/HighlightGrid";
import { retailerHighlights } from "@/lib/content-rivenditori";

export function RetailerDocumentSection() {
  return (
    <section className="bg-white gutter-x py-16 xl:py-25">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* `showcase-scale` (globals.css) sets `--s`, scaling the box and its contents together. */}
        <div className="showcase-scale flex justify-center">
          {/* Outer size = the design's 560 x 520 content box plus its 1px border. */}
          <div className="relative h-[calc(522px*var(--s))] w-[calc(562px*var(--s))] shrink-0 overflow-hidden rounded-3xl border border-[#e6e7fb] bg-lavender">
            <Image
              src="/mockups/web_home.png"
              alt="Home di ProteSì da browser con documento in preparazione"
              width={1427}
              height={1046}
              sizes="(min-width: 640px) 1000px, 600px"
              className="block h-auto w-[calc(1000px*var(--s))] max-w-none ml-[calc(-420px*var(--s))] mt-[calc(-300px*var(--s))]"
            />
            <Image
              src="/mockups/mockup_protesi_phone_2.png"
              alt="Home dell'app ProteSì"
              width={1478}
              height={2519}
              sizes="(min-width: 640px) 220px, 132px"
              className="absolute bottom-[calc(-90px*var(--s))] left-[calc(24px*var(--s))] block h-auto w-[calc(220px*var(--s))] max-w-none drop-shadow-[0_20px_40px_rgb(26_41_96/0.25)]"
            />
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-balance font-display text-[32px] leading-[1.08] font-bold tracking-[-0.025em] text-ink sm:text-[38px] xl:text-[46px]">
            Un documento chiaro fa risparmiare tempo a tutti.
          </h2>

          <p className="mb-8 max-w-[480px] text-pretty text-[17px] leading-[1.65] text-body">
            Il professionista lo compone da app o da browser e lo esporta in PDF o lo invia via
            email. Il paziente lo mostra a te: sai già cosa cercare a magazzino.
          </p>

          <HighlightGrid items={retailerHighlights} />
        </div>
      </div>
    </section>
  );
}
