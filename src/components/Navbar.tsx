"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGroup, motion } from "framer-motion";
import { LogoIcon, MenuIcon } from "./icons";
import { Container } from "./layout/Container";
import { cn } from "./lib/utils";
import { portfolioConfig, siteConfig } from "@/content";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolled } from "@/hooks/useScrolled";

export const Navbar = () => {
  const navItems = siteConfig.nav;
  const navbarConfig = siteConfig.navbar;
  const enabledSectionIds = useMemo(
    () => portfolioConfig.homepage.sections.filter((section) => section.enabled).map((section) => section.navId),
    [],
  );
  const visibleNavItems = useMemo(
    () => navItems.filter((item) => item.type !== "anchor" || enabledSectionIds.includes(item.sectionId)),
    [enabledSectionIds, navItems],
  );
  const pathname = usePathname();
  const isHome = pathname === "/";
  const highlightEnabled = isHome && navbarConfig.activeSectionHighlight;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const sectionIds = useMemo(
    () =>
      visibleNavItems
        .filter((item) => item.type === "anchor")
        .map((item) => item.sectionId)
        .filter((id): id is string => Boolean(id)),
    [visibleNavItems],
  );
  const activeId = useActiveSection(sectionIds, {
    enabled: highlightEnabled,
    offset: navbarConfig.sticky ? 96 : 0,
  });
  const scrolled = useScrolled({ enabled: navbarConfig.sticky });
  const primaryCtaSectionId = useMemo(() => {
    if (!navbarConfig.primaryCta.href.startsWith("/#")) {
      return undefined;
    }

    return navbarConfig.primaryCta.href.split("#")[1];
  }, [navbarConfig.primaryCta.href]);

  const handleAnchorClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, href: string, sectionId?: string) => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }

      if (!isHome || !sectionId) {
        return;
      }

      event.preventDefault();
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", href);
      }
    },
    [isHome, isMenuOpen],
  );

  const handleMobileKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") {
      return;
    }

    const focusable = mobileMenuRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex="0"]',
    );
    if (!focusable || focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const activeElement = document.activeElement;

    if (event.shiftKey && activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    firstMobileLinkRef.current?.focus();

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        navbarConfig.sticky ? "sticky top-0 z-40 border-b border-transparent" : "relative z-40",
        navbarConfig.sticky &&
          scrolled &&
          navbarConfig.stickyStyle === "blur-border" &&
          "bg-white/80 backdrop-blur border-(--ink)/10 shadow-[0_10px_30px_rgba(15,23,42,0.08)]",
        navbarConfig.sticky && !scrolled && "bg-transparent",
        !navbarConfig.sticky && "bg-transparent",
        "transition-colors duration-200",
      )}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Swap this logo and label with your brand. */}
          <Link
            href="/#top"
            className="flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-2)"
            aria-label={siteConfig.brand.logoLabel}
            onClick={(event) => handleAnchorClick(event, "/#top", "top")}
          >
            <span className="relative flex h-12 w-12 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,var(--brand-1),var(--brand-2))] blur-md" />
              <LogoIcon className="relative h-12 w-12" />
            </span>
            <span className="hidden text-sm font-semibold text-(--ink) sm:inline">{siteConfig.brand.name}</span>
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-(--ink)/20 sm:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-2)"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <MenuIcon className="text-(--ink)" />
          </button>
          {/* Keep these links aligned with the section ids below. */}
          <LayoutGroup>
            <nav className="hidden items-center gap-2 text-(--ink) sm:flex" aria-label="Primary">
              {visibleNavItems.map((item) => {
                const anchorId = item.type === "anchor" ? item.sectionId : undefined;
                const isActive = Boolean(highlightEnabled && anchorId && activeId === anchorId);
                const href = item.href;
                const target = item.type === "external" && item.newTab !== false ? "_blank" : undefined;
                const rel = target ? "noreferrer" : undefined;

                return (
                  <a
                    key={`${item.label}-${item.href}`}
                    href={href}
                    className={cn(
                      "relative inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-2)",
                      isActive ? "text-(--ink)" : "text-(--ink)/60 hover:text-(--ink)",
                    )}
                    target={target}
                    rel={rel}
                    aria-current={isActive ? "page" : undefined}
                    onClick={(event) =>
                      item.type === "anchor" ? handleAnchorClick(event, item.href, item.sectionId) : undefined
                    }
                  >
                    {highlightEnabled && isActive ? (
                      <>
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-(--ink)/10"
                          transition={{ type: "spring", stiffness: 500, damping: 40 }}
                        />
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-2 left-3 right-3 h-0.5 rounded-full bg-(--brand-1)"
                          transition={{ type: "spring", stiffness: 500, damping: 40 }}
                        />
                      </>
                    ) : null}
                    <span className={cn("relative z-10", isActive ? "font-semibold text-(--ink)" : "font-medium")}>
                      {item.label}
                    </span>
                  </a>
                );
              })}
              <a
                href={navbarConfig.primaryCta.href}
                className="ml-3 inline-flex items-center rounded-full bg-(--ink) px-4 py-2 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-2)"
                onClick={
                  primaryCtaSectionId
                    ? (event) => handleAnchorClick(event, navbarConfig.primaryCta.href, primaryCtaSectionId)
                    : undefined
                }
              >
                {navbarConfig.primaryCta.label}
              </a>
            </nav>
          </LayoutGroup>
        </div>
      </Container>
      {isMenuOpen ? (
        <div
          id="mobile-nav"
          className="sm:hidden border-t border-(--ink)/10 bg-white/95 backdrop-blur"
          role="dialog"
          aria-label="Mobile navigation"
          ref={mobileMenuRef}
          onKeyDown={handleMobileKeyDown}
        >
          <Container className="flex flex-col gap-2 py-4">
            {visibleNavItems.map((item, index) => {
              const anchorId = item.type === "anchor" ? item.sectionId : undefined;
              const isActive = Boolean(highlightEnabled && anchorId && activeId === anchorId);
              const href = item.href;
              const target = item.type === "external" && item.newTab !== false ? "_blank" : undefined;
              const rel = target ? "noreferrer" : undefined;

              return (
                <a
                  key={`${item.label}-${item.href}-mobile`}
                  href={href}
                  className={cn(
                    "flex items-center rounded-lg px-4 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-2)",
                    isActive ? "bg-(--ink)/10 text-(--ink)" : "text-(--ink)/60 hover:text-(--ink)",
                  )}
                  target={target}
                  rel={rel}
                  aria-current={isActive ? "page" : undefined}
                  ref={index === 0 ? firstMobileLinkRef : undefined}
                  onClick={(event) =>
                    item.type === "anchor" ? handleAnchorClick(event, item.href, item.sectionId) : setIsMenuOpen(false)
                  }
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={navbarConfig.primaryCta.href}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-(--ink) px-4 py-3 text-base font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-2)"
              onClick={
                primaryCtaSectionId
                  ? (event) => handleAnchorClick(event, navbarConfig.primaryCta.href, primaryCtaSectionId)
                  : () => setIsMenuOpen(false)
              }
            >
              {navbarConfig.primaryCta.label}
            </a>
          </Container>
        </div>
      ) : null}
    </header>
  );
};
