"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

interface NavbarProps {
  cartCount?: number;
  onCartClick?: () => void;
}

export default function Navbar({ cartCount = 0, onCartClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "h-12 bg-bg-primary/90 backdrop-blur-md border-b border-neon-pink/20"
            : "h-16 bg-transparent"
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-wider text-neon-cyan"
            style={{ textShadow: "0 0 10px rgba(0, 240, 255, 0.5)" }}
          >
            LE BERNIMOIS
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-body text-sm font-medium uppercase tracking-wide transition-colors duration-200",
                  pathname === link.href
                    ? "text-neon-cyan"
                    : "text-text-secondary hover:text-neon-pink"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: cart + hamburger */}
          <div className="flex items-center gap-3">
            {/* Cart icon */}
            <button
              onClick={onCartClick}
              className="relative p-2 text-text-secondary transition-colors hover:text-neon-pink"
              aria-label={`Panier (${cartCount} articles)`}
            >
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-neon-pink text-[10px] font-bold text-white"
                  style={{
                    boxShadow: "0 0 10px rgba(255, 45, 120, 0.6)",
                    animation: "neon-pulse 2s infinite",
                  }}
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              className="flex flex-col items-center justify-center gap-1.5 p-2 md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <span className="block h-0.5 w-6 bg-text-primary transition-transform" />
              <span className="block h-0.5 w-6 bg-text-primary transition-opacity" />
              <span className="block h-0.5 w-6 bg-text-primary transition-transform" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
