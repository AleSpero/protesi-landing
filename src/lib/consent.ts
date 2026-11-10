/** The visitor's cookie choices, kept in a first-party technical cookie
 *  (listed in public/cookie-policy.html). Browser-only: every function here
 *  reads or writes `document.cookie`. */

const COOKIE = "protesi_consent";

/** Bump when the categories change: older choices then count as none, so
 *  the banner asks again. */
const VERSION = 1;

/** Six months: the Garante's guidelines say not to ask again sooner. */
const MAX_AGE = 60 * 60 * 24 * 182;

export type Consent = {
  /** Vercel Web Analytics: page views and the signup click events. */
  statistics: boolean;
};

const listeners = new Set<() => void>();

function readRaw(): string {
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE}=([^;]*)`));
  return match ? match[1] : "";
}

/** The stored choice, or `null` if the visitor hasn't made one yet. */
export function parseConsent(raw: string): Consent | null {
  if (!raw) return null;
  try {
    const value = JSON.parse(decodeURIComponent(raw));
    if (value?.v !== VERSION) return null;
    return { statistics: value.statistics === true };
  } catch {
    return null;
  }
}

export function readConsent(): Consent | null {
  return parseConsent(readRaw());
}

export function saveConsent(consent: Consent) {
  const value = encodeURIComponent(
    JSON.stringify({ v: VERSION, statistics: consent.statistics, at: new Date().toISOString() }),
  );
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE}=${value}; Max-Age=${MAX_AGE}; Path=/; SameSite=Lax${secure}`;
  listeners.forEach((listener) => listener());
}

/* For useSyncExternalStore: the snapshot is the raw cookie string, so it
   stays referentially stable between reads. */
export function subscribeConsent(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export const getConsentSnapshot = readRaw;

/** On the server, and while hydrating, the choice is unknown. */
export function getServerConsentSnapshot(): string | null {
  return null;
}
