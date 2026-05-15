"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { AreaChart } from "@/components/ui/area-chart";
import { TrendingUp, Users, AlertCircle } from "lucide-react";

const chartData = [
  { month: "Ene", preferenciaA: 34, preferenciaB: 28, indecisos: 24, conocimiento: 62 },
  { month: "Feb", preferenciaA: 36, preferenciaB: 27, indecisos: 22, conocimiento: 65 },
  { month: "Mar", preferenciaA: 38, preferenciaB: 26, indecisos: 21, conocimiento: 69 },
  { month: "Abr", preferenciaA: 35, preferenciaB: 29, indecisos: 23, conocimiento: 71 },
  { month: "May", preferenciaA: 41, preferenciaB: 25, indecisos: 19, conocimiento: 74 },
  { month: "Jun", preferenciaA: 43, preferenciaB: 24, indecisos: 18, conocimiento: 78 },
  { month: "Jul", preferenciaA: 39, preferenciaB: 27, indecisos: 21, conocimiento: 80 },
  { month: "Ago", preferenciaA: 44, preferenciaB: 23, indecisos: 18, conocimiento: 82 },
];

const chartSeries = [
  { key: "preferenciaA", label: "Preferencia A", color: "#3b82f6" },
  { key: "preferenciaB", label: "Preferencia B", color: "#64748b" },
  { key: "indecisos", label: "Indecisos", color: "#94a3b8" },
  { key: "conocimiento", label: "Conocimiento", color: "#1d4ed8" },
];

const insights = [
  {
    icon: TrendingUp,
    label: "Tendencia",
    value: "+10 pts",
    note: "Crecimiento sostenido en preferencia A desde marzo",
    color: "text-blue-500",
  },
  {
    icon: Users,
    label: "Segmento clave",
    value: "25-34",
    note: "Rango de edad con mayor variabilidad de intención",
    color: "text-indigo-500",
  },
  {
    icon: AlertCircle,
    label: "Riesgo / Oportunidad",
    value: "18% indecisos",
    note: "Segmento accionable con comunicación dirigida",
    color: "text-blue-400",
  },
];

export function IntelligenceChart() {
  return (
    <section id="inteligencia" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedGroup preset="slide-up" className="mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Inteligencia de datos
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground max-w-2xl">
              Modelamos escenarios para entender{" "}
              <span className="text-primary">por qué cambia</span> la conversación.
            </h2>
          </div>
        </AnimatedGroup>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart */}
          <div className="lg:col-span-2">
            <AnimatedGroup preset="fade">
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">
                      Comparativa de preferencias — Encuesta nacional
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Datos ilustrativos · Enero – Agosto
                    </p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-600 font-medium border border-green-500/20">
                    Live
                  </span>
                </div>
                <AreaChart data={chartData} series={chartSeries} />
              </div>
            </AnimatedGroup>
          </div>

          {/* Insight cards */}
          <div className="flex flex-col gap-4">
            {insights.map((insight) => (
              <AnimatedGroup key={insight.label} preset="slide-up">
                <div className="rounded-2xl border border-border bg-card p-5 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <insight.icon size={15} className={insight.color} />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {insight.label}
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-foreground mb-1">{insight.value}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{insight.note}</p>
                </div>
              </AnimatedGroup>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
