"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import OrderForm from "@/components/order/OrderForm";
import NeonButton from "@/components/ui/NeonButton";

export default function PanierPage() {
  const { items, updateQuantity, removeItem, total, itemCount } = useCart();
  const [showForm, setShowForm] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState<string | null>(null);

  if (orderConfirmed) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <motion.div
          className="max-w-md text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="text-6xl">{"\u2705"}</div>
          <h1 className="mt-4 font-display text-2xl font-bold tracking-wider text-neon-cyan">
            COMMANDE CONFIRM&Eacute;E
          </h1>
          <p className="mt-4 text-text-secondary">
            Votre num&eacute;ro de commande :
          </p>
          <p
            className="mt-2 font-pixel text-2xl text-neon-yellow"
            style={{ textShadow: "0 0 10px rgba(255, 229, 0, 0.4)" }}
          >
            {orderConfirmed}
          </p>
          <p className="mt-4 text-sm text-text-secondary">
            Merci pour votre commande ! Pr&eacute;sentez ce num&eacute;ro au comptoir lors du retrait.
          </p>
          <div className="mt-8">
            <NeonButton href="/" variant="cyan">
              Retour &agrave; l&apos;accueil
            </NeonButton>
          </div>
        </motion.div>
      </div>
    );
  }

  if (showForm) {
    return (
      <div className="min-h-screen px-4 py-8">
        <div className="mx-auto max-w-lg">
          <button
            onClick={() => setShowForm(false)}
            className="mb-4 flex items-center gap-1 text-sm text-text-secondary hover:text-neon-cyan"
          >
            <ArrowLeft size={14} /> Retour au panier
          </button>
          <OrderForm onConfirm={(orderNum) => setOrderConfirmed(orderNum)} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="pt-8 pb-4 text-center">
        <h1
          className="font-display text-3xl font-bold tracking-wider text-neon-cyan sm:text-4xl"
          style={{ textShadow: "0 0 15px rgba(0, 240, 255, 0.3)" }}
        >
          VOTRE PANIER
        </h1>
        <p className="mt-2 text-sm text-text-secondary">
          {itemCount > 0 ? `${itemCount} article${itemCount > 1 ? "s" : ""} dans votre panier` : "Votre panier est vide"}
        </p>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-8">
        {items.length === 0 ? (
          <div className="text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-bg-card">
              <ShoppingBag size={40} className="text-text-secondary" />
            </div>
            <p className="mt-6 text-lg text-text-secondary">Votre panier est vide</p>
            <p className="mt-2 text-sm text-text-secondary">
              Parcourez le menu et ajoutez vos plats pr&eacute;f&eacute;r&eacute;s
            </p>
            <div className="mt-8">
              <NeonButton href="/menu" variant="pink">
                VOIR LE MENU
              </NeonButton>
            </div>
          </div>
        ) : (
          <>
            {/* Items list */}
            <ul className="space-y-4">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <motion.li
                    key={item.cartId}
                    className="flex gap-4 rounded-lg border border-white/5 bg-bg-card p-4"
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    {/* Image */}
                    {item.image && (
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                    )}

                    {/* Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-display text-sm font-bold tracking-wide text-text-primary">
                            {item.name}
                          </h3>
                          {item.options && (
                            <div className="mt-1 space-y-0.5">
                              <p className="text-[10px] text-neon-cyan">
                                {item.options.formule === "menu" ? "En Menu" : "Seul"}
                                {item.options.boisson && ` \u2022 ${item.options.boisson}`}
                              </p>
                              {item.options.sauces.length > 0 && (
                                <p className="text-[10px] text-text-secondary">
                                  Sauces : {item.options.sauces.join(", ")}
                                </p>
                              )}
                              {item.options.supplements.length > 0 && (
                                <p className="text-[10px] text-text-secondary">
                                  Suppl. : {item.options.supplements.join(", ")}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                        <p className="font-pixel text-xs text-neon-yellow">
                          {(item.price * item.quantity).toFixed(2)}&euro;
                        </p>
                      </div>

                      {/* Quantity controls */}
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="flex h-7 w-7 items-center justify-center rounded bg-bg-secondary text-text-secondary transition-colors hover:text-neon-cyan"
                            aria-label="R\u00e9duire"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-6 text-center text-sm font-bold text-text-primary">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="flex h-7 w-7 items-center justify-center rounded bg-bg-secondary text-text-secondary transition-colors hover:text-neon-cyan"
                            aria-label="Augmenter"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.cartId)}
                          className="p-1 text-text-secondary transition-colors hover:text-neon-pink"
                          aria-label="Supprimer"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>

            {/* Divider */}
            <div className="my-6 h-[1px] bg-gradient-to-r from-transparent via-neon-pink/20 to-transparent" />

            {/* Add more items */}
            <Link
              href="/menu"
              className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-neon-cyan"
            >
              <Plus size={14} /> Ajouter d&apos;autres articles
            </Link>

            {/* Total */}
            <div className="mt-6 rounded-lg border border-neon-pink/20 bg-bg-card p-4">
              <div className="flex items-center justify-between">
                <span className="font-display text-sm uppercase tracking-wider text-text-secondary">
                  Total
                </span>
                <span
                  className="font-pixel text-xl text-neon-yellow"
                  style={{ textShadow: "0 0 10px rgba(255,229,0,0.3)" }}
                >
                  {total.toFixed(2)}&euro;
                </span>
              </div>
            </div>

            {/* Validate button */}
            <div className="mt-6">
              <NeonButton
                variant="pink"
                size="lg"
                className="w-full"
                onClick={() => setShowForm(true)}
              >
                VALIDER LA COMMANDE
              </NeonButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
