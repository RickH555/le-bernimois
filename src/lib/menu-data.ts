export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  emoji: string;
}

export const categories: MenuCategory[] = [
  { id: "burgers", name: "Burgers", emoji: "🍔" },
  { id: "tacos", name: "Tacos", emoji: "🌮" },
  { id: "kebabs", name: "Kebabs", emoji: "🥙" },
  { id: "boissons", name: "Boissons", emoji: "🥤" },
  { id: "desserts", name: "Desserts", emoji: "🍩" },
];

export const menuItems: MenuItem[] = [
  // ─── BURGERS (6 images uniques) ───
  {
    id: "burger-classic",
    name: "Classic Burger",
    description: "Steak haché, salade, tomate, oignon, sauce ketchup-mayo",
    price: 6.50,
    category: "burgers",
    image: "/images/menu/burger-2.jpg",       // classic burger salade tomate planche bois
  },
  {
    id: "burger-cheese",
    name: "Cheese Burger",
    description: "Steak haché, double cheddar fondu, cornichons, sauce burger",
    price: 7.50,
    category: "burgers",
    image: "/images/menu/burger.jpg",          // double cheeseburger cheddar ardoise
  },
  {
    id: "burger-bernimois",
    name: "Le Bernimois",
    description: "Double steak, cheddar fondu, sauce maison, oignons caramélisés, bacon",
    price: 9.50,
    category: "burgers",
    image: "/images/menu/burger.jpg",          // double cheeseburger bacon (le flagship)
    popular: true,
  },
  {
    id: "burger-chicken",
    name: "Chicken Burger",
    description: "Filet de poulet pané, salade, tomate, sauce mayo-curry",
    price: 7.50,
    category: "burgers",
    image: "/images/menu/chicken-burger.jpg",  // poulet pané sauce curry
  },
  {
    id: "burger-double",
    name: "Double Smash",
    description: "Double steak smashé, american cheese, oignons grillés, sauce spéciale",
    price: 10.50,
    category: "burgers",
    image: "/images/menu/bbq-burger.jpg",      // double steak onion rings sauce
  },
  {
    id: "burger-bbq",
    name: "BBQ Burger",
    description: "Steak haché, cheddar, oignons rings, sauce BBQ fumée",
    price: 8.50,
    category: "burgers",
    image: "/images/menu/bbq-burger.jpg",      // BBQ sauce onion rings
  },
  {
    id: "burger-veggie",
    name: "Veggie Burger",
    description: "Galette de légumes, avocat, roquette, sauce yaourt-citron",
    price: 8.00,
    category: "burgers",
    image: "/images/menu/veggie-burger.jpg",   // veggie avocat roquette
  },
  {
    id: "burger-fish",
    name: "Fish Burger",
    description: "Filet de poisson pané, salade, tartare maison, citron",
    price: 8.00,
    category: "burgers",
    image: "/images/menu/fish-burger.jpg",     // fish pané tartare citron
  },

  // ─── TACOS (6 images uniques) ───
  {
    id: "tacos-classique",
    name: "Tacos Classique",
    description: "Viande au choix, frites, fromage, sauce au choix",
    price: 6.50,
    category: "tacos",
    image: "/images/menu/tacos.jpg",           // tacos coupé fromage frites
  },
  {
    id: "tacos-cordon-bleu",
    name: "Tacos Cordon Bleu",
    description: "Cordon bleu, frites, fromage fondu, sauce algérienne",
    price: 8.50,
    category: "tacos",
    image: "/images/menu/tacos-cordon-bleu.jpg", // cordon bleu coupé fromage frites
    popular: true,
  },
  {
    id: "tacos-mixte",
    name: "Tacos Mixte",
    description: "Viande + poulet, frites, fromage, sauce blanche et algérienne",
    price: 8.00,
    category: "tacos",
    image: "/images/menu/tacos-2.jpg",         // tacos XL grillé fromage coulant + frites
  },
  {
    id: "tacos-nuggets",
    name: "Tacos Nuggets",
    description: "Nuggets de poulet, frites, fromage, sauce BBQ",
    price: 7.50,
    category: "tacos",
    image: "/images/menu/tacos-nuggets.jpg",   // nuggets frites sauce BBQ wrap
  },
  {
    id: "tacos-xl",
    name: "Tacos XL",
    description: "Double viande, double frites, triple fromage, 2 sauces au choix",
    price: 11.00,
    category: "tacos",
    image: "/images/menu/tacos-2.jpg",         // XL grillé fromage coulant
  },
  {
    id: "tacos-gratine",
    name: "Tacos Gratiné",
    description: "Viande, frites, fromage gratiné au four, sauce fromagère",
    price: 9.00,
    category: "tacos",
    image: "/images/menu/tacos-gratine.jpg",   // gratinés au four fromage bulle
  },

  // ─── KEBABS (5 images uniques) ───
  {
    id: "kebab-galette",
    name: "Kebab Galette",
    description: "Viande grillée, salade, tomates, oignons, sauce blanche",
    price: 7.50,
    category: "kebabs",
    image: "/images/menu/kebab.jpg",           // galette wrap sauce blanche
    popular: true,
  },
  {
    id: "kebab-assiette",
    name: "Assiette Kebab",
    description: "Viande grillée, frites, salade composée, sauce au choix",
    price: 10.00,
    category: "kebabs",
    image: "/images/menu/kebab-2.jpg",         // assiette frites salade
  },
  {
    id: "kebab-durum",
    name: "Durum",
    description: "Viande grillée en wrap, crudités, sauce blanche-harissa",
    price: 7.00,
    category: "kebabs",
    image: "/images/menu/durum.jpg",           // durum wrap harissa blanche
  },
  {
    id: "kebab-poulet",
    name: "Kebab Poulet",
    description: "Poulet mariné grillé, salade, tomates, sauce curry",
    price: 7.50,
    category: "kebabs",
    image: "/images/menu/kebab-poulet.jpg",    // poulet grillé sauce curry
  },
  {
    id: "kebab-xl",
    name: "Kebab XL",
    description: "Double viande, double garniture, frites dans le pain, 2 sauces",
    price: 9.50,
    category: "kebabs",
    image: "/images/menu/durum.jpg",           // durum XL double (même style wrap XL)
  },

  // ─── BOISSONS (4 images uniques) ───
  {
    id: "boisson-coca",
    name: "Coca-Cola 33cl",
    description: "Coca-Cola classique en canette",
    price: 2.00,
    category: "boissons",
    image: "/images/menu/canettes.jpg",        // canettes Coca Fanta Sprite Ice Tea
  },
  {
    id: "boisson-fanta",
    name: "Fanta Orange 33cl",
    description: "Fanta Orange en canette",
    price: 2.00,
    category: "boissons",
    image: "/images/menu/canettes.jpg",
  },
  {
    id: "boisson-sprite",
    name: "Sprite 33cl",
    description: "Sprite en canette",
    price: 2.00,
    category: "boissons",
    image: "/images/menu/canettes.jpg",
  },
  {
    id: "boisson-ice-tea",
    name: "Ice Tea Pêche 33cl",
    description: "Ice Tea saveur pêche en canette",
    price: 2.00,
    category: "boissons",
    image: "/images/menu/canettes.jpg",
  },
  {
    id: "boisson-eau",
    name: "Eau minérale 50cl",
    description: "Eau minérale plate",
    price: 1.50,
    category: "boissons",
    image: "/images/menu/boissons.jpg",        // milkshake jus cola eau citron
  },
  {
    id: "boisson-oasis",
    name: "Oasis Tropical 33cl",
    description: "Oasis goût tropical en canette",
    price: 2.00,
    category: "boissons",
    image: "/images/menu/boissons.jpg",
  },
  {
    id: "boisson-perrier",
    name: "Perrier 33cl",
    description: "Eau gazeuse Perrier",
    price: 2.50,
    category: "boissons",
    image: "/images/menu/boissons.jpg",
  },
  {
    id: "boisson-milkshake",
    name: "Milkshake",
    description: "Vanille, chocolat ou fraise — fait maison",
    price: 4.50,
    category: "boissons",
    image: "/images/menu/boissons-2.jpg",      // milkshakes chocolat vanille caramel
  },

  // ─── DESSERTS (3 images uniques) ───
  {
    id: "dessert-tiramisu",
    name: "Tiramisu Maison",
    description: "Tiramisu crémeux au mascarpone et café",
    price: 4.00,
    category: "desserts",
    image: "/images/menu/desserts.jpg",        // brownie donut tiramisu cookie
  },
  {
    id: "dessert-brownie",
    name: "Brownie Chocolat",
    description: "Brownie fondant aux pépites de chocolat noir",
    price: 3.50,
    category: "desserts",
    image: "/images/menu/desserts.jpg",
  },
  {
    id: "dessert-donut",
    name: "Donut Glacé",
    description: "Donut au glaçage au choix : chocolat, fraise ou caramel",
    price: 2.50,
    category: "desserts",
    image: "/images/menu/desserts.jpg",
  },
  {
    id: "dessert-cookie",
    name: "Cookie Géant",
    description: "Cookie moelleux aux pépites de chocolat",
    price: 2.50,
    category: "desserts",
    image: "/images/menu/desserts.jpg",
  },
  {
    id: "dessert-glace",
    name: "Glace 2 Boules",
    description: "Glace artisanale — parfum au choix",
    price: 3.50,
    category: "desserts",
    image: "/images/menu/desserts-2.jpg",      // glace 2 boules chocolat fraise
  },
];
