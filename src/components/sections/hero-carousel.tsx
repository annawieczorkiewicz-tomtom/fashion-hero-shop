"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { heroSlides } from "@/data/products";
import { PauseIcon, PlayIcon } from "@/components/icons";

const slideBgColors = ["bg-cream-dark", "bg-cream", "bg-cream-light"];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [playing, next]);

  const slide = heroSlides[current];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Slide content */}
      <div
        className={`${slideBgColors[current % slideBgColors.length]} transition-colors duration-700 flex flex-col items-center justify-center text-center px-6 py-24 md:py-36 lg:py-44`}
      >
        <p className="text-label mb-3">{slide.subtitle}</p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-charcoal mb-8 max-w-2xl">
          {slide.title}
        </h1>
        <div className="flex gap-3">
          {slide.ctaLinks.map((link) => (
            <Link key={link.href} href={link.href} className="btn-cta">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {/* Dots */}
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? "bg-charcoal" : "bg-charcoal/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}

        {/* Pause / Play */}
        <button
          onClick={() => setPlaying((p) => !p)}
          className="ml-2 p-1 text-charcoal/60 hover:text-charcoal transition-colors"
          aria-label={playing ? "Pause carousel" : "Play carousel"}
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
    </section>
  );
}
