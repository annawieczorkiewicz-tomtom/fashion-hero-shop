"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CloseIcon } from "@/components/icons";

type ProductStatus = "PROMOTED" | "LOW VISIBILITY" | "NEW";

interface DashboardProduct {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  views: number;
  conversionRate: number;
  baseStatus: ProductStatus;
  image: string;
}

const DASHBOARD_PRODUCTS: DashboardProduct[] = [
  {
    id: "p1",
    name: "Bluza z kapturem",
    subtitle: "Oversize",
    price: 159,
    views: 342,
    conversionRate: 2.1,
    baseStatus: "PROMOTED",
    image: "https://images.pexels.com/photos/6311670/pexels-photo-6311670.jpeg?w=80&h=80&fit=crop",
  },
  {
    id: "p2",
    name: "T-shirt graficzny",
    subtitle: "Drop #3",
    price: 89,
    views: 56,
    conversionRate: 0.0,
    baseStatus: "NEW",
    image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?w=80&h=80&fit=crop",
  },
  {
    id: "p3",
    name: "Longsleeve",
    subtitle: "Washed Black",
    price: 119,
    views: 189,
    conversionRate: 0.5,
    baseStatus: "LOW VISIBILITY",
    image: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?w=80&h=80&fit=crop",
  },
  {
    id: "p4",
    name: "Bluza zip",
    subtitle: "Cream",
    price: 189,
    views: 97,
    conversionRate: 1.2,
    baseStatus: "LOW VISIBILITY",
    image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?w=80&h=80&fit=crop",
  },
];

const STATUS_STYLES: Record<ProductStatus, string> = {
  "PROMOTED":       "bg-charcoal text-white",
  "LOW VISIBILITY": "bg-cream-dark text-warm-gray",
  "NEW":            "border border-charcoal/30 text-charcoal",
};

interface ActiveCampaignModalProps {
  product: DashboardProduct;
  day: number;
  onClose: () => void;
}

function ActiveCampaignModal({ product, day, onClose }: ActiveCampaignModalProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    ref.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const totalDays = 10;
  const soldCount = 3;
  const revenue = soldCount * product.price;
  const commissionPerItem = +(product.price * 0.05).toFixed(2);
  const totalCommission = +(commissionPerItem * soldCount).toFixed(2);
  const fmt = (n: number) => n.toFixed(2).replace(".", ",");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div
        ref={ref}
        tabIndex={-1}
        className="relative bg-white max-w-md w-full z-10 outline-none"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:opacity-60 transition-opacity z-10"
          aria-label="Zamknij"
        >
          <CloseIcon />
        </button>

        {/* Product header */}
        <div className="flex items-center gap-4 p-5 border-b border-border">
          <div className="w-14 h-14 shrink-0 overflow-hidden bg-cream">
            <Image src={product.image} alt={product.name} width={56} height={56} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-medium uppercase tracking-widest text-charcoal leading-tight">
              {product.name} / {product.subtitle}
            </p>
            <p className="text-[11px] uppercase tracking-widest text-warm-gray mt-0.5">
              {product.price} zł
            </p>
          </div>
          <span className="shrink-0 text-[9px] font-medium uppercase tracking-widest px-2.5 py-1 bg-green-100 text-green-700">
            KAMPANIA AKTYWNA
          </span>
        </div>

        <div className="p-6 flex flex-col gap-5">
          {/* Progress bar */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[10px] uppercase tracking-widest text-warm-gray">Postęp kampanii</p>
              <p className="text-[10px] uppercase tracking-widest font-medium text-charcoal">
                Dzień {day} z {totalDays}
              </p>
            </div>
            <div className="h-1.5 bg-cream-dark w-full">
              <div className="h-full bg-charcoal transition-all" style={{ width: `${(day / totalDays) * 100}%` }} />
            </div>
          </div>

          {/* Campaign results */}
          <div className="bg-cream-light border border-border p-4 flex flex-col gap-3">
            <p className="text-[10px] uppercase tracking-widest text-warm-gray">Wyniki kampanii</p>
            <p className="text-[13px] text-charcoal">{soldCount} sprzedane bluzy</p>
            <div className="flex items-baseline justify-between">
              <span className="text-[13px] text-charcoal">Przychód z kampanii</span>
              <span className="text-[13px] font-medium text-charcoal tabular-nums">{revenue} zł</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-[13px] text-warm-gray">
                Prowizja FashionHero ({soldCount} × {fmt(commissionPerItem)} zł)
              </span>
              <span className="text-[13px] text-warm-gray tabular-nums">{fmt(totalCommission)} zł</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-8">
            <div>
              <p className="text-[9px] uppercase tracking-widest text-warm-gray mb-1">Wyświetlenia</p>
              <p className="text-[18px] font-light text-charcoal tabular-nums">
                {product.views.toLocaleString("pl-PL")}
              </p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-warm-gray mb-1">Sprzedaż</p>
              <p className="text-[18px] font-light text-charcoal tabular-nums">
                {product.conversionRate.toFixed(1)}%
              </p>
            </div>
          </div>

          {/* Pause button */}
          <button
            onClick={onClose}
            className="mt-1 w-full py-3.5 border border-charcoal/30 text-charcoal text-[10px] font-medium uppercase tracking-widest hover:border-charcoal transition-colors"
          >
            WSTRZYMAJ KAMPANIĘ
          </button>
        </div>
      </div>
    </div>
  );
}

