"use client";

import { type AccountType, appSignupHref } from "@/lib/app-links";

type EmailSignupFormProps = {
  accountType: AccountType;
  inputId: string;
  buttonLabel: string;
  toneClassName: string;
};

/**
 * Opens the app's registration with the account type preselected and the
 * email prefilled. The handler puts the email inside the `#` route, where the
 * app reads it; a plain GET would put it before the `#`, out of the router's
 * reach. Without JS the form still submits to the same screen, just unfilled.
 */
export function EmailSignupForm({
  accountType,
  inputId,
  buttonLabel,
  toneClassName,
}: EmailSignupFormProps) {
  return (
    <form
      action={appSignupHref(accountType)}
      method="get"
      onSubmit={(event) => {
        event.preventDefault();
        const email = new FormData(event.currentTarget).get("email")?.toString().trim();
        window.location.assign(appSignupHref(accountType, email));
      }}
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
        className={`rounded-[14px] px-8 py-[18px] text-[17px] font-semibold whitespace-nowrap text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${toneClassName}`}
      >
        {buttonLabel}
      </button>
    </form>
  );
}
