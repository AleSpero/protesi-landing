import { features } from "@/lib/content";

export function FeatureGrid() {
  return (
    <section id="come-funziona" className="bg-white gutter-x py-16 xl:py-22">
      <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="rounded-3xl bg-lavender p-7 xl:p-9">
            <h3 className="mb-3 font-display text-[22px] font-bold text-ink">
              {feature.title}
            </h3>
            <p className="text-[15px] leading-[1.65] text-body">{feature.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
