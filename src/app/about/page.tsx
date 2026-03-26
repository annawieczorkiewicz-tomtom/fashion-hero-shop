import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — FashionHero",
  description: "Our story: sustainable shoes made from natural materials.",
};

const values = [
  {
    title: "Natural Materials",
    description:
      "We replace petroleum-based synthetics with natural alternatives wherever we can. Wool, tree fiber, and sugarcane — soft, breathable, and better for the planet.",
  },
  {
    title: "Carbon Conscious",
    description:
      "From materials to transport, we measure and reduce our carbon footprint at every step. Every pair of FashionHero shoes comes with a smaller environmental impact.",
  },
  {
    title: "Designed to Last",
    description:
      "We believe the most sustainable shoe is one you actually wear. That means obsessing over comfort, durability, and timeless style — not trends that expire in a season.",
  },
];

const timeline = [
  { year: "2020", event: "Founded with a simple idea: shoes should be comfortable and sustainable." },
  { year: "2021", event: "Launched our first shoe, the Classic Walker, made from ZQ Merino wool." },
  { year: "2022", event: "Introduced tree fiber and sugarcane-based materials across the line." },
  { year: "2023", event: "Reached carbon neutrality across all operations and shipping." },
  { year: "2024", event: "Expanded to 16 styles across runners, walkers, trainers, and more." },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/hero/hero-3.jpg"
          alt="FashionHero shoes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <p className="text-[11px] font-medium uppercase tracking-[1px] mb-4 text-white/70">
            OUR STORY
          </p>
          <h1 className="text-4xl md:text-5xl font-light leading-tight max-w-2xl">
            Better shoes. Better planet.
            <br />
            One step at a time.
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[1px] text-warm-gray mb-6">
          OUR MISSION
        </p>
        <p className="text-xl md:text-2xl leading-relaxed text-charcoal">
          FashionHero was born from a simple question: why are shoes made from
          petroleum? We set out to prove that comfort, style, and sustainability
          aren&apos;t trade-offs — they&apos;re the standard.
        </p>
      </section>

      {/* Values */}
      <section className="bg-cream-light py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[11px] font-medium uppercase tracking-[1px] text-warm-gray mb-10 text-center">
            WHAT WE STAND FOR
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="text-lg font-medium mb-3 text-charcoal">{value.title}</h3>
                <p className="text-sm leading-relaxed text-warm-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <Image
          src="/images/hero/hero-2.jpg"
          alt="People running in FashionHero shoes"
          fill
          className="object-cover"
        />
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto px-4 py-20">
        <p className="text-[11px] font-medium uppercase tracking-[1px] text-warm-gray mb-10 text-center">
          OUR JOURNEY
        </p>
        <div className="space-y-8">
          {timeline.map((item) => (
            <div key={item.year} className="flex gap-6 items-start">
              <span className="text-2xl font-light text-charcoal/30 w-16 flex-shrink-0">
                {item.year}
              </span>
              <p className="text-sm leading-relaxed text-charcoal pt-2 border-t border-cream-dark flex-1">
                {item.event}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal text-white py-20 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/50 mb-4">
          READY TO STEP FORWARD?
        </p>
        <h2 className="text-3xl md:text-4xl font-light mb-8">
          Find your perfect pair.
        </h2>
        <div className="flex gap-4 justify-center">
          <Link href="/collections/mens" className="btn-cta bg-white text-charcoal hover:bg-white/90">
            SHOP MEN
          </Link>
          <Link href="/collections/womens" className="btn-cta bg-white text-charcoal hover:bg-white/90">
            SHOP WOMEN
          </Link>
        </div>
      </section>
    </div>
  );
}
