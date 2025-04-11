
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Address */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-primary text-2xl font-bold mr-2">Beesite</span>
              <span className="text-xs px-2 py-1 bg-primary/20 rounded-full text-primary">Digital Agency</span>
            </div>
            <address className="not-italic text-gray-400">
              <p className="mb-2">Jln. Angsana, Maros, Sulawesi Selatan</p>
              <p className="mb-2">Indonesia</p>
              <p className="mb-2">Email: beesite.id@gmail.com</p>
            </address>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4 text-white">{t('footer.navigation')}</h3>
            <ul className="space-y-3">
              {[
                { key: "about", label: t('navbar.about') },
                { key: "services", label: t('navbar.services') },
                { key: "portfolio", label: t('navbar.portfolio') },
                { key: "contact", label: t('navbar.contact') }
              ].map((item) => (
                <li key={item.key}>
                  <a
                    href={`#${item.key}`}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4 text-white">{t('footer.connectWithUs')}</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/beesite.id" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">{t('footer.copyright', { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
