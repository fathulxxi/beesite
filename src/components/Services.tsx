const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <span className="text-sm font-medium text-[#9003fc] tracking-wider uppercase mb-3 block">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#2A1D5C] to-[#9003fc] bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive solutions tailored to meet your digital needs and drive
            success.
          </p>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-gradient-to-r from-[#9003fc] to-[#00E5FF]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Digital Strategy",
              description:
                "Strategic planning and consultation for digital transformation initiatives.",
            },
            {
              title: "Web Development",
              description:
                "Custom web applications and websites built with cutting-edge technologies.",
            },
            {
              title: "UI/UX Design",
              description:
                "User-centered design solutions that create engaging digital experiences.",
            },
            {
              title: "Digital Marketing",
              description:
                "Comprehensive digital marketing strategies to grow your online presence.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-display text-xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
