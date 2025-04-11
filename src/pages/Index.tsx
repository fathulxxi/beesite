
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect } from "react";
import AOS from "aos";

const Index = () => {
  // Refresh AOS when component mounts to ensure animations work correctly
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
