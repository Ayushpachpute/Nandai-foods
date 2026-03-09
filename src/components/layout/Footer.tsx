"use client";

import Link from "next/link";
import {
  Instagram,
  Twitter,
  Facebook,
  Leaf,
  PhoneCall,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center">
                <Leaf size={16} className="text-white" fill="white" />
              </div>
              <span className="text-xl font-bold">
                Nandai <span className="text-gold">Foods</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Authentic traditional Indian snacks, crafted with love and the
              finest natural ingredients. Bringing the taste of tradition to
              your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "All Products", href: "/#products" },
                { label: "About Us", href: "/#about" },
                { label: "Blog", href: "/" },
                { label: "FAQs", href: "/" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Our Products</h4>
            <ul className="space-y-2">
              {[
                "Rajgira Laddu",
                "Peanut Chikki",
                "Mukhwas Mix",
                "Til Laddu",
                "Dry Fruit Laddu",
              ].map((p) => (
                <li key={p}>
                  <span className="text-gray-400 text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={15} className="text-gold mt-0.5 shrink-0" />
                <span>Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <PhoneCall size={15} className="text-gold shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={15} className="text-gold shrink-0" />
                <span>hello@nandaifoods.com</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-dark flex items-center justify-center transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Nandai Foods. All rights reserved.</p>
          <p>
            Made with <span className="text-gold">♥</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
