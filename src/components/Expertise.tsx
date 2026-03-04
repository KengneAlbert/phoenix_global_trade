import FadeUp from "./ui/FadeUp";
import { StaggerGroup, StaggerItem } from "./ui/StaggerGroup";

export default function Expertise() {
  return (
    <section
      className="py-24 bg-background-light dark:bg-background-dark"
      id="expertise"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
                Secteurs Stratégiques
              </span>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-navy-deep">
                Notre Expertise Industrielle
              </h2>
            </div>
            <div className="mt-8 md:mt-0">
              <a
                className="group flex items-center gap-3 text-sm font-bold text-navy-deep uppercase tracking-widest"
                href="#contact"
              >
                Catalogue Complet
                <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </FadeUp>
        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <StaggerItem>
            <div className="group bg-white border border-gray-100 p-10 hover:bg-navy-deep transition-all duration-500 rounded-sm shadow-sm hover:shadow-2xl h-full">
              <span className="material-symbols-outlined text-primary text-5xl mb-8 block group-hover:scale-110 transition-transform">
                construction
              </span>
              <h4 className="font-display font-bold text-2xl group-hover:text-white mb-4">
                Construction & Matériaux
              </h4>
              <ul className="text-gray-400 mt-2 text-xs space-y-1 opacity-0 group-hover:opacity-100 [@media(hover:none)]:opacity-100 transition-opacity group-hover:text-white/60">
                <li>→ Ciment, fer à béton, acier</li>
                <li>→ Carrelage & sanitaires</li>
                <li>→ Portes, fenêtres, vitrage</li>
                <li>→ Structures métalliques</li>
              </ul>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="group bg-white border border-gray-100 p-10 hover:bg-navy-deep transition-all duration-500 rounded-sm shadow-sm hover:shadow-2xl h-full">
              <span className="material-symbols-outlined text-primary text-5xl mb-8 block group-hover:scale-110 transition-transform">
                precision_manufacturing
              </span>
              <h4 className="font-display font-bold text-2xl group-hover:text-white mb-4">
                Engins Industriels
              </h4>
              <ul className="text-gray-400 mt-2 text-xs space-y-1 opacity-0 group-hover:opacity-100 [@media(hover:none)]:opacity-100 transition-opacity group-hover:text-white/60">
                <li>→ Chargeuses & pelles mécaniques</li>
                <li>→ Grues & matériel de levage</li>
                <li>→ Générateurs & compresseurs</li>
                <li>→ Chariots élévateurs</li>
              </ul>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="group bg-white border border-gray-100 p-10 hover:bg-navy-deep transition-all duration-500 rounded-sm shadow-sm hover:shadow-2xl h-full">
              <span className="material-symbols-outlined text-primary text-5xl mb-8 block group-hover:scale-110 transition-transform">
                directions_car
              </span>
              <h4 className="font-display font-bold text-2xl group-hover:text-white mb-4">
                Automobile
              </h4>
              <ul className="text-gray-400 mt-2 text-xs space-y-1 opacity-0 group-hover:opacity-100 [@media(hover:none)]:opacity-100 transition-opacity group-hover:text-white/60">
                <li>→ Pièces détachées toutes marques</li>
                <li>→ Pneumatiques & batteries</li>
                <li>→ Véhicules utilitaires & flottes</li>
                <li>→ Huiles moteur & consommables</li>
              </ul>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="group bg-white border border-gray-100 p-10 hover:bg-navy-deep transition-all duration-500 rounded-sm shadow-sm hover:shadow-2xl h-full">
              <span className="material-symbols-outlined text-primary text-5xl mb-8 block group-hover:scale-110 transition-transform">
                agriculture
              </span>
              <h4 className="font-display font-bold text-2xl group-hover:text-white mb-4">
                Agriculture
              </h4>
              <ul className="text-gray-400 mt-2 text-xs space-y-1 opacity-0 group-hover:opacity-100 [@media(hover:none)]:opacity-100 transition-opacity group-hover:text-white/60">
                <li>→ Engrais & intrants agricoles</li>
                <li>→ Tracteurs & motoculteurs</li>
                <li>→ Systèmes d&#39;irrigation</li>
                <li>→ Équipements de récolte</li>
              </ul>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="group bg-white border border-gray-100 p-10 hover:bg-navy-deep transition-all duration-500 rounded-sm shadow-sm hover:shadow-2xl h-full">
              <span className="material-symbols-outlined text-primary text-5xl mb-8 block group-hover:scale-110 transition-transform">
                medical_services
              </span>
              <h4 className="font-display font-bold text-2xl group-hover:text-white mb-4">
                Équipements Médicaux
              </h4>
              <ul className="text-gray-400 mt-2 text-xs space-y-1 opacity-0 group-hover:opacity-100 [@media(hover:none)]:opacity-100 transition-opacity group-hover:text-white/60">
                <li>→ Matériel hospitalier</li>
                <li>→ Consommables médicaux</li>
                <li>→ Équipements de diagnostic</li>
                <li>→ Mobilier & aménagement médical</li>
              </ul>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="group bg-white border border-gray-100 p-10 hover:bg-navy-deep transition-all duration-500 rounded-sm shadow-sm hover:shadow-2xl h-full">
              <span className="material-symbols-outlined text-primary text-5xl mb-8 block group-hover:scale-110 transition-transform">
                diamond
              </span>
              <h4 className="font-display font-bold text-2xl group-hover:text-white mb-4">
                Mines & Pétrole
              </h4>
              <ul className="text-gray-400 mt-2 text-xs space-y-1 opacity-0 group-hover:opacity-100 [@media(hover:none)]:opacity-100 transition-opacity group-hover:text-white/60">
                <li>→ Équipements d&apos;extraction</li>
                <li>→ Matériel de forage & prospection</li>
                <li>→ Sécurité minière & EPI</li>
                <li>→ Chimie industrielle</li>
              </ul>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="group bg-white border border-gray-100 p-10 hover:bg-navy-deep transition-all duration-500 rounded-sm shadow-sm hover:shadow-2xl h-full">
              <span className="material-symbols-outlined text-primary text-5xl mb-8 block group-hover:scale-110 transition-transform">
                home
              </span>
              <h4 className="font-display font-bold text-2xl group-hover:text-white mb-4">
                Maison & Bureau
              </h4>
              <ul className="text-gray-400 mt-2 text-xs space-y-1 opacity-0 group-hover:opacity-100 [@media(hover:none)]:opacity-100 transition-opacity group-hover:text-white/60">
                <li>→ Mobilier & ameublement</li>
                <li>→ Électroménager</li>
                <li>→ Fournitures de bureau</li>
                <li>→ Décoration & art de vivre</li>
              </ul>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
