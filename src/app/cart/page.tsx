"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Tag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";

const DELIVERY_CHARGE = 40;
const FREE_DELIVERY_THRESHOLD = 500;

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, subtotal } = useCart();

  const delivery = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_CHARGE;
  const total = subtotal + delivery;
  const savings = items.reduce((sum, item) => {
    const orig = item.product.originalPrice || item.product.price;
    return sum + (orig - item.product.price) * item.quantity;
  }, 0);



  return (
    <>
      <Navbar />
      <main className="pb-24 md:pb-8 pt-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-accent transition-colors text-sm font-medium"
            >
              <ArrowLeft size={16} /> Continue Shopping
            </Link>
            <h1 className="text-2xl font-bold text-dark">
              My Cart{" "}
              <span className="text-accent">({items.length})</span>
            </h1>
          </div>

          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-24"
            >
              <p className="text-8xl mb-6">🛒</p>
              <h2 className="text-2xl font-bold text-dark mb-2">Your cart is empty</h2>
              <p className="text-gray-400 mb-8">
                Add some delicious traditional snacks to get started!
              </p>
              <Link
                href="/#products"
                id="cart-shop-now"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-accent text-dark font-bold px-8 py-4 rounded-2xl shadow-gold hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
              >
                <ShoppingBag size={18} />
                Shop Now
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Cart items */}
              <div className="lg:col-span-2 space-y-4">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-3xl shadow-soft p-4 flex gap-4"
                    >
                      {/* Image */}
                      <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-amber-50 flex-shrink-0">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-bold text-dark text-sm leading-tight">
                              {item.product.name}
                            </h3>
                            <p className="text-xs text-gray-400 mt-0.5">
                              {item.product.weight}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            id={`remove-cart-${item.product.id}`}
                            className="p-1.5 hover:bg-red-50 hover:text-red-400 text-gray-300 rounded-lg transition-colors flex-shrink-0"
                            aria-label="Remove item"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center bg-amber-50 rounded-xl border border-amber-100 overflow-hidden">
                            <button
                              id={`cart-qty-minus-${item.product.id}`}
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity - 1)
                              }
                              className="w-8 h-8 flex items-center justify-center text-accent hover:bg-amber-100 transition-colors"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-8 text-center text-sm font-bold text-dark">
                              {item.quantity}
                            </span>
                            <button
                              id={`cart-qty-plus-${item.product.id}`}
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity + 1)
                              }
                              className="w-8 h-8 flex items-center justify-center text-accent hover:bg-amber-100 transition-colors"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <span className="font-bold text-dark">
                            ₹{item.product.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Order Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl shadow-card p-6 h-fit lg:sticky top-24"
              >
                <h2 className="font-bold text-dark text-lg mb-5">Order Summary</h2>

                <div className="space-y-3 mb-5">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)
                    </span>
                    <span className="font-semibold text-dark">₹{subtotal}</span>
                  </div>
                  {savings > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-green-500">You Save</span>
                      <span className="font-semibold text-green-500">-₹{savings}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Delivery</span>
                    <span className="font-semibold text-dark">
                      {delivery === 0 ? (
                        <span className="text-green-500">FREE</span>
                      ) : (
                        `₹${delivery}`
                      )}
                    </span>
                  </div>
                  {delivery > 0 && (
                    <div className="bg-amber-50 rounded-xl px-3 py-2 flex items-center gap-2 text-xs text-accent font-medium">
                      <Tag size={12} />
                      Add ₹{FREE_DELIVERY_THRESHOLD - subtotal} more for free delivery
                    </div>
                  )}
                </div>

                <div className="border-t border-amber-100 pt-4 mb-5">
                  <div className="flex justify-between">
                    <span className="font-bold text-dark text-lg">Total</span>
                    <span className="font-bold text-dark text-xl">₹{total}</span>
                  </div>
                </div>

                <Link
                  id="checkout-btn"
                  href="/checkout"
                  className="w-full bg-gradient-to-r from-gold to-accent text-dark font-bold py-4 rounded-2xl shadow-gold hover:shadow-card-hover hover:-translate-y-0.5 transition-all active:scale-95 mb-3 block text-center"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  href="/#products"
                  className="w-full border border-amber-200 text-dark font-semibold py-3.5 rounded-2xl hover:bg-amber-50 transition-all text-center text-sm block"
                >
                  Continue Shopping
                </Link>

                <div className="flex items-center justify-center gap-4 mt-5 pt-4 border-t border-amber-100">
                  {["🔒 Secure", "🚚 Fast Delivery", "✅ Genuine"].map((b) => (
                    <p key={b} className="text-xs text-gray-400 font-medium text-center">
                      {b}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </main>
      <BottomNav />
    </>
  );
}
