import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import About from "@/components/sections/About";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyUs from "@/components/sections/WhyUs";
import Doctors from "@/components/sections/Doctors";
import Results from "@/components/sections/Results";
import VideoTestimonials from "@/components/sections/VideoTestimonials";
import Reviews from "@/components/sections/Reviews";
import Gallery from "@/components/sections/Gallery";
import Faq from "@/components/sections/Faq";
import Appointment from "@/components/sections/Appointment";
import Blog from "@/components/sections/Blog";
import MapSection from "@/components/sections/MapSection";
import Footer from "@/components/sections/Footer";
import BackToTop from "@/components/BackToTop";
import CardRevealWrapper from "@/components/CardRevealWrapper";

const Index = () => {
  return (
    <main className="bg-ivory min-h-screen">
      <Navbar />
      <Hero />
      <CardRevealWrapper>
        <ServicesPreview />
        <About />
        <ServicesGrid />
        <WhyUs />
        <Doctors />
        <Results />
        <VideoTestimonials />
        <Reviews />
        <Gallery />
        <Faq />
        <Appointment />
        <Blog />
        <MapSection />
        <Footer />
      </CardRevealWrapper>
      <BackToTop />
    </main>
  );
};

export default Index;
