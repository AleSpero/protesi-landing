import { SignupCta } from "@/components/SignupCta";

export function FinalCta() {
  return (
    <section id="iscriviti" className="bg-lavender gutter-x py-16 text-center xl:py-22">
      <h2 className="mx-auto mb-4.5 max-w-[700px] text-balance font-display text-[34px] leading-[1.06] font-extrabold tracking-[-0.025em] text-ink sm:text-[42px] xl:text-[50px]">
        Pronti a cercare meglio?
      </h2>

      <p className="mx-auto mb-9 max-w-[520px] text-[17px] leading-[1.6] text-body">
        Crea il tuo account in due minuti: alla prima visita sei già operativo.
      </p>

      <SignupCta />
    </section>
  );
}
