"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImgProps {
  src: string;
  alt: string;
  /** Extra Tailwind classes applied to the inner Next.js Image */
  className?: string;
  sizes?: string;
}

/**
 * Parallax image wrapper using Next.js <Image fill>.
 * Parent MUST have overflow-hidden + relative (or absolute inset-0).
 */
export default function ParallaxImg({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ParallaxImgProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div className="relative w-full h-full" style={{ y, scale: 1.35 }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={`object-cover ${className}`}
        />
      </motion.div>
    </div>
  );
}
