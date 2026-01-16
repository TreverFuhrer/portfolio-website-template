"use client";

import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";

import { Section } from "../layout/Section";
import { fadeIn, fadeUp, scaleIn, staggerChildren } from "../../motion/variants";
import { useReducedMotionPref } from "../../motion/useReducedMotionPref";

type VariantName = "fadeUp" | "fadeIn" | "scaleIn" | "staggerChildren";

type MotionSectionProps = Omit<ComponentPropsWithoutRef<typeof Section>, keyof MotionProps> &
  MotionProps & {
  variant?: VariantName;
  once?: boolean;
  amount?: number;
};

const MotionSectionRoot = motion.create(Section);
const variantsByName = {
  fadeUp,
  fadeIn,
  scaleIn,
  staggerChildren,
};

export const MotionSection = forwardRef<HTMLElement, MotionSectionProps>(function MotionSection(
  { variant = "fadeUp", once = true, amount = 0.2, ...props },
  ref,
) {
  const reducedMotion = useReducedMotionPref();

  return (
    <MotionSectionRoot
      ref={ref}
      variants={variantsByName[variant](reducedMotion)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      {...props}
    />
  );
});
