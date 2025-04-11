
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, User } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Show a success toast
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. We'll get back to you soon!",
      className: "bg-primary text-white border-none",
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Get in Touch</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have a project in mind? We would love to hear from you.
          </p>
        </div>
        
        <div 
          className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-card border border-gray-100"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-secondary font-medium">
                Name
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  id="name"
                  required
                  className="pl-10 py-3 border-gray-200 focus:border-primary focus:ring-primary/20 rounded-xl"
                  placeholder="Your name"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-secondary font-medium">
                Email
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="email"
                  id="email"
                  required
                  className="pl-10 py-3 border-gray-200 focus:border-primary focus:ring-primary/20 rounded-xl"
                  placeholder="Your email"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-secondary font-medium">
                Message
              </Label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full pl-10 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Your message"
                />
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full px-8 py-6 h-auto bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
