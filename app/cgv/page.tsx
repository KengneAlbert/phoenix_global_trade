import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente — Phœnix Global Trade",
  description:
    "Conditions générales de vente et de prestation de services de Phœnix Global Trade SARL.",
};

export default function CGV() {
  return (
    <div className="min-h-screen bg-[#000814] text-white">
      {/* Header */}
      <div className="border-b border-white/5 bg-[#050a14]">
        <div className="max-w-4xl mx-auto px-6 py-8 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/40 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors"
          >
            <span className="material-symbols-outlined text-base">
              arrow_back
            </span>
            Retour
          </Link>
          <span className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase">
            CGV
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-4 tracking-tight">
          Conditions Générales de Vente
        </h1>
        <p className="text-white/30 text-sm mb-16 border-l-2 border-primary pl-4">
          Dernière mise à jour : mars 2026
        </p>

        <div className="space-y-12 text-white/60 leading-relaxed">
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Article 1 — Objet et champ d&apos;application
            </h2>
            <p className="text-sm">
              Les présentes Conditions Générales de Vente (CGV) régissent les
              relations contractuelles entre Phœnix Global Trade SARL et tout
              client souhaitant bénéficier de ses services de sourcing,
              d&apos;approvisionnement, de contrôle qualité, de négociation
              commerciale et de logistique internationale. Toute commande
              implique l&apos;acceptation pleine et entière des présentes CGV.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Article 2 — Services proposés
            </h2>
            <p className="text-sm mb-4">Phœnix Global Trade SARL propose :</p>
            <ul className="text-sm space-y-2 pl-4">
              {[
                "Sourcing & Approvisionnement : identification et sélection de fournisseurs selon cahier des charges client",
                "Vérification & Contrôle Qualité : inspections physiques en Chine avant expédition",
                "Négociation & Optimisation des Coûts : négociation directe avec les fabricants",
                "Suivi Logistique & Expédition : coordination de la production jusqu'à la livraison finale",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Article 3 — Devis et commande
            </h2>
            <p className="text-sm">
              Toute demande de service donne lieu à l&apos;établissement
              d&apos;un devis détaillé, transmis sous 48 heures ouvrables. Le
              devis est valable 30 jours à compter de sa date d&apos;émission.
              La commande est confirmée par la signature du bon de commande et
              le versement de l&apos;acompte stipulé. Phœnix Global Trade SARL
              se réserve le droit de refuser une commande sans avoir à en
              justifier les raisons.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Article 4 — Prix et modalités de paiement
            </h2>
            <div className="text-sm space-y-3">
              <p>
                Les prix sont établis en USD ou en XOF selon accord contractuel,
                hors taxes applicables dans le pays du client.
              </p>
              <p>
                <span className="text-white font-bold">Acompte :</span> 30 % du
                montant total à la signature du bon de commande.
              </p>
              <p>
                <span className="text-white font-bold">Solde :</span> 70 % avant
                expédition, après validation du rapport d&apos;inspection
                qualité.
              </p>
              <p>
                <span className="text-white font-bold">Mode de paiement :</span>{" "}
                virement bancaire international, compte séquestre (escrow) ou
                tout autre mode convenu par écrit.
              </p>
              <p>
                Tout retard de paiement entraîne des pénalités de 1,5 % par mois
                sur les sommes dues, sans mise en demeure préalable.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Article 5 — Délais et livraison
            </h2>
            <p className="text-sm">
              Les délais indicatifs de livraison sont de 35 à 45 jours ouvrables
              à compter de la confirmation de commande, sous réserve des aléas
              logistiques internationaux (congestion portuaire, contrôles
              douaniers, cas de force majeure). Phœnix Global Trade SARL ne peut
              être tenu responsable des retards indépendants de sa volonté. Les
              incoterms applicables (FOB, CIF, CIP, etc.) sont précisés dans
              chaque contrat.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Article 6 — Contrôle qualité et conformité
            </h2>
            <p className="text-sm">
              Phœnix Global Trade SARL effectue une inspection qualité
              systématique avant tout embarquement. Un rapport photographique et
              technique est remis au client. En cas de non-conformité constatée,
              Phœnix Global Trade SARL engage les démarches de recours auprès du
              fabricant selon les clauses contractuelles bilingues
              franco-chinoises. Le client dispose d&apos;un droit de refus de la
              marchandise non-conforme aux spécifications validées.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Article 7 — Responsabilité et assurance
            </h2>
            <p className="text-sm">
              La responsabilité de Phœnix Global Trade SARL est limitée au
              montant des honoraires de prestation facturés. Une assurance cargo
              est incluse sur les expéditions pour la couverture des
              marchandises entre l&apos;entrepôt de fabrication et le port de
              destination. Phœnix Global Trade SARL n&apos;est pas responsable
              des dommages indirects, pertes d&apos;exploitation ou préjudices
              commerciaux subis par le client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Article 8 — Confidentialité
            </h2>
            <p className="text-sm">
              Phœnix Global Trade SARL s&apos;engage à maintenir la stricte
              confidentialité de toutes les informations commerciales et
              techniques communiquées par le client. Cette obligation de
              confidentialité demeure en vigueur pendant toute la durée de la
              relation contractuelle et 3 ans après son terme.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Article 9 — Résiliation
            </h2>
            <p className="text-sm">
              En cas d&apos;annulation par le client après confirmation de
              commande, l&apos;acompte versé est conservé à titre
              d&apos;indemnité forfaitaire si la production a déjà démarré.
              Phœnix Global Trade SARL se réserve le droit de résilier tout
              contrat en cas de manquement grave du client à ses obligations,
              notamment de paiement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Article 10 — Droit applicable et litiges
            </h2>
            <p className="text-sm">
              Les présentes CGV sont soumises au droit ivoirien. En cas de
              litige, les parties s&apos;engagent à rechercher une solution
              amiable dans un délai de 30 jours. À défaut d&apos;accord, le
              litige sera soumis aux tribunaux compétents d&apos;Abidjan (Côte
              d&apos;Ivoire), ou à un arbitrage international selon les règles
              de la CCI, si les parties en conviennent.
            </p>
          </section>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-red-700 transition-colors rounded-sm"
          >
            <span className="material-symbols-outlined text-base">
              arrow_back
            </span>
            Retour au site
          </Link>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest font-bold text-white/20">
            <Link
              href="/mentions-legales"
              className="hover:text-primary transition-colors"
            >
              Mentions Légales
            </Link>
            <Link
              href="/confidentialite"
              className="hover:text-primary transition-colors"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
