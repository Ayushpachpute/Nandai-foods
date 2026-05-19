"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  Minus, 
  Plus, 
  ShieldCheck, 
  Leaf, 
  PackageCheck, 
  Heart,
  Info
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";

const DELIVERY_CHARGE = 40;
const FREE_DELIVERY_THRESHOLD = 500;

export default function CheckoutPage() {
  const router = useRouter();
  const { items, updateQuantity, subtotal } = useCart();
  
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    notes: ""
  });
  
  // Redirect to cart if empty
  useEffect(() => {
    if (items.length === 0) {
      router.push("/cart");
    }
  }, [items, router]);

  if (items.length === 0) {
    return null; // Don't render checkout if empty, router will redirect
  }

  const delivery = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_CHARGE;
  const total = subtotal + delivery;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    let whatsappMessage = `*New Order from Website!* 🛍️\n\n`;
    
    whatsappMessage += `*Customer Details:*\n`;
    whatsappMessage += `Name: ${formData.name}\n`;
    whatsappMessage += `Phone: ${formData.mobile}\n`;
    if (formData.email) whatsappMessage += `Email: ${formData.email}\n`;
    whatsappMessage += `\n`;
    
    whatsappMessage += `*Delivery Address:*\n`;
    whatsappMessage += `${formData.address}\n`;
    whatsappMessage += `${formData.city}, ${formData.state} - ${formData.pincode}\n\n`;
    
    whatsappMessage += `*Order Details:*\n`;
    items.forEach((item) => {
      whatsappMessage += `${item.quantity}x ${item.product.name} (₹${item.product.price * item.quantity})\n`;
    });
    whatsappMessage += `\n`;
    
    whatsappMessage += `Subtotal: ₹${subtotal}\n`;
    whatsappMessage += `Delivery: ₹${delivery}\n`;
    whatsappMessage += `*Total: ₹${total}*\n`;
    
    if (formData.notes) {
      whatsappMessage += `\n*Notes:* ${formData.notes}\n`;
    }
    
    const whatsappUrl = `https://wa.me/918446590836?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const inputClasses = "w-full bg-white border border-amber-200 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all";
  const labelClasses = "block text-sm font-semibold text-dark mb-1.5 ml-1";

  return (
    <>
      <Navbar />
      <main className="pb-24 md:pb-12 pt-20 min-h-screen bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <Link
                href="/cart"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-accent transition-colors text-sm font-medium mb-2"
              >
                <ArrowLeft size={16} /> Back to Cart
              </Link>
              <h1 className="text-3xl font-bold text-dark">
                Complete Your Order
              </h1>
              <p className="text-gray-500 mt-1">Please enter your delivery details to continue</p>
            </div>
            
            <div className="flex items-center gap-2 bg-amber-50 text-accent px-4 py-2 rounded-full text-sm font-medium border border-amber-100">
              <ShieldCheck size={16} /> Secure Checkout
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-7 xl:col-span-8">
              <form id="checkout-form" onSubmit={handleCheckout} className="bg-white rounded-3xl shadow-soft p-6 md:p-8 border border-amber-50">
                
                <h2 className="text-xl font-bold text-dark mb-6 border-b border-amber-100 pb-4">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                  <div>
                    <label className={labelClasses}>Full Name *</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" className={inputClasses} />
                  </div>
                  <div>
                    <label className={labelClasses}>Mobile Number *</label>
                    <input required type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="10-digit mobile number" pattern="[0-9]{10}" className={inputClasses} />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClasses}>Email Address <span className="text-gray-400 font-normal">(Optional)</span></label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" className={inputClasses} />
                  </div>
                </div>

                <h2 className="text-xl font-bold text-dark mb-6 border-b border-amber-100 pb-4">Delivery Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                  <div className="md:col-span-2">
                    <label className={labelClasses}>Full Delivery Address *</label>
                    <textarea required name="address" value={formData.address} onChange={handleInputChange} rows={3} placeholder="House/Flat No., Building Name, Street, Area" className={`${inputClasses} resize-none`}></textarea>
                  </div>
                  <div>
                    <label className={labelClasses}>City *</label>
                    <input required type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="Mumbai" className={inputClasses} />
                  </div>
                  <div>
                    <label className={labelClasses}>State *</label>
                    <input required type="text" name="state" value={formData.state} onChange={handleInputChange} placeholder="Maharashtra" className={inputClasses} />
                  </div>
                  <div>
                    <label className={labelClasses}>Pincode *</label>
                    <input required type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} placeholder="400001" pattern="[0-9]{6}" className={inputClasses} />
                  </div>
                </div>

                <h2 className="text-xl font-bold text-dark mb-6 border-b border-amber-100 pb-4">Additional Info</h2>
                <div className="mb-8">
                  <label className={labelClasses}>Order Notes <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <textarea name="notes" value={formData.notes} onChange={handleInputChange} rows={2} placeholder="Any special instructions for delivery?" className={`${inputClasses} resize-none`}></textarea>
                </div>

                {/* Mobile submit button (hidden on desktop to prioritize order summary flow) */}
                <div className="block lg:hidden mt-8">
                   <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold to-accent text-dark font-bold py-4 rounded-2xl shadow-gold hover:shadow-card-hover hover:-translate-y-0.5 transition-all active:scale-95 text-lg"
                  >
                    Proceed to WhatsApp Order
                  </button>
                  <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
                    <Info size={14} className="text-accent" />
                    <span>COD not available. Payment via UPI/Bank transfer.</span>
                  </div>
                </div>
              </form>
            </div>

            {/* Order Summary Section */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="bg-white rounded-3xl shadow-card p-6 border border-amber-100 lg:sticky lg:top-24">
                <h2 className="font-bold text-dark text-xl mb-5 flex items-center gap-2">
                   Order Summary
                </h2>
                
                <div className="max-h-[300px] overflow-y-auto pr-2 mb-4 space-y-4" style={{ scrollbarWidth: 'thin', scrollbarColor: '#fcd34d #fdfbf7' }}>
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-amber-50 flex-shrink-0 border border-amber-100">
                        <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                           <h3 className="font-bold text-dark text-sm truncate">{item.product.name}</h3>
                           <p className="text-xs text-gray-400">{item.product.weight}</p>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-semibold text-accent text-sm">₹{item.product.price}</span>
                          <div className="flex items-center bg-gray-50 rounded-lg border border-gray-100 overflow-hidden scale-90 origin-right">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                              className="w-6 h-6 flex items-center justify-center text-gray-500 hover:bg-amber-100 hover:text-accent transition-colors"
                            >
                              <Minus size={10} />
                            </button>
                            <span className="w-6 text-center text-xs font-bold text-dark">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-6 h-6 flex items-center justify-center text-gray-500 hover:bg-amber-100 hover:text-accent transition-colors"
                            >
                              <Plus size={10} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50/50 rounded-2xl p-4 mb-5 border border-amber-100">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold text-dark">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-gray-600">Delivery</span>
                    <span className="font-semibold text-dark">
                      {delivery === 0 ? <span className="text-green-500">FREE</span> : `₹${delivery}`}
                    </span>
                  </div>
                  <div className="border-t border-amber-200/50 pt-3 flex justify-between items-center">
                    <span className="font-bold text-dark text-base">Total</span>
                    <span className="font-bold text-accent text-xl">₹{total}</span>
                  </div>
                </div>

                {/* Desktop Submit Button */}
                <button
                  type="button"
                  onClick={() => {
                    const form = document.getElementById('checkout-form') as HTMLFormElement;
                    if (form && form.reportValidity()) {
                      form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                    }
                  }}
                  className="hidden lg:block w-full bg-gradient-to-r from-gold to-accent text-dark font-bold py-4 rounded-2xl shadow-gold hover:shadow-card-hover hover:-translate-y-0.5 transition-all active:scale-95 text-base mb-4"
                >
                  Proceed to WhatsApp Order
                </button>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 justify-center text-xs text-red-500 font-medium bg-red-50 py-2 rounded-xl border border-red-100">
                    <Info size={14} /> COD not available
                  </div>
                  
                  <div className="flex items-center gap-2 justify-center text-xs text-accent font-medium bg-amber-50 py-2 rounded-xl border border-amber-100">
                    <Heart size={14} className="fill-accent text-accent" /> Freshly made with love
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="flex flex-col items-center text-center gap-1">
                      <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                        <Leaf size={14} />
                      </div>
                      <span className="text-[10px] font-medium text-gray-500">Natural Ingredients</span>
                    </div>
                    <div className="flex flex-col items-center text-center gap-1">
                      <div className="w-8 h-8 rounded-full bg-amber-50 text-accent flex items-center justify-center">
                        <PackageCheck size={14} />
                      </div>
                      <span className="text-[10px] font-medium text-gray-500">Freshly Packed</span>
                    </div>
                    <div className="flex flex-col items-center text-center gap-1">
                      <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                        <ShieldCheck size={14} />
                      </div>
                      <span className="text-[10px] font-medium text-gray-500">No Preservatives</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </>
  );
}
