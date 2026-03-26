import type { Product, HeroSlide } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Cloud Runner",
    slug: "cloud-runner",
    category: "men",
    collections: ["mens", "new-arrivals", "best-sellers"],
    price: 120,
    colors: [
      { name: "Jet Black", hex: "#1a1a1a", image: "/images/products/cloud-runner-black.jpg" },
      { name: "Stone White", hex: "#f0ede6", image: "/images/products/cloud-runner-white.jpg" },
      { name: "Olive", hex: "#5c6b4f", image: "/images/products/cloud-runner-olive.jpg" },
    ],
    sizes: [7, 8, 9, 10, 11, 12, 13],
    description:
      "A lightweight everyday runner with a breathable knit upper and cushioned sole. Built for comfort from morning to night.",
    features: ["Breathable mesh upper", "Cushioned insole", "Lightweight EVA midsole", "Natural rubber outsole"],
    materials: "Upper: Recycled polyester mesh. Midsole: Sugarcane-based EVA. Outsole: Natural rubber.",
    care: "Remove insoles and laces. Machine wash cold on gentle cycle. Air dry.",
    badge: "bestseller",
    images: [
      "/images/products/cloud-runner-black.jpg",
      "/images/products/cloud-runner-black-side.jpg",
      "/images/products/cloud-runner-black-top.jpg",
      "/images/products/cloud-runner-black-back.jpg",
    ],
  },
  {
    id: "2",
    name: "Cloud Runner",
    slug: "cloud-runner-womens",
    category: "women",
    collections: ["womens", "new-arrivals", "best-sellers"],
    price: 120,
    colors: [
      { name: "Blush Pink", hex: "#d4a5a5", image: "/images/products/cloud-runner-w-pink.jpg" },
      { name: "Stone White", hex: "#f0ede6", image: "/images/products/cloud-runner-w-white.jpg" },
      { name: "Navy", hex: "#2a3a5c", image: "/images/products/cloud-runner-w-navy.jpg" },
    ],
    sizes: [5, 6, 7, 8, 9, 10, 11],
    description:
      "A lightweight everyday runner with a breathable knit upper and cushioned sole. Built for comfort from morning to night.",
    features: ["Breathable mesh upper", "Cushioned insole", "Lightweight EVA midsole", "Natural rubber outsole"],
    materials: "Upper: Recycled polyester mesh. Midsole: Sugarcane-based EVA. Outsole: Natural rubber.",
    care: "Remove insoles and laces. Machine wash cold on gentle cycle. Air dry.",
    badge: "bestseller",
    images: [
      "/images/products/cloud-runner-w-pink.jpg",
      "/images/products/cloud-runner-w-pink-side.jpg",
      "/images/products/cloud-runner-w-pink-top.jpg",
    ],
  },
  {
    id: "3",
    name: "Trail Pacer",
    slug: "trail-pacer",
    category: "men",
    collections: ["mens", "new-arrivals"],
    price: 140,
    colors: [
      { name: "Forest Green", hex: "#3d5a3d", image: "/images/products/trail-pacer-green.jpg" },
      { name: "Charcoal", hex: "#333333", image: "/images/products/trail-pacer-charcoal.jpg" },
    ],
    sizes: [7, 8, 9, 10, 11, 12, 13],
    description:
      "Rugged enough for the trail, comfortable enough for all day. Grippy outsole meets cloud-like cushioning.",
    features: ["Reinforced toe cap", "All-terrain outsole", "Water-resistant upper", "Padded ankle collar"],
    materials: "Upper: Merino wool blend. Midsole: Bio-based foam. Outsole: Recycled rubber.",
    care: "Spot clean with mild soap. Air dry away from direct heat.",
    badge: "new",
    images: [
      "/images/products/trail-pacer-green.jpg",
      "/images/products/trail-pacer-green-side.jpg",
    ],
  },
  {
    id: "4",
    name: "Breeze Slip-On",
    slug: "breeze-slip-on",
    category: "women",
    collections: ["womens", "best-sellers"],
    price: 95,
    colors: [
      { name: "Warm Sand", hex: "#c4b59a", image: "/images/products/breeze-slip-on-sand.jpg" },
      { name: "Jet Black", hex: "#1a1a1a", image: "/images/products/breeze-slip-on-black.jpg" },
      { name: "Dusty Rose", hex: "#c49a9a", image: "/images/products/breeze-slip-on-rose.jpg" },
    ],
    sizes: [5, 6, 7, 8, 9, 10],
    description:
      "Slip into effortless style. A laceless design with a stretchy collar that hugs your foot just right.",
    features: ["Laceless entry", "Stretch collar", "Memory foam insole", "Lightweight construction"],
    materials: "Upper: Eucalyptus tree fiber. Midsole: Sugarcane EVA. Outsole: Natural rubber.",
    care: "Remove insoles. Machine wash cold on gentle cycle. Air dry.",
    badge: "bestseller",
    images: [
      "/images/products/breeze-slip-on-sand.jpg",
      "/images/products/breeze-slip-on-sand-side.jpg",
    ],
  },
  {
    id: "5",
    name: "Stride Loafer",
    slug: "stride-loafer",
    category: "men",
    collections: ["mens", "new-arrivals"],
    price: 110,
    colors: [
      { name: "Espresso", hex: "#4a3728", image: "/images/products/stride-loafer-espresso.jpg" },
      { name: "Slate", hex: "#6b7280", image: "/images/products/stride-loafer-slate.jpg" },
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    description:
      "A modern loafer that bridges casual and polished. Soft wool upper with a supportive footbed.",
    features: ["Wool upper", "Contoured footbed", "Collapsible heel", "Slip-resistant sole"],
    materials: "Upper: ZQ Merino wool. Midsole: Castor bean foam. Outsole: Natural rubber.",
    care: "Spot clean with damp cloth. Air dry.",
    badge: "new",
    images: [
      "/images/products/stride-loafer-espresso.jpg",
      "/images/products/stride-loafer-espresso-side.jpg",
    ],
  },
  {
    id: "6",
    name: "Aero Knit",
    slug: "aero-knit",
    category: "women",
    collections: ["womens", "new-arrivals"],
    price: 130,
    colors: [
      { name: "Cloud White", hex: "#f5f0eb", image: "/images/products/aero-knit-white.jpg" },
      { name: "Coral", hex: "#e07a5f", image: "/images/products/aero-knit-coral.jpg" },
      { name: "Deep Navy", hex: "#1e2d4a", image: "/images/products/aero-knit-navy.jpg" },
    ],
    sizes: [5, 6, 7, 8, 9, 10, 11],
    description:
      "Featherlight and fully knitted for a sock-like fit. Your new go-to for everything.",
    features: ["One-piece knit upper", "Sock-like fit", "Ultra-light foam sole", "Removable insole"],
    materials: "Upper: Recycled knit. Midsole: Sugarcane EVA. Outsole: Natural rubber.",
    care: "Remove insoles and laces. Machine wash cold. Air dry.",
    badge: "new",
    images: [
      "/images/products/aero-knit-white.jpg",
      "/images/products/aero-knit-white-side.jpg",
    ],
  },
  {
    id: "7",
    name: "Classic Walker",
    slug: "classic-walker",
    category: "men",
    collections: ["mens", "best-sellers"],
    price: 100,
    colors: [
      { name: "Natural Grey", hex: "#9a9a9a", image: "/images/products/classic-walker-grey.jpg" },
      { name: "Midnight", hex: "#1a1a2e", image: "/images/products/classic-walker-midnight.jpg" },
      { name: "Cream", hex: "#f0ede6", image: "/images/products/classic-walker-cream.jpg" },
    ],
    sizes: [7, 8, 9, 10, 11, 12, 13],
    description:
      "The shoe that started it all. Soft wool, simple design, endlessly comfortable.",
    features: ["Merino wool upper", "Cushioned footbed", "Minimalist design", "Machine washable"],
    materials: "Upper: ZQ Merino wool. Midsole: Sugarcane EVA. Outsole: SweetFoam™.",
    care: "Remove insoles and laces. Machine wash cold on gentle. Air dry.",
    badge: "bestseller",
    images: [
      "/images/products/classic-walker-grey.jpg",
      "/images/products/classic-walker-grey-side.jpg",
    ],
  },
  {
    id: "8",
    name: "Classic Walker",
    slug: "classic-walker-womens",
    category: "women",
    collections: ["womens", "best-sellers"],
    price: 100,
    colors: [
      { name: "Lavender", hex: "#b5a7c9", image: "/images/products/classic-walker-w-lavender.jpg" },
      { name: "Natural Grey", hex: "#9a9a9a", image: "/images/products/classic-walker-w-grey.jpg" },
      { name: "Cream", hex: "#f0ede6", image: "/images/products/classic-walker-w-cream.jpg" },
    ],
    sizes: [5, 6, 7, 8, 9, 10],
    description:
      "The shoe that started it all. Soft wool, simple design, endlessly comfortable.",
    features: ["Merino wool upper", "Cushioned footbed", "Minimalist design", "Machine washable"],
    materials: "Upper: ZQ Merino wool. Midsole: Sugarcane EVA. Outsole: SweetFoam™.",
    care: "Remove insoles and laces. Machine wash cold on gentle. Air dry.",
    images: [
      "/images/products/classic-walker-w-lavender.jpg",
      "/images/products/classic-walker-w-lavender-side.jpg",
    ],
  },
  {
    id: "9",
    name: "Dash Sport",
    slug: "dash-sport",
    category: "men",
    collections: ["mens", "new-arrivals"],
    price: 145,
    colors: [
      { name: "Storm Blue", hex: "#4a6fa5", image: "/images/products/dash-sport-blue.jpg" },
      { name: "Black", hex: "#1a1a1a", image: "/images/products/dash-sport-black.jpg" },
    ],
    sizes: [7, 8, 9, 10, 11, 12, 13],
    description:
      "Engineered for performance. Responsive cushioning and a breathable upper for your best run yet.",
    features: ["Responsive foam midsole", "Breathable mesh", "Reflective details", "Flexible outsole"],
    materials: "Upper: Recycled mesh. Midsole: Bio-foam. Outsole: Carbon rubber.",
    care: "Spot clean. Air dry. Do not machine wash.",
    badge: "new",
    images: [
      "/images/products/dash-sport-blue.jpg",
      "/images/products/dash-sport-blue-side.jpg",
    ],
  },
  {
    id: "10",
    name: "Dash Sport",
    slug: "dash-sport-womens",
    category: "women",
    collections: ["womens", "new-arrivals"],
    price: 145,
    colors: [
      { name: "Coral Pink", hex: "#e07a7a", image: "/images/products/dash-sport-w-coral.jpg" },
      { name: "Black", hex: "#1a1a1a", image: "/images/products/dash-sport-w-black.jpg" },
    ],
    sizes: [5, 6, 7, 8, 9, 10, 11],
    description:
      "Engineered for performance. Responsive cushioning and a breathable upper for your best run yet.",
    features: ["Responsive foam midsole", "Breathable mesh", "Reflective details", "Flexible outsole"],
    materials: "Upper: Recycled mesh. Midsole: Bio-foam. Outsole: Carbon rubber.",
    care: "Spot clean. Air dry. Do not machine wash.",
    badge: "new",
    images: [
      "/images/products/dash-sport-w-coral.jpg",
      "/images/products/dash-sport-w-coral-side.jpg",
    ],
  },
  {
    id: "11",
    name: "Glide Flat",
    slug: "glide-flat",
    category: "women",
    collections: ["womens", "best-sellers"],
    price: 105,
    colors: [
      { name: "Jet Black", hex: "#1a1a1a", image: "/images/products/glide-flat-black.jpg" },
      { name: "Ballet Pink", hex: "#e8c4c4", image: "/images/products/glide-flat-pink.jpg" },
      { name: "Forest", hex: "#3d5a3d", image: "/images/products/glide-flat-forest.jpg" },
    ],
    sizes: [5, 6, 7, 8, 9, 10],
    description:
      "A sleek ballet flat with just enough support. Tree fiber keeps it cool and breathable all day.",
    features: ["Tree fiber upper", "Padded insole", "Flexible sole", "Slip-on design"],
    materials: "Upper: Eucalyptus tree fiber. Insole: Castor bean foam. Outsole: Natural rubber.",
    care: "Machine wash cold. Air dry.",
    badge: "bestseller",
    images: [
      "/images/products/glide-flat-black.jpg",
      "/images/products/glide-flat-black-side.jpg",
    ],
  },
  {
    id: "12",
    name: "Summit Hiker",
    slug: "summit-hiker",
    category: "men",
    collections: ["mens"],
    price: 160,
    colors: [
      { name: "Earth Brown", hex: "#6b5b4a", image: "/images/products/summit-hiker-brown.jpg" },
      { name: "Charcoal", hex: "#333333", image: "/images/products/summit-hiker-charcoal.jpg" },
    ],
    sizes: [7, 8, 9, 10, 11, 12, 13],
    description:
      "Built for the outdoors but comfortable enough for everyday. Waterproof and warm.",
    features: ["Waterproof membrane", "Merino wool lining", "Vibram outsole", "Padded collar"],
    materials: "Upper: Merino wool with waterproof membrane. Outsole: Vibram rubber.",
    care: "Clean with brush and mild soap. Reproof periodically.",
    images: [
      "/images/products/summit-hiker-brown.jpg",
      "/images/products/summit-hiker-brown-side.jpg",
    ],
  },
  {
    id: "13",
    name: "Coast Slide",
    slug: "coast-slide",
    category: "unisex",
    collections: ["mens", "womens", "new-arrivals"],
    price: 55,
    colors: [
      { name: "Sand", hex: "#c4b59a", image: "/images/products/coast-slide-sand.jpg" },
      { name: "Black", hex: "#1a1a1a", image: "/images/products/coast-slide-black.jpg" },
    ],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    description:
      "The easiest shoe you'll ever own. Slip on, step out, done.",
    features: ["Sugarcane foam", "Contoured footbed", "Quick-dry material", "Lightweight"],
    materials: "Body: Sugarcane-based foam. Strap: Recycled nylon.",
    care: "Rinse with water. Air dry.",
    badge: "new",
    images: [
      "/images/products/coast-slide-sand.jpg",
    ],
  },
  {
    id: "14",
    name: "Tempo Trainer",
    slug: "tempo-trainer",
    category: "men",
    collections: ["mens", "sale"],
    price: 90,
    originalPrice: 130,
    colors: [
      { name: "Red", hex: "#9e4040", image: "/images/products/tempo-trainer-red.jpg" },
      { name: "Grey", hex: "#8a8a8a", image: "/images/products/tempo-trainer-grey.jpg" },
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    description:
      "A versatile cross-trainer that handles everything from the gym to the street.",
    features: ["Wide toe box", "Flat sole for stability", "Breathable upper", "Durable outsole"],
    materials: "Upper: Recycled polyester. Midsole: EVA foam. Outsole: Rubber.",
    care: "Machine wash cold. Air dry.",
    badge: "sale",
    images: [
      "/images/products/tempo-trainer-red.jpg",
    ],
  },
  {
    id: "15",
    name: "Tempo Trainer",
    slug: "tempo-trainer-womens",
    category: "women",
    collections: ["womens", "sale"],
    price: 90,
    originalPrice: 130,
    colors: [
      { name: "Sage", hex: "#8a9a7a", image: "/images/products/tempo-trainer-w-sage.jpg" },
      { name: "Black", hex: "#1a1a1a", image: "/images/products/tempo-trainer-w-black.jpg" },
    ],
    sizes: [5, 6, 7, 8, 9, 10],
    description:
      "A versatile cross-trainer that handles everything from the gym to the street.",
    features: ["Wide toe box", "Flat sole for stability", "Breathable upper", "Durable outsole"],
    materials: "Upper: Recycled polyester. Midsole: EVA foam. Outsole: Rubber.",
    care: "Machine wash cold. Air dry.",
    badge: "sale",
    images: [
      "/images/products/tempo-trainer-w-sage.jpg",
    ],
  },
  {
    id: "16",
    name: "Metro Step",
    slug: "metro-step",
    category: "women",
    collections: ["womens", "new-arrivals"],
    price: 115,
    colors: [
      { name: "Warm White", hex: "#f5efe6", image: "/images/products/metro-step-white.jpg" },
      { name: "Burgundy", hex: "#6b2a3d", image: "/images/products/metro-step-burgundy.jpg" },
    ],
    sizes: [5, 6, 7, 8, 9, 10],
    description:
      "Urban style meets all-day comfort. A modern silhouette with a cushioned platform sole.",
    features: ["Platform sole", "Knit upper", "Padded tongue", "Cushioned insole"],
    materials: "Upper: Recycled knit. Midsole: Bio-based foam. Outsole: Rubber.",
    care: "Machine wash cold. Air dry.",
    badge: "new",
    images: [
      "/images/products/metro-step-white.jpg",
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter((p) => p.collections.includes(collectionSlug));
}

export function getRelatedProducts(product: Product, limit = 8): Product[] {
  return products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.category === product.category ||
          p.collections.some((c) => product.collections.includes(c)))
    )
    .slice(0, limit);
}

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    subtitle: "INTRODUCING CLOUD RUNNER",
    title: "Breathable By Nature",
    image: "/images/hero/hero-1.jpg",
    ctaLinks: [
      { label: "SHOP MEN", href: "/collections/mens" },
      { label: "SHOP WOMEN", href: "/collections/womens" },
    ],
  },
  {
    id: "2",
    subtitle: "THE DASH COLLECTION",
    title: "Ready. Set. Take your time.",
    image: "/images/hero/hero-2.jpg",
    ctaLinks: [
      { label: "SHOP MEN", href: "/collections/mens" },
      { label: "SHOP WOMEN", href: "/collections/womens" },
    ],
  },
  {
    id: "3",
    subtitle: "NATURAL MATERIALS",
    title: "Better for you. Better for the planet.",
    image: "/images/hero/hero-3.jpg",
    ctaLinks: [
      { label: "SHOP NEW ARRIVALS", href: "/collections/new-arrivals" },
    ],
  },
];
