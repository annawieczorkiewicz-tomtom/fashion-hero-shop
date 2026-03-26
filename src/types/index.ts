export interface ProductColor {
  name: string;
  hex: string;
  image: string;
}

export type ShoeType = "runner" | "walker" | "slip-on" | "trainer" | "flat" | "hiker" | "slide" | "loafer";
export type ShoeMaterial = "mesh" | "wool" | "tree-fiber" | "knit" | "leather";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "men" | "women" | "unisex";
  collections: string[];
  price: number;
  originalPrice?: number;
  colors: ProductColor[];
  sizes: number[];
  description: string;
  features: string[];
  materials: string;
  care: string;
  badge?: "new" | "new-color" | "bestseller" | "sale";
  images: string[];
  type: ShoeType;
  material: ShoeMaterial;
  rating: number;
  reviewCount: number;
  tags: string[];
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  heroImage: string;
}

export interface CartItem {
  product: Product;
  color: ProductColor;
  size: number;
  quantity: number;
}

export interface HeroSlide {
  id: string;
  subtitle: string;
  title: string;
  image: string;
  ctaLinks: { label: string; href: string }[];
}
