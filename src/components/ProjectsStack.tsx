"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useStackScrollDamping } from "@/hooks/useStackScrollDamping";

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const PROJECTS: Project[] = [
  {
    slug: "busix",
    title: "Busix",
    description:
      "Une expérience digitale claire et structurée pour présenter l'expertise d'une marque avec impact.",
    image: "/images/m9iGbTvzSU0X8EmaayVuOMIRork.png",
    link: "/images/m9iGbTvzSU0X8EmaayVuOMIRork.png",
  },
  {
    slug: "mindeasee",
    title: "MindEasee",
    description:
      "Une identité apaisante et une interface pensée pour créer de la confiance dès le premier regard.",
    image: "/images/TzNUKQ3nV4fZNTQVsrtY5HZdZQg.png",
    link: "/images/TzNUKQ3nV4fZNTQVsrtY5HZdZQg.png",
  },
  {
    slug: "lunex",
    title: "Lunex",
    description:
      "Un kit d'interface mobile conçu pour rendre chaque interaction rapide, fluide et intuitive.",
    image: "/images/1JwMgKBC5NLItnIkj4lQUhGmN9k.png",
    link: "/images/1JwMgKBC5NLItnIkj4lQUhGmN9k.png",
  },
  {
    slug: "zentro",
    title: "Zentro",
    description:
      "Un site SaaS moderne qui simplifie le produit, renforce sa valeur et guide vers la conversion.",
    image: "/images/U6Npa7O4X2OlLqe9caPvFM1fQ.png",
    link: "/images/U6Npa7O4X2OlLqe9caPvFM1fQ.png",
  },
  {
    slug: "vynex",
    title: "Vynex",
    description:
      "Un tableau de bord modulaire qui transforme des données complexes en décisions lisibles.",
    image: "/images/DeY32bDwEuzZ6HcYmlxZqgyMQ.png",
    link: "/images/DeY32bDwEuzZ6HcYmlxZqgyMQ.png",
  },
];

const MAX_SCALE_REDUCTION = 0.05;
const MAX_DIM_OPACITY = 0.28;
const STACK_SCROLL_DAMPING = 0.525;

export function ProjectsStack() {
  const panelRefs = useRef<(HTMLElement | null)[]>([]);
  const surfaceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dimRefs = useRef<(HTMLDivElement | null)[]>([]);

  useStackScrollDamping(panelRefs, { dampingFactor: STACK_SCROLL_DAMPING });

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let animationFrameId = 0;
    let updateQueued = false;

    const updateStackDepth = () => {
      updateQueued = false;

      const viewportHeight = Math.max(window.innerHeight, 1);
      const nextPanelTops = panelRefs.current.map((_, index) => {
        const nextPanel = panelRefs.current[index + 1];
        return nextPanel?.getBoundingClientRect().top ?? viewportHeight;
      });

      surfaceRefs.current.forEach((surface, index) => {
        const dimLayer = dimRefs.current[index];
        if (!surface || !dimLayer) return;

        const rawProgress =
          (viewportHeight - nextPanelTops[index]) / viewportHeight;
        const progress = Math.min(1, Math.max(0, rawProgress));
        const motionProgress = reducedMotionQuery.matches ? 0 : progress;
        const scale = 1 - motionProgress * MAX_SCALE_REDUCTION;

        surface.style.transform = `scale(${scale})`;
        dimLayer.style.opacity = String(motionProgress * MAX_DIM_OPACITY);
      });
    };

    const queueStackUpdate = () => {
      if (updateQueued) return;

      updateQueued = true;
      animationFrameId = window.requestAnimationFrame(updateStackDepth);
    };

    queueStackUpdate();
    window.addEventListener("scroll", queueStackUpdate, { passive: true });
    window.addEventListener("resize", queueStackUpdate);
    reducedMotionQuery.addEventListener("change", queueStackUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", queueStackUpdate);
      window.removeEventListener("resize", queueStackUpdate);
      reducedMotionQuery.removeEventListener("change", queueStackUpdate);
    };
  }, []);

  return (
    <div id="projects" className="projects-container relative isolate bg-black">
      {PROJECTS.map((project, index) => (
        <section
          id={`project-${project.slug}`}
          key={project.slug}
          ref={(node) => {
            panelRefs.current[index] = node;
          }}
          aria-labelledby={`project-${project.slug}-title`}
          className="project-panel sticky top-0 h-[100svh] w-full overflow-hidden bg-black md:h-screen"
        >
          <div
            ref={(node) => {
              surfaceRefs.current[index] = node;
            }}
            className="absolute inset-0 origin-center transform-gpu overflow-hidden will-change-transform [backface-visibility:hidden]"
          >
            <Image
              src={project.image}
              alt={`Aperçu visuel du projet ${project.title}`}
              fill
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/5"
              aria-hidden="true"
            />
            <div
              ref={(node) => {
                dimRefs.current[index] = node;
              }}
              className="pointer-events-none absolute inset-0 bg-black opacity-0 will-change-[opacity]"
              aria-hidden="true"
            />

            <div className="absolute inset-x-0 bottom-0 z-10 pb-7 sm:pb-10 md:pb-12 lg:pb-16">
              <div className="mx-auto flex w-full max-w-[1320px] items-end justify-between gap-5 px-4 md:gap-10 md:px-8 lg:px-10">
                <div className="min-w-0 max-w-[80%] md:max-w-[72%]">
                  <h2
                    id={`project-${project.slug}-title`}
                    className="font-sans text-[clamp(3.25rem,10vw,9rem)] font-black leading-[0.82] tracking-[-0.065em] text-white"
                  >
                    {project.title}
                  </h2>
                  <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-white/80 sm:text-base md:mt-6 md:text-lg lg:text-xl">
                    {project.description}
                  </p>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Voir le projet ${project.title}`}
                  className="group/link mb-1 flex size-16 shrink-0 items-center justify-center rounded-full outline-none transition duration-300 ease-out hover:scale-105 hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black/50 sm:size-20 md:size-24"
                >
                  <Image
                    src="/images/uparrow.svg"
                    alt=""
                    aria-hidden="true"
                    width={158}
                    height={158}
                    className="size-full transition-transform duration-300 ease-out group-hover/link:rotate-3"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
