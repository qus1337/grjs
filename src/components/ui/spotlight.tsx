"use client";

import React from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = { className?: string; fill?: string };

export const Spotlight = ({ className, fill = "white" }: SpotlightProps) => (
  <svg
    className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 800"
    fill="none"
  >
    <defs>
      <radialGradient id="spotlight-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor={fill} stopOpacity="0.4" />
        <stop offset="100%" stopColor={fill} stopOpacity="0" />
      </radialGradient>
    </defs>
    <ellipse cx="600" cy="400" rx="600" ry="400" fill={fill} fillOpacity="0.25" className="animate-spotlight" />
  </svg>
);
