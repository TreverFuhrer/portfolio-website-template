import type { PortfolioConfig } from "./types";

export const portfolioConfig: PortfolioConfig = {
  homepage: {
    sections: [
      { key: "hero", enabled: true, navId: "top" },
      { key: "about", enabled: true, navId: "about" },
      { key: "projects", enabled: true, navId: "work" },
      { key: "services", enabled: true, navId: "services" },
      { key: "experience", enabled: true, navId: "experience" },
      { key: "contact", enabled: true, navId: "contact" },
    ],
    hero: {
      badge: "Product designer + front-end",
      headline: "Avery Reed",
      subheadline: "Designing warm, confident product experiences.",
      description:
        "I help teams turn complex ideas into clear, elegant interfaces that feel effortless to use.",
      role: "Design systems / UX / Interface craft",
      location: "Based in Portland, OR",
      availability: "Booking Q2 2025",
      primaryCta: {
        label: "Start a project",
        href: "/#contact",
      },
      secondaryCta: {
        label: "View case studies",
        href: "/#work",
      },
      highlights: [
        {
          label: "Experience",
          value: "8+ years",
          detail: "Product design and front-end delivery",
        },
        {
          label: "Projects shipped",
          value: "40+",
          detail: "From MVPs to enterprise platforms",
        },
        {
          label: "Focus",
          value: "Calm systems",
          detail: "Accessible design that scales",
        },
      ],
    },
    about: {
      title: "About",
      description:
        "I blend product strategy, visual systems, and front-end fluency to ship work that feels intentional and effortless. My process is collaborative, research-led, and grounded in real business outcomes.",
      highlights: [
        {
          title: "Strategy + execution",
          description: "From discovery to delivery, I keep teams aligned and moving fast.",
        },
        {
          title: "Systems thinking",
          description: "Designing reusable patterns that scale across products and teams.",
        },
        {
          title: "Accessible by default",
          description: "Inclusive UX and WCAG-aware UI decisions baked into every build.",
        },
      ],
    },
    projects: {
      title: "Selected work",
      description: "A few recent collaborations across fintech, health, and creator tools.",
      items: [
        {
          title: "Northwind Billing",
          summary: "Reimagined the billing experience to cut churn and increase upgrade conversion.",
          year: "2024",
          role: "Lead product designer",
          tags: ["Research", "Design system", "UI"],
          link: {
            label: "Request the case study",
            href: "/#contact",
          },
        },
        {
          title: "Juniper Health",
          summary: "Built a patient onboarding flow that reduced drop-off by 32%.",
          year: "2023",
          role: "Product designer + front-end",
          tags: ["UX", "Prototyping", "Accessibility"],
          link: {
            label: "Request the case study",
            href: "/#contact",
          },
        },
        {
          title: "Signal Studio",
          summary: "Created a modular creator dashboard for scheduling, insights, and payouts.",
          year: "2022",
          role: "Design systems lead",
          tags: ["Systems", "Brand", "Motion"],
          link: {
            label: "Request the case study",
            href: "/#contact",
          },
        },
      ],
    },
    services: {
      title: "Capabilities",
      description: "Engagements tailored for product teams that want velocity without chaos.",
      items: [
        {
          title: "Product strategy",
          description: "Vision, positioning, and roadmaps that keep the team laser-focused.",
          tools: ["Workshops", "Roadmaps", "User research"],
        },
        {
          title: "Design systems",
          description: "Scalable components, tokens, and documentation that ship faster.",
          tools: ["Figma", "Tokens", "Component libraries"],
        },
        {
          title: "Interface design",
          description: "High-fidelity UI with motion and accessibility baked in.",
          tools: ["Prototyping", "Motion", "Front-end handoff"],
        },
      ],
    },
    experience: {
      title: "Experience",
      description: "Recent roles and long-term partnerships.",
      roles: [
        {
          company: "Fathom Labs",
          role: "Lead product designer",
          period: "2021 - Present",
          summary: "Owned platform UX, shipped a new design system, and led a cross-functional design squad.",
        },
        {
          company: "Beacon Health",
          role: "Senior UX designer",
          period: "2018 - 2021",
          summary: "Drove patient experience across mobile and web, improving NPS by 18 points.",
        },
        {
          company: "Independent studio",
          role: "Product designer",
          period: "2015 - 2018",
          summary: "Partnered with early-stage founders on brand, UX, and go-to-market design.",
        },
      ],
    },
    contact: {
      title: "Let's build something thoughtful",
      description: "Tell me about your product, timeline, and goals. I respond within two business days.",
      email: "hello@averyreed.studio",
      location: "Portland, OR",
      availability: "Limited spots for Q2 2025",
      cta: {
        label: "Email me",
        href: "mailto:hello@averyreed.studio",
      },
    },
  },
};

export default portfolioConfig;
