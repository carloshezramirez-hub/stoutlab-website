"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { CardStack } from "@/components/ui/card-stack";

const stackItems = [
  {
    id: 1,
    title: "Investigación de campo",
    subtitle: "Levantamiento de datos",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80",
  },
  {
    id: 2,
    title: "Estrategia y análisis",
    subtitle: "War room & decisiones",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    id: 3,
    title: "Data dashboards",
    subtitle: "Tableros ejecutivos",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: 4,
    title: "Producción audiovisual",
    subtitle: "Contenido y video",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
  },
  {
    id: 5,
    title: "Performance marketing",
    subtitle: "Crecimiento digital",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
  },
  {
    id: 6,
    title: "Tecnología móvil",
    subtitle: "Apps y herramientas",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
];

export function VisualStack() {
  return (
    <section id="capacidades" className="py-24 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <AnimatedGroup preset="slide-up" className="flex flex-col gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Operación integral
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                Investigación de campo a producción digital.{" "}
                <span className="text-muted-foreground font-normal">Todo bajo un mismo techo.</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Desde el levantamiento de datos hasta la producción de contenido y el lanzamiento de campañas, STOUTLAB opera cada etapa con equipos especializados y tecnología propia.
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              {[
                "Equipos de campo en los 32 estados",
                "Producción audiovisual y editorial",
                "Tecnología propia de captura y análisis",
                "Operaciones 24/7 en temporada de campaña",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedGroup>

          {/* Card stack */}
          <AnimatedGroup preset="fade" className="relative pt-10">
            <div className="relative max-w-md mx-auto">
              <CardStack items={stackItems} />
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}
