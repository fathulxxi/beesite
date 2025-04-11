
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank"); // Replace with your WhatsApp number
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </button>
  );
};

export default WhatsAppButton;
