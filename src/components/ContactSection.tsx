import { useTranslations } from "next-intl";

import { contactHref } from "@/lib/links";

/** "Non trovi la risposta? Scrivici…" — beside the FAQ, or on its own below. */
export function ContactPrompt() {
  const t = useTranslations("common.faq");

  return t.rich("contact", {
    link: (chunks) => (
      <a href={contactHref} className="text-brand transition-colors hover:text-accent">
        {chunks}
      </a>
    ),
  });
}

/** The contact line alone, for a landing without an FAQ. */
export function ContactSection() {
  return (
    <section className="bg-white gutter-x py-14 text-center xl:py-18">
      <p className="mx-auto max-w-[640px] text-pretty text-[17px] leading-[1.6] text-body sm:text-[19px]">
        <ContactPrompt />
      </p>
    </section>
  );
}
