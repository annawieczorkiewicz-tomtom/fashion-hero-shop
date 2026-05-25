"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { products } from "@/data/products";
import { getDashboardProduct, type DashboardProduct } from "@/data/seller-dashboard";
import { ProductCard } from "@/components/product-card";

// Streetwear background products — clothing only, no running shoes.
// IDs "1" and "9" excluded because ProductCard marks them as PROMOWANE;
// keeping them would dilute the visibility effect of the seller's promoted product.
const BACKGROUND_IDS = ["41", "106", "25", "36", "27", "29", "39", "37"];

const backgroundProducts = BACKGROUND_IDS
  .map((id) => products.find((p) => p.id === id))
  .filter((p): p is NonNullable<typeof p> => p !== undefined);

/* Inline card for seller's promoted DashboardProduct — mirrors ProductCard style */
function PromotedDashboardCard({ product }: { product: DashboardProduct }) {
  const largeSrc = `${product.image}?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop`;

  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden mb-3 bg-cream">
        {/* PROMOWANE badge — matches ProductCard positioning */}
        <span className="absolute bottom-3 left-3 text-[9px] font-medium uppercase tracking-wider bg-charcoal text-white px-2 py-1 z-10">
          PROMOWANE
        </span>
        <Image
          src={largeSrc}
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

function BuyerViewContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("product");
  const promoted = productId ? getDashboardProduct(productId) : null;

  const totalCount = backgroundProducts.length + (promoted ? 1 : 0);

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

        {/* Product grid — promoted product first, then background products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
          {promoted && <PromotedDashboardCard product={promoted} />}
          {backgroundProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
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
