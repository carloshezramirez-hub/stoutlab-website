"use client"

import type React from "react"
import { cn } from "@/lib/utils"

type TColorProp = string | string[]

interface ShineBorderProps {
  borderRadius?: number
  borderWidth?: number
  duration?: number
  color?: TColorProp
  className?: string
  children: React.ReactNode
}

export function ShineBorder({
  borderRadius = 16,
  borderWidth = 1,
  duration = 14,
  color = ["#3b82f6", "#60a5fa", "#1d4ed8"],
  className,
  children,
}: ShineBorderProps) {
  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
        } as React.CSSProperties
      }
      className={cn(
        "relative overflow-hidden rounded-[--border-radius] bg-slate-900/20 p-[1px] text-slate-100 backdrop-blur-xl",
        className,
      )}
    >
      <div
        style={
          {
            "--border-width": `${borderWidth}px`,
            "--border-radius": `${borderRadius}px`,
            "--duration": `${duration}s`,
            "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            "--background-radial-gradient": `radial-gradient(transparent, transparent, ${
              color instanceof Array ? color.join(",") : color
            }, transparent, transparent)`,
          } as React.CSSProperties
        }
        className='pointer-events-none absolute inset-0 before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-shine'
      />
      <div className="relative z-10 rounded-[calc(var(--border-radius)-1px)] border border-white/8 bg-slate-950/60 backdrop-blur-xl">
        {children}
      </div>
    </div>
  )
}
