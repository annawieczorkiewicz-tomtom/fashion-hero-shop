"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product, ProductColor } from "@/types";
import { StarIcon } from "@/components/icons";
import { ColorSwatches } from "@/components/color-swatches";
import { SizeSelector } from "@/components/size-selector";
import { useCart } from "@/components/cart-provider";

interface ProductInfoProps {
  product: Product;
}

function StarRating({ rating, count }: { rating: number; count: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon
            key={i}
            filled={i < fullStars || (i === fullStars && hasHalf)}
            className="h-3.5 w-3.5 text-charcoal"
          />
        ))}
      </div>
      <span className="text-xs text-warm-gray">({count})</span>
    </div>
  );
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const { addItem } = useCart();

  const collectionName = product.category === "men"
    ? "Men's Shoes"
    : product.category === "women"
    ? "Women's Shoes"
    : "Shoes";

  const collectionSlug = product.category === "men"
    ? "mens"
    : product.category === "women"
    ? "womens"
    : "mens";

  function handleAddToCart() {
    if (!selectedSize) return;
    addItem(product, selectedColor, selectedSize);
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Breadcrumb — subtle */}
      <nav className="flex items-center gap-1.5 text-[11px] text-warm-gray/70">
        <Link href="/" className="hover:text-charcoal transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href={`/collections/${collectionSlug}`} className="hover:text-charcoal transition-colors">
          {collectionName}
        </Link>
        <span>/</span>
        <span className="text-charcoal/60">{product.name}</span>
      </nav>

      {/* Product name */}
      <div>
        <h1 className="text-2xl md:text-3xl font-normal text-charcoal mb-2">
          {product.name}
        </h1>
        <StarRating rating={4.5} count={142} />
      </div>

      {/* Price */}
      <div className="flex items-center gap-3">
        <span className="text-lg font-medium text-charcoal">${product.price}</span>
        {product.originalPrice && (
          <span className="text-sm text-warm-gray line-through">
            ${product.originalPrice}
          </span>
        )}
      </div>

      {/* Color swatches */}
      <ColorSwatches
        colors={product.colors}
        selectedColor={selectedColor}
        onSelect={setSelectedColor}
      />

      {/* Size selector */}
      <SizeSelector
        sizes={product.sizes}
        selectedSize={selectedSize}
        onSelect={setSelectedSize}
      />

      {/* Add to cart — prominent dark button */}
      <button
        onClick={handleAddToCart}
        disabled={!selectedSize}
        className="w-full py-4 bg-charcoal text-white text-[12px] font-medium uppercase tracking-[0.6px] rounded-full hover:bg-charcoal-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {selectedSize ? "ADD TO CART — $" + product.price : "SELECT A SIZE"}
      </button>

      {/* Shipping info */}
      <div className="flex flex-col gap-2 pt-2 border-t border-border">
        <p className="text-xs text-warm-gray">
          Free Shipping on Orders over $75
        </p>
        <p className="text-xs text-warm-gray">
          Easy Returns
        </p>
      </div>
    </div>
  );
}
