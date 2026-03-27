"use client";

import { useState, useMemo } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Minus, Plus, ShoppingBag } from "lucide-react";
import { getMenuItemBySlug, getCategoryById } from "@/lib/menu-data";
import { sauces, boissons, supplements } from "@/lib/options-data";
import { useCart } from "@/lib/cart-context";

const badgeColors: Record<string, string> = {
  "Best-seller": "bg-neon-pink text-white shadow-[0_0_10px_rgba(255,45,120,0.4)]",
  "Populaire": "bg-neon-yellow text-bg-primary shadow-[0_0_10px_rgba(255,229,0,0.4)]",
  "Nouveau": "bg-neon-cyan text-bg-primary shadow-[0_0_10px_rgba(0,240,255,0.4)]",
  "Spicy": "bg-orange-500 text-white shadow-[0_0_10px_rgba(249,115,22,0.4)]",
  "XXXL": "bg-neon-purple text-white shadow-[0_0_10px_rgba(184,77,255,0.4)]",
};

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const item = getMenuItemBySlug(slug);

  if (!item) {
    notFound();
  }

  const category = getCategoryById(item.category);
  const { addItem } = useCart();

  const [formule, setFormule] = useState<"solo" | "menu">(item.priceMenu ? "menu" : "solo");
  const [selectedSauces, setSelectedSauces] = useState<string[]>([]);
  const [selectedSupplements, setSelectedSupplements] = useState<string[]>([]);
  const [selectedBoisson, setSelectedBoisson] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const availableSauces = item.sauces
    ? sauces.filter((s) => item.sauces!.includes(s.id))
    : [];
  const availableSupplements = item.supplements
    ? supplements.filter((s) => item.supplements!.includes(s.id))
    : [];

  const toggleSauce = (id: string) => {
    setSelectedSauces((prev) => {
      if (prev.includes(id)) return prev.filter((s) => s !== id);
      if (prev.length >= 2) return [...prev.slice(1), id];
      return [...prev, id];
    });
  };

  const toggleSupplement = (id: string) => {
    setSelectedSupplements((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const selectedBoissonObj = boissons.find((b) => b.id === selectedBoisson);

  const unitPrice = useMemo(() => {
    let base = formule === "menu" && item.priceMenu ? item.priceMenu : item.priceSolo;
    // Add supplements
    for (const suppId of selectedSupplements) {
      const supp = supplements.find((s) => s.id === suppId);
      if (supp) base += supp.price;
    }
    // Add boisson extra cost
    if (formule === "menu" && selectedBoissonObj) {
      base += selectedBoissonObj.price;
    }
    return base;
  }, [formule, item.priceMenu, item.priceSolo, selectedSupplements, selectedBoissonObj]);

  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    const sauceNames = selectedSauces.map((id) => sauces.find((s) => s.id === id)?.name || id);
    const suppNames = selectedSupplements.map((id) => supplements.find((s) => s.id === id)?.name || id);
    const cartId = `${item.id}-${formule}-${selectedSauces.sort().join(",")}-${selectedSupplements.sort().join(",")}-${selectedBoisson || "none"}`;

    addItem({
      id: item.id,
      cartId,
      name: item.name,
      price: unitPrice,
      basePrice: item.priceSolo,
      category: item.category,
      image: item.image,
      options: {
        formule,
        sauces: sauceNames,
        supplements: suppNames,
        boisson: selectedBoissonObj?.name,
        boissonPrice: selectedBoissonObj?.price,
      },
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen pb-32">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-4xl px-4 pt-4">
        <nav className="flex items-center gap-1 text-xs text-text-secondary">
          <Link href="/menu" className="transition-colors hover:text-neon-cyan">Menu</Link>
          <ChevronRight size={12} />
          {category && (
            <>
              <Link href={`/menu?cat=${category.id}`} className="transition-colors hover:text-neon-cyan">
                {category.name}
              </Link>
              <ChevronRight size={12} />
            </>
          )}
          <span className="text-text-primary">{item.name}</span>
        </nav>
      </div>

      <div className="mx-auto max-w-4xl px-4 pt-6">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-xl border border-white/5">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {item.badge && (
              <div className={`absolute top-3 left-3 rounded-full px-3 py-1 font-pixel text-[10px] ${badgeColors[item.badge]}`}>
                {item.badge.toUpperCase()}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <h1
              className="font-display text-2xl font-bold tracking-wider text-text-primary sm:text-3xl"
              style={{ textShadow: "0 0 10px rgba(0, 240, 255, 0.2)" }}
            >
              {item.name}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {item.longDescription}
            </p>

            {/* Formule selector */}
            {item.priceMenu && (
              <div className="mt-6">
                <h3 className="mb-3 font-display text-xs uppercase tracking-wider text-text-secondary">
                  Choisir la formule
                </h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => setFormule("solo")}
                    className={`relative flex-1 rounded-lg border p-3 text-center transition-all ${
                      formule === "solo"
                        ? "border-neon-cyan bg-neon-cyan/10 text-text-primary shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                        : "border-white/10 bg-bg-card text-text-secondary hover:border-white/20"
                    }`}
                  >
                    <p className="font-display text-sm font-bold">Seul</p>
                    <p className="mt-1 font-pixel text-xs text-neon-yellow">{item.priceSolo.toFixed(2)}&euro;</p>
                  </button>
                  <button
                    onClick={() => setFormule("menu")}
                    className={`relative flex-1 rounded-lg border p-3 text-center transition-all ${
                      formule === "menu"
                        ? "border-neon-pink bg-neon-pink/10 text-text-primary shadow-[0_0_10px_rgba(255,45,120,0.2)]"
                        : "border-white/10 bg-bg-card text-text-secondary hover:border-white/20"
                    }`}
                  >
                    {formule === "menu" && (
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-neon-pink px-2 py-0.5 text-[9px] font-bold text-white">
                        RECOMMAND&Eacute;
                      </span>
                    )}
                    <p className="font-display text-sm font-bold">En Menu</p>
                    <p className="mt-1 font-pixel text-xs text-neon-yellow">{item.priceMenu.toFixed(2)}&euro;</p>
                    <p className="mt-0.5 text-[10px] text-text-secondary">Frites + Boisson</p>
                  </button>
                </div>
              </div>
            )}

            {/* Boissons (if menu selected) */}
            {formule === "menu" && item.priceMenu && (
              <div className="mt-6">
                <h3 className="mb-3 font-display text-xs uppercase tracking-wider text-text-secondary">
                  Boisson incluse
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {boissons.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBoisson(b.id)}
                      className={`rounded-lg border px-3 py-2 text-left text-xs transition-all ${
                        selectedBoisson === b.id
                          ? "border-neon-cyan bg-neon-cyan/10 text-text-primary"
                          : "border-white/10 bg-bg-card text-text-secondary hover:border-white/20"
                      }`}
                    >
                      <span>{b.name}</span>
                      {b.price > 0 && (
                        <span className="ml-1 text-neon-yellow">+{b.price.toFixed(2)}&euro;</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sauces */}
            {availableSauces.length > 0 && (
              <div className="mt-6">
                <h3 className="mb-3 font-display text-xs uppercase tracking-wider text-text-secondary">
                  Sauces <span className="text-neon-pink">(2 max)</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {availableSauces.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => toggleSauce(s.id)}
                      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
                        selectedSauces.includes(s.id)
                          ? "border-neon-pink bg-neon-pink/15 text-neon-pink shadow-[0_0_8px_rgba(255,45,120,0.2)]"
                          : "border-white/10 bg-bg-card text-text-secondary hover:border-white/20"
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Supplements */}
            {availableSupplements.length > 0 && (
              <div className="mt-6">
                <h3 className="mb-3 font-display text-xs uppercase tracking-wider text-text-secondary">
                  Suppl&eacute;ments
                </h3>
                <div className="flex flex-wrap gap-2">
                  {availableSupplements.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => toggleSupplement(s.id)}
                      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
                        selectedSupplements.includes(s.id)
                          ? "border-neon-yellow bg-neon-yellow/15 text-neon-yellow shadow-[0_0_8px_rgba(255,229,0,0.2)]"
                          : "border-white/10 bg-bg-card text-text-secondary hover:border-white/20"
                      }`}
                    >
                      {s.name} <span className="text-neon-yellow">+{s.price.toFixed(2)}&euro;</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <h3 className="mb-3 font-display text-xs uppercase tracking-wider text-text-secondary">
                Quantit&eacute;
              </h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-bg-card text-text-secondary transition-colors hover:border-neon-cyan hover:text-neon-cyan"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center font-display text-lg font-bold text-text-primary">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-bg-card text-text-secondary transition-colors hover:border-neon-cyan hover:text-neon-cyan"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky add to cart */}
      <div className="fixed right-0 bottom-0 left-0 z-40 border-t border-neon-pink/20 bg-bg-primary/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <div>
            <p className="font-pixel text-lg text-neon-yellow" style={{ textShadow: "0 0 10px rgba(255,229,0,0.3)" }}>
              {totalPrice.toFixed(2)}&euro;
            </p>
            <p className="text-[10px] text-text-secondary">
              {quantity > 1 ? `${quantity} x ${unitPrice.toFixed(2)}\u20AC` : formule === "menu" ? "En menu" : "Seul"}
            </p>
          </div>
          <motion.button
            onClick={handleAddToCart}
            className={`flex items-center gap-2 rounded-sm px-6 py-3 font-display text-sm font-bold uppercase tracking-wider transition-all ${
              added
                ? "bg-neon-cyan text-bg-primary shadow-[0_0_20px_rgba(0,240,255,0.5)]"
                : "bg-neon-pink text-white shadow-[0_0_20px_rgba(255,45,120,0.5)] hover:shadow-[0_0_35px_rgba(255,45,120,0.7)]"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingBag size={18} />
            {added ? "AJOUT\u00C9 !" : `AJOUTER AU PANIER`}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
