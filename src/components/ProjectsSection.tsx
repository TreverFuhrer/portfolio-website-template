"use client";

import { portfolioConfig } from "@/content";
import { ArrowIcon } from "./icons";
import { Container } from "./layout/Container";
import { MotionItem } from "./motion/MotionItem";
import { MotionSection } from "./motion/MotionSection";

type ProjectsSectionProps = {
  id?: string;
};

export const ProjectsSection = ({ id = "work" }: ProjectsSectionProps) => {
  const { projects } = portfolioConfig.homepage;

  return (
    <MotionSection id={id} variant="staggerChildren" className="section-block relative">
      <Container>
        <MotionItem>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--ink)/50">Work</p>
              <h2 className="mt-4 text-3xl font-semibold text-(--ink) sm:text-4xl">{projects.title}</h2>
              <p className="mt-4 max-w-2xl text-lg text-(--ink)/70">{projects.description}</p>
            </div>
          </div>
        </MotionItem>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.items.map((item) => (
            <MotionItem key={item.title}>
              <article className="flex h-full flex-col rounded-3xl border border-(--ink)/10 bg-white/80 p-6 shadow-[0_24px_50px_rgba(15,23,42,0.08)]">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-(--ink)/50">
                  <span>{item.year}</span>
                  <span>{item.role}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-(--ink)">{item.title}</h3>
                <p className="mt-3 text-sm text-(--ink)/65">{item.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2 text-xs text-(--ink)/60" aria-label={`${item.title} tags`}>
                  {item.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-(--ink)/15 px-3 py-1">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a
                    href={item.link.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-(--brand-1) transition hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-2)"
                  >
                    {item.link.label}
                    <ArrowIcon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </MotionItem>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
};
