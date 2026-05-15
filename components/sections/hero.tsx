"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { BarChart2, Globe, Layers, TrendingUp } from "lucide-react";

const statCards = [
  { icon: BarChart2, label: "Tracking de opinión", value: "Real-time", color: "text-slate-300" },
  { icon: Globe, label: "Cobertura territorial", value: "32 estados", color: "text-slate-300" },
  { icon: Layers, label: "Alcance multicanal", value: "Omnicanal", color: "text-slate-400" },
  { icon: TrendingUp, label: "Conversión digital", value: "+3.2x", color: "text-slate-300" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Vignette — darkens sides and top only, never the bottom edge */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background: [
            "linear-gradient(to right, rgba(8,8,8,0.7) 0%, transparent 18%, transparent 82%, rgba(8,8,8,0.7) 100%)",
            "linear-gradient(to bottom, rgba(8,8,8,0.55) 0%, transparent 28%)",
          ].join(", "),
        }}
      />

      {/* Content */}
      <div
        className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-none"
        style={{ zIndex: 3 }}
      >
        <AnimatedGroup preset="blur-slide" className="flex flex-col items-center gap-6">
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-slate-300 text-xs font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-pulse" />
            Inteligencia pública, data y estrategia digital
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight max-w-4xl">
            Medimos opinión.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
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
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 pointer-events-auto">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-slate-100 transition-all duration-200 shadow-md cursor-pointer min-w-[200px]"
            >
              Agendar diagnóstico
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-white/25 bg-white/5 backdrop-blur-sm text-white text-sm font-semibold hover:bg-white/10 transition-all duration-200 cursor-pointer min-w-[200px]"
            >
              Ver capacidades
            </a>
          </div>
        </AnimatedGroup>

        {/* Dashboard mockup */}
        <div className="relative mt-16 mx-auto max-w-4xl pointer-events-auto">
          <div className="relative rounded-2xl border border-white/8 bg-black/50 backdrop-blur-xl p-1 shadow-lg shadow-black/50">
            <div className="rounded-xl bg-[#111]/80 p-6">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/8">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-slate-600 font-mono">stoutlab — intelligence dashboard</span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {statCards.map(({ icon: Icon, label, value, color }) => (
                  <div
                    key={label}
                    className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4 flex flex-col gap-2 hover:border-white/15 hover:bg-white/[0.06] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <Icon size={16} className={color} />
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <p className="text-lg font-bold text-white leading-none">{value}</p>
                    <p className="text-xs text-slate-500 leading-tight">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
