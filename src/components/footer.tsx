import Link from "next/link";

const footerSections = [
  {
    title: "HELP",
    links: [
      { label: "FAQ/Contact Us", href: "#" },
      { label: "Returns/Exchanges", href: "#" },
      { label: "Shipping Info", href: "#" },
    ],
  },
  {
    title: "SHOP",
    links: [
      { label: "Men's Shoes", href: "/collections/mens" },
      { label: "Women's Shoes", href: "/collections/womens" },
      { label: "New Arrivals", href: "/collections/new-arrivals" },
      { label: "Best Sellers", href: "/collections/best-sellers" },
      { label: "Sale", href: "/collections/sale" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "Our Story", href: "#" },
      { label: "Our Materials", href: "#" },
      { label: "Sustainability", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "X/Twitter", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-footer-bg text-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Email signup */}
          <div>
            <h3 className="text-label text-white/60 mb-4">SUBSCRIBE TO OUR EMAILS</h3>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-transparent border border-white/30 px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-charcoal text-xs font-medium uppercase tracking-wider hover:bg-white/90 transition-colors"
              >
                Sign Up
              </button>
            </form>
          </div>

          {/* Link sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-label text-white/60 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-lg font-semibold tracking-tight">StepForward</span>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} StepForward, Inc. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
