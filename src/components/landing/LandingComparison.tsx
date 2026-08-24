import { Check, X } from "lucide-react";

interface LandingComparisonProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  problemsTitle: string;
  problems: readonly string[];
  benefitsTitle: string;
  benefits: readonly string[];
}

export function LandingComparison({
  eyebrow = "Avant / après",
  heading,
  description,
  problemsTitle,
  problems,
  benefitsTitle,
  benefits,
}: LandingComparisonProps) {
  return (
    <section className="bg-[#F7F3FF] py-20 md:py-24 lg:py-28">
      <div className="about-container">
        <div className="grid gap-6 lg:grid-cols-[0.38fr_0.62fr] lg:gap-12">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#632BC5]">
            {eyebrow}
          </p>
          <div>
            <h2 className="max-w-[840px] font-heading text-[clamp(42px,6vw,80px)] leading-[0.92] tracking-[-0.055em] text-[#1D0D3B]">
              {heading}
            </h2>
            {description ? (
              <p className="mt-6 max-w-[640px] text-base leading-7 text-[#1D0D3B]/65 md:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-12 grid items-stretch gap-5 lg:mt-16 lg:grid-cols-2">
          <article className="h-full rounded-[22px] border border-[#1D0D3B]/10 bg-white p-6 sm:p-8 lg:p-9">
            <div className="flex items-center justify-between gap-6 border-b border-[#1D0D3B]/12 pb-5">
              <h3 className="font-heading text-3xl leading-none tracking-[-0.04em] text-[#1D0D3B] md:text-4xl">
                {problemsTitle}
              </h3>
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#1D0D3B]/8 text-[#1D0D3B]">
                <X aria-hidden="true" className="size-5" strokeWidth={1.8} />
              </span>
            </div>
            <ul className="mt-6 space-y-4">
              {problems.map((problem) => (
                <li
                  key={problem}
                  className="flex items-start gap-4 text-base leading-7 text-[#1D0D3B]/65"
                >
                  <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[#1D0D3B]/8 text-[#1D0D3B]">
                    <X aria-hidden="true" className="size-3.5" strokeWidth={2} />
                  </span>
                  {problem}
                </li>
              ))}
            </ul>
          </article>

          <article className="h-full rounded-[22px] bg-[#1D0D3B] p-6 text-white sm:p-8 lg:p-9">
            <div className="flex items-center justify-between gap-6 border-b border-white/15 pb-5">
              <h3 className="font-heading text-3xl leading-none tracking-[-0.04em] md:text-4xl">
                {benefitsTitle}
              </h3>
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#632BC5] text-white">
                <Check aria-hidden="true" className="size-5" strokeWidth={1.8} />
              </span>
            </div>
            <ul className="mt-6 space-y-4">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-4 text-base leading-7 text-white/70"
                >
                  <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[#632BC5] text-white">
                    <Check
                      aria-hidden="true"
                      className="size-3.5"
                      strokeWidth={2}
                    />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
