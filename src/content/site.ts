import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  brand: {
    name: "Company Name",
    logoLabel: "Brand",
  },
  siteUrl: "https://example.com",
  nav: [
    { type: "anchor", label: "Mission", href: "/#mission", sectionId: "mission" },
    { type: "anchor", label: "Pillars", href: "/#pillars", sectionId: "pillars" },
    { type: "anchor", label: "Product", href: "/#featured", sectionId: "featured" },
    { type: "anchor", label: "Vision", href: "/#vision", sectionId: "vision" },
    { type: "anchor", label: "FAQ", href: "/#faqs", sectionId: "faqs" },
    { type: "page", label: "App", href: "/product/app" },
  ],
  navbar: {
    sticky: true,
    activeSectionHighlight: true,
    stickyStyle: "blur-border",
    primaryCta: {
      label: "Primary CTA",
      href: "/#cta",
    },
  },
  socials: [
    { label: "X", href: "https://x.com", icon: "x" },
    { label: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" },
    { label: "Instagram", href: "https://www.instagram.com", icon: "instagram" },
    { label: "YouTube", href: "https://www.youtube.com", icon: "youtube" },
  ],
};

export default siteConfig;
