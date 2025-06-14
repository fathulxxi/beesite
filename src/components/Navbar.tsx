
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
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            {!isHomePage && (
              <button 
                onClick={handleGoBack}
                className={`mr-4 p-2 rounded-xl transition-all ${
                  isScrolled || isMenuOpen
                    ? "text-gray-700 hover:bg-gray-100" 
                    : "text-gray-700 hover:bg-white/10"
                }`}
                aria-label="Go back"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            <Link to="/" className="flex items-center">
              <span className={`font-display font-bold text-2xl ${isScrolled || isMenuOpen ? 'text-secondary' : 'text-secondary'}`}>
                Beesite
              </span>
              <span className={`ml-2 text-xs px-3 py-1 rounded-full font-medium ${isScrolled || isMenuOpen ? 'bg-secondary/10 text-secondary' : 'bg-secondary/10 text-secondary'}`}>
                Digital
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { key: "about", label: t('navbar.about') },
              { key: "services", label: t('navbar.services') },
              { key: "portfolio", label: t('navbar.portfolio') },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className={`font-medium text-sm transition-colors relative group ${
                  isScrolled
                    ? "text-gray-700 hover:text-secondary"
                    : "text-gray-700 hover:text-secondary"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
              </button>
            ))}
            
            {/* Language toggle button */}
            <button
              onClick={toggleLanguage}
              className={`font-medium text-sm transition-all px-4 py-2 rounded-xl ${
                isScrolled
                  ? "bg-secondary/10 text-secondary hover:bg-secondary/20"
                  : "bg-secondary/10 text-secondary hover:bg-secondary/20"
              }`}
            >
              {i18n.language === 'id' ? 'EN' : 'ID'}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-xl transition-all ${
                isScrolled || isMenuOpen
                  ? "text-gray-700 hover:bg-gray-100" 
                  : "text-gray-700 hover:bg-white/10"
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
          <div className="md:hidden bg-white shadow-lg rounded-b-2xl animate-fade-in border-t border-gray-100">
            <div className="px-4 pt-2 pb-6 space-y-4">
              {[
                { key: "about", label: t('navbar.about') },
                { key: "services", label: t('navbar.services') },
                { key: "portfolio", label: t('navbar.portfolio') },
                { key: "contact", label: t('navbar.contact') }
              ].map((item) => (
                <button
                  key={item.key}
                  className="block w-full text-left py-3 text-gray-700 hover:text-secondary font-medium transition-colors"
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
                  className="w-full text-left py-3 text-gray-700 hover:text-secondary font-medium transition-colors"
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
