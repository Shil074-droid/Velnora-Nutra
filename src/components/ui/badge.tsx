import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BadgeTone = "neutral" | "forest" | "gold";

const tones: Record<BadgeTone, string> = {
  neutral: "bg-stone text-charcoal",
  forest: "bg-forest text-ivory",
  gold: "bg-gold/20 text-forest",
};

export interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}

/** Small pill label for badges such as "Bestseller" or "New". */
export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[0.6875rem] font-medium uppercase",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
