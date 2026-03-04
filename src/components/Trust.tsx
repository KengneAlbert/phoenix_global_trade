"use client";
import FadeUp from "./ui/FadeUp";
import { StaggerGroup, StaggerItem } from "./ui/StaggerGroup";
import CountUp from "./ui/CountUp";
import Marquee from "./ui/Marquee";

export default function Trust() {
  return (
    <section className="py-32 bg-[#0a1a31] text-white relative overflow-hidden">
      {/* Decorative Background Stats */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] md:text-[30rem] font-black text-white/[0.02] pointer-events-none select-none tracking-tighter">
        TRUST
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Content Left */}
          <FadeUp className="lg:col-span-7">
            <div className="lg:col-span-7">
              <span className="text-[#e42c33] font-bold tracking-[0.4em] uppercase text-xs mb-8 block">
                La Différence Phoenix
              </span>
              <h2 className="text-6xl md:text-8xl font-display font-bold mb-12 leading-[0.9]">
                Bâtir sur la <br />
                <span
                  className="italic text-transparent"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  Transparence.
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
                <div className="group">
                  <div className="text-5xl font-display font-bold text-[#e42c33] mb-4 flex items-baseline gap-2">
                    <CountUp target={200} />{" "}
                    <span className="text-xl font-normal text-white/40">+</span>
                  </div>
                  <h4 className="text-base font-bold mb-4 uppercase tracking-widest">
                    Unités de Production
                  </h4>
                  <p className="text-white/40 font-light leading-relaxed">
                    Un réseau de fournisseurs audités et certifiés répartis sur
                    tout le territoire chinois.
                  </p>
                </div>
                <div className="group">
                  <div className="text-5xl font-display font-bold text-[#e42c33] mb-4 flex items-baseline gap-2">
                    <CountUp target={10} />{" "}
                    <span className="text-xl font-normal text-white/40">
                      ANS
                    </span>
                  </div>
                  <h4 className="text-base font-bold mb-4 uppercase tracking-widest">
                    Expérience Terrain
                  </h4>
                  <p className="text-white/40 font-light leading-relaxed">
                    Une connaissance approfondie des codes culturels et
                    commerciaux sino-africains.
                  </p>
                </div>
              </div>
              {/* Marquee Ticker */}
              <div className="mt-32 pt-12 border-t border-white/10">
                <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold mb-10">
                  Partenaires Stratégiques
                </p>
                <Marquee
                  items={[
                    "MSC",
                    "MAERSK",
                    "CMA CGM",
                    "COSCO",
                    "DHL",
                    "SGS",
                    "BUREAU VERITAS",
                    "ALIBABA",
                  ]}
                  speed={45}
                  itemClassName="opacity-30 grayscale text-white"
                  className="py-2"
                />
              </div>
            </div>
          </FadeUp>
          {/* Testimonials + Score Right */}
          <StaggerGroup className="lg:col-span-5 flex flex-col gap-6">
            {/* Testimonial 1 */}
            <StaggerItem>
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm relative">
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#e42c33]/20 blur-2xl rounded-full"></div>
                <span className="material-symbols-outlined text-[#e42c33] text-3xl mb-4 block">
                  format_quote
                </span>
                <p className="text-lg font-display italic leading-relaxed mb-6 text-white/90">
                  "Phoenix a révolutionné notre chaîne d'approvisionnement en
                  matériaux de construction. Livraison conforme, zéro surprise."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    KD
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Konan Didier</p>
                    <p className="text-xs text-white/40 uppercase tracking-widest">
                      DG — Groupe Bâtimax, Abidjan
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
            {/* Testimonial 2 */}
            <StaggerItem>
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
                <span className="material-symbols-outlined text-[#e42c33] text-3xl mb-4 block">
                  format_quote
                </span>
                <p className="text-lg font-display italic leading-relaxed mb-6 text-white/90">
                  "Grâce à leur réseau en Chine, on a réduit nos coûts pièces
                  détachées de 38%. Processus transparent du début à la fin."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    AT
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Awa Touré</p>
                    <p className="text-xs text-white/40 uppercase tracking-widest">
                      Responsable Achats — AutoPro Dakar
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
            {/* Testimonial 3 */}
            <StaggerItem>
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
                <span className="material-symbols-outlined text-[#e42c33] text-3xl mb-4 block">
                  format_quote
                </span>
                <p className="text-lg font-display italic leading-relaxed mb-6 text-white/90">
                  "Première commande de panneaux solaires, tout est arrivé
                  inspecté, certifié. Je recommande les yeux fermés."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    MI
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      Moussa Ibrahim
                    </p>
                    <p className="text-xs text-white/40 uppercase tracking-widest">
                      Fondateur — SolarCI, Yamoussoukro
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
            {/* Score */}
            <StaggerItem>
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-xs uppercase tracking-widest font-bold text-white/40">
                    Satisfaction Client
                  </span>
                  <span className="text-4xl font-display font-bold">
                    <CountUp target={98} suffix="%" />
                  </span>
                </div>
                <div className="h-[1px] w-full bg-white/10">
                  <div className="h-[1px] bg-[#e42c33] w-[98%]"></div>
                </div>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
