"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import MenuFilter from "@/components/menu/MenuFilter";
import MenuCard from "@/components/menu/MenuCard";
import { menuItems, categories, getCategoryById } from "@/lib/menu-data";
import NeonButton from "@/components/ui/NeonButton";

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

  // Group items by category for section headers
  const groupedByCategory = activeFilter === "all"
    ? categories.map((cat) => ({
        category: cat,
        items: menuItems.filter((item) => item.category === cat.id),
      }))
    : [
        {
          category: getCategoryById(activeFilter)!,
          items: filtered,
        },
      ].filter((g) => g.category);

  return (
    <div className="min-h-screen">
      {/* Header with background */}
      <div className="relative overflow-hidden py-16 text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/menu/burger.jpg"
            alt="Menu Le Bernimois"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/60 via-bg-primary/80 to-bg-primary" />
        </div>
        <div className="relative z-10">
          <h1
            className="font-display text-4xl font-bold tracking-wider text-neon-cyan sm:text-5xl"
            style={{ textShadow: "0 0 20px rgba(0, 240, 255, 0.4)" }}
          >
            NOTRE MENU
          </h1>
          <p className="mt-3 text-base text-text-secondary">
            Burgers, tacos, kebabs — tout est fait maison avec des produits frais
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <MenuFilter active={activeFilter} onFilter={setActiveFilter} />

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 py-8">
        {groupedByCategory.map(({ category, items }) => (
          <div key={category.id} className="mb-12">
            {/* Category header */}
            {activeFilter === "all" && (
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="relative h-24 sm:h-32">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover opacity-40"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/90 via-bg-primary/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center px-6">
                    <div>
                      <h2 className="font-display text-2xl font-bold tracking-wider text-text-primary sm:text-3xl">
                        <span className="mr-2">{category.emoji}</span>
                        {category.name}
                      </h2>
                      <p className="mt-1 text-sm text-text-secondary">{category.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Items grid */}
            <motion.div
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              layout
            >
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MenuCard item={item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        ))}

        {/* Promo banner */}
        <div className="mt-8 rounded-lg border border-neon-pink/20 bg-gradient-to-r from-neon-pink/10 via-bg-card to-neon-cyan/10 p-6 text-center">
          <p className="font-display text-lg font-bold tracking-wider text-neon-yellow" style={{ textShadow: "0 0 10px rgba(255,229,0,0.3)" }}>
            FORMULE MENU : FRITES + BOISSON INCLUSES
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            Transformez n&apos;importe quel burger, tacos ou kebab en menu complet pour seulement 3\u20AC de plus
          </p>
          <div className="mt-4">
            <NeonButton href="/menu/le-bernimois" variant="pink" size="sm">
              D\u00C9COUVRIR LE BERNIMOIS
            </NeonButton>
          </div>
        </div>
      </div>
    </div>
  );
}
