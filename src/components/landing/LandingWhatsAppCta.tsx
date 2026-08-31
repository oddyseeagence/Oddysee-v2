interface LandingWhatsAppCtaProps {
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="size-6 fill-current">
      <path d="M27.17 4.8A15.8 15.8 0 0 0 16.03.18C7.33.18.25 7.25.25 15.95c0 2.78.73 5.5 2.1 7.88L.12 31.82l8.18-2.14a15.7 15.7 0 0 0 7.72 2.02h.01c8.7 0 15.78-7.08 15.78-15.78 0-4.21-1.64-8.16-4.64-11.12Zm-11.15 24.2h-.01a13.1 13.1 0 0 1-6.68-1.83l-.48-.28-4.85 1.27 1.3-4.73-.31-.49A13.13 13.13 0 0 1 2.9 15.95C2.9 8.72 8.79 2.83 16.03 2.83c3.5 0 6.78 1.36 9.25 3.84a13 13 0 0 1 3.84 9.27c0 7.24-5.88 13.13-13.1 13.13Zm7.18-9.84c-.4-.2-2.37-1.17-2.74-1.3-.37-.13-.64-.2-.9.2-.27.4-1.03 1.3-1.27 1.57-.23.27-.47.3-.87.1-.4-.2-1.7-.63-3.23-2.01a12.12 12.12 0 0 1-2.23-2.78c-.23-.4-.02-.62.18-.82.18-.18.4-.47.6-.7.2-.24.27-.4.4-.67.14-.27.07-.5-.03-.7-.1-.2-.9-2.17-1.23-2.97-.32-.77-.65-.66-.9-.67h-.77c-.27 0-.7.1-1.07.5-.37.4-1.4 1.37-1.4 3.34s1.43 3.87 1.63 4.14c.2.27 2.82 4.3 6.83 6.03.95.41 1.7.66 2.28.84.96.3 1.83.26 2.52.16.77-.12 2.37-.97 2.7-1.9.33-.94.33-1.74.23-1.9-.1-.17-.37-.27-.77-.47Z" />
    </svg>
  );
}

export function LandingWhatsAppCta({
  heading,
  description,
  ctaLabel,
  ctaHref,
}: LandingWhatsAppCtaProps) {
  return (
    <section className="border-b-4 border-[#1D0D3B] bg-[#F7F3FF] px-4 py-16 text-center sm:py-20 md:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[760px]">
        <h2 className="font-heading text-[clamp(42px,5vw,64px)] leading-[0.95] tracking-[-0.055em] text-[#1D0D3B]">
          {heading}
        </h2>
        <p className="mx-auto mt-5 max-w-[680px] text-base leading-7 text-[#1D0D3B]/65 md:text-lg md:leading-8">
          {description}
        </p>
        <a
          href={ctaHref}
          className="mt-8 inline-flex min-h-[52px] w-full max-w-[420px] items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-bold text-white transition hover:bg-[#20C65C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4"
        >
          <span className="grid size-6 place-items-center text-white">
            <WhatsAppIcon />
          </span>
          {ctaLabel}
        </a>
        <p className="mt-4 text-sm text-[#1D0D3B]/55">
          Nous répondons en moins d&apos;une heure, du lundi au samedi.
        </p>
      </div>
    </section>
  );
}
