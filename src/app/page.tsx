import { HeroBanner } from "../components/home/HeroBanner";
import { LookbookCarousel } from "../components/home/LookbookCarousel";
import { CategoryGrid } from "../components/home/CategoryGrid";
import { ProductShowcase } from "../components/home/ProductShowcase";
import { EditorialSection } from "../components/home/EditorialSection";
import { CustomerReviews } from "../components/home/CustomerReviews";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Slideshow & Mobile Video Banner */}
      <HeroBanner />

      {/* SHARED BACKGROUND SECTION */}
      <div 
        className="relative w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bacground_section/section_1.png')" }}
      >
        {/* 2. Bespoke Sartorial Lookbook Carousel (Section 2 matching Monogram Mate design) */}
        <LookbookCarousel />

        {/* 3. Visual Category Collections Grid */}
        <CategoryGrid />
      </div>

      {/* 4. Best Seller & Featured Products Showcase (Using Section 3 background) */}
      <ProductShowcase />

      {/* 5. Craftsmanship & Editorial Lookbook Section */}
      <EditorialSection />

      {/* 6. Customer Testimonials & Verified Reviews */}
      <CustomerReviews />
    </div>
  );
}
