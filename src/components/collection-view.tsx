"use client";

import { useState, useMemo } from "react";
import { FilterBar, type GenderFilter, type SortOption, type PriceRange } from "@/components/filter-bar";
import { ProductGrid } from "@/components/product-grid";
import type { Product, ShoeType, ShoeMaterial } from "@/types";

interface CollectionViewProps {
  products: Product[];
}

export function CollectionView({ products }: CollectionViewProps) {
  const [gender, setGender] = useState<GenderFilter>("all");
  const [sort, setSort] = useState<SortOption>("featured");
  const [priceRange, setPriceRange] = useState<PriceRange>("all");
  const [shoeTypes, setShoeTypes] = useState<ShoeType[]>([]);
  const [materials, setMaterials] = useState<ShoeMaterial[]>([]);

  const filtered = useMemo(() => {
    let result = products;

    // Gender filter
    if (gender !== "all") {
      result = result.filter(
        (p) => p.category === gender || p.category === "unisex"
      );
    }

    // Price range filter
    if (priceRange === "under-100") {
      result = result.filter((p) => p.price < 100);
    } else if (priceRange === "100-130") {
      result = result.filter((p) => p.price >= 100 && p.price <= 130);
    } else if (priceRange === "over-130") {
      result = result.filter((p) => p.price > 130);
    }

    // Shoe type filter (OR within type, AND with other filters)
    if (shoeTypes.length > 0) {
      result = result.filter((p) => shoeTypes.includes(p.type));
    }

    // Material filter (OR within material, AND with other filters)
    if (materials.length > 0) {
      result = result.filter((p) => materials.includes(p.material));
    }

    // Sort
    switch (sort) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result = [...result].sort((a, b) => {
          const aNew = a.badge === "new" || a.badge === "new-color" ? 1 : 0;
          const bNew = b.badge === "new" || b.badge === "new-color" ? 1 : 0;
          return bNew - aNew;
        });
        break;
      // "featured" — keep original order
    }

    return result;
  }, [products, gender, sort, priceRange, shoeTypes, materials]);

  const activeFilterCount =
    (gender !== "all" ? 1 : 0) +
    (priceRange !== "all" ? 1 : 0) +
    (shoeTypes.length > 0 ? 1 : 0) +
    (materials.length > 0 ? 1 : 0);

  return (
    <>
      <FilterBar
        productCount={filtered.length}
        onFilterChange={setGender}
        onSortChange={setSort}
        onPriceRangeChange={setPriceRange}
        onShoeTypeChange={setShoeTypes}
        onMaterialChange={setMaterials}
        activeFilterCount={activeFilterCount}
      />
      {filtered.length === 0 ? (
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <p className="text-warm-gray text-sm">No products match your filters</p>
        </div>
      ) : (
        <ProductGrid products={filtered} />
      )}
    </>
  );
}
