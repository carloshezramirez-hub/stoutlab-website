"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Database, Brain, MapPin, Megaphone, TrendingUp, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Database,
    step: "01",
    title: "Recolectar",
    description: "Encuestas, levantamiento de campo, datos digitales y fuentes abiertas.",
    color: "from-blue-600 to-blue-400",
  },
  {
    icon: Brain,
    step: "02",
    title: "Analizar",
    description: "Modelado estadístico, segmentación y lectura de tendencias en tiempo real.",
    color: "from-indigo-600 to-indigo-400",
  },
  {
    icon: MapPin,
    step: "03",
    title: "Segmentar",
    description: "Territorio, demografía y comportamiento. Del estado a la manzana.",
    color: "from-blue-700 to-blue-500",
  },
  {
    icon: Megaphone,
    step: "04",
    title: "Comunicar",
    description: "Narrativa, contenido y campañas multicanal adaptadas a cada segmento.",
    color: "from-sky-600 to-sky-400",
  },
  {
    icon: TrendingUp,
    step: "05",
    title: "Optimizar",
    description: "Medición continua, ajuste de mensajes y maximización de conversión.",
    color: "from-blue-500 to-blue-300",
  },
];

export function ValueFlow() {
  return (
    <section id="propuesta" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedGroup preset="slide-up" className="text-center mb-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
              Metodología
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Del dato a la acción.
              <br />
              <span className="text-slate-400 font-normal">De la muestra al mensaje.</span>
            </h2>
          </div>
        </AnimatedGroup>

        {/* Desktop: horizontal */}
        <div className="hidden lg:flex items-start gap-3">
          {steps.map((step, i) => (
            <React.Fragment key={step.step}>
              <AnimatedGroup preset="fade" className="flex-1">
                <motion.div
                  className={cn(
                    "relative group flex flex-col gap-4 p-6 rounded-2xl cursor-default",
                    "border border-blue-500/15 bg-slate-950/55 backdrop-blur-xl",
                    "shadow-[0_24px_80px_rgba(15,23,42,0.35)]",
                    "transition-all duration-300",
                    "hover:-translate-y-1 hover:border-blue-400/30 hover:bg-slate-900/65"
                  )}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br shrink-0",
                    step.color
                  )}>
                    <step.icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-blue-400/70 mb-1">{step.step}</p>
                    <h3 className="text-sm font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              </AnimatedGroup>
              {i < steps.length - 1 && (
                <div className="flex items-start pt-10">
                  <ArrowRight size={16} className="text-blue-500/40 mt-3" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden flex flex-col gap-3">
          {steps.map((step) => (
            <AnimatedGroup key={step.step} preset="slide-up">
              <div className={cn(
                "flex items-start gap-4 p-5 rounded-2xl",
                "border border-blue-500/15 bg-slate-950/55 backdrop-blur-xl"
              )}>
                <div className={cn(
                  "shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br",
                  step.color
                )}>
                  <step.icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-mono text-blue-400/70 mb-0.5">{step.step}</p>
                  <h3 className="text-sm font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </AnimatedGroup>
          ))}
        </div>
      </div>
    </section>
  );
}
