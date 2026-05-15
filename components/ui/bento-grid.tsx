import React from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  className?: string;
  children: React.ReactNode;
}

interface BentoGridItemProps {
  className?: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  tags?: string[];
  children?: React.ReactNode;
}

export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto", className)}>
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  icon,
  tags,
  children,
}: BentoGridItemProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl p-6 cursor-default",
        "border border-blue-500/15 bg-slate-950/55 backdrop-blur-xl",
        "shadow-[0_24px_80px_rgba(15,23,42,0.35)]",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:border-blue-400/30 hover:bg-slate-900/65",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        {icon && (
          <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400">
            {icon}
          </div>
        )}
        {title && (
          <h3 className="font-semibold text-white mb-2 text-sm md:text-base">{title}</h3>
        )}
        {description && (
          <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        )}
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-300 font-medium border border-blue-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
