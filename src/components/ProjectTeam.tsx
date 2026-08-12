import { TeamCarousel } from "@/components/about/TeamCarousel";
import { TEAM_MEMBERS } from "@/lib/team";

export function ProjectTeam() {
  return (
    <section
      id="equipe"
      aria-labelledby="project-team-title"
      className="overflow-hidden bg-white py-24 [--about-surface:#F7F3FF] md:py-28 lg:py-32"
    >
      <div className="about-container">
        <div className="max-w-[760px]">
          <p className="flex items-center gap-2 text-sm font-medium text-[#1D0D3B]/60">
            <span className="size-2 rounded-full bg-[#632BC5]" />
            Notre équipe
          </p>
          <h2
            id="project-team-title"
            className="mt-4 font-heading text-4xl leading-[1.02] tracking-[-0.035em] text-[#1D0D3B] sm:text-5xl lg:text-[64px]"
          >
            Rencontrez l’équipe derrière Oddysee
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#1D0D3B]/65 md:text-lg">
            Des expertises complémentaires réunies pour concevoir stratégies,
            produits et systèmes digitaux orientés vers la croissance.
          </p>
        </div>

        <div className="project-team-carousel-edge relative mt-12 md:mt-16">
          <TeamCarousel team={TEAM_MEMBERS} />
        </div>
      </div>
    </section>
  );
}
