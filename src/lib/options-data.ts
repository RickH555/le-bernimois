export interface Sauce {
  id: string;
  name: string;
}

export interface Boisson {
  id: string;
  name: string;
  price: number;
}

export interface Supplement {
  id: string;
  name: string;
  price: number;
}

export const sauces: Sauce[] = [
  { id: "sauce-blanche", name: "Sauce Blanche" },
  { id: "sauce-algerienne", name: "Algérienne" },
  { id: "sauce-samourai", name: "Samouraï" },
  { id: "sauce-ketchup", name: "Ketchup" },
  { id: "sauce-mayo", name: "Mayonnaise" },
  { id: "sauce-bbq", name: "BBQ" },
  { id: "sauce-harissa", name: "Harissa" },
  { id: "sauce-curry", name: "Curry" },
  { id: "sauce-fromagere", name: "Fromagère" },
  { id: "sauce-biggy", name: "Biggy Burger" },
];

export const boissons: Boisson[] = [
  { id: "menu-coca", name: "Coca-Cola 33cl", price: 0 },
  { id: "menu-fanta", name: "Fanta Orange 33cl", price: 0 },
  { id: "menu-sprite", name: "Sprite 33cl", price: 0 },
  { id: "menu-ice-tea", name: "Ice Tea Pêche 33cl", price: 0 },
  { id: "menu-oasis", name: "Oasis Tropical 33cl", price: 0 },
  { id: "menu-eau", name: "Eau minérale 50cl", price: 0 },
  { id: "menu-perrier", name: "Perrier 33cl", price: 0.50 },
  { id: "menu-milkshake", name: "Milkshake", price: 2.50 },
];

export const supplements: Supplement[] = [
  { id: "supp-cheddar", name: "Double Cheddar", price: 1.00 },
  { id: "supp-bacon", name: "Bacon", price: 1.50 },
  { id: "supp-oeuf", name: "Oeuf au plat", price: 1.00 },
  { id: "supp-steak", name: "Steak supplémentaire", price: 2.00 },
  { id: "supp-nuggets", name: "Nuggets x5", price: 2.50 },
  { id: "supp-frites", name: "Frites supplémentaires", price: 1.50 },
  { id: "supp-onion-rings", name: "Onion Rings", price: 2.00 },
  { id: "supp-jalapenos", name: "Jalapeños", price: 0.50 },
  { id: "supp-avocat", name: "Avocat", price: 1.50 },
  { id: "supp-cordon-bleu", name: "Cordon Bleu", price: 2.50 },
];
