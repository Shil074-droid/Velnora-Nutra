import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Centered content column with responsive page gutters. */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-content px-gutter",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Vertical rhythm wrapper for page sections. */
export function Section({
  children,
  className,
  as: Tag = "section",
}: {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "aside";
}) {
  return (
    <Tag className={cn("py-16 sm:py-24", className)}>
      <Container>{children}</Container>
    </Tag>
  );
}
