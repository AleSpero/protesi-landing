import { BrowserFrame } from "@/components/BrowserFrame";

export function WebAppSection() {
  return (
    <section className="bg-lavender gutter-x pt-16 pb-18 xl:pt-22 xl:pb-24">
      <div className="mx-auto max-w-[1160px] text-center">
        <h2 className="mx-auto mb-4.5 max-w-[760px] text-balance font-display text-[32px] leading-[1.08] font-bold tracking-[-0.025em] text-ink sm:text-[38px] xl:text-[46px]">
          Sul computer dello studio, con lo stesso account.
        </h2>

        <p className="mx-auto mb-10 max-w-[560px] text-pretty text-[17px] leading-[1.6] text-body xl:mb-13">
          Preferiti e documento in preparazione si sincronizzano tra telefono e web: inizi in
          visita, finisci alla scrivania.
        </p>

        <BrowserFrame
          url="app.protesi.it"
          src="/mockups/web_home.png"
          alt="Home di ProteSì da browser"
          width={1427}
          height={1046}
          sizes="(min-width: 1288px) 1158px, 100vw"
        />
      </div>
    </section>
  );
}
