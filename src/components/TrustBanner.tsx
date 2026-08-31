"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export interface PartnerLogo {
  name: string;
  src: string;
}

const PARTNERS: PartnerLogo[] = [
  { name: "Puma", src: "/images/partners/puma.svg" },
  { name: "Adidas", src: "/images/partners/adidas.svg" },
  { name: "Clinique Chifa Tasnime", src: "/images/partners/clinic-chifa.svg" },
  { name: "Menara Mall", src: "/images/partners/menaramall.svg" },
  { name: "Planète Montessori", src: "/images/partners/pmis.svg" },
];

interface TrustBannerProps {
  partners?: readonly PartnerLogo[];
  headlineLines?: readonly string[] | null;
  variant?: "default" | "landing";
}

export function TrustBanner({
  partners = PARTNERS,
  headlineLines = [
    "Helped generating",
    "+3 900 000 MAD for clients",
  ],
  variant = "default",
}: TrustBannerProps = {}) {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();
  const track = [...partners, ...partners];

  return (
    <section
      ref={ref}
      data-reveal={isRevealed ? "visible" : "hidden"}
      className="scroll-reveal relative bg-white"
    >
      <div
        className={`mx-auto max-w-[1320px] px-4 md:px-8 lg:px-10 ${
          variant === "landing"
            ? "pb-16 sm:pb-20 lg:pb-24"
            : "py-12 md:py-16"
        }`}
      >
        <div
          className={`flex flex-col md:flex-row md:items-center ${
            variant === "landing" ? "gap-5 md:gap-10" : "gap-6 md:gap-12"
          }`}
        >
          {headlineLines?.length ? (
            <span
              className={`shrink-0 font-sans font-bold leading-snug text-[#1D0D3B] ${
                variant === "landing"
                  ? "text-[17px] md:text-[19.2px]"
                  : "text-[19.2px]"
              }`}
            >
              {headlineLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </span>
          ) : null}

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
              className={`partner-marquee flex w-max animate-[marquee_28s_linear_infinite] items-center ${
                variant === "landing" ? "gap-14 md:gap-16" : "gap-16"
              }`}
              style={{ willChange: "transform" }}
            >
              {track.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className={`flex shrink-0 items-center justify-center grayscale transition hover:opacity-100 hover:grayscale-0 ${
                    variant === "landing"
                      ? "h-12 w-[156px] opacity-70"
                      : "h-11 w-[141px] opacity-60"
                  }`}
                >
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={variant === "landing" ? 156 : 141}
                    height={variant === "landing" ? 48 : 44}
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
