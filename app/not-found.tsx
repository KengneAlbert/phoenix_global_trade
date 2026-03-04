import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#000814] text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background watermark */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="text-[20rem] md:text-[30rem] font-black text-white/[0.025] leading-none tracking-tighter">
          404
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-lg">
        <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-10 block">
          Erreur 404
        </span>

        <h1 className="font-display font-black text-6xl md:text-8xl leading-none tracking-tighter mb-8">
          Page <span className="italic text-primary">introuvable.</span>
        </h1>

        <p className="text-white/40 text-lg leading-relaxed mb-16 max-w-sm mx-auto">
          Cette page n&apos;existe pas ou a été déplacée. Revenez à
          l&apos;accueil pour explorer nos services.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-4 px-10 py-5 bg-primary text-white text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-red-700 transition-colors duration-300 rounded-sm shadow-lg shadow-red-900/30"
        >
          <span className="material-symbols-outlined text-base">
            arrow_back
          </span>
          Retour à l&apos;accueil
        </Link>
      </div>

      {/* Bottom brand line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 text-white/20 text-xs tracking-[0.3em] uppercase font-bold">
        <span className="w-8 h-px bg-white/20" />
        Phœnix Global Trade
        <span className="w-8 h-px bg-white/20" />
      </div>
    </main>
  );
}
