"use client";

import { useState } from "react";
import Link from "next/link";

import { ProductCard } from "@/components/product/product-card";
import { Container } from "@/components/ui/section";
import { categories } from "@/lib/data/categories";
import type { Product, ProductCategory } from "@/lib/types";

export function CollectionBrowser({
  products,
  initialCategory,
}: {
  products: Product[];
  initialCategory?: ProductCategory;
}) {
  const [category, setCategory] = useState(initialCategory ?? "all");
  const [format, setFormat] = useState("all");
  const [sort, setSort] = useState("featured");
  const [query, setQuery] = useState("");
  const formats = Array.from(new Set(products.map((product) => product.form)));
  const filtered = products
    .filter((product) => category === "all" || product.category === category)
    .filter((product) => format === "all" || product.form === format)
    .filter((product) => `${product.name} ${product.ingredients} ${product.category}`.toLowerCase().includes(query.toLowerCase().trim()))
    .sort((first, second) => {
      if (sort === "price-low") return first.price - second.price;
      if (sort === "price-high") return second.price - first.price;
      return Number(Boolean(second.featured)) - Number(Boolean(first.featured));
    });

  function reset() {
    setCategory(initialCategory ?? "all");
    setFormat("all");
    setSort("featured");
    setQuery("");
  }

  return (
    <Container className="collection-page">
      <div className="collection-heading">
        <p className="eyebrow">Velnora Nutra / demo catalogue</p>
        <h1>{initialCategory ? categories.find((item) => item.slug === initialCategory)?.name : "The collection"}</h1>
        <p>Six illustrative formulas, with provisional names, ingredient lists, and USD prices for layout demonstration only.</p>
      </div>
      <div className="collection-tools">
        <label className="collection-search"><span>Find a formula</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search name or ingredient" /></label>
        <label><span>Category</span><select value={category} onChange={(event) => setCategory(event.target.value as ProductCategory | "all")}><option value="all">All categories</option>{categories.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}</select></label>
        <label><span>Format</span><select value={format} onChange={(event) => setFormat(event.target.value)}><option value="all">All formats</option>{formats.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
        <label><span>Sort by</span><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">Featured</option><option value="price-low">Price, low to high</option><option value="price-high">Price, high to low</option></select></label>
      </div>
      <div className="collection-result-line"><p>{filtered.length} {filtered.length === 1 ? "formula" : "formulas"}</p>{(query || format !== "all" || category !== (initialCategory ?? "all") || sort !== "featured") && <button type="button" onClick={reset}>Reset filters</button>}</div>
      {filtered.length ? <div className="collection-grid">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="collection-empty"><h2>No formulas match those filters.</h2><p>Try another category, format, or search term.</p><button type="button" onClick={reset}>Reset filters</button></div>}
      <p className="collection-disclaimer">Illustrative products are not available to purchase. Add-to-cart actions demonstrate the storefront only.</p>
      <Link href="/shipping" className="text-link">About delivery and market availability</Link>
    </Container>
  );
}
