import { forwardRef } from "react";
import type { ElementType, ReactNode } from "react";

import { cn } from "../lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export const Container = forwardRef<HTMLElement, ContainerProps>(function Container(
  { children, className, as: Comp = "div" },
  ref,
) {
  return (
    <Comp ref={ref as never} className={cn("container", className)}>
      {children}
    </Comp>
  );
});
