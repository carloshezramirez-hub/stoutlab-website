import React from "react";
import { FooterColumn } from "@/components/ui/footer-column";

const capacidades = [
  { label: "Investigación y opinión", href: "#servicios" },
  { label: "Estrategia y narrativa", href: "#servicios" },
  { label: "Performance digital", href: "#servicios" },
  { label: "Tecnología propia", href: "#tecnologia" },
  { label: "Comunicación multicanal", href: "#servicios" },
];

const inteligencia = [
  { label: "Metodología", href: "#propuesta" },
  { label: "Tracking de opinión", href: "#inteligencia" },
  { label: "Cobertura nacional", href: "#cobertura" },
  { label: "Dashboards y reportes", href: "#tecnologia" },
];

const contacto = [
  { label: "+33 06 13 59 25 10", href: "tel:+330613592510" },
  { label: "contact@stoutlab.com", href: "mailto:contact@stoutlab.com" },
  { label: "Puebla, México", href: "#contacto" },
  { label: "Agendar diagnóstico", href: "#contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 relative bg-white/[0.03] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <a href="#" className="font-bold text-xl tracking-tight text-white">
              <span className="text-blue-400">stout</span>lab
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Inteligencia pública, estrategia y tecnología digital para organizaciones que necesitan resultados medibles.
            </p>
            <p className="text-xs text-slate-600 mt-1">Puebla, México</p>
          </div>
          <FooterColumn title="Capacidades" links={capacidades} />
          <FooterColumn title="Inteligencia" links={inteligencia} />
          <FooterColumn title="Contacto" links={contacto} />
        </div>

        <div className="mt-12 pt-8 border-t border-blue-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} STOUTLAB. Todos los derechos reservados.
          </p>
          <p className="text-xs text-slate-600">
            contact@stoutlab.com · Puebla, México
          </p>
        </div>
      </div>
    </footer>
  );
}
