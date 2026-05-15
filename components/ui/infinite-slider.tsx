"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface InfiniteSliderProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  reverse?: boolean;
  gap?: number;
}

export function InfiniteSlider({
  children,
  className,
  duration = 40,
  reverse = false,
  gap = 32,
}: InfiniteSliderProps) {
  const items = React.Children.toArray(children);

  return (
    <div
      className={cn("relative flex overflow-hidden", className)}
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div
        className={cn(
          "flex shrink-0 items-center",
          "stoutlab-marquee"
        )}
        style={{
          gap: `${gap}px`,
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {items}
        {items}
        {items}
      </div>
      <style>{`
        @keyframes stoutlab-marquee-kf {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .stoutlab-marquee {
          animation: stoutlab-marquee-kf linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .stoutlab-marquee { animation: none; }
        }
      `}</style>
    </div>
  );
}
