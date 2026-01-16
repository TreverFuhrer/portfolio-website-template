import type { Transition, Variants } from "framer-motion";

const easeOut: Transition["ease"] = [0.16, 1, 0.3, 1];

const withDuration = (reducedMotion: boolean, duration: number): Transition => ({
  duration: reducedMotion ? 0.01 : duration,
  ease: easeOut,
});

export const fadeUp = (reducedMotion: boolean): Variants => {
  const transition = withDuration(reducedMotion, 0.6);

  return {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 20, transition },
    show: { opacity: 1, y: 0, transition },
  };
};

export const fadeIn = (reducedMotion: boolean): Variants => {
  const transition = withDuration(reducedMotion, 0.5);

  return {
    hidden: { opacity: 0, transition },
    show: { opacity: 1, transition },
  };
};

export const scaleIn = (reducedMotion: boolean): Variants => {
  const transition = withDuration(reducedMotion, 0.55);

  return {
    hidden: {
      opacity: 0,
      scale: reducedMotion ? 1 : 0.98,
      y: reducedMotion ? 0 : 16,
      transition,
    },
    show: { opacity: 1, scale: 1, y: 0, transition },
  };
};

export const staggerChildren = (reducedMotion: boolean): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: reducedMotion ? 0 : 0.1,
      delayChildren: reducedMotion ? 0 : 0.08,
    },
  },
});
