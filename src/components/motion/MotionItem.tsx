"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

import { fadeIn, fadeUp, scaleIn } from "../../motion/variants";
import { useReducedMotionPref } from "../../motion/useReducedMotionPref";

type VariantName = "fadeUp" | "fadeIn" | "scaleIn";

type MotionItemProps = HTMLMotionProps<"div"> & {
  variant?: VariantName;
};

const variantsByName = {
  fadeUp,
  fadeIn,
  scaleIn,
};

export const MotionItem = ({ variant = "fadeUp", ...props }: MotionItemProps) => {
  const reducedMotion = useReducedMotionPref();

  return <motion.div variants={variantsByName[variant](reducedMotion)} {...props} />;
};
