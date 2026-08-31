import { Check, ChevronRight, X } from "lucide-react";

export interface LandingComparisonProblem {
  title: string;
  description?: string;
}

export interface LandingComparisonBenefit {
  title: string;
  description?: string;
}

interface LandingComparisonProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  problemsTitle: string;
  problemsDescription?: string;
  problems: readonly (string | LandingComparisonProblem)[];
  benefitsTitle: string;
  benefitsDescription?: string;
  benefits: readonly (string | LandingComparisonBenefit)[];
}

export function LandingComparison({
  eyebrow = "Avant / après",
  heading,
  description,
  problemsTitle,
  problemsDescription,
  problems,
  benefitsTitle,
  benefitsDescription,
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
            <div className="border-b border-[#1D0D3B]/12 pb-5">
              <div className="flex items-center justify-between gap-6">
                <h3 className="font-heading text-3xl leading-none tracking-[-0.04em] text-[#1D0D3B] md:text-4xl">
                  {problemsTitle}
                </h3>
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#1D0D3B]/8 text-[#1D0D3B]">
                  <X aria-hidden="true" className="size-5" strokeWidth={1.8} />
                </span>
              </div>
              {problemsDescription ? (
                <p className="mt-4 max-w-[620px] text-sm leading-6 text-[#1D0D3B]/60 sm:text-base sm:leading-7">
                  {problemsDescription}
                </p>
              ) : null}
            </div>
            <ul className="mt-6 space-y-4">
              {problems.map((problem) => {
                const title =
                  typeof problem === "string" ? problem : problem.title;
                const problemDescription =
                  typeof problem === "string" ? undefined : problem.description;

                return (
                  <li key={title} className="text-base leading-7 text-[#1D0D3B]/65">
                    {problemDescription ? (
                      <details className="group">
                        <summary className="flex cursor-pointer list-none items-start gap-4 rounded-md outline-none transition-colors hover:text-[#1D0D3B] focus-visible:ring-2 focus-visible:ring-[#632BC5] focus-visible:ring-offset-4 [&::-webkit-details-marker]:hidden">
                          <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[#1D0D3B]/8 text-[#1D0D3B]">
                            <X
                              aria-hidden="true"
                              className="size-3.5"
                              strokeWidth={2}
                            />
                          </span>
                          <span className="min-w-0 flex-1">{title}</span>
                          <span className="mt-1 grid size-6 shrink-0 place-items-center text-[#632BC5]">
                            <ChevronRight
                              aria-hidden="true"
                              className="size-4 transition-transform duration-300 group-open:rotate-90 motion-reduce:transition-none"
                              strokeWidth={2}
                            />
                          </span>
                        </summary>
                        <div className="ml-10 mt-4 border-l border-[#1D0D3B]/12 pl-4 pr-8 text-sm leading-6 text-[#1D0D3B]/60 sm:text-base sm:leading-7">
                          {problemDescription.split("\n\n").map((paragraph) => (
                            <p key={paragraph} className="mt-3 first:mt-0">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <div className="flex items-start gap-4">
                        <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[#1D0D3B]/8 text-[#1D0D3B]">
                          <X
                            aria-hidden="true"
                            className="size-3.5"
                            strokeWidth={2}
                          />
                        </span>
                        {title}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </article>

          <article className="h-full rounded-[22px] bg-[#1D0D3B] p-6 text-white sm:p-8 lg:p-9">
            <div className="border-b border-white/15 pb-5">
              <div className="flex items-center justify-between gap-6">
                <h3 className="font-heading text-3xl leading-none tracking-[-0.04em] md:text-4xl">
                  {benefitsTitle}
                </h3>
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#632BC5] text-white">
                  <Check aria-hidden="true" className="size-5" strokeWidth={1.8} />
                </span>
              </div>
              {benefitsDescription ? (
                <p className="mt-4 max-w-[620px] text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                  {benefitsDescription}
                </p>
              ) : null}
            </div>
            <ul className="mt-6 space-y-4">
              {benefits.map((benefit) => {
                const title =
                  typeof benefit === "string" ? benefit : benefit.title;
                const benefitDescription =
                  typeof benefit === "string" ? undefined : benefit.description;

                return (
                  <li
                    key={title}
                    className="text-base leading-7 text-white/70"
                  >
                    {benefitDescription ? (
                      <details className="group">
                        <summary className="flex cursor-pointer list-none items-start gap-4 rounded-md outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-[#632BC5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1D0D3B] [&::-webkit-details-marker]:hidden">
                          <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[#632BC5] text-white">
                            <Check
                              aria-hidden="true"
                              className="size-3.5"
                              strokeWidth={2}
                            />
                          </span>
                          <span className="min-w-0 flex-1">{title}</span>
                          <span className="mt-1 grid size-6 shrink-0 place-items-center text-white">
                            <ChevronRight
                              aria-hidden="true"
                              className="size-4 transition-transform duration-300 group-open:rotate-90 motion-reduce:transition-none"
                              strokeWidth={2}
                            />
                          </span>
                        </summary>
                        <div className="ml-10 mt-4 border-l border-white/20 pl-4 pr-8 text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                          {benefitDescription.split("\n\n").map((paragraph) => (
                            <p key={paragraph} className="mt-3 first:mt-0">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <div className="flex items-start gap-4">
                        <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[#632BC5] text-white">
                          <Check
                            aria-hidden="true"
                            className="size-3.5"
                            strokeWidth={2}
                          />
                        </span>
                        {title}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
