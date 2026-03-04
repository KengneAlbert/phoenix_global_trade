import FadeUp from "./ui/FadeUp";
import { StaggerGroup, StaggerItem } from "./ui/StaggerGroup";

export default function Garanties() {
  const garanties = [
    {
      icon: "lock",
      title: "Paiement Escrow Sécurisé",
      description:
        "Vos fonds sont bloqués sur un compte séquestre tiers. Ils ne sont libérés au fournisseur qu'après validation de votre inspection qualité.",
    },
    {
      icon: "verified",
      title: "Inspection Tierce Partie",
      description:
        "Chaque commande est soumise à une inspection physique par nos agents sur site en Chine avant embarquement. Rapport photo fourni.",
    },
    {
      icon: "local_shipping",
      title: "Assurance Cargo Incluse",
      description:
        "Toute marchandise est couverte de l'entrepôt de fabrication jusqu'à votre port de destination (CIF ou CIP selon incoterm choisi).",
    },
    {
      icon: "gavel",
      title: "Contrat Juridique Bilingue",
      description:
        "Chaque transaction est encadrée par un contrat franco-chinois avec clauses de recours, pénalités non-conformité et arbitrage international.",
    },
    {
      icon: "rotate_left",
      title: "Droit de Refus & Recours",
      description:
        "Si la marchandise ne correspond pas aux spécifications validées, Phoenix engage ses propres démarches de recours auprès du fabricant.",
    },
    {
      icon: "support_agent",
      title: "Suivi en Temps Réel",
      description:
        "Tableau de bord dédié : position du conteneur, statut douanier, date d'arrivée estimée. Votre commande n'est jamais dans le noir.",
    },
  ];

  return (
    <section className="py-32 bg-[#fcfaf7]" id="garanties">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
              Votre Protection
            </span>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-secondary">
              Ce qui vous protège,
              <br />
              <span className="italic text-primary">concrètement.</span>
            </h2>
            <p className="text-gray-500 mt-6 max-w-xl mx-auto text-lg font-light">
              "Importation sécurisée" n'est pas un slogan. Voici les mécanismes
              précis qui protègent chaque transaction.
            </p>
          </div>
        </FadeUp>
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {garanties.map((g, i) => (
            <StaggerItem key={i}>
              <div className="group bg-white border border-gray-100 p-10 hover:border-primary/30 hover:shadow-xl transition-all duration-500 rounded-sm h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
                  <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white transition-colors duration-500">
                    {g.icon}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-secondary mb-4">
                  {g.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {g.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
