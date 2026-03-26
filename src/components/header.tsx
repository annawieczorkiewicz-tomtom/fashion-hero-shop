"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SearchIcon, UserIcon, CartIcon, HelpIcon, MenuIcon, CloseIcon, HeartIcon } from "./icons";
import { SearchModal } from "./search-modal";

const navLinks = [
  { label: "MEN", href: "/collections/mens" },
  { label: "WOMEN", href: "/collections/womens" },
  { label: "SALE", href: "/collections/sale" },
];

const secondaryLinks = [
  { label: "About", href: "#" },
];

interface HeaderProps {
  onCartOpen?: () => void;
  cartCount?: number;
  wishlistCount?: number;
}

export function Header({ onCartOpen, cartCount = 0, wishlistCount = 0 }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-black/5">
      <nav className="mx-auto flex h-14 items-center px-4 lg:px-8">
        {/* Mobile menu button */}
        <button
          className="lg:hidden p-1 mr-3"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Logo — distinctive italic/script treatment */}
        <Link href="/" className="mr-8">
          <span className="text-xl font-semibold italic tracking-tight text-charcoal">
            StepForward
          </span>
        </Link>

        {/* Desktop nav links — centered */}
        <div className="hidden lg:flex items-center gap-6 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] font-medium uppercase tracking-[0.5px] text-charcoal hover:opacity-60 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-3 ml-auto">
          {secondaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hidden lg:block text-[12px] text-charcoal hover:opacity-60 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
          <button
            aria-label="Search"
            className="p-1 hover:opacity-60 transition-opacity"
            onClick={() => setSearchOpen(true)}
          >
            <SearchIcon />
          </button>
          <button
            aria-label="Wishlist"
            className="hidden sm:block p-1 hover:opacity-60 transition-opacity relative"
          >
            <HeartIcon className="h-5 w-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>
          <Link href="#" aria-label="Account" className="hidden sm:block p-1 hover:opacity-60 transition-opacity">
            <UserIcon />
          </Link>
          <Link href="#" aria-label="Help" className="hidden lg:block p-1 hover:opacity-60 transition-opacity">
            <HelpIcon />
          </Link>
          <button
            aria-label="View Cart"
            className="p-1 hover:opacity-60 transition-opacity relative"
            onClick={onCartOpen}
          >
            <CartIcon />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-charcoal text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          mobileMenuOpen ? "max-h-60" : "max-h-0"
        )}
      >
        <div className="px-4 py-4 space-y-3 border-t border-black/5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-nav"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {secondaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
