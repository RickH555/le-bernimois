"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { MenuItem } from "@/lib/menu-data";
import { useCart } from "@/lib/cart-context";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const { addItem } = useCart();

  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg border border-white/5 bg-bg-card transition-all duration-300 hover:border-neon-pink/30"
      whileHover={{ scale: 1.03 }}
      layout
    >
      {/* Gradient placeholder image */}
      <div className="relative h-40 overflow-hidden">
        <div
          className={`absolute inset-0 ${
            item.category === "burgers"
              ? "bg-gradient-to-br from-neon-pink/20 via-neon-yellow/10 to-bg-card"
              : item.category === "tacos"
              ? "bg-gradient-to-br from-neon-yellow/20 via-neon-pink/10 to-bg-card"
              : item.category === "kebabs"
              ? "bg-gradient-to-br from-neon-cyan/20 via-neon-purple/10 to-bg-card"
              : item.category === "boissons"
              ? "bg-gradient-to-br from-neon-cyan/20 via-neon-yellow/10 to-bg-card"
              : "bg-gradient-to-br from-neon-purple/20 via-neon-pink/10 to-bg-card"
          }`}
        />
        {/* Category emoji as visual placeholder */}
        <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30 transition-transform group-hover:scale-110">
          {item.category === "burgers"
            ? "🍔"
            : item.category === "tacos"
            ? "🌮"
            : item.category === "kebabs"
            ? "🥙"
            : item.category === "boissons"
            ? "🥤"
            : "🍩"}
        </div>
        {/* Popular badge */}
        {item.popular && (
          <div className="absolute top-2 right-2 rounded-full bg-neon-yellow px-2 py-0.5 font-pixel text-[8px] text-bg-primary">
            POPULAIRE
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display text-sm font-bold tracking-wide text-text-primary">
          {item.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-text-secondary">
          {item.description}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="font-pixel text-xs text-neon-yellow">
            {item.price.toFixed(2)}€
          </span>
          <motion.button
            onClick={() =>
              addItem({
                id: item.id,
                name: item.name,
                price: item.price,
                category: item.category,
              })
            }
            className="flex h-8 w-8 items-center justify-center rounded-full bg-neon-pink text-white opacity-0 shadow-[0_0_10px_rgba(255,45,120,0.4)] transition-all group-hover:opacity-100"
            whileTap={{ scale: 0.85 }}
            aria-label={`Ajouter ${item.name} au panier`}
          >
            <Plus size={16} />
          </motion.button>
        </div>
      </div>

      {/* Neon border glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow: "inset 0 0 15px rgba(255, 45, 120, 0.1), 0 0 15px rgba(255, 45, 120, 0.1)",
        }}
      />
    </motion.div>
  );
}
