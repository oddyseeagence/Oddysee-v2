import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { LandingCta } from "@/components/landing/LandingCta";

import styles from "./GetWebV2Hero.module.css";

const heroImage =
  "/get-web-v2%20images/hero%20image/ChatGPT%20Image%20Sep%201,%202026,%2004_59_14%20PM.png";

interface GetWebV2HeroProps {
  eyebrow?: string;
  headline: ReactNode;
  description: string;
  subdescription?: string;
  ctaLabel: string;
  ctaHref: string;
}

export function GetWebV2Hero({
  eyebrow,
  headline,
  description,
  subdescription,
  ctaLabel,
  ctaHref,
}: GetWebV2HeroProps) {
  return (
    <section
      id="hero"
      className="relative isolate overflow-x-clip overflow-y-visible bg-white text-[#1D0D3B]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-[#8966ff]/8 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 bottom-0 h-[420px] w-[420px] rounded-full bg-[#632BC5]/7 blur-3xl"
      />

      <div className="about-container relative">
        <div className="grid min-h-[100svh] min-w-0 grid-cols-[minmax(0,1fr)] content-start items-start gap-10 py-10 sm:gap-12 sm:py-12 md:py-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(390px,0.92fr)] lg:gap-0 lg:py-10">
          <div className="relative z-20 min-w-0">
            <Link
              href="/"
              aria-label="Retour à l’accueil Oddysee"
              className="hero-reveal mb-4 inline-flex rounded-sm opacity-0 outline-none animate-[fadeUp_0.6s_ease-out_forwards] focus-visible:ring-2 focus-visible:ring-[#632BC5] focus-visible:ring-offset-4 sm:mb-5"
            >
              <Image
                src="/images/2Oddysee_Horizontal_White.svg"
                alt=""
                width={192}
                height={73}
                className="h-10 w-auto sm:h-11"
                preload
              />
            </Link>

            {eyebrow ? (
              <p className="hero-reveal opacity-0 animate-[fadeUp_0.6s_ease-out_forwards] text-xs font-semibold uppercase tracking-[0.14em] text-[#632BC5]">
                {eyebrow}
              </p>
            ) : null}

            <h1 className="hero-reveal mt-4 max-w-[800px] opacity-0 animate-[fadeUp_0.6s_ease-out_forwards] font-heading text-[52px] font-medium leading-[0.88] tracking-[-0.065em] [animation-delay:100ms] sm:text-[68px] md:text-[88px] lg:text-[clamp(78px,7vw,108px)]">
              {headline}
            </h1>

            <div className="mt-8 max-w-[650px] sm:mt-10">
              <p className="hero-reveal max-w-[620px] opacity-0 animate-[fadeUp_0.6s_ease-out_forwards] text-[19px] font-medium leading-[1.4] tracking-[-0.025em] text-[#1D0D3B]/65 [animation-delay:220ms] sm:text-[21px] lg:text-[23px]">
                {description}
              </p>
              {subdescription ? (
                <p className="hero-reveal mt-5 max-w-[620px] opacity-0 animate-[fadeUp_0.6s_ease-out_forwards] text-sm leading-6 text-[#1D0D3B]/60 [animation-delay:320ms] sm:text-base sm:leading-7">
                  {subdescription}
                </p>
              ) : null}
              <LandingCta
                label={ctaLabel}
                href={ctaHref}
                className="hero-reveal mt-7 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards] [animation-delay:400ms] sm:mt-8"
              />
            </div>
          </div>

          <div
            className={`${styles.scene} relative z-10 mx-auto min-h-[430px] w-full min-w-0 max-w-[520px] sm:min-h-[540px] sm:max-w-[620px] lg:-ml-8 lg:mt-16 lg:min-h-[620px] lg:max-w-none`}
          >
            <div
              aria-hidden="true"
              className={`${styles.glow} absolute inset-[8%_0_5%_4%] rounded-full`}
            />
            <div
              aria-hidden="true"
              className={`${styles.beam} absolute left-[-4%] top-[28%] h-[28%] w-[108%]`}
            />

            <div aria-hidden="true" className={`${styles.orbit} ${styles.orbitPrimary}`} />
            <div aria-hidden="true" className={`${styles.orbit} ${styles.orbitSecondary}`} />
            <div aria-hidden="true" className={`${styles.orbit} ${styles.orbitTertiary}`} />

            <span
              aria-hidden="true"
              className={`${styles.spark} absolute right-[8%] top-[20%] h-2.5 w-2.5 rounded-full bg-[#632BC5]`}
            />
            <span
              aria-hidden="true"
              className={`${styles.spark} ${styles.sparkDelayed} absolute bottom-[22%] left-[5%] h-2 w-2 rounded-full bg-[#8966ff]`}
            />

            <div className="hero-reveal absolute inset-0 z-10 flex items-center justify-center opacity-0 animate-[fadeUp_0.75s_ease-out_forwards] [animation-delay:180ms]">
              <div className={`${styles.float} w-[92%] sm:w-[88%] lg:w-[104%]`}>
                <Image
                  src={heroImage}
                  alt="Entrepreneur porté par une flèche de croissance"
                  width={1122}
                  height={1402}
                  sizes="(min-width: 1280px) 570px, (min-width: 1024px) 48vw, (min-width: 640px) 560px, 92vw"
                  className={`${styles.image} h-auto w-full select-none`}
                  draggable={false}
                  preload
                />
              </div>
            </div>

            <div
              aria-hidden="true"
              className={`${styles.shadow} absolute bottom-[5%] left-[17%] h-[8%] w-[72%] rounded-[50%]`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
