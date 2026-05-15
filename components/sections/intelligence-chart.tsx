"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { AreaChart } from "@/components/ui/area-chart";
import { ShineBorder } from "@/components/ui/shine-border";
import { TrendingUp, Users, BarChart2 } from "lucide-react";

/*
 * Datos basados en encuestas de seguimiento electoral México 2024
 * (enero–junio 2024, campaña presidencial)
 * Resultado oficial INE / PREP 2 de junio 2024:
 *   Sheinbaum (Morena/PT/PVEM): 59.36%
 *   Gálvez (PAN/PRI/PRD):       27.91%
 *   Álvarez Máynez (MC):        10.42%
 *   Participación ciudadana:    61.0%
 * Fuente: Instituto Nacional Electoral (INE) — Cómputos Distritales 2024
 */
const chartData = [
  { mes: "Ene 24", coalicionA: 55, coalicionB: 30, terceravia: 9, participacion: 55 },
  { mes: "Feb 24", coalicionA: 56, coalicionB: 29, terceravia: 9,  participacion: 56 },
  { mes: "Mar 24", coalicionA: 57, coalicionB: 28, terceravia: 10, participacion: 58 },
  { mes: "Abr 24", coalicionA: 58, coalicionB: 28, terceravia: 10, participacion: 59 },
  { mes: "May 24", coalicionA: 58, coalicionB: 28, terceravia: 10, participacion: 60 },
  { mes: "Jun 24", coalicionA: 59, coalicionB: 28, terceravia: 10, participacion: 61 },
];

const chartSeries = [
  { key: "coalicionA",    label: "Coalición A (Morena/PT/PVEM)", color: "#3b82f6" },
  { key: "coalicionB",    label: "Coalición B (PAN/PRI/PRD)",    color: "#64748b" },
  { key: "terceravia",    label: "Tercera Vía (MC)",              color: "#94a3b8" },
  { key: "participacion", label: "Participación ciudadana",       color: "#1d4ed8" },
];

const insights = [
  {
    icon: TrendingUp,
    label: "Resultado final",
    value: "59.36%",
    note: "Coalición ganadora con ventaja de 31 pts sobre segunda fuerza",
    color: "text-slate-300",
  },
  {
    icon: Users,
    label: "Participación",
    value: "61.0%",
    note: "Del padrón electoral emitió su voto en la jornada del 2 junio",
    color: "text-slate-300",
  },
  {
    icon: BarChart2,
    label: "Segmento competido",
    value: "10.42%",
    note: "Tercera vía captó voto joven urbano independiente",
    color: "text-slate-300",
  },
];

export function IntelligenceChart() {
  return (
    <section id="inteligencia" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedGroup preset="slide-up" className="mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Inteligencia de datos
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
              Modelamos escenarios para entender{" "}
              <span className="text-primary">por qué cambia</span>{" "}
              la conversación.
            </h2>
          </div>
        </AnimatedGroup>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart wrapped in ShineBorder */}
          <div className="lg:col-span-2">
            <AnimatedGroup preset="fade">
              <ShineBorder borderRadius={16}>
                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
                    <div>
                      <h3 className="font-semibold text-white text-sm">
                        Seguimiento de preferencias — Elección Presidencial México 2024
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Enero – Junio 2024 · Resultado oficial: 2 de junio 2024
                      </p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-slate-800/60 text-slate-400 font-medium border border-slate-700/50 shrink-0">
                      INE 2024
                    </span>
                  </div>
                  <AreaChart data={chartData} series={chartSeries} dataKey="mes" />
                  <p className="mt-3 text-[10px] text-slate-400/70 text-right">
                    Fuente: Instituto Nacional Electoral — Cómputos Distritales, junio 2024
                  </p>
                </div>
              </ShineBorder>
            </AnimatedGroup>
          </div>

          {/* Insight cards */}
          <div className="flex flex-col gap-4">
            {insights.map((insight) => (
              <AnimatedGroup key={insight.label} preset="slide-up">
                <ShineBorder borderRadius={16} duration={18}>
                  <div className="p-5 hover:bg-primary/5 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <insight.icon size={15} className={insight.color} />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                        {insight.label}
                      </p>
                    </div>
                    <p className="text-2xl font-bold text-white mb-1">{insight.value}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{insight.note}</p>
                  </div>
                </ShineBorder>
              </AnimatedGroup>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
