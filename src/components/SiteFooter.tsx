export function SiteFooter() {
  return (
    <footer className="border-t border-lavender-deep bg-white gutter-x py-10">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-5">
        <span className="text-[13px] text-muted">
          ProteSì · Il documento generato è un consiglio informativo, non una prescrizione.
        </span>

        <nav className="flex gap-6">
          <a
            href="#"
            className="text-[13px] text-brand transition-colors hover:text-accent"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-[13px] text-brand transition-colors hover:text-accent"
          >
            Contatti
          </a>
        </nav>
      </div>
    </footer>
  );
}
