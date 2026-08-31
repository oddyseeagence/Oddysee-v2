"use client";

import { useRef, useState } from "react";

const videoReviews = [
  {
    name: "Safir Mebani",
    src: "/videos/review/testimonial-1-video.mp4",
    quote: "En 3 semaines, j'ai eu plus de demandes qu'en 6 mois avant.",
  },
  {
    name: "Guylaine Conquet",
    src: "/videos/review/testimonial-2-video.mp4",
    quote: "Aujourd'hui, mes clients me disent que mon site donne confiance.",
  },
  {
    name: "Céline Goutil",
    src: "/videos/review/testimonial-3-video.mp4",
    quote: "J'ai récupéré mon investissement dès le premier mois.",
  },
  {
    name: "Gisele Balet",
    src: "/videos/review/testimonial-4-video.mp4",
    quote: "Elle dépasse enfin ses peurs.",
  },
] as const;

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="ml-1 h-9 w-9 fill-current sm:h-11 sm:w-11"
    >
      <path d="M7.5 4.8v14.4c0 .8.9 1.3 1.6.9l10.8-7.2a1.1 1.1 0 0 0 0-1.8L9.1 3.9c-.7-.4-1.6.1-1.6.9Z" />
    </svg>
  );
}

export function LandingVideoTestimonials() {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const playReview = async (index: number) => {
    videoRefs.current.forEach((video, videoIndex) => {
      if (video && videoIndex !== index) {
        video.pause();
      }
    });

    const video = videoRefs.current[index];

    if (!video) {
      return;
    }

    video.currentTime = 0;
    setActiveIndex(index);

    try {
      await video.play();
    } catch {
      setActiveIndex(null);
    }
  };

  return (
    <section className="overflow-hidden bg-[#F7F3FF] py-16 font-sans sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1360px] px-4 md:px-8 lg:px-10">
        <header className="max-w-[600px]">
          <h2 className="font-heading text-4xl leading-tight text-[#1D0D3B] md:text-5xl lg:text-[56px]">
            Écoutez ceux qui l&apos;ont vécu.
          </h2>
        </header>

        <div className="mt-12 grid gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {videoReviews.map((review, index) => {
            const isActive = activeIndex === index;

            return (
              <article
                key={review.src}
                className="mx-auto w-full max-w-[315px]"
              >
                <div className="relative aspect-[9/16] overflow-hidden rounded-[12px] bg-[#1D0D3B] shadow-[0_18px_50px_rgba(29,13,59,0.12)]">
                  <video
                    ref={(video) => {
                      videoRefs.current[index] = video;
                    }}
                    controls={isActive}
                    playsInline
                    preload="metadata"
                    disablePictureInPicture
                    aria-label={`Témoignage vidéo de ${review.name}`}
                    className="h-full w-full object-cover"
                    onLoadedMetadata={(event) => {
                      const video = event.currentTarget;
                      video.currentTime = Math.min(0.35, video.duration / 10);
                    }}
                    onPlay={() => setActiveIndex(index)}
                    onPause={() =>
                      setActiveIndex((current) =>
                        current === index ? null : current,
                      )
                    }
                    onEnded={() => setActiveIndex(null)}
                  >
                    <source src={review.src} type="video/mp4" />
                    Votre navigateur ne prend pas en charge la lecture vidéo.
                  </video>

                  {!isActive ? (
                    <button
                      type="button"
                      aria-label={`Lire le témoignage de ${review.name}`}
                      onClick={() => void playReview(index)}
                      className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[8px] border-white bg-white/10 text-white shadow-[0_8px_30px_rgba(29,13,59,0.22)] backdrop-blur-[2px] transition hover:scale-105 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#632BC5]/40 focus-visible:ring-offset-4 sm:h-24 sm:w-24"
                    >
                      <PlayIcon />
                    </button>
                  ) : null}

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1D0D3B]/95 via-[#1D0D3B]/60 to-transparent px-5 pb-5 pt-20 text-left text-white sm:px-6 sm:pb-6">
                    <h3 className="text-base font-semibold sm:text-lg">
                      {review.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
                      « {review.quote} »
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
