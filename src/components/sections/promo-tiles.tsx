import Link from "next/link";

const promos = [
  {
    title: "Trail Collection",
    bg: "bg-cream-dark",
    links: [
      { label: "SHOP MEN", href: "/collections/mens" },
      { label: "SHOP WOMEN", href: "/collections/womens" },
    ],
  },
  {
    title: "Everyday Essentials",
    bg: "bg-cream-light",
    links: [
      { label: "SHOP MEN", href: "/collections/mens" },
      { label: "SHOP WOMEN", href: "/collections/womens" },
    ],
  },
  {
    title: "Sale",
    bg: "bg-cream",
    links: [
      { label: "SHOP MEN", href: "/collections/sale" },
      { label: "SHOP WOMEN", href: "/collections/sale" },
    ],
  },
];

export function PromoTiles() {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {promos.map((promo) => (
          <div
            key={promo.title}
            className={`${promo.bg} flex flex-col items-center justify-center py-20 px-6 text-center`}
          >
            <div className="w-full h-32 bg-cream-dark/20 rounded-lg mb-6" />
            <h3 className="text-lg font-semibold text-charcoal mb-4">{promo.title}</h3>
            <div className="flex gap-3">
              {promo.links.map((link, i) => (
                <Link key={i} href={link.href} className="btn-cta-outline text-xs">
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
