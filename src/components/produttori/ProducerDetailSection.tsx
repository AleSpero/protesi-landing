import Image from "next/image";

import { HighlightGrid } from "@/components/HighlightGrid";
import { producerHighlights } from "@/lib/content-produttori";

export function ProducerDetailSection() {
  return (
    <section className="bg-white gutter-x pt-6 pb-20 xl:pb-25">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="mb-5 text-balance font-display text-[32px] leading-[1.08] font-bold tracking-[-0.025em] text-ink sm:text-[38px] xl:text-[46px]">
            Il produttore è in evidenza in ogni scheda.
          </h2>

          <p className="mb-8 max-w-[480px] text-pretty text-[17px] leading-[1.65] text-body">
            Nome commerciale, produttore e classificazione sono le prime informazioni che il
            professionista legge. Le alternative dello stesso ISO restano nel tuo catalogo
            quando hai più varianti.
          </p>

          <HighlightGrid items={producerHighlights} />
        </div>

        {/* `showcase-scale` (globals.css) sets `--s`, scaling the box and its contents together. */}
        <div className="showcase-scale flex justify-center">
          {/* 562 = the design's 560 content box plus its 1px border; shrink-0
              keeps it from being squeezed to the 560px column like the design. */}
          <div className="relative size-[calc(562px*var(--s))] shrink-0 overflow-hidden rounded-3xl border border-[#e6e7fb] bg-lavender">
            <Image
              src="/mockups/web_detail.png"
              alt="Scheda prodotto ProteSì da browser con produttore in evidenza"
              width={1430}
              height={1045}
              sizes="(min-width: 640px) 900px, 540px"
              className="block h-auto w-[calc(900px*var(--s))] max-w-none ml-[calc(-40px*var(--s))]"
            />
            <Image
              src="/mockups/mockup_flat_1.png"
              alt="Scheda prodotto nell'app ProteSì"
              width={920}
              height={1568}
              sizes="(min-width: 640px) 230px, 140px"
              className="absolute bottom-[calc(-60px*var(--s))] left-[calc(60px*var(--s))] block h-auto w-[calc(230px*var(--s))] max-w-none drop-shadow-[0_20px_40px_rgb(26_41_96/0.25)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
