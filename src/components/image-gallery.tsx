"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
  productName: string;
  colorName?: string;
}

export function ImageGallery({ images, productName, colorName }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="relative aspect-square bg-cream-light overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-3/4 h-3/4 rounded-lg bg-cream-dark/30 flex flex-col items-center justify-center gap-2 text-warm-gray/60">
            <span className="text-sm font-medium">{productName}</span>
            {colorName && <span className="text-xs">{colorName}</span>}
          </div>
        </div>
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={image}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                "flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-cream-light overflow-hidden border-2 transition-colors",
                selectedIndex === index
                  ? "border-charcoal"
                  : "border-transparent hover:border-warm-gray/40"
              )}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded bg-cream-dark/20 flex items-center justify-center text-[8px] text-warm-gray/50">
                  {index + 1}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
