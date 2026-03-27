"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import NeonButton from "../ui/NeonButton";
import ParticleRain from "../ui/ParticleRain";

const subtitle = "Burgers • Tacos • Kebabs";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= subtitle.length) {
        setTypedText(subtitle.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        // Blink cursor then hide
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image cyberpunk */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-cyberpunk.png"
          alt="Le Bernimois — façade cyberpunk"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/70 via-bg-primary/40 to-bg-primary/80" />
        {/* Horizontal neon lines */}
        <div className="absolute bottom-[35%] left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />
        <div className="absolute bottom-[25%] left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
      </div>

      {/* Particle rain */}
      <ParticleRain />

      {/* Content */}
      <div className="relative z-10 px-4 text-center">
        {/* H1 SEO-only — visually the neon sign on the image IS the title */}
        <h1 className="sr-only">Le Bernimois — Burgers, Tacos, Kebabs à Bernis</h1>

        {/* Typed subtitle */}
        <motion.p
          className="font-body text-xl font-light tracking-widest text-text-primary sm:text-2xl md:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ textShadow: "0 0 20px rgba(0, 0, 0, 0.8)" }}
        >
          {typedText}
          {showCursor && (
            <span
              className="ml-1 inline-block w-[2px] bg-neon-cyan"
              style={{ animation: "blink-cursor 0.8s infinite", height: "1em" }}
            />
          )}
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <NeonButton
            href="/menu"
            variant="pink"
            size="lg"
            className="animate-[neon-pulse_2s_infinite]"
          >
            COMMANDER
          </NeonButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-text-secondary"
        style={{ animation: "scroll-bounce 2s infinite" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
