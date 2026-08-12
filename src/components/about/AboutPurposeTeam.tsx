import type { AboutPrinciple } from "@/types/about";
import { TeamCarousel } from "@/components/about/TeamCarousel";
import { TEAM_MEMBERS } from "@/lib/team";

const principles: AboutPrinciple[] = [
  {
    eyebrow: "Notre mission",
    title: "Créer des systèmes digitaux qui font grandir",
    description:
      "Nous transformons les enjeux de nos clients en stratégies, expériences et systèmes capables d’attirer, convaincre et convertir durablement leurs audiences.",
  },
  {
    eyebrow: "Notre vision",
    title: "Transformer chaque interaction en levier de croissance",
    description:
      "Nous croyons à un digital utile, cohérent et mesurable : un écosystème clair qui rapproche les entreprises des clients qu’elles veulent convaincre.",
  },
  {
    eyebrow: "Nos valeurs",
    title: "Exigence, performance et esprit collectif",
    description:
      "Chaque projet repose sur l’ambition partagée. Nous avançons avec méthode, transparence et exigence pour créer ensemble des résultats durables.",
  },
];

export function AboutPurposeTeam() {
  return (
    <section className="overflow-hidden bg-[#F7F3FF] pt-16 [--about-background:#F7F3FF] [--about-border:rgba(29,13,59,0.14)] [--about-foreground:#1D0D3B] [--about-light:#1D0D3B] [--about-muted:rgba(29,13,59,0.62)] md:pt-20 xl:pt-24">
      <div className="about-container">
        <div>
          <h2 className="max-w-[680px] font-heading text-[42px] leading-[0.98] tracking-[-0.035em] text-[var(--about-foreground)] sm:text-[52px] lg:text-[64px]">
            Construire aujourd’hui la croissance digitale de demain.
          </h2>
        </div>

        <ol className="relative mt-12 before:absolute before:bottom-[72px] before:left-6 before:top-[72px] before:w-1 before:-translate-x-1/2 before:bg-[linear-gradient(180deg,#8966ff,#b59fff)] md:mt-20 lg:before:left-[42%]">
          {principles.map((principle, index) => (
            <li
              key={principle.eyebrow}
              className="relative grid min-h-[230px] grid-cols-1 gap-4 py-10 pl-16 lg:grid-cols-[42%_180px_minmax(0,1fr)] lg:gap-0 lg:py-14 lg:pl-0"
            >
              {index === principles.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 left-6 top-[72px] z-[1] w-1.5 -translate-x-1/2 bg-[var(--about-background)] lg:left-[42%] lg:top-20"
                />
              ) : null}

              <span className="absolute left-6 top-[52px] z-10 grid size-10 -translate-x-1/2 place-items-center rounded-full bg-white text-[18px] leading-none text-[#1D0D3B] shadow-[0_8px_24px_rgba(29,13,59,0.1)] lg:left-[42%] lg:top-[60px]">
                <span aria-hidden="true">✦</span>
              </span>

              <p className="absolute left-16 top-12 flex h-12 items-center text-[15px] font-semibold tracking-[-0.015em] text-[var(--about-foreground)] lg:left-[calc(42%+40px)] lg:top-14">
                {principle.eyebrow}
              </p>

              <div className="border-b border-[var(--about-border)] pb-10 pt-20 lg:col-start-3 lg:pb-14 lg:pt-0">
                <h3 className="max-w-[640px] font-heading text-[28px] leading-[1.08] tracking-[-0.025em] text-[var(--about-foreground)] sm:text-[34px]">
                  {principle.title}
                </h3>
                <p className="mt-5 max-w-[690px] text-[15px] leading-7 text-[var(--about-muted)]">
                  {principle.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div
          id="equipe"
          className="relative isolate mt-20 scroll-mt-24 py-16 before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:bg-white md:mt-24 md:py-20 xl:mt-24 xl:py-24"
        >
          <div className="grid gap-10 lg:grid-cols-[210px_minmax(0,1fr)] lg:items-center lg:gap-12">
            <div className="shrink-0">
              <p className="flex items-center gap-2 text-[12px] font-medium text-[var(--about-muted)]">
                <span className="size-2 rounded-full bg-[var(--about-foreground)]" />
                Équipe
              </p>
              <h2 className="mt-3 font-heading text-[38px] leading-none tracking-[-0.035em] text-[var(--about-foreground)] sm:text-[44px]">
                Notre équipe
              </h2>
            </div>

            <TeamCarousel team={TEAM_MEMBERS} />
          </div>
        </div>
      </div>
    </section>
  );
}
