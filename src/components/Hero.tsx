"use client";

import Image from "next/image";
import Link from "next/link";

const ANIMATE = "hero-reveal opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden bg-background md:h-screen md:min-h-0"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="relative mx-auto flex min-h-[100svh] max-w-[1320px] flex-col justify-end px-4 pb-[calc(2rem_+_env(safe-area-inset-bottom))] md:h-full md:min-h-0 md:px-8 md:pb-16 lg:px-10">
        <div className="relative z-10 flex flex-col gap-7 md:gap-10">
          <div className="contents lg:flex lg:flex-row lg:items-center lg:justify-between">
            <h1
              className={`order-1 max-w-[980px] font-heading text-4xl leading-[44px] tracking-[-1px] text-[#faf9ff] md:text-6xl md:leading-[64px] md:tracking-[-1.5px] lg:text-[80px] lg:leading-[88px] lg:tracking-[-2.5px] ${ANIMATE} [animation-delay:120ms]`}
            >
              Faire évoluer votre business ne devrait pas être un pari.
            </h1>

            <div
              className={`order-3 flex shrink-0 flex-col items-end text-right ${ANIMATE} [animation-delay:480ms]`}
            >
              <Image
                src="/videos/worldwide-badge.gif"
                alt=""
                width={60}
                height={60}
                unoptimized
                className="ml-auto h-12 w-12 md:h-[60px] md:w-[60px]"
              />
              <h2 className="mt-2 font-sans text-sm font-medium leading-5 text-[#faf9ff]/75 md:mt-3 md:text-base md:leading-6">
                <span className="block">Basée à Marrakech,</span>
                <span className="block">active à l&apos;international.</span>
              </h2>
            </div>
          </div>

          <div className="contents lg:block lg:max-w-[980px] lg:text-left">
            <p
              className={`order-2 max-w-[480px] font-sans text-base font-normal leading-6 text-[#faf9ff]/75 md:text-lg md:font-medium md:leading-[27px] ${ANIMATE} [animation-delay:240ms]`}
            >
              On connecte votre design, votre publicité et votre contenu en un
              seul système, pour que chaque élément aille dans la même
              direction au lieu de se disperser.
            </p>

            <div
              className={`order-4 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:mt-8 ${ANIMATE} [animation-delay:360ms]`}
            >
              <Link
                href="/contact"
                className="inline-flex w-[190px] items-center justify-center rounded-full bg-[#632BC5] px-10 py-4 font-sans font-bold text-[#faf9ff] transition hover:brightness-110 sm:w-auto"
              >
                Engagez-nous
              </Link>
              <Link
                href="/a-propos"
                className="inline-flex w-[190px] items-center justify-center rounded-full bg-[rgba(250,249,255,0.3)] px-10 py-4 font-sans text-[#faf9ff] transition hover:bg-[rgba(250,249,255,0.4)] sm:w-auto"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
