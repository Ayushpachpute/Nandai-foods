"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#products", label: "Shop" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-soft border-b border-amber-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Hamburger */}
          <button
            id="navbar-hamburger"
            onClick={() => setMenuOpen(true)}
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-amber-50 transition-colors"
            aria-label="Open menu"
          >
            <Menu size={22} className="text-dark" />
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 select-none">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center shadow-gold">
              <Leaf size={16} className="text-white" fill="white" />
            </div>
            <span className="text-lg font-bold text-dark leading-tight">
              Nandai <span className="text-accent">Foods</span>
            </span>
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            id="navbar-cart"
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-amber-50 transition-colors relative"
            aria-label="Cart"
          >
            <ShoppingCart size={22} className="text-dark" />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold"
              >
                {totalItems > 9 ? "9+" : totalItems}
              </motion.span>
            )}
          </Link>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            />
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-72 bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-amber-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center">
                    <Leaf size={14} className="text-white" fill="white" />
                  </div>
                  <span className="font-bold text-dark">
                    Nandai <span className="text-accent">Foods</span>
                  </span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-amber-50"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="p-5 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-3 px-4 rounded-xl font-medium text-dark hover:bg-amber-50 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-5 mt-auto border-t border-amber-100">
                <p className="text-xs text-gray-400 font-medium">
                  🌿 Healthy • Handmade • Premium Quality
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
