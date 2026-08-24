"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { QuoteIcon } from "@/components/icons";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Oddysee a su transformer notre vision en une identité forte, claire et mémorable.",
    name: "Michael Johnson",
    role: "PDG de Startup Tech",
    avatar: "/images/e4BWmAGi1BLgfp8ovDBTi284Ec.png",
  },
  {
    quote:
      "Leur équipe est devenue un partenaire précieux pour faire grandir notre présence en ligne.",
    name: "Sophia Anderson",
    role: "Directrice marketing",
    avatar: "/images/Ve4xe8fe2mEHspmmkKz2EDVx0A4.png",
  },
  {
    quote:
      "Un travail remarquable, un vrai souci du détail et une expérience fluide du début à la fin.",
    name: "Emily Carter",
    role: "Cheffe de produit",
    avatar: "/images/KC3Kuv2mmVfyLTTg0k3nlV2IAO8.png",
  },
  {
    quote:
      "Notre nouvelle image reflète enfin la qualité de notre travail et parle vraiment à nos clients.",
    name: "Olivia Martinez",
    role: "Responsable de marque",
    avatar: "/images/JfJAfR6lq1p2gtGDdu4qauSo5k.png",
  },
  {
    quote:
      "Une équipe attentive et exigeante qui a dépassé nos attentes à chaque étape du projet.",
    name: "David Miller",
    role: "Fondateur d’entreprise SaaS",
    avatar: "/images/SDZauHxn0fY54tA8kHIfP6zJ9aU.png",
  },
];

function TestimonialCard({
  testimonial,
  duplicate = false,
}: {
  testimonial: Testimonial;
  duplicate?: boolean;
}) {
  return (
    <article
      aria-hidden={duplicate || undefined}
      className="relative flex min-h-[290px] w-[calc(100vw-32px)] shrink-0 flex-col bg-white px-6 py-7 sm:w-[680px] sm:px-8 sm:py-8 lg:w-[760px] lg:px-10"
    >
      <div className="flex items-center justify-between gap-5">
        <div className="flex min-w-0 items-center gap-3">
          <Image
            src={testimonial.avatar}
            alt={duplicate ? "" : `Portrait de ${testimonial.name}`}
            draggable={false}
            width={38}
            height={38}
            sizes="38px"
            className="pointer-events-none h-[38px] w-[38px] shrink-0 select-none rounded-full object-cover"
          />
          <div className="min-w-0">
            <h3 className="truncate text-[12px] font-semibold leading-4 text-[#1D0D3B]">
              {testimonial.name}
            </h3>
            <p className="truncate text-[9px] leading-4 text-[#777274]">
              {testimonial.role}
            </p>
          </div>
        </div>
        <QuoteIcon
          aria-hidden="true"
          className="h-4 w-5 shrink-0 text-[#1D0D3B]"
        />
      </div>

      <blockquote className="mt-7 max-w-[570px] text-[27px] font-normal leading-[1.12] tracking-[-0.035em] text-[#1D0D3B] sm:text-[31px] lg:text-[34px]">
        {testimonial.quote}
      </blockquote>
    </article>
  );
}

function TestimonialGroup({
  testimonials,
  duplicate = false,
}: {
  testimonials: readonly Testimonial[];
  duplicate?: boolean;
}) {
  return (
    <div
      aria-hidden={duplicate || undefined}
      className="flex shrink-0 gap-5 pr-5"
    >
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={`${duplicate ? "duplicate-" : ""}${testimonial.name}`}
          testimonial={testimonial}
          duplicate={duplicate}
        />
      ))}
    </div>
  );
}

interface TestimonialsProps {
  heading?: string;
  testimonials?: readonly Testimonial[];
  emptyMessage?: string;
  density?: "default" | "compact";
}

