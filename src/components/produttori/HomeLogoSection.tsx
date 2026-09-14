import Image from "next/image";

import { homeLogoPoints } from "@/lib/content-produttori";

export function HomeLogoSection() {
  return (
    <section className="bg-white gutter-x py-16 xl:py-25">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="showcase-scale flex justify-center">
          {/* Outer size = the design's content box plus its 1px border. */}
          <div className="relative h-[calc(522px*var(--s))] w-[calc(562px*var(--s))] shrink-0 overflow-hidden rounded-3xl border border-[#e6e7fb] bg-lavender">
            <Image
              src="/mockups/mockup_protesi_phone_2.png"
              alt="Home dell'app ProteSì con la sezione Aziende"
              width={1478}
              height={2519}
              sizes="(min-width: 640px) 540px, 330px"
              className="absolute bottom-0 left-1/2 block h-auto w-[calc(540px*var(--s))] max-w-none -translate-x-1/2"
            />
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-balance font-display text-[32px] leading-[1.08] font-bold tracking-[-0.025em] text-ink sm:text-[38px] xl:text-[46px]">
            Il tuo logo in home, ogni giorno.
          </h2>

          <p className="mb-7 max-w-[480px] text-pretty text-[17px] leading-[1.65] text-body">
            Le aziende partner compaiono nella home di ogni professionista. Un tap sul logo apre
            il tuo catalogo completo, filtrato per te.
          </p>

          <ul className="flex flex-col gap-3">
            {homeLogoPoints.map((point) => (
              <li key={point} className="text-[15px] text-charcoal">
                <span aria-hidden="true">— </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
