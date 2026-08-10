import Image from "next/image";

import type { AboutAward } from "@/types/about";

const awards: AboutAward[] = [
  {
    date: "Déc. 2025",
    title: "Prix de la meilleure expérience digitale",
    trait: "Approche innovante",
  },
  {
    date: "Fév. 2025",
    title: "Prix de l’innovation design",
    trait: "Pensée créative",
  },
  {
    date: "Mai 2024",
    title: "Grand Prix de l’agence digitale",
    trait: "Résultats prouvés",
  },
  {
    date: "Mai 2024",
    title: "Excellence en identité de marque",
    trait: "Identité forte",
  },
  {
    date: "Janv. 2024",
    title: "Prix de l’interface remarquable",
    trait: "Centré utilisateur",
  },
];

function SectionEyebrow({ children }: Readonly<{ children: string }>) {
  return (
    <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--about-muted)]">
      <span aria-hidden="true" className="text-[var(--about-accent)]">
        ›
      </span>
      {children}
      <span aria-hidden="true" className="text-[var(--about-accent)]">
        ›
      </span>
    </p>
  );
}

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 fill-current"
      viewBox="0 0 20 20"
    >
      <path d="M6.6 4.5a1 1 0 0 1 1.5-.86l8.1 5.5a1 1 0 0 1 0 1.72l-8.1 5.5a1 1 0 0 1-1.5-.86v-11Z" />
    </svg>
  );
}

export function AboutResultsAwards() {
  return (
    <>
      {/* <section className="about-container pt-36 md:pt-44 lg:pt-52" id="realisations">
        <header className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <SectionEyebrow>Nos réalisations</SectionEyebrow>
          <h2 className="about-display mt-6 text-[42px] leading-[0.98] tracking-[-0.045em] text-[var(--about-foreground)] sm:text-[52px] lg:text-[64px]">
            Des résultats qui comptent
          </h2>
        </header>

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-20">
          <article className="group flex min-h-[460px] flex-col overflow-hidden rounded-[18px] bg-[#faf9ff] text-[#101010] transition duration-300 ease-out hover:-translate-y-[5px] lg:min-h-[520px]">
            <div className="relative m-3 aspect-[1.24/1] overflow-hidden rounded-[12px] bg-[#eee9ff]">
              <Image
                alt="Composition abstraite violette réalisée par Oddysee"
                className="object-cover transition duration-500 group-hover:scale-[1.025]"
                fill
                sizes="(max-width: 767px) calc(100vw - 56px), 33vw"
                src="/images/crevix-about/result-innovation.png"
              />
            </div>
            <div className="flex flex-1 flex-col justify-end p-6 sm:p-7">
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6f54d2]">
                Direction artistique
              </span>
              <h3 className="about-display mt-3 text-[28px] leading-none tracking-[-0.035em] sm:text-[32px]">
                Créativité en mouvement
              </h3>
              <p className="mt-4 max-w-sm text-[13px] leading-[1.55] text-black/55">
                Une identité singulière pensée pour transformer une idée ambitieuse
                en expérience visuelle mémorable.
              </p>
            </div>
          </article>

          <article className="group relative flex min-h-[460px] flex-col overflow-hidden rounded-[18px] bg-[linear-gradient(145deg,#7d5ae8_0%,#b298ff_100%)] p-7 text-white transition duration-300 ease-out hover:-translate-y-[5px] sm:p-9 lg:min-h-[520px]">
            <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-white/20 blur-[70px]" />
            <p className="relative text-[11px] font-medium uppercase tracking-[0.15em] text-white/70">
              Satisfaction partenaire
            </p>
            <p className="about-display relative mt-5 text-[76px] leading-none tracking-[-0.06em] sm:text-[88px] lg:text-[104px]">
              100%
            </p>
            <p className="relative mt-6 max-w-xs text-[14px] leading-[1.55] text-white/76">
              Chaque projet se construit dans l’écoute, la transparence et la
              recherche d’un impact durable.
            </p>
            <div className="relative mt-auto flex items-end justify-between gap-4 pt-12">
              <div className="flex -space-x-3" aria-label="Équipe projet Oddysee">
                {[
                  { initials: "AM", color: "bg-[#f5d7c9]" },
                  { initials: "JL", color: "bg-[#d5e7e7]" },
                  { initials: "SC", color: "bg-[#e9d2f9]" },
                  { initials: "NB", color: "bg-[#d9d3fb]" },
                ].map(({ initials, color }) => (
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-full border-2 border-[#9b7bf1] text-[10px] font-semibold text-[#251649] ${color}`}
                    key={initials}
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <span className="text-right text-[11px] leading-[1.35] text-white/70">
                Des relations conçues
                <br />
                pour durer
              </span>
            </div>
          </article>

          <article className="group relative min-h-[460px] overflow-hidden rounded-[18px] bg-[#eee] transition duration-300 ease-out hover:-translate-y-[5px] lg:min-h-[520px]">
            <Image
              alt="Designer travaillant sur une interface numérique"
              className="object-cover transition duration-700 group-hover:scale-[1.02]"
              fill
              sizes="(max-width: 767px) calc(100vw - 32px), 33vw"
              src="/images/crevix-about/result-video-poster.png"
            />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/45 to-transparent" />
            <button
              aria-label="Lire la présentation de notre démarche"
              className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[var(--about-accent-strong)] text-white shadow-[0_18px_50px_rgba(50,26,112,0.38)] transition duration-300 group-hover:scale-110"
              type="button"
            >
              <PlayIcon />
            </button>
            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/70">
                L’idée devient expérience
              </p>
              <h3 className="about-display mt-2 text-[30px] leading-none tracking-[-0.035em]">
                Une méthode à découvrir
              </h3>
            </div>
          </article>
        </div>
      </section> */}

      <section className="about-container pb-4 pt-36 md:pt-44 lg:pt-52" id="distinctions">
        <header className="grid gap-8 border-b border-[var(--about-border)] pb-12 md:grid-cols-[0.43fr_0.57fr] md:items-start lg:pb-16">
          <SectionEyebrow>Nos distinctions</SectionEyebrow>
          <h2 className="about-display max-w-3xl text-[42px] leading-[0.98] tracking-[-0.045em] text-[var(--about-foreground)] sm:text-[52px] lg:text-[64px]">
            Des prix qui saluent notre excellence créative
          </h2>
        </header>

        <div>
          {awards.map((award) => (
            <article
              className="group grid min-h-[104px] gap-3 border-b border-[var(--about-border)] py-7 text-[var(--about-muted)] transition-colors duration-300 hover:text-[var(--about-foreground)] sm:grid-cols-[0.32fr_1fr] sm:items-center lg:grid-cols-[0.25fr_1fr_0.42fr] lg:gap-8 lg:py-0"
              key={`${award.date}-${award.title}`}
            >
              <time className="text-[11px] font-medium uppercase tracking-[0.13em]">
                {award.date}
              </time>
              <h3 className="about-display text-[22px] leading-[1.05] tracking-[-0.025em] text-[var(--about-foreground)] sm:text-[25px]">
                {award.title}
              </h3>
              <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.13em] transition-colors duration-300 group-hover:text-[var(--about-accent)] sm:col-start-2 lg:col-start-auto lg:justify-self-end">
                <span aria-hidden="true">/</span>
                {award.trait}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
