"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { CardStack } from "@/components/ui/card-stack";
import { ShineBorder } from "@/components/ui/shine-border";

const stackItems = [
  {
    id: 1,
    title: "Analítica territorial",
    subtitle: "Segmentación geoespacial",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    id: 2,
    title: "Dashboard de inteligencia",
    subtitle: "Tableros ejecutivos en tiempo real",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
  },
  {
    id: 3,
    title: "Infraestructura de datos",
    subtitle: "Procesamiento y almacenamiento",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    id: 4,
    title: "Señales y redes",
    subtitle: "Conectividad multicanal",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
  },
  {
    id: 5,
    title: "Visualización de datos",
    subtitle: "Gráficas y métricas avanzadas",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
  },
  {
    id: 6,
    title: "Mapas nocturnos",
    subtitle: "Cobertura geográfica nacional",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&q=80",
  },
];

const checkItems = [
  "Cobertura operativa en los 32 estados",
  "Captura y sincronización de datos en campo",
  "Tecnología propia de análisis y visualización",
  "Operación continua en ciclos electorales y corporativos",
];

export function VisualStack() {
  return (
    <section id="capacidades" className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <AnimatedGroup preset="slide-up" className="flex flex-col gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Operación integral
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                De la captura al análisis.{" "}
                <span className="text-slate-400 font-normal">
                  Todo en un solo sistema.
                </span>
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed text-sm">
                STOUTLAB opera cada etapa con tecnología propia: desde el levantamiento territorial hasta la visualización ejecutiva y el lanzamiento de campañas.
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              {checkItems.map((item) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3 text-sm text-white"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </AnimatedGroup>

          {/* Card stack wrapped in ShineBorder */}
          <AnimatedGroup preset="fade" className="relative pt-10">
            <ShineBorder borderRadius={20} className="max-w-md mx-auto p-4">
              <CardStack items={stackItems} />
            </ShineBorder>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}
