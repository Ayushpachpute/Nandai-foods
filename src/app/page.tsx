import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProductGrid from "@/components/home/ProductGrid";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ReviewsSlider from "@/components/home/ReviewsSlider";
import InstagramGallery from "@/components/home/InstagramGallery";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">
        <HeroSection />
        <ProductGrid />
        <FeaturedProduct />
        <WhyChooseUs />
        <ReviewsSlider />
        <InstagramGallery />
        <Newsletter />
        <Footer />
      </main>
      <BottomNav />
    </>
  );
}
