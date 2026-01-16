"use client";

import { portfolioConfig } from "@/content";
import { Container } from "./layout/Container";
import { MotionItem } from "./motion/MotionItem";
import { MotionSection } from "./motion/MotionSection";

type ServicesSectionProps = {
  id?: string;
};

export const ServicesSection = ({ id = "services" }: ServicesSectionProps) => {
  const { services } = portfolioConfig.homepage;

  return (
    <MotionSection id={id} variant="staggerChildren" className="section-block relative">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <MotionItem>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--ink)/50">Capabilities</p>
            <h2 className="mt-4 text-3xl font-semibold text-(--ink) sm:text-4xl">{services.title}</h2>
            <p className="mt-4 max-w-2xl text-lg text-(--ink)/70">{services.description}</p>
          </MotionItem>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.items.map((item) => (
            <MotionItem key={item.title}>
              <div className="flex h-full flex-col rounded-3xl border border-(--ink)/10 bg-white/80 p-6 shadow-[0_20px_40px_rgba(15,23,42,0.06)]">
                <h3 className="text-lg font-semibold text-(--ink)">{item.title}</h3>
                <p className="mt-3 text-sm text-(--ink)/65">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-(--ink)/60">
                  {item.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-(--ink)/15 px-3 py-1">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </MotionItem>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
};
