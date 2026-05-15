"use client";

import React, { useState } from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import {
  BarChart2, MessageSquare, Target, Code2,
  Radio, MapPin
} from "lucide-react";

const categories = [
  {
    id: "investigacion",
    label: "Investigación",
    icon: BarChart2,
    items: [
      { title: "Encuestas de opinión pública", description: "Levantamiento presencial, telefónico y digital con metodología estadística rigurosa.", tags: ["Panel", "CAPI", "CATI"] },
      { title: "Tracking y tendencias", description: "Monitoreo continuo de preferencias, percepción y agenda pública.", tags: ["Series de tiempo", "Dashboard"] },
      { title: "Segmentación territorial", description: "Análisis por municipio, AGEB y zona de influencia.", tags: ["GIS", "Datos abiertos"] },
      { title: "Análisis de datos digitales", description: "Social listening, benchmarking y modelado predictivo.", tags: ["NLP", "Redes sociales"] },
    ],
  },
  {
    id: "estrategia",
    label: "Estrategia",
    icon: MessageSquare,
    items: [
      { title: "Narrativa y posicionamiento", description: "Construcción de mensajes centrales y pruebas de concepto con audiencias reales.", tags: ["Mensajes", "Focus group"] },
      { title: "Campañas de comunicación", description: "Diseño y ejecución de campañas multicanal coherentes con los datos.", tags: ["Multicanal", "A/B"] },
      { title: "Contenido y video", description: "Producción editorial y audiovisual alineada a la estrategia narrativa.", tags: ["Video", "Social", "Motion"] },
      { title: "Gestión de reputación", description: "Monitoreo, respuesta y construcción de imagen institucional.", tags: ["Crisis", "Medios", "Digital"] },
    ],
  },
  {
    id: "performance",
    label: "Performance",
    icon: Target,
    items: [
      { title: "Publicidad digital", description: "Campañas de pago en Meta, Google, YouTube, TikTok y programática.", tags: ["Meta Ads", "Google Ads", "Programática"] },
      { title: "SEO y visibilidad orgánica", description: "Posicionamiento en buscadores y optimización de contenido editorial.", tags: ["SEO", "SEA", "Contenido"] },
      { title: "Lead generation", description: "Generación de prospectos calificados con flujos de conversión medibles.", tags: ["Outbound", "Funnel", "CRM"] },
      { title: "Optimización de conversión", description: "Mejora continua del flujo de compra o registro en sitio web.", tags: ["CRO", "UX", "A/B Testing"] },
    ],
  },
  {
    id: "tecnologia",
    label: "Tecnología",
    icon: Code2,
    items: [
      { title: "Capturadores de campo", description: "Apps offline para levantamiento de datos en campo con sincronización automática.", tags: ["PWA", "Offline", "GPS"] },
      { title: "Dashboards ejecutivos", description: "Tableros visuales en tiempo real para monitoreo estratégico.", tags: ["BI", "Recharts", "Live"] },
      { title: "Apps web y móviles", description: "Desarrollo de herramientas digitales a medida para operación interna o ciudadana.", tags: ["React", "Next.js", "iOS", "Android"] },
      { title: "Automatizaciones y flujos", description: "Integración de sistemas, triggers automáticos y procesos sin intervención humana.", tags: ["API", "Webhooks", "n8n"] },
    ],
  },
  {
    id: "multicanal",
    label: "Multicanal",
    icon: Radio,
    items: [
      { title: "WhatsApp masivo", description: "Comunicación a escala con segmentación, personalización y métricas.", tags: ["WhatsApp API", "CRM", "Masivo"] },
      { title: "Email marketing", description: "Estrategia y ejecución de campañas de correo con segmentación avanzada.", tags: ["ESP", "Automatización", "Segmentación"] },
      { title: "SMS y notificaciones", description: "Mensajería directa al dispositivo con tasas de apertura superiores.", tags: ["SMS", "Push", "Cobertura"] },
      { title: "Retención y flujos de venta", description: "Secuencias automatizadas para activar, reactivar y convertir contactos.", tags: ["Nurturing", "Automático", "Revenue"] },
    ],
  },
  {
    id: "local",
    label: "Presencia local",
    icon: MapPin,
    items: [
      { title: "SEO local y mapas", description: "Posicionamiento en Google Maps, Apple Maps y directorios relevantes.", tags: ["GMB", "Local SEO"] },
      { title: "Perfiles y reputación digital", description: "Gestión de reseñas, respuesta a comentarios y construcción de autoridad.", tags: ["Reseñas", "Autoridad"] },
      { title: "Presencia en directorios", description: "Alta y optimización en directorios y portales de negocios locales.", tags: ["Directorios", "Citations"] },
    ],
  },
];

export function ServicesBento() {
  const [active, setActive] = useState("investigacion");
  const activeCategory = categories.find((c) => c.id === active)!;

  return (
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedGroup preset="slide-up" className="text-center mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Capacidades
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Qué hacemos
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base">
              Seis verticales especializadas que trabajan como un solo sistema integrado.
            </p>
          </div>
        </AnimatedGroup>

        {/* Category tabs — horizontal scroll on mobile */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={cn(
                "shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer border",
                active === cat.id
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              )}
            >
              <cat.icon size={15} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento grid */}
        <AnimatedGroup key={active} preset="fade">
          <BentoGrid>
            {activeCategory.items.map((item, i) => (
              <BentoGridItem
                key={item.title}
                className={cn(i === 0 ? "md:col-span-2" : "")}
                title={item.title}
                description={item.description}
                tags={item.tags}
              />
            ))}
          </BentoGrid>
        </AnimatedGroup>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
