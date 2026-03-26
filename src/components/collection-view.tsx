"use client";

import { useState, useMemo } from "react";
import { FilterSidebar, type GenderFilter, type PriceRange } from "@/components/filter-sidebar";
import { ProductCard } from "@/components/product-card";
import { ChevronDownIcon, CloseIcon } from "@/components/icons";
import type { Product, ShoeType, ShoeMaterial } from "@/types";

type SortOption = "featured" | "price-asc" | "price-desc" | "newest";

const sortLabels: Record<SortOption, string> = {
  featured: "Featured",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  newest: "Newest",
};

interface CollectionViewProps {
  products: Product[];
  collectionName: string;
}

export function CollectionView({ products, collectionName }: CollectionViewProps) {
  const [gender, setGender] = useState<GenderFilter>("all");
  const [sort, setSort] = useState<SortOption>("featured");
  const [priceRange, setPriceRange] = useState<PriceRange>("all");
  const [shoeTypes, setShoeTypes] = useState<ShoeType[]>([]);
  const [materials, setMaterials] = useState<ShoeMaterial[]>([]);
  const [sizes, setSizes] = useState<number[]>([]);
  const [sortOpen, setSortOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = products;

    if (gender !== "all") {
      result = result.filter((p) => p.category === gender || p.category === "unisex");
    }
    if (priceRange === "under-100") {
      result = result.filter((p) => p.price < 100);
    } else if (priceRange === "100-130") {
      result = result.filter((p) => p.price >= 100 && p.price <= 130);
    } else if (priceRange === "over-130") {
      result = result.filter((p) => p.price > 130);
    }
    if (shoeTypes.length > 0) {
      result = result.filter((p) => shoeTypes.includes(p.type));
    }
    if (materials.length > 0) {
      result = result.filter((p) => materials.includes(p.material));
    }
    if (sizes.length > 0) {
      result = result.filter((p) => p.sizes.some((s) => sizes.includes(s)));
    }

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
    }

    return result;
  }, [products, gender, sort, priceRange, shoeTypes, materials, sizes]);

  const activeFilterCount =
    (gender !== "all" ? 1 : 0) +
    (priceRange !== "all" ? 1 : 0) +
    (shoeTypes.length > 0 ? 1 : 0) +
    (materials.length > 0 ? 1 : 0) +
    (sizes.length > 0 ? 1 : 0);

  function clearAll() {
    setGender("all");
    setPriceRange("all");
    setShoeTypes([]);
    setMaterials([]);
    setSizes([]);
  }

  const sidebarProps = {
    gender,
    priceRange,
    shoeTypes,
    materials,
    sizes,
    onGenderChange: setGender,
    onPriceRangeChange: setPriceRange,
    onShoeTypeChange: setShoeTypes,
    onMaterialChange: setMaterials,
    onSizesChange: setSizes,
    onClearAll: clearAll,
    activeFilterCount,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
      {/* Mobile filter toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setMobileFiltersOpen(true)}
          className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.5px] border border-black/15 px-4 py-2.5 rounded hover:border-charcoal transition-colors"
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <line x1="1" y1="4" x2="15" y2="4" />
            <line x1="1" y1="8" x2="10" y2="8" />
            <line x1="1" y1="12" x2="6" y2="12" />
          </svg>
          Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
        </button>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-50 lg:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-full max-w-xs bg-white z-50 overflow-y-auto p-5 lg:hidden">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[14px] font-medium uppercase tracking-[0.5px]">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <CloseIcon />
              </button>
            </div>
            <FilterSidebar {...sidebarProps} />
          </div>
        </>
      )}

      <div className="flex gap-10">
        {/* Desktop sidebar */}
        <div className="hidden lg:block w-[220px] flex-shrink-0">
          <FilterSidebar {...sidebarProps} />
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Sort bar */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/10">
            <div>
              <h2 className="text-2xl font-light text-charcoal">{collectionName}</h2>
              <p className="text-[12px] text-warm-gray mt-0.5">
                {filtered.length} product{filtered.length !== 1 ? "s" : ""}
              </p>
            </div>

            {/* Sort dropdown */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.5px] text-charcoal hover:opacity-60 transition-opacity"
              >
                {sortLabels[sort]}
                <ChevronDownIcon className="h-3 w-3" />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white border border-black/10 shadow-lg rounded z-30 min-w-[180px]">
                  {(Object.keys(sortLabels) as SortOption[]).map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        setSort(s);
                        setSortOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2.5 text-[12px] tracking-wide transition-colors ${
                        sort === s
                          ? "bg-cream font-medium text-charcoal"
                          : "text-warm-gray hover:bg-cream-light hover:text-charcoal"
                      }`}
                    >
                      {sortLabels[s]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product grid */}
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-warm-gray text-sm mb-4">No products match your filters.</p>
              <button onClick={clearAll} className="btn-cta-outline text-[11px]">
                CLEAR ALL FILTERS
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
