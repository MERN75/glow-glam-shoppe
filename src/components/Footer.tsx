
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-deep-plum text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-playfair text-3xl font-bold text-rose-gold mb-4">
              Rosélush
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Rosélush is your go-to beauty destination for elegant and affordable makeup. Every product is handpicked to reflect your natural glow – with unique visuals, perfect pricing, and boutique-level charm.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-rose-gold/20 rounded-full flex items-center justify-center hover:bg-rose-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-rose-gold/20 rounded-full flex items-center justify-center hover:bg-rose-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-rose-gold/20 rounded-full flex items-center justify-center hover:bg-rose-gold transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl font-semibold text-rose-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-rose-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-rose-gold transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-rose-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-rose-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-xl font-semibold text-rose-gold mb-4">
              Contact Us
            </h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 *****</p>
              <p>📞 *****</p>
              <p>📍 *****</p>
              <p>📲 *****</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Rosélush. All rights reserved. Made with 💕 for beauty lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
