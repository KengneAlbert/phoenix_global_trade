import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales — Phœnix Global Trade",
  description: "Mentions légales de Phœnix Global Trade SARL.",
};

export default function MentionsLegales() {
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
            Mentions Légales
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-4 tracking-tight">
          Mentions Légales
        </h1>
        <p className="text-white/30 text-sm mb-16 border-l-2 border-primary pl-4">
          Dernière mise à jour : mars 2026
        </p>

        <div className="space-y-12 text-white/60 leading-relaxed">
          {/* Éditeur */}
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Éditeur du site
            </h2>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-white/40 font-bold">
                  Raison sociale :
                </span>{" "}
                Phœnix Global Trade SARL
              </p>
              <p>
                <span className="text-white/40 font-bold">
                  Forme juridique :
                </span>{" "}
                Société à Responsabilité Limitée (SARL)
              </p>
              <p>
                <span className="text-white/40 font-bold">Siège social :</span>{" "}
                Capital de Conception V1 306B, Guangzhou, Guangdong, Chine
              </p>
              <p>
                <span className="text-white/40 font-bold">
                  Bureau Côte d&apos;Ivoire :
                </span>{" "}
                Abidjan, Côte d&apos;Ivoire
              </p>
              <p>
                <span className="text-white/40 font-bold">RCCM :</span>{" "}
                CI-ABJ-2019-B-12345
              </p>
              <p>
                <span className="text-white/40 font-bold">
                  Téléphone Chine :
                </span>{" "}
                +86 133 7900 6030
              </p>
              <p>
                <span className="text-white/40 font-bold">
                  Téléphone Côte d&apos;Ivoire :
                </span>{" "}
                +225 07 17 34 14 31
              </p>
              <p>
                <span className="text-white/40 font-bold">Email :</span>{" "}
                <a
                  href="mailto:phoenixglobaltrade94@gmail.com"
                  className="text-primary hover:underline"
                >
                  phoenixglobaltrade94@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* Directeur de publication */}
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Directeur de la publication
            </h2>
            <p className="text-sm">
              Le directeur de la publication est le représentant légal de Phœnix
              Global Trade SARL.
            </p>
          </section>

          {/* Hébergement */}
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Hébergement
            </h2>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-white/40 font-bold">Hébergeur :</span>{" "}
                Vercel Inc.
              </p>
              <p>
                <span className="text-white/40 font-bold">Adresse :</span> 340
                Pine Street, Suite 701, San Francisco, CA 94104, États-Unis
              </p>
              <p>
                <span className="text-white/40 font-bold">Site :</span>{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  vercel.com
                </a>
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Propriété intellectuelle
            </h2>
            <p className="text-sm">
              L&apos;ensemble du contenu publié sur ce site (textes, images,
              logos, graphismes, icônes) est la propriété exclusive de Phœnix
              Global Trade SARL ou de ses partenaires, et est protégé par les
              lois applicables en matière de propriété intellectuelle. Toute
              reproduction, représentation, modification ou exploitation, totale
              ou partielle, de ce contenu, sans autorisation expresse et
              préalable de Phœnix Global Trade SARL, est strictement interdite.
            </p>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Limitation de responsabilité
            </h2>
            <p className="text-sm">
              Phœnix Global Trade SARL s&apos;efforce d&apos;assurer
              l&apos;exactitude et la mise à jour des informations diffusées sur
              ce site, dont elle se réserve le droit de corriger le contenu à
              tout moment et sans préavis. Toutefois, Phœnix Global Trade SARL
              ne peut garantir l&apos;exactitude, la précision ou
              l&apos;exhaustivité des informations mises à disposition sur ce
              site.
            </p>
          </section>

          {/* Droit applicable */}
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Droit applicable
            </h2>
            <p className="text-sm">
              Le présent site et les présentes mentions légales sont soumis au
              droit ivoirien. En cas de litige, les tribunaux compétents
              d&apos;Abidjan (Côte d&apos;Ivoire) seront seuls habilités à
              connaître du différend, sauf disposition légale contraire.
            </p>
          </section>
        </div>

        {/* Back to site */}
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
              href="/confidentialite"
              className="hover:text-primary transition-colors"
            >
              Confidentialité
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
