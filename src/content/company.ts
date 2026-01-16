import appScreen from "../assets/images/app-screen.png";
import helixImage from "../assets/images/helix2.png";
import emojiImage from "../assets/images/emojistar.png";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import type { CompanyConfig } from "./types";

export const companyConfig: CompanyConfig = {
  heroVisual: {
    primary: {
      src: helixImage,
      alt: "Helix accent",
    },
    secondary: {
      src: emojiImage,
      alt: "Star accent",
    },
  },
  trustBar: {
    mode: "integrations",
    heading: "Trusted by modern teams and their tools",
    integrations: [
      { name: "Acme", icon: acmeLogo },
      { name: "Quantum", icon: quantumLogo },
      { name: "Echo", icon: echoLogo },
      { name: "Celestial", icon: celestialLogo },
      { name: "Pulse", icon: pulseLogo },
      { name: "Apex", icon: apexLogo },
    ],
    logos: [
      { name: "Acme", icon: acmeLogo },
      { name: "Quantum", icon: quantumLogo },
      { name: "Echo", icon: echoLogo },
      { name: "Celestial", icon: celestialLogo },
      { name: "Pulse", icon: pulseLogo },
      { name: "Apex", icon: apexLogo },
    ],
    metrics: [
      { label: "Active teams", value: "10k+" },
      { label: "User rating", value: "4.9/5" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  homepage: {
    sections: [
      { key: "hero", enabled: true, navId: "top" },
      { key: "mission", enabled: true, navId: "mission" },
      { key: "pillars", enabled: true, navId: "pillars" },
      { key: "featuredProduct", enabled: true, navId: "featured" },
      { key: "vision", enabled: true, navId: "vision" },
      { key: "trustBar", enabled: true, navId: "customers" },
      { key: "faqs", enabled: true, navId: "faqs" },
      { key: "pricing", enabled: false, navId: "pricing" },
      { key: "cta", enabled: true, navId: "cta" },
    ],
    hero: {
      badge: "Thoughtful by design",
      headline: "Thoughtful productivity software",
      subheadline: "for focused teams.",
      description:
        "We create calm, durable tools that help people focus on what matters and stay in flow for the long term.",
      primaryCta: {
        label: "See what we're building",
        href: "/#featured",
      },
      secondaryCta: {
        label: "Learn about us",
        href: "/#mission",
      },
    },
    mission: {
      title: "A mission grounded in focus",
      description:
        "We believe productivity tools should feel quiet, intentional, and built for deep work. Our products are designed to reduce noise, not add to it.",
      points: [
        {
          title: "Human-first software",
          description: "Designed around how people actually think, plan, and build.",
        },
        {
          title: "Clarity over volume",
          description: "We prize thoughtful defaults, intentional workflows, and calm surfaces.",
        },
        {
          title: "Long-term craft",
          description: "We ship for longevity, not short-lived feature races.",
        },
      ],
    },
    pillars: {
      title: "What we build",
      description: "A set of pillars that guide everything we design and ship.",
    },
    featuredProduct: {
      eyebrow: "Featured product",
      ctaLabel: "Explore the product",
      previewImage: {
        src: appScreen,
        alt: "Product preview",
      },
    },
    vision: {
      title: "What comes next",
      description: "A roadmap shaped by curiosity, care, and long-term ambition.",
      initiatives: [
        {
          title: "Calm collaboration",
          description: "Tools that help teams align without noisy status meetings.",
          status: "In research",
        },
        {
          title: "Shared accountability",
          description: "Systems that keep work visible without micromanagement.",
          status: "Exploring",
        },
        {
          title: "Living knowledge",
          description: "A home for decisions, context, and long-term memory.",
          status: "Prototyping",
        },
      ],
    },
    cta: {
      headline: "Follow our journey",
      description: "Join the waitlist for early updates, launches, and ideas we are exploring.",
      inputPlaceholder: "you@company.com",
      primaryCta: {
        label: "Join the waitlist",
      },
    },
  },
};

export default companyConfig;
