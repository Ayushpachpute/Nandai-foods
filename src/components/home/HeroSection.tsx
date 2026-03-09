"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const particles = [
  { size: 60, top: "10%", left: "5%", delay: 0, color: "#F6C453" },
  { size: 40, top: "20%", left: "80%", delay: 1, color: "#E89C2C" },
  { size: 80, top: "60%", left: "90%", delay: 0.5, color: "#F6C453" },
  { size: 30, top: "70%", left: "3%", delay: 1.5, color: "#FDE8C0" },
  { size: 50, top: "40%", left: "92%", delay: 2, color: "#E89C2C" },
  { size: 25, top: "80%", left: "40%", delay: 0.8, color: "#F6C453" },
  { size: 45, top: "15%", left: "55%", delay: 1.2, color: "#FDE8C0" },
  { size: 35, top: "50%", left: "10%", delay: 1.8, color: "#E89C2C" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Floating Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-30 pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            background: p.color,
            filter: "blur(1px)",
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-5, 5, -5],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5 + i * 0.5,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Small sparkle dots */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 rounded-full bg-accent/60 pointer-events-none"
          style={{
            top: `${15 + i * 7}%`,
            left: `${10 + (i * 8) % 80}%`,
          }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
          transition={{
            duration: 2 + (i % 3),
            delay: i * 0.3,
            repeat: Infinity,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20 pb-32 md:pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-amber-200 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-6"
            >
              🌿 Healthy • Handmade • Premium Quality
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-dark leading-tight mb-4"
            >
              Authentic
              <br />
              <span className="text-accent">Traditional</span>
              <br />
              Snacks
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-500 text-lg mb-8 max-w-md mx-auto lg:mx-0"
            >
              Handcrafted with love using age-old recipes and the finest natural
              ingredients. Taste the tradition.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/#products"
                id="hero-shop-now"
                className="relative overflow-hidden bg-gradient-to-r from-gold to-accent text-dark font-bold px-8 py-4 rounded-2xl shadow-gold hover:shadow-card-hover transition-all hover:-translate-y-1 inline-flex items-center justify-center gap-2 group"
              >
                <span>Shop Now</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/#about"
                className="bg-white/60 backdrop-blur-sm text-dark font-semibold px-8 py-4 rounded-2xl hover:bg-white transition-all inline-flex items-center justify-center gap-2 border border-amber-200"
              >
                Our Story
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-8 mt-10 justify-center lg:justify-start"
            >
              {[
                { value: "10K+", label: "Happy Customers" },
                { value: "25+", label: "Products" },
                { value: "4.9★", label: "Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-bold text-xl text-dark">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
          >
            <div className="relative">
              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-0 rounded-4xl bg-gradient-to-br from-gold/40 to-accent/20 blur-3xl scale-110"
                animate={{ scale: [1.1, 1.2, 1.1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Card */}
              <motion.div
                className="relative bg-white/70 backdrop-blur-xl rounded-4xl p-6 shadow-card w-72 md:w-80"
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-4 bg-gradient-to-br from-amber-50 to-orange-100">
                  <Image
                    src="/Nandai-foods/images/rajgira-laddu.png"
                    alt="Rajgira Laddu"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-dark text-lg">Rajgira Laddu</p>
                    <p className="text-accent font-bold text-xl">₹249</p>
                  </div>
                  <Link
                    href="/product/rajgira-laddu"
                    id="hero-explore-btn"
                    className="bg-gradient-to-r from-gold to-accent text-dark font-semibold text-sm px-4 py-2 rounded-xl shadow-gold hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
                  >
                    Explore
                  </Link>
                </div>

                {/* Badges */}
                <div className="flex gap-2 mt-3 flex-wrap">
                  {["High Protein", "Gluten Free", "Handmade"].map((badge) => (
                    <span
                      key={badge}
                      className="text-xs bg-amber-50 text-accent border border-amber-100 px-2 py-0.5 rounded-full font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Floating mini badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-2xl px-3 py-2 shadow-card text-sm font-semibold text-dark"
                animate={{ rotate: [5, -5, 5], y: [-3, 3, -3] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ⭐ 4.9 Rating
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-gold to-accent rounded-2xl px-3 py-2 shadow-gold text-sm font-bold text-dark"
                animate={{ rotate: [-5, 5, -5], y: [3, -3, 3] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🔥 Best Seller
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 25C672 30 768 30 864 25C960 20 1056 10 1152 12.5C1248 15 1344 30 1392 37.5L1440 45V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z"
            fill="#FFF7EF"
          />
        </svg>
      </div>
    </section>
  );
}
