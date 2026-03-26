import Link from "next/link";
import type { Collection } from "@/types";

interface CollectionHeroProps {
  collection: Collection;
}

export function CollectionHero({ collection }: CollectionHeroProps) {
  return (
    <section className="relative w-full h-[180px] md:h-[250px] bg-cream-dark flex items-center justify-center">
      <div className="relative z-10 text-center px-4">
        {/* Breadcrumb */}
        <nav className="mb-3" aria-label="Breadcrumb">
          <ol className="flex items-center justify-center gap-1.5 text-label">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal">{collection.name}</li>
          </ol>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-charcoal mb-2">
          {collection.name}
        </h1>

        {/* Description */}
        <p className="text-sm md:text-base text-warm-gray max-w-lg mx-auto">
          {collection.description}
        </p>
      </div>
    </section>
  );
}
