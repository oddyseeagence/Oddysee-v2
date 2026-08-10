"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export function CtaBand() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      data-reveal={isRevealed ? "visible" : "hidden"}
      className="scroll-reveal bg-white px-4 py-24 text-center md:px-8 md:py-32 lg:px-10"
    >
      <div className="mx-auto max-w-[1320px]">
        <h2 className="mx-auto max-w-2xl font-heading text-3xl leading-tight text-[#1D0D3B] md:text-4xl lg:text-[48px]">
          Create World-Class Visuals That Elevate Your Brand
        </h2>
        <button className="mt-8 rounded-full bg-[#632BC5] px-7 py-3.5 text-sm font-bold text-[#FFFFFF] transition hover:brightness-110">
          Get A Quote
        </button>
      </div>
    </section>
  );
}
