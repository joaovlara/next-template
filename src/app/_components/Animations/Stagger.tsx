"use client";

import React from "react";
import { motion, HTMLMotionProps, Variants } from "framer-motion";

// Variantes do Container (controla o tempo entre os itens)
const containerVariants = (
  staggerDelay: number,
  delayChildren: number,
): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: delayChildren,
    },
  },
});

// Variantes do Item (animação individual de cada elemento)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerDelay?: number; // Intervalo em segundos entre a entrada de cada item (padrão: 0.15s)
  delayChildren?: number; // Espera em segundos antes de iniciar a sequência (padrão: 0s)
  once?: boolean; // Anima apenas uma vez ao scrollar
  viewportAmount?: number; // Quanto da área precisa estar visível para disparar (0 a 1)
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.2,
  delayChildren = 0,
  once = true,
  viewportAmount = 0.2,
  className = "",
  ...props
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={containerVariants(staggerDelay, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: viewportAmount }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export function StaggerItem({
  children,
  className = "",
  ...props
}: StaggerItemProps) {
  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}
