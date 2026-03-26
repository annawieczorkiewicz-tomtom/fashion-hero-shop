import Link from "next/link";

const categories = [
  {
    title: "New Arrivals",
    slug: "new-arrivals",
    bg: "bg-cream-light",
    links: [{ label: "SHOP NOW", href: "/collections/new-arrivals" }],
  },
  {
    title: "Men's",
    slug: "mens",
    bg: "bg-cream-dark",
    links: [{ label: "SHOP MEN", href: "/collections/mens" }],
  },
  {
    title: "Women's",
    slug: "womens",
    bg: "bg-cream",
    links: [{ label: "SHOP WOMEN", href: "/collections/womens" }],
  },
  {
    title: "Best Sellers",
    slug: "best-sellers",
    bg: "bg-cream-light",
    links: [{ label: "SHOP NOW", href: "/collections/best-sellers" }],
  },
];

export function CategoryRow() {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div key={cat.slug} className={`${cat.bg} flex flex-col items-center justify-center py-16 px-6`}>
            <h3 className="text-lg font-semibold text-charcoal mb-4">{cat.title}</h3>
            <div className="flex gap-3">
              {cat.links.map((link) => (
                <Link key={link.href} href={link.href} className="btn-cta-outline text-xs">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
