"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "./icons";

type GenderFilter = "all" | "men" | "women";
type SortOption = "featured" | "price-asc" | "price-desc" | "newest";
type PriceRange = "all" | "under-100" | "100-130" | "over-130";

interface FilterBarProps {
  productCount: number;
  onFilterChange: (gender: GenderFilter) => void;
  onSortChange: (sort: SortOption) => void;
  onPriceRangeChange: (range: PriceRange) => void;
  activeFilterCount: number;
}

const sortLabels: Record<SortOption, string> = {
  featured: "Featured",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  newest: "Newest",
};

const priceLabels: Record<PriceRange, string> = {
  all: "All Prices",
  "under-100": "Under $100",
  "100-130": "$100-$130",
  "over-130": "Over $130",
};

export function FilterBar({
  productCount,
  onFilterChange,
  onSortChange,
  onPriceRangeChange,
  activeFilterCount,
}: FilterBarProps) {
  const [activeGender, setActiveGender] = useState<GenderFilter>("all");
  const [activeSort, setActiveSort] = useState<SortOption>("featured");
  const [activePriceRange, setActivePriceRange] = useState<PriceRange>("all");
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  function handleGenderChange(gender: GenderFilter) {
    setActiveGender(gender);
    onFilterChange(gender);
  }

  function handleSortChange(sort: SortOption) {
    setActiveSort(sort);
    onSortChange(sort);
    setSortOpen(false);
  }

  function handlePriceRangeChange(range: PriceRange) {
    const next = activePriceRange === range ? "all" : range;
    setActivePriceRange(next);
    onPriceRangeChange(next);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="sticky top-0 z-20 bg-cream border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Top row: filter label, gender pills, sort */}
        <div className="flex items-center justify-between">
          {/* Left: Filter count */}
          <span className="text-label">
            FILTER{activeFilterCount > 0 ? ` (${activeFilterCount})` : ""} ({productCount} products)
          </span>

          {/* Center: Gender toggle pills */}
          <div className="flex items-center gap-2">
            {(["all", "men", "women"] as const).map((gender) => (
              <button
                key={gender}
                onClick={() => handleGenderChange(gender)}
                className={`px-4 py-1.5 text-xs font-medium uppercase tracking-wider rounded-full border transition-colors ${
                  activeGender === gender
                    ? "bg-charcoal text-white border-charcoal"
                    : "bg-transparent text-charcoal border-charcoal/30 hover:border-charcoal"
                }`}
              >
                {gender === "all" ? "ALL" : gender === "men" ? "MEN" : "WOMEN"}
              </button>
            ))}
          </div>

          {/* Right: Sort dropdown */}
          <div ref={sortRef} className="relative hidden sm:block">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="text-label flex items-center gap-1 cursor-pointer hover:opacity-60 transition-opacity"
            >
              {sortLabels[activeSort].toUpperCase()}
              <ChevronDownIcon className="h-3 w-3" />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-black/10 shadow-lg rounded z-30 min-w-[180px]">
                {(Object.keys(sortLabels) as SortOption[]).map((sort) => (
                  <button
                    key={sort}
                    onClick={() => handleSortChange(sort)}
                    className={`block w-full text-left px-4 py-2 text-xs tracking-wide transition-colors ${
                      activeSort === sort
                        ? "bg-cream font-medium text-charcoal"
                        : "text-warm-gray hover:bg-cream-light hover:text-charcoal"
                    }`}
                  >
                    {sortLabels[sort]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Price range pills */}
        <div className="flex items-center gap-2 mt-3">
          {(["under-100", "100-130", "over-130"] as const).map((range) => (
            <button
              key={range}
              onClick={() => handlePriceRangeChange(range)}
              className={`px-3 py-1 text-[10px] font-medium uppercase tracking-wider rounded-full border transition-colors ${
                activePriceRange === range
                  ? "bg-charcoal text-white border-charcoal"
                  : "bg-transparent text-charcoal border-charcoal/30 hover:border-charcoal"
              }`}
            >
              {priceLabels[range]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export type { GenderFilter, SortOption, PriceRange };
