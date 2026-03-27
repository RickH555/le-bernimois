"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-bg-primary/95 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-3 text-text-primary transition-colors hover:text-neon-pink"
            aria-label="Fermer le menu"
          >
            <X size={28} />
          </button>

          {/* Logo */}
          <div
            className="mb-12 font-display text-2xl font-bold tracking-wider text-neon-cyan"
            style={{ textShadow: "0 0 15px rgba(0, 240, 255, 0.5)" }}
          >
            LE BERNIMOIS
          </div>

          {/* Nav links */}
          <nav className="flex flex-col items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <Link
                  href={link.href}
                  className={`font-display text-xl font-semibold uppercase tracking-widest transition-colors ${
                    pathname === link.href
                      ? "text-neon-pink"
                      : "text-text-primary hover:text-neon-cyan"
                  }`}
                  style={
                    pathname === link.href
                      ? { textShadow: "0 0 15px rgba(255, 45, 120, 0.5)" }
                      : undefined
                  }
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Decorative neon line */}
          <motion.div
            className="mt-12 h-[1px] w-32 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-purple"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
