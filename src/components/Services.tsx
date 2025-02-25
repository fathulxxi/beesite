
const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your digital needs and drive
            success.
          </p>
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
