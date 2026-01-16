import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "../lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: ElementType;
  padding?: "default" | "none";
} & Omit<ComponentPropsWithoutRef<"section">, "children" | "className" | "id">;

const paddingClasses: Record<NonNullable<SectionProps["padding"]>, string> = {
  default: "py-18 sm:py-24",
  none: "",
};

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { children, className, id, as: Comp = "section", padding = "default", ...props },
  ref,
) {
  return (
    <Comp
      id={id}
      ref={ref as never}
      className={cn(paddingClasses[padding], className)}
      {...props}
    >
      {children}
    </Comp>
  );
});
