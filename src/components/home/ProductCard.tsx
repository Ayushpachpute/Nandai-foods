"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, Plus, Minus, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import toast from "react-hot-toast";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [qty, setQty] = useState(1);
  const [rippling, setRippling] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = () => {
    setRippling(true);
    addToCart(product, qty);
    toast.success(`${product.name} added to cart!`);
    setTimeout(() => setRippling(false), 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-3xl shadow-card overflow-hidden group relative"
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10 bg-accent text-white text-xs font-bold px-2.5 py-1 rounded-full">
          {product.badge}
        </div>
      )}

      {/* Image */}
      <Link href={`/product/${product.slug}`} id={`product-img-${product.id}`}>
        <div className="relative w-full aspect-square bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-bold text-dark text-base mb-1 hover:text-accent transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mb-2">
          <Star size={12} className="text-gold fill-gold" />
          <span className="text-xs text-gray-500 font-medium">
            {product.rating} ({product.reviewCount})
          </span>
          <span className="text-xs text-gray-300 ml-auto">{product.weight}</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="font-bold text-dark text-lg">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-400 text-sm line-through ml-1.5">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Quantity + Cart */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-amber-50 rounded-xl overflow-hidden border border-amber-100">
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              id={`qty-minus-${product.id}`}
              className="w-8 h-8 flex items-center justify-center text-accent hover:bg-amber-100 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={14} />
            </button>
            <span className="w-7 text-center text-sm font-semibold text-dark">
              {qty}
            </span>
            <button
              onClick={() => setQty(qty + 1)}
              id={`qty-plus-${product.id}`}
              className="w-8 h-8 flex items-center justify-center text-accent hover:bg-amber-100 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={14} />
            </button>
          </div>

          <button
            onClick={handleAdd}
            id={`add-to-cart-${product.id}`}
            className="relative flex-1 bg-gradient-to-r from-gold to-accent text-dark font-semibold text-sm py-2 rounded-xl flex items-center justify-center gap-1.5 overflow-hidden hover:shadow-gold transition-all active:scale-95"
          >
            {rippling && (
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-4 h-4 rounded-full bg-white/30 animate-ripple" />
              </span>
            )}
            <ShoppingCart size={14} />
            Add
          </button>
        </div>
      </div>
    </motion.div>
  );
}
