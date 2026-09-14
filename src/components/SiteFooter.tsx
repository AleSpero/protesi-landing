import { company, contactHref, privacyHref } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-lavender-deep bg-white gutter-x py-10">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-5">
        {/* Each item stays whole; the non-breaking space keeps the dot with the
            item before it, so a wrapped line never starts with "·". */}
        <address className="text-[13px] text-muted not-italic">
          <span className="whitespace-nowrap">{company.name}</span>
          {"\u00a0· "}
          <span className="whitespace-nowrap">P.IVA {company.vat}</span>
          {"\u00a0· "}
          <span className="whitespace-nowrap">{company.address}</span>
        </address>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <nav className="flex gap-6">
            <a
              href={privacyHref}
              className="text-[13px] text-brand transition-colors hover:text-accent"
            >
              Privacy
            </a>
            <a
              href={contactHref}
              className="text-[13px] text-brand transition-colors hover:text-accent"
            >
              Contatti
            </a>
          </nav>

          <span aria-hidden="true" className="hidden h-3.5 w-px bg-lavender-deep sm:block" />

          {/* Author credit in his own brand: Lato Bold, #101010 + #00b0ff, as on
              alessandrosperotti.com. `noopener` without `noreferrer` so the
              visit still shows up as coming from ProteSì in his analytics. */}
          <a
            href="https://alessandrosperotti.com"
            target="_blank"
            rel="noopener"
            className="group text-[13px] text-muted"
          >
            made by{" "}
            <span className="font-credit font-bold decoration-[#00b0ff] underline-offset-2 group-hover:underline">
              <span className="text-[#101010]">Alessandro</span>{" "}
              <span className="text-[#00b0ff] transition-colors group-hover:text-[#0090d0]">
                Sperotti
              </span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
