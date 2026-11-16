"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import CardServices1 from "../Cards/CardServices1";
import CardServices2 from "../Cards/CardServices2";

export default function Services() {
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
            <CardServices1 />
            <CardServices2 />
          </motion.div>
        </motion.div>
      </article>
    </section>
  );
}
