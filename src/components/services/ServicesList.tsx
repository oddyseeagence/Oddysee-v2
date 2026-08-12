"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ServicesListItem {
  index: string;
  title: string;
  image: string;
  description: string;
  href: string;
}

const servicesList: ServicesListItem[] = [
  {
    index: "01",
    title: "Applications & logiciels",
    image: "/images/U6Npa7O4X2OlLqe9caPvFM1fQ.png",
    href: "/contact",
    description:
      "Applications web et mobiles, solutions SaaS et outils métiers conçus pour automatiser vos processus et accompagner durablement votre croissance.",
  },
  {
    index: "02",
    title: "Réseaux sociaux",
    image: "/images/th0iLwfNy4GC3lETawQhJYrM.png",
    href: "/contact",
    description:
      "Stratégie éditoriale, contenus et gestion quotidienne pour développer votre visibilité, renforcer votre crédibilité et engager durablement vos audiences.",
  },
  {
    index: "03",
    title: "Publicité digitale",
    image: "/images/aiLTjYPkgfqyzApAFEHC4C2uDg.png",
    href: "/contact",
    description:
      "Campagnes Meta et Google Ads pilotées par la donnée pour attirer les bonnes audiences et générer davantage de prospects réellement qualifiés.",
  },
  {
    index: "04",
    title: "SEO",
    image: "/images/XGpOxv5lnuHffpehV7PCZKFuF4.png",
    href: "/contact",
    description:
      "Stratégie de référencement, optimisation technique et contenu ciblé pour gagner durablement en visibilité et attirer vos prospects.",
  },
  {
    index: "05",
    title: "Sites web",
    image: "/images/PTrOdXdJAOGMtfCb7ccLalR0o.png",
    href: "/contact",
    description:
      "Sites vitrines, e-commerce et plateformes sur mesure pensés pour valoriser votre activité et transformer davantage de visiteurs en clients.",
  },
];

export function ServicesList() {
  const [activeIndex, setActiveIndex] = useState(0);
  const rowRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const isTouchDevice = window.matchMedia(
      "(hover: none), (pointer: coarse)",
    ).matches;

    if (!isTouchDevice || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const centeredEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!centeredEntry) return;

        const nextIndex = Number(
          (centeredEntry.target as HTMLButtonElement).dataset.serviceIndex,
        );

        if (Number.isInteger(nextIndex)) setActiveIndex(nextIndex);
      },
      {
        rootMargin: "-32% 0px -38% 0px",
        threshold: [0.15, 0.35, 0.6],
      },
    );

    rowRefs.current.forEach((row) => {
      if (row) observer.observe(row);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services-list"
      className="bg-[var(--cover-bg-color)] py-24 text-background md:py-32 xl:py-40"
    >
      <div className="about-container">
        <div className="grid items-start gap-12 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-20 xl:grid-cols-[320px_minmax(0,1fr)] xl:gap-28">
          <div className="sticky top-20 z-20 min-h-[210px] rounded-3xl bg-[var(--cover-bg-color)] py-3 md:top-24 md:min-h-[250px] lg:top-28 lg:min-h-[500px] lg:rounded-none lg:py-0">
            {servicesList.map((service, index) => (
              <div
                key={service.index}
                aria-hidden={activeIndex !== index}
                className={`absolute inset-0 grid grid-cols-[104px_minmax(0,1fr)] items-center gap-5 transition-opacity duration-[350ms] ease-in-out md:grid-cols-[144px_minmax(0,1fr)] lg:block ${
                  activeIndex === index
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              >
                <div className="relative aspect-square w-[104px] overflow-hidden rounded-2xl border border-background/15 bg-background/5 shadow-2xl shadow-black/20 md:w-36 lg:w-[250px] lg:rounded-3xl">
                  <Image
                    src={service.image}
                    alt={`Aperçu du service ${service.title}`}
                    fill
                    sizes="(max-width: 767px) 104px, (max-width: 1023px) 144px, 250px"
                    className="object-cover"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"
                  />
                </div>

                <div className="min-w-0 lg:mt-8">
                  <h2 className="text-lg font-semibold leading-tight text-background md:text-xl lg:text-2xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 line-clamp-4 text-sm leading-6 text-background/60 md:max-w-sm lg:mt-4 lg:line-clamp-none lg:text-base lg:leading-7">
                    {service.description}
                  </p>
                  <a
                    href={service.href}
                    className="mt-5 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/15 transition duration-200 hover:scale-[1.02] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cover-bg-color)] lg:mt-6"
                  >
                    Consulter ce service
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="border-b border-background/15">
            {servicesList.map((service, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={service.index}
                  ref={(node) => {
                    rowRefs.current[index] = node;
                  }}
                  type="button"
                  data-service-index={index}
                  aria-pressed={isActive}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className="group flex min-h-[112px] w-full items-center justify-between gap-5 border-t border-background/15 py-7 text-left outline-none sm:min-h-[132px] md:py-9 lg:min-h-[152px] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                >
                  <span
                    className={`min-w-0 text-[34px] font-bold uppercase leading-[0.94] tracking-[-0.045em] transition-[color,opacity] duration-300 ease-in-out sm:text-[44px] md:text-[54px] lg:text-[62px] xl:text-[72px] ${
                      isActive
                        ? "text-background opacity-100"
                        : "text-background opacity-15"
                    }`}
                  >
                    {service.title}
                  </span>
                  <span
                    className={`shrink-0 self-start pt-1 text-xs font-semibold tracking-[0.08em] transition-[color,opacity] duration-300 ease-in-out md:pt-2 md:text-sm ${
                      isActive ? "text-accent opacity-100" : "text-accent opacity-30"
                    }`}
                  >
                    {`{ ${service.index} }`}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
