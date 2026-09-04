import { BrandLogo } from "@/components/BrandLogo";
import { nav, signupHref } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="bg-lavender">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gutter-x py-[22px]">
        <a href="#top" aria-label="ProteSì — torna all'inizio" className="block shrink-0">
          <BrandLogo className="h-[42px] w-auto" />
        </a>

        <nav className="flex items-center gap-6 lg:gap-8">
          <ul className="hidden items-center gap-6 lg:flex lg:gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="whitespace-nowrap text-[14.5px] font-medium text-ink transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={signupHref}
            className="whitespace-nowrap rounded-[10px] border-[1.5px] border-periwinkle px-5 py-2.5 text-[14.5px] font-semibold text-brand transition-colors hover:border-brand"
          >
            Iscriviti
          </a>
        </nav>
      </div>
    </header>
  );
}
