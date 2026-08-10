import type { AboutTestimonial } from "@/types/about";

const testimonials: AboutTestimonial[] = [
  {
    quote:
      "Oddysee a compris ce que notre marque devait devenir avant même que nous sachions le formuler. Le résultat est plus clair, plus fort et profondément juste.",
    name: "Camille Martin",
    role: "Fondatrice, Maison Lume",
    avatar: "CM",
  },
  {
    quote:
      "Une équipe rare : exigeante sur chaque détail, généreuse dans les échanges et toujours concentrée sur ce qui crée vraiment de la valeur.",
    name: "Thomas Leroy",
    role: "Directeur général, Noma",
    avatar: "TL",
  },
  {
    quote:
      "Notre nouvelle identité a changé la manière dont nos clients nous regardent, mais aussi la manière dont notre équipe raconte le projet au quotidien.",
    name: "Sophie Anderson",
    role: "Head of Marketing, Orbe",
    avatar: "SA",
  },
];

const avatarStyles = [
  "bg-[linear-gradient(145deg,#f2c6ff,#8058f0)]",
  "bg-[linear-gradient(145deg,#d5efff,#6d7bea)]",
  "bg-[linear-gradient(145deg,#ffe7b8,#ca6ee5)]",
];

export function AboutTestimonials() {
  return (
    <section className="overflow-hidden py-24 md:py-36 xl:py-[190px]">
      <div className="about-container">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_300px] md:items-end">
          <div>
            <p className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em] text-[var(--about-accent)]">
              <span aria-hidden="true">›</span>
              Témoignages
              <span aria-hidden="true">›</span>
            </p>
            <h2 className="about-display mt-5 max-w-[680px] text-[42px] leading-[0.98] tracking-[-0.035em] text-[var(--about-foreground)] sm:text-[52px] lg:text-[64px]">
              Des histoires vraies,
              <br />
              racontées par nos clients
            </h2>
          </div>

          <div className="md:justify-self-end md:text-right">
            <p className="about-display text-[50px] leading-none tracking-[-0.04em] text-[var(--about-accent)] sm:text-[56px]">
              4.8<span className="text-[30px]">/5</span>
            </p>
            <p className="mt-3 max-w-[270px] text-[13px] leading-5 text-[var(--about-muted)]">
              Une moyenne fondée sur les avis et retours de nos partenaires.
            </p>
          </div>
        </div>

        <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:mt-16 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0 xl:gap-6">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="relative flex min-h-[405px] w-[84vw] max-w-[420px] shrink-0 snap-center flex-col overflow-hidden rounded-[18px] bg-[#faf9ff] p-7 text-[#0a0a0a] md:w-auto md:max-w-none lg:p-9"
            >
              <span
                aria-hidden="true"
                className="about-display absolute right-7 top-2 text-[96px] leading-none text-[#8966ff] lg:right-9 lg:text-[112px]"
              >
                ”
              </span>

              <p className="relative z-10 max-w-[94%] pt-16 text-[16px] leading-[1.65] tracking-[-0.01em] lg:text-[18px]">
                {testimonial.quote}
              </p>

              <div className="mt-auto flex items-center gap-3 border-t border-black/10 pt-6">
                <span
                  className={`grid size-11 shrink-0 place-items-center rounded-full text-[12px] font-semibold text-[#17111f] ${avatarStyles[index]}`}
                  aria-hidden="true"
                >
                  {testimonial.avatar}
                </span>
                <div>
                  <h3 className="text-[14px] font-semibold leading-5">{testimonial.name}</h3>
                  <p className="text-[12px] leading-5 text-black/55">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
