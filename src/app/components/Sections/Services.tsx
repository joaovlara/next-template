"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  const emptyCards = [1, 2, 3];
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-9 bg-brand-light text-black">
      <article className="container mx-auto px-4 mb-8">
        <h2 className="text-4xl md:text-6xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          remim.
        </h2>
      </article>

      <article className="container mx-auto px-4">
        <div className="relative w-full h-100 md:h-125 card overflow-hidden">
          <Image
            src="/images/office-workplace-with-laptop-free-photo.jpg"
            alt="Workplace"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 -mt-50 md:-mt-32">
          <div ref={constraintsRef} className="overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={constraintsRef}
              className="flex w-max md:w-full md:grid md:grid-cols-3 gap-6 md:gap-8 cursor-grab active:cursor-grabbing md:cursor-auto"
            >
              {emptyCards.map((_, index) => (
                <div
                  key={index}
                  className="bg-white card h-75 w-[85vw] md:w-auto shrink-0 pointer-events-none shadow-lg"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </article>
    </section>
  );
}
