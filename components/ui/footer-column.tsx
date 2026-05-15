import React from "react";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
  className?: string;
}

export function FooterColumn({ title, links, className }: FooterColumnProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </h4>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