interface CampaignModalProps {
  product: DashboardProduct;
  onActivate: (productId: string) => void;
  onClose: () => void;
}

function CampaignModal({ product, onActivate, onClose }: CampaignModalProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    ref.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const commission = (product.price * 0.05).toFixed(2).replace(".", ",");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div
        ref={ref}
        tabIndex={-1}
        className="relative bg-white max-w-md w-full z-10 outline-none"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:opacity-60 transition-opacity z-10"
          aria-label="Zamknij"
        >
          <CloseIcon />
        </button>

        {/* Product header */}
        <div className="flex items-center gap-4 p-5 border-b border-border">
          <div className="w-14 h-14 shrink-0 overflow-hidden bg-cream">
            <Image
              src={product.image}
              alt={product.name}
              width={56}
              height={56}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-[12px] font-medium uppercase tracking-widest text-charcoal leading-tight">
              {product.name} / {product.subtitle}
            </p>
            <p className="text-[11px] uppercase tracking-widest text-warm-gray mt-0.5">
              {product.price} zł
            </p>
          </div>
        </div>

        <div className="p-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-[14px] font-light text-charcoal leading-snug">
              Twój produkt pojawi się wyżej w wynikach przez 10 dni
            </p>
            <p className="text-[13px] text-charcoal">
              Sprzedasz w tym czasie?{" "}
              <span className="font-medium">Płacisz 5% prowizji od transakcji</span>
            </p>
          </div>

          <div className="bg-cream-light border border-border p-4">
            <p className="text-[10px] uppercase tracking-widest text-warm-gray mb-2">
              Przykład
            </p>
            <p className="text-[13px] text-charcoal">
              {product.name} {product.price} zł{" "}
              <span className="text-warm-gray">→</span>{" "}
              prowizja tylko jeśli sprzedasz:{" "}
              <span className="font-medium">{commission} zł</span>
            </p>
          </div>

          <p className="text-[13px] font-medium text-charcoal">
            Nie sprzedasz? Nie płacisz nic.
          </p>

          <button
            onClick={() => { onActivate(product.id); onClose(); }}
            className="mt-1 w-full py-3.5 bg-charcoal text-white text-[10px] font-medium uppercase tracking-widest hover:bg-charcoal-light transition-colors"
          >
            AKTYWUJ PROMOCJĘ
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SellerPromotePage() {
  const [campaigns, setCampaigns] = useState<Record<string, number>>({ "p1": 2 });
  const [modalProductId, setModalProductId] = useState<string | null>(null);

  const modalProduct = DASHBOARD_PRODUCTS.find((p) => p.id === modalProductId) ?? null;

  function handleActivate(productId: string) {
    setCampaigns((prev) => ({ ...prev, [productId]: 1 }));
  }

  function effectiveStatus(product: DashboardProduct): ProductStatus {
    return campaigns[product.id] !== undefined ? "PROMOTED" : product.baseStatus;
  }

  return (
    <>
      {/* Seller greeting */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
          <h1 className="text-[22px] font-light text-charcoal mb-1.5">
            Witaj ponownie, Kamil 👋
          </h1>
          <p className="text-[12px] text-warm-gray flex flex-wrap">
            <span>streetwear — t-shirty i bluzy</span>
            <span className="px-2 text-warm-gray/30">·</span>
            <span>2 miesiące na FashionHero</span>
            <span className="px-2 text-warm-gray/30">·</span>
            <span>12 zamówień</span>
            <span className="px-2 text-warm-gray/30">·</span>
            <span>4 aktywne produkty</span>
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[10px] uppercase tracking-widest text-charcoal">
            Twoje produkty
          </h2>
          <span className="text-[10px] uppercase tracking-widest text-warm-gray">
            {Object.keys(campaigns).length} {Object.keys(campaigns).length === 1 ? "Aktywna kampania" : "Aktywne kampanie"}
          </span>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block w-full border border-border bg-white">
          {/* Header row */}
          <div className="grid grid-cols-[56px_1fr_110px_110px_220px_160px] text-[9px] uppercase tracking-widest text-warm-gray border-b border-border px-4 py-3 bg-cream-light">
            <span />
            <span className="pl-3">Produkt</span>
            <span className="text-right">Wyświetlenia</span>
            <span className="text-right">Konwersja</span>
            <span className="text-center">Status</span>
            <span />
          </div>

          {DASHBOARD_PRODUCTS.map((product, i) => {
            const status = effectiveStatus(product);
            const isActive = campaigns[product.id] !== undefined;
            const day = campaigns[product.id];
            return (
              <div
                key={product.id}
                className={`grid grid-cols-[56px_1fr_110px_110px_220px_160px] items-center px-4 py-4${
                  i < DASHBOARD_PRODUCTS.length - 1 ? " border-b border-border" : ""
                }`}
              >
                {/* Thumbnail */}
                <div className="w-11 h-11 overflow-hidden bg-cream shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name + subtitle */}
                <div className="pl-3">
                  <p className="text-[11px] font-medium uppercase tracking-widest text-charcoal">
                    {product.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-warm-gray mt-0.5">
                    {product.subtitle} · {product.price} zł
                  </p>
                </div>

                <p className="text-[12px] text-charcoal text-right tabular-nums">
                  {product.views.toLocaleString("pl-PL")}
                </p>
                <p className="text-[12px] text-charcoal text-right tabular-nums">
                  {product.conversionRate > 0 ? `${product.conversionRate.toFixed(1)}%` : "—"}
                </p>

                {/* Status + campaign progress */}
                <div className="flex flex-col items-center gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className={`text-[9px] font-medium uppercase tracking-widest px-2.5 py-1 ${STATUS_STYLES[status]}`}>
                      {status}
                    </span>
                    {isActive && (
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                        <span className="text-[9px] uppercase tracking-widest text-green-600 font-medium">
                          Aktywna
                        </span>
                      </span>
                    )}
                  </div>
                  {isActive && (
                    <div className="text-center leading-relaxed">
                      <p className="text-[9px] uppercase tracking-widest font-medium text-charcoal">
                        Dzień {day} z 10
                      </p>
                    </div>
                  )}
                </div>

                {/* Action */}
                <div className="flex justify-end">
                  <button
                    onClick={() => setModalProductId(product.id)}
                    className={`text-[9px] font-medium uppercase tracking-widest border px-4 py-2 transition-colors whitespace-nowrap ${
                      isActive
                        ? "border-charcoal/30 text-warm-gray hover:border-charcoal hover:text-charcoal"
                        : "border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
                    }`}
                  >
                    {isActive ? "Zarządzaj" : "Promuj produkt"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile cards */}
        <div className="md:hidden flex flex-col gap-3">
          {DASHBOARD_PRODUCTS.map((product) => {
            const status = effectiveStatus(product);
            const isActive = campaigns[product.id] !== undefined;
            const day = campaigns[product.id];
            return (
              <div key={product.id} className="bg-white border border-border p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 overflow-hidden bg-cream shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-medium uppercase tracking-widest text-charcoal mb-0.5 truncate">
                      {product.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-warm-gray">
                      {product.subtitle} · {product.price} zł
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span className={`text-[9px] font-medium uppercase tracking-widest px-2.5 py-1 ${STATUS_STYLES[status]}`}>
                      {status}
                    </span>
                    {isActive && (
                      <>
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                          <span className="text-[9px] uppercase tracking-widest text-green-600 font-medium">Aktywna</span>
                        </span>
                        <p className="text-[9px] uppercase tracking-widest font-medium text-charcoal text-right">
                          Dzień {day} z 10
                        </p>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex gap-6 mb-3">
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-warm-gray mb-0.5">Wyświetlenia</p>
                    <p className="text-[12px] text-charcoal tabular-nums">{product.views.toLocaleString("pl-PL")}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-warm-gray mb-0.5">Konwersja</p>
                    <p className="text-[12px] text-charcoal tabular-nums">
                      {product.conversionRate > 0 ? `${product.conversionRate.toFixed(1)}%` : "—"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setModalProductId(product.id)}
                  className={`w-full text-[9px] font-medium uppercase tracking-widest border px-4 py-2.5 transition-colors ${
                    isActive
                      ? "border-charcoal/30 text-warm-gray hover:border-charcoal hover:text-charcoal"
                      : "border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
                  }`}
                >
                  {isActive ? "Zarządzaj" : "Promuj produkt"}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {modalProduct && campaigns[modalProduct.id] !== undefined ? (
        <ActiveCampaignModal
          product={modalProduct}
          day={campaigns[modalProduct.id]}
          onClose={() => setModalProductId(null)}
        />
      ) : modalProduct ? (
        <CampaignModal
          product={modalProduct}
          onActivate={handleActivate}
          onClose={() => setModalProductId(null)}
        />
      ) : null}
    </>
  );
}
