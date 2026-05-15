"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { CardStack, CardStackItem } from "@/components/ui/card-stack";

const stackItems: CardStackItem[] = [
  {
    id: 1,
    title: "Analítica territorial",
    description: "Segmentación geoespacial a nivel manzana",
    imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tag: "Inteligencia",
  },
  {
    id: 2,
    title: "Dashboard de inteligencia",
    description: "Tableros ejecutivos en tiempo real",
    imageSrc: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
    tag: "Tecnología",
  },
  {
    id: 3,
    title: "Infraestructura de datos",
    description: "Procesamiento y almacenamiento escalable",
    imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tag: "Infraestructura",
  },
  {
    id: 4,
    title: "Señales y redes",
    description: "Conectividad multicanal y cobertura nacional",
    imageSrc: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
    tag: "Cobertura",
  },
  {
    id: 5,
    title: "Visualización de datos",
    description: "Gráficas y métricas avanzadas",
    imageSrc: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    tag: "Analítica",
  },
  {
    id: 6,
    title: "Mapas nocturnos",
    description: "Cobertura geográfica de la República Mexicana",
    imageSrc: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&q=80",
    tag: "Territorio",
  },
];

const checkItems = [
  "Cobertura operativa en los 32 estados",
  "Captura y sincronización de datos en campo",
  "Tecnología propia de análisis y visualización",
  "Operación continua en ciclos electorales y corporativos",
];

export function VisualStack() {
  const [cardDims, setCardDims] = useState({ width: 360, height: 250, mobile: false });

  useEffect(() => {
    const update = () => {
      const isMobile = window.innerWidth < 1024;
      setCardDims(isMobile
        ? { width: Math.min(window.innerWidth - 48, 300), height: 210, mobile: true }
        : { width: 360, height: 250, mobile: false }
      );
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section id="capacidades" className="py-16 sm:py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text */}
          <AnimatedGroup preset="slide-up" className="flex flex-col gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Operación integral
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                De la captura al análisis.{" "}
                <span className="text-slate-400 font-normal">Todo en un solo sistema.</span>
              </h2>
              <p className="mt-3 text-slate-400 leading-relaxed text-sm">
                STOUTLAB opera cada etapa con tecnología propia: desde el levantamiento
                territorial hasta la visualización ejecutiva y el lanzamiento de campañas.
              </p>
            </div>
            <ul className="flex flex-col gap-2.5">
              {checkItems.map((item) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3 text-sm text-white"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-5 h-5 rounded-full bg-white/8 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </AnimatedGroup>

          {/* Fan card stack — maxVisible=3 keeps cards within column bounds */}
          <AnimatedGroup preset="fade" className="relative w-full min-w-0">
            <CardStack
              items={stackItems}
              cardWidth={cardDims.width}
              cardHeight={cardDims.height}
              spreadDeg={cardDims.mobile ? 14 : 20}
              overlap={cardDims.mobile ? 0.88 : 0.80}
              maxVisible={3}
              autoAdvance
              intervalMs={2400}
              pauseOnHover
              showDots
            />
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}
