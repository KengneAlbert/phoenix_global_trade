"use client";

import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees (applied symmetrically ±) */
  maxAngle?: number;
  [key: string]: unknown;
}

export default function TiltCard({
  children,
  className = "",
  maxAngle = 9,
  ...props
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rawRotateX = useTransform(mouseY, [0, 1], [maxAngle, -maxAngle]);
  const rawRotateY = useTransform(mouseX, [0, 1], [-maxAngle, maxAngle]);

  const rotateX = useSpring(rawRotateX, { stiffness: 180, damping: 28 });
  const rotateY = useSpring(rawRotateY, { stiffness: 180, damping: 28 });
  const scale = useSpring(1, { stiffness: 200, damping: 22 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const box = ref.current?.getBoundingClientRect();
    if (!box) return;
    mouseX.set((e.clientX - box.left) / box.width);
    mouseY.set((e.clientY - box.top) / box.height);
    scale.set(1.02);
  };

  const handleLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    scale.set(1);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
        transformPerspective: 900,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      {children}
    </motion.div>
  );
}
