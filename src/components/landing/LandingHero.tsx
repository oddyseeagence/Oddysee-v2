import type { ReactNode } from "react";

interface LandingHeroProps {
  eyebrow?: string;
  headline: ReactNode;
  description: string;
}

export function LandingHero({
  eyebrow,
  headline,
  description,
}: LandingHeroProps) {
  return (
    <section
      id="hero"
      className="overflow-hidden bg-white py-12 text-[#1D0D3B] sm:py-16 md:py-20"
    >
      <div className="about-container">
        {eyebrow ? (
          <p className="hero-reveal opacity-0 animate-[fadeUp_0.6s_ease-out_forwards] text-xs font-semibold uppercase tracking-[0.14em] text-[#632BC5]">
            {eyebrow}
          </p>
        ) : null}

        <h1 className="hero-reveal mt-4 max-w-[1120px] opacity-0 animate-[fadeUp_0.6s_ease-out_forwards] font-heading text-[clamp(52px,8vw,112px)] font-medium leading-[0.88] tracking-[-0.065em] [animation-delay:100ms]">
          {headline}
        </h1>

        <div className="mt-8 border-t border-[#1D0D3B]/15 pt-6 sm:mt-10 sm:pt-7 lg:ml-[38%]">
          <p className="hero-reveal max-w-[660px] opacity-0 animate-[fadeUp_0.6s_ease-out_forwards] text-[20px] font-medium leading-[1.35] tracking-[-0.025em] text-[#1D0D3B]/65 [animation-delay:220ms] sm:text-[22px] lg:text-[26px]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
