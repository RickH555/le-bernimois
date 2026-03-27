export const SITE_NAME = "Le Bernimois";
export const SITE_DESCRIPTION =
  "Le Bernimois, votre snack de quartier. Burgers artisanaux, tacos généreux, kebabs savoureux. Commandez en Click & Collect !";
export const SITE_URL = "https://le-bernimois.vercel.app";

export const PHONE = "+33 4 66 XX XX XX";
export const PHONE_LINK = "tel:+33466XXXXXX";
export const EMAIL = "contact@lebernimois.fr";
export const ADDRESS = {
  street: "XX rue du Centre",
  city: "Bernis",
  postalCode: "30620",
  country: "France",
};
export const FULL_ADDRESS = `${ADDRESS.street}, ${ADDRESS.postalCode} ${ADDRESS.city}`;

export const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5!2d4.285!3d43.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBernis!5e0!3m2!1sfr!2sfr!4v1";

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/lebernimois",
  facebook: "https://facebook.com/lebernimois",
  tiktok: "https://tiktok.com/@lebernimois",
};

export type DaySchedule = {
  day: string;
  lunch: string | null;
  dinner: string | null;
};

export const HOURS: DaySchedule[] = [
  { day: "Lundi", lunch: null, dinner: null },
  { day: "Mardi", lunch: "11h30 - 14h00", dinner: "18h00 - 22h00" },
  { day: "Mercredi", lunch: "11h30 - 14h00", dinner: "18h00 - 22h00" },
  { day: "Jeudi", lunch: "11h30 - 14h00", dinner: "18h00 - 22h00" },
  { day: "Vendredi", lunch: "11h30 - 14h00", dinner: "18h00 - 22h30" },
  { day: "Samedi", lunch: "11h30 - 14h00", dinner: "18h00 - 22h30" },
  { day: "Dimanche", lunch: "11h30 - 14h00", dinner: "18h00 - 21h30" },
];

export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Galerie", href: "/galerie" },
  { label: "Contact", href: "/contact" },
];

export function isOpen(): { open: boolean; nextOpen: string } {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const time = hours * 60 + minutes;

  // Closed Monday (day 1)
  if (day === 1) return { open: false, nextOpen: "Mardi 11h30" };

  // Lunch: 11:30-14:00 (690-840)
  // Dinner varies: 18:00-22:00/22:30/21:30
  const lunchStart = 690;
  const lunchEnd = 840;
  const dinnerStart = 1080;

  let dinnerEnd = 1320; // 22:00 default
  if (day === 5 || day === 6) dinnerEnd = 1350; // Fri/Sat 22:30
  if (day === 0) dinnerEnd = 1290; // Sun 21:30

  if ((time >= lunchStart && time < lunchEnd) || (time >= dinnerStart && time < dinnerEnd)) {
    return { open: true, nextOpen: "" };
  }

  if (time < lunchStart) return { open: false, nextOpen: "Aujourd'hui 11h30" };
  if (time >= lunchEnd && time < dinnerStart) return { open: false, nextOpen: "Aujourd'hui 18h00" };

  // After dinner
  const dayNames = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  const nextDay = (day + 1) % 7;
  if (nextDay === 1) return { open: false, nextOpen: "Mardi 11h30" };
  return { open: false, nextOpen: `${dayNames[nextDay]} 11h30` };
}

export function getPickupSlots(): string[] {
  const now = new Date();
  const slots: string[] = [];
  const start = new Date(now);

  // Round up to next 15 min + 20 min prep
  start.setMinutes(Math.ceil((start.getMinutes() + 20) / 15) * 15);
  start.setSeconds(0);

  for (let i = 0; i < 12; i++) {
    const slot = new Date(start.getTime() + i * 15 * 60000);
    const h = slot.getHours();
    const m = slot.getMinutes().toString().padStart(2, "0");
    slots.push(`${h}h${m}`);
  }

  return slots;
}
