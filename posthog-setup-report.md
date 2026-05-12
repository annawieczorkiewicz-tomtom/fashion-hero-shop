<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the FashionHero Next.js App Router project. Here is a summary of all changes made:

- **`instrumentation-client.ts`** (new) — Initializes PostHog client-side using the Next.js 15.3+ instrumentation pattern. Configured with a reverse proxy (`/ingest`), EU host, exception capture, and debug mode in development.
- **`next.config.ts`** — Added reverse proxy rewrites routing `/ingest/*` to `eu.i.posthog.com` and `/ingest/static|array/*` to `eu-assets.i.posthog.com`. Added `skipTrailingSlashRedirect: true`.
- **`.env.local`** — Created with `NEXT_PUBLIC_POSTHOG_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` (EU endpoint).

## Events instrumented

| Event | Description | File |
|---|---|---|
| `user_signed_in` | User submits login form successfully | `src/app/account/login/page.tsx` |
| `user_registered` | User creates a new account | `src/app/account/register/page.tsx` |
| `product_added_to_cart` | User adds a product to cart (with name, price, color, size) | `src/components/product-info.tsx` |
| `checkout_initiated` | User clicks Checkout in the cart drawer (with item count, subtotal) | `src/components/cart-drawer.tsx` |
| `order_placed` | User clicks Place Order on checkout page (with totals) | `src/app/checkout/page.tsx` |
| `product_wishlisted` | User adds a product to their wishlist | `src/components/wishlist-provider.tsx` |
| `product_removed_from_wishlist` | User removes a product from their wishlist | `src/components/wishlist-provider.tsx` |
| `search_performed` | User presses Enter after typing a search query | `src/components/search-modal.tsx` |
| `search_result_clicked` | User clicks a product in search results | `src/components/search-modal.tsx` |
| `product_viewed` | User lands on a product detail page (top of conversion funnel) | `src/app/products/[slug]/recently-viewed-section.tsx` |
| `seller_campaign_activated` | Seller activates a promotion campaign for a product | `src/app/seller/promote/page.tsx` |
| `seller_campaign_paused` | Seller pauses an active promotion campaign | `src/app/seller/promote/page.tsx` |

User identification (`posthog.identify`) is called on login and registration with the user's email and name.

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/677377)
- [Purchase Conversion Funnel](/insights/ydWRHU5t) — 4-step funnel: product viewed → add to cart → checkout initiated → order placed
- [New User Registrations](/insights/Kohfxsn0) — Daily trend of new account sign-ups
- [Add to Cart vs Orders](/insights/G19IJUxZ) — Side-by-side comparison of cart additions and completed orders
- [Wishlist Activity](/insights/rBG0MBw0) — Wishlist adds and removals over time (purchase intent signal)
- [Seller Campaign Activations](/insights/9TD91eiG) — Seller promotion campaigns activated and paused over time

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
