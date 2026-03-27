"use client";

import { motion } from "framer-motion";

interface NeonBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: "pink" | "cyan" | "yellow" | "purple" | "multi";
}

const gradients = {
  pink: "from-neon-pink via-neon-pink to-neon-pink",
  cyan: "from-neon-cyan via-neon-cyan to-neon-cyan",
  yellow: "from-neon-yellow via-neon-yellow to-neon-yellow",
  purple: "from-neon-purple via-neon-purple to-neon-purple",
  multi: "from-neon-pink via-neon-cyan to-neon-purple",
};

export default function NeonBorder({
  children,
  className = "",
  color = "multi",
}: NeonBorderProps) {
  return (
    <motion.div
      className={`relative rounded-lg p-[1px] ${className}`}
      whileHover="hover"
    >
      {/* Animated gradient border */}
      <div
        className={`absolute inset-0 rounded-lg bg-gradient-to-r ${gradients[color]} opacity-50 blur-sm transition-opacity duration-300`}
      />
      <motion.div
        className={`absolute inset-0 rounded-lg bg-gradient-to-r ${gradients[color]} opacity-70`}
        variants={{
          hover: { opacity: 1 },
        }}
        style={{
          backgroundSize: "200% 200%",
          animation: "border-rotate 3s linear infinite",
        }}
      />
      {/* Content */}
      <div className="relative rounded-lg bg-bg-card">
        {children}
      </div>
    </motion.div>
  );
}
