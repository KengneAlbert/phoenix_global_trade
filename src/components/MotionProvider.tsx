"use client";

import { MotionConfig } from "framer-motion";

/**
 * Wraps the app with Framer Motion's MotionConfig.
 * `reducedMotion="user"` makes all motion components respect the OS
 * "Reduce Motion" accessibility preference — animations snap to their
 * end state instantly when the preference is enabled.
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
