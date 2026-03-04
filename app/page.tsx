import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import PageLoader from "@/src/components/PageLoader";
import Stats from "@/src/components/Stats";
import About from "@/src/components/About";
import Process from "@/src/components/Process";
import Services from "@/src/components/Services";
import Garanties from "@/src/components/Garanties";
import CTA from "@/src/components/CTA";
import Expertise from "@/src/components/Expertise";
import Trust from "@/src/components/Trust";
import FAQ from "@/src/components/FAQ";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import WhatsAppFAB from "@/src/components/WhatsAppFAB";
import ScrollToTop from "@/src/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <PageLoader />
      <div className="grain"></div>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Process />
        <Services />
        <Garanties />
        <CTA />
        <Expertise />
        <Trust />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
      <ScrollToTop />
    </>
  );
}
