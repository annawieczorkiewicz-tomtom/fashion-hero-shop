"use client";

import { AnnouncementBar } from "./announcement-bar";
import { Header } from "./header";
import { Footer } from "./footer";
import { CartProvider, useCart } from "./cart-provider";

function ShellInner({ children }: { children: React.ReactNode }) {
  const { openCart, itemCount } = useCart();

  return (
    <>
      <AnnouncementBar />
      <Header onCartOpen={openCart} cartCount={itemCount} />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <ShellInner>{children}</ShellInner>
    </CartProvider>
  );
}
