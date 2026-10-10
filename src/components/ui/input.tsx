import { cn } from "@/lib/utils";
import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

/** Labelled text input with consistent focus + error styling. */
export const Input = function Input({
  label,
  error,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label ? (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-charcoal"
        >
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        aria-invalid={error ? true : undefined}
        className={cn(
          "h-11 w-full rounded-soft border bg-cream px-3.5 text-sm text-charcoal placeholder:text-charcoal/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-forest",
          error ? "border-danger" : "border-line focus:border-forest",
          className,
        )}
        {...props}
      />
      {error ? <p className="text-xs text-danger">{error}</p> : null}
    </div>
  );
};
