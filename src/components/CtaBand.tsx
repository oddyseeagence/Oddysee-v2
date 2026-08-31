"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface CtaBandStat {
  value: string;
  label: string;
}

interface CtaBandProps {
  heading?: string;
  headingSize?: "default" | "display";
  description?: string;
  stats?: readonly CtaBandStat[];
  ctaLabel?: string;
  ctaHref?: string;
  background?: "white" | "lavender";
  density?: "default" | "compact";
  id?: string;
}

export function CtaBand({
  heading = "Create World-Class Visuals That Elevate Your Brand",
  headingSize = "default",
  description,
  stats,
  ctaLabel = "Get A Quote",
  ctaHref,
  background = "white",
  density = "default",
  id,
}: CtaBandProps = {}) {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  const ctaClassName = `${
    stats?.length
      ? "mt-10 sm:mt-12"
      : density === "compact"
        ? "mt-7"
        : "mt-8"
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
        <h2
          className={`mx-auto font-heading text-[#1D0D3B] ${
            headingSize === "display"
              ? "max-w-[840px] text-[clamp(42px,6vw,80px)] leading-[0.92] tracking-[-0.055em]"
              : "max-w-2xl text-3xl leading-tight md:text-4xl lg:text-[48px]"
          }`}
        >
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
        {stats?.length ? (
          <dl className="mx-auto mt-10 grid max-w-[1180px] gap-px overflow-hidden border-y border-[#1D0D3B]/12 bg-[#1D0D3B]/12 text-left sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="flex min-h-[154px] flex-col justify-between bg-white px-5 py-6 sm:min-h-[170px] sm:px-7 sm:py-8"
              >
                <dt className="font-heading text-[clamp(34px,3.4vw,52px)] leading-[0.9] tracking-[-0.055em] text-[#632BC5]">
                  {stat.value}
                </dt>
                <dd className="mt-7 max-w-[240px] text-sm leading-6 text-[#1D0D3B]/65 sm:text-base">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
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
