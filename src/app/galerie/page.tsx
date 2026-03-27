"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const galleryItems = [
  { id: 1, title: "Burger Le Bernimois", image: "/images/menu/burger.png" },
  { id: 2, title: "Tacos Cordon Bleu", image: "/images/menu/tacos.png" },
  { id: 3, title: "Kebab Galette XL", image: "/images/menu/kebab.png" },
  { id: 4, title: "Milkshake & Boissons", image: "/images/menu/boissons.png" },
  { id: 5, title: "Desserts Maison", image: "/images/menu/desserts.png" },
  { id: 6, title: "Le Bernimois — Façade", image: "/images/hero/hero-cyberpunk.png" },
  { id: 7, title: "Burger Le Bernimois", image: "/images/menu/burger.png" },
  { id: 8, title: "Tacos Cordon Bleu", image: "/images/menu/tacos.png" },
  { id: 9, title: "Kebab Galette XL", image: "/images/menu/kebab.png" },
  { id: 10, title: "Milkshake & Boissons", image: "/images/menu/boissons.png" },
  { id: 11, title: "Desserts Maison", image: "/images/menu/desserts.png" },
  { id: 12, title: "Le Bernimois — Ambiance", image: "/images/hero/hero-cyberpunk.png" },
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
          Nos plats en images — style cyberpunk anime
        </p>
      </ScrollReveal>

      {/* Masonry grid */}
      <div className="mx-auto mt-8 max-w-6xl columns-2 gap-4 md:columns-3 lg:columns-4">
        {galleryItems.map((item, i) => (
          <ScrollReveal key={item.id} delay={i * 0.05}>
            <motion.button
              className="mb-4 block w-full overflow-hidden rounded-lg border border-white/5"
              whileHover={{ scale: 1.02 }}
              onClick={() => setLightboxIndex(i)}
              aria-label={`Voir ${item.title}`}
            >
              <div className="relative" style={{ height: `${180 + (i % 3) * 60}px` }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-500 hover:brightness-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Overlay with title */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-bg-primary/70 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100 hover:opacity-100">
                  <p className="font-display text-xs tracking-wider text-text-primary">
                    {item.title}
                  </p>
                </div>
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
            <button
              className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white"
              onClick={() => setLightboxIndex(null)}
              aria-label="Fermer"
            >
              <X size={28} />
            </button>

            <button
              className="absolute left-4 z-10 p-2 text-white/70 hover:text-white"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Précédent"
            >
              <ChevronLeft size={32} />
            </button>

            <motion.div
              key={lightboxIndex}
              className="relative h-[70vh] w-[85vw] max-w-3xl overflow-hidden rounded-xl border border-white/10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryItems[lightboxIndex].image}
                alt={galleryItems[lightboxIndex].title}
                fill
                className="object-cover"
                sizes="85vw"
                quality={90}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="font-display text-lg tracking-wider text-text-primary">
                  {galleryItems[lightboxIndex].title}
                </p>
              </div>
            </motion.div>

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
