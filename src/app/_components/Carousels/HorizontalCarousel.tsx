"use client";

import { motion, useAnimationControls, useMotionValue, useMotionValueEvent } from "motion/react";
import { Children, useState } from "react";
import type { ReactNode } from "react";
import { useRef } from "react";

interface HorizontalCarouselProps {
  children: ReactNode;
}

export default function HorizontalCarousel({
  children,
}: HorizontalCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackX = useMotionValue(0);
  const controls = useAnimationControls();
  const pageCount = Children.count(children);
  const [activePage, setActivePage] = useState(0);

  useMotionValueEvent(trackX, "change", (latest) => {
    const carousel = carouselRef.current;
    const track = carousel?.firstElementChild;
    if (!carousel || !track || pageCount < 2) return;

    const maxOffset = track.scrollWidth - carousel.clientWidth;
    if (maxOffset <= 0) return;

    const progress = Math.min(1, Math.max(0, -latest / maxOffset));
    setActivePage(Math.round(progress * (pageCount - 1)));
  });

  function navigateToPage(page: number) {
    const carousel = carouselRef.current;
    const track = carousel?.firstElementChild;
    if (!carousel || !track) return;

    const maxOffset = Math.max(0, track.scrollWidth - carousel.clientWidth);
    controls.start({
      x: -(maxOffset * page) / Math.max(1, pageCount - 1),
    });
  }

  return (
    <div className="services-carousel-wrapper">
      <div ref={carouselRef} className="services-carousel">
        <motion.div
          className="services-carousel-track"
          drag="x"
          dragConstraints={carouselRef}
          dragElastic={0.12}
          dragMomentum
          style={{ x: trackX }}
          animate={controls}
          whileTap={{ cursor: "grabbing" }}
        >
          {children}
        </motion.div>
      </div>
      <div className="services-carousel-dots" aria-label="Navegação dos serviços">
        {Array.from({ length: pageCount }, (_, page) => (
          <button
            key={page}
            type="button"
            className={page === activePage ? "is-active" : ""}
            aria-label={`Ir para o serviço ${page + 1}`}
            aria-current={page === activePage ? "step" : undefined}
            onClick={() => navigateToPage(page)}
          />
        ))}
      </div>
    </div>
  );
}
