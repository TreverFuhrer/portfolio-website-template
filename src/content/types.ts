export type NavAnchorItem = {
  type: "anchor";
  label: string;
  href: `/#${string}`;
  sectionId: string;
};

export type NavPageItem = {
  type: "page";
  label: string;
  href: string;
};

export type NavExternalItem = {
  type: "external";
  label: string;
  href: string;
  newTab?: boolean;
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
  | "about"
  | "projects"
  | "services"
  | "experience"
  | "contact";

export type HomeSectionConfig = {
  key: HomeSectionKey;
  enabled: boolean;
  navId: string;
};

export type PortfolioConfig = {
  homepage: {
    sections: HomeSectionConfig[];
    hero: {
      badge: string;
      headline: string;
      subheadline: string;
      description: string;
      role: string;
      location: string;
      availability: string;
      primaryCta: {
        label: string;
        href: string;
      };
      secondaryCta: {
        label: string;
        href: string;
      };
      highlights: Array<{
        label: string;
        value: string;
        detail: string;
      }>;
    };
    about: {
      title: string;
      description: string;
      highlights: Array<{
        title: string;
        description: string;
      }>;
    };
    projects: {
      title: string;
      description: string;
      items: Array<{
        title: string;
        summary: string;
        year: string;
        role: string;
        tags: string[];
        link: {
          label: string;
          href: string;
        };
      }>;
    };
    services: {
      title: string;
      description: string;
      items: Array<{
        title: string;
        description: string;
        tools: string[];
      }>;
    };
    experience: {
      title: string;
      description: string;
      roles: Array<{
        company: string;
        role: string;
        period: string;
        summary: string;
      }>;
    };
    contact: {
      title: string;
      description: string;
      email: string;
      location: string;
      availability: string;
      cta: {
        label: string;
        href: string;
      };
    };
  };
};
