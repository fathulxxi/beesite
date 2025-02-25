
const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(26,26,26,0.02),transparent_50%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="animate-fade-up font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
          Crafting Digital
          <br />
          <span className="text-gray-600">Excellence</span>
        </h1>
        <p className="animate-fade-up delay-200 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-12">
          We transform ideas into exceptional digital experiences, pushing the
          boundaries of innovation and design.
        </p>
        <button className="animate-fade-up delay-300 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
