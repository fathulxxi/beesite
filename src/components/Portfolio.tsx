
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Portfolio = () => {
  const projects = [
    {
      name: "Google",
      description: "AI-powered search optimization platform",
      image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1024&auto=format&fit=crop",
      tech: "Machine Learning, Big Data",
    },
    {
      name: "Microsoft",
      description: "Enterprise cloud solutions architecture",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1024&auto=format&fit=crop",
      tech: "Cloud Computing, Azure",
    },
    {
      name: "Apple",
      description: "iOS app development and UI/UX design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1024&auto=format&fit=crop",
      tech: "iOS, Swift, Design Systems",
    },
    {
      name: "Meta",
      description: "Social media analytics dashboard",
      image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=1024&auto=format&fit=crop",
      tech: "React, Data Visualization",
    },
    {
      name: "Amazon",
      description: "E-commerce platform optimization",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1024&auto=format&fit=crop",
      tech: "AWS, Microservices",
    },
    {
      name: "Tesla",
      description: "Vehicle management system interface",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1024&auto=format&fit=crop",
      tech: "IoT, Real-time Analytics",
    },
  ];

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <div 
      className="overflow-hidden rounded-2xl bg-white shadow-card border border-gray-100 hover:border-primary/20 transition-all hover:shadow-xl my-4 hover:-translate-y-1 group"
      data-aos="flip-up"
      data-aos-delay="150"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.split(", ").map((tech, techIndex) => (
            <span
              key={techIndex}
              className="inline-block px-3 py-1 text-sm bg-primary/5 text-primary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Our Work</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Our Portfolio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Trusted by world-class companies for delivering exceptional digital solutions.
          </p>
        </div>

        <div className="relative px-12" data-aos="fade-up" data-aos-delay="200">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <ProjectCard project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex border-gray-200 hover:bg-primary hover:text-white" />
            <CarouselNext className="hidden md:flex border-gray-200 hover:bg-primary hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
