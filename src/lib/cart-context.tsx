"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export interface CartItemOptions {
  formule: "solo" | "menu";
  sauces: string[];
  supplements: string[];
  boisson?: string;
  boissonPrice?: number;
}

export interface CartItem {
  id: string;
  cartId: string; // unique ID per cart line (id + options hash)
  name: string;
  price: number; // unit price with all options
  basePrice: number;
  quantity: number;
  category: string;
  image?: string;
  options?: CartItemOptions;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (cartId: string) => void;
  updateQuantity: (cartId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((item: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.cartId === item.cartId);
      if (existing) {
        return prev.map((i) =>
          i.cartId === item.cartId ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((cartId: string) => {
    setItems((prev) => prev.filter((i) => i.cartId !== cartId));
  }, []);

  const updateQuantity = useCallback((cartId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => i.cartId !== cartId));
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.cartId === cartId ? { ...i, quantity } : i))
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, total, itemCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
