export type ProductStatus = "PROMOTED" | "LOW VISIBILITY" | "NEW";

export interface DashboardProduct {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  views: number;
  conversionRate: number;
  baseStatus: ProductStatus;
  image: string;
}

export const DASHBOARD_PRODUCTS: DashboardProduct[] = [
  {
    id: "p1",
    name: "Bluza z kapturem",
    subtitle: "Oversize",
    price: 159,
    views: 342,
    conversionRate: 2.1,
    baseStatus: "PROMOTED",
    image: "https://images.pexels.com/photos/6311670/pexels-photo-6311670.jpeg",
  },
  {
    id: "p2",
    name: "T-shirt graficzny",
    subtitle: "",
    price: 89,
    views: 56,
    conversionRate: 0.0,
    baseStatus: "NEW",
    image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg",
  },
  {
    id: "p3",
    name: "Longsleeve",
    subtitle: "Washed Black",
    price: 119,
    views: 189,
    conversionRate: 0.5,
    baseStatus: "LOW VISIBILITY",
    image: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg",
  },
  {
    id: "p4",
    name: "Bluza zip",
    subtitle: "Cream",
    price: 189,
    views: 97,
    conversionRate: 1.2,
    baseStatus: "LOW VISIBILITY",
    image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
  },
];

export function getDashboardProduct(id: string): DashboardProduct | undefined {
  return DASHBOARD_PRODUCTS.find((p) => p.id === id);
}
