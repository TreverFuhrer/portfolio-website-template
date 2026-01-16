import type { ReactNode } from "react";

import { cn } from "../lib/utils";

type StackProps = {
  children: ReactNode;
  className?: string;
};

export function Stack({ children, className }: StackProps) {
  return <div className={cn("flex flex-col", className)}>{children}</div>;
}
