import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — Phœnix Global Trade",
  description:
    "Politique de confidentialité et protection des données personnelles de Phœnix Global Trade SARL.",
};

export default function Confidentialite() {
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
            Confidentialité
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-4 tracking-tight">
          Politique de Confidentialité
        </h1>
        <p className="text-white/30 text-sm mb-16 border-l-2 border-primary pl-4">
          Dernière mise à jour : mars 2026
        </p>

        <div className="space-y-12 text-white/60 leading-relaxed">
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Responsable du traitement
            </h2>
            <p className="text-sm">
              Le responsable du traitement des données personnelles collectées
              via ce site est Phœnix Global Trade SARL, joignable à
              l&apos;adresse{" "}
              <a
                href="mailto:phoenixglobaltrade94@gmail.com"
                className="text-primary hover:underline"
              >
                phoenixglobaltrade94@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Données collectées
            </h2>
            <p className="text-sm mb-4">
              Dans le cadre de l&apos;utilisation de notre site et de nos
              services, nous pouvons collecter les données suivantes :
            </p>
            <ul className="text-sm space-y-2 pl-4">
              {[
                "Nom et prénom",
                "Adresse email professionnelle",
                "Numéro de téléphone / WhatsApp",
                "Secteur d'activité et besoins en approvisionnement",
                "Description du projet et quantités estimées",
                "Adresse email pour la newsletter (si souscription volontaire)",
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
              Finalités du traitement
            </h2>
            <p className="text-sm mb-4">
              Les données collectées sont utilisées pour :
            </p>
            <ul className="text-sm space-y-2 pl-4">
              {[
                "Répondre à vos demandes de renseignements et de devis",
                "Étudier la faisabilité de votre projet de sourcing",
                "Vous contacter dans le cadre de la relation commerciale",
                "Envoyer la newsletter mensuelle (uniquement sur consentement explicite)",
                "Améliorer notre site et nos services",
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
              Conservation des données
            </h2>
            <p className="text-sm">
              Vos données sont conservées pendant la durée nécessaire à
              l&apos;accomplissement des finalités pour lesquelles elles ont été
              collectées, et au maximum 3 ans à compter du dernier contact. Les
              données de newsletter sont conservées jusqu&apos;à désinscription.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Partage des données
            </h2>
            <p className="text-sm">
              Phœnix Global Trade SARL ne vend pas vos données personnelles.
              Elles peuvent être partagées uniquement avec des sous-traitants
              techniques (hébergement, messagerie) dans le strict cadre de la
              prestation de services, et soumis à des obligations de
              confidentialité. Aucune transmission à des tiers à des fins
              commerciales n&apos;est effectuée.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Vos droits
            </h2>
            <p className="text-sm mb-4">
              Conformément aux réglementations applicables en matière de
              protection des données, vous disposez des droits suivants :
            </p>
            <ul className="text-sm space-y-2 pl-4">
              {[
                "Droit d'accès à vos données personnelles",
                "Droit de rectification des données inexactes",
                "Droit à l'effacement (« droit à l'oubli »)",
                "Droit d'opposition au traitement",
                "Droit à la portabilité des données",
                "Droit de retirer votre consentement à tout moment (newsletter)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm mt-4">
              Pour exercer ces droits, contactez-nous à{" "}
              <a
                href="mailto:phoenixglobaltrade94@gmail.com"
                className="text-primary hover:underline"
              >
                phoenixglobaltrade94@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Cookies
            </h2>
            <p className="text-sm">
              Ce site utilise des cookies techniques strictement nécessaires au
              bon fonctionnement de la navigation. Aucun cookie publicitaire ou
              de traçage tiers n&apos;est déposé. Vous pouvez configurer votre
              navigateur pour bloquer ou supprimer les cookies, ce qui peut
              affecter certaines fonctionnalités du site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Modifications
            </h2>
            <p className="text-sm">
              Phœnix Global Trade SARL se réserve le droit de modifier la
              présente politique à tout moment. La date de la dernière mise à
              jour figurera en haut de cette page. Votre utilisation continue du
              site après modification vaut acceptation de la politique révisée.
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
            <Link href="/cgv" className="hover:text-primary transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
