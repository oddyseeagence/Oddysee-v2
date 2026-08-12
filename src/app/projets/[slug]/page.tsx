import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ArrowUpRightIcon } from "@/components/icons";
import { getNextProjects, getProject, projects } from "@/lib/projects";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.title} — Projet Oddysee`,
    description: project.description,
  };
}

function ProjectVisual({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[18px] bg-[#e9e9e7] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 92vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out hover:scale-[1.015]"
      />
    </div>
  );
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const nextProjects = getNextProjects(project.slug);

  return (
    <>
      <Header darkLogo />

      <main className="overflow-hidden bg-[#f5f5f3] text-[#111111] selection:bg-[#632BC5] selection:text-white">
        <article>
          <header
            id="hero"
            className="mx-auto max-w-[1440px] px-5 pb-16 pt-40 sm:px-8 md:pb-24 md:pt-48 lg:px-10 lg:pb-28 lg:pt-52"
          >
            <p className="mb-7 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-black/45">
              <span className="size-1.5 rounded-full bg-[#632BC5]" />
              Projet sélectionné
            </p>

            <h1 className="font-heading text-[clamp(64px,10vw,154px)] font-medium leading-[0.78] tracking-[-0.065em]">
              {project.title}.
            </h1>

            <div className="mt-20 grid gap-12 border-t border-black/15 pt-8 md:mt-28 md:grid-cols-[minmax(0,1fr)_minmax(300px,0.85fr)] md:gap-20 lg:ml-[48%] lg:mt-32">
              <p className="max-w-[620px] text-[clamp(20px,2vw,31px)] font-medium leading-[1.08] tracking-[-0.035em]">
                {project.introduction}
              </p>

              <dl className="divide-y divide-black/15 text-sm">
                <div className="flex items-start justify-between gap-5 py-3 first:pt-0">
                  <dt className="text-black/40">Client</dt>
                  <dd className="text-right font-medium">{project.client}</dd>
                </div>
                <div className="flex items-start justify-between gap-5 py-3">
                  <dt className="text-black/40">Année</dt>
                  <dd className="text-right font-medium">{project.year}</dd>
                </div>
                <div className="flex items-start justify-between gap-5 py-3">
                  <dt className="text-black/40">Discipline</dt>
                  <dd className="text-right font-medium">{project.category}</dd>
                </div>
                <div className="flex items-start justify-between gap-5 py-3">
                  <dt className="text-black/40">Lieu</dt>
                  <dd className="text-right font-medium">{project.location}</dd>
                </div>
              </dl>
            </div>
          </header>

          <section className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
            <div className="grid gap-3 md:grid-cols-2">
              <ProjectVisual
                src={project.image}
                alt={`Direction visuelle du projet ${project.title}`}
                priority
                className="aspect-[4/3]"
              />
              <ProjectVisual
                src={project.gallery[0]}
                alt={`Déclinaison digitale du projet ${project.title}`}
                priority
                className="aspect-[4/3]"
              />
            </div>

            <div className="grid gap-10 py-20 md:grid-cols-2 md:py-28 lg:gap-24">
              <div>
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-black/45">
                  <span className="size-1.5 rounded-full bg-[#632BC5]" />
                  Le challenge
                </p>
              </div>
              <div>
                <h2 className="max-w-[680px] text-[clamp(28px,3.2vw,52px)] font-medium leading-[1.02] tracking-[-0.045em]">
                  {project.challenge}
                </h2>
                <p className="mt-7 max-w-[560px] text-base leading-7 text-black/55">
                  {project.solution}
                </p>
                <ul className="mt-9 flex flex-wrap gap-2" aria-label="Services">
                  {project.services.map((service) => (
                    <li
                      key={service}
                      className="rounded-full border border-black/20 px-4 py-2 text-xs font-medium"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section
            aria-label={`Galerie du projet ${project.title}`}
            className="mx-auto max-w-[1440px] space-y-3 px-5 sm:px-8 lg:px-10"
          >
            <ProjectVisual
              src={project.gallery[1]}
              alt={`Présentation principale du projet ${project.title}`}
              className="aspect-[16/9]"
            />
            <ProjectVisual
              src={project.gallery[2]}
              alt={`Expérience finale du projet ${project.title}`}
              className="aspect-[16/9]"
            />
            <ProjectVisual
              src={project.image}
              alt={`Détail graphique du projet ${project.title}`}
              className="aspect-[16/9]"
            />
          </section>

          <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-24 sm:px-8 md:grid-cols-2 md:py-32 lg:px-10 lg:py-40">
            <p className="flex items-start gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-black/45">
              <span className="mt-1 size-1.5 rounded-full bg-[#632BC5]" />
              L’impact
            </p>
            <div>
              <h2 className="max-w-[720px] text-[clamp(32px,4vw,64px)] font-medium leading-[0.98] tracking-[-0.05em]">
                {project.impact}
              </h2>
              <p className="mt-8 max-w-[560px] text-base leading-7 text-black/55">
                Une solution pensée comme un système vivant : simple à utiliser
                aujourd’hui et prête à évoluer avec les ambitions de la marque.
              </p>
            </div>
          </section>

          <section className="border-t border-black/15 py-24 md:py-32">
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
              <div className="flex items-end justify-between gap-8">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/45">
                    À suivre
                  </p>
                  <h2 className="mt-3 text-[clamp(52px,7vw,108px)] font-medium leading-[0.82] tracking-[-0.06em]">
                    Projets suivants.
                  </h2>
                </div>
                <Link
                  href="/projets"
                  className="hidden items-center gap-2 rounded-full border border-black/25 px-5 py-3 text-sm font-medium transition hover:bg-black hover:text-white sm:flex"
                >
                  Tous les projets
                  <ArrowUpRightIcon className="size-4" />
                </Link>
              </div>

              <div className="mt-14 grid gap-4 md:grid-cols-2">
                {nextProjects.map((nextProject) => (
                  <Link
                    key={nextProject.slug}
                    href={`/projets/${nextProject.slug}`}
                    className="group outline-none focus-visible:rounded-[18px] focus-visible:ring-2 focus-visible:ring-[#632BC5] focus-visible:ring-offset-4"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#e5e5e3]">
                      <Image
                        src={nextProject.image}
                        alt={`Aperçu du projet ${nextProject.title}`}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-5 pt-4">
                      <h3 className="text-xl font-semibold tracking-[-0.03em]">
                        {nextProject.title}.
                      </h3>
                      <p className="text-sm text-black/45">{nextProject.year}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8">
            <div className="mx-auto grid min-h-[500px] max-w-[1440px] content-end overflow-hidden rounded-[24px] bg-[#111111] p-7 text-white sm:p-10 md:grid-cols-2 md:p-14 lg:min-h-[620px] lg:p-20">
              <div className="hidden md:block" />
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-white/45">
                  Une idée en tête ?
                </p>
                <h2 className="mt-5 text-[clamp(58px,7vw,112px)] font-medium leading-[0.82] tracking-[-0.065em]">
                  Parlons-en.
                </h2>
                <p className="mt-7 max-w-[520px] text-base leading-7 text-white/60">
                  Racontez-nous votre prochain projet — identité, produit digital
                  ou expérience de marque.
                </p>
                <Link
                  href="/contact"
                  className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-[#a78fff]"
                >
                  Démarrer un projet
                  <ArrowUpRightIcon className="size-4" />
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
