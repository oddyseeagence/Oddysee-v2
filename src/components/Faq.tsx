"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "À quoi vous attendre lorsque vous nous choisissez ?",
    answer:
      "Une approche à la fois méthodique, avec des objectifs clairs et des plans pour les atteindre, et flexible, en adaptant notre stratégie aux changements lorsque cela est nécessaire pour obtenir les meilleurs résultats.",
  },
  {
    question: "Est-ce que la publicité suffit pour générer des clients ?",
    answer:
      "Non, la publicité seule ne suffit pas. Sans un site optimisé, un message clair et un bon parcours utilisateur, les campagnes perdent en efficacité. C’est pourquoi nous travaillons toujours sur l’ensemble de l’écosystème : site, message, publicité et suivi.",
  },
  {
    question: "Pourquoi les optimisations sont-elles continues ?",
    answer:
      "Les comportements des utilisateurs, les algorithmes et la concurrence évoluent constamment. L’optimisation continue permet de maintenir de bonnes performances, réduire les coûts d’acquisition et rester compétitif sur votre marché.",
  },
  {
    question: "Est-ce que je peux demander des modifications à tout moment ?",
    answer:
      "Oui, dans le cadre défini du projet. Les ajustements font partie du processus, mais ils sont planifiés et priorisés afin de préserver la cohérence, les délais et la performance globale.",
  },
  {
    question: "Combien de temps faut-il pour créer un site web ?",
    answer:
      "Selon la complexité du projet, la création d’un site web prend généralement entre deux et dix semaines, de la conception au déploiement.",
  },
  {
    question: "Comment gérez-vous la confidentialité et la sécurité des données ?",
    answer:
      "Nous accordons une importance majeure à la confidentialité et à la sécurité des informations de nos clients. Toutes les données, stratégies et informations sensibles sont protégées par des mesures de sécurité strictes et traitées dans le respect des bonnes pratiques et des réglementations en vigueur.",
  },
];

function FaqAccordionItem({ item }: { item: FaqItem }) {
  return (
    <details name="faq" className="group border-b border-[#1D0D3B]/15">
      <summary className="flex min-h-[88px] w-full cursor-pointer list-none items-center justify-between gap-8 py-7 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#632BC5] md:min-h-[104px] md:py-8 lg:min-h-[116px] [&::-webkit-details-marker]:hidden">
        <span className="max-w-[1100px] font-sans text-[19px] font-medium leading-[1.3] tracking-[-0.025em] text-[#1D0D3B] md:text-[22px] lg:text-[24px]">
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
          <h2 className="font-heading text-[clamp(88px,8vw,150px)] font-medium leading-[0.82] tracking-[-0.075em] text-[#1D0D3B]">
            FAQ
          </h2>
          <p className="mt-14 max-w-[380px] font-sans text-[19px] leading-[1.35] tracking-[-0.02em] text-[#51485E] md:mt-20 md:text-[22px]">
            On nous a tout demandé. Voici tout ce que vous devez savoir avant de
            travailler avec nous.
          </p>
          <a
            href="/contact"
            className="group/link mt-12 inline-flex items-center gap-4 font-sans text-[22px] font-medium tracking-[-0.025em] text-[#1D0D3B] outline-none transition-colors hover:text-[#632BC5] focus-visible:ring-2 focus-visible:ring-[#632BC5] md:mt-20 md:text-[26px]"
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
