"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "The Rajgira Laddu is absolutely divine! Tastes exactly like what my grandmother used to make. Ordering again for sure! 🥰",
    avatar: "PS",
  },
  {
    name: "Amit Kulkarni",
    location: "Pune",
    rating: 5,
    text: "Best Peanut Chikki I've ever tasted! The crunch is perfect and the jaggery balance is spot on. My whole family loves it.",
    avatar: "AK",
  },
  {
    name: "Sneha Pawar",
    location: "Nagpur",
    rating: 5,
    text: "The packaging is beautiful and the Til Laddus are super fresh. You can really taste the quality. Will definitely recommend!",
    avatar: "SP",
  },
  {
    name: "Rahul Desai",
    location: "Nashik",
    rating: 4,
    text: "Mukhwas Mix is my daily after-meal treat now. The variety of seeds and herbs is perfectly blended. Healthy and delicious!",
    avatar: "RD",
  },
  {
    name: "Kavita Joshi",
    location: "Aurangabad",
    rating: 5,
    text: "Dry Fruit Laddu is truly premium! No sugar added and still so sweet naturally. My kids love them as a snack.",
    avatar: "KJ",
  },
];

export default function ReviewsSlider() {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50/50 to-cream">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={18} className="text-gold fill-gold" />
            ))}
            <span className="text-sm text-gray-500 font-medium ml-1">
              4.9 / 5 from 1200+ reviews
            </span>
          </div>
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-card h-full relative"
              >
                <Quote
                  size={28}
                  className="text-gold/30 absolute top-4 right-4"
                  fill="currentColor"
                />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-accent flex items-center justify-center text-dark font-bold text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-dark text-sm">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.location}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={13} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
