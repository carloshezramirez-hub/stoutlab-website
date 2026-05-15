"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Database, Monitor, Smartphone, Zap, GitBranch, BarChart2 } from "lucide-react";

const techTools = [
  {
    icon: <Database size={18} />,
    title: "Capturadores de campo",
    description: "Aplicaciones offline para levantamiento de datos en territorio, con geolocalización y sincronización automática al reconectar.",
    tags: ["Offline-first", "GPS", "Sync"],
    className: "md:col-span-2",
  },
  {
    icon: <Monitor size={18} />,
    title: "Dashboards ejecutivos",
    description: "Tableros en tiempo real adaptados a cada nivel de toma de decisiones.",
    tags: ["Live", "BI", "Custom"],
  },
  {
    icon: <Smartphone size={18} />,
    title: "Apps iOS y Android",
    description: "Herramientas móviles propias para operación de campo, seguimiento y comunicación.",
    tags: ["Cross-platform", "Nativo"],
  },
  {
    icon: <Zap size={18} />,
    title: "Automatizaciones",
    description: "Flujos que eliminan trabajo manual en captura, validación, notificación y seguimiento.",
    tags: ["n8n", "Webhooks", "API"],
  },
  {
    icon: <GitBranch size={18} />,
    title: "CRM y seguimiento",
    description: "Gestión de contactos, leads y ciclos de conversación para operaciones de alto volumen.",
    tags: ["Pipeline", "Contactos", "Historial"],
  },
  {
    icon: <BarChart2 size={18} />,
    title: "Reportes vivos",
    description: "Informes automáticos en PDF, web y correo con datos actualizados en tiempo real.",
    tags: ["PDF", "Email", "Automático"],
    className: "md:col-span-2",
  },
];

export function Technology() {
  return (
    <section id="tecnologia" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedGroup preset="slide-up" className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Tecnología propia
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Un solo sistema.
                <br />
                <span className="text-muted-foreground font-normal">Captura, análisis y seguimiento.</span>
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed lg:text-right">
              Creamos herramientas a la medida para que la operación, captura, análisis y seguimiento vivan en un mismo sistema. Sin hojas de cálculo. Sin silos de información.
            </p>
          </div>
        </AnimatedGroup>

        <AnimatedGroup preset="fade">
          <BentoGrid>
            {techTools.map((tool) => (
              <BentoGridItem
                key={tool.title}
                icon={tool.icon}
                title={tool.title}
                description={tool.description}
                tags={tool.tags}
                className={tool.className}
              />
            ))}
          </BentoGrid>
        </AnimatedGroup>
      </div>
    </section>
  );
}
