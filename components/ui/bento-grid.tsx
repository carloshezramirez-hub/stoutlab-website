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
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto",
        className
      )}
    >
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
        "group relative rounded-2xl border border-border bg-card p-6",
        "hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5",
        "transition-all duration-300 cursor-pointer overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
      {icon && (
        <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      )}
      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {children}
    </div>
  );
}
