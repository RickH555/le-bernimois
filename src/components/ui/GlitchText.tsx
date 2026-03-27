"use client";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
}

export default function GlitchText({ text, className = "", as: Tag = "h1" }: GlitchTextProps) {
  return (
    <Tag
      className={`relative font-display font-black ${className}`}
      data-text={text}
    >
      <span className="relative z-10">{text}</span>
      <span
        className="absolute inset-0 font-display font-black opacity-70"
        style={{ animation: "glitch 3s infinite", color: "var(--color-neon-cyan)" }}
        aria-hidden="true"
      >
        {text}
      </span>
      <span
        className="absolute inset-0 font-display font-black opacity-70"
        style={{ animation: "glitch-intense 2.5s infinite reverse", color: "var(--color-neon-pink)" }}
        aria-hidden="true"
      >
        {text}
      </span>
    </Tag>
  );
}
