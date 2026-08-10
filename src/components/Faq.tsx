"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Quels services proposez-vous ?",
    answer:
      "Nous proposons des services de design UI/UX, de création de sites web, d'identité de marque et des solutions digitales complètes pour les entreprises.",
  },
  {
    question: "Combien coûtent vos services ?",
    answer:
      "Nos tarifs dépendent de la portée et de la complexité du projet. Nous préparons une proposition claire et adaptée après un premier échange.",
  },
  {
    question: "Combien de temps dure un projet ?",
    answer:
      "La plupart des projets prennent entre 5 et 15 jours, selon leur complexité et les besoins définis ensemble.",
  },
  {
    question: "Proposez-vous des révisions ?",
    answer:
      "Oui. Chaque projet inclut des cycles de révision afin de garantir que le résultat final corresponde pleinement à vos attentes.",
  },
  {
    question: "Puis-je voir vos réalisations précédentes ?",
    answer:
      "Bien sûr. Consultez notre page Projets pour découvrir une sélection de nos réalisations récentes.",
  },
  {
    question: "Travaillez-vous avec des startups ?",
    answer:
      "Oui. Nous accompagnons régulièrement des startups et des marques en croissance, quelle que soit l'étape de leur développement.",
  },
  {
    question: "Quels outils utilisez-vous ?",
    answer:
      "Nous concevons principalement avec Figma et développons avec des technologies modernes comme Next.js et Tailwind CSS.",
  },
  {
    question: "Concevez-vous des applications mobiles ?",
    answer:
      "Oui. Le design d'applications mobiles fait partie de nos services, au même titre que les sites web et les tableaux de bord.",
  },
];

function FaqAccordionItem({ item }: { item: FaqItem }) {
  return (
    <details name="faq" className="group border-b border-[#1D0D3B]/15">
      <summary className="flex min-h-[88px] w-full cursor-pointer list-none items-center justify-between gap-8 py-7 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#632BC5] md:min-h-[104px] md:py-8 lg:min-h-[116px] [&::-webkit-details-marker]:hidden">
        <span className="max-w-[1100px] font-sans text-[19px] font-medium leading-[1.3] tracking-[-0.025em] text-[#111111] md:text-[22px] lg:text-[24px]">
          {item.question}
        </span>

        <span
          aria-hidden="true"
          className="relative size-6 shrink-0 text-[#632BC5]"
        >
          <span className="absolute left-1/2 top-1/2 h-[2px] w-[18px] -translate-x-1/2 -translate-y-1/2 bg-current" />
          <span className="absolute left-1/2 top-1/2 h-[18px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-current transition-[opacity,transform] duration-300 group-open:rotate-90 group-open:opacity-0" />
        </span>
      </summary>

      <div className="max-w-[920px] pb-8 pr-12 md:pb-10">
        <p className="font-sans text-base leading-7 text-[#51485E] md:text-[17px]">
          {item.answer}
        </p>
      </div>
    </details>
  );
}

export function Faq({
  background = "lavender",
}: {
  background?: "lavender" | "white";
}) {
  const { ref: headerRef, isRevealed: isHeaderRevealed } =
    useScrollReveal<HTMLDivElement>();
  const { ref: listRef, isRevealed: isListRevealed } =
    useScrollReveal<HTMLDivElement>();

  return (
    <section className={background === "white" ? "bg-white" : "bg-[#F7F3FF]"}>
      <div className="mx-auto grid max-w-[1824px] gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[minmax(300px,410px)_minmax(0,1fr)] lg:gap-12 lg:px-12 lg:py-32">
        <div
          ref={headerRef}
          data-reveal={isHeaderRevealed ? "visible" : "hidden"}
          className="scroll-reveal lg:sticky lg:top-28 lg:self-start"
        >
          <h2 className="font-heading text-[clamp(88px,8vw,150px)] font-medium leading-[0.82] tracking-[-0.075em] text-[#090909]">
            FAQ
          </h2>
          <p className="mt-14 max-w-[380px] font-sans text-[19px] leading-[1.35] tracking-[-0.02em] text-[#51485E] md:mt-20 md:text-[22px]">
            On nous a tout demandé. Voici tout ce que vous devez savoir avant de
            travailler avec nous.
          </p>
          <a
            href="/contact"
            className="group/link mt-12 inline-flex items-center gap-4 font-sans text-[22px] font-medium tracking-[-0.025em] text-[#111111] outline-none transition-colors hover:text-[#632BC5] focus-visible:ring-2 focus-visible:ring-[#632BC5] md:mt-20 md:text-[26px]"
          >
            <span
              aria-hidden="true"
              className="text-[32px] font-light leading-none text-[#632BC5] transition-transform duration-300 group-hover/link:translate-x-1"
            >
              ↳
            </span>
            Poser une question
          </a>
        </div>

        <div
          ref={listRef}
          data-reveal={isListRevealed ? "visible" : "hidden"}
          className="scroll-reveal border-t border-[#1D0D3B]/15 text-left [transition-delay:90ms]"
        >
          {faqItems.map((item) => (
            <FaqAccordionItem key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
