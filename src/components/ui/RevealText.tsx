"use client";

import { motion } from "framer-motion";
import { ElementType, ReactNode } from "react";

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: ElementType;
}

/**
 * Reveals text from a bottom clip-path mask — Awwwards-style.
 * Wraps a single line or block of text in an overflow-hidden container.
 */
export default function RevealText({
  children,
  className,
  delay = 0,
  duration = 0.9,
  as: Tag = "div",
}: RevealTextProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ clipPath: "inset(100% 0 0 0)", y: "20%" }}
        whileInView={{ clipPath: "inset(0% 0 0 0)", y: "0%" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration, delay, ease: [0.76, 0, 0.24, 1] }}
      >
        <Tag className={className}>{children}</Tag>
      </motion.div>
    </div>
  );
}

/** Reveals each word of a string individually with stagger */
export function RevealWords({
  text,
  className,
  delay = 0,
  stagger = 0.08,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={`inline-flex flex-wrap gap-x-[0.25em] ${className ?? ""}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.75,
              delay: delay + i * stagger,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
