import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const firstColor = product.colors[0];
  const badgeLabel = product.badge === "new"
    ? "NEW"
    : product.badge === "new-color"
    ? "NEW COLOR"
    : product.badge === "bestseller"
    ? "BESTSELLER"
    : product.badge === "sale"
    ? "SALE"
    : null;

  return (
    <div className={cn("group", className)}>
      <Link href={`/products/${product.slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-square bg-cream-light overflow-hidden mb-3">
          {badgeLabel && (
            <span className="absolute top-3 left-3 text-[10px] font-medium uppercase tracking-wider bg-white px-2 py-1 z-10">
              {badgeLabel}
            </span>
          )}
          <div className="w-full h-full flex items-center justify-center text-warm-gray text-sm">
            {/* Placeholder — replace with next/image when real images are added */}
            <div className="w-3/4 h-3/4 rounded-lg bg-cream-dark/30 flex items-center justify-center text-xs text-warm-gray/60">
              {product.name}
            </div>
          </div>
        </div>

        {/* Product info */}
        <div>
          <h3 className="text-nav mb-0.5">{product.name}</h3>
          <p className="text-xs text-warm-gray mb-1">{firstColor?.name}</p>
        </div>
      </Link>

      {/* Color swatches */}
      <div className="flex gap-1.5 mb-1.5">
        {product.colors.map((color) => (
          <button
            key={color.hex}
            className="w-3 h-3 rounded-full border border-black/10"
            style={{ backgroundColor: color.hex }}
            aria-label={color.name}
          />
        ))}
      </div>

      {/* Price */}
      <div className="flex items-center gap-2">
        <span className="text-price">${product.price}</span>
        {product.originalPrice && (
          <span className="text-xs text-warm-gray line-through">
            ${product.originalPrice}
          </span>
        )}
      </div>
    </div>
  );
}
