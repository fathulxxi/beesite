
const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-[#2A1D5C] overflow-hidden">
      {/* Background with diagonal cut */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white transform -skew-y-3 origin-left translate-y-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-left text-white pt-20 lg:pt-0">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Innovate with
              <br />
              <span className="text-[#00E5FF]">Beesite</span>
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-gray-300 mb-8">
              We transform ideas into exceptional digital experiences, pushing the
              boundaries of innovation and design.
            </p>
            <button className="px-8 py-4 bg-[#FF3366] text-white rounded-lg font-medium hover:bg-[#E62E5C] transition-colors">
              Get Started
            </button>
          </div>

          {/* Right content - Images */}
          <div className="relative">
            <div className="flex justify-center items-end">
              <img
                src="/lovable-uploads/f1ad8713-4dcd-4249-9882-26d48ab849b3.png"
                alt="Character 1"
                className="w-[400px] h-auto transform translate-x-16 z-10"
              />
              <img
                src="/lovable-uploads/db8af31f-138a-433f-bd66-9b13f7076cf2.png"
                alt="Character 2"
                className="w-[400px] h-auto transform -translate-x-16"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF3366]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00E5FF]/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default Hero;
