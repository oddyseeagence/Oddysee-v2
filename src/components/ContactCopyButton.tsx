"use client";

import { useState } from "react";

export function ContactCopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function copyValue() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copyValue}
      aria-label={`Copier ${value}`}
      className="justify-self-start text-sm font-medium text-[#1D0D3B]/45 transition-colors hover:text-[#632BC5] md:justify-self-end"
    >
      {copied ? "Copié" : "Copier"}
    </button>
  );
}
