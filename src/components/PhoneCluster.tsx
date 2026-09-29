import Image from "next/image";
import { useTranslations } from "next-intl";

/**
 * `--pm` scales the whole device cluster as one unit, so the three mockups
 * keep the exact proportions and overlaps of the 1440px design at every width.
 */
const PHONE_SCALE =
  "[--pm:0.7] md:[--pm:0.68] min-[900px]:[--pm:0.82] lg:[--pm:0.9] xl:[--pm:1]";

/** The three-device cluster that closes the professionals' and producers'
 *  heroes. Sits inside the hero's centred 1440px container. */
export function PhoneCluster() {
  const t = useTranslations("common.phones.imageAlt");

  return (
    <>
      <div
        className={`mx-auto flex max-w-[1240px] items-end justify-center gap-[calc(16px*var(--pm))] ${PHONE_SCALE}`}
      >
        {/* Angled shot, cropped tight to the device — sized by height so it
            sits as a peer of the flat centre phone despite the taller silhouette.
            The extra right margin widens only this side of the cluster. */}
        <div className="hidden translate-y-[calc(34px*var(--pm))] mr-[calc(20px*var(--pm))] md:block">
          <Image
            src="/mockups/mockup_laterale_sinistra.png"
            alt={t("results")}
            width={900}
            height={2234}
            sizes="(min-width: 1280px) 249px, 225px"
            priority
            className="h-auto w-[calc(249px*var(--pm))] max-w-none"
          />
        </div>

        <Image
          src="/mockups/mockup_protesi_home.png"
          alt={t("home")}
          width={1479}
          height={2521}
          sizes="(min-width: 1280px) 392px, (min-width: 768px) 355px, 280px"
          priority
          className="relative z-10 h-auto w-[calc(392px*var(--pm))] max-w-none"
        />

        {/* Window on the nomenclator screen. The five numbers below are the
            design's own crop values; `--rs` scales them together, so resizing
            shows the same crop rather than a different slice of the screen. */}
        <div className="relative hidden h-[calc(500px*var(--rs)*var(--pm))] w-[calc(240px*var(--rs)*var(--pm))] translate-y-[calc(10px*var(--pm))] overflow-hidden [--rs:1.21] md:block">
          <Image
            src="/mockups/mockup_laterale_3.png"
            alt={t("nomenclator")}
            width={2000}
            height={1500}
            sizes="(min-width: 1280px) 1053px, 950px"
            className="h-auto w-[calc(870px*var(--rs)*var(--pm))] max-w-none ml-[calc(-310px*var(--rs)*var(--pm))] mt-[calc(-96px*var(--rs)*var(--pm))]"
          />
        </div>
      </div>

      <div className={`h-[calc(60px*var(--pm))] ${PHONE_SCALE}`} />
    </>
  );
}
