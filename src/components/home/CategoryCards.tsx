"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../ui/ScrollReveal";
import { categories, getItemsByCategory } from "@/lib/menu-data";

const neonColors = ["neon-pink", "neon-cyan", "neon-purple", "neon-yellow", "neon-pink"];

export default function CategoryCards() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <h2
            className="text-center font-display text-3xl font-bold tracking-wider text-neon-cyan sm:text-4xl"
            style={{ textShadow: "0 0 15px rgba(0, 240, 255, 0.3)" }}
          >
            NOS CAT&Eacute;GORIES
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((cat, i) => {
            const items = getItemsByCategory(cat.id);
            const minPrice = Math.min(...items.map((item) => item.priceSolo));
            const color = neonColors[i % neonColors.length];

            return (
              <ScrollReveal key={cat.id} delay={i * 0.1}>
                <Link href={`/menu?cat=${cat.id}`}>
                  <div className="group relative overflow-hidden rounded-lg border border-white/5 bg-bg-card transition-all duration-300 hover:border-white/20">
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 50vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-xl">{cat.emoji}</p>
                      <h3 className="mt-1 font-display text-sm font-bold tracking-wider text-text-primary">
                        {cat.name}
                      </h3>
                      <p className="mt-1 text-[10px] text-text-secondary">
                        {items.length} produit{items.length > 1 ? "s" : ""}
                      </p>
                      <p className={`mt-1 font-pixel text-[10px] text-${color}`}>
                        \u00C0 partir de {minPrice.toFixed(2)}\u20AC
                      </p>
                    </div>
                    {/* Hover glow */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        boxShadow: `inset 0 0 20px rgba(${color === "neon-pink" ? "255,45,120" : color === "neon-cyan" ? "0,240,255" : color === "neon-purple" ? "184,77,255" : "255,229,0"}, 0.1)`,
                      }}
                    />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
