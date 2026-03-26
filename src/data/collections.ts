import type { Collection } from "@/types";

export const collections: Collection[] = [
  {
    id: "mens",
    name: "Men's Shoes",
    slug: "mens",
    description:
      "Sustainable, supportive, and wildly comfortable. Our sneakers are always ready when you are.",
    heroImage: "/images/hero/collection-hero-1.jpg",
  },
  {
    id: "womens",
    name: "Women's Shoes",
    slug: "womens",
    description:
      "Lightweight and naturally soft shoes that feel great from the first step.",
    heroImage: "/images/hero/collection-hero-2.jpg",
  },
  {
    id: "new-arrivals",
    name: "New Arrivals",
    slug: "new-arrivals",
    description: "The latest styles, freshly dropped. Be the first to wear them.",
    heroImage: "/images/hero/collection-hero-1.jpg",
  },
  {
    id: "best-sellers",
    name: "Best Sellers",
    slug: "best-sellers",
    description:
      "Our most-loved styles. Tried, tested, and adored by thousands.",
    heroImage: "/images/hero/collection-hero-2.jpg",
  },
  {
    id: "sale",
    name: "Sale",
    slug: "sale",
    description: "Great shoes at even better prices. Limited time only.",
    heroImage: "/images/hero/collection-hero-1.jpg",
  },
  {
    id: "socks",
    name: "Socks",
    slug: "socks",
    description: "Soft, sustainable socks made from natural materials. Comfort from the ground up.",
    heroImage: "/images/hero/collection-hero-1.jpg",
  },
  {
    id: "apparel",
    name: "Apparel",
    slug: "apparel",
    description: "Everyday essentials made from nature. Soft, simple, and sustainable.",
    heroImage: "/images/hero/collection-hero-2.jpg",
  },
  {
    id: "accessories",
    name: "Accessories",
    slug: "accessories",
    description: "The finishing touches. Bags, beanies, and more — all sustainably made.",
    heroImage: "/images/hero/collection-hero-1.jpg",
  },
  {
    id: "all",
    name: "All Products",
    slug: "all",
    description: "Browse our entire catalog of sustainably made shoes, apparel, and accessories.",
    heroImage: "/images/hero/collection-hero-2.jpg",
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
