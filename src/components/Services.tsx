"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ServiceRow {
  index: string;
  title: string;
  description: string;
}

const SERVICE_ROWS: ServiceRow[] = [
  {
    index: "01",
    title: "Site Web & Landing Pages",
    description:
      "Sites et pages construits pour convertir le trafic généré par vos publicités en clients réels.",
  },
  {
    index: "02",
    title: "Contenu & Publicité",
    description:
      "Photo, vidéo, réseaux sociaux, campagnes publicitaires, du contenu et des pubs qui travaillent ensemble, pas séparément.",
  },
  {
    index: "03",
    title: "Design & Identité",
    description:
      "Logo, charte graphique, direction artistique, la base visuelle qui donne à votre marque une image cohérente.",
  },
  {
    index: "04",
    title: "Automation Marketing",
    description:
      "On automatise le suivi de vos leads et vos communications, pour qu'aucun contact ne se perde entre le clic et la conversion.",
  },
];

interface ServiceRowItemProps {
  row: ServiceRow;
  isLast: boolean;
  delayMs: number;
}

function ServiceRowItem({ row, isLast, delayMs }: ServiceRowItemProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal={isRevealed ? "visible" : "hidden"}
      className={`scroll-reveal group border-t ${isLast ? "border-b" : ""} border-[rgba(10,10,10,0.1)] py-16 px-6 -mx-6 hover:bg-[rgba(10,10,10,0.03)]`}
      style={{
        transitionDelay: `${delayMs}ms`,
      }}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <span className="font-sans text-base text-[rgba(29,13,59,0.6)] md:w-24 shrink-0">
          {row.index}
        </span>
        <h3 className="font-heading text-3xl md:text-4xl text-[#1D0D3B] flex-grow group-hover:text-[#a78fff] transition-colors duration-200">
          {row.title}
        </h3>
        <p className="font-sans text-[14.4px] leading-[22px] font-medium text-[rgba(29,13,59,0.7)] md:max-w-xs md:text-right">
          {row.description}
        </p>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section className="bg-[#F7F3FF] py-24">
      <div className="mx-auto max-w-[1320px] px-4 md:px-8 lg:px-10">
        <div className="flex flex-col">
          <div className="contents md:mb-16 md:flex md:flex-row md:items-end md:justify-between md:gap-6">
            <div className="order-1 md:order-none">
              <h2 className="font-heading text-4xl text-[#1D0D3B] md:text-5xl lg:text-[56px]">
                Ce qu&apos;on fait
              </h2>
            </div>
            <button
              type="button"
              className="order-3 mt-8 rounded-full bg-[#632BC5] px-8 py-4 font-bold text-[#FFFFFF] transition hover:brightness-110 md:order-none md:mt-0"
            >
              More Services
            </button>
          </div>

          <div className="order-2 mt-16 md:order-none md:mt-0">
            {SERVICE_ROWS.map((row, i) => (
              <ServiceRowItem
                key={row.title + i}
                row={row}
                isLast={i === SERVICE_ROWS.length - 1}
                delayMs={i * 80}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
