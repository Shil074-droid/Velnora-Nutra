import type { Category } from "@/lib/types";

/** Product categories shown in navigation and collection pages. */
export const categories: Category[] = [
  {
    id: "longevity",
    slug: "longevity",
    name: "Longevity",
    tagline: "A category for daily formulas.",
    description: "Illustrative products grouped under longevity for this demo.",
  },
  {
    id: "immunity",
    slug: "immunity",
    name: "Immunity",
    tagline: "A category for vitamin and mineral formulas.",
    description: "Illustrative products grouped under immunity for this demo.",
  },
  {
    id: "cognition",
    slug: "cognition",
    name: "Cognition",
    tagline: "A category for selected ingredient blends.",
    description: "Illustrative products grouped under cognition for this demo.",
  },
  {
    id: "vitality",
    slug: "vitality",
    name: "Vitality",
    tagline: "A category for everyday formats.",
    description: "Illustrative products grouped under vitality for this demo.",
  },
  {
    id: "digestive",
    slug: "digestive",
    name: "Digestive",
    tagline: "A category for digestive formula concepts.",
    description: "Illustrative products grouped under digestive for this demo.",
  },
  {
    id: "beauty",
    slug: "beauty",
    name: "Beauty",
    tagline: "A category for selected powder formats.",
    description: "Illustrative products grouped under beauty for this demo.",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
