# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**FashionHero** is a Next.js-based e-commerce marketplace frontend inspired by Allbirds. It features:
- Multi-seller product listings with filtering and search
- Product detail pages with color swatches, size selection, and reviews
- Shopping cart and wishlist functionality
- Responsive design (mobile-first) with natural, warm color palette
- User authentication (localStorage-based demo implementation)

See AGENTS.md for agent collaboration patterns and code style guidelines.

> **Next.js version warning**: This project uses Next.js 16, which has breaking changes from earlier versions — APIs, conventions, and file structure may differ from training data. Read `node_modules/next/dist/docs/` before writing any Next.js-specific code, and heed deprecation notices.

## Tech Stack

- **Framework**: Next.js 16 (App Router, React 19, TypeScript strict)
- **Styling**: Tailwind CSS v4 with oklch design tokens, shadcn/ui (Radix primitives)
- **Icons**: Lucide React (default, replaceable with custom SVGs)
- **State Management**: React Context (Cart, Wishlist, Auth, QuickView)
- **UI Primitives**: `@base-ui/react` (Base UI, not classic Radix — check its API docs separately from shadcn/ui docs)
- **Image Sources**: Unsplash, Pexels, Picsum (configured in next.config.ts)
- **Font**: Geist (from Google Fonts)

## Key Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint on all files

# Single file operations
npx eslint src/components/header.tsx --fix  # Lint + auto-fix a single file
```

There is no test runner configured in this project.

## Architecture & State Management

### Context Providers (Nested in src/components/shell.tsx)

The app uses four context providers, layered as:
```
AuthProvider
  └─ CartProvider
      └─ WishlistProvider
          └─ QuickViewProvider
              └─ ShellInner (Header/Footer/Main)
