"use client";

import Image from "next/image";

const ANIMATE = "hero-reveal opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]";

export function Hero() {
  return (
    <section id="hero" className="relative h-screen overflow-hidden bg-background">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="relative mx-auto flex h-full max-w-[1320px] flex-col justify-end px-4 pb-16 md:px-8 lg:px-10">
        <div className="relative z-10 flex flex-col gap-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <h1
              className={`max-w-[980px] font-heading text-4xl leading-[44px] tracking-[-1px] text-[#faf9ff] md:text-6xl md:leading-[64px] md:tracking-[-1.5px] lg:text-[80px] lg:leading-[88px] lg:tracking-[-2.5px] ${ANIMATE} [animation-delay:120ms]`}
            >
              Faire évoluer votre business ne devrait pas être un pari.
            </h1>

            <div
              className={`flex shrink-0 flex-col items-end text-right ${ANIMATE} [animation-delay:480ms]`}
            >
              <Image
                src="/videos/worldwide-badge.gif"
                alt=""
                width={60}
                height={60}
                unoptimized
                className="ml-auto h-[60px] w-[60px]"
              />
              <h2 className="mt-3 font-sans text-base font-medium leading-6 text-[#faf9ff]/75">
                <span className="block">Basée à Marrakech,</span>
                <span className="block">active à l&apos;international.</span>
              </h2>
            </div>
          </div>

          <div className="max-w-[980px] text-left">
            <p
              className={`max-w-[480px] font-sans text-lg leading-[27px] font-medium text-[#faf9ff]/75 ${ANIMATE} [animation-delay:240ms]`}
            >
              On connecte votre design, votre publicité et votre contenu en un
              seul système, pour que chaque élément aille dans la même
              direction au lieu de se disperser.
            </p>

            <div
              className={`mt-8 flex flex-wrap gap-4 ${ANIMATE} [animation-delay:360ms]`}
            >
              <a
                href="#contact"
                className="rounded-full bg-[#632BC5] px-10 py-4 font-sans font-bold text-[#faf9ff] transition hover:brightness-110"
              >
                Engagez-nous
              </a>
              <a
                href="#about"
                className="rounded-full bg-[rgba(250,249,255,0.3)] px-10 py-4 font-sans text-[#faf9ff] transition hover:bg-[rgba(250,249,255,0.4)]"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
