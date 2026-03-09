"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Shield, Leaf } from "lucide-react";

const features = [
  { icon: Zap, label: "High Protein", color: "text-amber-500 bg-amber-50" },
  { icon: Shield, label: "Gluten Free", color: "text-green-500 bg-green-50" },
  { icon: Leaf, label: "Energy Snack", color: "text-orange-500 bg-orange-50" },
];

export default function FeaturedProduct() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-amber-50 via-cream to-orange-50 rounded-4xl overflow-hidden shadow-card"
      >
        {/* Decorative blobs */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 p-8 md:p-12">
          {/* Image */}
          <motion.div
            className="w-full lg:w-80 relative"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring" }}
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 shadow-lg">
              <Image
                src="/images/rajgira-laddu.png"
                alt="Rajgira Laddu Featured"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <motion.div
              className="absolute -top-3 -right-3 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-gold"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⭐ 4.9 / 5
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              Featured Product
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">
              Rajgira Laddu
            </h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Made from roasted amaranth seeds and natural jaggery, our Rajgira
              Laddus are a powerhouse of nutrition. Handcrafted in small batches
              using age-old recipes.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.label}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold ${f.color}`}
                  >
                    <Icon size={16} />
                    {f.label}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <div>
                <span className="text-3xl font-bold text-dark">₹249</span>
                <span className="text-gray-400 line-through ml-2 text-lg">₹299</span>
              </div>
              <Link
                href="/product/rajgira-laddu"
                id="featured-explore-btn"
                className="bg-gradient-to-r from-gold to-accent text-dark font-bold px-8 py-3 rounded-2xl shadow-gold hover:shadow-card-hover hover:-translate-y-1 transition-all inline-flex items-center gap-2"
              >
                Explore
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
