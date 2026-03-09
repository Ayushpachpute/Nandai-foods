import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nandai Foods — Authentic Traditional Indian Snacks",
  description:
    "Discover handcrafted, premium traditional Indian snacks. Healthy, natural, and made with love. Shop Rajgira Laddu, Peanut Chikki, Mukhwas Mix and more.",
  keywords:
    "Indian snacks, traditional snacks, rajgira laddu, peanut chikki, mukhwas, healthy snacks, handmade",
  openGraph: {
    title: "Nandai Foods — Authentic Traditional Indian Snacks",
    description: "Handcrafted premium Indian snacks, delivered fresh.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins bg-cream text-dark antialiased">
        <CartProvider>
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                fontFamily: "var(--font-poppins)",
                borderRadius: "12px",
                background: "#2B2B2B",
                color: "#fff",
              },
              success: {
                iconTheme: { primary: "#F6C453", secondary: "#2B2B2B" },
              },
            }}
          />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
