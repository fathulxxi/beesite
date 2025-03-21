
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#33280A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Address */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Beesite</h3>
            <address className="not-italic">
              <p className="mb-2">123 Innovation Street</p>
              <p className="mb-2">Tech Valley, CA 94043</p>
              <p className="mb-2">United States</p>
              <p className="mb-2">Phone: (123) 456-7890</p>
              <p>Email: info@beesite.com</p>
            </address>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {["About", "Services", "Portfolio", "Team", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#EFBF04] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#EFBF04] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#EFBF04] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#EFBF04] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#EFBF04] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#EFBF04] transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for updates</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#EFBF04] transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#EFBF04] hover:bg-[#D6AD04] rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p>© {currentYear} Beesite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
