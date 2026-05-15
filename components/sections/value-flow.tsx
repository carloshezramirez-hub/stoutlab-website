"use client";

import React from "react";
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
    description: "Territorio, demografía y comportamiento. Del estado a la manzana electoral.",
    color: "from-blue-700 to-blue-500",
  },
  {
    icon: Megaphone,
    step: "04",
    title: "Comunicar",
    description: "Narrativa, contenido, ads y campañas multicanal adaptadas a cada segmento.",
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
    <section id="propuesta" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedGroup preset="slide-up" className="text-center mb-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Metodología
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Del dato a la acción.
              <br />
              <span className="text-muted-foreground font-normal">De la muestra al mensaje.</span>
            </h2>
          </div>
        </AnimatedGroup>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:flex items-start gap-4">
          {steps.map((step, i) => (
            <React.Fragment key={step.step}>
              <AnimatedGroup preset="fade" className="flex-1">
                <div className="group flex flex-col gap-4 p-6 rounded-2xl border border-border hover:border-primary/30 hover:bg-muted/50 transition-all duration-300 cursor-default">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br",
                    step.color
                  )}>
                    <step.icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground mb-1">{step.step}</p>
                    <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </AnimatedGroup>
              {i < steps.length - 1 && (
                <div className="flex items-start pt-8 text-border">
                  <ArrowRight size={20} className="text-muted-foreground/40 mt-3" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden flex flex-col gap-4">
          {steps.map((step) => (
            <AnimatedGroup key={step.step} preset="slide-up">
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-border">
                <div className={cn(
                  "shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br",
                  step.color
                )}>
                  <step.icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-0.5">{step.step}</p>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </AnimatedGroup>
          ))}
        </div>
      </div>
    </section>
  );
}
