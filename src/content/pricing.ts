import type { PricingPlan } from "./types";

type PricingSection = {
  title: string;
  description: string;
  billing: {
    yearlyLabel: string;
    monthlyLabel: string;
    yearlyDiscount: string;
    priceSuffix: string;
  };
  includesLabel: string;
  popularBadge: string;
  plans: PricingPlan[];
};

export const pricingSection: PricingSection = {
  title: "Pricing",
  description: "Pricing body copy goes here.",
  billing: {
    yearlyLabel: "Yearly",
    monthlyLabel: "Monthly",
    yearlyDiscount: "-20%",
    priceSuffix: "/mo",
  },
  includesLabel: "Includes:",
  popularBadge: "Top Pick",
  plans: [
    {
      id: "starter",
      name: "Plan Name",
      description: "Plan description goes here.",
      price: {
        yearly: 29,
        monthly: 35,
      },
      features: ["Feature one", "Feature two", "Feature three", "Feature four"],
      ctaLabel: "Primary CTA",
    },
    {
      id: "pro",
      name: "Plan Name",
      description: "Plan description goes here.",
      price: {
        yearly: 49,
        monthly: 55,
      },
      features: ["Feature one", "Feature two", "Feature three", "Feature four", "Feature five"],
      ctaLabel: "Primary CTA",
      popular: true,
    },
    {
      id: "team",
      name: "Plan Name",
      description: "Plan description goes here.",
      price: {
        yearly: 79,
        monthly: 85,
      },
      features: ["Feature one", "Feature two", "Feature three", "Feature four", "Feature five", "Feature six"],
      ctaLabel: "Primary CTA",
    },
  ],
};

export default pricingSection;
