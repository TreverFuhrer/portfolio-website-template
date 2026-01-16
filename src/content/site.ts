import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  brand: {
    name: "Avery Reed",
    logoLabel: "Avery Reed",
  },
  siteUrl: "https://portfolio-template.example",
  nav: [
    { type: "anchor", label: "About", href: "/#about", sectionId: "about" },
    { type: "anchor", label: "Work", href: "/#work", sectionId: "work" },
    { type: "anchor", label: "Capabilities", href: "/#services", sectionId: "services" },
    { type: "anchor", label: "Experience", href: "/#experience", sectionId: "experience" },
    { type: "anchor", label: "Contact", href: "/#contact", sectionId: "contact" },
  ],
  navbar: {
    sticky: true,
    activeSectionHighlight: true,
    stickyStyle: "blur-border",
    primaryCta: {
      label: "Let's talk",
      href: "/#contact",
    },
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com", icon: "github" },
    { label: "Dribbble", href: "https://dribbble.com", icon: "dribbble" },
  ],
};

export default siteConfig;
