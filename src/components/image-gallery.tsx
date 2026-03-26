"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
  productName: string;
  colorName?: string;
  colorHex?: string;
}

/* Generate gradient placeholders that look intentional */
function galleryGradient(hex: string, index: number): string {
  const angles = [135, 160, 120, 145];
  const angle = angles[index % angles.length];
  return `radial-gradient(ellipse at 50% 55%, ${hex}44 0%, ${hex}22 35%, #ece9e2 65%)`;
}

function shoeShape(hex: string, angle: number) {
  return {
    sole: `linear-gradient(${angle}deg, ${hex}88 0%, ${hex}44 100%)`,
    upper: `linear-gradient(180deg, ${hex}66 0%, ${hex}33 100%)`,
  };
}

export function ImageGallery({ images, productName, colorName, colorHex = "#8a7d6b" }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const shapes = shoeShape(colorHex, 135 + selectedIndex * 15);

  return (
    <div className="flex flex-col gap-3">
      {/* Main image — larger and more prominent */}
      <div
        className="relative aspect-square overflow-hidden"
        style={{ background: galleryGradient(colorHex, selectedIndex) }}
      >
        {/* Shoe silhouette placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-3/5 h-2/5">
            <div
              className="absolute inset-0 rounded-[50%]"
              style={{
                background: shapes.sole,
                transform: "rotate(-8deg) scaleX(1.6)",
              }}
            />
            <div
              className="absolute top-[-20%] left-[10%] w-[50%] h-[70%] rounded-[40%_60%_30%_70%]"
              style={{
                background: shapes.upper,
                transform: "rotate(-15deg)",
              }}
            />
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
                "flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors",
                selectedIndex === index
                  ? "border-charcoal"
                  : "border-transparent hover:border-warm-gray/40"
              )}
              style={{ background: galleryGradient(colorHex, index) }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative w-3/5 h-2/5">
                  <div
                    className="absolute inset-0 rounded-[50%] opacity-60"
                    style={{
                      background: `${colorHex}66`,
                      transform: "rotate(-8deg) scaleX(1.4)",
                    }}
                  />
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
