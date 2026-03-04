import FadeUp from "./ui/FadeUp";
import { StaggerGroup, StaggerItem } from "./ui/StaggerGroup";

const steps = [
  {
    num: 1,
    tag: "J+0 — J+2",
    label: "Consultation",
    desc: "Analyse de vos besoins, définition du cahier des charges et devis sous 48h.",
  },
  {
    num: 2,
    tag: "J+3 — J+10",
    label: "Sourcing",
    desc: "Sélection et mise en concurrence des fabricants certifiés sur site en Chine.",
  },
  {
    num: 3,
    tag: "J+15 — J+25",
    label: "Contrôle",
    desc: "Inspection qualité physique par nos agents. Paiement final libéré après validation.",
  },
  {
    num: 4,
    tag: "J+30 — J+45",
    label: "Livraison",
    desc: "Transit maritime, dédouanement et livraison à votre entrepôt en Afrique de l'Ouest.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white dark:bg-background-dark" id="process">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
            Notre Processus
          </h2>
          <h3 className="text-4xl font-display font-bold text-secondary dark:text-white">
            Votre sourcing en 4 étapes simples
          </h3>
        </FadeUp>
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s) => (
            <StaggerItem key={s.num}>
              <div className="relative text-center group">
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:bg-primary transition-colors duration-300">
                  {s.num}
                </div>
                <span className="inline-block text-[10px] uppercase tracking-widest font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                  {s.tag}
                </span>
                <h4 className="font-bold mb-2">{s.label}</h4>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
