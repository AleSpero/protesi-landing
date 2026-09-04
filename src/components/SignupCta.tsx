import { signupHref } from "@/lib/content";

type SignupCtaProps = {
  children?: React.ReactNode;
  className?: string;
};

/** The page's primary action. Used in the hero and again at the foot of the
 *  page, so both stay identical if the style or destination changes. */
export function SignupCta({
  children = "Crea il tuo account",
  className = "",
}: SignupCtaProps) {
  return (
    <a
      href={signupHref}
      className={`inline-block rounded-[14px] bg-accent px-10 py-[18px] text-[17px] font-semibold whitespace-nowrap text-white transition-colors hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
    >
      {children}
    </a>
  );
}
