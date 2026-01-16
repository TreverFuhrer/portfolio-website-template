"use client";

import { portfolioConfig } from "@/content";
import { Container } from "./layout/Container";
import { MotionItem } from "./motion/MotionItem";
import { MotionSection } from "./motion/MotionSection";

type ExperienceSectionProps = {
  id?: string;
};

export const ExperienceSection = ({ id = "experience" }: ExperienceSectionProps) => {
  const { experience } = portfolioConfig.homepage;

  return (
    <MotionSection id={id} variant="staggerChildren" className="section-block relative">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <MotionItem>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--ink)/50">Experience</p>
            <h2 className="mt-4 text-3xl font-semibold text-(--ink) sm:text-4xl">{experience.title}</h2>
            <p className="mt-4 text-lg text-(--ink)/70">{experience.description}</p>
          </MotionItem>
          <div className="flex flex-col gap-4">
            {experience.roles.map((role) => (
              <MotionItem key={`${role.company}-${role.period}`}>
                <div className="rounded-2xl border border-(--ink)/10 bg-white/80 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.2em] text-(--ink)/50">
                    <span>{role.company}</span>
                    <span>{role.period}</span>
                  </div>
                  <div className="mt-3 text-base font-semibold text-(--ink)">{role.role}</div>
                  <p className="mt-2 text-sm text-(--ink)/65">{role.summary}</p>
                </div>
              </MotionItem>
            ))}
          </div>
        </div>
      </Container>
    </MotionSection>
  );
};
