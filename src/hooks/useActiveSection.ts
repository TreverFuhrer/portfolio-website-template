"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

type UseActiveSectionOptions = {
  rootMargin?: string;
  threshold?: number | number[];
  enabled?: boolean;
  offset?: number;
};

export const useActiveSection = (
  sectionIds: string[],
  { rootMargin = "-30% 0px -60% 0px", threshold = 0, enabled = true, offset = 96 }: UseActiveSectionOptions = {},
) => {
  const [activeId, setActiveId] = useState<string>("");
  const idsKey = useMemo(() => sectionIds.join("|"), [sectionIds]);
  const setFromHash = useCallback(() => {
    if (!enabled || typeof window === "undefined") {
      return;
    }

    const hash = window.location.hash.replace("#", "");
    if (hash && sectionIds.includes(hash)) {
      setActiveId(hash);
    }
  }, [enabled, sectionIds]);

  useEffect(() => {
    if (!enabled || sectionIds.length === 0) {
      return;
    }

    const getElements = () =>
      sectionIds
        .map((id) => document.getElementById(id))
        .filter((element): element is HTMLElement => Boolean(element));

    const getOffsets = () =>
      getElements()
        .map((element) => ({ id: element.id, top: element.getBoundingClientRect().top + window.scrollY }))
        .sort((a, b) => a.top - b.top);

    let offsets = getOffsets();
    let rafId: number | null = null;

    const updateActive = () => {
      rafId = null;

      if (offsets.length === 0) {
        return;
      }

      const scrollPosition = window.scrollY + offset;
      let currentId = offsets[0]?.id ?? "";

      offsets.forEach((section) => {
        if (section.top <= scrollPosition) {
          currentId = section.id;
        }
      });

      const nextId = currentId || offsets[0]?.id || "";
      setActiveId((prev) => (prev === nextId ? prev : nextId));
    };

    const scheduleUpdate = () => {
      if (rafId !== null) {
        return;
      }
      rafId = window.requestAnimationFrame(updateActive);
    };
    const observer = new IntersectionObserver(() => {
      offsets = getOffsets();
      scheduleUpdate();
    }, { rootMargin, threshold });

    const elements = getElements();
    elements.forEach((element) => observer.observe(element));
    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [enabled, idsKey, rootMargin, sectionIds, threshold, offset]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const rafId = window.requestAnimationFrame(setFromHash);
    window.addEventListener("hashchange", setFromHash);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("hashchange", setFromHash);
    };
  }, [enabled, setFromHash]);

  return enabled && sectionIds.length > 0 ? activeId : "";
};

export default useActiveSection;
