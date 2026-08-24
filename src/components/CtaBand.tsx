"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface CtaBandProps {
  heading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  background?: "white" | "lavender";
  density?: "default" | "compact";
  id?: string;
}

export function CtaBand({
  heading = "Create World-Class Visuals That Elevate Your Brand",
  description,
  ctaLabel = "Get A Quote",
  ctaHref,
  background = "white",
  density = "default",
  id,
}: CtaBandProps = {}) {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  const ctaClassName = `${
    density === "compact" ? "mt-7" : "mt-8"
  } inline-flex items-center justify-center rounded-full bg-[#632BC5] px-7 py-3.5 text-sm font-bold text-[#FFFFFF] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#632BC5] focus-visible:ring-offset-4`;

  return (
    <section
      id={id}
      ref={ref}
      data-reveal={isRevealed ? "visible" : "hidden"}
      className={`scroll-reveal px-4 text-center md:px-8 lg:px-10 ${
        density === "compact"
          ? "py-16 sm:py-20 lg:py-24"
          : "py-24 md:py-32"
      } ${
        background === "lavender" ? "bg-[#F7F3FF]" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-[1320px]">
        <h2 className="mx-auto max-w-2xl font-heading text-3xl leading-tight text-[#1D0D3B] md:text-4xl lg:text-[48px]">
          {heading}
        </h2>
        {description ? (
          <p
            className={`mx-auto max-w-xl text-base leading-7 text-[#1D0D3B]/65 ${
              density === "compact" ? "mt-4" : "mt-5"
            }`}
          >
            {description}
          </p>
        ) : null}
        {ctaHref ? (
          <a href={ctaHref} className={ctaClassName}>
            {ctaLabel}
          </a>
        ) : (
          <button className={ctaClassName}>{ctaLabel}</button>
        )}
      </div>
    </section>
  );
}
