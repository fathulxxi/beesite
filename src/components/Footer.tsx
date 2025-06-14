
import { Heart, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="h-screen flex items-center bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="font-display font-bold text-2xl text-secondary">Beesite</span>
              <span className="ml-2 text-xs px-3 py-1 rounded-full font-medium bg-secondary/10 text-secondary">
                Digital
              </span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
              Transforming ideas into exceptional digital experiences. We're your trusted partner for innovative web solutions and digital growth.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-3 text-secondary" />
                <span>hello@beesite.com</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-3 text-secondary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-3 text-secondary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-gray-900">Services</h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "UI/UX Design",
                "Digital Strategy",
                "Brand Identity",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-600">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-2 text-red-500" /> by Beesite Team
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} Beesite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
