import appScreen from "../assets/images/app-screen.png";
import messageScreen from "../assets/images/message.png";
import cursorScreen from "../assets/images/cursor.png";
import type { Product } from "./types";

const appScreenshots = [
  { src: appScreen, alt: "Project overview" },
  { src: messageScreen, alt: "Decision notes" },
  { src: cursorScreen, alt: "Review workflow" },
];

export const products: Product[] = [
  {
    slug: "app",
    name: "Lumen",
    tagline: "A calm mobile workspace for focused teams.",
    ogImage: "/og/default.png",
    screenshots: appScreenshots,
    primaryCta: {
      label: "Explore the app",
      href: "/product/app",
    },
    page: {
      nav: [
        { id: "overview", label: "Overview" },
        { id: "screenshots", label: "Screens" },
        { id: "how-it-works", label: "How it works" },
        { id: "features", label: "Benefits" },
        { id: "use-cases", label: "Use cases" },
        { id: "pricing", label: "Pricing" },
        { id: "faq", label: "FAQ" },
        { id: "get-started", label: "Get started" },
      ],
      order: ["hero", "screenshots", "howItWorks", "featureGrid", "useCases", "pricing", "faq", "finalCta"],
      hero: {
        id: "overview",
        eyebrow: "Mobile app",
        title: "Lumen keeps your team in flow, wherever work happens.",
        description: "Align priorities, capture decisions, and move projects forward without the noise.",
        primaryCta: {
          label: "Get the app",
          href: "#get-started",
        },
        secondaryCta: {
          label: "See screenshots",
          href: "#screenshots",
        },
        image: {
          src: appScreen,
          alt: "Lumen mobile workspace",
        },
      },
      screenshots: {
        id: "screenshots",
        title: "Designed for calm, focused work",
        description: "Three key surfaces that keep priorities clear and collaboration lightweight.",
        items: [
          {
            ...appScreenshots[0],
            caption: "A single view of priorities, timelines, and owners.",
          },
          {
            ...appScreenshots[1],
            caption: "Capture decisions and context without long threads.",
          },
          {
            ...appScreenshots[2],
            caption: "Move reviews forward with lightweight approvals.",
          },
        ],
      },
      howItWorks: {
        id: "how-it-works",
        title: "How Lumen works",
        description: "A simple loop that keeps teams aligned without status meetings.",
        steps: [
          {
            title: "Set the focus",
            description: "Define the work that matters this week and assign owners.",
          },
          {
            title: "Track progress lightly",
            description: "Check in with quick updates instead of long meetings.",
          },
          {
            title: "Ship with clarity",
            description: "Close the loop with decisions, handoffs, and next steps.",
          },
        ],
      },
      featureGrid: {
        id: "features",
        title: "Built for focus",
        description: "Benefits that protect attention and keep teams moving.",
        features: [
          {
            title: "Fewer meetings",
            description: "Stay aligned with short async updates that respect deep work.",
          },
          {
            title: "Clear priorities",
            description: "Highlight what matters most so teams never lose the thread.",
          },
          {
            title: "Context that sticks",
            description: "Keep decisions and rationale close to the work.",
          },
          {
            title: "Lightweight accountability",
            description: "Owners and due dates are visible without micromanagement.",
          },
          {
            title: "Mobile-first clarity",
            description: "All the essentials without the overload of desktop dashboards.",
          },
          {
            title: "Reliable momentum",
            description: "Progress stays visible even when plans shift.",
          },
        ],
      },
      useCases: {
        id: "use-cases",
        title: "Where teams use Lumen",
        description: "Ideal for fast-moving teams that still value calm.",
        items: [
          {
            title: "Product launches",
            description: "Coordinate across functions without a flood of status calls.",
          },
          {
            title: "Client onboarding",
            description: "Keep every handoff clear with lightweight check-ins.",
          },
          {
            title: "Leadership alignment",
            description: "Give leaders a clear snapshot without extra reporting.",
          },
        ],
      },
      pricing: {
        id: "pricing",
      },
      faq: {
        id: "faq",
        title: "Lumen FAQ",
        items: [
          {
            question: "How long does setup take?",
            answer: "Most teams can set up their workspace in under 30 minutes.",
          },
          {
            question: "Is Lumen mobile-only?",
            answer: "Lumen is mobile-first, with a web companion for deeper planning.",
          },
          {
            question: "What support is available?",
            answer: "Email support is included with priority options for larger teams.",
          },
        ],
      },
      finalCta: {
        id: "get-started",
        title: "Ready to try Lumen?",
        description: "Start with a focused workspace and invite your team when you're ready.",
        primaryCta: {
          label: "Start free",
          href: "/#pricing",
        },
        secondaryCta: {
          label: "Talk to us",
          href: "mailto:hello@example.com",
        },
      },
    },
  },
];

export default products;
