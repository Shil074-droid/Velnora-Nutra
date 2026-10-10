import { notFound } from "next/navigation";

import { CollectionBrowser } from "@/components/product/collection-browser";
import { getCategoryBySlug } from "@/lib/data/categories";
import { products } from "@/lib/data/products";
import type { ProductCategory } from "@/lib/types";

export function generateStaticParams() {
  return ["longevity", "immunity", "cognition", "vitality", "digestive", "beauty"].map((slug) => ({ slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getCategoryBySlug(slug)) notFound();
  return <CollectionBrowser products={products} initialCategory={slug as ProductCategory} />;
}
