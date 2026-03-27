import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { SITE_NAME, FULL_ADDRESS, PHONE, PHONE_LINK, SOCIAL_LINKS, HOURS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neon-pink/10 bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Col 1 — Logo + tagline */}
          <div>
            <h3
              className="font-display text-xl font-bold tracking-wider text-neon-cyan"
              style={{ textShadow: "0 0 10px rgba(0, 240, 255, 0.4)" }}
            >
              {SITE_NAME}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Burgers artisanaux, tacos généreux, kebabs savoureux.
              Votre snack de quartier à Bernis.
            </p>
            {/* Social icons */}
            <div className="mt-4 flex gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-text-secondary transition-all duration-300 hover:text-neon-pink hover:drop-shadow-[0_0_8px_rgba(255,45,120,0.6)]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-text-secondary transition-all duration-300 hover:text-neon-cyan hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Horaires résumé */}
          <div>
            <h4 className="mb-3 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-neon-yellow">
              <Clock size={16} />
              Horaires
            </h4>
            <ul className="space-y-1 text-sm text-text-secondary">
              {HOURS.map((h) => (
                <li key={h.day} className="flex justify-between">
                  <span>{h.day}</span>
                  <span className={h.lunch ? "text-text-primary" : "text-neon-pink/60"}>
                    {h.lunch ? `${h.lunch}` : "Fermé"}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-neon-yellow">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-text-secondary">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-neon-pink" />
                <span>{FULL_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-neon-pink" />
                <a href={PHONE_LINK} className="hover:text-neon-cyan transition-colors">
                  {PHONE}
                </a>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/menu"
                className="inline-block rounded-sm border border-neon-pink bg-neon-pink/10 px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-neon-pink transition-all hover:bg-neon-pink hover:text-white hover:shadow-[0_0_20px_rgba(255,45,120,0.4)]"
              >
                Voir le Menu
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-text-secondary">
          <p>© {currentYear} {SITE_NAME}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
