"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ProcessStep {
  title: string;
  numeral: string;
  image: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Discovery & Alignment",
    numeral: ".01",
    image: "/images/01.png",
  },
  {
    title: "Scope and Plan",
    numeral: ".02",
    image: "/images/02.png",
  },
  {
    title: "Delivery and Tracking",
    numeral: ".03",
    image: "/images/03.png",
  },
];

const SERVICE_PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Analyse & diagnostic",
    numeral: ".01",
    image: "/images/01.png",
  },
  {
    title: "Création & optimisation",
    numeral: ".02",
    image: "/images/02.png",
  },
  {
    title: "Lancement & croissance",
    numeral: ".03",
    image: "/images/03.png",
  },
];

const PROCESS_REVEAL = {
  stripCount: 5,
  staggerMs: 35,
  durationMs: 460,
} as const;

function shuffledDelays(count: number, staggerMs: number) {
  const delays = Array.from({ length: count }, (_, i) => i * staggerMs);
  for (let i = delays.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [delays[i], delays[j]] = [delays[j], delays[i]];
  }
  return delays;
}

/**
 * Strips reveal on hover only (see .process-card:hover in globals.css), so
 * randomizing after mount never causes a hydration mismatch — the sequential
 * fallback order is never actually visible to the user.
 */
function useStripRevealDelays(count: number, staggerMs: number) {
  const [delays, setDelays] = useState(() =>
    Array.from({ length: count }, (_, i) => i * staggerMs),
  );

  useEffect(() => {
    setDelays(shuffledDelays(count, staggerMs));
  }, [count, staggerMs]);

  return delays;
}

interface ProcessCardStyle extends CSSProperties {
  "--process-strip-count": number;
  "--process-reveal-duration": string;
}

interface ProcessStripStyle extends CSSProperties {
  "--process-strip-delay": string;
  "--process-strip-offset": string;
  "--process-image-width": string;
}

function ProcessCard({
  step,
  index,
  backgroundClass,
}: {
  step: ProcessStep;
  index: number;
  backgroundClass: string;
}) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();
  const stripDelays = useStripRevealDelays(
    PROCESS_REVEAL.stripCount,
    PROCESS_REVEAL.staggerMs,
  );

  return (
    <div
      ref={ref}
      data-reveal={isRevealed ? "visible" : "hidden"}
      className={`process-card group scroll-reveal relative h-[224px] overflow-hidden rounded-2xl ${backgroundClass} p-8 md:h-[336px]`}
      style={
        {
          transitionDelay: `${index * 90}ms`,
          "--process-strip-count": PROCESS_REVEAL.stripCount,
          "--process-reveal-duration": `${PROCESS_REVEAL.durationMs}ms`,
        } as ProcessCardStyle
      }
    >
      <div className="process-card__image" aria-hidden="true">
        {Array.from({ length: PROCESS_REVEAL.stripCount }, (_, stripIndex) => (
          <div
            key={stripIndex}
            className="process-card__strip"
            style={
              {
                "--process-strip-delay": `${stripDelays[stripIndex]}ms`,
                "--process-strip-offset": `${stripIndex * -100}%`,
                "--process-image-width": `${PROCESS_REVEAL.stripCount * 100}%`,
              } as ProcessStripStyle
            }
          >
            <div className="process-card__strip-image">
              <Image
                src={step.image}
                alt=""
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <h3 className="process-card__title absolute left-8 top-8 z-10 max-w-[85%] font-heading text-2xl leading-snug text-[#1D0D3B] transition-colors group-hover:text-[#faf9ff] md:text-[28px]">
        {step.title}
      </h3>
      <span className="process-card__numeral absolute bottom-4 right-6 z-10 font-heading text-7xl leading-none text-[#1D0D3B]/10 transition-colors group-hover:text-[#faf9ff]/15 md:text-[88px]">
        {step.numeral}
      </span>
    </div>
  );
}

export function Process({
  variant = "default",
}: {
  variant?: "default" | "services";
}) {
  const isServicesVariant = variant === "services";
  const steps = isServicesVariant ? SERVICE_PROCESS_STEPS : PROCESS_STEPS;

  return (
    <section
      id={isServicesVariant ? "notre-processus" : undefined}
      className="bg-[#F7F3FF]"
    >
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-10 py-24">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] text-[#1D0D3B] mt-3">
            {isServicesVariant
              ? "Notre processus"
              : "Comment Nous Construisons les Projets"}
          </h2>
          <p className="font-sans text-base text-[rgba(29,13,59,0.7)] mt-4 max-w-xl">
            {isServicesVariant
              ? "Une méthode structurée et collaborative pour transformer chaque objectif en stratégie mesurable et conçue pour générer des résultats."
              : "Nous suivons des étapes simples pour planifier, concevoir et livrer des projets qui répondent efficacement aux objectifs des clients et garantissent un succès durable."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <ProcessCard
              key={step.numeral}
              step={step}
              index={index}
              backgroundClass={
                isServicesVariant ? "bg-[#E2D7F7]" : "bg-white"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
