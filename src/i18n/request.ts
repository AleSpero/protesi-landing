import { getRequestConfig } from "next-intl/server";

/** The site is Italian only, so the locale is fixed rather than read from the
 *  request — which keeps every page statically rendered. Adding a language
 *  means adding `messages/<locale>.json` and picking the locale here. */
export const locale = "it";

export default getRequestConfig(async () => ({
  locale,
  messages: (await import(`../../messages/${locale}.json`)).default,
}));
