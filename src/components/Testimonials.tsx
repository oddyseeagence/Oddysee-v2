"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRightIcon, QuoteIcon } from "@/components/icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Excellente expérience de travail avec cette équipe, ils ont clairement compris nos besoins et livré un design épuré et moderne, parfaitement dans les temps.",
    name: "Michael Johnson",
    role: "PDG de Startup Tech",
    avatar: "/images/e4BWmAGi1BLgfp8ovDBTi284Ec.png",
  },
  {
    quote:
      "L'équipe a été très professionnelle et agréable, ils ont communiqué clairement, partagé des mises à jour régulières, et livré un beau design qui a aidé notre entreprise à se développer en ligne.",
    name: "Sophia Anderson",
    role: "Directrice Marketing",
    avatar: "/images/Ve4xe8fe2mEHspmmkKz2EDVx0A4.png",
  },
  {
    quote:
      "Qualité de travail incroyable et souci du détail, le design final était magnifique et fonctionnait parfaitement sur tous les appareils et écrans.",
    name: "Emily Carter",
    role: "Cheffe de Produit",
    avatar: "/images/KC3Kuv2mmVfyLTTg0k3nlV2IAO8.png",
  },
  {
    quote:
      "Nous sommes très satisfaits du résultat final, le design est moderne et professionnel, et le processus était simple, rapide et bien organisé du début à la fin.",
    name: "Olivia Martinez",
    role: "Responsable de Marque",
    avatar: "/images/JfJAfR6lq1p2gtGDdu4qauSo5k.png",
  },
  {
    quote:
      "Travailler avec cette équipe a été une excellente expérience, ils ont clairement compris nos besoins et livré un design épuré et moderne qui a parfaitement amélioré notre marque et l'expérience utilisateur.",
    name: "David Miller",
    role: "Propriétaire d'Entreprise SaaS",
    avatar: "/images/SDZauHxn0fY54tA8kHIfP6zJ9aU.png",
  },
  {
    quote:
      "Oddysee a transformé notre vision en une identité claire et mémorable. Le processus était fluide et le résultat a dépassé toutes nos attentes.",
    name: "Camille Laurent",
    role: "Fondatrice de Maison Lune",
    avatar: "/images/Ve4xe8fe2mEHspmmkKz2EDVx0A4.png",
  },
  {
    quote:
      "Notre nouveau site est plus rapide, plus simple à utiliser et beaucoup plus efficace pour générer des demandes. La différence a été immédiate.",
    name: "Thomas Bernard",
    role: "Directeur Commercial",
    avatar: "/images/e4BWmAGi1BLgfp8ovDBTi284Ec.png",
  },
  {
    quote:
      "Une équipe attentive, réactive et exigeante sur chaque détail. Notre marque dispose enfin d'une image cohérente qui reflète vraiment notre travail.",
    name: "Sarah El Amrani",
    role: "Responsable Communication",
    avatar: "/images/KC3Kuv2mmVfyLTTg0k3nlV2IAO8.png",
  },
];

const PAGE_COUNT = testimonials.length;
const AUTO_ADVANCE_MS = 4500;

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="relative min-h-[300px] rounded-3xl bg-white px-8 pb-10 pt-20 shadow-[0_24px_60px_rgba(54,35,88,0.14)] md:px-16">
      <Image
        src={testimonial.avatar}
        alt={testimonial.name}
        width={96}
        height={96}
        className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover ring-4 ring-[#632BC5] shadow-lg"
      />
      <QuoteIcon className="absolute left-7 top-20 h-7 w-9 text-[#632BC5] md:left-10" />
      <QuoteIcon className="absolute bottom-8 right-7 h-7 w-9 rotate-180 text-[#632BC5] md:right-10" />
      <p className="mx-auto max-w-2xl px-8 font-sans text-center text-base leading-8 text-[#625d6b] md:text-lg">
        {testimonial.quote}
      </p>
      <div className="mt-8 text-center">
        <h3 className="font-sans text-base font-normal text-[#632BC5]">
          {testimonial.name}
        </h3>
        <p className="mt-1 font-sans text-xs text-[#1D0D3B]/45">
          {testimonial.role}
        </p>
      </div>
    </article>
  );
}

export function Testimonials() {
  const [page, setPage] = useState(0);
  const { ref: headerRef, isRevealed: isHeaderRevealed } =
    useScrollReveal<HTMLDivElement>();
  const { ref: carouselRef, isRevealed: isCarouselRevealed } =
    useScrollReveal<HTMLDivElement>();

  const showPrevious = useCallback(() => {
    setPage((currentPage) =>
      currentPage === 0 ? PAGE_COUNT - 1 : currentPage - 1,
    );
  }, []);

  const showNext = useCallback(() => {
    setPage((currentPage) => (currentPage + 1) % PAGE_COUNT);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(showNext, AUTO_ADVANCE_MS);
    return () => window.clearInterval(interval);
  }, [showNext]);

  return (
    <section className="overflow-hidden bg-[#F7F3FF] px-4 py-24 md:px-8">
      <div className="mx-auto max-w-[1180px]">
        <div
          ref={headerRef}
          data-reveal={isHeaderRevealed ? "visible" : "hidden"}
          className="scroll-reveal mx-auto max-w-4xl text-center"
        >
          <h2 className="font-heading text-4xl text-[#1D0D3B] md:text-5xl">
            Vrais retours de nos clients
          </h2>
        </div>

        <div
          ref={carouselRef}
          data-reveal={isCarouselRevealed ? "visible" : "hidden"}
          className="scroll-reveal relative mx-auto mt-24 max-w-5xl px-0 md:px-20"
          style={{ transitionDelay: "90ms" }}
          aria-live="polite"
        >
          <div className="relative mx-auto max-w-[820px] pt-12">
            <div
              aria-hidden="true"
              className="absolute inset-x-5 bottom-0 top-16 translate-y-5 rounded-3xl bg-white/45 shadow-[0_18px_45px_rgba(54,35,88,0.08)]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-10 bottom-0 top-20 translate-y-10 rounded-3xl bg-white/25"
            />
            <div
              key={page}
              className="relative animate-in fade-in slide-in-from-right-4 duration-500"
            >
              <TestimonialCard testimonial={testimonials[page]} />
            </div>
          </div>

          <button
            type="button"
            onClick={showPrevious}
            aria-label="Afficher le témoignage précédent"
            className="absolute left-1 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1D0D3B] shadow-md transition hover:text-[#632BC5] md:left-0"
          >
            <ArrowRightIcon className="h-5 w-5 rotate-180" />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Afficher le témoignage suivant"
            className="absolute right-1 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1D0D3B] shadow-md transition hover:text-[#632BC5] md:right-0"
          >
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-14 flex justify-center gap-2" aria-label="Pagination des témoignages">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setPage(index)}
              aria-label={`Afficher le témoignage de ${testimonial.name}`}
              aria-current={page === index ? "true" : undefined}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                page === index
                  ? "w-7 bg-[#632BC5]"
                  : "bg-[#632BC5]/25 hover:bg-[#632BC5]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
