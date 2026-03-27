"use client";

import { motion } from "framer-motion";
import NeonButton from "../ui/NeonButton";
import ScrollReveal from "../ui/ScrollReveal";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-neon-pink/5 to-bg-primary" />

      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold tracking-wider text-text-primary sm:text-4xl">
            UNE ENVIE DE{" "}
            <span
              className="text-neon-pink"
              style={{ textShadow: "0 0 20px rgba(255, 45, 120, 0.5)" }}
            >
              SNACK
            </span>{" "}
            ?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-4 text-lg text-text-secondary">
            Commandez en ligne et venez récupérer votre commande en quelques minutes.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <NeonButton href="/commander" variant="pink" size="lg">
              COMMANDER MAINTENANT
            </NeonButton>
            <NeonButton href="/menu" variant="cyan" size="lg">
              VOIR LE MENU
            </NeonButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
