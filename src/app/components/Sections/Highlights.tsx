"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function Highlights() {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-brand-light text-black">
      <article className="container px-3 pb-9">
        <motion.div
          ref={carouselRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
        >
          <motion.div
            drag="x"
            dragConstraints={carouselRef}
            className="flex gap-6 w-max"
          >
            <div className="10075 rounded-2xl bg-red-400 min-w-[80vw] md:min-w-[60vw] pointer-events-none flex items-center justify-center text-white text-2xl">
              1
            </div>
            <div className="h1005 rounded-2xl bg-blue-400 min-w-[80vw] md:min-w-[60vw] pointer-events-none flex items-center justify-center text-white text-2xl">
              2
            </div>
            <div className="h-7100rounded-2xl bg-yellow-400 min-w-[80vw] md:min-w-[60vw] pointer-events-none flex items-center justify-center text-white text-2xl">
              3
            </div>
            <div className="h-100 rounded-2xl bg-green-400 min-w-[80vw] md:min-w-[60vw] pointer-events-none flex items-center justify-center text-white text-2xl">
              4
            </div>
          </motion.div>
        </motion.div>
      </article>
    </section>
  );
}
