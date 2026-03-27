"use client";

import { motion } from "framer-motion";
import { categories, type MenuCategory } from "@/lib/menu-data";

interface MenuFilterProps {
  active: string;
  onFilter: (id: string) => void;
}

export default function MenuFilter({ active, onFilter }: MenuFilterProps) {
  return (
    <div className="sticky top-12 z-30 border-b border-white/5 bg-bg-primary/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-3 scrollbar-hide">
        <FilterButton
          label="Tout"
          emoji="🔥"
          active={active === "all"}
          onClick={() => onFilter("all")}
        />
        {categories.map((cat) => (
          <FilterButton
            key={cat.id}
            label={cat.name}
            emoji={cat.emoji}
            active={active === cat.id}
            onClick={() => onFilter(cat.id)}
          />
        ))}
      </div>
    </div>
  );
}

function FilterButton({
  label,
  emoji,
  active,
  onClick,
}: {
  label: string;
  emoji: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        active
          ? "bg-neon-pink text-white shadow-[0_0_15px_rgba(255,45,120,0.4)]"
          : "bg-bg-card text-text-secondary hover:text-text-primary"
      }`}
      whileTap={{ scale: 0.95 }}
    >
      <span className="mr-1.5">{emoji}</span>
      {label}
    </motion.button>
  );
}
