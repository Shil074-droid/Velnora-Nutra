"use client";

import Link from "next/link";
import { ArrowRight, Trash2 } from "lucide-react";

import { ProductArt } from "@/components/product/product-art";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { QuantityStepper } from "@/components/ui/quantity-stepper";
import { useCart } from "@/lib/cart/cart-context";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { lines, itemCount, subtotal, setQuantity, removeItem, clearCart } =
    useCart();

  if (lines.length === 0) {
    return (
      <Container className="flex flex-col items-center gap-6 py-28 text-center">
        <h1 className="font-serif text-4xl text-charcoal">Your cart is empty</h1>
        <p className="max-w-sm text-charcoal/60">
          You have not added anything yet. Explore the collection to find a
          formulation that suits you.
        </p>
        <ButtonLink href="/collections">
          Browse products
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
      </Container>
    );
  }

  return (
    <Container className="py-16">
      <div className="flex items-end justify-between gap-6 pb-10">
        <h1 className="font-serif text-4xl text-charcoal">Your cart</h1>
        <button
          type="button"
          onClick={clearCart}
          className="text-sm text-charcoal/60 underline underline-offset-4 transition-colors hover:text-danger"
        >
          Clear cart
        </button>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <ul className="flex flex-col divide-y divide-line border-y border-line">
          {lines.map(({ product, quantity, lineTotal }) => (
            <li key={product.id} className="flex gap-5 py-6">
              <ProductArt
                product={product}
                className="h-28 w-24 shrink-0"
              />
              <div className="flex flex-1 flex-col justify-between gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-serif text-lg leading-snug text-charcoal">
                      <Link
                        href={`/products/${product.slug}`}
                        className="transition-colors hover:text-forest"
                      >
                        {product.name}
                      </Link>
                    </h2>
                    <p className="mt-0.5 text-sm text-charcoal/60">
                      {product.form} · {product.servings} servings
                    </p>
                  </div>
                  <p className="shrink-0 font-serif text-lg text-charcoal">
                    {formatPrice(lineTotal, product.currency)}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <QuantityStepper
                    value={quantity}
                    onChange={(next) => setQuantity(product.id, next)}
                    max={99}
                  />
                  <button
                    type="button"
                    onClick={() => removeItem(product.id)}
                    aria-label={`Remove ${product.name} from cart`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-charcoal/50 transition-colors hover:bg-danger/5 hover:text-danger"
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-soft border border-line bg-cream p-6">
          <h2 className="font-serif text-xl text-charcoal">Summary</h2>
          <dl className="mt-5 flex flex-col gap-3 text-sm">
            <div className="flex items-center justify-between">
              <dt className="text-charcoal/60">
                Subtotal ({itemCount} item{itemCount === 1 ? "" : "s"})
              </dt>
              <dd className="font-medium text-charcoal">
                {formatPrice(subtotal)}
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-charcoal/60">Shipping</dt>
              <dd className="text-charcoal/60">Not configured</dd>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-line pt-4 text-base">
              <dt className="text-charcoal/60">Tax and duties</dt>
              <dd className="text-charcoal/60">Not calculated</dd>
            </div>
          </dl>

          <ButtonLink href="/checkout" className="mt-6 w-full">
            Continue to demo checkout
          </ButtonLink>
          <p className="mt-3 text-center text-xs text-charcoal/50">
            Demo only. No payment is processed.
          </p>
        </aside>
      </div>
    </Container>
  );
}
