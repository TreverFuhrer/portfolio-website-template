"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

import { useReducedMotionPref } from "../../motion/useReducedMotionPref";

type AppScreenshotScrollEffectProps = {
  children: ReactNode;
  className?: string;
};

export const AppScreenshotScrollEffect = ({
  children,
  className,
}: AppScreenshotScrollEffectProps) => {
  const reducedMotion = useReducedMotionPref();
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  // At the top of the section the shot is slightly tilted and faded.
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  // As you scroll down it flattens and becomes fully opaque.
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={targetRef}
      className={className}
      style={{ opacity, rotateX, transformPerspective: "800px" }}
    >
      {children}
    </motion.div>
  );
};
