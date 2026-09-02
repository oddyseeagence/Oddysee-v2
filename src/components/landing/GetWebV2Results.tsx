"use client";

import Image from "next/image";

import { LandingCta } from "@/components/landing/LandingCta";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import styles from "./GetWebV2Results.module.css";

interface GetWebV2ResultStat {
  value: string;
  label: string;
}

interface GetWebV2ResultsProps {
  heading: string;
  description: string;
  stats: readonly GetWebV2ResultStat[];
  ctaLabel: string;
  ctaHref: string;
}

const statClasses = [
  styles.statOne,
  styles.statTwo,
  styles.statThree,
  styles.statFour,
] as const;

export function GetWebV2Results({
  heading,
  description,
  stats,
  ctaLabel,
  ctaHref,
}: GetWebV2ResultsProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      data-reveal={isRevealed ? "visible" : "hidden"}
      className={`${styles.section} scroll-reveal overflow-hidden bg-white px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-10 lg:py-24`}
    >
      <div className="mx-auto max-w-[1320px]">
        <h2 className="mx-auto max-w-[840px] font-heading text-[clamp(42px,6vw,80px)] leading-[0.92] tracking-[-0.055em] text-[#1D0D3B]">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#1D0D3B]/65">
          {description}
        </p>

        <div className={styles.stage}>
          <div aria-hidden="true" className={styles.glow} />
          <div aria-hidden="true" className={`${styles.orbit} ${styles.orbitOne}`} />
          <div aria-hidden="true" className={`${styles.orbit} ${styles.orbitTwo}`} />
          <span aria-hidden="true" className={`${styles.spark} ${styles.sparkOne}`} />
          <span aria-hidden="true" className={`${styles.spark} ${styles.sparkTwo}`} />
          <span aria-hidden="true" className={`${styles.spark} ${styles.sparkThree}`} />

          <div className={styles.phoneAnchor}>
            <div className={styles.phoneFloat}>
              <Image
                src="/get-web-v2%20images/the%20phone%20image.png"
                alt="Profil Oddysee présenté sur un smartphone"
                width={1358}
                height={1159}
                sizes="(min-width: 1024px) 650px, (min-width: 640px) 580px, 94vw"
                className={styles.phoneImage}
              />
            </div>
          </div>

          <dl className={styles.stats}>
            {stats.slice(0, 4).map((stat, index) => (
              <div
                key={`${stat.value}-${stat.label}`}
                className={`${styles.statCard} ${statClasses[index] ?? ""}`}
              >
                <dt className={styles.statValue}>{stat.value}</dt>
                <dd className={styles.statLabel}>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <LandingCta
          label={ctaLabel}
          href={ctaHref}
          className="mx-auto mt-8 sm:mt-10"
        />
      </div>
    </section>
  );
}
