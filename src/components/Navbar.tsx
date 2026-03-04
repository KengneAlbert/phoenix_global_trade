"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Processus", href: "#process" },
    { label: "Garanties", href: "#garanties" },
    { label: "Expertise", href: "#expertise" },
    { label: "À Propos", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 border-b transition-all duration-500 ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-xl border-white/8 shadow-2xl shadow-black/40"
          : "bg-navy-deep/60 backdrop-blur-md border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-16" : "h-24"
          }`}
        >
          {/* ── Brand ── */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="relative">
              <Image
                src={Logo}
                alt="Phoenix Global Trade"
                width={scrolled ? 36 : 44}
                height={scrolled ? 36 : 44}
                className="rounded-full object-cover transition-all duration-500 ring-1 ring-white/10 group-hover:ring-primary/40"
                priority
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-primary rounded-full ring-2 ring-navy-deep" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-display italic font-black tracking-[-0.02em] text-base group-hover:text-primary transition-colors duration-300">
                Phœnix
              </span>
              <span className="text-white/35 font-body uppercase text-[8px] tracking-[0.45em] font-bold mt-0.5">
                Global Trade
              </span>
            </div>
          </a>

          {/* ── Desktop nav ── */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => {
              const isActive = activeSection === l.href.replace("#", "");
              return (
                <a
                  key={l.href}
                  className={`relative text-[10px] uppercase tracking-[0.3em] font-bold transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:bg-primary after:transition-transform after:duration-300 ${
                    isActive
                      ? "text-white after:scale-x-100"
                      : "text-white/55 hover:text-white after:scale-x-0 hover:after:scale-x-100"
                  }`}
                  href={l.href}
                >
                  {l.label}
                </a>
              );
            })}
          </div>

          {/* ── CTA + mobile toggle ── */}
          <div className="flex items-center gap-4">
            <a
              className="hidden md:block px-6 py-2.5 bg-primary text-[10px] uppercase tracking-[0.3em] font-bold text-white rounded-sm hover:bg-red-700 transition-colors duration-300 shadow-lg shadow-red-900/25 shrink-0"
              href="#contact"
            >
              Démarrer
            </a>
            <button
              className="lg:hidden text-white/70 hover:text-white transition-colors p-1"
              aria-label="Ouvrir le menu"
              onClick={() => setOpen(!open)}
            >
              <span className="material-symbols-outlined text-xl">
                {open ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        className={`lg:hidden bg-navy-deep/98 backdrop-blur-xl border-t border-white/5 overflow-hidden transition-all duration-500 ${
          open ? "max-h-screen py-8" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 gap-1">
          {links.map((l) => {
            const isActive = activeSection === l.href.replace("#", "");
            return (
              <a
                key={l.href}
                className={`text-[11px] uppercase tracking-[0.3em] font-bold transition-colors duration-200 py-3 border-b border-white/5 flex items-center justify-between ${
                  isActive ? "text-primary" : "text-white/50 hover:text-white"
                }`}
                href={l.href}
                onClick={() => setOpen(false)}
              >
                {l.label}
                <span
                  className={`material-symbols-outlined text-sm ${
                    isActive ? "text-primary" : "text-white/20"
                  }`}
                >
                  arrow_forward
                </span>
              </a>
            );
          })}
          <a
            className="mt-4 px-8 py-4 bg-primary text-[11px] uppercase tracking-[0.3em] font-bold text-white rounded-sm hover:bg-red-700 transition-colors duration-300 text-center shadow-lg shadow-red-900/20"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Démarrer le sourcing
          </a>
        </div>
      </div>
    </nav>
  );
}
