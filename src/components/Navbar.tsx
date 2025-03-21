
import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {!isHomePage && (
              <button 
                onClick={handleGoBack}
                className={`mr-4 p-2 rounded-full ${
                  isScrolled 
                    ? "text-gray-700 hover:bg-gray-100" 
                    : "text-white/90 hover:bg-white/10"
                }`}
                aria-label="Go back"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            <Link to="/" className="flex-shrink-0">
              <span className={`font-display font-bold text-xl ${isScrolled ? 'text-[#EFBF04]' : 'text-white'}`}>Beesite</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {["About", "Services", "Portfolio", "Team", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={isHomePage ? `/#${item.toLowerCase()}` : `/#${item.toLowerCase()}`}
                  className={`font-medium text-sm transition-colors ${
                    isScrolled
                      ? "text-gray-700 hover:text-[#EFBF04]"
                      : "text-white/90 hover:text-white"
                  }`}
                  onClick={(e) => {
                    if (!isHomePage) {
                      e.preventDefault();
                      navigate(`/#${item.toLowerCase()}`);
                    }
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
