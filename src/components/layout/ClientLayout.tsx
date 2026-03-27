"use client";

import { useState, useCallback } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartDrawer from "../order/CartDrawer";
import { CartProvider, useCart } from "@/lib/cart-context";

function LayoutInner({ children }: { children: React.ReactNode }) {
  const { itemCount } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartClick = useCallback(() => setCartOpen(true), []);

  return (
    <>
      <Navbar cartCount={itemCount} onCartClick={handleCartClick} />
      <main className="min-h-screen pt-16">{children}</main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <LayoutInner>{children}</LayoutInner>
    </CartProvider>
  );
}
