"use client";

import React from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { BarChart2, Globe, Layers, TrendingUp } from "lucide-react";

const statCards = [
  { icon: BarChart2, label: "Tracking de opinión", value: "Real-time", color: "text-blue-400" },
  { icon: Globe, label: "Cobertura territorial", value: "32 estados", color: "text-blue-300" },
  { icon: Layers, label: "Alcance multicanal", value: "Omnicanal", color: "text-indigo-400" },
  { icon: TrendingUp, label: "Conversión digital", value: "+3.2x", color: "text-blue-500" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0f1e]"
    >
      {/* Dot matrix animation */}
      <CanvasRevealEffect className="opacity-50" />

      {/* Radial overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 20%, #0a0f1e 80%)" }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0f1e] to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedGroup preset="blur-slide" className="flex flex-col items-center gap-6">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Inteligencia pública, data y estrategia digital
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight max-w-4xl">
            Medimos opinión.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
              Diseñamos narrativa.
            </span>{" "}
            Activamos crecimiento.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            STOUTLAB combina encuestas, analítica, tecnología y comunicación
            multicanal para convertir datos en decisiones, campañas y resultados medibles.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-500/20 cursor-pointer min-w-[200px]"
            >
              Agendar diagnóstico
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-white/20 bg-white/5 text-white text-sm font-semibold hover:bg-white/10 transition-all duration-200 cursor-pointer min-w-[200px]"
            >
              Ver capacidades
            </a>
          </div>
        </AnimatedGroup>

        {/* Dashboard mockup */}
        <div className="relative mt-16 mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-1 shadow-2xl shadow-black/50">
            <div className="rounded-xl bg-slate-900/90 p-6">
              {/* Toolbar */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-slate-500 font-mono">stoutlab — dashboard</span>
              </div>
              {/* Stat cards grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {statCards.map(({ icon: Icon, label, value, color }) => (
                  <div
                    key={label}
                    className="rounded-xl bg-slate-800/60 border border-white/5 p-4 flex flex-col gap-2 hover:border-blue-500/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <Icon size={16} className={color} />
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    </div>
                    <p className="text-lg font-bold text-white leading-none">{value}</p>
                    <p className="text-xs text-slate-500 leading-tight">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Glow */}
          <div className="absolute -inset-4 bg-blue-500/5 rounded-3xl blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}
