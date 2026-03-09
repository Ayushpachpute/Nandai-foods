"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, ShoppingBag, ShoppingCart, User } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

const navItems = [
  { href: "/", icon: Home, label: "Home", id: "bottom-nav-home" },
  { href: "/search", icon: Search, label: "Search", id: "bottom-nav-search" },
  { href: "/#products", icon: ShoppingBag, label: "Shop", id: "bottom-nav-shop" },
  { href: "/cart", icon: ShoppingCart, label: "Cart", id: "bottom-nav-cart" },
  { href: "/profile", icon: User, label: "Profile", id: "bottom-nav-profile" },
];

export default function BottomNav() {
  const pathname = usePathname();
  const { totalItems } = useCart();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-amber-100 safe-area-bottom md:hidden">
      <div className="flex items-center justify-around py-2 px-2 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          const isCart = item.label === "Cart";

          return (
            <Link
              key={item.href}
              href={item.href}
              id={item.id}
              className="flex flex-col items-center gap-0.5 py-1 px-3 relative"
            >
              <div className="relative flex items-center justify-center">
                {isActive && (
                  <motion.div
                    layoutId="active-bottom-nav"
                    className="absolute inset-0 w-10 h-10 -translate-x-[2px] -translate-y-[8px] rounded-xl bg-amber-50"
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  />
                )}
                <Icon
                  size={22}
                  className={`relative z-10 transition-colors ${
                    isActive ? "text-accent" : "text-gray-400"
                  }`}
                  strokeWidth={isActive ? 2.5 : 1.8}
                />
                {isCart && totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold z-20">
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </div>
              <span
                className={`text-[10px] font-medium transition-colors ${
                  isActive ? "text-accent" : "text-gray-400"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
