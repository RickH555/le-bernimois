import type { Metadata } from "next";
import "@/styles/globals.css";
import ClientLayout from "@/components/layout/ClientLayout";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Burgers, Tacos, Kebabs à Bernis`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Le Bernimois",
    "snack Bernis",
    "burger Bernis",
    "tacos Bernis",
    "kebab Bernis",
    "click and collect",
    "commande en ligne",
    "fast food Bernis",
    "restaurant Bernis",
    "30620",
  ],
  authors: [{ name: SITE_NAME }],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: `${SITE_NAME} — Burgers, Tacos, Kebabs à Bernis`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Burgers, Tacos, Kebabs`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: "+33466XXXXXX",
    address: {
      "@type": "PostalAddress",
      streetAddress: "XX rue du Centre",
      addressLocality: "Bernis",
      postalCode: "30620",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.76,
      longitude: 4.285,
    },
    servesCuisine: ["Burgers", "Tacos", "Kebabs", "Fast Food"],
    priceRange: "€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
        opens: "11:30",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
        opens: "18:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "11:30",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "18:00",
        closes: "22:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "11:30",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "18:00",
        closes: "21:30",
      },
    ],
    hasMenu: {
      "@type": "Menu",
      url: `${SITE_URL}/menu`,
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Burgers",
          hasMenuItem: [
            { "@type": "MenuItem", name: "Le Bernimois", description: "Double steak, cheddar fondu, sauce maison, oignons caramélisés, bacon", offers: { "@type": "Offer", price: "9.50", priceCurrency: "EUR" } },
            { "@type": "MenuItem", name: "Classic Burger", offers: { "@type": "Offer", price: "6.50", priceCurrency: "EUR" } },
          ],
        },
        {
          "@type": "MenuSection",
          name: "Tacos",
          hasMenuItem: [
            { "@type": "MenuItem", name: "Tacos Cordon Bleu", description: "Cordon bleu, frites, fromage fondu, sauce algérienne", offers: { "@type": "Offer", price: "8.50", priceCurrency: "EUR" } },
          ],
        },
        {
          "@type": "MenuSection",
          name: "Kebabs",
          hasMenuItem: [
            { "@type": "MenuItem", name: "Kebab Galette", description: "Viande grillée, salade, tomates, oignons, sauce blanche", offers: { "@type": "Offer", price: "7.50", priceCurrency: "EUR" } },
          ],
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FaqJsonLd() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Comment commander en Click & Collect au Bernimois ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rendez-vous sur notre page Menu, choisissez votre produit, personnalisez-le (formule, sauces, suppléments), ajoutez au panier, puis validez votre commande. Vous recevrez un numéro de commande à présenter au comptoir.",
        },
      },
      {
        "@type": "Question",
        name: "Quels sont les horaires du Bernimois ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous sommes ouverts du mardi au dimanche, le midi de 11h30 à 14h00 et le soir de 18h00 à 22h00 (22h30 vendredi-samedi, 21h30 dimanche). Fermé le lundi.",
        },
      },
      {
        "@type": "Question",
        name: "Où se trouve Le Bernimois ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le Bernimois est situé rue du Centre à Bernis (30620), dans le Gard. Retrouvez-nous sur Google Maps depuis notre page Contact.",
        },
      },
      {
        "@type": "Question",
        name: "Le Bernimois propose-t-il des options végétariennes ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui ! Nous proposons un Veggie Burger avec galette de légumes, avocat et roquette. D'autres options peuvent être adaptées sur demande.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <JsonLd />
        <FaqJsonLd />
      </head>
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
