"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  // Estado para controlar qual card está em destaque no mobile (começa no índice 0)
  const [activeIndex, setActiveIndex] = useState(0);

  // Estrutura com as larguras do desktop e identificadores
  const cards = [
    { id: 1, label: "1 (5 cols)", desktopSpan: "md:col-span-5" },
    { id: 2, label: "2 (4 cols)", desktopSpan: "md:col-span-4" },
    { id: 3, label: "3 (3 cols)", desktopSpan: "md:col-span-3" },
    { id: 4, label: "4 (4 cols)", desktopSpan: "md:col-span-4" },
    { id: 5, label: "5 (8 cols)", desktopSpan: "md:col-span-8" },
  ];

  return (
    <section className="py-16 bg-brand-light text-black">
      <article className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Portfolio</h2>

        {/* --- VERSÃO MOBILE (Visível apenas abaixo de md) --- */}
        <div className="md:hidden flex flex-col gap-4">
          
          {/* Card Principal em Destaque */}
          <div className="bento-card h-[320px] w-full relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full flex items-center justify-center"
              >
                {cards[activeIndex].label}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Linha de Mini Cards embaixo */}
          <div className="grid grid-cols-5 gap-2">
            {cards.map((card, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={card.id}
                  onClick={() => setActiveIndex(index)}
                  className={`h-16 rounded-2xl font-bold text-sm transition-all flex items-center justify-center ${
                    isActive
                      ? "bg-black text-white scale-105 shadow-md"
                      : "bg-white text-zinc-400 hover:bg-zinc-100"
                  }`}
                >
                  {card.id}
                </button>
              );
            })}
          </div>
        </div>

        {/* --- VERSÃO DESKTOP (Bento Grid original, oculto no mobile) --- */}
        <div className="hidden md:grid md:grid-cols-12 gap-4 md:auto-rows-[360px]">
          {cards.map((card) => (
            <div key={card.id} className={`bento-card ${card.desktopSpan}`}>
              {card.label}
            </div>
          ))}
        </div>

      </article>
    </section>
  );
}