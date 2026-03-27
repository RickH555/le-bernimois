import HeroSection from "@/components/home/HeroSection";
import USPSection from "@/components/home/USPSection";
import CategoryCards from "@/components/home/CategoryCards";
import MenuPreview from "@/components/home/MenuPreview";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import LocationSection from "@/components/home/LocationSection";
import CTASection from "@/components/home/CTASection";
import StickyOrderBar from "@/components/home/StickyOrderBar";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <USPSection />
      <CategoryCards />
      <MenuPreview />
      <AboutSection />
      <TestimonialsSection />
      <LocationSection />
      <CTASection />
      <StickyOrderBar />
    </>
  );
}
