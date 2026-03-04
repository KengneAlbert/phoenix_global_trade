"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "./ui/FadeUp";
import { StaggerGroup, StaggerItem } from "./ui/StaggerGroup";

const PRODUCTS = [
  {
    value: "construction",
    label: "Construction & Matériaux",
    icon: "construction",
  },
  {
    value: "engins",
    label: "Engins Industriels",
    icon: "precision_manufacturing",
  },
  { value: "auto", label: "Automobile & Pièces", icon: "directions_car" },
  { value: "agri", label: "Agriculture", icon: "agriculture" },
  { value: "medical", label: "Équipements Médicaux", icon: "medical_services" },
  { value: "mines", label: "Mines & Pétrole", icon: "diamond" },
];

function CustomSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = PRODUCTS.find((p) => p.value === value);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between gap-3 bg-white/5 border ${
          open ? "border-primary" : "border-white/10 hover:border-white/20"
        } rounded-sm px-5 py-4 text-sm transition-colors duration-200 text-left`}
      >
        <span className={selected ? "text-white" : "text-white/25"}>
          {selected ? selected.label : "Sélectionnez..."}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="material-symbols-outlined text-white/30 text-[18px] shrink-0"
        >
          expand_more
        </motion.span>
      </button>

      {/* Options panel */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -6, scaleY: 0.95 }}
            transition={{ duration: 0.15 }}
            style={{ originY: 0 }}
            className="absolute z-50 top-[calc(100%+6px)] left-0 right-0 bg-[#0d2240] border border-white/10 rounded-sm overflow-hidden shadow-2xl"
          >
            {PRODUCTS.map((p) => (
              <li key={p.value}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(p.value);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center gap-4 px-5 py-3.5 text-sm transition-colors duration-150 ${
                    value === p.value
                      ? "bg-primary/15 text-primary"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px] shrink-0 opacity-60">
                    {p.icon}
                  </span>
                  {p.label}
                  {value === p.value && (
                    <span className="material-symbols-outlined text-[16px] ml-auto text-primary">
                      check
                    </span>
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  product: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const trustItems = [
  { icon: "timer", label: "Réponse sous 48h", sub: "Devis précis garanti" },
  {
    icon: "verified_user",
    label: "200+ Fournisseurs qualifiés",
    sub: "Réseau vérifié & audité",
  },
  {
    icon: "location_on",
    label: "Présence locale en Chine",
    sub: "Bureau à Guangzhou",
  },
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Le nom est requis.";
  if (!data.email.trim()) {
    errors.email = "L'email est requis.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Format invalide.";
  }
  if (!data.message.trim()) errors.message = "Décrivez votre projet.";
  return errors;
}

interface FieldProps {
  id: keyof FormData;
  label: string;
  error?: string;
  children: React.ReactNode;
}
function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/50"
      >
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-[11px] text-red-400 font-semibold flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-sm leading-none">
              error
            </span>
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputCls = (hasError?: string) =>
  `w-full bg-white/5 border ${
    hasError ? "border-red-400/70" : "border-white/10 focus:border-primary"
  } rounded-sm px-5 py-4 text-sm text-white placeholder:text-white/25 focus:outline-none focus:ring-0 transition-colors duration-200`;

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1400));
    setLoading(false);
    setSent(true);
  };

  return (
    <section className="py-32 bg-[#0a1a31]" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          {/* ── Left column ── */}
          <FadeUp>
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-8 block">
              Consultation Gratuite
            </span>
            <h2 className="text-5xl md:text-6xl xl:text-7xl font-display font-black text-white leading-[1.05] mb-8">
              Votre sourcing{" "}
              <span className="italic text-primary">commence</span>
              <br />
              ici.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-16 max-w-sm">
              Confiez votre projet à nos experts basés en Chine. Étude de
              faisabilité et chiffrage précis sous 48h.
            </p>

            <StaggerGroup className="flex flex-col gap-6">
              {trustItems.map((item) => (
                <StaggerItem key={item.icon}>
                  <div className="flex items-center gap-5 group">
                    <div className="shrink-0 w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined text-[20px]">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">
                        {item.label}
                      </p>
                      <p className="text-white/40 text-xs mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>

            {/* Direct contact info */}
            <div className="mt-10 pt-10 border-t border-white/10 flex flex-col gap-5">
              <a
                href="tel:+8613379006030"
                className="flex items-center gap-4 group"
              >
                <span className="material-symbols-outlined text-primary text-xl shrink-0">
                  phone
                </span>
                <span className="text-white/50 text-sm group-hover:text-white transition-colors">
                  +86 133 7900 6030
                  <span className="text-white/25 text-xs ml-2">(Chine)</span>
                </span>
              </a>
              <a
                href="tel:+2250717341431"
                className="flex items-center gap-4 group"
              >
                <span className="material-symbols-outlined text-primary text-xl shrink-0">
                  phone
                </span>
                <span className="text-white/50 text-sm group-hover:text-white transition-colors">
                  +225 07 17 34 14 31
                  <span className="text-white/25 text-xs ml-2">
                    (Côte d&apos;Ivoire)
                  </span>
                </span>
              </a>
              <a
                href="mailto:phoenixglobaltrade94@gmail.com"
                className="flex items-center gap-4 group"
              >
                <span className="material-symbols-outlined text-primary text-xl shrink-0">
                  mail
                </span>
                <span className="text-white/50 text-sm group-hover:text-white transition-colors">
                  phoenixglobaltrade94@gmail.com
                </span>
              </a>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">
                  location_on
                </span>
                <span className="text-white/50 text-sm leading-relaxed">
                  Capital de Conception V1 306B
                  <br />
                  <span className="text-white/30">Guangzhou, Chine</span>
                </span>
              </div>
            </div>
          </FadeUp>

          {/* ── Right column ── */}
          <FadeUp delay={0.15}>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="border border-white/10 rounded-2xl p-8 md:p-12 text-center flex flex-col items-center gap-8"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-4xl">
                      check_circle
                    </span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-white mb-3">
                      Demande envoyée !
                    </h3>
                    <p className="text-white/50 leading-relaxed max-w-xs mx-auto">
                      Merci{" "}
                      <span className="text-white font-semibold">
                        {form.name}
                      </span>
                      . Notre équipe vous contacte sous{" "}
                      <span className="text-primary font-semibold">
                        48 heures
                      </span>
                      .
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        product: "",
                        message: "",
                      });
                    }}
                    className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/30 hover:text-primary transition-colors duration-300"
                  >
                    Nouvelle demande
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col gap-8"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field id="name" label="Nom complet" error={errors.name}>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jean Dupont"
                        className={inputCls(errors.name)}
                      />
                    </Field>
                    <Field
                      id="email"
                      label="Email professionnel"
                      error={errors.email}
                    >
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jean@entreprise.com"
                        className={inputCls(errors.email)}
                      />
                    </Field>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field id="phone" label="WhatsApp / Téléphone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+225 07 00 00 00 00"
                        className={inputCls()}
                      />
                    </Field>
                    <Field id="product" label="Secteur / Produit">
                      <CustomSelect
                        value={form.product}
                        onChange={(v) =>
                          setForm((prev) => ({ ...prev, product: v }))
                        }
                      />
                    </Field>
                  </div>

                  {/* Message */}
                  <Field
                    id="message"
                    label="Détails du projet & quantité estimée"
                    error={errors.message}
                  >
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Ex : 500 tonnes de fer à béton, livraison Abidjan Port, délai 45 jours..."
                      className={`${inputCls(errors.message)} resize-none`}
                    />
                  </Field>

                  {/* Divider */}
                  <div className="border-t border-white/8" />

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6">
                    <p className="text-white/30 text-xs leading-relaxed max-w-50">
                      Réponse garantie sous 48h ouvrables
                    </p>
                    <button
                      type="submit"
                      disabled={loading}
                      className="group inline-flex items-center justify-center gap-4 w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-primary text-white text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-red-700 transition-colors duration-300 rounded-sm shadow-lg shadow-red-900/30 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {loading ? (
                        <>
                          <span>Envoi...</span>
                          <span className="material-symbols-outlined text-base animate-spin">
                            progress_activity
                          </span>
                        </>
                      ) : (
                        <>
                          <span>Envoyer la demande</span>
                          <span className="material-symbols-outlined text-base group-hover:translate-x-1.5 transition-transform duration-300">
                            arrow_forward
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
