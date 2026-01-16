"use client";

import { portfolioConfig } from "@/content";
import { ArrowIcon } from "./icons";
import { Container } from "./layout/Container";
import { MotionItem } from "./motion/MotionItem";
import { MotionSection } from "./motion/MotionSection";

type ContactSectionProps = {
  id?: string;
};

export const ContactSection = ({ id = "contact" }: ContactSectionProps) => {
  const { contact } = portfolioConfig.homepage;

  return (
    <MotionSection id={id} variant="staggerChildren" className="section-block relative">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-(--ink)/10 bg-[linear-gradient(135deg,rgba(251,146,60,0.15),rgba(14,165,233,0.12),rgba(255,255,255,0.9))] p-8 shadow-[0_30px_80px_rgba(15,23,42,0.12)] sm:p-12">
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(251,146,60,0.35),transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-24 left-[-10%] h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.2),transparent_70%)] blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <MotionItem>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--ink)/50">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold text-(--ink) sm:text-4xl">{contact.title}</h2>
              <p className="mt-4 text-lg text-(--ink)/70">{contact.description}</p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-(--ink)/60">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-(--brand-1)" aria-hidden="true" />
                  <span>{contact.availability}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-(--brand-2)" aria-hidden="true" />
                  <span>{contact.location}</span>
                </div>
              </div>
            </MotionItem>
            <MotionItem className="flex flex-col justify-center rounded-2xl border border-(--ink)/10 bg-white/80 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-(--ink)/50">Email</div>
              <a
                href={`mailto:${contact.email}`}
                className="mt-3 text-lg font-semibold text-(--ink) underline-offset-4 transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-2)"
              >
                {contact.email}
              </a>
              <a
                href={contact.cta.href}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-(--ink) px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-2)"
              >
                {contact.cta.label}
                <ArrowIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-(--ink)/50">
                Typically responds within 2 business days
              </p>
            </MotionItem>
          </div>
        </div>
      </Container>
    </MotionSection>
  );
};
