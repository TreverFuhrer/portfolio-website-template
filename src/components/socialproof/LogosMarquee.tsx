"use client";

import Image from "next/image";
import type { Logo } from "@/content";
import { cn } from "../lib/utils";
import { useReducedMotionPref } from "../../motion/useReducedMotionPref";

type LogosMarqueeProps = {
  logos: Logo[];
  className?: string;
};

export const LogosMarquee = ({ logos, className }: LogosMarqueeProps) => {
  const reducedMotion = useReducedMotionPref();

  if (reducedMotion) {
    return (
      <div className={cn("grid grid-cols-2 items-center justify-center gap-6 sm:grid-cols-3", className)}>
        {logos.map((logo, index) => (
          <div key={`${logo.alt}-${index}`} className="flex items-center justify-center">
            <Image src={logo.src} alt={logo.alt} sizes="120px" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("logo-marquee inline-flex w-full flex-nowrap overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]", className)}>
      <div className="logo-marquee-track">
        <ul className="flex w-max items-center justify-start [&_li]:mx-8 [&_img]:max-w-none">
          {logos.map((logo, index) => (
            <li key={`${logo.alt}-${index}`}>
              <Image src={logo.src} alt={logo.alt} sizes="120px" />
            </li>
          ))}
        </ul>
        <ul className="flex w-max items-center justify-start [&_li]:mx-8 [&_img]:max-w-none" aria-hidden="true">
          {logos.map((logo, index) => (
            <li key={`${logo.alt}-${index}-repeat`}>
              <Image src={logo.src} alt={logo.alt} sizes="120px" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LogosMarquee;