```

**AuthProvider** (`src/components/auth-provider.tsx`)
- Manages user login/register/logout state
- Persists user to localStorage (key: `stepforward_user`)
- Exports: `useAuth()` hook with `{ user, login, register, logout }`

**CartProvider** (`src/components/cart-provider.tsx`)
- Tracks cart items with product, color, size, quantity
- Exports: `useCart()` hook with `{ items, addItem, removeItem, updateQuantity, openCart, closeCart, itemCount }`
- CartDrawer component (modal) is rendered inside provider

**WishlistProvider** (`src/components/wishlist-provider.tsx`)
- Simple list of favorited products by ID
- Exports: `useWishlist()` hook with `{ wishlistItems, toggle, isWishlisted }`

**QuickViewProvider** (`src/components/quick-view-provider.tsx`)
- Modal overlay for quick product preview (compact product details)
- Exports: `useQuickView()` hook with product modal state

### Data Layer

- **Products**: `src/data/products.ts` — Array of Product objects with nested ProductColor variants
- **Collections**: `src/data/collections.ts` — Product groupings (e.g., "mens", "new-arrivals")
- **Sellers**: `src/data/sellers.ts` — Multi-seller data with Pro badge support

All data is hardcoded for now; replace with API calls in fetch/effect blocks as needed.

### Type System

All types live in `src/types/index.ts`:
- `Product`: Full product object (id, name, colors[], sizes[], price, badge, sellerId, etc.)
- `ProductColor`: { name, hex, image }
- `CartItem`: { product, color, size, quantity }
- `Collection`: { id, name, slug, heroImage }
- `ShoeType`, `ShoeMaterial`, `ProductCategory` enums

Key seller type in `src/types/seller.ts`.

## Page Routes & Key Components

### Pages (App Router in src/app/)
- `/` — Home: Hero carousel, category row, product carousel, feature story, promo tiles, value props
- `/collections/[slug]` — Collection listing with sidebar filters (color, material, type, seller, sort)
- `/products/[slug]` — Product detail: image gallery, info panel, accordion (features/materials/care), related products, recently viewed
- `/about` — Static about page
- `/account`, `/account/login`, `/account/register` — Auth pages (demo UI, no validation)
- `/checkout` — Cart summary → order form (demo, no payment processing)
- `/wishlist` — Favorited products grid
- `/seller/promote` — Seller promotion signup (demo form)

### Core UI Components
- **Header** (`header.tsx`): Sticky navigation, mega menu (desktop), search modal, cart/wishlist icons
- **Footer** (`footer.tsx`): Links, newsletter signup, socials
- **MegaMenu** (`mega-menu.tsx`): Desktop dropdown nav + mobile sheet nav
- **ProductCard** (`product-card.tsx`): Product thumbnail with color swatches, quick view button, wishlist toggle
- **ProductGrid** (`product-grid.tsx`): Responsive grid layout of cards (1 mobile, 2 tablet, 3+ desktop)
- **ImageGallery** (`image-gallery.tsx`): Product images with thumbnail carousel
- **ProductInfo** (`product-info.tsx`): Name, price, rating, color swatch picker, size selector, add-to-cart button
- **ProductDetailsAccordion** (`product-details-accordion.tsx`): Features, materials, care instructions (collapsible)
- **QuickViewModal** (`quick-view-modal.tsx`): Lightweight product preview overlay
- **SearchModal** (`search-modal.tsx`): Client-side product search by name/tags
- **CartDrawer** (`cart-drawer.tsx`): Slide-out cart summary with remove/quantity controls
- **FilterBar** & **FilterSidebar** (`filter-bar.tsx`, `filter-sidebar.tsx`): Collection page filters
- **ColorSwatches** (`color-swatches.tsx`): Color variant selector

### Section Components (Composable Page Sections)
- `HeroCarousel`: Full-width image slider with CTA buttons
- `CategoryRow`: 4-column grid of category cards
- `ProductCarousel`: Horizontal scrolling product carousel
- `FeatureStory`: Large image + text block
- `PromoTiles`: 2x2 grid of promotional cards
- `ValueProps`: Icon + text value propositions

## Design Tokens & Styling

**Color Palette** (in globals.css):
- Background: Cream (#ece9e2)
- Primary: Charcoal (#212121)
- Secondary: Cream-light (#f5f4f1)
- Muted: Cream-dark (#e0dad0)
- Accent: Cream-light (#f5f4f1)
- Destructive: Red (#e31919)
- Footer: Charcoal (#212121)

**Typography Classes** (custom utilities):
- `.text-nav` — 12px, 500 weight, uppercase, letter-spacing 0.6px
- `.text-label` — Same as nav but with muted color
- `.text-price` — 14px, 500 weight
- `.btn-cta` — Primary button style (charcoal bg, white text, rounded pill)
- `.btn-cta-outline` — Outlined variant

**Tailwind v4 Notes**:
- No pre-defined color scale; use CSS variables directly
- `@apply` directives in globals.css define default styles
- Custom variant: `@custom-variant dark` for dark mode (not fully implemented)

**Responsive Breakpoints** (Tailwind defaults):
- Mobile: 0–639px (default)
- Tablet: 640–1023px (`md:`)
- Desktop: 1024px+ (`lg:`)

## Development Notes

### Adding New Products
Edit `src/data/products.ts`. Each product must have:
- Unique `id` and `slug` (slug used in URL `/products/[slug]`)
- `sellerId` referencing a seller in `src/data/sellers.ts`
- At least one entry in `colors[]` with a valid image URL
- `images[]` array for gallery

### Adding New Collections
Edit `src/data/collections.ts`. Add a collection object with `id`, `slug`, `name`, `description`, `heroImage`.

Then update product entries to include the new slug in their `collections[]` array.

### Seller Feature
- Sellers are stored in `src/data/sellers.ts` with `id`, `name`, `pro` (boolean), `rating`, `reviewCount`
- Products reference sellers via `sellerId`
- Seller filter and display are in FilterSidebar and ProductCard
- Header navigation includes a "FOR SELLERS" link to `/seller/promote`

### Image Handling
- Next.js Image component configured to accept Unsplash, Pexels, Picsum via `next.config.ts` remotePatterns
- Store image URLs in data files or fetch dynamically
- Consider lazy loading for large grids

### Adding Features
- **Global state** → add Context + hook in `src/components/`, wrap app in Shell
- **New page** → create `src/app/[path]/page.tsx` (Next.js App Router auto-routes)
- **New component** → keep in `src/components/` (or `src/components/ui/` for shadcn primitives)
- **Utilities** → add to `src/lib/utils.ts`

### ESLint & TypeScript
- Strict mode enabled; no `any` types allowed
- ESLint config in `eslint.config.mjs` (flat config format)
- Run `npm run lint` before commit to catch issues

## See Also

- **AGENTS.md** — Code style guidelines, collaboration patterns for multi-agent teams, tech stack details
- **TARGET.md** — Original Allbirds clone target and customization notes
- **docs/research/** — Design token extraction and component inspection guides
