"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CardStackItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

interface CardStackProps {
  items: CardStackItem[];
  className?: string;
}

export function CardStack({ items, className }: CardStackProps) {
  const [cards, setCards] = useState(items);

  const handleClick = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const first = newCards.shift()!;
      newCards.push(first);
      return newCards;
    });
  };

  return (
    <div
      className={cn("relative h-80 w-full cursor-pointer", className)}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      aria-label="Click to cycle through images"
    >
      {cards.slice(0, 4).map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute inset-0 rounded-2xl overflow-hidden border border-border shadow-lg"
          style={{ zIndex: cards.length - index }}
          animate={{
            top: `${index * 12}px`,
            left: `${index * 8}px`,
            right: `${-index * 8}px`,
            scale: 1 - index * 0.04,
            opacity: 1 - index * 0.15,
          }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative w-full h-full">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-xs uppercase tracking-widest text-blue-300 mb-1 font-medium">
                {card.subtitle}
              </p>
              <h3 className="font-semibold text-lg leading-tight">{card.title}</h3>
            </div>
          </div>
        </motion.div>
      ))}
      <div className="absolute -bottom-8 left-0 right-0 text-center">
        <p className="text-xs text-muted-foreground">Clic para explorar</p>
      </div>
    </div>
  );
}
