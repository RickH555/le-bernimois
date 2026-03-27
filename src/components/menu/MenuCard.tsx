"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { MenuItem } from "@/lib/menu-data";

interface MenuCardProps {
  item: MenuItem;
}

const badgeColors: Record<string, string> = {
  "Best-seller": "bg-neon-pink text-white shadow-[0_0_10px_rgba(255,45,120,0.4)]",
  "Populaire": "bg-neon-yellow text-bg-primary shadow-[0_0_10px_rgba(255,229,0,0.4)]",
  "Nouveau": "bg-neon-cyan text-bg-primary shadow-[0_0_10px_rgba(0,240,255,0.4)]",
  "Spicy": "bg-orange-500 text-white shadow-[0_0_10px_rgba(249,115,22,0.4)]",
  "XXXL": "bg-neon-purple text-white shadow-[0_0_10px_rgba(184,77,255,0.4)]",
};

export default function MenuCard({ item }: MenuCardProps) {
  const hasProductPage = item.category !== "boissons" && item.category !== "desserts";

  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg border border-white/5 bg-bg-card transition-all duration-300 hover:border-neon-pink/30"
      whileHover={{ scale: 1.03 }}
      layout
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/20 to-transparent" />
        {/* Badge */}
        {item.badge && (
          <div className={`absolute top-2 right-2 rounded-full px-2.5 py-0.5 font-pixel text-[8px] ${badgeColors[item.badge] || "bg-neon-yellow text-bg-primary"}`}>
            {item.badge.toUpperCase()}
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
          <div className="flex items-baseline gap-2">
            <span className="font-pixel text-xs text-neon-yellow">
              {item.priceSolo.toFixed(2)}\u20AC
            </span>
            {item.priceMenu && (
              <span className="text-[10px] text-text-secondary">
                Menu {item.priceMenu.toFixed(2)}\u20AC
              </span>
            )}
          </div>

          {hasProductPage ? (
            <Link
              href={`/menu/${item.slug}`}
              className="flex items-center gap-1 text-xs font-medium text-neon-pink opacity-0 transition-all group-hover:opacity-100 hover:text-neon-cyan"
            >
              Personnaliser <ArrowRight size={12} />
            </Link>
          ) : (
            <Link
              href={`/menu/${item.slug}`}
              className="flex items-center gap-1 text-xs font-medium text-neon-pink opacity-0 transition-all group-hover:opacity-100 hover:text-neon-cyan"
            >
              Voir <ArrowRight size={12} />
            </Link>
          )}
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
