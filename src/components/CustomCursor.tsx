"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "hover" | "image";

export default function CustomCursor() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Dot: ultra-fast spring — nearly instant
  const dotX = useSpring(mouseX, { damping: 60, stiffness: 1000 });
  const dotY = useSpring(mouseY, { damping: 60, stiffness: 1000 });

  // Ring: lagged spring (the lerp feel)
  const ringX = useSpring(mouseX, { damping: 28, stiffness: 160 });
  const ringY = useSpring(mouseY, { damping: 28, stiffness: 160 });

  const [state, setState] = useState<CursorState>("default");
  const [label, setLabel] = useState("Voir");
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest(
        "a, button, [data-cursor]",
      ) as HTMLElement | null;
      if (!el) return;
      const type = el.getAttribute("data-cursor");
      if (type === "voir" || type === "ouvrir") {
        setState("image");
        setLabel(type === "voir" ? "Voir" : "Ouvrir");
      } else {
        setState("hover");
      }
    };

    const out = (e: MouseEvent) => {
      const to = e.relatedTarget as HTMLElement | null;
      if (!to?.closest("a, button, [data-cursor]")) {
        setState("default");
      }
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    document.addEventListener("mouseleave", () => setVisible(false));
    document.addEventListener("mouseenter", () => setVisible(true));

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, [mouseX, mouseY]);

  if (isTouch) return null;

  return (
    <>
      {/* ── Dot ── follows cursor directly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      >
        <motion.div
          className="rounded-full bg-primary"
          animate={{
            width: state === "image" ? 0 : 6,
            height: state === "image" ? 0 : 6,
            scale: state === "hover" ? 1.5 : 1,
            opacity: state === "image" ? 0 : 1,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </motion.div>

      {/* ── Ring ── lags behind (lerp) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="flex items-center justify-center overflow-hidden relative"
          animate={
            state === "image"
              ? {
                  width: 88,
                  height: 88,
                  borderRadius: "50%",
                  backgroundColor: "#e42c33",
                  borderColor: "transparent",
                  borderWidth: 0,
                }
              : state === "hover"
                ? {
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    backgroundColor: "rgba(228,44,51,0.12)",
                    borderColor: "#e42c33",
                    borderWidth: 1.5,
                  }
                : {
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    backgroundColor: "rgba(0,0,0,0)",
                    borderColor: "rgba(255,255,255,0.35)",
                    borderWidth: 1.5,
                  }
          }
          style={{ borderStyle: "solid" }}
          transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span
            className="text-white text-[10px] font-bold uppercase tracking-[0.15em] select-none whitespace-nowrap"
            animate={{
              opacity: state === "image" ? 1 : 0,
              scale: state === "image" ? 1 : 0.5,
            }}
            transition={{ duration: 0.18 }}
          >
            {label}
          </motion.span>
        </motion.div>
      </motion.div>
    </>
  );
}
