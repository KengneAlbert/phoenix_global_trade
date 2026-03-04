import FadeUp from "./ui/FadeUp";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="bg-secondary rounded-2xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 rounded-full -mr-32 -mt-32" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Sécurisez vos importations dès aujourd&apos;hui.
              </h3>
              <p className="text-gray-300 text-base sm:text-lg max-w-xl">
                Évitez les risques liés au marché chinois grâce à notre présence
                locale et notre expertise.
              </p>
            </div>
            <div className="relative z-10 w-full md:w-auto shrink-0">
              <a
                className="flex items-center justify-center px-10 py-5 bg-primary text-white font-bold rounded-sm hover:bg-red-700 hover:scale-105 transition-all shadow-xl shadow-red-900/40"
                href="#contact"
              >
                Obtenir un devis gratuit
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
