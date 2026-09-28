"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface FadeUpProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;      // Atraso em segundos
  duration?: number;   // Duração da animação
  yOffset?: number;    // Distância inicial na vertical (padrão: 50px para baixo)
  once?: boolean;      // Se deve animar apenas uma vez ao entrar na tela
  className?: string;
}

export function FadeUp({
  children,
  delay = 0.3,
  duration = 0.6,
  yOffset = 50,
  once = true,
  className = "",
  ...props
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}