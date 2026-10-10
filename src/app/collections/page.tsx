import type { Metadata } from "next";

import { CollectionBrowser } from "@/components/product/collection-browser";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "The collection",
  description: "Browse provisional Velnora Nutra demo formulas.",
};

export default function CollectionPage() {
  return <CollectionBrowser products={products} />;
}
