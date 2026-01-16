"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowIcon } from "./icons";
import { Container } from "./layout/Container";
import { MotionItem } from "./motion/MotionItem";
import { MotionSection } from "./motion/MotionSection";
import { portfolioConfig } from "@/content";

type HeroProps = {
  id?: string;
};

export const Hero = ({ id = "top" }: HeroProps) => {
  const { hero } = portfolioConfig.homepage;
  const reduceMotion = useReducedMotion();

  return (
    <MotionSection id={id} variant="staggerChildren" padding="none" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-[-10%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(251,146,60,0.35),transparent_65%)] blur-3xl" />
        <div className="absolute bottom-[-15%] left-[-10%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,244,238,0.98),rgba(248,244,238,0.86),rgba(255,255,255,0.92))]" />
      </div>
      <Container className="relative">
        <div className="grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <MotionItem>
              <span className="inline-flex items-center rounded-full border border-(--ink)/10 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-(--ink)/60">
                {hero.badge}
              </span>
            </MotionItem>
            <MotionItem>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-(--ink) sm:text-6xl">
                {hero.headline}
                <span className="mt-3 block text-(--ink)/60">{hero.subheadline}</span>
              </h1>
            </MotionItem>
            <MotionItem>
              <p className="mt-6 max-w-xl text-lg text-(--ink)/70 sm:text-xl">{hero.description}</p>
            </MotionItem>
            <MotionItem className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center gap-2 rounded-full bg-(--ink) px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-2)"
              >
                {hero.primaryCta.label}
                <ArrowIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-(--ink)/20 px-6 py-3 text-sm font-semibold text-(--ink)/70 transition hover:border-(--ink)/40 hover:text-(--ink) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-2)"
              >
                {hero.secondaryCta.label}
              </a>
            </MotionItem>
            <MotionItem className="mt-10 flex flex-wrap items-center gap-6 text-sm text-(--ink)/60">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-(--brand-1)" aria-hidden="true" />
                <span>{hero.availability}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-(--brand-2)" aria-hidden="true" />
                <span>{hero.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-(--brand-3)" aria-hidden="true" />
                <span>{hero.role}</span>
              </div>
            </MotionItem>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {hero.highlights.map((item) => (
                <MotionItem key={item.label} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-(--ink)/10 bg-white/80 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                    <div className="text-xs uppercase tracking-[0.2em] text-(--ink)/50">{item.label}</div>
                    <div className="mt-3 text-xl font-semibold text-(--ink)">{item.value}</div>
                    <div className="mt-2 text-sm text-(--ink)/60">{item.detail}</div>
                  </div>
                </MotionItem>
              ))}
            </div>
          </div>
          <MotionItem className="relative">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-8 rounded-[48px] bg-[radial-gradient(circle,rgba(251,146,60,0.28),transparent_70%)] blur-3xl" />
              <div className="absolute -right-10 top-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.3),transparent_70%)] blur-2xl" />
              <div className="relative overflow-hidden rounded-4xl border border-(--ink)/10 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.16)] backdrop-blur">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-(--ink)/50">
                  <span>Portfolio card</span>
                  <span>{hero.badge}</span>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f97316,#0ea5e9)] text-lg font-semibold text-white">
                    AR
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-(--ink)">{hero.headline}</div>
                    <div className="text-sm text-(--ink)/60">{hero.role}</div>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 text-sm text-(--ink)/70">
                  <div className="flex items-center justify-between rounded-xl border border-(--ink)/10 bg-white/70 px-4 py-3">
                    <span>Availability</span>
                    <span className="font-medium text-(--ink)">{hero.availability}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-(--ink)/10 bg-white/70 px-4 py-3">
                    <span>Location</span>
                    <span className="font-medium text-(--ink)">{hero.location}</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-(--ink)/50">
                  <span className="h-2 w-2 rounded-full bg-(--brand-2)" aria-hidden="true" />
                  <span>Remote-friendly collaborations</span>
                </div>
              </div>
              <motion.div
                className="absolute -left-6 bottom-10 hidden sm:flex"
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={reduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="rounded-2xl border border-(--ink)/10 bg-white/90 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-(--ink)/60 shadow-lg">
                  Now booking
                </div>
              </motion.div>
              <motion.div
                className="absolute -right-4 top-12 hidden sm:flex"
                animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
                transition={reduceMotion ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="rounded-2xl border border-(--ink)/10 bg-white/90 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-(--ink)/60 shadow-lg">
                  Launch-ready
                </div>
              </motion.div>
            </div>
          </MotionItem>
        </div>
      </Container>
    </MotionSection>
  );
};
