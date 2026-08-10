import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBanner } from "@/components/TrustBanner";
import { Services } from "@/components/Services";
import { ProjectsStack } from "@/components/ProjectsStack";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Blog } from "@/components/Blog";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBanner />
        {/* <Showreel /> — temporarily disabled, keep for later */}
        <Services />
        <ProjectsStack />
        <Process />
        <CtaBand />
        <Testimonials />
        <Blog />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
