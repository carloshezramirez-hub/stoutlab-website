"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Inteligencia", href: "#inteligencia" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Tecnología", href: "#tecnologia" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-slate-950/80 backdrop-blur-xl border-b border-border/60 shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" aria-label="STOUTLAB — inicio">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/stoutlab-logo.png"
                alt="STOUTLAB"
                className="h-10 w-auto object-contain brightness-0 invert sm:h-12"
              />
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-slate-700/70 border border-slate-600/40 text-white text-sm font-medium hover:bg-slate-600/70 transition-colors duration-200 cursor-pointer backdrop-blur-sm"
              >
                Agendar diagnóstico
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors cursor-pointer"
              onClick={() => setOpen(!open)}
              aria-label="Menú"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-xl flex flex-col pt-20 px-6">
          <nav className="flex flex-col gap-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="text-2xl font-semibold text-white hover:text-primary transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contacto"
            onClick={handleLinkClick}
            className="mt-auto mb-12 inline-flex items-center justify-center px-6 py-4 rounded-xl bg-primary text-primary-foreground text-lg font-medium hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Agendar diagnóstico
          </a>
        </div>
      )}
    </>
  );
}
