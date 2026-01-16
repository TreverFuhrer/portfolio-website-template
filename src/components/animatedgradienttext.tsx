import { ReactNode } from "react";

import { cn } from "./lib/utils";

export default function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/10 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_rgba(20,184,166,0.15)] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_rgba(20,184,166,0.3)]",
        className,
      )}
    >
      <div
        className={`absolute inset-0 block h-full w-full animate-gradient motion-reduce:animate-none bg-linear-to-r from-(--brand-2)/50 via-(--brand-1)/50 to-(--brand-2)/50 bg-size-[var(--bg-size)_100%] p-px mask-subtract! rounded-[inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`}
      />

      {children}
    </div>
  );
}
