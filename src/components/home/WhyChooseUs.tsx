"use client";

import { motion } from "framer-motion";

const features = [
  {
    emoji: "🌿",
    title: "Natural Ingredients",
    description:
      "We source only the finest natural ingredients — no artificial colors, flavors, or preservatives. Just pure, wholesome goodness.",
    gradient: "from-green-50 to-emerald-50",
    border: "border-green-100",
    iconBg: "bg-green-100",
  },
  {
    emoji: "🫙",
    title: "Traditional Recipes",
    description:
      "Our recipes have been passed down through generations, preserving the authentic taste and nutritional philosophy of Indian heritage.",
    gradient: "from-amber-50 to-yellow-50",
    border: "border-amber-100",
    iconBg: "bg-amber-100",
  },
  {
    emoji: "✋",
    title: "Freshly Made",
    description:
      "Every batch is freshly prepared in small quantities to ensure maximum freshness, taste, and quality with every order.",
    gradient: "from-orange-50 to-red-50",
    border: "border-orange-100",
    iconBg: "bg-orange-100",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-16 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <span className="text-accent text-sm font-semibold uppercase tracking-widest">
          Why Us
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2">
          Why Choose Nandai Foods?
        </h2>
        <p className="text-gray-500 mt-2 max-w-md mx-auto text-sm">
          We believe good food begins with honest ingredients and heartfelt craft
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className={`bg-gradient-to-br ${f.gradient} border ${f.border} rounded-3xl p-6 shadow-soft hover:shadow-card transition-all`}
          >
            <div
              className={`w-14 h-14 ${f.iconBg} rounded-2xl flex items-center justify-center text-3xl mb-4`}
            >
              {f.emoji}
            </div>
            <h3 className="font-bold text-dark text-lg mb-2">{f.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
