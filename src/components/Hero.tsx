"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./ui/MagneticButton";

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], ["0px", "180px"]);
  return (
    <header className="relative min-h-screen bg-navy-deep overflow-hidden flex flex-col justify-center px-6 lg:px-20 pt-24">
      <motion.div
        className="absolute inset-x-0 z-0 -top-[15%] h-[130%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ y: bgY }}
      >
        {/* Dark gradient base */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #000814 0%, #0a1a31 35%, #0d2545 55%, #1a0a18 75%, #000814 100%)",
          }}
        />
        {/* YouTube background video */}
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/7rhnGhnfH1M?autoplay=1&mute=1&loop=1&playlist=7rhnGhnfH1M&controls=0&showinfo=0&rel=0&playsinline=1&disablekb=1&modestbranding=1&iv_load_policy=3"
            allow="autoplay; encrypted-media"
            className="absolute pointer-events-none grayscale brightness-[0.35] contrast-110"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "max(100%, 177.78vh)",
              height: "max(100%, 56.25vw)",
              border: "none",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/40 to-navy-deep/90" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto py-16">
        <div className="max-w-4xl">
          <motion.span
            className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-8 block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
          >
            Import–Export • Chine → Afrique de l&apos;Ouest
          </motion.span>

          <h1 className="text-white font-display text-[clamp(2.5rem,10vw,9rem)] leading-[1.05] font-black tracking-[-0.04em] mb-8 md:mb-12">
            {(
              [
                { words: ["IMPORTATION"], baseDelay: 1.9, extraClass: "" },
                {
                  words: ["S\u00c9CURIS\u00c9E"],
                  baseDelay: 2.05,
                  extraClass: "text-primary",
                },
                {
                  words: ["DEPUIS", "LA", "CHINE"],
                  baseDelay: 2.2,
                  extraClass: "",
                },
              ] as { words: string[]; baseDelay: number; extraClass: string }[]
            ).map(({ words, baseDelay, extraClass }) => (
              <span key={words.join()} className="block">
                {words.map((word, wi) => (
                  <span
                    key={word}
                    className="inline-block overflow-hidden mr-[0.22em] last:mr-0"
                  >
                    <motion.span
                      className={`inline-block ${extraClass}`}
                      initial={{ y: "105%", opacity: 0, filter: "blur(14px)" }}
                      animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.85,
                        delay: baseDelay + wi * 0.1,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 2.35,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <p className="text-gray-300 text-base md:text-xl font-light leading-relaxed max-w-2xl border-l-2 md:border-l-4 border-primary pl-5 md:pl-8">
              Basée à Guangzhou, Phœnix Global Trade Sarl est spécialisée dans
              le sourcing et le trading international. Nous accompagnons
              gouvernements, entreprises, commerçants et investisseurs dans
              l&apos;approvisionnement sécurisé de produits en provenance de
              Chine.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-6 mb-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 2.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <MagneticButton>
              <a
                className="px-8 py-4 sm:px-12 sm:py-6 bg-primary text-white text-xs sm:text-sm font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] hover:bg-red-700 transition-all duration-500 shadow-2xl shadow-red-900/50 rounded-sm border border-white/10 block"
                href="#contact"
              >
                Démarrer le sourcing
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                className="px-8 py-4 sm:px-12 sm:py-6 border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] hover:bg-white hover:text-navy-deep transition-all duration-500 rounded-sm block"
                href="#services"
              >
                Nos Services
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-6 text-white/40 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 2.65,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Délai moyen : 35–45 jours
            </span>
            <span className="hidden sm:block text-white/20">•</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              Devis gratuit sous 48h
            </span>
            <span className="hidden sm:block text-white/20">•</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40 inline-block" />
              200+ fournisseurs qualifiés
            </span>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 right-20 hidden lg:block text-white/20 font-mono text-[10px] tracking-[0.5em] uppercase vertical-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.3, duration: 1 }}
      >
        GUANGZHOU • ABIDJAN • HUB
      </motion.div>
    </header>
  );
}
