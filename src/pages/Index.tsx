
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonial from "@/components/Testimonial";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect, useState } from "react";
import AOS from "aos";

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  
  useEffect(() => {
    AOS.refresh();
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const section = Math.floor(scrollY / windowHeight);
      setCurrentSection(Math.min(section, 6)); // 7 sections total (0-6)
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'hero', component: <Hero /> },
    { id: 'about', component: <About /> },
    { id: 'services', component: <Services /> },
    { id: 'portfolio', component: <Portfolio /> },
    { id: 'testimonials', component: <Testimonial /> },
    { id: 'blog', component: <Blog /> },
    { id: 'footer', component: <Footer /> }
  ];

  return (
    <div className="relative">
      <Navbar />
      
      {/* Scrollable content that creates the scroll height */}
      <div style={{ height: `${sections.length * 100}vh` }} className="relative">
        
        {/* Fixed viewport that shows current section */}
        <div className="fixed inset-0 overflow-hidden">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                currentSection === index 
                  ? 'opacity-100 transform translate-y-0' 
                  : currentSection > index 
                    ? 'opacity-0 transform -translate-y-full'
                    : 'opacity-0 transform translate-y-full'
              }`}
              style={{ zIndex: currentSection === index ? 10 : 1 }}
            >
              {section.component}
            </div>
          ))}
        </div>
      </div>
      
      <WhatsAppButton />
    </div>
  );
};

export default Index;
