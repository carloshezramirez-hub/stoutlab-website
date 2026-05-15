"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGroupProps {
  children: React.ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: "fade" | "slide-up" | "scale" | "blur-slide";
}

const presets = {
  "fade": {
    container: {
      hidden: {},
      visible: { transition: { staggerChildren: 0.1 } },
    },
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.5 } },
    },
  },
  "slide-up": {
    container: {
      hidden: {},
      visible: { transition: { staggerChildren: 0.12 } },
    },
    item: {
      hidden: { opacity: 0, y: 24 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
    },
  },
  "scale": {
    container: {
      hidden: {},
      visible: { transition: { staggerChildren: 0.1 } },
    },
    item: {
      hidden: { opacity: 0, scale: 0.92 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    },
  },
  "blur-slide": {
    container: {
      hidden: {},
      visible: { transition: { staggerChildren: 0.1 } },
    },
    item: {
      hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
      },
    },
  },
};

export function AnimatedGroup({
  children,
  className,
  variants,
  preset = "slide-up",
}: AnimatedGroupProps) {
  const selectedPreset = presets[preset];
  const containerVariants = variants?.container ?? selectedPreset.container;
  const itemVariants = variants?.item ?? selectedPreset.item;

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
