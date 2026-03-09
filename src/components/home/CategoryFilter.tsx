"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  { id: "all", label: "All" },
  { id: "mukhwas", label: "Mukhwas" },
  { id: "chikki", label: "Chikki" },
  { id: "laddu", label: "Laddu" },
  { id: "healthy-snacks", label: "Healthy Snacks" },
];

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <motion.button
            key={cat.id}
            id={`category-${cat.id}`}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCategoryChange(cat.id)}
            className={`relative px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap flex-shrink-0 transition-all ${
              isActive
                ? "bg-gradient-to-r from-gold to-accent text-dark shadow-gold"
                : "bg-white text-gray-500 border border-amber-100 hover:border-gold hover:text-accent"
            }`}
          >
            {cat.label}
          </motion.button>
        );
      })}
    </div>
  );
}
