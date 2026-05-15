"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { AnimatedGroup } from "@/components/ui/animated-group";

const CobeGlobePulse = dynamic(
  () => import("@/components/ui/cobe-globe-pulse").then((m) => m.CobeGlobePulse),
  { ssr: false, loading: () => <div className="w-full h-full bg-muted/30 rounded-full animate-pulse" /> }
);

const regions = [
  { name: "Norte", states: "Chihuahua · Sonora · Coahuila · Nuevo León · Tamaulipas" },
  { name: "Bajío", states: "Guanajuato · Querétaro · San Luis Potosí · Aguascalientes" },
  { name: "Centro", states: "CDMX · Estado de México · Puebla · Tlaxcala · Hidalgo" },
  { name: "Occidente", states: "Jalisco · Michoacán · Colima · Nayarit" },
  { name: "Sureste", states: "Veracruz · Oaxaca · Chiapas · Yucatán · Campeche" },
];

export function CoverageGlobe() {
  return (
    <section className="py-24 bg-[#0a0f1e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <AnimatedGroup preset="slide-up" className="flex flex-col gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
                Operación territorial
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Cobertura operativa nacional con lectura territorial y{" "}
                <span className="text-blue-400">ejecución digital.</span>
              </h2>
            </div>

            {/* Region list */}
            <div className="flex flex-col gap-3">
              {regions.map((region) => (
                <div
                  key={region.name}
                  className="flex flex-col gap-0.5 p-4 rounded-xl border border-white/10 bg-white/5 hover:border-blue-500/30 transition-colors"
                >
                  <p className="text-sm font-semibold text-white">{region.name}</p>
                  <p className="text-xs text-slate-400">{region.states}</p>
                </div>
              ))}
            </div>
          </AnimatedGroup>

          {/* Globe */}
          <AnimatedGroup preset="fade" className="flex justify-center">
            <div className="w-full max-w-sm aspect-square">
              <Suspense fallback={<div className="w-full h-full rounded-full bg-slate-800 animate-pulse" />}>
                <CobeGlobePulse className="w-full h-full" />
              </Suspense>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}
