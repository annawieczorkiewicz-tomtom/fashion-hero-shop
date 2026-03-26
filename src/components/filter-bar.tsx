"use client";

import { useState } from "react";

type GenderFilter = "all" | "men" | "women";

interface FilterBarProps {
  productCount: number;
  onFilterChange: (gender: GenderFilter) => void;
}

export function FilterBar({ productCount, onFilterChange }: FilterBarProps) {
  const [activeGender, setActiveGender] = useState<GenderFilter>("all");

  function handleGenderChange(gender: GenderFilter) {
    setActiveGender(gender);
    onFilterChange(gender);
  }

  return (
    <div className="sticky top-0 z-20 bg-cream border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Filter count */}
        <span className="text-label">
          FILTER ({productCount} products)
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

        {/* Right: Sort */}
        <span className="text-label hidden sm:block cursor-default">
          FEATURED
        </span>
      </div>
    </div>
  );
}

export type { GenderFilter };
