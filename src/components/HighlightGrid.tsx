type HighlightGridProps = {
  items: readonly { title: string; body: string }[];
};

/** The 2 x 2 grid of small lavender cards that sits under a section's intro. */
export function HighlightGrid({ items }: HighlightGridProps) {
  return (
    <ul className="grid gap-3.5 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.title} className="rounded-2xl bg-lavender p-[22px]">
          <span className="mb-1.5 block text-[15px] font-semibold text-ink">{item.title}</span>
          <span className="text-[14px] leading-[1.5] text-body">{item.body}</span>
        </li>
      ))}
    </ul>
  );
}
