import { TeamCarousel } from "@/components/about/TeamCarousel";
import { TEAM_MEMBERS } from "@/lib/team";

export function ProjectTeam() {
  return (
    <section
      id="equipe"
      aria-labelledby="project-team-title"
      className="overflow-hidden bg-white pb-24 pt-12 [--about-surface:#F7F3FF] md:pb-28 md:pt-14 lg:pb-32 lg:pt-16"
    >
      <div className="about-container">
        <div className="max-w-[760px]">
          <h2
            id="project-team-title"
            className="font-heading text-4xl leading-[1.02] tracking-[-0.035em] text-[#1D0D3B] sm:text-5xl lg:text-[64px]"
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
