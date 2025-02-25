
const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#9003fc]/5 to-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(144,3,252,0.05),transparent_50%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="animate-fade-up font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
          Innovate with
          <br />
          <span className="text-[#9003fc]">Beesite</span>
        </h1>
        <p className="animate-fade-up delay-200 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-12">
          We transform ideas into exceptional digital experiences, pushing the
          boundaries of innovation and design.
        </p>
        <button className="animate-fade-up delay-300 px-8 py-4 bg-[#9003fc] text-white rounded-full font-medium hover:bg-[#7502d1] transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
