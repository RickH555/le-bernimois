import HeroSection from "@/components/home/HeroSection";
import MenuPreview from "@/components/home/MenuPreview";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MenuPreview />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
