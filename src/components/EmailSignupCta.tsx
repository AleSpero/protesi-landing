import { EmailSignupForm } from "@/components/EmailSignupForm";
import type { AccountType } from "@/lib/app-links";
import { loginHref } from "@/lib/content";

type EmailSignupCtaProps = {
  id: string;
  title: string;
  intro: string;
  buttonLabel: string;
  /** Preselected in the app's registration flow. */
  accountType: AccountType;
  tone?: "brand" | "accent";
};

const TONE = {
  brand: "bg-brand hover:bg-brand-strong focus-visible:outline-brand",
  accent: "bg-accent hover:bg-accent-strong focus-visible:outline-accent",
} as const;

/** Closing email-capture CTA: the address carries over into the app's signup. */
export function EmailSignupCta({
  id,
  title,
  intro,
  buttonLabel,
  accountType,
  tone = "brand",
}: EmailSignupCtaProps) {
  return (
    <section id={id} className="bg-lavender gutter-x py-16 text-center xl:py-22">
      <h2 className="mx-auto mb-4.5 max-w-[760px] text-balance font-display text-[34px] leading-[1.06] font-extrabold tracking-[-0.025em] text-ink sm:text-[42px] xl:text-[50px]">
        {title}
      </h2>

      <p className="mx-auto mb-9 max-w-[520px] text-[17px] leading-[1.6] text-body">{intro}</p>

      <EmailSignupForm
        accountType={accountType}
        inputId={`${id}-email`}
        buttonLabel={buttonLabel}
        toneClassName={TONE[tone]}
      />

      <p className="text-[13px] text-muted">
        Nessun costo di attivazione. Hai già un account?{" "}
        <a href={loginHref} className="text-brand transition-colors hover:text-accent">
          Accedi
        </a>
      </p>
    </section>
  );
}
