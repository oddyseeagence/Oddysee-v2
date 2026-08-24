import { LandingCta } from "@/components/landing/LandingCta";

interface LandingVideo {
  src: string;
  poster?: string;
  title: string;
  captionsSrc?: string;
}

interface LandingVideoBlockProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  description: string;
  video: LandingVideo;
  ctaLabel: string;
  ctaHref: string;
}

export function LandingVideoBlock({
  id = "masterclass",
  eyebrow = "Masterclass",
  heading,
  description,
  video,
  ctaLabel,
  ctaHref,
}: LandingVideoBlockProps) {
  return (
    <section id={id} className="bg-white pb-16 sm:pb-20 md:pb-24">
      <div className="about-container">
        <div className="mx-auto overflow-hidden rounded-[24px] bg-[#1D0D3B] shadow-[0_24px_70px_rgba(29,13,59,0.16)] lg:max-w-[1160px]">
          <video
            controls
            playsInline
            preload="metadata"
            poster={video.poster}
            aria-label={video.title}
            className="aspect-video w-full bg-[#1D0D3B] object-cover"
          >
            <source src={video.src} type="video/mp4" />
            {video.captionsSrc ? (
              <track
                src={video.captionsSrc}
                kind="captions"
                srcLang="fr"
                label="Français"
                default
              />
            ) : null}
            Votre navigateur ne prend pas en charge la lecture vidéo.
          </video>
        </div>

        <div className="mx-auto mt-8 grid gap-7 border-b border-[#1D0D3B]/15 pb-10 sm:mt-10 sm:pb-12 md:mt-12 md:grid-cols-[0.4fr_0.6fr] md:gap-10 md:pb-14 lg:max-w-[1160px] lg:gap-16">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#632BC5]">
            {eyebrow}
          </p>
          <div>
            <h2 className="max-w-[720px] font-heading text-[clamp(34px,4.5vw,64px)] leading-[0.98] tracking-[-0.05em] text-[#1D0D3B]">
              {heading}
            </h2>
            <p className="mt-5 max-w-[620px] text-base leading-7 text-[#1D0D3B]/65 md:text-lg md:leading-8">
              {description}
            </p>
            <LandingCta label={ctaLabel} href={ctaHref} className="mt-7" />
          </div>
        </div>
      </div>
    </section>
  );
}
