"use client";

import ScrollReveal from "../ui/ScrollReveal";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-neon-purple/5 blur-[100px]" />

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <ScrollReveal>
          <h2
            className="font-display text-3xl font-bold tracking-wider text-neon-pink sm:text-4xl"
            style={{ textShadow: "0 0 15px rgba(255, 45, 120, 0.3)" }}
          >
            NOTRE HISTOIRE
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            Né au coeur de <span className="text-neon-cyan">Bernis</span>, Le Bernimois
            est bien plus qu&apos;un snack. C&apos;est un lieu de vie où se mêlent les saveurs
            généreuses de la street food et l&apos;énergie d&apos;un quartier qui vit.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            Nos <span className="text-neon-yellow">burgers</span> sont faits maison,
            nos <span className="text-neon-pink">tacos</span> sont généreux,
            et nos <span className="text-neon-purple">kebabs</span> sont grillés à la perfection.
            Chaque commande est préparée avec passion.
          </p>
        </ScrollReveal>

        {/* Decorative neon divider */}
        <ScrollReveal delay={0.4}>
          <div className="mx-auto mt-10 h-[1px] w-48 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-purple" />
        </ScrollReveal>
      </div>
    </section>
  );
}
