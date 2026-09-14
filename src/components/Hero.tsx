import Image from "next/image";

import { SearchDemo } from "@/components/SearchDemo";
import { SignupCta } from "@/components/SignupCta";

/**
 * `--pm` scales the whole device cluster as one unit, so the three mockups
 * keep the exact proportions and overlaps of the 1440px design at every width.
 */
const PHONE_SCALE =
  "[--pm:0.7] md:[--pm:0.68] min-[900px]:[--pm:0.82] lg:[--pm:0.9] xl:[--pm:1]";

export function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-lavender text-center">
      <div className="mx-auto max-w-[1440px] gutter-x pt-12 sm:pt-16 xl:pt-20">
        <h1 className="mx-auto mb-5 max-w-[860px] text-balance font-display text-[38px] leading-[1.05] font-extrabold tracking-[-0.03em] text-ink sm:text-[48px] lg:text-[58px] xl:text-[66px]">
          Scrivi la patologia.
          <br />
          Ottieni l&apos;ausilio giusto.
        </h1>

        <p className="mx-auto mb-10 max-w-[600px] text-pretty text-[16px] leading-[1.6] text-body sm:text-[18px] xl:mb-11">
          La ricerca semantica di ProteSì attraversa i cataloghi di più aziende e ti
          restituisce prodotti, codici nomenclatore e il documento di consiglio da dare al
          paziente.
        </p>

        <SearchDemo />

        <div className="mb-14 flex flex-col items-center gap-3">
          <SignupCta />
          <p className="text-[13.5px] text-muted">
            Gratis per i professionisti sanitari.
          </p>
        </div>

        <div
          className={`mx-auto flex max-w-[1240px] items-end justify-center gap-[calc(16px*var(--pm))] ${PHONE_SCALE}`}
        >
          {/* Angled shot, cropped tight to the device — sized by height so it
              sits as a peer of the flat centre phone despite the taller silhouette.
              The extra right margin widens only this side of the cluster. */}
          <div className="hidden translate-y-[calc(34px*var(--pm))] mr-[calc(20px*var(--pm))] md:block">
            <Image
              src="/mockups/mockup_laterale_sinistra.png"
              alt="Risultati di ricerca in ProteSì"
              width={900}
              height={2234}
              sizes="(min-width: 1280px) 249px, 225px"
              priority
              className="h-auto w-[calc(249px*var(--pm))] max-w-none"
            />
          </div>

          <Image
            src="/mockups/mockup_protesi_phone_2.png"
            alt="Home di ProteSì con ricerca per categoria e aziende"
            width={1478}
            height={2519}
            sizes="(min-width: 1280px) 392px, (min-width: 768px) 355px, 280px"
            priority
            className="relative z-10 h-auto w-[calc(392px*var(--pm))] max-w-none"
          />

          {/* Window on the nomenclator screen. The five numbers below are the
              design's own crop values; `--rs` scales them together, so resizing
              shows the same crop rather than a different slice of the screen. */}
          <div className="relative hidden h-[calc(500px*var(--rs)*var(--pm))] w-[calc(240px*var(--rs)*var(--pm))] translate-y-[calc(10px*var(--pm))] overflow-hidden [--rs:1.21] md:block">
            <Image
              src="/mockups/mockup_laterale_3.png"
              alt="Ricerca nel nomenclatore in ProteSì"
              width={2000}
              height={1500}
              sizes="(min-width: 1280px) 1053px, 950px"
              className="h-auto w-[calc(870px*var(--rs)*var(--pm))] max-w-none ml-[calc(-310px*var(--rs)*var(--pm))] mt-[calc(-96px*var(--rs)*var(--pm))]"
            />
          </div>
        </div>

        <div className={`h-[calc(60px*var(--pm))] ${PHONE_SCALE}`} />
      </div>
    </section>
  );
}
