
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechGrowth Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    testimonial: "Beesite completely transformed our online presence. Their team's attention to detail and innovative approach helped us achieve a 40% increase in user engagement within just two months.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "Innovate Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    testimonial: "Working with Beesite was a game-changer for our business. Their development team delivered a cutting-edge application that exceeded our expectations and delighted our customers.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    company: "Design Forward",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    testimonial: "The UI/UX design services from Beesite have significantly improved our conversion rates. Their team took the time to understand our users and created an interface that perfectly balances aesthetics and functionality.",
    rating: 5,
  },
  {
    name: "David Wilson",
    company: "Growth Marketing",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    testimonial: "Beesite's digital marketing strategies helped us reach our target audience more effectively than ever before. Their data-driven approach and creative campaigns delivered measurable results within weeks.",
    rating: 4,
  },
  {
    name: "Priya Patel",
    company: "NextGen Startup",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    testimonial: "As a startup, we needed a partner who could help us establish a strong digital foundation. Beesite didn't just build our website; they helped create our entire digital identity with precision and creativity.",
    rating: 5,
  },
  {
    name: "James Taylor",
    company: "Enterprise Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    testimonial: "The enterprise software solution developed by Beesite streamlined our internal processes and improved productivity across departments. Their ongoing support has been exceptional.",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <span className="text-sm font-medium text-[#EFBF04] tracking-wider uppercase mb-3 block">
            Client Feedback
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#33280A] to-[#EFBF04] bg-clip-text text-transparent">
            Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear what our clients have to say about their experience working with us.
          </p>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-gradient-to-r from-[#EFBF04] to-[#00E5FF]" />
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
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3 px-2">
                  <div className="bg-white rounded-2xl shadow-md p-8 h-full flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#EFBF04]/10">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">{testimonial.name}</h3>
                        <p className="text-[#EFBF04] text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#EFBF04] text-[#EFBF04]" />
                      ))}
                      {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gray-300" />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-600 italic flex-grow">
                      "{testimonial.testimonial}"
                    </blockquote>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
