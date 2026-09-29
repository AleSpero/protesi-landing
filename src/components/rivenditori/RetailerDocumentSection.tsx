import Image from "next/image";
import { useMessages, useTranslations } from "next-intl";

import { HighlightGrid } from "@/components/HighlightGrid";

/** Lavender, so it reads as its own band between the white hero and steps. */
export function RetailerDocumentSection() {
  const t = useTranslations("rivenditori.document");
  const { highlights } = useMessages().rivenditori.document;

  return (
    <section className="bg-lavender gutter-x py-16 xl:py-25">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* `showcase-scale` (globals.css) sets `--s`, scaling the box and its contents together. */}
        <div className="showcase-scale flex justify-center">
          {/* Outer size = the design's 560 x 520 content box plus its 1px border.
              The document's shops page sits behind; the app's multi-selection in front. */}
          <div className="relative h-[calc(522px*var(--s))] w-[calc(562px*var(--s))] shrink-0 overflow-hidden rounded-3xl border border-[#e6e7fb] bg-lavender-deep">
            <Image
              src="/mockups/documento_officine.png"
              alt={t("imageAlt.document")}
              width={1656}
              height={2342}
              sizes="(min-width: 640px) 380px, 228px"
              quality={90}
              className="absolute top-[calc(20px*var(--s))] right-[calc(28px*var(--s))] block h-auto w-[calc(380px*var(--s))] max-w-none rounded-md shadow-[0_20px_40px_rgb(26_41_96/0.18)] ring-1 ring-[#e6e7fb]"
            />
            <Image
              src="/mockups/mockup_protesi_phone_3.png"
              alt={t("imageAlt.app")}
              width={1000}
              height={1704}
              sizes="(min-width: 640px) 230px, 138px"
              className="absolute bottom-[calc(-70px*var(--s))] left-[calc(30px*var(--s))] block h-auto w-[calc(230px*var(--s))] max-w-none drop-shadow-[0_20px_40px_rgb(26_41_96/0.25)]"
            />
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-balance font-display text-[32px] leading-[1.08] font-bold tracking-[-0.025em] text-ink sm:text-[38px] xl:text-[46px]">
            {t("title")}
          </h2>

          <p className="mb-8 max-w-[480px] text-pretty text-[17px] leading-[1.65] text-body">
            {t("intro")}
          </p>

          <HighlightGrid items={highlights} tone="white" />
        </div>
      </div>
    </section>
  );
}
