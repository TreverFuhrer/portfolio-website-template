import type { StaticImageData } from "next/image";

export type NavAnchorItem = {
  type: "anchor";
  label: string;
  href: `/#${string}`;
  sectionId: string;
  variant?: "primary";
};

export type NavPageItem = {
  type: "page";
  label: string;
  href: string;
  variant?: "primary";
};

export type NavExternalItem = {
  type: "external";
  label: string;
  href: string;
  newTab?: boolean;
  variant?: "primary";
};

export type NavItem = NavAnchorItem | NavPageItem | NavExternalItem;

export type NavbarConfig = {
  sticky: boolean;
  activeSectionHighlight: boolean;
  stickyStyle: "blur-border";
  primaryCta: {
    label: string;
    href: string;
  };
};

export type SiteConfig = {
  brand: {
    name: string;
    logoLabel: string;
  };
  siteUrl: string;
  nav: NavItem[];
  navbar: NavbarConfig;
  socials: Array<{
    label: string;
    href: string;
    icon: string;
  }>;
};

export type HomeSectionKey =
  | "hero"
  | "mission"
  | "pillars"
  | "featuredProduct"
  | "vision"
  | "trustBar"
  | "faqs"
  | "pricing"
  | "cta";

export type HomeSectionConfig = {
  key: HomeSectionKey;
  enabled: boolean;
  navId: string;
};

export type CompanyConfig = {
  heroVisual: {
    primary: {
      src: StaticImageData;
      alt: string;
    };
    secondary?: {
      src: StaticImageData;
      alt: string;
    };
  };
  trustBar: {
    mode: "integrations" | "logos" | "metrics" | "off";
    heading: string;
    integrations: Array<{
      name: string;
      icon: StaticImageData;
    }>;
    logos: Array<{
      name: string;
      icon: StaticImageData;
    }>;
    metrics: Array<{
      label: string;
      value: string;
    }>;
  };
  homepage: {
    sections: HomeSectionConfig[];
    hero: {
      badge: string;
      headline: string;
      subheadline: string;
      description: string;
      primaryCta: {
        label: string;
        href: string;
      };
      secondaryCta: {
        label: string;
        href: string;
      };
    };
    mission: {
      title: string;
      description: string;
      points: Array<{
        title: string;
        description: string;
      }>;
    };
    pillars: {
      title: string;
      description: string;
    };
    featuredProduct: {
      eyebrow: string;
      ctaLabel: string;
      previewImage: {
        src: StaticImageData;
        alt: string;
      };
    };
    vision: {
      title: string;
      description: string;
      initiatives: Array<{
        title: string;
        description: string;
        status: string;
      }>;
    };
    cta: {
      headline: string;
      description: string;
      inputPlaceholder: string;
      primaryCta: {
        label: string;
        href?: string;
      };
    };
  };
};

export type ProductPageBlockKey =
  | "hero"
  | "screenshots"
  | "howItWorks"
  | "featureGrid"
  | "useCases"
  | "pricing"
  | "faq"
  | "finalCta";

export type ProductPageHero = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  image?: {
    src: StaticImageData;
    alt: string;
  };
};

export type ProductPageScreenshots = {
  id: string;
  title: string;
  description: string;
  items: Array<{
    src: StaticImageData;
    alt: string;
    caption?: string;
  }>;
};

export type ProductPageHowItWorks = {
  id: string;
  title: string;
  description?: string;
  steps: Array<{
    title: string;
    description: string;
  }>;
};

export type ProductPageFeatureGrid = {
  id: string;
  title: string;
  description?: string;
  features: Array<{
    title: string;
    description: string;
  }>;
};

export type ProductPageUseCases = {
  id: string;
  title: string;
  description?: string;
  items: Array<{
    title: string;
    description: string;
  }>;
};

export type ProductPageFaq = {
  id: string;
  title: string;
  items: FaqItem[];
};

export type ProductPagePricing = {
  id: string;
};

export type ProductPageFinalCta = {
  id: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export type ProductPageConfig = {
  nav: Array<{
    id: string;
    label: string;
  }>;
  order: ProductPageBlockKey[];
  hero: ProductPageHero;
  screenshots: ProductPageScreenshots;
  howItWorks: ProductPageHowItWorks;
  featureGrid: ProductPageFeatureGrid;
  useCases: ProductPageUseCases;
  pricing: ProductPagePricing;
  faq: ProductPageFaq;
  finalCta: ProductPageFinalCta;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  ogImage: string;
  screenshots: Array<{
    src: StaticImageData;
    alt: string;
  }>;
  primaryCta: {
    label: string;
    href: string;
  };
  page: ProductPageConfig;
};

export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  ctaLabel: string;
  popular?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Testimonial = {
  name: string;
  title?: string;
  company?: string;
  quote: string;
  avatar?: StaticImageData;
};

export type Logo = {
  src: StaticImageData;
  alt: string;
};
