
import { Briefcase, Code, PenTool, LineChart } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <span className="text-sm font-medium text-[#EFBF04] tracking-wider uppercase mb-3 block">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#33280A] to-[#EFBF04] bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive solutions tailored to meet your digital needs and drive
            success.
          </p>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-gradient-to-r from-[#EFBF04] to-[#00E5FF]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Digital Strategy",
              description:
                "Strategic planning and consultation for digital transformation initiatives.",
              icon: <Briefcase className="w-12 h-12 text-[#EFBF04] mb-4" />,
            },
            {
              title: "Web Development",
              description:
                "Custom web applications and websites built with cutting-edge technologies.",
              icon: <Code className="w-12 h-12 text-[#EFBF04] mb-4" />,
            },
            {
              title: "UI/UX Design",
              description:
                "User-centered design solutions that create engaging digital experiences.",
              icon: <PenTool className="w-12 h-12 text-[#EFBF04] mb-4" />,
            },
            {
              title: "Digital Marketing",
              description:
                "Comprehensive digital marketing strategies to grow your online presence.",
              icon: <LineChart className="w-12 h-12 text-[#EFBF04] mb-4" />,
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all hover:translate-y-[-5px] group"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="font-display text-xl font-bold mb-4 group-hover:text-[#EFBF04] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
