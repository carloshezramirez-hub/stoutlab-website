"use client";

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { cn } from "@/lib/utils";

interface CobeGlobePulseProps {
  className?: string;
}

const MEXICO_MARKERS = [
  { location: [19.4326, -99.1332] as [number, number], size: 0.08 },   // CDMX
  { location: [20.6597, -103.3496] as [number, number], size: 0.07 },  // Jalisco
  { location: [19.0414, -98.2063] as [number, number], size: 0.09 },   // Puebla (HQ)
  { location: [25.6866, -100.3161] as [number, number], size: 0.07 },  // Nuevo León
  { location: [20.5888, -100.3899] as [number, number], size: 0.06 },  // Querétaro
  { location: [19.1738, -96.1342] as [number, number], size: 0.06 },   // Veracruz
  { location: [20.9671, -89.5230] as [number, number], size: 0.06 },   // Yucatán
  { location: [32.5027, -117.0062] as [number, number], size: 0.06 },  // Baja California
  { location: [19.2965, -99.6543] as [number, number], size: 0.06 },   // Estado de México
  { location: [16.7569, -93.1292] as [number, number], size: 0.05 },   // Chiapas
];

export function CobeGlobePulse({ className }: CobeGlobePulseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0.5);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced =
      typeof window !== "undefined"
        ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
        : false;

    const size = canvas.offsetWidth;

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio, 2),
      width: size * Math.min(window.devicePixelRatio, 2),
      height: size * Math.min(window.devicePixelRatio, 2),
      phi: phiRef.current,
      theta: 0.25,
      dark: 1,
      diffuse: 1.4,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.12, 0.18, 0.35],
      markerColor: [0.23, 0.51, 0.98],
      glowColor: [0.18, 0.35, 0.75],
      markers: MEXICO_MARKERS,
    });

    const animate = () => {
      if (!prefersReduced) {
        phiRef.current += 0.003;
      }
      globe.update({ phi: phiRef.current });
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("w-full h-full", className)}
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}
