import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Photos de nos burgers, tacos, kebabs et de l'ambiance au Bernimois. Venez voir nos créations !",
};

export default function GalerieLayout({ children }: { children: React.ReactNode }) {
  return children;
}