export function Testimonials({
  heading = "Vrais retours de nos clients",
  testimonials = DEFAULT_TESTIMONIALS,
  emptyMessage = "Les témoignages approuvés seront ajoutés ici.",
  density = "default",
}: TestimonialsProps = {}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const hoveredRef = useRef(false);
  const draggingRef = useRef(false);
  const lastPointerXRef = useRef(0);

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let previousTime = performance.now();
    let frameId = 0;

    const moveBy = (distance: number) => {
      const loopWidth = viewport.scrollWidth / 2;

      if (loopWidth <= 0) {
        return;
      }

      const nextPosition = viewport.scrollLeft + distance;
      viewport.scrollLeft = ((nextPosition % loopWidth) + loopWidth) % loopWidth;
    };

    const handleMouseEnter = () => {
      hoveredRef.current = true;
    };

    const handleMouseLeave = () => {
      hoveredRef.current = false;
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) {
        return;
      }

      event.preventDefault();
      draggingRef.current = true;
      lastPointerXRef.current = event.clientX;
      viewport.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!draggingRef.current) {
        return;
      }

      event.preventDefault();
      moveBy(lastPointerXRef.current - event.clientX);
      lastPointerXRef.current = event.clientX;
    };

    const stopDragging = (event: PointerEvent) => {
      draggingRef.current = false;

      if (viewport.hasPointerCapture(event.pointerId)) {
        viewport.releasePointerCapture(event.pointerId);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      const distance =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;

      event.preventDefault();
      moveBy(distance);
    };

    const animate = (time: number) => {
      const elapsed = Math.min(time - previousTime, 64);
      previousTime = time;

      if (!reduceMotion && !hoveredRef.current && !draggingRef.current) {
        moveBy(elapsed * 0.04);
      }

      frameId = window.requestAnimationFrame(animate);
    };

    viewport.addEventListener("mouseenter", handleMouseEnter);
    viewport.addEventListener("mouseleave", handleMouseLeave);
    viewport.addEventListener("pointerdown", handlePointerDown);
    viewport.addEventListener("pointermove", handlePointerMove);
    viewport.addEventListener("pointerup", stopDragging);
    viewport.addEventListener("pointercancel", stopDragging);
    viewport.addEventListener("wheel", handleWheel, { passive: false });
    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
      viewport.removeEventListener("mouseenter", handleMouseEnter);
      viewport.removeEventListener("mouseleave", handleMouseLeave);
      viewport.removeEventListener("pointerdown", handlePointerDown);
      viewport.removeEventListener("pointermove", handlePointerMove);
      viewport.removeEventListener("pointerup", stopDragging);
      viewport.removeEventListener("pointercancel", stopDragging);
      viewport.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section
      className={`overflow-hidden bg-[#F7F3FF] font-sans ${
        density === "compact"
          ? "py-16 sm:py-20 lg:py-24"
          : "py-20 sm:py-24 lg:py-28"
      }`}
    >
      <div className="mx-auto max-w-[1320px] px-4 md:px-8 lg:px-10">
        <header className="max-w-[600px]">
          <h2 className="font-heading text-4xl leading-tight text-[#1D0D3B] md:text-5xl lg:text-[56px]">
            {heading}
          </h2>
        </header>

        {testimonials.length ? (
          <div
            ref={viewportRef}
            id="testimonial-carousel"
            aria-label="Témoignages clients"
            className={`min-w-0 cursor-grab touch-pan-y select-none overflow-x-auto overscroll-x-contain pb-2 active:cursor-grabbing [scroll-behavior:auto] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
              density === "compact" ? "mt-10 sm:mt-12" : "mt-12 sm:mt-14"
            }`}
          >
            <div className="flex w-max">
              <TestimonialGroup testimonials={testimonials} />
              <TestimonialGroup testimonials={testimonials} duplicate />
            </div>
          </div>
        ) : (
          <div
            className={`rounded-[22px] border border-dashed border-[#1D0D3B]/20 bg-white px-6 text-center md:px-10 ${
              density === "compact"
                ? "mt-9 flex min-h-[210px] items-center justify-center py-10 sm:mt-10"
                : "mt-12 py-16 sm:mt-14"
            }`}
          >
            <p className="mx-auto max-w-xl text-base leading-7 text-[#1D0D3B]/55">
              {emptyMessage}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
