"use client";

import { useEffect, useState } from "react";

import { districts, heroQueries, heroQueryInterval, signupHref } from "@/lib/content";

/**
 * Replica of the in-app search field, cycling through example queries to show
 * the kind of language ProteSì understands. It is not a working search: the
 * whole field is a link into signup.
 *
 * Everything inside the link is `aria-hidden` and the link carries its own
 * label, otherwise its accessible name would change every few seconds as the
 * example query rotates.
 */
export function SearchDemo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % heroQueries.length),
      heroQueryInterval,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      <a
        href={signupHref}
        aria-label="Crea un account per cercare in ProteSì"
        className="group mx-auto mb-5 flex max-w-[811px] items-center gap-3 rounded-[20px] border-[1.5px] border-periwinkle bg-white px-4 py-4 text-left shadow-search transition-colors hover:border-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:gap-[18px] sm:px-6 sm:py-5"
      >
        <span
          aria-hidden="true"
          className="block size-[22px] shrink-0 rounded-full border-2 border-brand"
        />
        {/* Below `sm` the longest queries need two lines; the fixed min-height
            keeps the field from resizing as the examples rotate. */}
        <span
          aria-hidden="true"
          className="line-clamp-2 min-h-[39px] min-w-0 flex-1 text-[15px] leading-[1.3] font-medium text-ink sm:line-clamp-none sm:min-h-0 sm:truncate sm:text-[20px] sm:leading-normal"
        >
          {heroQueries[index]}
        </span>
        <span
          aria-hidden="true"
          className="block h-[26px] w-0.5 shrink-0 animate-caret bg-accent"
        />
        <span
          aria-hidden="true"
          className="shrink-0 whitespace-nowrap rounded-[12px] bg-brand px-4 py-2.5 text-[13px] font-semibold text-white transition-colors group-hover:bg-brand-strong sm:px-[22px] sm:py-3 sm:text-[14px]"
        >
          Cerca
        </span>
      </a>

      <div className="mb-9 flex flex-wrap items-center justify-center gap-2.5">
        <span className="py-2 text-[13px] text-muted">Filtra per distretto:</span>
        {districts.map((district) => (
          <span
            key={district.label}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-[13.5px] font-medium text-ink ${district.className}`}
          >
            {district.label}
          </span>
        ))}
      </div>
    </>
  );
}
