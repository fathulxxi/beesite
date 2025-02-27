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
      image: "https://source.unsplash.com/1498050108023-c5249f4df085",
      tech: "Machine Learning, Big Data",
    },
    {
      name: "Microsoft",
      description: "Enterprise cloud solutions architecture",
      image: "https://source.unsplash.com/1605810230434-7631ac76ec81",
      tech: "Cloud Computing, Azure",
    },
    {
      name: "Apple",
      description: "iOS app development and UI/UX design",
      image: "https://source.unsplash.com/1483058712412-4245e9b90334",
      tech: "iOS, Swift, Design Systems",
    },
    {
      name: "Meta",
      description: "Social media analytics dashboard",
      image: "https://source.unsplash.com/1519389950473-47ba0277781c",
      tech: "React, Data Visualization",
    },
    {
      name: "Amazon",
      description: "E-commerce platform optimization",
      image: "https://source.unsplash.com/1487058792275-0ad4aaf24ca7",
      tech: "AWS, Microservices",
    },
    {
      name: "Tesla",
      description: "Vehicle management system interface",
      image: "https://source.unsplash.com/1483058712412-4245e9b90334",
      tech: "IoT, Real-time Analytics",
    },
  ];

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl my-4">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
          {project.name}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.split(", ").map((tech, techIndex) => (
            <span
              key={techIndex}
              className="inline-block px-3 py-1 text-sm bg-[#9003fc]/5 text-[#9003fc] rounded-full"
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
        <div className="text-center mb-16 relative">
          <span className="text-sm font-medium text-[#9003fc] tracking-wider uppercase mb-3 block">
            Our Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#2A1D5C] to-[#9003fc] bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Trusted by world-class companies for delivering exceptional digital solutions.
          </p>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-gradient-to-r from-[#9003fc] to-[#00E5FF]" />
        </div>

        <div className="relative px-12">
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
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
