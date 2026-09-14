import { BrowserFrame } from "@/components/BrowserFrame";
import { producerSignupHref } from "@/lib/content-produttori";

export function ProducerHero() {
  return (
    <section id="top" className="bg-lavender gutter-x pt-12 pb-16 text-center sm:pt-16 xl:pt-20 xl:pb-24">
      <h1 className="mx-auto mb-5 max-w-[900px] text-balance font-display text-[38px] leading-[1.05] font-extrabold tracking-[-0.03em] text-ink sm:text-[48px] lg:text-[58px] xl:text-[66px]">
        Il tuo catalogo, dove il medico prescrive.
      </h1>

      <p className="mx-auto mb-10 max-w-[640px] text-pretty text-[16px] leading-[1.6] text-body sm:text-[18px]">
        ProteSì mostra i tuoi prodotti nel momento in cui il professionista cerca una soluzione
        per il paziente: per patologia, distretto o codice. Su iOS, Android e web.
      </p>

      <div className="mb-16 flex flex-wrap justify-center gap-3.5">
        <a
          href={producerSignupHref}
          className="inline-block rounded-[12px] bg-brand px-8 py-4 text-[16px] font-semibold whitespace-nowrap text-white transition-colors hover:bg-brand-strong"
        >
          Registrati ora
        </a>
        <a
          href="#come-funziona"
          className="inline-block rounded-[12px] border-[1.5px] border-periwinkle bg-white px-8 py-4 text-[16px] font-semibold whitespace-nowrap text-ink transition-colors hover:border-brand"
        >
          Come funziona
        </a>
      </div>

      <div className="relative mx-auto max-w-[1160px]">
        <BrowserFrame
          url="app.protesi.it/ricerca?q=collare+cervicale"
          src="/mockups/web_search.png"
          alt="Risultati di ricerca ProteSì da browser con filtro per brand"
          width={1436}
          height={1054}
          sizes="(min-width: 1288px) 1158px, 100vw"
          priority
        />

        {/* Overhangs the frame's corner from `md` up; below that the 40px
            overhang would poke past the gutter, so it drops under the frame. */}
        <div className="mt-4 inline-block rounded-2xl bg-ink px-[22px] py-[18px] text-left text-white shadow-[0_18px_40px_rgb(26_41_96/0.3)] md:absolute md:-right-10 md:-bottom-[30px] md:mt-0">
          <span className="mb-1.5 block text-[11px] font-bold tracking-[0.14em] text-periwinkle uppercase">
            Filtro brand
          </span>
          <span className="block font-display text-[20px] font-bold">
            I tuoi prodotti, isolati con un tap
          </span>
        </div>
      </div>
    </section>
  );
}
