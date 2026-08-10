import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const featuredProjects = [
  {
    index: "01",
    title: "Busix",
    category: "Identité digitale",
    image: "/images/m9iGbTvzSU0X8EmaayVuOMIRork.png",
    href: "/projets#project-busix",
  },
  {
    index: "02",
    title: "MindEasee",
    category: "Design d’expérience",
    image: "/images/TzNUKQ3nV4fZNTQVsrtY5HZdZQg.png",
    href: "/projets#project-mindeasee",
  },
] as const;

export function FeaturedProjects() {
  return (
    <section
      id="projets-en-vedette"
      aria-labelledby="featured-projects-title"
      className="overflow-hidden bg-white pb-24 text-foreground md:pb-32 lg:pb-36"
    >
      <div className="about-container">
        <div className="grid items-start gap-8 pt-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12 lg:pt-10">
          <div>
            <h2
              id="featured-projects-title"
              className="font-heading text-[44px] leading-[0.98] tracking-[-0.045em] text-foreground sm:text-[56px] md:text-[68px] lg:text-[76px]"
            >
              Projets en vedette
            </h2>
            <p className="mt-6 max-w-[720px] text-base leading-7 text-foreground/65 md:text-lg md:leading-8">
              Des identités et expériences digitales conçues pour donner aux
              marques une présence claire, cohérente et mémorable.
            </p>
          </div>

          <Link
            href="/projets"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition duration-300 hover:scale-[1.02] hover:brightness-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-white lg:mt-2"
          >
            Voir tous les projets
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-6 lg:mt-24 lg:gap-8">
          {featuredProjects.map((project) => (
            <Link
              key={project.index}
              href={project.href}
              className="group block rounded-[24px] outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-white"
            >
              <article>
                <div className="relative aspect-[1.38/1] overflow-hidden rounded-[24px] bg-muted">
                  <Image
                    src={project.image}
                    alt={`Aperçu du projet ${project.title}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.045] group-hover:brightness-90"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/5"
                  />
                </div>

                <div className="mt-5 flex items-start justify-between gap-6 border-b border-foreground/15 pb-5">
                  <div className="flex min-w-0 items-baseline gap-4">
                    <span className="text-sm font-medium text-primary">
                      {project.index}.
                    </span>
                    <h3 className="truncate text-xl font-semibold tracking-[-0.025em] text-foreground md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="hidden text-sm text-foreground/45 sm:block">
                      {project.category}
                    </p>
                  </div>

                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-foreground/20 text-foreground transition duration-300 group-hover:rotate-6 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
