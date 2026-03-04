import Image from "next/image";
import RevealText from "./ui/RevealText";
import FadeUp from "./ui/FadeUp";

export default function About() {
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="col-span-1 lg:col-span-7 relative z-10">
          <h2 className="text-secondary font-display text-[clamp(2.5rem,9vw,9rem)] font-bold leading-none mb-12 tracking-tighter">
            <RevealText delay={0}>Simplifier</RevealText>
            <RevealText delay={0.15}>
              <span className="pl-0 sm:pl-12 lg:pl-20 text-primary">
                L&apos;Échange.
              </span>
            </RevealText>
          </h2>
          <div className="max-w-lg ml-auto awww-border pl-6 md:pl-12">
            <FadeUp delay={0.3}>
              <p className="text-gray-600 text-xl leading-relaxed mb-6">
                Notre mission est de faciliter et sécuriser les échanges
                commerciaux entre la Chine et les marchés internationaux.
              </p>
            </FadeUp>
            <FadeUp delay={0.45}>
              <p className="text-gray-400">
                Nous offrons à nos clients des solutions
                d&apos;approvisionnement fiables, performantes et adaptées à
                leurs besoins spécifiques — garantissant qualité, conformité et
                compétitivité à chaque étape.
              </p>
            </FadeUp>
          </div>
        </div>
        <FadeUp
          delay={0.2}
          className="col-span-1 lg:col-span-5 relative mt-12 lg:mt-0"
        >
          <div className="aspect-[3/4] relative overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
            <Image
              alt="Modern Architecture"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
              fill
              sizes="(max-width: 1024px) 100vw, 41vw"
              className="object-cover"
              priority={false}
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-navy-deep p-12 text-white hidden md:block">
            <span className="block text-5xl font-display font-bold">
              10+ Ans
            </span>
            <span className="text-xs tracking-widest text-primary font-bold uppercase">
              Expertise Terrain
            </span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
