
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Show a success toast
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. We'll get back to you soon!",
      className: "bg-[#EFBF04] text-white border-none",
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <span className="text-sm font-medium text-[#EFBF04] tracking-wider uppercase mb-3 block">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#33280A] to-[#EFBF04] bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have a project in mind? We would love to hear from you.
          </p>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-gradient-to-r from-[#EFBF04] to-[#00E5FF]" />
        </div>
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#EFBF04]/20 focus:border-[#EFBF04] transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#EFBF04]/20 focus:border-[#EFBF04] transition-colors"
                placeholder="Your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#EFBF04]/20 focus:border-[#EFBF04] transition-colors"
                placeholder="Your message"
              />
            </div>
            <Button
              type="submit"
              className="w-full px-8 py-6 h-auto bg-[#EFBF04] text-white rounded-lg font-medium hover:bg-[#D6AD04] transition-colors"
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
