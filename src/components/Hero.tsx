
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  const handleGetStarted = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-b from-secondary to-[#111827] overflow-hidden">
      {/* Background with rounded design */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-left text-white pt-20 lg:pt-0" data-aos="fade-right" data-aos-delay="200">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-medium text-primary">Beesite — Digital Innovation</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              {t('hero.title')}
              <br />
              <span className="text-primary animate-pulse">Beesite</span>
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-gray-300 mb-8">
              {t('hero.subtitle')}
            </p>
            <button 
              onClick={handleGetStarted}
              className="px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
            >
              {t('hero.button')}
            </button>
          </div>

          {/* Right content - Images */}
          <div className="relative hidden lg:block" data-aos="fade-left" data-aos-delay="300">
            <div className="relative z-10 animate-float">
              <div className="flex justify-center items-end">
                <img
                  src="/lovable-uploads/f1ad8713-4dcd-4249-9882-26d48ab849b3.png"
                  alt="Character 1"
                  className="w-[600px] h-auto transform translate-x-32 z-10 drop-shadow-xl"
                />
                <img
                  src="/lovable-uploads/db8af31f-138a-433f-bd66-9b13f7076cf2.png"
                  alt="Character 2"
                  className="w-[600px] h-auto transform -translate-x-32 drop-shadow-xl"
                />
              </div>
            </div>
            
            {/* Decorative elements - hexagon shapes */}
            <div className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-primary/20 rounded-xl rotate-45 animate-float" style={{ animationDelay: "1s" }} />
            <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border-2 border-primary/30 rounded-xl rotate-12 animate-float" style={{ animationDelay: "2s" }} />
          </div>
        </div>
      </div>

      {/* Decorative Elements - Updated to lighter colors */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" data-aos="zoom-in" data-aos-delay="400" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00E5FF]/5 rounded-full blur-3xl" data-aos="zoom-in" data-aos-delay="600" />
      </div>
    </div>
  );
};

export default Hero;
