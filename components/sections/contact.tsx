"use client";

import React, { useState } from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Phone, Mail, MapPin } from "lucide-react";

const projectTypes = [
  "Encuesta / investigación",
  "Estrategia digital",
  "Campaña de comunicación",
  "Desarrollo tecnológico",
  "Comunicación multicanal",
  "Otro",
];

export function Contact() {
  const [form, setForm] = useState({
    nombre: "", empresa: "", email: "", telefono: "", tipo: "", mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Gracias. Nos pondremos en contacto pronto.");
  };

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <AnimatedGroup preset="slide-up" className="flex flex-col gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Contacto
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                Agenda tu diagnóstico
                <br />
                <span className="text-muted-foreground font-normal">sin costo.</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Cuéntanos en qué etapa estás y qué necesitas lograr. En 48 horas tendrás una propuesta inicial.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="tel:+5233613592510"
                className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-muted/50 transition-colors cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Teléfono</p>
                  <p className="text-sm font-medium text-foreground">+52 336 135 92510</p>
                </div>
              </a>

              <a
                href="mailto:contact@stoutlab.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-muted/50 transition-colors cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium text-foreground">contact@stoutlab.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Dirección</p>
                  <p className="text-sm font-medium text-foreground">
                    2614 Maximino A. Camacho<br />
                    Col. Dos de Abril, 72340<br />
                    Puebla, Pue.
                  </p>
                </div>
              </div>
            </div>

            {/* Legal */}
            <div className="p-4 rounded-xl bg-muted/60 border border-border">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Datos legales y fiscales
              </p>
              <div className="text-xs text-muted-foreground space-y-0.5">
                <p><span className="text-foreground font-medium">Razón social:</span> Carlos Hernández Ramírez</p>
                <p><span className="text-foreground font-medium">RFC:</span> HERC970227QH3</p>
                <p><span className="text-foreground font-medium">Marca:</span> STOUTLAB</p>
              </div>
            </div>
          </AnimatedGroup>

          {/* Form */}
          <AnimatedGroup preset="slide-up">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 p-8 rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="nombre" className="text-xs font-medium text-foreground">
                    Nombre *
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    className="px-3 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="empresa" className="text-xs font-medium text-foreground">
                    Empresa / organización
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    value={form.empresa}
                    onChange={handleChange}
                    className="px-3 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Organización"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-foreground">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="px-3 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="correo@empresa.com"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="telefono" className="text-xs font-medium text-foreground">
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={form.telefono}
                    onChange={handleChange}
                    className="px-3 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="+52 000 000 0000"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="tipo" className="text-xs font-medium text-foreground">
                  Tipo de proyecto
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  value={form.tipo}
                  onChange={handleChange}
                  className="px-3 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors cursor-pointer"
                >
                  <option value="">Selecciona una opción</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="mensaje" className="text-xs font-medium text-foreground">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={4}
                  value={form.mensaje}
                  onChange={handleChange}
                  className="px-3 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  placeholder="Cuéntanos qué necesitas lograr..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors cursor-pointer shadow-sm mt-2"
              >
                Enviar solicitud
              </button>
            </form>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}
