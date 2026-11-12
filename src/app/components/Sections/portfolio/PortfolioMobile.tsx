"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PortfolioItem } from "@/src/app/types/types";
import { PortfolioCard } from "../../Cards/PortfolioCard";

interface PortfolioMobileProps {
  items: PortfolioItem[];
}

export function PortfolioMobile({ items }: PortfolioMobileProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="md:hidden flex flex-col gap-4">
      {/* Card Principal em Destaque */}
      <div className="h-[320px] w-full relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full"
          >
            <PortfolioCard
              item={items[activeIndex]}
              className="w-full h-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mini Cards embaixo */}
      <div className="grid grid-cols-5 gap-2">
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`h-16 rounded-2xl font-bold text-sm transition-all flex items-center justify-center ${
                isActive
                  ? "bg-black text-white scale-105 shadow-md"
                  : "bg-white text-zinc-400 hover:bg-zinc-100"
              }`}
            >
              {item.id}
            </button>
          );
        })}
      </div>
    </div>
  );
}
