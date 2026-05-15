"use client";

import React, { useState } from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { ShineBorder } from "@/components/ui/shine-border";
import { LocationMap } from "@/components/ui/expand-map";
import { Phone, Mail } from "lucide-react";

const projectTypes = [
  "Encuesta / investigación de opinión",
  "Estrategia y narrativa digital",
  "Campaña de comunicación multicanal",
  "Desarrollo de tecnología",
  "Performance y adquisición digital",
  "Otro",
];

export function Contact() {
  const [form, setForm] = useState({
    nombre: "", empresa: "", email: "", telefono: "", tipo: "", mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Gracias. Nos pondremos en contacto pronto.");
  };

  return (
    <section id="contacto" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <AnimatedGroup preset="slide-up" className="flex flex-col gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
                Contacto
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Agenda tu diagnóstico{" "}
                <span className="text-slate-400 font-normal">sin costo.</span>
              </h2>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                Cuéntanos en qué etapa estás y qué necesitas lograr. En 48 horas tendrás una propuesta inicial.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+330613592510"
                className="flex items-center gap-4 p-4 rounded-xl border border-blue-500/15 bg-slate-950/55 backdrop-blur-xl hover:border-blue-400/30 hover:bg-slate-900/65 transition-all duration-200 cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800/70 flex items-center justify-center shrink-0 group-hover:bg-slate-700/70 transition-colors">
                  <Phone size={16} className="text-slate-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Teléfono</p>
                  <p className="text-sm font-medium text-white">+33 06 13 59 25 10</p>
                </div>
              </a>

              <a
                href="mailto:contact@stoutlab.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-blue-500/15 bg-slate-950/55 backdrop-blur-xl hover:border-blue-400/30 hover:bg-slate-900/65 transition-all duration-200 cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800/70 flex items-center justify-center shrink-0 group-hover:bg-slate-700/70 transition-colors">
                  <Mail size={16} className="text-slate-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="text-sm font-medium text-white">contact@stoutlab.com</p>
                </div>
              </a>

              <LocationMap
                location="2614 Maximino A. Camacho, Col. Dos de Abril, Puebla, Pue. 72340"
                coordinates="Puebla, México · 19.04°N 98.20°W"
              />
            </div>
          </AnimatedGroup>

          {/* Form */}
          <AnimatedGroup preset="slide-up">
            <ShineBorder borderRadius={16}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nombre" className="text-xs font-medium text-slate-300">Nombre *</label>
                    <input id="nombre" name="nombre" type="text" required value={form.nombre} onChange={handleChange}
                      className="px-3 py-2.5 rounded-lg border border-slate-800/70 bg-slate-900/60 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-600/60 focus:border-slate-600/60 transition-colors"
                      placeholder="Tu nombre" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="empresa" className="text-xs font-medium text-slate-300">Empresa / Organización</label>
                    <input id="empresa" name="empresa" type="text" value={form.empresa} onChange={handleChange}
                      className="px-3 py-2.5 rounded-lg border border-slate-800/70 bg-slate-900/60 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-600/60 focus:border-slate-600/60 transition-colors"
                      placeholder="Organización" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-slate-300">Email *</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                      className="px-3 py-2.5 rounded-lg border border-slate-800/70 bg-slate-900/60 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-600/60 focus:border-slate-600/60 transition-colors"
                      placeholder="correo@empresa.com" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="telefono" className="text-xs font-medium text-slate-300">Teléfono</label>
                    <input id="telefono" name="telefono" type="tel" value={form.telefono} onChange={handleChange}
                      className="px-3 py-2.5 rounded-lg border border-slate-800/70 bg-slate-900/60 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-600/60 focus:border-slate-600/60 transition-colors"
                      placeholder="+33 06 13 59 25 10" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="tipo" className="text-xs font-medium text-slate-300">Tipo de proyecto</label>
                  <select id="tipo" name="tipo" value={form.tipo} onChange={handleChange}
                    className="px-3 py-2.5 rounded-lg border border-blue-500/20 bg-slate-900/80 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors cursor-pointer">
                    <option value="">Selecciona una opción</option>
                    {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="mensaje" className="text-xs font-medium text-slate-300">Mensaje *</label>
                  <textarea id="mensaje" name="mensaje" required rows={4} value={form.mensaje} onChange={handleChange}
                    className="px-3 py-2.5 rounded-lg border border-blue-500/20 bg-slate-900/80 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors resize-none"
                    placeholder="Cuéntanos qué necesitas lograr..." />
                </div>

                <button type="submit"
                  className="w-full py-3.5 rounded-xl bg-slate-700/80 border border-slate-600/50 text-white text-sm font-semibold hover:bg-slate-600/80 hover:border-slate-500/60 transition-all duration-200 cursor-pointer mt-2 backdrop-blur-sm">
                  Enviar solicitud
                </button>
              </form>
            </ShineBorder>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}
