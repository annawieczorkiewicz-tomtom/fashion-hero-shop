"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { getDashboardProduct, type DashboardProduct } from "@/data/seller-dashboard";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface BuyerViewItem {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  image: string; // Pexels URL — each item has a unique photo
}

// ---------------------------------------------------------------------------
// Background streetwear items — unique Pexels image per product.
// ProductCard was replaced here because the product database shares only
// 4 distinct local images across 8+ apparel items, causing visible duplicates.
// ---------------------------------------------------------------------------

const STREETWEAR_ITEMS: BuyerViewItem[] = [
  {
    id: "bv1",
    name: "Block Tee",
    subtitle: "Oversized · Black",
    price: 199,
    image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg",
  },
  {
    id: "bv2",
    name: "Leather Jacket",
    subtitle: "Washed Black",
    price: 369,
    image: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg",
  },
  {
    id: "bv3",
    name: "Pullover Hoodie",
    subtitle: "Charcoal",
    price: 389,
    image: "https://images.pexels.com/photos/6311386/pexels-photo-6311386.jpeg",
  },
  {
    id: "bv4",
    name: "Cargo Jogger",
    subtitle: "Olive",
    price: 399,
    image: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
  },
  {
    id: "bv5",
    name: "Yellow Hoodie",
    subtitle: "Black",
    price: 509,
    image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
  },
  {
    id: "bv6",
    name: "Relaxed Set",
    subtitle: "Army Green",
    price: 599,
    image: "https://images.pexels.com/photos/6311478/pexels-photo-6311478.jpeg",
  },
  {
    id: "bv7",
    name: "Jogger Pant",
    subtitle: "Black",
    price: 349,
    image: "https://images.pexels.com/photos/6311394/pexels-photo-6311394.jpeg",
  },
  {
    id: "bv8",
    name: "Stealth Hoodie",
    subtitle: "Midnight Black",
    price: 429,
    image: "https://images.pexels.com/photos/6311480/pexels-photo-6311480.jpeg",
  },
];

// ---------------------------------------------------------------------------
// Card components
// ---------------------------------------------------------------------------

/** Promoted seller product — first in results, with PROMOWANE badge */
function PromotedDashboardCard({ product }: { product: DashboardProduct }) {
  const src = `${product.image}?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop`;

  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden mb-3 bg-cream">
        <span className="absolute bottom-3 left-3 text-[9px] font-medium uppercase tracking-wider bg-charcoal text-white px-2 py-1 z-10">
          PROMOWANE
        </span>
        <Image
          src={src}
          alt={`${product.name} – ${product.subtitle}`}
          width={600}
          height={600}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="text-[11px] font-medium uppercase tracking-widest text-charcoal">
        {product.name}
      </p>
      {product.subtitle && (
        <p className="text-[10px] uppercase tracking-widest text-warm-gray mt-0.5">
          {product.subtitle}
        </p>
      )}
      <p className="text-[10px] text-warm-gray/60 mt-1 italic">
        Wyróżnione przez sprzedawcę
      </p>
      <p className="text-[12px] font-medium text-charcoal mt-1">{product.price} zł</p>
    </div>
  );
}

/** Regular marketplace listing — consistent style, unique image */
function BuyerResultCard({ item }: { item: BuyerViewItem }) {
  const src = `${item.image}?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop`;

  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden mb-3 bg-cream">
        <Image
          src={src}
          alt={`${item.name} – ${item.subtitle}`}
          width={600}
          height={600}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="text-[11px] font-medium uppercase tracking-widest text-charcoal">
        {item.name}
      </p>
      <p className="text-[10px] uppercase tracking-widest text-warm-gray mt-0.5">
        {item.subtitle}
      </p>
      <p className="text-[12px] font-medium text-charcoal mt-1.5">{item.price} zł</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

function BuyerViewContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("product");
  const promoted = productId ? getDashboardProduct(productId) : null;

  const totalCount = STREETWEAR_ITEMS.length + (promoted ? 1 : 0);

  return (
    <>
      {/* Back navigation */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
          <Link
            href="/seller/promote"
            className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-warm-gray hover:text-charcoal transition-colors"
          >
            ← Wróć do panelu sprzedawcy
          </Link>
        </div>
      </div>

      {/* Search header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
          <p className="text-[10px] uppercase tracking-widest text-warm-gray mb-1">
            Wyniki wyszukiwania
          </p>
          <h1 className="text-[22px] font-light text-charcoal">
            &ldquo;Streetwear&rdquo;
          </h1>
          <p className="text-[11px] text-warm-gray mt-1">{totalCount} wyników wyszukiwania</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        {/* Context block — visible only when a seller product is being highlighted */}
        {promoted && (
          <div className="mb-6 flex items-start gap-3 p-4 border border-charcoal/10 bg-white">
            <span className="shrink-0 w-1.5 h-1.5 mt-1.5 rounded-full bg-charcoal" />
            <div className="flex flex-col gap-0.5">
              <p className="text-[11px] font-medium uppercase tracking-widest text-charcoal">
                Wyniki wyszukiwania: Streetwear
              </p>
              <p className="text-[12px] text-warm-gray leading-relaxed">
                Twój promowany produkt jest wyróżniony i wyświetlany wyżej w wynikach wyszukiwania.
              </p>
            </div>
          </div>
        )}

        {/* Product grid — promoted first, then unique streetwear items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
          {promoted && <PromotedDashboardCard product={promoted} />}
          {STREETWEAR_ITEMS.map((item) => (
            <BuyerResultCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Footer note */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-10">
        <p className="text-center text-[11px] text-warm-gray/50">
          To przykładowy widok kupującego.
        </p>
      </div>
    </>
  );
}

export default function BuyerViewPage() {
  return (
    <Suspense>
      <BuyerViewContent />
    </Suspense>
  );
}
