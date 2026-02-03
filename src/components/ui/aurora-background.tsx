"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => (
  <div
    className={cn("relative flex flex-col overflow-hidden bg-black text-white", className)}
    {...props}
  >
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415560_1px,transparent_1px),linear-gradient(to_bottom,#33415560_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
    <div
      className={cn("absolute inset-0", showRadialGradient && "animate-aurora")}
      style={{
        backgroundSize: "200% 200%, 200% 200%",
        backgroundPosition: "50% 50%, 50% 50%",
        backgroundImage: `
          radial-gradient(at 40% 20%, rgba(251, 191, 36, 0.15) 0px, transparent 50%),
          radial-gradient(at 80% 0%, rgba(20, 184, 166, 0.12) 0px, transparent 50%)
        `,
      }}
    />
    <div className="relative z-10">{children}</div>
  </div>
);
