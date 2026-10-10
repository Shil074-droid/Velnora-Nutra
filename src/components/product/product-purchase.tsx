"use client";

import { useState } from "react";
import { Check, ShoppingBag } from "lucide-react";

import { QuantityStepper } from "@/components/ui/quantity-stepper";
import { useCart } from "@/lib/cart/cart-context";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

export function ProductPurchase({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  function addToCart() {
    addItem(product.id, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="purchase-panel">
      <div className="purchase-price"><strong>{formatPrice(product.price, product.currency)}</strong><span>Illustrative demo price</span></div>
      <div className="purchase-controls">
        <QuantityStepper value={quantity} onChange={setQuantity} />
        <button type="button" className="button-dark purchase-button" onClick={addToCart}>
          {added ? <Check size={17} aria-hidden="true" /> : <ShoppingBag size={17} aria-hidden="true" />}
          {added ? "Added to cart" : "Add to cart"}
        </button>
      </div>
      <p className="purchase-note">Demo item only. Product details, availability, and price require approval.</p>
    </div>
  );
}
