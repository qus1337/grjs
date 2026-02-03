"use client";

import { cn } from "@/lib/utils";
import React from "react";

function deterministicPct(idx: number, max: number) {
  return ((idx * 17 + 7) % 100) * (max / 100);
}
function deterministicBetween(idx: number, min: number, max: number) {
  const pct = ((idx * 13 + 11) % 100) / 100;
  return min + pct * (max - min);
}

export const Meteors = ({ number = 20, className }: { number?: number; className?: string }) => {
  const meteors = Array.from({ length: number }, (_, i) => i);
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {meteors.map((idx) => {
        const left = (idx * 100) / number - 10;
        const delay = deterministicBetween(idx, 0, 0.6);
        const duration = deterministicBetween(idx, 4, 6);
        const top = deterministicPct(idx + 3, 40);
        return (
          <span
            key={idx}
            className="absolute h-px w-40 animate-meteor-effect rounded-full bg-gradient-to-r from-transparent via-amber-400/50 to-transparent shadow-[0_0_6px_1px_rgba(251,191,36,0.3)]"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
};
