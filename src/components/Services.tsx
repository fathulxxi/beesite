
import { Briefcase, Code, PenTool, LineChart } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Digital Strategy",
      description:
        "Strategic planning and consultation for digital transformation initiatives.",
      icon: <Briefcase className="w-8 h-8 text-primary" />,
    },
    {
      title: "Web Development",
      description:
        "Custom web applications and websites built with cutting-edge technologies.",
      icon: <Code className="w-8 h-8 text-primary" />,
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design solutions that create engaging digital experiences.",
      icon: <PenTool className="w-8 h-8 text-primary" />,
    },
    {
      title: "Social Media Strategy",
      description:
        "Comprehensive Social media strategies to grow your online presence.",
      icon: <LineChart className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">What We Offer</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive solutions tailored to meet your digital needs and drive
            success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-card hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 hover:border-primary/20 group"
              data-aos="zoom-in"
              data-aos-delay={200 + (index * 100)}
            >
              <div className="p-3 rounded-xl bg-primary/10 inline-block mb-6">
                {service.icon}
              </div>
              <h3 className="font-display text-xl font-bold mb-4 text-secondary group-hover:text-primary transition-colors">
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
