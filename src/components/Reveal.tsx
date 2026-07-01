"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "none";

const directionMap: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 32 },
  left: { x: -32 },
  right: { x: 32 },
  none: {},
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
  once = true,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();
  const offset = directionMap[direction];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...(shouldReduceMotion ? {} : offset),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.25 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
