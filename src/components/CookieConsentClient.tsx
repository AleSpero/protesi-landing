"use client";

import type { BeforeSendEvent } from "@vercel/analytics";
import { Analytics } from "@vercel/analytics/next";
import { type ReactNode, useCallback, useEffect, useRef, useSyncExternalStore } from "react";

import {
  getConsentSnapshot,
  getServerConsentSnapshot,
  parseConsent,
  readConsent,
  saveConsent,
  subscribeConsent,
} from "@/lib/consent";

/** Opens the preferences when it is the URL's fragment, as in the links from
 *  the static cookie and privacy policies (`/#preferenze-cookie`). */
const PREFERENCES_HASH = "#preferenze-cookie";

export type CookieConsentCopy = {
  banner: {
    label: string;
    title: string;
    text: ReactNode;
    reject: string;
    accept: string;
    customize: string;
    close: string;
  };
  preferences: {
    title: string;
    intro: string;
    close: string;
    necessaryTitle: string;
    necessaryStatus: string;
    necessaryText: string;
    statisticsTitle: string;
    statisticsText: string;
    rejectAll: string;
    save: string;
    acceptAll: string;
    more: ReactNode;
  };
};

/* Accept and reject look the same everywhere, so neither is the easy way
   out (Garante 2021 guidelines; EDPB cookie banner taskforce). */
const FILLED =
  "rounded-[10px] bg-brand px-5 py-2.5 text-[14.5px] font-semibold text-white transition-colors hover:bg-brand-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
const OUTLINED =
  "rounded-[10px] border-[1.5px] border-periwinkle px-5 py-2 text-[14.5px] font-semibold text-brand transition-colors hover:border-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

/** Dropped at send time too, so revoking consent stops events at once even
 *  though the script, once loaded, stays until the next page load. */
function onlyWithConsent(event: BeforeSendEvent) {
  return readConsent()?.statistics ? event : null;
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4" fill="none">
      <path d="M3.5 3.5l9 9m0-9l-9 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/**
 * The cookie banner and preferences, and the gate in front of Vercel Web
 * Analytics: its script loads only after the visitor accepts statistics.
 * Without a choice, `track()` in instrumentation-client.ts is a no-op, since
 * `window.va` is only defined once <Analytics /> has mounted.
 *
 * Any element with `data-cookie-preferences` (the footer link) reopens the
 * preferences, so the server-rendered footer needs no client code.
 */
export function CookieConsentClient({ copy }: { copy: CookieConsentCopy }) {
  // null until hydrated: the server can't know the choice, so it renders
  // neither the banner nor the analytics.
  const raw = useSyncExternalStore(subscribeConsent, getConsentSnapshot, getServerConsentSnapshot);
  const consent = raw === null ? null : parseConsent(raw);
  const showBanner = raw !== null && consent === null;

  const dialogRef = useRef<HTMLDialogElement>(null);
  const statisticsRef = useRef<HTMLInputElement>(null);

  const openPreferences = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    if (statisticsRef.current) statisticsRef.current.checked = readConsent()?.statistics ?? false;
    dialog.showModal();
  }, []);

  const choose = (statistics: boolean) => {
    saveConsent({ statistics });
    dialogRef.current?.close();
  };

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      if (!event.target.closest("[data-cookie-preferences]")) return;
      event.preventDefault();
      openPreferences();
    };
    const onHash = () => {
      if (location.hash !== PREFERENCES_HASH) return;
      history.replaceState(null, "", location.pathname + location.search);
      openPreferences();
    };
    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHash);
    onHash();
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHash);
    };
  }, [openPreferences]);

  return (
    <>
      {consent?.statistics && <Analytics beforeSend={onlyWithConsent} />}

      {showBanner && (
        <section
          aria-label={copy.banner.label}
          className="fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-lavender-deep bg-white p-5 shadow-search sm:inset-x-auto sm:bottom-6 sm:left-6 sm:w-[420px] sm:p-6"
        >
          {/* Closing the banner counts as refusing, as the Garante requires. */}
          <button
            type="button"
            onClick={() => choose(false)}
            aria-label={copy.banner.close}
            className="absolute top-3 right-3 grid size-8 place-items-center rounded-full text-muted transition-colors hover:bg-lavender hover:text-ink"
          >
            <CloseIcon />
          </button>

          <h2 className="mb-2 pr-8 font-display text-[16px] font-bold text-ink">{copy.banner.title}</h2>
          <p className="text-[14px] leading-[1.55]">{copy.banner.text}</p>

          <div className="mt-4 grid grid-cols-2 gap-2.5">
            <button type="button" onClick={() => choose(false)} className={FILLED}>
              {copy.banner.reject}
            </button>
            <button type="button" onClick={() => choose(true)} className={FILLED}>
              {copy.banner.accept}
            </button>
          </div>
          <button
            type="button"
            onClick={openPreferences}
            className="mt-3 text-[14px] font-semibold text-brand transition-colors hover:text-accent"
          >
            {copy.banner.customize}
          </button>
        </section>
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby="cookie-preferences-title"
        // A click on the backdrop lands on the <dialog> itself.
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        className="m-auto max-h-[calc(100dvh-24px)] w-[calc(100%-24px)] max-w-[520px] overflow-y-auto rounded-2xl bg-white text-body shadow-search backdrop:bg-ink/40"
      >
        <div className="p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <h2 id="cookie-preferences-title" className="font-display text-[20px] font-bold text-ink">
              {copy.preferences.title}
            </h2>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label={copy.preferences.close}
              className="-mt-1 -mr-2 grid size-8 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-lavender hover:text-ink"
            >
              <CloseIcon />
            </button>
          </div>
          <p className="mt-2 text-[14px] leading-[1.55]">{copy.preferences.intro}</p>

          <ul className="mt-5 divide-y divide-lavender-deep rounded-xl border border-lavender-deep">
            <li className="p-4">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-[15px] font-semibold text-ink">{copy.preferences.necessaryTitle}</h3>
                <span className="text-[13px] font-semibold text-success">
                  {copy.preferences.necessaryStatus}
                </span>
              </div>
              <p className="mt-1.5 text-[13.5px] leading-[1.55]">{copy.preferences.necessaryText}</p>
            </li>
            <li className="p-4">
              <label className="flex cursor-pointer items-center justify-between gap-4">
                <span className="text-[15px] font-semibold text-ink">{copy.preferences.statisticsTitle}</span>
                <input
                  ref={statisticsRef}
                  type="checkbox"
                  role="switch"
                  aria-describedby="cookie-statistics-text"
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className="relative h-6 w-11 shrink-0 rounded-full bg-[#c9cbe0] transition-colors peer-checked:bg-brand peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand after:absolute after:top-0.5 after:left-0.5 after:size-5 after:rounded-full after:bg-white after:shadow-sm after:transition-transform peer-checked:after:translate-x-5"
                />
              </label>
              <p id="cookie-statistics-text" className="mt-1.5 text-[13.5px] leading-[1.55]">
                {copy.preferences.statisticsText}
              </p>
            </li>
          </ul>

          <p className="mt-4 text-[13px] leading-[1.55] text-muted">{copy.preferences.more}</p>

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:justify-end">
            <button type="button" onClick={() => choose(false)} className={FILLED}>
              {copy.preferences.rejectAll}
            </button>
            <button
              type="button"
              onClick={() => choose(statisticsRef.current?.checked ?? false)}
              className={OUTLINED}
            >
              {copy.preferences.save}
            </button>
            <button type="button" onClick={() => choose(true)} className={FILLED}>
              {copy.preferences.acceptAll}
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
