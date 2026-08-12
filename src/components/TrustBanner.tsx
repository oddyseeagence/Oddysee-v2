"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PARTNERS = [
  { name: "Puma", src: "/images/partners/puma.svg" },
  { name: "Adidas", src: "/images/partners/adidas.svg" },
  { name: "Clinique Chifa Tasnime", src: "/images/partners/clinic-chifa.svg" },
  { name: "Menara Mall", src: "/images/partners/menaramall.svg" },
  { name: "Planète Montessori", src: "/images/partners/pmis.svg" },
];

const TRACK = [...PARTNERS, ...PARTNERS];

export function TrustBanner() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      data-reveal={isRevealed ? "visible" : "hidden"}
      className="scroll-reveal relative bg-white"
    >
      <div className="mx-auto max-w-[1320px] px-4 py-12 md:px-8 md:py-16 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
          <span className="shrink-0 font-sans text-[19.2px] font-bold leading-snug text-[#1D0D3B]">
            Helped generating
            <br />
            +3 900 000 MAD for clients
          </span>

          <div
            className="w-full min-w-0 flex-1 overflow-hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0, black 64px, black calc(100% - 64px), transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0, black 64px, black calc(100% - 64px), transparent 100%)",
            }}
          >
            <div
              className="partner-marquee flex w-max animate-[marquee_28s_linear_infinite] items-center gap-16"
              style={{ willChange: "transform" }}
            >
              {TRACK.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex h-11 w-[141px] shrink-0 items-center justify-center opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
                >
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={141}
                    height={44}
                    className="h-full w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MetaPartnerBand() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      data-reveal={isRevealed ? "visible" : "hidden"}
      className="scroll-reveal bg-white"
    >
      <div className="mx-auto max-w-[1320px] px-4 py-12 md:px-8 md:py-16 lg:px-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-12">
          <h2 className="max-w-[900px] font-heading text-[27px] leading-tight text-[#1D0D3B] md:text-[32px] lg:text-[43px]">
            On gère vos publicités avec les données et le support qu&apos;il
            faut, pas au hasard.
          </h2>
          <Image
            src="/images/metapartner.png"
            alt="Partenaire Meta"
            width={330}
            height={180}
            className="h-[84px] w-auto shrink-0"
          />
        </div>
      </div>
    </section>
  );
}
