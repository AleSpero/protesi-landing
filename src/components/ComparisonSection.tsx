import { comparison } from "@/lib/content";

export type ComparisonData = {
  protesi: { title: string; points: readonly string[] };
  alternatives: readonly { title: string; points: readonly string[] }[];
};

type ComparisonSectionProps = {
  title?: string;
  intro?: string;
  data?: ComparisonData;
};

export function ComparisonSection({
  title = "Quello che oggi fai in tre posti, in uno solo.",
  intro = "Nomenclatore, cataloghi dei produttori e foglietto per il paziente: ProteSì li mette nella stessa ricerca.",
  data = comparison,
}: ComparisonSectionProps) {
  const { protesi, alternatives } = data;

  return (
    <section className="bg-white gutter-x py-16 xl:py-25">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 text-center xl:mb-13">
          <h2 className="mx-auto mb-4 max-w-[760px] text-balance font-display text-[32px] leading-[1.08] font-bold tracking-[-0.025em] text-ink sm:text-[38px] xl:text-[46px]">
            {title}
          </h2>
          <p className="mx-auto max-w-[560px] text-pretty text-[17px] leading-[1.6] text-body">
            {intro}
          </p>
        </div>

        {/* Tablet: ProteSì spans the row above the two alternatives. */}
        <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-[1.15fr_1fr_1fr]">
          <article className="rounded-3xl bg-ink p-7 shadow-[0_24px_60px_rgb(26_41_96/0.22)] md:col-span-2 lg:col-span-1 xl:p-9">
            <h3 className="mb-6 font-display text-[24px] font-extrabold text-white">
              {protesi.title}
            </h3>
            <ul className="flex flex-col gap-4">
              {protesi.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-accent text-[13px] leading-none font-bold text-white"
                  >
                    ✓
                  </span>
                  <span className="text-[15px] leading-[1.5] text-white">{point}</span>
                </li>
              ))}
            </ul>
          </article>

          {alternatives.map((alt) => (
            <article key={alt.title} className="rounded-3xl bg-lavender p-7 xl:p-9">
              <h3 className="mb-6 font-display text-[20px] font-bold text-ink">{alt.title}</h3>
              <ul className="flex flex-col gap-4">
                {alt.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-lavender-deep text-[13px] leading-none font-bold text-muted"
                    >
                      –
                    </span>
                    <span className="text-[15px] leading-[1.5] text-body">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
