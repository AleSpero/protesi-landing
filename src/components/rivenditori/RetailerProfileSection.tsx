import Image from "next/image";

import { profilePoints } from "@/lib/content-rivenditori";

/** `--r` scales the two-phone cluster as one unit so it fits its column. */
const CLUSTER_SCALE = "[--r:0.6] sm:[--r:1] lg:[--r:0.78] xl:[--r:1]";

export function RetailerProfileSection() {
  return (
    <section className="bg-ink gutter-x py-16 xl:py-22">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="mb-5 text-balance font-display text-[32px] leading-[1.08] font-bold tracking-[-0.025em] text-white sm:text-[38px] xl:text-[46px]">
            Ti presenti prima che il paziente entri.
          </h2>

          <p className="mb-8 max-w-[480px] text-pretty text-[17px] leading-[1.65] text-white/74">
            Compili la scheda una volta: indirizzo, orari, contatti, marchi trattati e servizi
            (su misura, convenzione ASL, consegna a domicilio). Noi la mostriamo ogni volta che
            un consiglio riguarda la tua zona.
          </p>

          <ul className="flex flex-col gap-3">
            {profilePoints.map((point) => (
              <li key={point} className="text-[15px] text-white/88">
                <span aria-hidden="true">— </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className={`flex items-end justify-center gap-[calc(16px*var(--r))] ${CLUSTER_SCALE}`}>
          <Image
            src="/mockups/mockup_protesi_phone_3.png"
            alt="Risultati di ricerca nell'app ProteSì"
            width={1000}
            height={1704}
            sizes="(min-width: 640px) 250px, 150px"
            className="block h-auto w-[calc(250px*var(--r))] max-w-none translate-y-[calc(30px*var(--r))]"
          />
          {/* Window on the product-detail screen, cropped as in the design. */}
          <div className="relative h-[calc(520px*var(--r))] w-[calc(250px*var(--r))] shrink-0 overflow-hidden">
            <Image
              src="/mockups/mockup_laterale_4.png"
              alt="Scheda prodotto nell'app ProteSì"
              width={2000}
              height={1500}
              sizes="(min-width: 640px) 780px, 470px"
              className="block h-auto w-[calc(780px*var(--r))] max-w-none ml-[calc(-262px*var(--r))] mt-[calc(-76px*var(--r))]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
