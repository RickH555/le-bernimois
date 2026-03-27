import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description: "Découvrez notre carte : burgers artisanaux, tacos généreux, kebabs savoureux, boissons et desserts. Le Bernimois à Bernis (30620).",
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
