"use client";

import { ShoppingBag } from "lucide-react";

import { useCart } from "@/lib/cart/cart-context";

/** Header cart trigger showing a live item-count badge. Opens cart drawer. */
export function CartButton({ onClick }: { onClick: () => void }) {
  const { itemCount } = useCart();

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
      className="relative inline-flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-forest/5 hover:text-forest"
    >
      <ShoppingBag className="h-5 w-5" aria-hidden="true" />
      {itemCount > 0 ? (
        <span className="absolute -top-0.5 -right-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-forest px-1 text-[0.625rem] font-semibold text-ivory tabular-nums">
          {itemCount > 9 ? "9+" : itemCount}
        </span>
      ) : null}
    </button>
  );
}