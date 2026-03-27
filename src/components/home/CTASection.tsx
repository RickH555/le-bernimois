"use client";

import Image from "next/image";
import NeonButton from "../ui/NeonButton";
import ScrollReveal from "../ui/ScrollReveal";

export default function CTASection() {
  return (
    <>
      {/* CTA Image Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/menu/burger.jpg"
            alt="Le menu complet"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary/80 to-bg-primary" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold tracking-wider text-text-primary sm:text-4xl">
              LE MENU COMPLET,{" "}
              <span
                className="text-neon-pink"
                style={{ textShadow: "0 0 20px rgba(255, 45, 120, 0.5)" }}
              >
                Z&Eacute;RO COMPROMIS
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-4 text-lg text-text-secondary">
              Des burgers artisanaux, des tacos g&eacute;n&eacute;reux, des kebabs grill&eacute;s minute.
              Chaque produit est pr&eacute;par&eacute; avec des ingr&eacute;dients frais, sans compromis.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-8">
              <NeonButton href="/menu" variant="cyan" size="lg">
                D&Eacute;COUVRIR LE MENU
              </NeonButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-neon-pink/5 to-bg-primary" />

        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <ScrollReveal>
            <h2
              className="font-display text-3xl font-bold tracking-wider text-neon-cyan sm:text-4xl"
              style={{ textShadow: "0 0 20px rgba(0, 240, 255, 0.4)" }}
            >
              PR&Ecirc;T &Agrave; COMMANDER ?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-4 text-lg text-text-secondary">
              Consultez le menu, personnalisez votre commande et venez r&eacute;cup&eacute;rer en quelques minutes.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <NeonButton href="/menu" variant="pink" size="lg">
                VOIR LE MENU
              </NeonButton>
              <NeonButton href="/contact" variant="cyan" size="lg">
                NOUS CONTACTER
              </NeonButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
