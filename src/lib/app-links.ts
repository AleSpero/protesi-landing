/** Links into the ProteSì app (Flutter web, separate Vercel project).
 *  Set NEXT_PUBLIC_APP_URL to point a deployment at another app instance;
 *  the fallback is the current production app. */
const APP_URL = (process.env.NEXT_PUBLIC_APP_URL || "https://protesi-app.vercel.app").replace(
  /\/+$/,
  "",
);

/** Account types exactly as the app's registration flow names them
 *  (`UserType.value` in protesi-app). One per audience landing. */
export type AccountType = "private" | "product_company" | "selling_company";

/**
 * The app uses Flutter's default hash routing, so the route and the query the
 * app reads both live after `#`. A side benefit: a prefilled email stays in the
 * fragment, which browsers never send to any server or access log.
 */
export function appSignupHref(type: AccountType, email?: string) {
  const params = new URLSearchParams({ type });
  if (email) params.set("email", email);
  return `${APP_URL}/#/signup?${params}`;
}

export const appLoginHref = `${APP_URL}/#/login`;
