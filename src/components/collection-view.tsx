"use client";

import { useState, useMemo } from "react";
import { FilterBar, type GenderFilter } from "@/components/filter-bar";
import { ProductGrid } from "@/components/product-grid";
import type { Product } from "@/types";

interface CollectionViewProps {
  products: Product[];
}

export function CollectionView({ products }: CollectionViewProps) {
  const [gender, setGender] = useState<GenderFilter>("all");

  const filtered = useMemo(() => {
    if (gender === "all") return products;
    return products.filter(
      (p) => p.category === gender || p.category === "unisex"
    );
  }, [products, gender]);

  return (
    <>
      <FilterBar productCount={filtered.length} onFilterChange={setGender} />
      <ProductGrid products={filtered} />
    </>
  );
}
