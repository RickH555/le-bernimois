import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Horaires",
  description: "Retrouvez Le Bernimois à Bernis (30620). Horaires d'ouverture, adresse, téléphone et formulaire de contact.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
