"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";
import products from "@/data/products";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-16 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <span className="text-accent text-sm font-semibold uppercase tracking-widest">
          Our Collection
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2">
          Best Selling Products
        </h2>
        <p className="text-gray-500 mt-2 text-sm max-w-sm mx-auto">
          Handpicked favourites loved by thousands across India
        </p>
      </motion.div>

      {/* Filter */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </motion.div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-5xl mb-3">🍬</p>
          <p className="font-medium">No products in this category yet.</p>
        </div>
      )}
    </section>
  );
}
