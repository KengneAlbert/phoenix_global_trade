"use client";
import FadeUp from "./ui/FadeUp";
import { StaggerGroup, StaggerItem } from "./ui/StaggerGroup";
import ParallaxImg from "./ui/ParallaxImg";
import TiltCard from "./ui/TiltCard";

export default function Services() {
  return (
    <section className="py-32 bg-[#fcfaf7] text-[#0a1a31]" id="services">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <FadeUp>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <h2 className="font-display text-[clamp(3rem,12vw,9rem)] font-black tracking-tighter leading-none text-secondary">
              SERVICES
              <br />
              <span className="text-[#e42c33]">CLÉS.</span>
            </h2>
            <p className="max-w-xs text-gray-500 uppercase text-[10px] tracking-[0.3em] font-bold leading-loose mb-4">
              Approvisionnement, vérification, négociation et logistique — une
              prise en charge complète depuis Guangzhou.
            </p>
          </div>
        </FadeUp>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
          {/* Card 1 */}
          <StaggerItem>
            <TiltCard
              data-cursor="voir"
              className="group relative overflow-hidden h-[600px] flex flex-col justify-end p-12"
            >
              <ParallaxImg
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop"
                alt="Sourcing"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a31] via-transparent to-transparent"></div>
              <div className="relative z-10">
                <span className="text-[#e42c33] font-display text-4xl font-bold mb-4 block">
                  01.
                </span>
                <h3 className="text-white text-4xl font-display font-bold mb-4 italic">
                  Sourcing & Approvisionnement
                </h3>
                <p className="text-white/60 max-w-sm mb-8 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 font-light">
                  Nous identifions et sélectionnons les meilleurs fournisseurs
                  selon votre cahier des charges, parmi notre réseau de 200+
                  fabricants qualifiés.
                </p>
                <div className="w-12 h-[1px] bg-[#e42c33] group-hover:w-full transition-all duration-700"></div>
              </div>
            </TiltCard>
          </StaggerItem>
          {/* Card 2 (Staggered) */}
          <StaggerItem className="mt-0 md:mt-48">
            <TiltCard
              data-cursor="voir"
              className="group relative overflow-hidden h-[600px] flex flex-col justify-end p-12"
            >
              <ParallaxImg
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop"
                alt="Quality Control"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a31] via-transparent to-transparent"></div>
              <div className="relative z-10">
                <span className="text-[#e42c33] font-display text-4xl font-bold mb-4 block">
                  02.
                </span>
                <h3 className="text-white text-4xl font-display font-bold mb-4 italic">
                  Vérification & Qualité
                </h3>
                <p className="text-white/60 max-w-sm mb-8 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 font-light">
                  Nous effectuons les contrôles nécessaires pour garantir
                  conformité, qualité et fiabilité des produits avant tout
                  embarquement.
                </p>
                <div className="w-12 h-[1px] bg-[#e42c33] group-hover:w-full transition-all duration-700"></div>
              </div>
            </TiltCard>
          </StaggerItem>
          {/* Card 3 */}
          <StaggerItem className="mt-0 md:-mt-48">
            <TiltCard
              data-cursor="voir"
              className="group relative overflow-hidden h-[600px] flex flex-col justify-end p-12"
            >
              <ParallaxImg
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop"
                alt="Negotiation"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a31] via-transparent to-transparent"></div>
              <div className="relative z-10">
                <span className="text-[#e42c33] font-display text-4xl font-bold mb-4 block">
                  03.
                </span>
                <h3 className="text-white text-4xl font-display font-bold mb-4 italic">
                  Négociation & Coûts
                </h3>
                <p className="text-white/60 max-w-sm mb-8 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 font-light">
                  Nous négocions directement avec les fabricants pour obtenir
                  les meilleures conditions tarifaires et optimiser vos coûts
                  d&apos;achat.
                </p>
                <div className="w-12 h-[1px] bg-[#e42c33] group-hover:w-full transition-all duration-700"></div>
              </div>
            </TiltCard>
          </StaggerItem>
          {/* Card 4 */}
          <StaggerItem>
            <TiltCard
              data-cursor="voir"
              className="group relative overflow-hidden h-[600px] flex flex-col justify-end p-12"
            >
              <ParallaxImg
                src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1000&auto=format&fit=crop"
                alt="Logistics"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a31] via-transparent to-transparent"></div>
              <div className="relative z-10">
                <span className="text-[#e42c33] font-display text-4xl font-bold mb-4 block">
                  04.
                </span>
                <h3 className="text-white text-4xl font-display font-bold mb-4 italic">
                  Suivi Logistique
                </h3>
                <p className="text-white/60 max-w-sm mb-8 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 font-light">
                  Nous assurons le suivi de la production jusqu&apos;à la
                  livraison finale vers votre destination, du conteneur en Chine
                  au dédouanement.
                </p>
                <div className="w-12 h-[1px] bg-[#e42c33] group-hover:w-full transition-all duration-700"></div>
              </div>
            </TiltCard>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
