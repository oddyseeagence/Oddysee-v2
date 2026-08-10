"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import type { AboutTeamMember } from "@/types/about";

function TeamMemberCard({
  member,
  duplicate = false,
}: {
  member: AboutTeamMember;
  duplicate?: boolean;
}) {
  return (
    <article
      aria-hidden={duplicate || undefined}
      className="group relative h-[300px] w-[250px] shrink-0 overflow-hidden rounded-[16px] bg-[var(--about-surface)] sm:h-[320px] sm:w-[270px]"
    >
      <Image
        src={member.colorImage}
        alt={duplicate ? "" : `${member.name}, ${member.role}`}
        draggable={false}
        fill
        sizes="270px"
        className="pointer-events-none select-none object-cover transition-transform duration-[450ms] ease-out group-hover:scale-[1.035]"
      />
      <Image
        src={member.image}
        alt=""
        aria-hidden="true"
        draggable={false}
        fill
        sizes="270px"
        className="pointer-events-none select-none object-cover transition-[opacity,transform] duration-[450ms] ease-out group-hover:scale-[1.035] group-hover:opacity-0"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-5 pb-5 pt-20">
        <h3 className="text-[16px] font-medium text-white">{member.name}</h3>
        <p className="mt-1 text-[12px] text-white/70">{member.role}</p>
      </div>
    </article>
  );
}

function TeamCardGroup({
  team,
  duplicate = false,
}: {
  team: AboutTeamMember[];
  duplicate?: boolean;
}) {
  return (
    <div aria-hidden={duplicate || undefined} className="flex shrink-0 gap-4 pr-4">
      {team.map((member) => (
        <TeamMemberCard
          key={`${duplicate ? "duplicate-" : ""}${member.name}`}
          member={member}
          duplicate={duplicate}
        />
      ))}
    </div>
  );
}

export function TeamCarousel({ team }: { team: AboutTeamMember[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const hoveredRef = useRef(false);
  const draggingRef = useRef(false);
  const lastPointerXRef = useRef(0);

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
      const distance = Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY;

      event.preventDefault();
      moveBy(distance);
    };

    const animate = (time: number) => {
      const elapsed = Math.min(time - previousTime, 64);
      previousTime = time;

      if (!reduceMotion && !hoveredRef.current && !draggingRef.current) {
        moveBy(elapsed * 0.037);
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
    <div
      ref={viewportRef}
      aria-label="Membres de l’équipe Oddysee"
      className="min-w-0 cursor-grab touch-pan-y select-none overflow-x-auto overscroll-x-contain pb-2 active:cursor-grabbing [scroll-behavior:auto] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <div className="flex w-max">
        <TeamCardGroup team={team} />
        <TeamCardGroup team={team} duplicate />
      </div>
    </div>
  );
}
