import type { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

const surfaceStyles: Record<Product["accent"], string> = {
  forest: "pack-surface-forest",
  sage: "pack-surface-sage",
  stone: "pack-surface-stone",
  gold: "pack-surface-clay",
};

export function ProductArt({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const isPowder = product.form === "Powder";
  const isLiquid = product.form === "Liquid" || product.form === "Syrup";

  return (
    <div aria-hidden="true" className={cn("product-art", surfaceStyles[product.accent], className)}>
      <span className="pack-art-note">DEMO PACKAGING</span>
      <div className={cn("pack-object", isPowder && "pack-pouch", isLiquid && "pack-amber")}>
        {isPowder ? <span className="pack-seal" aria-hidden="true" /> : null}
        <span className="pack-brand">VELNORA<br />NUTRA</span>
        <span className="pack-rule" aria-hidden="true" />
        <span className="pack-name">{product.name}</span>
        <span className="pack-category">{product.category}</span>
        <span className="pack-quantity">{product.servings} servings</span>
      </div>
      <span className="pack-floor" aria-hidden="true" />
    </div>
  );
}
