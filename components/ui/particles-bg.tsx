"use client";

import { useEffect, useCallback } from "react";

export default function ParticlesBackground() {
  const initParticles = useCallback(() => {
    const oldCanvas = document.querySelector("#particles-global canvas");
    if (oldCanvas) oldCanvas.remove();

    // @ts-ignore
    if (window.pJSDom?.length > 0) {
      // @ts-ignore
      window.pJSDom.forEach((p) => p.pJS.fn.vendors.destroypJS());
      // @ts-ignore
      window.pJSDom = [];
    }

    const isMobile = window.innerWidth < 768;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // @ts-ignore
    window.particlesJS("particles-global", {
      particles: {
        number: {
          value: reducedMotion ? 40 : isMobile ? 140 : 100,
          density: { enable: true, value_area: 800 },
        },
        color: { value: ["#ffffff", "#e2e8f0", "#cbd5e1", "#94a3b8"] },
        shape: { type: "circle", stroke: { width: 0, color: "#000" } },
        opacity: {
          value: 0.65,
          random: true,
          anim: { enable: !reducedMotion, speed: 0.8, opacity_min: 0.2 },
        },
        size: {
          value: 2.5,
          random: true,
          anim: { enable: !reducedMotion, speed: 2, size_min: 0.8 },
        },
        line_linked: {
          enable: true,
          distance: isMobile ? 120 : 170,
          color: "#e2e8f0",
          opacity: 0.6,
          width: 1.4,
        },
        move: {
          enable: !reducedMotion,
          speed: isMobile ? 0.6 : 1.4,
          random: true,
          out_mode: "bounce",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 240, line_linked: { opacity: 1 } },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: false,
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => initParticles();

    return () => {
      try { document.body.removeChild(script); } catch {}
      // @ts-ignore
      if (window.pJSDom?.length > 0) {
        // @ts-ignore
        window.pJSDom.forEach((p) => p.pJS.fn.vendors.destroypJS());
        // @ts-ignore
        window.pJSDom = [];
      }
    };
  }, [initParticles]);

  return (
    <div
      id="particles-global"
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
