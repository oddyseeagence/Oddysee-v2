import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Process } from "@/components/Process";
import { FeaturedProjects } from "@/components/services/FeaturedProjects";
import { ServicesList } from "@/components/services/ServicesList";
import { Testimonials } from "@/components/Testimonials";

export function ServicesShowcasePage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white font-sans text-foreground selection:bg-accent selection:text-foreground">
      <main>
        <section
          id="hero"
          className="relative isolate flex min-h-[580px] items-center overflow-hidden bg-white pb-10 pt-28 text-left md:min-h-[620px] md:pb-14 md:pt-32"
        >
          <div className="about-container">
            <h2 className="max-w-[980px] font-heading text-4xl font-medium leading-[44px] tracking-[-1px] text-[#1D0D3B] md:text-6xl md:leading-[64px] md:tracking-[-1.5px] lg:text-[80px] lg:leading-[88px] lg:tracking-[-2.5px]">
              Des expertises conçues pour votre croissance.
            </h2>
            <p className="mt-10 max-w-[650px] text-[18px] font-medium leading-[1.45] text-[#1D0D3B]/65 sm:text-[20px] md:mt-12 md:text-[22px]">
              De la stratégie au produit digital, cinq expertises réunies pour
              attirer, convertir et faire grandir durablement votre entreprise
              à chaque étape.
            </p>
          </div>
        </section>

        <ServicesList />

        <Process variant="services" />
        <FeaturedProjects />
        <Testimonials />
        <Faq background="white" />
      </main>

      <Footer />
    </div>
  );
}
