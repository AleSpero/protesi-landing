import { loginHref } from "@/lib/content";

type EmailSignupCtaProps = {
  id: string;
  title: string;
  intro: string;
  buttonLabel: string;
  /** Where the form submits. PLACEHOLDER anchors until the real flows exist. */
  action: string;
  tone?: "brand" | "accent";
};

const TONE = {
  brand: "bg-brand hover:bg-brand-strong focus-visible:outline-brand",
  accent: "bg-accent hover:bg-accent-strong focus-visible:outline-accent",
} as const;

/**
 * Email capture that hands off to a registration flow. It submits as a plain
 * GET so the signup page can prefill the address; if the real flow would
 * rather not see the email in the query string, point `action` at a POST
 * endpoint instead.
 */
export function EmailSignupCta({
  id,
  title,
  intro,
  buttonLabel,
  action,
  tone = "brand",
}: EmailSignupCtaProps) {
  const inputId = `${id}-email`;

  return (
    <section id={id} className="bg-lavender gutter-x py-16 text-center xl:py-22">
      <h2 className="mx-auto mb-4.5 max-w-[760px] text-balance font-display text-[34px] leading-[1.06] font-extrabold tracking-[-0.025em] text-ink sm:text-[42px] xl:text-[50px]">
        {title}
      </h2>

      <p className="mx-auto mb-9 max-w-[520px] text-[17px] leading-[1.6] text-body">{intro}</p>

      <form
        action={action}
        method="get"
        className="mx-auto mb-3.5 flex max-w-[560px] flex-col gap-3 sm:flex-row"
      >
        <label htmlFor={inputId} className="sr-only">
          Email aziendale
        </label>
        <input
          id={inputId}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="La tua email aziendale"
          className="min-w-0 flex-1 rounded-[14px] border-[1.5px] border-periwinkle bg-white px-5 py-[17px] text-[16px] text-ink outline-none transition-colors focus:border-brand"
        />
        <button
          type="submit"
          className={`rounded-[14px] px-8 py-[18px] text-[17px] font-semibold whitespace-nowrap text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${TONE[tone]}`}
        >
          {buttonLabel}
        </button>
      </form>

      <p className="text-[13px] text-muted">
        Nessun costo di attivazione. Hai già un account?{" "}
        <a href={loginHref} className="text-brand transition-colors hover:text-accent">
          Accedi
        </a>
      </p>
    </section>
  );
}
