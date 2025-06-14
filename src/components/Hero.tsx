
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();
  
  const handleGetStarted = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen flex items-center bg-gradient-to-br from-white via-accent/30 to-primary/10 overflow-hidden">
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: "4s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-left" data-aos="fade-right" data-aos-delay="200">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-medium text-secondary">Digital Innovation Agency</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
              {t('hero.title').split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text">
                Beesite
              </span>
            </h1>
            
            <p className="max-w-xl text-xl text-gray-600 mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleGetStarted}
                className="group px-8 py-4 bg-secondary text-white rounded-2xl font-medium hover:bg-secondary/90 transition-all hover:shadow-lg hover:shadow-secondary/25 flex items-center justify-center"
              >
                {t('hero.button')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => window.scrollTo({ top: window.innerHeight * 3, behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-gray-200 text-gray-900 rounded-2xl font-medium hover:border-secondary hover:text-secondary transition-all"
              >
                View Our Work
              </button>
            </div>
          </div>

          {/* Right content - Modern illustration */}
          <div className="relative hidden lg:block" data-aos="fade-left" data-aos-delay="300">
            <div className="relative">
              {/* Main illustration container */}
              <div className="relative bg-gradient-to-br from-secondary/5 to-primary/5 rounded-3xl p-8 backdrop-blur-sm">
                <div className="flex justify-center items-center space-x-4">
                  <img
                    src="/lovable-uploads/f1ad8713-4dcd-4249-9882-26d48ab849b3.png"
                    alt="Digital Innovation"
                    className="w-80 h-auto transform hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                  />
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">99% Uptime</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Fast Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
