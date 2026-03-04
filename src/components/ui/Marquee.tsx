"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface MarqueeProps {
  items: string[];
  /** px/s — default 60 */
  speed?: number;
  direction?: "left" | "right";
  className?: string;
  itemClassName?: string;
  separator?: string;
}

export default function Marquee({
  items,
  speed = 60,
  direction = "left",
  className = "",
  itemClassName = "",
  separator = "•",
}: MarqueeProps) {
  // Duplicate enough so the loop is seamless
  const doubled = [...items, ...items, ...items, ...items];
  const totalItems = items.length;
  // Duration: one full cycle = (items.length * ~160px) / speed seconds
  const duration = (totalItems * 160) / speed;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Left fade */}
      <div className="absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-[#0a1a31] to-transparent pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-[#0a1a31] to-transparent pointer-events-none" />

      <motion.div
        className="flex items-center gap-0 whitespace-nowrap will-change-transform"
        animate={{
          x:
            direction === "left"
              ? ["0%", `-${100 / 4}%`]
              : [`-${100 / 4}%`, "0%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className={`px-8 text-2xl font-black italic tracking-tighter select-none ${itemClassName}`}
            >
              {item}
            </span>
            <span className="text-primary/50 text-sm select-none">
              {separator}
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
