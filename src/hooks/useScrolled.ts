"use client";

import { useEffect, useState } from "react";

type UseScrolledOptions = {
  threshold?: number;
  enabled?: boolean;
};

export const useScrolled = ({ threshold = 12, enabled = true }: UseScrolledOptions = {}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const update = () => {
      setScrolled(window.scrollY > threshold);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [enabled, threshold]);

  return enabled ? scrolled : false;
};

export default useScrolled;
