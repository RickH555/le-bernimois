"use client";

import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";
import NeonButton from "../ui/NeonButton";
import NeonBorder from "../ui/NeonBorder";

const bestsellers = [
  {
    name: "Le Bernimois Burger",
    description: "Double steak, cheddar fondu, sauce maison, oignons caramélisés",
    price: "9.50",
    image: "/images/menu/burger.png",
  },
  {
    name: "Tacos Cordon Bleu",
    description: "Cordon bleu, frites, fromage, sauce algérienne",
    price: "8.50",
    image: "/images/menu/tacos.png",
  },
  {
    name: "Kebab Galette XL",
    description: "Viande grillée, salade, tomates, oignons, sauce blanche",
    price: "7.50",
    image: "/images/menu/kebab.png",
  },
];

export default function MenuPreview() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <h2
            className="text-center font-display text-3xl font-bold tracking-wider text-neon-cyan sm:text-4xl"
            style={{ textShadow: "0 0 15px rgba(0, 240, 255, 0.3)" }}
          >
            NOS BESTSELLERS
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bestsellers.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 0.15}>
              <NeonBorder color={["pink", "cyan", "purple"][i] as "pink" | "cyan" | "purple"}>
                <div className="overflow-hidden rounded-lg">
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent" />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-display text-lg font-bold tracking-wide text-text-primary">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {item.description}
                    </p>
                    <p className="mt-3 font-pixel text-sm text-neon-yellow">
                      {item.price}€
                    </p>
                  </div>
                </div>
              </NeonBorder>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-10 text-center">
            <NeonButton href="/menu" variant="cyan" size="md">
              VOIR TOUT LE MENU
            </NeonButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
