
import { Briefcase, Code, PenTool, LineChart } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Digital Strategy",
      description:
        "Strategic planning and consultation for digital transformation initiatives that drive business growth.",
      icon: <Briefcase className="w-8 h-8 text-secondary" />,
      color: "from-secondary/10 to-secondary/5"
    },
    {
      title: "Web Development",
      description:
        "Custom web applications and websites built with cutting-edge technologies and modern frameworks.",
      icon: <Code className="w-8 h-8 text-secondary" />,
      color: "from-primary/10 to-primary/5"
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design solutions that create engaging digital experiences and drive conversions.",
      icon: <PenTool className="w-8 h-8 text-secondary" />,
      color: "from-secondary/10 to-secondary/5"
    },
    {
      title: "Social Media Strategy",
      description:
        "Comprehensive social media strategies to grow your online presence and engage your audience.",
      icon: <LineChart className="w-8 h-8 text-secondary" />,
      color: "from-primary/10 to-primary/5"
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-secondary">What We Offer</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Comprehensive solutions tailored to meet your digital needs and drive success in the modern marketplace.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-8 bg-gradient-to-br ${service.color} rounded-3xl border border-gray-100 hover:border-secondary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              data-aos="zoom-in"
              data-aos-delay={200 + (index * 100)}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-2xl bg-white shadow-sm group-hover:shadow-md transition-shadow">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold mb-3 text-gray-900 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
