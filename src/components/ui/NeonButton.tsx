"use client";

import { motion } from "framer-motion";

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "pink" | "cyan" | "yellow";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit";
}

const variantStyles = {
  pink: {
    bg: "bg-neon-pink",
    text: "text-white",
    shadow: "shadow-[0_0_20px_rgba(255,45,120,0.5)]",
    hoverShadow: "hover:shadow-[0_0_35px_rgba(255,45,120,0.7)]",
    border: "border-neon-pink",
  },
  cyan: {
    bg: "bg-neon-cyan",
    text: "text-bg-primary",
    shadow: "shadow-[0_0_20px_rgba(0,240,255,0.5)]",
    hoverShadow: "hover:shadow-[0_0_35px_rgba(0,240,255,0.7)]",
    border: "border-neon-cyan",
  },
  yellow: {
    bg: "bg-neon-yellow",
    text: "text-bg-primary",
    shadow: "shadow-[0_0_20px_rgba(255,229,0,0.5)]",
    hoverShadow: "hover:shadow-[0_0_35px_rgba(255,229,0,0.7)]",
    border: "border-neon-yellow",
  },
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function NeonButton({
  children,
  onClick,
  href,
  variant = "pink",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
}: NeonButtonProps) {
  const v = variantStyles[variant];
  const s = sizeStyles[size];

  const baseClasses = `
    relative inline-flex items-center justify-center gap-2
    font-display font-bold uppercase tracking-wider
    ${v.bg} ${v.text} ${v.shadow} ${v.hoverShadow}
    border ${v.border}
    rounded-sm
    transition-all duration-300
    ${s}
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    overflow-hidden
    ${className}
  `;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <span
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: "linear-gradient(transparent 50%, rgba(255,255,255,0.05) 50%)",
          backgroundSize: "100% 4px",
        }}
        aria-hidden="true"
      />
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      {content}
    </motion.button>
  );
}
