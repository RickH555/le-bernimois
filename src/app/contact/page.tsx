"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import NeonButton from "@/components/ui/NeonButton";
import NeonBorder from "@/components/ui/NeonBorder";
import {
  FULL_ADDRESS,
  PHONE,
  PHONE_LINK,
  EMAIL,
  HOURS,
  GOOGLE_MAPS_EMBED,
  isOpen,
} from "@/lib/constants";

export default function ContactPage() {
  const [formSent, setFormSent] = useState(false);
  const status = isOpen();
  const today = new Date().getDay();
  const dayNames = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  const todayName = dayNames[today];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="min-h-screen px-4 py-8">
      <ScrollReveal>
        <h1
          className="text-center font-display text-3xl font-bold tracking-wider text-neon-yellow sm:text-4xl"
          style={{ textShadow: "0 0 15px rgba(255, 229, 0, 0.3)" }}
        >
          CONTACT
        </h1>
      </ScrollReveal>

      <div className="mx-auto mt-10 max-w-6xl grid gap-8 lg:grid-cols-2">
        {/* Left — Map + infos */}
        <div className="space-y-6">
          {/* Map */}
          <ScrollReveal>
            <div className="overflow-hidden rounded-lg border border-white/10">
              <iframe
                src={GOOGLE_MAPS_EMBED}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Le Bernimois — Google Maps"
              />
            </div>
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-neon-pink" />
                <span className="text-sm text-text-secondary">{FULL_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-neon-pink" />
                <a href={PHONE_LINK} className="text-sm text-text-secondary hover:text-neon-cyan transition-colors">
                  {PHONE}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-neon-pink" />
                <a href={`mailto:${EMAIL}`} className="text-sm text-text-secondary hover:text-neon-cyan transition-colors">
                  {EMAIL}
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Hours */}
          <ScrollReveal delay={0.2}>
            <NeonBorder color="cyan">
              <div className="p-5">
                <h2 className="mb-4 flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-neon-cyan">
                  <Clock size={16} />
                  Horaires d&apos;ouverture
                </h2>

                {/* Open/Closed indicator */}
                <div className="mb-4 flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      status.open ? "bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]" : "bg-neon-pink shadow-[0_0_8px_rgba(255,45,120,0.4)]"
                    }`}
                  />
                  <span className={`text-sm font-semibold ${status.open ? "text-green-400" : "text-neon-pink"}`}>
                    {status.open ? "OUVERT" : "FERMÉ"}
                  </span>
                  {!status.open && (
                    <span className="text-xs text-text-secondary">
                      — Réouverture : {status.nextOpen}
                    </span>
                  )}
                </div>

                <table className="w-full text-sm">
                  <tbody>
                    {HOURS.map((h) => {
                      const isToday = h.day === todayName;
                      return (
                        <tr
                          key={h.day}
                          className={isToday ? "text-neon-cyan" : "text-text-secondary"}
                        >
                          <td className="py-1.5 font-medium">
                            {h.day}
                            {isToday && <span className="ml-1 text-[10px]">●</span>}
                          </td>
                          <td className="py-1.5 text-right">
                            {h.lunch ? (
                              <>
                                {h.lunch}
                                <br />
                                <span className="text-xs">{h.dinner}</span>
                              </>
                            ) : (
                              <span className="text-neon-pink/60">Fermé</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </NeonBorder>
          </ScrollReveal>
        </div>

        {/* Right — Contact form */}
        <ScrollReveal direction="right" delay={0.2}>
          <NeonBorder color="pink">
            <div className="p-6">
              <h2 className="font-display text-lg font-bold tracking-wider text-neon-pink">
                NOUS CONTACTER
              </h2>
              <p className="mt-2 text-sm text-text-secondary">
                Une question ? Un partenariat ? Écrivez-nous !
              </p>

              {formSent ? (
                <div className="mt-8 text-center">
                  <div className="text-4xl">📨</div>
                  <p className="mt-3 font-display text-sm text-neon-cyan">
                    Message envoyé !
                  </p>
                  <p className="mt-1 text-xs text-text-secondary">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="mb-1 block text-xs uppercase tracking-wider text-text-secondary">
                      Nom
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-lg border border-white/10 bg-bg-secondary px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-neon-pink"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs uppercase tracking-wider text-text-secondary">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full rounded-lg border border-white/10 bg-bg-secondary px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-neon-pink"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs uppercase tracking-wider text-text-secondary">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full rounded-lg border border-white/10 bg-bg-secondary px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-neon-pink resize-none"
                      placeholder="Votre message..."
                    />
                  </div>
                  <NeonButton type="submit" variant="pink" size="md" className="w-full">
                    ENVOYER
                  </NeonButton>
                </form>
              )}
            </div>
          </NeonBorder>
        </ScrollReveal>
      </div>
    </div>
  );
}
