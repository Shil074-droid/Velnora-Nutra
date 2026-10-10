import type { Product } from "@/lib/types";

/** Illustrative products and prices. Replace with client-approved catalogue data. */
export const products: Product[] = [
  {
    id: "demo_verdant_daily",
    slug: "verdant-daily-complex",
    name: "Verdant Daily Complex",
    tagline: "A considered daily formula",
    description: "Provisional capsule formula for the storefront demonstration.",
    category: "longevity",
    price: 48,
    currency: "USD",
    servings: 30,
    form: "Capsules",
    ingredients: "Illustrative composition: NMN, trans-resveratrol, CoQ10.",
    featured: true,
    inStock: true,
    accent: "forest",
  },
  {
    id: "demo_aurora_blend",
    slug: "aurora-daily-blend",
    name: "Aurora Daily Blend",
    tagline: "A short, legible ingredient list",
    description: "Provisional capsule formula for the storefront demonstration.",
    category: "immunity",
    price: 34,
    currency: "USD",
    servings: 60,
    form: "Capsules",
    ingredients: "Illustrative composition: vitamin C, vitamin D3, zinc.",
    featured: true,
    inStock: true,
    accent: "sage",
  },
  {
    id: "demo_clarity_formula",
    slug: "clarity-formula",
    name: "Clarity Formula",
    tagline: "A simple capsule format",
    description: "Provisional capsule formula for the storefront demonstration.",
    category: "cognition",
    price: 39,
    currency: "USD",
    servings: 30,
    form: "Capsules",
    ingredients: "Illustrative composition: L-theanine, lion's mane, vitamin B6.",
    featured: true,
    inStock: true,
    accent: "stone",
  },
  {
    id: "demo_solstice_greens",
    slug: "solstice-greens",
    name: "Solstice Greens",
    tagline: "A scoopable greens blend",
    description: "Provisional powder formula for the storefront demonstration.",
    category: "vitality",
    price: 42,
    currency: "USD",
    servings: 30,
    form: "Powder",
    ingredients: "Illustrative composition: spirulina, chlorella, wheatgrass.",
    featured: true,
    inStock: true,
    accent: "sage",
  },
  {
    id: "demo_terrain_daily",
    slug: "terrain-daily-culture",
    name: "Terrain Daily Culture",
    tagline: "A capsule-based daily format",
    description: "Provisional capsule formula for the storefront demonstration.",
    category: "digestive",
    price: 36,
    currency: "USD",
    servings: 30,
    form: "Capsules",
    ingredients: "Illustrative composition: probiotic cultures and inulin.",
    inStock: true,
    accent: "gold",
  },
  {
    id: "demo_bloom_collagen",
    slug: "bloom-collagen-powder",
    name: "Bloom Collagen Powder",
    tagline: "A powder format for daily use",
    description: "Provisional powder formula for the storefront demonstration.",
    category: "beauty",
    price: 44,
    currency: "USD",
    servings: 27,
    form: "Powder",
    ingredients: "Illustrative composition: collagen peptides and vitamin C.",
    inStock: true,
    accent: "stone",
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}
