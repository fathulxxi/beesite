
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
      name: "Schoolify",
      description: "Education examination platform for schools with comprehensive assessment tools and analytics",
      image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1024&auto=format&fit=crop",
      tech: "Website, Cloud Computing",
    },
    {
      name: "Arista Management System",
      description: "Company daily management system for Arista with workflow automation and reporting",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1024&auto=format&fit=crop",
      tech: "Website, CMS",
    },
    {
      name: "Travelby",
      description: "Travel booking platform for travel agencies with real-time availability and payments",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1024&auto=format&fit=crop",
      tech: "Mobile App",
    },
  ];

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <div 
      className="group overflow-hidden rounded-3xl bg-white shadow-card border border-gray-100 hover:border-secondary/20 transition-all hover:shadow-xl my-4 hover:-translate-y-2"
      data-aos="flip-up"
      data-aos-delay="150"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-8">
        <h3 className="font-display text-xl font-bold text-gray-900 mb-3 group-hover:text-secondary transition-colors">
          {project.name}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.split(", ").map((tech, techIndex) => (
            <span
              key={techIndex}
              className="inline-block px-4 py-2 text-sm bg-secondary/10 text-secondary rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-accent/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-secondary">Our Work</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Portfolio
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Trusted by world-class companies for delivering exceptional digital solutions that drive results.
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
            <CarouselPrevious className="hidden md:flex border-gray-200 hover:bg-secondary hover:text-white hover:border-secondary" />
            <CarouselNext className="hidden md:flex border-gray-200 hover:bg-secondary hover:text-white hover:border-secondary" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
