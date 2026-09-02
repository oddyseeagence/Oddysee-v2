"use client";

import Image from "next/image";

import { useScrollReveal } from "@/hooks/useScrollReveal";

import styles from "./GetWebV2PcShowcase.module.css";

const primaryWords = "VOTRE SITE · EN LIGNE · EN 7 JOURS ·";
const secondaryWords = "PLUS DE CLIENTS · PLUS DE VENTES ·";

export function GetWebV2PcShowcase() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>({
    rootMargin: "0px 0px -6% 0px",
  });

  return (
    <section
      ref={ref}
      data-reveal={isRevealed ? "visible" : "hidden"}
      className={styles.section}
      aria-labelledby="get-web-v2-pc-showcase-title"
    >
      <h2 id="get-web-v2-pc-showcase-title" className="sr-only">
        Votre présence digitale, prête à convertir
      </h2>

      <div className={styles.stage}>
        <div
          aria-hidden="true"
          className={`${styles.marquee} ${styles.marqueePrimary}`}
        >
          <div className={`${styles.track} ${styles.trackPrimary}`}>
            <span>{primaryWords}</span>
            <span>{primaryWords}</span>
          </div>
        </div>

        <div
          aria-hidden="true"
          className={`${styles.marquee} ${styles.marqueeSecondary}`}
        >
          <div className={`${styles.track} ${styles.trackSecondary}`}>
            <span>{secondaryWords}</span>
            <span>{secondaryWords}</span>
          </div>
        </div>

        <div aria-hidden="true" className={styles.glow} />
        <div aria-hidden="true" className={styles.groundShadow} />

        <div className={styles.pcAnchor}>
          <div className={styles.pcFloat}>
            <Image
              src="/get-web-v2%20images/the%20pc%20image.png"
              alt="Ordinateur Oddysee affichant le choix d'un objectif : clients, prospects, ventes, devis ou rendez-vous"
              width={1536}
              height={1024}
              sizes="(min-width: 1024px) 1100px, (min-width: 640px) 90vw, 94vw"
              className={styles.pcImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
