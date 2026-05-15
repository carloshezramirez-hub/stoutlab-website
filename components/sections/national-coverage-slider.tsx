"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { MapPin } from "lucide-react";

const ESTADOS = [
  "Aguascalientes", "Baja California", "Baja California Sur", "Campeche",
  "Chiapas", "Chihuahua", "Ciudad de México", "Coahuila", "Colima",
  "Durango", "Estado de México", "Guanajuato", "Guerrero", "Hidalgo",
  "Jalisco", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca",
  "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa",
  "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán",
  "Zacatecas",
];

export function NationalCoverageSlider() {
  return (
    <section id="cobertura" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedGroup preset="slide-up" className="text-center mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Alcance nacional
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Operación y levantamiento con{" "}
              <span className="text-primary">cobertura nacional</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Presencia y capacidad operativa en los 32 estados de la República Mexicana.
            </p>
          </div>
        </AnimatedGroup>

        {/* States counter */}
        <div className="flex justify-center gap-8 mb-12">
          {[
            { value: "32", label: "estados" },
            { value: "2,469", label: "municipios" },
            { value: "100%", label: "cobertura" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Infinite slider */}
        <div className="relative">
          <InfiniteSlider duration={50} gap={24}>
            {ESTADOS.map((estado) => (
              <div
                key={estado}
                className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card text-sm text-muted-foreground font-medium hover:border-primary/30 hover:text-foreground transition-colors"
              >
                <MapPin size={12} className="text-primary shrink-0" />
                {estado}
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}
