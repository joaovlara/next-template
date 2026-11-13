"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Card from "../Cards/Card";

export default function Services() {
  const mockCards = [
    {
      id: 1,
      variant: "yellow" as const,
      title: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    },
    {
      id: 2,
      variant: "teal" as const,
      title: "Dolor Sit",
      text: "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    {
      id: 3,
      variant: "orange" as const,
      title: "Amet Consectetur",
      text: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.",
    },
  ];

  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-9 text-brand-light">
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
        <div className="relative z-10 max-w-5xl mx-auto px-4 -mt-50 md:-mt-50">
          <div ref={constraintsRef} className="overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={constraintsRef}
              className="flex w-max md:w-full md:grid md:grid-cols-3 gap-6 md:gap-8 cursor-grab active:cursor-grabbing md:cursor-auto"
            >
              {mockCards.map((card) => (
                <Card
                  key={card.id}
                  variant={card.variant}
                  className="flex flex-col justify-between h-75 w-[85vw] md:w-auto shrink-0 pointer-events-none"
                >
                  <div>Card</div>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </article>
    </section>
  );
}
