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
            className="flex gap-3 w-max"
          >
            <div className="card w-[70vw] h-125 bg-brand-teal">1</div>
            <div className="card w-[70vw] h-125 bg-brand-orange">2</div>
          </motion.div>
        </motion.div>
      </article>
    </section>
  );
}
