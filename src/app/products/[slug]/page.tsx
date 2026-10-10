import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductArt } from "@/components/product/product-art";
import { ProductPurchase } from "@/components/product/product-purchase";
import { Container } from "@/components/ui/section";
import { getProductBySlug, products } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return product ? { title: product.name, description: product.description } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const related = products.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <>
      <Container className="product-detail-page">
        <p className="eyebrow product-breadcrumb"><Link href="/collections">The collection</Link><span>/</span>{product.category}</p>
        <div className="product-detail-grid">
          <div className="product-gallery"><ProductArt product={product} className="product-detail-art" /><p>Provisional packaging concept for demonstration. Client product imagery not supplied.</p></div>
          <div className="product-information">
            <p className="eyebrow">{product.category} / {product.form}</p>
            <h1>{product.name}</h1>
            <p className="product-tagline">{product.tagline}</p>
            <p className="product-description">{product.description}</p>
            <p className="detail-price">{formatPrice(product.price, product.currency)} <span>Illustrative price</span></p>
            <ProductPurchase product={product} />
            <div className="product-quick-facts">
              <div><span>Format</span><strong>{product.form}</strong></div>
              <div><span>Serving count</span><strong>{product.servings} (provisional)</strong></div>
              <div><span>Market</span><strong>USD demo, availability unconfirmed</strong></div>
            </div>
          </div>
        </div>
        <div className="product-info-sections">
          <section><p className="eyebrow">Composition / provisional</p><h2>What is in the formula</h2><p>{product.ingredients}</p><small>Ingredients and amounts are unverified sample content. A complete approved label has not been supplied.</small></section>
          <section><p className="eyebrow">Use / to be confirmed</p><h2>Directions and serving details</h2><p>The suggested serving, timing, and format should be confirmed against the finished product label before this page is published.</p></section>
          <section><p className="eyebrow">Quality / client information needed</p><h2>Standards and sourcing</h2><p>No manufacturing, origin, testing, or certification information has been provided for this demo. No quality or sourcing claim is implied.</p></section>
          <section><p className="eyebrow">Storage and cautions / to be confirmed</p><h2>Before use</h2><p>Storage instructions, warnings, allergen information, and market-specific label copy require review by the product owner and qualified regulatory counsel.</p></section>
        </div>
      </Container>
      <section className="related-products"><Container><p className="eyebrow">Continue exploring</p><h2>More from the demo collection</h2><div className="collection-grid">{related.map((item) => <Link className="related-product" key={item.id} href={`/products/${item.slug}`}><ProductArt product={item} className="related-art" /><span>{item.name}</span><span>{formatPrice(item.price, item.currency)}</span></Link>)}</div></Container></section>
    </>
  );
}
