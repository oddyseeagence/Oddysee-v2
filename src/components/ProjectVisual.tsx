"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => undefined;

interface ProjectVisualProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

export function ProjectVisual({
  src,
  alt,
  priority = false,
  className = "",
}: ProjectVisualProps) {
  const isHydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  return (
    <div
      className={`relative overflow-hidden rounded-[18px] bg-[#e9e9e7] ${className}`}
    >
      {isHydrated ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 92vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out hover:scale-[1.015]"
        />
      ) : null}
    </div>
  );
}
