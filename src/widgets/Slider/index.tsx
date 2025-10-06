"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, animate, useMotionValue } from "framer-motion";

import { cn } from "@/shared";
import { slide1, slide2, slide3, slide4, slide5 } from "@/assets";

const slides = [slide1, slide2, slide3, slide4, slide5];

const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

export const Slider = ({ duration = 3000 }) => {
  const [index, setIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const PEEK = 80;

  useEffect(() => {
    const calc = () => {
      if (!containerRef.current) return;

      const el = containerRef.current;
      const width = el.clientWidth - PEEK * 2;

      setSlideWidth(width > 0 ? width : 0);
    };

    calc();
    
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  useEffect(() => {
    if (slideWidth <= 0) return;

    const targetX = -index * slideWidth;
    animate(x, targetX, {
      damping: 30,
      type: "spring",
      stiffness: 300,
    });

    if (index === extendedSlides.length - 1) {
      setTimeout(() => setIndex(1), 400);
    } else if (index === 0) {
      setTimeout(() => setIndex(slides.length), 400);
    }
  }, [index, x, slideWidth]);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setIndex((current) => (current + 1) % extendedSlides.length);
      }, duration);

      return () => clearInterval(interval);
    }
  }, [isHovered, duration]);

  return (
    <div className="w-full py-10">
      <div className="flex flex-col gap-3">
        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative overflow-hidden rounded-lg"
          style={{ paddingLeft: PEEK, paddingRight: PEEK }}
        >
          <motion.div
            className="flex"
            style={{ x, width: slideWidth * extendedSlides.length }}
          >
            {extendedSlides.map((item, idx) => (
              <div
                key={idx}
                style={{ width: slideWidth }}
                onClick={() => idx !== index && setIndex(idx)}
                className={cn(
                  "relative h-[600px] flex-shrink-0",
                  idx === index ? "cursor-default" : "cursor-pointer"
                )}
              >
                <Image
                  fill
                  src={item.src}
                  draggable={false}
                  alt={`Slide ${idx + 1}`}
                  sizes="(min-width: 1024px) 80vw, 90vw"
                  className={cn(
                    "rounded-lg object-cover transition-all duration-700 select-none",
                    idx === index
                      ? "scale-100 opacity-100 grayscale-0"
                      : "scale-95 opacity-80 grayscale"
                  )}
                />
              </div>
            ))}
          </motion.div>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i + 1)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i + 1 === index ? "w-8 bg-white" : "w-2 bg-white/50"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
