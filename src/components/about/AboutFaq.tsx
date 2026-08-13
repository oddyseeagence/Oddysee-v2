"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import type { AboutFaqItem } from "@/types/about";

const faqItems: AboutFaqItem[] = [
  {
    question: "Quels services propose Oddysee ?",
    answer:
      "Nous accompagnons les marques de la stratégie à l’expression : plateforme de marque, identité visuelle, direction artistique, design digital et contenus.",
  },
  {
    question: "Pouvons-nous voir vos projets précédents ?",
    answer:
      "Oui. Une sélection de cas est disponible dans la rubrique Projets, et nous pouvons partager des références complémentaires selon votre secteur et vos enjeux.",
  },
  {
    question: "Combien coûtent vos prestations ?",
    answer:
      "Chaque budget dépend du périmètre, de l’ambition et du calendrier. Après un premier échange, nous construisons une proposition transparente et adaptée.",
  },
  {
    question: "Travaillez-vous avec des startups ?",
    answer:
      "Absolument. Nous collaborons aussi bien avec de jeunes entreprises en lancement qu’avec des organisations établies en phase de transformation.",
  },
  {
    question: "Quelle est la durée moyenne d’un projet ?",
    answer:
      "Une mission d’identité complète dure généralement entre huit et douze semaines. Les formats plus ciblés peuvent avancer en quatre à six semaines.",
  },
  {
    question: "Avec quels outils travaillez-vous ?",
    answer:
      "Nous choisissons les outils selon le projet : Figma, Adobe Creative Cloud, solutions no-code et environnements de développement modernes.",
  },
  {
    question: "Travaillez-vous à distance ?",
    answer:
      "Oui. Notre méthode est pensée pour une collaboration fluide à distance, avec des rendez-vous réguliers, des livrables partagés et des décisions documentées.",
  },
  {
    question: "Développez-vous aussi des sites mobiles ?",
    answer:
      "Tous nos produits digitaux sont conçus mobile-first, avec une attention particulière portée à l’accessibilité, aux performances et à la qualité des interactions.",
  },
];

const faqColumns = [
  faqItems.map((item, index) => ({ item, index })).filter(({ index }) => index % 2 === 0),
  faqItems.map((item, index) => ({ item, index })).filter(({ index }) => index % 2 === 1),
];

export function AboutFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="pb-24 pt-20 md:pb-36 md:pt-28 xl:pb-[190px] xl:pt-[150px]">
      <div className="about-container">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em] text-[var(--about-accent)]">
            <span aria-hidden="true">›</span>
            FAQ
            <span aria-hidden="true">›</span>
          </p>
          <h2 className="about-display mx-auto mt-5 max-w-[760px] text-[42px] leading-[0.98] tracking-[-0.035em] text-[var(--about-foreground)] sm:text-[52px] lg:text-[64px]">
            Tout ce que vous devez savoir
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-6">
          {faqColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-4">
              {column.map(({ item, index }) => {
                const isOpen = openIndex === index;
                const panelId = `about-faq-panel-${index}`;

                return (
                  <article key={item.question} className="overflow-hidden rounded-[18px] bg-[#faf9ff] text-[#1D0D3B]">
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                        className="group flex min-h-[72px] w-full items-center justify-between gap-5 px-5 py-4 text-left text-[14px] font-semibold tracking-[-0.01em] transition-colors hover:text-[#6842e5] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#8966ff] sm:px-6 sm:text-[15px]"
                      >
                        <span>{item.question}</span>
                        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#ece8ff] text-[#7551eb]">
                          <Plus
                            aria-hidden="true"
                            className={`size-4 transition-transform duration-[280ms] motion-reduce:transition-none ${
                              isOpen ? "rotate-45" : "rotate-0"
                            }`}
                            strokeWidth={1.8}
                          />
                        </span>
                      </button>
                    </h3>

                    <div
                      id={panelId}
                      className={`grid transition-[grid-template-rows,opacity] duration-[280ms] ease-out motion-reduce:transition-none ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-6 text-[14px] leading-6 text-[#1D0D3B]/60 sm:px-6 sm:text-[15px] sm:leading-7">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-[13px] text-[var(--about-muted)]">
          Vous n’avez pas trouvé votre réponse ?{" "}
          <a
            href="/contact"
            className="text-[var(--about-foreground)] underline decoration-[var(--about-accent)] underline-offset-4 transition-colors hover:text-[var(--about-accent)]"
          >
            Écrivez-nous
          </a>
          .
        </p>
      </div>
    </section>
  );
}
