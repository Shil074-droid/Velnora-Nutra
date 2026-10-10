"use client";

import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface QuantityStepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
  className?: string;
}

/**
 * Controlled −/+ quantity control used on product cards and in the cart.
 */
export function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 99,
  disabled = false,
  className,
}: QuantityStepperProps) {
  const decrement = () => onChange(Math.max(min, value - 1));
  const increment = () => onChange(Math.min(max, value + 1));

  return (
    <div
      className={cn(
        "inline-flex h-11 items-center rounded-full border border-line bg-cream",
        disabled && "opacity-50",
        className,
      )}
    >
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={decrement}
        disabled={disabled || value <= min}
        className="grid h-11 w-11 place-items-center rounded-full text-forest transition-colors hover:bg-forest/5 disabled:opacity-30"
      >
        <Minus className="h-4 w-4" aria-hidden="true" />
      </button>
      <span
        aria-live="polite"
        className="min-w-8 text-center text-sm font-medium tabular-nums text-charcoal"
      >
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={increment}
        disabled={disabled || value >= max}
        className="grid h-11 w-11 place-items-center rounded-full text-forest transition-colors hover:bg-forest/5 disabled:opacity-30"
      >
        <Plus className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
