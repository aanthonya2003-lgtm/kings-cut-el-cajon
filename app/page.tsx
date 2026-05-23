import Hero from "@/components/home/Hero";
import TrustMarquee from "@/components/home/TrustMarquee";
import ServicesGrid from "@/components/home/ServicesGrid";
import Story from "@/components/home/Story";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import BarbersPreview from "@/components/home/BarbersPreview";
import BookCTA from "@/components/home/BookCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <ServicesGrid />
      <Story />
      <Stats />
      <Testimonials />
      <BarbersPreview />
      <BookCTA />
    </>
  );
}
