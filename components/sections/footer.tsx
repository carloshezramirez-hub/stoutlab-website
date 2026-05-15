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
  { label: "+52 336 135 92510", href: "tel:+5233613592510" },
  { label: "contact@stoutlab.com", href: "mailto:contact@stoutlab.com" },
  { label: "Puebla, México", href: "#contacto" },
  { label: "Agendar diagnóstico", href: "#contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <a href="#" className="font-bold text-xl tracking-tight text-foreground">
              <span className="text-primary">stout</span>lab
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Inteligencia pública, estrategia y tecnología digital para organizaciones que necesitan resultados medibles.
            </p>
            <div className="text-xs text-muted-foreground space-y-0.5 mt-2">
              <p>Carlos Hernández Ramírez</p>
              <p>RFC: HERC970227QH3</p>
              <p>Puebla, Pue., México</p>
            </div>
          </div>

          <FooterColumn title="Capacidades" links={capacidades} />
          <FooterColumn title="Inteligencia" links={inteligencia} />
          <FooterColumn title="Contacto" links={contacto} />
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} STOUTLAB. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Puebla, México · contact@stoutlab.com
          </p>
        </div>
      </div>
    </footer>
  );
}
