"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    particlesJS?: (id: string, config: object) => void;
    pJSDom?: Array<{ pJS: { fn: { vendors: { destroypJS: () => void } } } }>;
  }
}

const DESKTOP_CONFIG = {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 900 } },
    color: { value: ["#bfdbfe", "#dbeafe", "#93c5fd", "#64748b", "#94a3b8"] },
    shape: { type: "circle" },
    opacity: { value: 0.18, random: true, anim: { enable: true, speed: 0.4, opacity_min: 0.05, sync: false } },
    size: { value: 2.2, random: true, anim: { enable: false } },
    line_linked: {
      enable: true,
      distance: 145,
      color: "#3b82f6",
      opacity: 0.10,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.75,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 120, line_linked: { opacity: 0.22 } },
      push: { particles_nb: 2 },
    },
  },
  retina_detect: false,
};

const MOBILE_CONFIG = {
  particles: {
    number: { value: 45, density: { enable: true, value_area: 700 } },
    color: { value: ["#bfdbfe", "#dbeafe", "#93c5fd", "#64748b"] },
    shape: { type: "circle" },
    opacity: { value: 0.14, random: true, anim: { enable: false } },
    size: { value: 1.8, random: true, anim: { enable: false } },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#3b82f6",
      opacity: 0.08,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.35,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
      resize: true,
    },
  },
  retina_detect: false,
};

const REDUCED_MOTION_CONFIG = {
  particles: {
    number: { value: 30, density: { enable: true, value_area: 900 } },
    color: { value: ["#bfdbfe", "#64748b"] },
    shape: { type: "circle" },
    opacity: { value: 0.10, random: false, anim: { enable: false } },
    size: { value: 1.5, random: false, anim: { enable: false } },
    line_linked: { enable: true, distance: 120, color: "#3b82f6", opacity: 0.06, width: 1 },
    move: { enable: false },
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: false }, onclick: { enable: false }, resize: true },
  },
  retina_detect: false,
};

const CONTAINER_ID = "particles-hero-bg";

export function ParticlesHeroBg() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    const isMobile = window.innerWidth < 768;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const config = reducedMotion ? REDUCED_MOTION_CONFIG : isMobile ? MOBILE_CONFIG : DESKTOP_CONFIG;

    const init = () => {
      if (window.particlesJS) {
        window.particlesJS(CONTAINER_ID, config);
        initialized.current = true;
      }
    };

    if (window.particlesJS) {
      init();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;
    script.onload = init;
    document.head.appendChild(script);

    return () => {
      initialized.current = false;
      try {
        if (window.pJSDom && window.pJSDom.length > 0) {
          window.pJSDom[window.pJSDom.length - 1].pJS.fn.vendors.destroypJS();
          window.pJSDom.pop();
        }
      } catch {}
    };
  }, []);

  return (
    <div
      id={CONTAINER_ID}
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
