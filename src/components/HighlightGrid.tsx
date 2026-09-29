type HighlightGridProps = {
  /** A card without a `body` shows its title alone. */
  items: Record<string, { title: string; body?: string }>;
  /** Card colour; white for sections that are lavender themselves. */
  tone?: "lavender" | "white";
};

/** The 2 x 2 grid of small cards that sits under a section's intro. */
export function HighlightGrid({ items, tone = "lavender" }: HighlightGridProps) {
  return (
    <ul className="grid gap-3.5 sm:grid-cols-2">
      {Object.entries(items).map(([key, item]) => (
        <li
          key={key}
          className={`rounded-2xl p-[22px] ${tone === "white" ? "bg-white" : "bg-lavender"}`}
        >
          <span className="block text-[15px] font-semibold text-ink">{item.title}</span>
          {item.body && (
            <span className="mt-1.5 block text-[14px] leading-[1.5] text-body">{item.body}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
