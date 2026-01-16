"use client";

import { portfolioConfig } from "@/content";
import { Container } from "./layout/Container";
import { MotionItem } from "./motion/MotionItem";
import { MotionSection } from "./motion/MotionSection";

type AboutSectionProps = {
  id?: string;
};

export const AboutSection = ({ id = "about" }: AboutSectionProps) => {
  const { about } = portfolioConfig.homepage;

  return (
    <MotionSection id={id} variant="staggerChildren" className="section-block relative">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <MotionItem>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--ink)/50">About</p>
            <h2 className="mt-4 text-3xl font-semibold text-(--ink) sm:text-4xl">{about.title}</h2>
            <p className="mt-5 text-lg text-(--ink)/70">{about.description}</p>
          </MotionItem>
          <div className="grid gap-4">
            {about.highlights.map((item) => (
              <MotionItem key={item.title}>
                <div className="rounded-2xl border border-(--ink)/10 bg-white/70 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                  <h3 className="text-base font-semibold text-(--ink)">{item.title}</h3>
                  <p className="mt-2 text-sm text-(--ink)/65">{item.description}</p>
                </div>
              </MotionItem>
            ))}
          </div>
        </div>
      </Container>
    </MotionSection>
  );
};
