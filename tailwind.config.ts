import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#F6C453",
        cream: "#FFF7EF",
        dark: "#2B2B2B",
        accent: "#E89C2C",
        "accent-light": "#FDE8C0",
        "gold-dark": "#D4A017",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "float-fast": "float 3s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        ripple: "ripple 0.6s linear",
        shimmer: "shimmer 2s infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.08)",
        card: "0 8px 32px rgba(0,0,0,0.10)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.15)",
        gold: "0 4px 20px rgba(246, 196, 83, 0.4)",
      },
      borderRadius: {
        "2.5xl": "20px",
        "3xl": "24px",
        "4xl": "32px",
      },
      backgroundImage: {
        "cream-gradient":
          "linear-gradient(135deg, #FFF7EF 0%, #FDE8C0 50%, #FFF7EF 100%)",
        "gold-gradient": "linear-gradient(135deg, #F6C453 0%, #E89C2C 100%)",
        "hero-gradient":
          "linear-gradient(135deg, #FFF7EF 0%, #FDE8C0 40%, #F6C453 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
