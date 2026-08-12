"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => undefined;

interface ProjectVisualProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  imageClassName?: string;
}

export function ProjectVisual({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(min-width: 1024px) 92vw, 100vw",
  imageClassName =
    "object-cover transition-transform duration-700 ease-out hover:scale-[1.015]",
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
          sizes={sizes}
          className={imageClassName}
        />
      ) : null}
    </div>
  );
}
