"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Plus, Minus, ShoppingCart, Zap, Shield, Leaf, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import toast from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";

const featureIcons: Record<string, React.ReactNode> = {
  "High Protein": <Zap size={14} />,
  "Gluten Free": <Shield size={14} />,
  "Energy Snack": <Zap size={14} />,
  "No Preservatives": <Leaf size={14} />,
  "Natural Jaggery": <Leaf size={14} />,
  "No Added Sugar": <Shield size={14} />,
  "Rich in Protein": <Zap size={14} />,
  "Crispy Texture": <Zap size={14} />,
  "Digestive Aid": <Shield size={14} />,
  "Natural Herbs": <Leaf size={14} />,
  "No Artificial Colors": <Shield size={14} />,
  Refreshing: <Leaf size={14} />,
  "Rich in Calcium": <Shield size={14} />,
  Handmade: <Leaf size={14} />,
  Vegan: <Leaf size={14} />,
  "Premium Dry Fruits": <Zap size={14} />,
  "High Nutrition": <Zap size={14} />,
  "Diabetic Friendly": <Shield size={14} />,
  "Low Calorie": <Shield size={14} />,
  Roasted: <Zap size={14} />,
  Seasoned: <Leaf size={14} />,
};

interface Props {
  product: Product;
}

export default function ProductPageClient({ product }: Props) {
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, qty);
    toast.success(`${product.name} added to cart!`);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <>
      <Navbar />
      <main className="pb-24 md:pb-8 pt-20 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-accent transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-square bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl overflow-hidden shadow-card mb-4">
                <Image
                  src={product.images[activeImg]}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {product.badge}
                  </div>
                )}
                {discount && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {discount}% OFF
                  </div>
                )}
              </div>

              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all ${
                        activeImg === i ? "border-accent shadow-gold" : "border-transparent"
                      }`}
                    >
                      <Image src={img} alt={`${product.name} ${i + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">
                {product.category.replace("-", " ")}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-dark mb-3">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className={
                        j < Math.round(product.rating)
                          ? "text-gold fill-gold"
                          : "text-gray-200 fill-gray-200"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 font-medium">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <div className="flex items-center gap-3 mb-5">
                <span className="text-4xl font-bold text-dark">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
                {discount && (
                  <span className="bg-green-100 text-green-600 text-sm font-bold px-2.5 py-1 rounded-full">
                    Save {discount}%
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-400 font-medium mb-5">
                Net Weight: <span className="text-dark font-semibold">{product.weight}</span>
              </p>

              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {product.features.map((f) => (
                  <span
                    key={f}
                    className="flex items-center gap-1.5 bg-amber-50 text-accent border border-amber-100 text-xs font-semibold px-3 py-1.5 rounded-full"
                  >
                    {featureIcons[f] || <Leaf size={12} />}
                    {f}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-semibold text-dark">Quantity:</span>
                <div className="flex items-center bg-amber-50 rounded-xl border border-amber-100 overflow-hidden">
                  <button
                    id="product-qty-minus"
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-10 h-10 flex items-center justify-center text-accent hover:bg-amber-100 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-10 text-center font-bold text-dark">{qty}</span>
                  <button
                    id="product-qty-plus"
                    onClick={() => setQty(qty + 1)}
                    className="w-10 h-10 flex items-center justify-center text-accent hover:bg-amber-100 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <span className="text-sm text-gray-400">
                  Total: <strong className="text-dark">₹{product.price * qty}</strong>
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  id="product-add-to-cart"
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-accent text-dark font-bold py-4 rounded-2xl shadow-gold hover:shadow-card-hover hover:-translate-y-0.5 transition-all active:scale-95"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
                <Link
                  href="/cart"
                  id="product-buy-now"
                  onClick={() => addToCart(product, qty)}
                  className="flex-1 flex items-center justify-center gap-2 bg-dark text-white font-bold py-4 rounded-2xl hover:bg-dark/80 transition-all active:scale-95"
                >
                  Buy Now
                </Link>
              </div>

              <div className="flex items-center gap-6 mt-6 pt-6 border-t border-amber-100">
                {["🚚 Free above ₹500", "✅ 100% Natural", "↩️ Easy Returns"].map((badge) => (
                  <p key={badge} className="text-xs text-gray-500 font-medium">
                    {badge}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <BottomNav />
    </>
  );
}
