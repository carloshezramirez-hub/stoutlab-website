"use client"

import type React from "react"
import { useState, useRef } from "react"
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion"
import { cn } from "@/lib/utils"

interface LocationMapProps {
  location?: string
  coordinates?: string
  className?: string
}

// Stylized Puebla city-grid SVG map — streets, blocks, centro histórico
function PueblaMapSVG() {
  return (
    <svg
      viewBox="0 0 400 220"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Base background */}
      <rect width="400" height="220" fill="rgba(2,8,23,0.85)" />

      {/* City blocks — outer grid */}
      {/* Horizontal streets */}
      {[28, 56, 84, 112, 140, 168, 196].map((y) => (
        <line key={`h${y}`} x1="0" y1={y} x2="400" y2={y} stroke="rgba(96,165,250,0.14)" strokeWidth="1" />
      ))}
      {/* Vertical streets */}
      {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x) => (
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="220" stroke="rgba(96,165,250,0.14)" strokeWidth="1" />
      ))}

      {/* Major boulevards — slightly brighter */}
      <line x1="0" y1="110" x2="400" y2="110" stroke="rgba(96,165,250,0.28)" strokeWidth="2" />
      <line x1="200" y1="0" x2="200" y2="220" stroke="rgba(96,165,250,0.28)" strokeWidth="2" />

      {/* Centro Histórico block — highlighted district */}
      <rect x="148" y="70" width="104" height="80" fill="rgba(59,130,246,0.10)" stroke="rgba(96,165,250,0.35)" strokeWidth="1.5" rx="2" />

      {/* Inner blocks of centro */}
      <rect x="155" y="77" width="40" height="30" fill="rgba(59,130,246,0.08)" stroke="rgba(96,165,250,0.18)" strokeWidth="0.8" rx="1" />
      <rect x="205" y="77" width="40" height="30" fill="rgba(59,130,246,0.08)" stroke="rgba(96,165,250,0.18)" strokeWidth="0.8" rx="1" />
      <rect x="155" y="117" width="40" height="26" fill="rgba(59,130,246,0.08)" stroke="rgba(96,165,250,0.18)" strokeWidth="0.8" rx="1" />
      <rect x="205" y="117" width="40" height="26" fill="rgba(59,130,246,0.08)" stroke="rgba(96,165,250,0.18)" strokeWidth="0.8" rx="1" />

      {/* Surrounding city blocks */}
      {[
        [40, 56, 72, 48], [120, 56, 72, 48], [280, 56, 72, 48], [328, 56, 56, 48],
        [40, 112, 72, 48], [120, 112, 56, 48], [284, 112, 72, 48],
        [40, 168, 72, 44], [120, 168, 56, 44], [280, 168, 72, 44],
      ].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} fill="rgba(30,41,59,0.45)" stroke="rgba(96,165,250,0.10)" strokeWidth="0.8" rx="1" />
      ))}

      {/* Diagonal accent road (Blvd Atlixco area) */}
      <line x1="0" y1="180" x2="180" y2="60" stroke="rgba(96,165,250,0.18)" strokeWidth="1.5" />

      {/* Radial glow at Puebla center */}
      <radialGradient id="pueblaGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(59,130,246,0.35)" />
        <stop offset="100%" stopColor="rgba(59,130,246,0)" />
      </radialGradient>
      <ellipse cx="200" cy="110" rx="60" ry="40" fill="url(#pueblaGlow)" />

      {/* Bottom vignette */}
      <linearGradient id="vignette" x1="0" y1="0" x2="0" y2="1">
        <stop offset="60%" stopColor="transparent" />
        <stop offset="100%" stopColor="rgba(2,8,23,0.9)" />
      </linearGradient>
      <rect width="400" height="220" fill="url(#vignette)" />

      {/* Location pin at Puebla center (slightly offset to Col. Dos de Abril — SW of centro) */}
      <g transform="translate(185, 120)">
        {/* Pin shadow / pulse */}
        <circle cx="0" cy="0" r="16" fill="rgba(59,130,246,0.15)" />
        <circle cx="0" cy="0" r="10" fill="rgba(59,130,246,0.25)" />
        {/* Pin body */}
        <circle cx="0" cy="-3" r="6" fill="#3b82f6" />
        <circle cx="0" cy="-3" r="2.5" fill="white" />
        {/* Pin tail */}
        <polygon points="-3,1 3,1 0,9" fill="#3b82f6" />
      </g>

      {/* "Puebla" label */}
      <text x="210" y="117" fill="rgba(255,255,255,0.85)" fontSize="9" fontFamily="monospace" fontWeight="600" letterSpacing="0.12em">PUEBLA</text>
      <text x="210" y="128" fill="rgba(96,165,250,0.7)" fontSize="7" fontFamily="monospace" letterSpacing="0.08em">19.04°N  98.20°W</text>

      {/* Scale bar */}
      <g transform="translate(20, 200)">
        <line x1="0" y1="0" x2="40" y2="0" stroke="rgba(96,165,250,0.5)" strokeWidth="1.5" />
        <line x1="0" y1="-3" x2="0" y2="3" stroke="rgba(96,165,250,0.5)" strokeWidth="1.5" />
        <line x1="40" y1="-3" x2="40" y2="3" stroke="rgba(96,165,250,0.5)" strokeWidth="1.5" />
        <text x="20" y="-6" fill="rgba(148,163,184,0.7)" fontSize="6" textAnchor="middle" fontFamily="monospace">2 km</text>
      </g>

      {/* Compass */}
      <g transform="translate(372, 20)">
        <circle cx="0" cy="0" r="10" fill="rgba(15,23,42,0.8)" stroke="rgba(96,165,250,0.3)" strokeWidth="1" />
        <text x="0" y="4" fill="rgba(96,165,250,0.9)" fontSize="8" textAnchor="middle" fontFamily="monospace" fontWeight="700">N</text>
      </g>
    </svg>
  )
}

