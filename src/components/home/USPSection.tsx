"use client";

import { ChefHat, Leaf, Clock, BadgeEuro } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import NeonBorder from "../ui/NeonBorder";

const usps = [
  {
    icon: ChefHat,
    title: "Fait Maison",
    description: "Chaque burger, tacos et kebab est pr\u00e9par\u00e9 sur place avec des recettes maison",
    color: "pink" as const,
    neonColor: "text-neon-pink",
  },
  {
    icon: Leaf,
    title: "Produits Frais",
    description: "Viandes fra\u00eeches, l\u00e9gumes du jour, sauces maison. Z\u00e9ro compromis sur la qualit\u00e9",
    color: "cyan" as const,
    neonColor: "text-neon-cyan",
  },
  {
    icon: Clock,
    title: "Click & Collect",
    description: "Commandez en ligne, on pr\u00e9pare. Passez r\u00e9cup\u00e9rer en quelques minutes",
    color: "yellow" as const,
    neonColor: "text-neon-yellow",
  },
  {
    icon: BadgeEuro,
    title: "Prix Imbattables",
    description: "Des formules menu compl\u00e8tes d\u00e8s 9,50\u20AC. G\u00e9n\u00e9reux et accessible",
    color: "purple" as const,
    neonColor: "text-neon-purple",
  },
];

export default function USPSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <h2
            className="text-center font-display text-3xl font-bold tracking-wider text-neon-pink sm:text-4xl"
            style={{ textShadow: "0 0 15px rgba(255, 45, 120, 0.3)" }}
          >
            POURQUOI LE BERNIMOIS ?
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((usp, i) => (
            <ScrollReveal key={usp.title} delay={i * 0.1}>
              <NeonBorder color={usp.color}>
                <div className="p-6 text-center">
                  <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-bg-secondary ${usp.neonColor}`}>
                    <usp.icon size={24} />
                  </div>
                  <h3 className="mt-4 font-display text-sm font-bold uppercase tracking-wider text-text-primary">
                    {usp.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                    {usp.description}
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
