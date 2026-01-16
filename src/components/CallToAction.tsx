"use client"
import HelixImage from '../assets/images/helix2.png'
import EmojiImage from '../assets/images/emojistar.png'
import Image from 'next/image';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "./layout/Container";
import { MotionItem } from "./motion/MotionItem";
import { MotionSection } from "./motion/MotionSection";
import { useReducedMotionPref } from "../motion/useReducedMotionPref";
import { companyConfig } from "@/content";

type CallToActionProps = {
  id?: string;
};

export const CallToAction = ({ id = "cta" }: CallToActionProps) => {
  const { cta } = companyConfig.homepage;
  const reducedMotion = useReducedMotionPref();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <MotionSection
      id={id}
      ref={sectionRef}
      variant="staggerChildren"
      className="section-block bg-(--ink) text-white"
    >
      <Container className="max-w-xl relative text-center">
        <motion.div style={reducedMotion ? undefined : { y: translateY }}>
          {/* Decorative images - swap or remove if you want a cleaner CTA. */}
          <Image
            src={HelixImage}
            alt=""
            className="pointer-events-none absolute top-6 right-0 hidden md:block w-28 md:w-32 lg:w-40"
            aria-hidden="true"
          />
        </motion.div>
        <motion.div style={reducedMotion ? undefined : { y: translateY }}>
          <Image
            src={EmojiImage}
            alt=""
            className="pointer-events-none absolute -top-16 left-0 hidden md:block w-24 md:w-28 lg:w-36"
            aria-hidden="true"
          />
        </motion.div>

        {/* CTA headline + supporting copy. */}
        <MotionItem>
          <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">{cta.headline}</h2>
        </MotionItem>
        <MotionItem>
          <p className="mt-5 text-xl text-white/70">{cta.description}</p>
        </MotionItem>
        <MotionItem>
          <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              aria-label="Email address"
              placeholder={cta.inputPlaceholder}
              className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-1)"
            />
            <button
              type="submit"
              className="bg-white text-black h-12 rounded-lg px-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-1)"
            >
              {cta.primaryCta.label}
            </button>
          </form>
        </MotionItem>
      </Container>
    </MotionSection>
  );
};
