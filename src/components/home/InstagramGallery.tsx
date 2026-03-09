"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const galleryImages = [
  { src: "/images/rajgira-laddu.png", alt: "Rajgira Laddu" },
  { src: "/images/peanut-chikki.png", alt: "Peanut Chikki" },
  { src: "/images/mukhwas-mix.png", alt: "Mukhwas Mix" },
  { src: "/images/til-laddu.png", alt: "Til Laddu" },
  { src: "/images/dryfruit-laddu.png", alt: "Dry Fruit Laddu" },
  { src: "/images/rajgira-laddu.png", alt: "Rajgira Laddu 2" },
];

export default function InstagramGallery() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <span className="text-accent text-sm font-semibold uppercase tracking-widest">
          Instagram
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2">
          Follow Our Feed
        </h2>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent text-sm font-medium mt-2 hover:underline"
        >
          <Instagram size={16} /> @nandaifoods
        </a>
      </motion.div>

      <div className="grid grid-cols-3 gap-2 md:gap-3">
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all flex items-center justify-center">
              <Instagram
                size={28}
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity scale-50 group-hover:scale-100 transform duration-300"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
