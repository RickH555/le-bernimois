"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function StickyOrderBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed right-0 bottom-0 left-0 z-40 border-t border-neon-pink/20 bg-bg-primary/95 backdrop-blur-md md:hidden"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 250 }}
        >
          <div className="mx-auto flex max-w-lg items-center justify-center px-4 py-3">
            <Link
              href="/menu"
              className="flex w-full items-center justify-center gap-2 rounded-sm bg-neon-pink px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(255,45,120,0.5)] transition-all hover:shadow-[0_0_35px_rgba(255,45,120,0.7)]"
            >
              <ShoppingBag size={18} />
              COMMANDER MAINTENANT
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
