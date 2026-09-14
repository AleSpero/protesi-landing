import { BrandLogo } from "@/components/BrandLogo";
import { loginHref, nav, signupHref } from "@/lib/content";

type SiteHeaderProps = {
  /** Href of the audience page being rendered; its nav item gets the underline. */
  current: (typeof nav)[number]["href"];
  signupLabel?: string;
  /** Shorter label used below `sm`, where a long one would not fit beside the logo. */
  signupLabelShort?: string;
  signupHref?: string;
  /** Matches the hero that follows, so header and hero read as one band. */
  background?: "lavender" | "white";
  /** Colour of the filled button; retailers use the orange accent. */
  signupTone?: "brand" | "accent";
};

const SIGNUP_TONE = {
  brand: "bg-brand hover:bg-brand-strong",
  accent: "bg-accent hover:bg-accent-strong",
} as const;

export function SiteHeader({
  current,
  signupLabel = "Iscriviti",
  signupLabelShort,
  signupHref: signup = signupHref,
  background = "lavender",
  signupTone = "brand",
}: SiteHeaderProps) {
  return (
    <header className={background === "white" ? "bg-white" : "bg-lavender"}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gutter-x py-[22px]">
        <a href="#top" aria-label="ProteSì — torna all'inizio" className="block shrink-0">
          {/* 36px on phones so the logo, Accedi and the signup label fit 390px. */}
          <BrandLogo className="h-9 w-auto sm:h-[42px]" />
        </a>

        {/* Gaps tighten between lg and xl, where the longest signup label plus
            the three nav items would otherwise overrun the gutter. */}
        <nav aria-label="Principale" className="flex items-center gap-6 xl:gap-8">
          <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
            {nav.map((item) => {
              const isCurrent = item.href === current;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={
                      isCurrent
                        ? "block whitespace-nowrap border-b-2 border-brand pb-0.5 text-[14.5px] font-semibold text-brand"
                        : "block whitespace-nowrap text-[14.5px] font-medium text-ink transition-colors hover:text-brand"
                    }
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Compact below `sm` so logo + both buttons fit a 390px screen. */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-6 xl:gap-8">
            <a
              href={loginHref}
              className="whitespace-nowrap rounded-[10px] border-[1.5px] border-periwinkle px-3.5 py-2 text-[13.5px] font-semibold text-brand transition-colors hover:border-brand sm:px-5 sm:py-2.5 sm:text-[14.5px]"
            >
              Accedi
            </a>
            <a
              href={signup}
              className={`whitespace-nowrap rounded-[10px] px-3.5 py-[9px] text-[13.5px] font-semibold text-white transition-colors sm:px-5 sm:py-[11px] sm:text-[14.5px] ${SIGNUP_TONE[signupTone]}`}
            >
              {signupLabelShort ? (
                <>
                  <span className="sm:hidden">{signupLabelShort}</span>
                  <span className="hidden sm:inline">{signupLabel}</span>
                </>
              ) : (
                signupLabel
              )}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
