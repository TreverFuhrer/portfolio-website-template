"use client"
import CursorImage from '../assets/images/cursor.png'
import MessageImage from '../assets/images/message.png'
import Image from 'next/image';
import { motion } from "framer-motion";
import { AnimatedGradientTextDemo } from './animatedtext';
import { Container } from "./layout/Container";
import { MotionItem } from "./motion/MotionItem";
import { MotionSection } from "./motion/MotionSection";
import { companyConfig } from "@/content";

type HeroProps = {
  id?: string;
};

export const Hero = ({ id = "top" }: HeroProps) => {
  const { hero } = companyConfig.homepage;
  const { heroVisual } = companyConfig;
  const missionHighlights = companyConfig.homepage.mission.points.slice(0, 3);

  return (
    <MotionSection
      id={id}
      variant="staggerChildren"
      className="relative overflow-hidden bg-(--ink) text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.35),transparent_65%)] blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.3),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,7,11,0.7),rgba(11,31,42,0.92),rgba(11,58,58,0.95))]" />
      </div>
      <Container className="relative">
        <div className="grid items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <MotionItem>
              <AnimatedGradientTextDemo text={hero.badge} />
            </MotionItem>
            <MotionItem>
              {/* Big headline lives here. */}
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                {hero.headline}
                <span className="mt-3 block text-white/70">{hero.subheadline}</span>
              </h1>
            </MotionItem>
            <MotionItem>
              {/* Short pitch goes here. */}
              <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">{hero.description}</p>
            </MotionItem>
            <MotionItem className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-1)"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-medium text-white/80 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-1)"
              >
                {hero.secondaryCta.label}
              </a>
            </MotionItem>
          </div>
          <MotionItem className="relative">
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-6 rounded-[32px] bg-[radial-gradient(circle,rgba(20,184,166,0.25),transparent_60%)] blur-3xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/50">
                  <span>Our principles</span>
                  <span>Built to last</span>
                </div>
                <div className="mt-6 grid gap-4">
                  {missionHighlights.map((point) => (
                    <div key={point.title} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                      <div className="text-sm font-semibold text-white">{point.title}</div>
                      <div className="mt-2 text-sm text-white/70">{point.description}</div>
                    </div>
                  ))}
                </div>
                <Image
                  src={heroVisual.primary.src}
                  alt={heroVisual.primary.alt}
                  className="pointer-events-none absolute -right-8 -top-10 w-36 opacity-70"
                  aria-hidden="true"
                />
                {heroVisual.secondary ? (
                  <Image
                    src={heroVisual.secondary.src}
                    alt={heroVisual.secondary.alt}
                    className="pointer-events-none absolute -bottom-6 left-4 w-20 opacity-80"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
              <motion.div className="absolute -left-6 top-12 hidden sm:block" drag dragSnapToOrigin>
                <Image src={CursorImage} alt="" height={160} width={160} className="max-w-none" draggable="false" aria-hidden="true" />
              </motion.div>
              <motion.div className="absolute -right-8 bottom-10 hidden sm:block" drag dragSnapToOrigin>
                <Image src={MessageImage} alt="" height={160} width={160} className="max-w-none" draggable="false" aria-hidden="true" />
              </motion.div>
            </div>
          </MotionItem>
        </div>
      </Container>
    </MotionSection>
  )
};
