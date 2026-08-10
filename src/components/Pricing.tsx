"use client";

import { ArrowRightIcon } from "@/components/icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface PricingPlan {
  name: string;
  duration: string;
  price: string;
  priceSuffix?: string;
  description: string;
  cta: string;
  includes: string[];
  featured?: boolean;
}

const PLANS: PricingPlan[] = [
  {
    name: "Expérience Élite",
    duration: "5-7 Jours",
    price: "900 $",
    priceSuffix: "/mois",
    description: "Un design élégant et intuitif pour les marques modernes.",
    cta: "Choisir ce Forfait",
    includes: [
      "Design UI d'App Mobile",
      "Design de Site Web & Landing Page",
      "Design d'Interface Tableau de Bord",
      "Jusqu'à 10 Écrans Inclus",
      "2 Révisions Incluses",
    ],
  },
  {
    name: "Expérience Ultime",
    duration: "10-15 Jours",
    price: "1500 $",
    priceSuffix: "/mois",
    description: "Une expérience raffinée et évolutive pour les marques en croissance.",
    cta: "Choisir ce Forfait",
    includes: [
      "Design Mobile, Web & Tableau de Bord",
      "Jusqu'à 20 Écrans Inclus",
      "Prototypage Haute Fidélité",
      "Parcours Utilisateur & Structure UX",
      "4 Révisions Incluses",
    ],
    featured: true,
  },
  {
    name: "Tarification Personnalisée",
    duration: "Selon le projet",
    price: "Contactez-nous",
    description: "Des solutions sur mesure pour les projets à grande échelle.",
    cta: "Choisir ce Forfait",
    includes: [
      "Cadrage de projet basé sur consultation",
      "Systèmes UX/UI et design personnalisés",
      "Collaboration approfondie avec votre équipe",
      "Intégration complète design et développement",
      "Support Prioritaire Inclus",
    ],
  },
];

function PricingCard({ plan, index }: { plan: PricingPlan; index: number }) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  const cardBg = plan.featured ? "bg-[#ece7ff]" : "bg-[#0a0a0a]";
  const cardExtra = plan.featured
    ? "md:-mt-4 md:mb-4 ring-1 ring-[#632BC5]/20"
    : "";
  const ctaClasses = plan.featured
    ? "bg-[#632BC5] text-[#1D0D3B] rounded-full py-4 w-full font-bold mt-6 hover:brightness-110 transition"
    : "bg-white/15 text-white/40 rounded-full py-4 w-full font-bold mt-6";

  return (
    <div
      ref={ref}
      data-reveal={isRevealed ? "visible" : "hidden"}
      className={`scroll-reveal ${cardBg} rounded-2xl p-6 pb-8 ${cardExtra}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="flex items-center justify-between mb-6">
        <span className="text-[#632BC5] font-medium text-base">
          • {plan.name}
        </span>
        <span className="border border-white/15 rounded-full px-4 py-1.5 text-sm text-[#faf9ff]">
          {plan.duration}
        </span>
      </div>

      <div className="font-heading text-5xl md:text-[56px] text-[#faf9ff]">
        {plan.price}
        {plan.priceSuffix && (
          <span className="font-sans text-base text-white/50">
            {plan.priceSuffix}
          </span>
        )}
      </div>

      <p className="font-sans text-base text-white/60 mt-3">
        {plan.description}
      </p>

      <button type="button" className={ctaClasses}>
        {plan.cta}
      </button>

      <hr className="border-white/10 my-6" />

      <h4 className="font-sans font-bold text-white text-base mb-4">
        Ce qui est inclus :
      </h4>

      <ul className="space-y-4">
        {plan.includes.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-white text-base"
          >
            <ArrowRightIcon className="w-3.5 h-3.5 text-[#632BC5] mt-1 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Pricing() {
  const { ref: headerRef, isRevealed: isHeaderRevealed } =
    useScrollReveal<HTMLDivElement>();

  return (
    <section className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-10 py-24 text-center">
      <div
        ref={headerRef}
        data-reveal={isHeaderRevealed ? "visible" : "hidden"}
        className="scroll-reveal"
      >
        <span className="inline-flex items-center gap-2 text-[#632BC5] font-medium text-base">
          <span aria-hidden="true">•</span> Nos Tarifs
        </span>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] text-[#1D0D3B] mt-3">
          Des Forfaits Flexibles Pour Vous
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left items-start">
        {PLANS.map((plan, index) => (
          <PricingCard key={plan.name} plan={plan} index={index} />
        ))}
      </div>
    </section>
  );
}