export function LocationMap({
  location = "2614 Maximino A. Camacho, Col. Dos de Abril, Puebla, Pue. 72340",
  coordinates = "Puebla, México · 19.04°N 98.20°W",
  className,
}: LocationMapProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-50, 50], [5, -5])
  const rotateY = useTransform(mouseX, [-50, 50], [-5, 5])

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || window.innerWidth < 768) return
    const rect = containerRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - (rect.left + rect.width / 2))
    mouseY.set(e.clientY - (rect.top + rect.height / 2))
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative w-full cursor-pointer select-none", className)}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsExpanded((v) => !v)}
    >
      <motion.div
        className="relative w-full overflow-hidden rounded-2xl border border-blue-500/20 bg-slate-950/55 backdrop-blur-xl"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{ height: isExpanded ? 290 : 148 }}
        transition={{ type: "spring", stiffness: 360, damping: 32 }}
      >
        {/* Collapsed: subtle gradient hint */}
        {!isExpanded && (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_50%)] pointer-events-none" />
        )}

        {/* Expanded: full Puebla map */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <PueblaMapSVG />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content overlay — always visible */}
        <div className="relative z-10 flex h-full flex-col justify-between p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400/80">
                Ubicación
              </p>
              <h3 className="mt-1.5 max-w-[18rem] text-sm font-medium leading-snug text-white/90 sm:text-sm">
                {location}
              </h3>
            </div>
            <div className="shrink-0 rounded-full border border-blue-500/25 bg-blue-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-400">
              Puebla
            </div>
          </div>

          <div className="mt-auto">
            <AnimatePresence>
              {isExpanded && (
                <motion.p
                  className="mb-2 font-mono text-[10px] text-slate-500"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  {coordinates}
                </motion.p>
              )}
            </AnimatePresence>
            <motion.div
              className="h-px bg-gradient-to-r from-blue-500/60 via-blue-400/30 to-transparent"
              animate={{ scaleX: isHovered || isExpanded ? 1 : 0.3, originX: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>

      <motion.p
        className="mt-1.5 text-center text-[10px] uppercase tracking-[0.2em] text-slate-600"
        animate={{ opacity: isHovered && !isExpanded ? 0.9 : 0.4 }}
        transition={{ duration: 0.2 }}
      >
        {isExpanded ? "Toca para cerrar" : "Toca para ver mapa"}
      </motion.p>
    </motion.div>
  )
}
