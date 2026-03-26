"use client";

import { useState, useRef } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

type Tab = "new-arrivals" | "best-sellers";

const tabs: { label: string; value: Tab }[] = [
  { label: "NEW ARRIVALS", value: "new-arrivals" },
  { label: "BEST SELLERS", value: "best-sellers" },
];

export function ProductCarousel() {
  const [activeTab, setActiveTab] = useState<Tab>("new-arrivals");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered = products.filter((p) => p.collections.includes(activeTab));

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-10">
      {/* Tab buttons */}
      <div className="flex justify-center gap-6 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`text-nav pb-1 border-b-2 transition-colors ${
              activeTab === tab.value
                ? "border-charcoal text-charcoal"
                : "border-transparent text-warm-gray hover:text-charcoal"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Scrollable row with nav buttons */}
      <div className="relative px-4 md:px-8 lg:px-12">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-sm hidden md:flex"
          aria-label="Scroll left"
        >
          <ChevronLeftIcon />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
        >
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="min-w-[220px] max-w-[220px] flex-shrink-0"
            />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-sm hidden md:flex"
          aria-label="Scroll right"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </section>
  );
}
