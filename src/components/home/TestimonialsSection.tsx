"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "../ui/ScrollReveal";
import NeonBorder from "../ui/NeonBorder";

const testimonials = [
  {
    name: "Karim L.",
    text: "Meilleurs tacos de la r\u00e9gion ! Le Cordon Bleu est incroyable. Je reviens chaque semaine.",
    rating: 5,
  },
  {
    name: "Julie M.",
    text: "Le burger Le Bernimois est une tuerie. La sauce maison fait toute la diff\u00e9rence.",
    rating: 5,
  },
  {
    name: "Amine R.",
    text: "Service rapide, produits frais, et le Click & Collect est super pratique. Top !",
    rating: 5,
  },
  {
    name: "Sarah T.",
    text: "Le Double Smash est addictif. Le cheese fondu, les oignons, la sauce... perfection.",
    rating: 5,
  },
  {
    name: "Mehdi B.",
    text: "Kebab XL g\u00e9n\u00e9reux comme nulle part ailleurs. Le rapport qualit\u00e9/prix est imbattable.",
    rating: 5,
  },
  {
    name: "Laura P.",
    text: "Les milkshakes faits maison sont d\u00e9licieux. Le Tiramisu aussi, une tuerie !",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let scrollPos = 0;

    const scroll = () => {
      if (!isPaused && container) {
        scrollPos += 0.5;
        if (scrollPos >= container.scrollWidth / 2) {
          scrollPos = 0;
        }
        container.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Duplicate for infinite scroll
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <h2
            className="text-center font-display text-3xl font-bold tracking-wider text-neon-yellow sm:text-4xl"
            style={{ textShadow: "0 0 15px rgba(255, 229, 0, 0.3)" }}
          >
            AVIS CLIENTS
          </h2>
          <p className="mt-2 text-center text-sm text-text-secondary">
            4.8/5 sur Google \u2014 127+ avis
          </p>
        </ScrollReveal>

        <div
          ref={scrollRef}
          className="mt-12 flex gap-4 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {allTestimonials.map((t, i) => (
            <div key={`${t.name}-${i}`} className="w-[300px] shrink-0 sm:w-[350px]">
              <NeonBorder color="cyan">
                <div className="p-6">
                  {/* Stars */}
                  <div className="flex gap-1 text-neon-yellow">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j}>\u2605</span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm italic leading-relaxed text-text-secondary">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="mt-4 font-display text-xs font-semibold uppercase tracking-wider text-neon-pink">
                    \u2014 {t.name}
                  </p>
                </div>
              </NeonBorder>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
