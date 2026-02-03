"use client";

import React from "react";
import { cn } from "@/lib/utils";

type MovingBorderProps = {
  children: React.ReactNode;
  borderRadius?: string;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  as?: React.ElementType;
  [key: string]: unknown;
};

export const MovingBorder = ({
  children,
  borderRadius = "1.75rem",
  className,
  containerClassName,
  borderClassName,
  duration = 2000,
  as: AsComponent = "button",
  ...otherProps
}: MovingBorderProps) =>
  React.createElement(
    AsComponent,
    {
      className: cn(
        "relative flex rounded-full p-[1px] text-sm font-medium transition-all duration-300 bg-transparent text-white",
        containerClassName
      ),
      style: { borderRadius },
      ...otherProps,
    },
    <>
      <div className={cn("absolute inset-0 overflow-hidden rounded-full [--border-width:2px]", borderClassName)}>
        <div
          className="absolute h-[200%] w-[200%] animate-moving-border"
          style={{
            background: "conic-gradient(from 0deg, transparent 0deg 340deg, white 360deg)",
            borderRadius: "50%",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%) rotate(0deg)",
          }}
        />
      </div>
      <div className={cn("relative z-10 flex items-center justify-center rounded-full bg-black px-6 py-2", className)}>
        {children}
      </div>
    </>
  );
