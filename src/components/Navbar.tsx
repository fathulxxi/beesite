
import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { ArrowLeft, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { t, i18n } = useTranslation();

  // Language toggle handler
  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'id' ? 'en' : 'id';
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // If we're already on the home page, scroll to the section
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're not on the home page, navigate to home and then scroll
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            {!isHomePage && (
              <button 
                onClick={handleGoBack}
                className={`mr-4 p-2 rounded-full ${
                  isScrolled || isMenuOpen
                    ? "text-secondary hover:bg-gray-100" 
                    : "text-white/90 hover:bg-white/10"
                }`}
                aria-label="Go back"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            <Link to="/" className="flex items-center">
              <span className={`font-display font-bold text-xl ${isScrolled || isMenuOpen ? 'text-primary' : 'text-white'}`}>
                Beesite
              </span>
              <span className={`ml-2 text-xs px-2 py-1 ${isScrolled || isMenuOpen ? 'bg-primary/10 text-primary' : 'bg-white/10 text-white'} rounded-full`}>
                ID
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { key: "about", label: t('navbar.about') },
              { key: "services", label: t('navbar.services') },
              { key: "portfolio", label: t('navbar.portfolio') },
              { key: "contact", label: t('navbar.contact') }
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className={`font-medium text-sm transition-colors ${
                  isScrolled
                    ? "text-secondary hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Language toggle button */}
            <button
              onClick={toggleLanguage}
              className={`font-medium text-sm transition-colors px-3 py-2 rounded-xl ${
                isScrolled
                  ? "bg-primary/10 text-primary hover:bg-primary/20"
                  : "bg-white/10 text-white/90 hover:bg-white/20"
              }`}
            >
              {i18n.language === 'id' ? 'EN' : 'ID'}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full ${
                isScrolled || isMenuOpen
                  ? "text-secondary hover:bg-gray-100" 
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-2xl animate-fade-in">
            <div className="px-4 pt-2 pb-6 space-y-4">
              {[
                { key: "about", label: t('navbar.about') },
                { key: "services", label: t('navbar.services') },
                { key: "portfolio", label: t('navbar.portfolio') },
                { key: "contact", label: t('navbar.contact') }
              ].map((item) => (
                <button
                  key={item.key}
                  className="block w-full text-left py-3 text-secondary hover:text-primary font-medium"
                  onClick={() => scrollToSection(item.key)}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Language toggle in mobile menu */}
              <div className="pt-2 border-t border-gray-100">
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left py-3 text-secondary hover:text-primary font-medium"
                >
                  {i18n.language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
