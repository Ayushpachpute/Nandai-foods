"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEmail("");
      toast.success("🎉 You're subscribed! Welcome to the Nandai family!");
    }, 1000);
  };

  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-gradient-to-br from-gold via-accent to-orange-400 rounded-4xl p-10 text-center shadow-gold relative overflow-hidden"
      >
        {/* Decorative circles */}
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />

        <div className="relative z-10">
          <p className="text-4xl mb-4">📬</p>
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-2">
            Get Updates & Offers
          </h2>
          <p className="text-dark/70 mb-8 text-sm">
            Subscribe to get exclusive deals, new product launches, and
            traditional recipes delivered to your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              id="newsletter-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 bg-white/90 backdrop-blur-sm text-dark placeholder-gray-400 px-5 py-3.5 rounded-2xl outline-none border-2 border-transparent focus:border-white focus:bg-white text-sm transition-all font-medium"
            />
            <button
              type="submit"
              id="newsletter-subscribe"
              disabled={loading}
              className="bg-dark text-white font-semibold px-6 py-3.5 rounded-2xl hover:bg-dark/80 transition-all flex items-center justify-center gap-2 min-w-[120px] active:scale-95"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={15} />
                  Subscribe
                </>
              )}
            </button>
          </form>

          <p className="text-dark/50 text-xs mt-4">
            No spam, unsubscribe anytime. Join 5,000+ snack lovers.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
