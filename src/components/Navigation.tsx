
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from 'lucide-react';

interface NavigationProps {
  cartCount?: number;
}

const Navigation = ({ cartCount = 0 }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="font-playfair text-3xl font-bold text-deep-plum">
            GlowGlam
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-rose-gold transition-colors font-medium">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-rose-gold transition-colors font-medium">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-rose-gold transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-rose-gold transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="relative p-2 hover:bg-blush-pink rounded-full transition-colors">
            <Cart className="h-6 w-6 text-deep-plum" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`h-0.5 bg-deep-plum transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`h-0.5 bg-deep-plum transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`h-0.5 bg-deep-plum transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-rose-gold transition-colors font-medium">
                Home
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-rose-gold transition-colors font-medium">
                Products
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-rose-gold transition-colors font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-rose-gold transition-colors font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
