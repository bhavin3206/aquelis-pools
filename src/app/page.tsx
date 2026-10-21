import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RequestQuote from "@/components/RequestQuote";
import AboutUs from "@/components/AboutUs";
import InfoStrap from "@/components/InfoStrap";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Team from "@/components/Team";
import FeaturedPools from "@/components/FeaturedPools";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3F3F5] text-[#0F1011] overflow-x-hidden">
      <Navbar />
      <Hero />
      <RequestQuote />
      <AboutUs />
      <InfoStrap />
      <Services />
      <WhyChooseUs />
      <Team />
      <FeaturedPools />
      <Testimonials />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
