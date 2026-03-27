"use client";

import ScrollReveal from "../ui/ScrollReveal";
import NeonBorder from "../ui/NeonBorder";

const testimonials = [
  {
    name: "Karim L.",
    text: "Meilleurs tacos de la région ! Le Cordon Bleu est incroyable. Je reviens chaque semaine.",
    rating: 5,
  },
  {
    name: "Julie M.",
    text: "Le burger Le Bernimois est une tuerie. La sauce maison fait toute la différence.",
    rating: 5,
  },
  {
    name: "Amine R.",
    text: "Service rapide, produits frais, et le Click & Collect est super pratique. Top !",
    rating: 5,
  },
];

export default function TestimonialsSection() {
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
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.15}>
              <NeonBorder color="cyan">
                <div className="p-6">
                  {/* Stars */}
                  <div className="flex gap-1 text-neon-yellow">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j}>★</span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm italic leading-relaxed text-text-secondary">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="mt-4 font-display text-xs font-semibold uppercase tracking-wider text-neon-pink">
                    — {t.name}
                  </p>
                </div>
              </NeonBorder>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
