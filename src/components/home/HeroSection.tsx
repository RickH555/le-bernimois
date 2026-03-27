"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import GlitchText from "../ui/GlitchText";
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
          alt="Le Bernimois — snack cyberpunk"
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <GlitchText
            text="LE BERNIMOIS"
            as="h1"
            className="text-5xl tracking-wider text-text-primary sm:text-6xl md:text-8xl"
          />
        </motion.div>

        {/* Typed subtitle */}
        <motion.p
          className="mt-4 font-body text-lg font-light tracking-widest text-text-secondary sm:text-xl md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
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
            href="/commander"
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
