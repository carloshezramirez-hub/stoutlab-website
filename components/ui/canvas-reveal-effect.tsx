"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface DotMatrixProps {
  className?: string;
  dotSize?: number;
  dotColor?: string;
  gap?: number;
  speed?: number;
}

export function CanvasRevealEffect({
  className,
  dotSize = 2,
  dotColor = "#3b82f6",
  gap = 28,
  speed = 0.3,
}: DotMatrixProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced =
      typeof window !== "undefined"
        ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
        : false;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      cols = Math.ceil(width / gap) + 1;
      rows = Math.ceil(height / gap) + 1;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gap;
          const y = j * gap;

          const wave = prefersReduced
            ? 0.6
            : Math.sin(time * 0.001 * speed + i * 0.3 + j * 0.2) * 0.5 + 0.5;

          const dist = Math.sqrt(
            Math.pow(x - width / 2, 2) + Math.pow(y - height / 2, 2)
          );
          const maxDist = Math.sqrt(
            Math.pow(width / 2, 2) + Math.pow(height / 2, 2)
          );
          const radial = 1 - dist / maxDist;

          const opacity = wave * radial * 0.7;

          const colorIndex = (i + j) % 3;
          let color = dotColor;
          if (colorIndex === 0) color = "#3b82f6";
          else if (colorIndex === 1) color = "#94a3b8";
          else color = "#e2e8f0";

          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.globalAlpha = opacity;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [dotSize, dotColor, gap, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full", className)}
      aria-hidden="true"
    />
  );
}
