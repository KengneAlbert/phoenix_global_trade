"use client";

import FadeUp from "./ui/FadeUp";
import CountUp from "./ui/CountUp";

export default function Stats() {
  return (
    <FadeUp delay={0.2}>
      <section className="relative z-20 -mt-12 max-w-5xl mx-auto px-6 md:-mt-12">
        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-800">
          <div className="p-8 text-center">
            <p className="text-3xl font-display font-bold text-secondary dark:text-white">
              <CountUp target={200} suffix="+" />
            </p>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
              Fournisseurs Certifiés
            </p>
          </div>
          <div className="p-8 text-center">
            <p className="text-3xl font-display font-bold text-secondary dark:text-white">
              Présence Locale
            </p>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
              Guangzhou &amp; Abidjan
            </p>
          </div>
          <div className="p-8 text-center">
            <p className="text-3xl font-display font-bold text-secondary dark:text-white">
              <CountUp target={10} suffix="+ Ans" />
            </p>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
              D&apos;Expertise Terrain
            </p>
          </div>
        </div>
      </section>
    </FadeUp>
  );
}
