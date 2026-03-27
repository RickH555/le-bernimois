"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuFilter from "@/components/menu/MenuFilter";
import MenuCard from "@/components/menu/MenuCard";
import OrderForm from "@/components/order/OrderForm";
import { menuItems } from "@/lib/menu-data";
import { useCart } from "@/lib/cart-context";
import NeonButton from "@/components/ui/NeonButton";
import { isOpen } from "@/lib/constants";

export default function CommanderPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showForm, setShowForm] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState<string | null>(null);
  const { items, total } = useCart();

  const status = isOpen();
  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

  const filtered =
    activeFilter === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

  if (orderConfirmed) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <motion.div
          className="max-w-md text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="text-6xl">✅</div>
          <h1 className="mt-4 font-display text-2xl font-bold tracking-wider text-neon-cyan">
            COMMANDE CONFIRMÉE
          </h1>
          <p className="mt-4 text-text-secondary">
            Votre numéro de commande :
          </p>
          <p
            className="mt-2 font-pixel text-2xl text-neon-yellow"
            style={{ textShadow: "0 0 10px rgba(255, 229, 0, 0.4)" }}
          >
            {orderConfirmed}
          </p>
          <p className="mt-4 text-sm text-text-secondary">
            Merci pour votre commande ! Présentez ce numéro au comptoir lors du retrait.
          </p>
          <div className="mt-8">
            <NeonButton href="/" variant="cyan">
              Retour à l&apos;accueil
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
            className="mb-4 text-sm text-text-secondary hover:text-neon-cyan"
          >
            ← Retour au menu
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
          className="font-display text-3xl font-bold tracking-wider text-neon-pink sm:text-4xl"
          style={{ textShadow: "0 0 15px rgba(255, 45, 120, 0.3)" }}
        >
          COMMANDER
        </h1>
        {!status.open && (
          <div className="mt-2 inline-block rounded-full border border-neon-pink/30 bg-neon-pink/10 px-4 py-1 text-sm text-neon-pink">
            Fermé — Réouverture : {status.nextOpen}
          </div>
        )}
        <p className="mt-2 text-sm text-text-secondary">
          Composez votre commande Click &amp; Collect
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

      {/* Sticky bottom bar when cart has items */}
      <AnimatePresence>
        {cartCount > 0 && (
          <motion.div
            className="fixed right-0 bottom-0 left-0 z-40 border-t border-neon-pink/20 bg-bg-primary/95 backdrop-blur-md"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
          >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
              <div>
                <span className="text-sm text-text-secondary">
                  {cartCount} article{cartCount > 1 ? "s" : ""}
                </span>
                <span className="ml-3 font-pixel text-sm text-neon-yellow">
                  {total.toFixed(2)}€
                </span>
              </div>
              <NeonButton
                variant="pink"
                size="sm"
                onClick={() => setShowForm(true)}
                disabled={!status.open}
              >
                VALIDER
              </NeonButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
