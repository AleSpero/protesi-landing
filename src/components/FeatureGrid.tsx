type FeatureGridProps = {
  items: Record<string, { title: string; body: string }>;
  /** Prefix each card with 01, 02, 03… */
  numbered?: boolean;
};

export function FeatureGrid({ items, numbered = false }: FeatureGridProps) {
  return (
    <section className="bg-white gutter-x py-16 xl:py-22">
      <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-3">
        {Object.entries(items).map(([key, feature], i) => (
          <article key={key} className="rounded-3xl bg-lavender p-7 xl:p-9">
            {numbered && (
              <span
                aria-hidden="true"
                className="mb-4 block font-display text-[13px] font-bold text-accent"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            )}
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
