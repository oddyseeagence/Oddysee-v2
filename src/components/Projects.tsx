"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { projects } from "@/lib/projects";

export function Projects() {
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(
      (card): card is HTMLAnchorElement => card !== null,
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cards.forEach((card) => card.setAttribute("data-visible", "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.setAttribute("data-visible", "true");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects-grid"
      aria-label="Projets sélectionnés"
      className="overflow-hidden bg-white pb-24 pt-20 md:pb-32 md:pt-28 lg:pb-40 lg:pt-32"
    >
      <div className="about-container grid gap-x-4 gap-y-12 md:grid-cols-2 md:gap-y-16">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            ref={(node) => {
              cardRefs.current[index] = node;
            }}
            href={`/projets/${project.slug}`}
            aria-label={`Voir le projet ${project.title}`}
            className="project-grid-card group block translate-y-10 opacity-0 outline-none transition-[opacity,transform] duration-700 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 focus-visible:rounded-3xl focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-white"
          >
            <div className="relative aspect-[1.38/1] overflow-hidden rounded-[22px] bg-muted">
              <div className="project-grid-motion absolute -inset-[4%]">
                <Image
                  src={project.image}
                  alt={`Aperçu visuel du projet ${project.title}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="project-grid-media object-cover"
                  priority={index < 2}
                />
              </div>

              <div
                className="pointer-events-none absolute inset-0 bg-foreground/5 transition-colors duration-500 group-hover:bg-foreground/15"
                aria-hidden="true"
              />

              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/85 px-5 py-2.5 text-sm font-semibold tracking-[-0.02em] text-white shadow-xl backdrop-blur-md transition-transform duration-500 ease-out group-hover:scale-105 md:text-base">
                {project.title}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 px-1 pt-4 text-foreground">
              <p className="flex min-w-0 items-baseline gap-3">
                <span className="truncate text-base font-semibold tracking-[-0.02em]">
                  {project.title}.
                </span>
                <span className="text-sm text-foreground/40">/{project.year}</span>
              </p>

              <span
                className="flex shrink-0 items-center gap-1.5"
                aria-hidden="true"
              >
                <span className="size-1.5 rounded-full bg-primary/25 transition-colors duration-300 group-hover:bg-primary" />
                <span className="size-1.5 rounded-full bg-primary/25 transition-colors delay-75 duration-300 group-hover:bg-primary" />
                <span className="size-1.5 rounded-full bg-primary/25 transition-colors delay-150 duration-300 group-hover:bg-primary" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
