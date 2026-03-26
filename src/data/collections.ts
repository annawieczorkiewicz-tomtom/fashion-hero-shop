import type { Collection } from "@/types";

export const collections: Collection[] = [
  {
    id: "mens",
    name: "Men's Shoes",
    slug: "mens",
    description:
      "Sustainable, supportive, and wildly comfortable. Our sneakers are always ready when you are.",
    heroImage: "/images/hero/mens-collection.jpg",
  },
  {
    id: "womens",
    name: "Women's Shoes",
    slug: "womens",
    description:
      "Lightweight and naturally soft shoes that feel great from the first step.",
    heroImage: "/images/hero/womens-collection.jpg",
  },
  {
    id: "new-arrivals",
    name: "New Arrivals",
    slug: "new-arrivals",
    description: "The latest styles, freshly dropped. Be the first to wear them.",
    heroImage: "/images/hero/new-arrivals.jpg",
  },
  {
    id: "best-sellers",
    name: "Best Sellers",
    slug: "best-sellers",
    description:
      "Our most-loved styles. Tried, tested, and adored by thousands.",
    heroImage: "/images/hero/best-sellers.jpg",
  },
  {
    id: "sale",
    name: "Sale",
    slug: "sale",
    description: "Great shoes at even better prices. Limited time only.",
    heroImage: "/images/hero/sale.jpg",
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
