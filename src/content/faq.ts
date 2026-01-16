import type { FaqItem } from "./types";

type FaqSection = {
  title: string;
  items: FaqItem[];
};

export const faqSection: FaqSection = {
  title: "Company FAQ",
  items: [
    {
      question: "What kind of company are you building?",
      answer: "We build calm, durable software that helps teams focus on meaningful work.",
    },
    {
      question: "Who are your products for?",
      answer: "For teams that value clarity, thoughtful workflows, and long-term thinking.",
    },
    {
      question: "When will the next product launch?",
      answer: "We share updates through our newsletter and early-access waitlist.",
    },
    {
      question: "Can I get involved early?",
      answer: "Yes. Join the waitlist to see what we are building and share feedback.",
    },
  ],
};

export default faqSection;
