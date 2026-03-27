"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import { FULL_ADDRESS, PHONE, HOURS, GOOGLE_MAPS_EMBED } from "@/lib/constants";

export default function LocationSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <h2
            className="text-center font-display text-3xl font-bold tracking-wider text-neon-purple sm:text-4xl"
            style={{ textShadow: "0 0 15px rgba(184, 77, 255, 0.3)" }}
          >
            O&Ugrave; NOUS TROUVER
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <ScrollReveal direction="left">
            <div className="overflow-hidden rounded-lg border border-white/10">
              <iframe
                src={GOOGLE_MAPS_EMBED}
                width="100%"
                height="350"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Le Bernimois"
              />
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4 rounded-lg border border-white/5 bg-bg-card p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neon-pink/10 text-neon-pink">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-text-primary">
                    Adresse
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">{FULL_ADDRESS}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 rounded-lg border border-white/5 bg-bg-card p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neon-cyan/10 text-neon-cyan">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-text-primary">
                    T&eacute;l&eacute;phone
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">{PHONE}</p>
                </div>
              </div>

              {/* Hours compact */}
              <div className="flex items-start gap-4 rounded-lg border border-white/5 bg-bg-card p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neon-yellow/10 text-neon-yellow">
                  <Clock size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-text-primary">
                    Horaires
                  </h3>
                  <div className="mt-2 space-y-1">
                    {HOURS.map((h) => (
                      <div key={h.day} className="flex justify-between text-xs">
                        <span className={h.lunch ? "text-text-primary" : "text-text-secondary/50"}>
                          {h.day}
                        </span>
                        <span className={h.lunch ? "text-text-secondary" : "text-neon-pink/60"}>
                          {h.lunch ? `${h.lunch} / ${h.dinner}` : "Ferm\u00e9"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
