"use client";

import { useReducedMotion } from "framer-motion";

export const useReducedMotionPref = () => useReducedMotion() ?? false;
