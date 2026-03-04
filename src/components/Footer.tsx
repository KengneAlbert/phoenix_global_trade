"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.jpeg";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Processus", href: "#process" },
  { label: "Garanties", href: "#garanties" },
  { label: "Expertise", href: "#expertise" },
  { label: "À Propos", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_LINKS = [
  { label: "Sourcing Industriel", href: "#services" },
  { label: "Contrôle Qualité", href: "#services" },
  { label: "Logistique & Transit", href: "#services" },
  { label: "Accompagnement Terrain", href: "#services" },
];

const SOCIAL_LINKS = [
  { icon: "share", href: "#", label: "LinkedIn" },
  {
    icon: "mail",
    href: "mailto:phoenixglobaltrade94@gmail.com",
    label: "Email",
  },
  {
    icon: "chat",
    href: "https://wa.me/2250717341431",
    label: "WhatsApp",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleNewsletter(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  }

  return (
    <footer className="relative bg-[#050a14] text-white overflow-hidden">
      {/* Top accent line */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-primary/60 to-transparent" />

      {/* Radial ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-primary/[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-secondary/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-0">
        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-12 gap-y-16 mb-20">
          {/* Col 1: Brand + Newsletter */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <div className="flex items-center gap-4 mb-8 group">
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 bg-primary/10 border border-primary/25 rounded-sm flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <img
                    src={Logo.src}
                    alt="Phoenix Global Trade Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
              </div>
              <div>
                <div className="text-white font-body uppercase text-xs tracking-[0.35em] font-bold leading-tight">
                  PHŒNIX
                </div>
                <div className="text-white/30 font-body uppercase text-[9px] tracking-[0.4em] font-semibold">
                  GLOBAL TRADE
                </div>
              </div>
            </div>

            <p className="text-white/35 leading-relaxed font-light text-sm mb-10 max-w-sm">
              L&apos;ingénierie du sourcing de demain. Une passerelle
              stratégique entre l&apos;excellence industrielle asiatique et les
              ambitions ouest-africaines.
            </p>

            {/* Newsletter */}
            <div className="mb-10">
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-5">
                Newsletter Marché
              </p>
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="thanks"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 text-sm text-white/60"
                  >
                    <span className="material-symbols-outlined text-primary text-lg">
                      check_circle
                    </span>
                    Inscription confirmée — à très bientôt !
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -8 }}
                    onSubmit={handleNewsletter}
                    className="flex gap-0 max-w-sm"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      required
                      className="flex-1 bg-white/5 border border-white/10 border-r-0 px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-primary/50 transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-primary hover:bg-red-700 transition-colors px-5 py-3 text-white disabled:opacity-60 flex items-center justify-center"
                    >
                      {loading ? (
                        <span className="material-symbols-outlined text-sm animate-spin">
                          progress_activity
                        </span>
                      ) : (
                        <span className="material-symbols-outlined text-sm">
                          arrow_forward
                        </span>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
              <p className="text-white/20 text-[10px] mt-3">
                Tendances marché &amp; alertes sourcing — 1 email/mois, sans
                spam.
              </p>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group/social"
                >
                  <span className="material-symbols-outlined text-sm text-white/40 group-hover/social:text-white transition-colors">
                    {icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2">
            <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-8">
              Navigation
            </h5>
            <ul className="space-y-5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/40 hover:text-white text-sm font-medium transition-colors duration-200 flex items-center gap-2 group/link"
                  >
                    <span className="w-3 h-px bg-primary/0 group-hover/link:bg-primary/60 transition-all duration-300 group-hover/link:w-5 shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services + Certifications */}
          <div className="lg:col-span-2">
            <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-8">
              Services
            </h5>
            <ul className="space-y-5">
              {SERVICE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/40 hover:text-white text-sm font-light transition-colors duration-200 leading-snug block"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-white/5">
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-5">
                Certifications
              </p>
              <div className="flex flex-col gap-3 text-[10px] text-white/30 font-bold uppercase tracking-widest">
                {[
                  { dot: "bg-primary/60", text: "ISO 9001 Qualité" },
                  { dot: "bg-primary/60", text: "OAPI Enregistré" },
                  { dot: "bg-green-400/60", text: "SCTP Partenaire" },
                ].map(({ dot, text }) => (
                  <span key={text} className="flex items-center gap-2">
                    <span
                      className={`w-1 h-1 rounded-full ${dot} inline-block`}
                    />
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 4: Guangzhou */}
          <div className="lg:col-span-2 lg:border-l lg:border-white/5 lg:pl-8">
            <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-8">
              Bureau Guangzhou
            </h5>
            <div className="space-y-5 text-sm text-white/40 font-light leading-relaxed">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">
                  location_on
                </span>
                <p>
                  Capital de Conception V1 306B
                  <br />
                  Guangzhou, Guangdong
                  <br />
                  <span className="text-white/20 text-[11px]">
                    China 510000
                  </span>
                </p>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-base shrink-0">
                  phone
                </span>
                <a
                  href="tel:+8613379006030"
                  className="hover:text-white transition-colors font-bold tracking-wide"
                >
                  +86 133 7900 6030
                </a>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-base shrink-0">
                  schedule
                </span>
                <span className="text-xs leading-relaxed">
                  Lun–Ven 9h–18h
                  <br />
                  <span className="text-white/20">GMT+8</span>
                </span>
              </div>
            </div>
          </div>

          {/* Col 5: Abidjan */}
          <div className="lg:col-span-2 lg:border-l lg:border-white/5 lg:pl-8">
            <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-8">
              Bureau Abidjan
            </h5>
            <div className="space-y-5 text-sm text-white/40 font-light leading-relaxed">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">
                  location_on
                </span>
                <p>
                  Abidjan
                  <br />
                  <span className="text-white/20 text-[11px]">
                    Côte d&apos;Ivoire
                  </span>
                </p>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-base shrink-0">
                  phone
                </span>
                <a
                  href="tel:+2250717341431"
                  className="hover:text-white transition-colors font-bold tracking-wide"
                >
                  +225 07 17 34 14 31
                </a>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-base shrink-0">
                  schedule
                </span>
                <span className="text-xs leading-relaxed">
                  Lun–Ven 8h–17h
                  <br />
                  <span className="text-white/20">GMT+0</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/[0.06] py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">
              © 2026 Phoenix Global Trade SARL
            </p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-white/10" />
            <p className="text-[10px] text-white/15 font-medium">
              RCCM CI-ABJ-2019-B-12345
            </p>
          </div>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">
            <a
              className="hover:text-primary transition-colors"
              href="/mentions-legales"
            >
              Mentions Légales
            </a>
            <span className="w-px h-3 bg-white/10" />
            <a
              className="hover:text-primary transition-colors"
              href="/confidentialite"
            >
              Confidentialité
            </a>
            <span className="w-px h-3 bg-white/10" />
            <a className="hover:text-primary transition-colors" href="/cgv">
              CGV
            </a>
          </div>
        </div>

        {/* Watermark signature */}
        <div className="pb-6 flex justify-center overflow-hidden">
          <span
            className="text-white/[0.03] font-display font-black italic text-[80px] md:text-[120px] leading-none select-none"
            aria-hidden="true"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            PHŒNIX
          </span>
        </div>
      </div>
    </footer>
  );
}
