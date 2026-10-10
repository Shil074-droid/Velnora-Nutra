/**
 * Tiny dependency-free helpers shared across the app.
 */

/** Class name joiner — keeps conditional class lists readable. */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

const priceFormatters = new Map<string, Intl.NumberFormat>();

/** Format a number as a currency string (memoised per currency/locale). */
export function formatPrice(
  value: number,
  currency = "USD",
  locale = "en-US",
): string {
  const key = `${currency}:${locale}`;
  let formatter = priceFormatters.get(key);
  if (!formatter) {
    formatter = new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    });
    priceFormatters.set(key, formatter);
  }
  return formatter.format(value);
}

/** Pluralise a label for a given count. */
export function pluralize(count: number, singular: string, plural?: string): string {
  return count === 1 ? singular : (plural ?? `${singular}s`);
}

/** Clamp a number between min and max. */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** Turn a string into a URL-safe slug. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
