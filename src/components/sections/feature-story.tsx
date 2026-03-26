import Link from "next/link";

const spotlights = [
  {
    bg: "bg-cream-dark",
    name: "Cloud Runner",
    tagline: "Our lightest shoe ever. Knit from recycled materials for all-day ease.",
    href: "/products/cloud-runner",
  },
  {
    bg: "bg-cream-light",
    name: "Breeze Slip-On",
    tagline: "Slip in and go. Eucalyptus fiber keeps things cool, naturally.",
    href: "/products/breeze-slip-on",
  },
];

export function FeatureStory() {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-charcoal text-center mb-8">
        Your Easy, Breezy MVP
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {spotlights.map((item) => (
          <div key={item.name} className={`${item.bg} flex flex-col items-center justify-center py-20 px-8 text-center`}>
            <div className="w-48 h-32 bg-cream-dark/30 rounded-lg mb-6 flex items-center justify-center text-sm text-warm-gray/60">
              {item.name}
            </div>
            <h3 className="text-lg font-semibold text-charcoal mb-2">{item.name}</h3>
            <p className="text-sm text-warm-gray mb-6 max-w-xs">{item.tagline}</p>
            <Link href={item.href} className="btn-cta-outline text-xs">
              EXPLORE MORE
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
