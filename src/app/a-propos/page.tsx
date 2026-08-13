import type { Metadata } from "next";

import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutPurposeTeam } from "@/components/about/AboutPurposeTeam";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "À propos | Oddysee",
  description:
    "Découvrez l’histoire d’Oddysee, notre vision, notre équipe et les résultats que nous créons avec des marques ambitieuses.",
};

export default function AboutPage() {
  return (
    <div className="about-dark min-h-screen overflow-x-clip selection:bg-[var(--about-accent)] selection:text-[#1D0D3B]">
      <AboutIntro />

      <main>
        <AboutPurposeTeam />
        <Testimonials />
        <Faq background="white" />
      </main>

      <Footer />
    </div>
  );
}
