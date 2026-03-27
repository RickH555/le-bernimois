"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import NeonButton from "../ui/NeonButton";
import Link from "next/link";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, updateQuantity, removeItem, total } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-[80] flex w-full max-w-md flex-col border-l border-neon-pink/20 bg-bg-primary"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 px-4 py-4">
              <h2 className="font-display text-lg font-bold tracking-wider text-neon-cyan">
                PANIER
              </h2>
              <button
                onClick={onClose}
                className="p-1 text-text-secondary transition-colors hover:text-neon-pink"
                aria-label="Fermer le panier"
              >
                <X size={22} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
              {items.length === 0 ? (
                <p className="mt-12 text-center text-text-secondary">
                  Votre panier est vide
                </p>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center gap-3 rounded-lg border border-white/5 bg-bg-card p-3"
                    >
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-text-primary">{item.name}</p>
                        <p className="font-pixel text-xs text-neon-yellow">
                          {item.price.toFixed(2)}€
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="rounded bg-white/5 p-1 text-text-secondary hover:text-neon-cyan"
                          aria-label="Réduire la quantité"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-6 text-center text-sm font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="rounded bg-white/5 p-1 text-text-secondary hover:text-neon-cyan"
                          aria-label="Augmenter la quantité"
                        >
                          <Plus size={14} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-1 p-1 text-text-secondary hover:text-neon-pink"
                          aria-label="Supprimer"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-white/5 px-4 py-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-display text-sm uppercase tracking-wider text-text-secondary">
                    Total
                  </span>
                  <span className="font-pixel text-lg text-neon-yellow">
                    {total.toFixed(2)}€
                  </span>
                </div>
                <Link href="/commander" onClick={onClose}>
                  <NeonButton variant="pink" size="lg" className="w-full">
                    Valider la commande
                  </NeonButton>
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
