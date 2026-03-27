import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Le Bernimois — Burgers, Tacos, Kebabs",
  description:
    "Le Bernimois, votre snack de quartier. Burgers artisanaux, tacos généreux, kebabs savoureux. Commandez en Click & Collect et venez retirer votre commande !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
