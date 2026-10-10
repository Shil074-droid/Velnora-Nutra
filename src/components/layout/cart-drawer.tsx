"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X, Trash2 } from "lucide-react";

import { ProductArt } from "@/components/product/product-art";
import { QuantityStepper } from "@/components/ui/quantity-stepper";
import { useCart } from "@/lib/cart/cart-context";
import { formatPrice } from "@/lib/utils";

export function CartDrawerContent({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lines, subtotal, isEmpty, setQuantity, removeItem } = useCart();
  const dialogRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement;
    const focusable = () => dialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      if (!items?.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    focusable()?.[0]?.focus();
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="drawer-backdrop" onMouseDown={onClose}>
      <aside
        ref={dialogRef}
        className="cart-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="drawer-header">
          <div><p className="eyebrow">Your selection</p><h2 id="cart-title">The cart</h2></div>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Close cart"><X size={20} /></button>
        </header>
        {isEmpty ? (
          <div className="drawer-empty"><p>Your cart is quiet for now.</p><Link href="/collections" onClick={onClose} className="arrow-link">Browse the collection <span aria-hidden="true">→</span></Link></div>
        ) : (
          <>
            <ul className="drawer-lines">
              {lines.map(({ product, quantity, lineTotal }) => (
                <li key={product.id} className="drawer-line">
                  <ProductArt product={product} className="drawer-art" />
                  <div className="drawer-product">
                    <Link href={`/products/${product.slug}`} onClick={onClose}>{product.name}</Link>
                    <span>{formatPrice(product.price, product.currency)}</span>
                    <QuantityStepper value={quantity} onChange={(value) => setQuantity(product.id, value)} />
                  </div>
                  <div className="drawer-line-actions">
                    <span>{formatPrice(lineTotal, product.currency)}</span>
                    <button type="button" aria-label={`Remove ${product.name}`} className="icon-button icon-button-small" onClick={() => removeItem(product.id)}><Trash2 size={15} /></button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="drawer-summary">
              <div><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
              <p>Illustrative pricing. Delivery, tax, payment, and checkout are not connected.</p>
              <Link href="/checkout" onClick={onClose} className="button-dark">Continue to demo checkout <span aria-hidden="true">→</span></Link>
              <button type="button" className="continue-link" onClick={onClose}>Continue browsing</button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
