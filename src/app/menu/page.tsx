"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuFilter from "@/components/menu/MenuFilter";
import MenuCard from "@/components/menu/MenuCard";
import { menuItems } from "@/lib/menu-data";

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="pt-8 pb-4 text-center">
        <h1
          className="font-display text-3xl font-bold tracking-wider text-neon-cyan sm:text-4xl"
          style={{ textShadow: "0 0 15px rgba(0, 240, 255, 0.3)" }}
        >
          NOTRE MENU
        </h1>
        <p className="mt-2 text-sm text-text-secondary">
          Cliquez sur + pour ajouter au panier
        </p>
      </div>

      {/* Filter bar */}
      <MenuFilter active={activeFilter} onFilter={setActiveFilter} />

      {/* Grid */}
      <div className="mx-auto max-w-6xl px-4 py-8">
        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
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
    </div>
  );
}
