"use client";
import { useState } from "react";
import FadeUp from "./ui/FadeUp";

const faqs = [
  {
    question: "Quels sont vos délais réels de Guangzhou à Abidjan ?",
    answer:
      "En fret maritime standard (FCL ou LCL), comptez 30 à 45 jours de transit, incluant le chargement en Chine, la traversée et le dédouanement au Port d'Abidjan. En urgence, nous proposons du fret aérien pour les petits volumes avec un délai de 5 à 8 jours.",
  },
  {
    question: "Comment fonctionne le paiement ? Est-ce sécurisé ?",
    answer:
      "Nous travaillons en système d'escrow (séquestre) : vous payez sur un compte tiers sécurisé. Les fonds ne sont libérés au fournisseur qu'après notre inspection qualité sur site et votre validation. Aucun paiement final n'est effectué avant que la marchandise soit conforme.",
  },
  {
    question: "Que se passe-t-il si la marchandise est non conforme ?",
    answer:
      "Phoenix engage directement les recours auprès du fabricant : renvoi de la marchandise, remplacement aux frais du fournisseur, ou remboursement intégral via l'escrow. Notre contrat bilingue franco-chinois prévoit des clauses de pénalité claires pour tout écart aux spécifications validées.",
  },
  {
    question: "Puis-je commander de petites quantités ?",
    answer:
      "Oui. Nous gérons aussi bien les commandes LCL (groupage de conteneur) pour les petits volumes que les FCL (conteneur complet 20' ou 40') pour les volumes importants. Le minimum de commande varie selon le produit — contactez-nous pour une évaluation.",
  },
  {
    question: "Quels incoterms proposez-vous ?",
    answer:
      "Nous proposons FOB (départ port Guangzhou/Shenzhen), CIF (coût + assurance + fret jusqu'à votre port) et DDP (livraison droits acquittés, tout inclus jusqu'à votre entrepôt). La majorité de nos clients choisissent le CIF pour sa simplicité.",
  },
  {
    question: "Avez-vous des guaranties sur la qualité des fournisseurs ?",
    answer:
      "Tous nos fournisseurs sont présélectionnés après audit physique de leur usine. Nous vérifions les certifications (ISO, CE, SGS selon produit), la capacité de production et les références export. Aucun fabricant non audité n'entre dans notre réseau.",
  },
  {
    question: "Est-ce que vous pouvez gérer le dédouanement en Côte d'Ivoire ?",
    answer:
      "Oui. Nous travaillons avec des commissionnaires en douane agréés à Abidjan. Nous prenons en charge toute la documentation (Bill of Lading, certificat d'origine, facture commerciale, packing list) et gérons les procédures douanières CIF/DDP jusqu'à votre entrepôt.",
  },
  {
    question: "Intervenez-vous dans d'autres pays d'Afrique de l'Ouest ?",
    answer:
      "Oui. En plus d'Abidjan (port principal), nous desservons Dakar (Sénégal), Lomé (Togo), Cotonou (Bénin) et Conakry (Guinée). Contactez-nous pour les délais et conditions spécifiques à votre pays.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
              Questions Fréquentes
            </span>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-secondary">
              Tout ce que vous devez savoir
              <br />
              <span className="italic text-primary">avant de commander.</span>
            </h2>
          </div>
        </FadeUp>

        <div className="divide-y divide-gray-100">
          {faqs.map((faq, i) => (
            <div key={i} className="py-6">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 text-left group"
              >
                <span className="font-display font-bold text-lg text-secondary group-hover:text-primary transition-colors duration-300">
                  {faq.question}
                </span>
                <span
                  className={`material-symbols-outlined text-primary shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                >
                  expand_more
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  open === i ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-500 leading-relaxed text-base border-l-4 border-primary pl-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm mb-6">
            Vous n'avez pas trouvé votre réponse ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-secondary text-white font-bold text-sm uppercase tracking-[0.3em] hover:bg-primary transition-colors duration-500 rounded-sm"
          >
            Posez-nous directement
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
