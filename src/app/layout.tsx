import type { Metadata } from "next";
import "@/styles/globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

export const metadata: Metadata = {
  title: "Le Bernimois — Burgers, Tacos, Kebabs",
  description:
    "Le Bernimois, votre snack de quartier à Bernis. Burgers artisanaux, tacos généreux, kebabs savoureux. Commandez en Click & Collect !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
