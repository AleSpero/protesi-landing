type CheckListProps = {
  items: Record<string, string>;
  /** Spacing and type size come from the section using it. */
  className?: string;
};

/** A short list marked with checks instead of dashes, for light backgrounds. */
export function CheckList({ items, className = "" }: CheckListProps) {
  return (
    <ul className={`flex flex-col gap-3 ${className}`}>
      {Object.entries(items).map(([key, item]) => (
        <li key={key} className="flex items-start gap-2.5 text-charcoal">
          <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5 shrink-0">
            <circle cx="10" cy="10" r="10" className="fill-brand" />
            <path
              d="M6 10.4l2.6 2.6L14 7.6"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}
