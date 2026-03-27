"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const galleryItems = [
  { id: 1, title: "Burger Le Bernimois", gradient: "from-neon-pink/30 via-neon-yellow/20 to-bg-card", emoji: "🍔" },
  { id: 2, title: "Tacos Cordon Bleu", gradient: "from-neon-yellow/30 via-neon-pink/20 to-bg-card", emoji: "🌮" },
  { id: 3, title: "Kebab Galette XL", gradient: "from-neon-cyan/30 via-neon-purple/20 to-bg-card", emoji: "🥙" },
  { id: 4, title: "Double Smash Burger", gradient: "from-neon-purple/30 via-neon-pink/20 to-bg-card", emoji: "🍔" },
  { id: 5, title: "Tacos XL", gradient: "from-neon-yellow/30 via-neon-cyan/20 to-bg-card", emoji: "🌮" },
  { id: 6, title: "Assiette Kebab", gradient: "from-neon-cyan/30 via-neon-yellow/20 to-bg-card", emoji: "🥙" },
  { id: 7, title: "Milkshake Maison", gradient: "from-neon-pink/30 via-neon-purple/20 to-bg-card", emoji: "🥤" },
  { id: 8, title: "Tiramisu Maison", gradient: "from-neon-purple/30 via-neon-yellow/20 to-bg-card", emoji: "🍩" },
  { id: 9, title: "Ambiance Le Bernimois", gradient: "from-neon-cyan/30 via-neon-pink/20 to-bg-card", emoji: "🔥" },
  { id: 10, title: "BBQ Burger", gradient: "from-neon-yellow/30 via-neon-pink/20 to-bg-card", emoji: "🍔" },
  { id: 11, title: "Tacos Gratiné", gradient: "from-neon-pink/30 via-neon-cyan/20 to-bg-card", emoji: "🌮" },
  { id: 12, title: "Brownie Chocolat", gradient: "from-neon-purple/30 via-neon-pink/20 to-bg-card", emoji: "🍫" },
];

export default function GaleriePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prev = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + galleryItems.length) % galleryItems.length : null));
  const next = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % galleryItems.length : null));

  return (
    <div className="min-h-screen px-4 py-8">
      <ScrollReveal>
        <h1
          className="text-center font-display text-3xl font-bold tracking-wider text-neon-purple sm:text-4xl"
          style={{ textShadow: "0 0 15px rgba(184, 77, 255, 0.3)" }}
        >
          GALERIE
        </h1>
        <p className="mt-2 text-center text-sm text-text-secondary">
          Nos plats en images
        </p>
      </ScrollReveal>

      {/* Masonry grid */}
      <div className="mx-auto mt-8 max-w-6xl columns-2 gap-4 md:columns-3 lg:columns-4">
        {galleryItems.map((item, i) => (
          <ScrollReveal key={item.id} delay={i * 0.05}>
            <motion.button
              className={`mb-4 block w-full overflow-hidden rounded-lg border border-white/5 bg-gradient-to-br ${item.gradient}`}
              style={{ height: `${180 + (i % 3) * 60}px` }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setLightboxIndex(i)}
              aria-label={`Voir ${item.title}`}
            >
              <div className="flex h-full flex-col items-center justify-center p-4">
                <span className="text-5xl">{item.emoji}</span>
                <p className="mt-2 text-center font-display text-xs tracking-wider text-text-primary/80">
                  {item.title}
                </p>
              </div>
            </motion.button>
          </ScrollReveal>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white"
              onClick={() => setLightboxIndex(null)}
              aria-label="Fermer"
            >
              <X size={28} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 z-10 p-2 text-white/70 hover:text-white"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Précédent"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Content */}
            <motion.div
              key={lightboxIndex}
              className={`flex h-[60vh] w-[80vw] max-w-2xl flex-col items-center justify-center rounded-xl bg-gradient-to-br ${galleryItems[lightboxIndex].gradient} border border-white/10`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-8xl">{galleryItems[lightboxIndex].emoji}</span>
              <p className="mt-4 font-display text-lg tracking-wider text-text-primary">
                {galleryItems[lightboxIndex].title}
              </p>
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 z-10 p-2 text-white/70 hover:text-white"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Suivant"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
