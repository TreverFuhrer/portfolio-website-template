"use client"
import { ChevronRight } from "lucide-react";

import { cn } from "./lib/utils";
import AnimatedGradientText from "./animatedgradienttext";

type AnimatedGradientTextDemoProps = {
  text: string;
};

export function AnimatedGradientTextDemo({ text }: AnimatedGradientTextDemoProps) {
  return (
    <div className="z-10 flex -mt-9 items-center justify-center">
      <AnimatedGradientText>
        {/* Short highlight badge - swap this copy whenever you want. */}
        ✶ <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient motion-reduce:animate-none bg-linear-to-r from-(--brand-2) via-(--brand-3) to-(--brand-2) bg-size-[var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          {text}
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </div>
  );
}
