"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
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
      {/* Background gradient cyberpunk skyline */}
      <div className="absolute inset-0 z-0">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary to-[#0d1520]" />

        {/* Skyline silhouette SVG */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ height: "40%" }}
        >
          <defs>
            <linearGradient id="skylineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1A1F2E" />
              <stop offset="100%" stopColor="#0A0E17" />
            </linearGradient>
          </defs>
          {/* Buildings */}
          <path
            fill="url(#skylineGrad)"
            d="M0,280 L40,280 L40,180 L80,180 L80,200 L120,200 L120,140 L140,140 L140,160 L180,160 L180,120 L200,120 L200,200 L240,200 L240,100 L260,100 L260,80 L280,80 L280,160 L320,160 L320,200 L360,200 L360,90 L380,90 L380,70 L400,70 L400,180 L440,180 L440,140 L480,140 L480,200 L520,200 L520,60 L540,60 L540,40 L560,40 L560,160 L600,160 L600,200 L640,200 L640,110 L680,110 L680,160 L720,160 L720,50 L740,50 L740,30 L760,30 L760,120 L800,120 L800,180 L840,180 L840,100 L880,100 L880,200 L920,200 L920,70 L940,70 L940,50 L960,50 L960,140 L1000,140 L1000,200 L1040,200 L1040,80 L1060,80 L1060,120 L1100,120 L1100,200 L1140,200 L1140,60 L1160,60 L1160,100 L1200,100 L1200,180 L1240,180 L1240,130 L1280,130 L1280,200 L1320,200 L1320,90 L1360,90 L1360,160 L1400,160 L1400,200 L1440,200 L1440,320 L0,320 Z"
          />
          {/* Window lights */}
          {[120, 260, 380, 540, 740, 940, 1060, 1160, 1320].map((x, i) => (
            <rect
              key={i}
              x={x + 5}
              y={[145, 85, 75, 45, 35, 55, 85, 65, 95][i]}
              width="4"
              height="4"
              fill="#FFE500"
              opacity={0.6}
            >
              <animate
                attributeName="opacity"
                values="0.3;0.8;0.3"
                dur={`${2 + i * 0.3}s`}
                repeatCount="indefinite"
              />
            </rect>
          ))}
        </svg>

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
