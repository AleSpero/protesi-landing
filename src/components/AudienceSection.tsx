import { clinicianBenefits, signupHref, storeBadges } from "@/lib/content";

export function AudienceSection() {
  return (
    <section className="bg-ink gutter-x py-16 xl:py-20">
      <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-periwinkle/28 bg-white/6 p-8 xl:p-11">
          <h3 className="mb-3.5 font-display text-[26px] leading-[1.14] font-bold text-white xl:text-[32px]">
            Gratis, sul telefono e da browser
          </h3>

          <p className="mb-7 text-[15.5px] leading-[1.65] text-white/74">
            Scarica l&apos;app su iOS o Android, oppure usa ProteSì dal web durante la
            visita.
          </p>

          <div className="mb-7 flex flex-wrap gap-3">
            {storeBadges.map((badge) => (
              <span
                key={badge}
                className="whitespace-nowrap rounded-[10px] border border-white/30 px-[18px] py-[11px] text-[13px] font-semibold text-white"
              >
                {badge}
              </span>
            ))}
          </div>

          <a
            href={signupHref}
            className="inline-block rounded-[12px] bg-white px-7 py-[15px] text-[15px] font-semibold whitespace-nowrap text-[#101010] transition-colors hover:bg-lavender-deep"
          >
            Iscriviti e inizia
          </a>
        </article>

        <article className="rounded-3xl bg-lavender-deep p-8 xl:p-11">
          <h3 className="mb-3.5 font-display text-[26px] leading-[1.14] font-bold text-ink xl:text-[32px]">
            Pensato per chi visita
          </h3>

          <p className="mb-7 text-[15.5px] leading-[1.65] text-body">
            Medici, fisiatri, fisioterapisti e tecnici ortopedici: un account solo, gli stessi
            preferiti e lo stesso documento su ogni dispositivo.
          </p>

          <ul className="mb-7 flex flex-col gap-3">
            {clinicianBenefits.map((benefit) => (
              <li key={benefit} className="text-[14.5px] text-charcoal">
                <span aria-hidden="true">— </span>
                {benefit}
              </li>
            ))}
          </ul>

          <a
            href="#come-funziona"
            className="inline-block rounded-[12px] bg-brand px-7 py-[15px] text-[15px] font-semibold whitespace-nowrap text-white transition-colors hover:bg-brand-strong"
          >
            Scopri come funziona
          </a>
        </article>
      </div>
    </section>
  );
}
