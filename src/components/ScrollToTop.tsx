"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          onClick={scrollToTop}
          aria-label="Retour en haut"
          initial={{ opacity: 0, scale: 0.7, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 12 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.93 }}
          className="fixed bottom-[6.5rem] right-8 z-50 w-12 h-12 rounded-sm bg-secondary border border-white/10 flex items-center justify-center shadow-xl shadow-black/40 hover:bg-primary hover:border-primary transition-colors duration-300 group"
        >
          <span className="material-symbols-outlined text-white/60 text-xl group-hover:text-white transition-colors duration-300">
            keyboard_arrow_up
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
