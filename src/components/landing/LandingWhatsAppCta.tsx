import { MessageCircle } from "lucide-react";

interface LandingWhatsAppCtaProps {
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
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
            <MessageCircle aria-hidden="true" className="size-4" strokeWidth={2.5} />
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
