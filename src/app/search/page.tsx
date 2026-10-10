import Link from "next/link";
import { Container } from "@/components/ui/section";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/lib/data/products";

export const metadata = { title: "Search" };

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string | string[] }> }) {
  const { q } = await searchParams;
  const searchTerm = (Array.isArray(q) ? q[0] : q ?? "").trim();
  const query = searchTerm.toLowerCase();
  const matches = query ? products.filter((product) => `${product.name} ${product.tagline} ${product.ingredients} ${product.category}`.toLowerCase().includes(query)) : [];

  return <Container className="search-page simple-page"><p className="eyebrow">Search / demo catalogue</p><h1>{query ? `Results for “${searchTerm}”` : "Find a formula"}</h1><form action="/search" className="search-page-form"><label className="sr-only" htmlFor="search-query">Search product names or ingredients</label><input id="search-query" name="q" type="search" defaultValue={searchTerm} placeholder="Search names or ingredients" /><button type="submit" className="button-dark">Search</button></form>{!query ? <p>Search provisional names, ingredients, or categories.</p> : matches.length ? <><p>{matches.length} {matches.length === 1 ? "match" : "matches"}. Demo products only.</p><div className="collection-grid">{matches.map((product) => <ProductCard key={product.id} product={product} />)}</div></> : <div className="collection-empty"><h2>No matching formulas.</h2><p>Try another name or ingredient.</p><Link href="/collections" className="arrow-link">Browse all demo formulas <span aria-hidden="true">→</span></Link></div>}</Container>;
}
