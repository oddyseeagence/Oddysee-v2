import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { Header } from "@/components/Header";
import { Process } from "@/components/Process";
import { ProjectTeam } from "@/components/ProjectTeam";
import { ProjectsStack } from "@/components/ProjectsStack";
import { Testimonials } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Projets | Oddysee",
  description:
    "Découvrez une sélection de projets Oddysee en stratégie, identité, design et expériences digitales.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header darkLogo />
      <main>
        <section
          id="hero"
          className="relative isolate flex min-h-[580px] items-center overflow-hidden bg-white pb-10 pt-28 text-left md:min-h-[620px] md:pb-14 md:pt-32"
        >
          <div className="about-container">
            <h2 className="max-w-[980px] font-heading text-4xl font-medium leading-[44px] tracking-[-1px] text-[#1D0D3B] md:text-6xl md:leading-[64px] md:tracking-[-1.5px] lg:text-[80px] lg:leading-[88px] lg:tracking-[-2.5px]">
              Nos projets, conçus pour générer des résultats.
            </h2>
            <p className="mt-10 max-w-[650px] text-[18px] font-medium leading-[1.45] text-[#1D0D3B]/65 sm:text-[20px] md:mt-12 md:text-[22px]">
              Des solutions digitales qui renforcent visibilité, conversion et
              croissance durable.
            </p>
          </div>
        </section>

        <section className="border-t border-[#1D0D3B]/10 bg-white">
          <div className="mx-auto grid max-w-[1320px] gap-8 px-4 py-20 md:px-8 lg:grid-cols-2 lg:px-10 lg:py-28">
            <h2 className="font-heading text-4xl tracking-[-0.03em] text-[#1D0D3B] md:text-6xl">
              Nos résultats en action.
            </h2>
            <p className="max-w-2xl font-sans text-lg leading-8 text-[#1D0D3B]/65 md:text-xl">
              Chaque projet combine stratégie, technologie et acquisition pour
              créer des solutions digitales capables de générer des résultats
              durables.
            </p>
          </div>
        </section>

        <ProjectsStack />
        <Process variant="services" />
        <ProjectTeam />
        <Testimonials />
        <Faq background="white" />

      </main>
      <Footer />
    </>
  );
}
