import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commander en Click & Collect",
  description: "Composez votre commande en ligne et venez la récupérer au Bernimois. Burgers, tacos, kebabs — prêts en quelques minutes !",
};

export default function CommanderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
