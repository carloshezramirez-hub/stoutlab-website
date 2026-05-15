"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { MapPin } from "lucide-react";

const ESTADOS = [
  "Aguascalientes","Baja California","Baja California Sur","Campeche",
  "Chiapas","Chihuahua","Ciudad de México","Coahuila","Colima",
  "Durango","Estado de México","Guanajuato","Guerrero","Hidalgo",
  "Jalisco","Michoacán","Morelos","Nayarit","Nuevo León","Oaxaca",
  "Puebla","Querétaro","Quintana Roo","San Luis Potosí","Sinaloa",
  "Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz","Yucatán",
  "Zacatecas",
];

export function NationalCoverageSlider() {
  return (
    <section id="cobertura" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedGroup preset="slide-up" className="text-center mb-8 sm:mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
              Alcance nacional
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Cobertura operativa{" "}
              <span className="text-blue-400">nacional</span>
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm">
              Presencia y capacidad operativa en los 32 estados de la República Mexicana.
            </p>
          </div>
        </AnimatedGroup>

        <div className="flex justify-center gap-6 sm:gap-16 mb-8 sm:mb-12">
          {[
            { value: "32", label: "estados" },
            { value: "2,469", label: "municipios" },
            { value: "100%", label: "cobertura" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <InfiniteSlider duration={50} gap={16}>
          {ESTADOS.map((estado) => (
            <div
              key={estado}
              className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full border border-blue-500/20 bg-slate-950/50 backdrop-blur-sm text-sm text-slate-300 font-medium hover:border-blue-400/40 hover:text-white transition-colors"
            >
              <MapPin size={11} className="text-blue-400 shrink-0" />
              {estado}
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
