import Image from "next/image";
import { useTranslations } from "next-intl";

/** "Dimentica i ricettari cartacei": the PDF the professional hands the patient. */
export function PatientDocumentSection() {
  const t = useTranslations("home.patientDocument");

  return (
    <section className="bg-white gutter-x pt-4 pb-20 xl:pb-25">
      {/* The image column gets the larger share so the pages are big enough
          to be read. */}
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <h2 className="mb-5 text-balance font-display text-[32px] leading-[1.08] font-bold tracking-[-0.025em] text-ink sm:text-[38px] xl:text-[46px]">
            {t("title")}
          </h2>

          <p className="max-w-[480px] text-pretty text-[17px] leading-[1.65] text-body">
            {t("intro")}
          </p>
        </div>

        {/* The document's two pages, fanned: the shops page behind, the
            products page in front. Sizes and offsets are % of the box, which
            fills its column up to 660px, so the pair scales as one. */}
        <div className="flex justify-center">
          <div className="relative aspect-[660/740] w-full max-w-[660px]">
            <Image
              src="/mockups/documento_officine.png"
              alt={t("imageAlt.shops")}
              width={1656}
              height={2342}
              sizes="(min-width: 1024px) 430px, 65vw"
              quality={90}
              className="absolute top-0 right-0 block h-auto w-[65%] rotate-[3deg] rounded-md shadow-[0_20px_50px_rgb(26_41_96/0.14)] ring-1 ring-[#e6e7fb]"
            />
            <Image
              src="/mockups/documento_ausili.png"
              alt={t("imageAlt.products")}
              width={1656}
              height={2342}
              sizes="(min-width: 1024px) 430px, 65vw"
              quality={90}
              className="absolute bottom-0 left-0 block h-auto w-[65%] -rotate-[2deg] rounded-md shadow-[0_24px_60px_rgb(26_41_96/0.2)] ring-1 ring-[#e6e7fb]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
