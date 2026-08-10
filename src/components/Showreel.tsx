"use client";

import { useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Showreel() {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (video) {
            if (entry.isIntersecting) {
              try {
                void video.play().catch(() => {});
              } catch {
                // autoplay blocked; poster image covers the fallback
              }
            } else {
              try {
                video.pause();
              } catch {
                // no-op
              }
            }
          }
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [sectionRef]);

  return (
    <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-10 py-12">
      <div
        ref={sectionRef}
        data-reveal={isRevealed ? "visible" : "hidden"}
        className="scroll-reveal relative rounded-3xl overflow-hidden h-[320px] md:h-[500px] lg:h-[700px]"
      >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          poster="/images/ZLfjupIzIYXJw7hzRvT4aWylANA.png"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/WKG3JrKuuXHmdKCS9p58DUa42A4.mp4" type="video/mp4" />
        </video>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(236deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.05) 20%, rgba(10,10,10,0.05) 50%, rgb(10,10,10) 68%, rgb(10,10,10) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(137,102,255,0.12)",
            mixBlendMode: "multiply",
          }}
        />

        <span className="font-heading absolute bottom-6 left-6 md:bottom-12 md:left-12 text-4xl md:text-6xl lg:text-[80px] text-[#faf9ff] leading-none z-10">
          Bande démo
        </span>
      </div>
    </div>
  );
}
