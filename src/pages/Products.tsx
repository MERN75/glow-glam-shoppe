
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowUp, Search, ShoppingCart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All', 
    'Lipsticks', 
    'Foundations & Base', 
    'Eyeshadows', 
    'Blush & Highlighters', 
    'Mascara & Eyeliners', 
    'Makeup Tools', 
    'Accessories'
  ];

  const products = [
    // Lipsticks (6 items)
    { id: 1, name: "Ruby Velvet Matte", category: "Lipsticks", price: "₹399", description: "Long-lasting matte finish with intense color payoff", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Rose Gold Gloss", category: "Lipsticks", price: "₹299", description: "Luxurious glossy finish with rose gold shimmer", image: "https://images.unsplash.com/photo-1631214540278-c3d6b6750d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Berry Bliss Liquid", category: "Lipsticks", price: "₹449", description: "Rich berry shade with comfortable wear", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 4, name: "Nude Perfection", category: "Lipsticks", price: "₹359", description: "Perfect nude shade for everyday elegance", image: "https://images.unsplash.com/photo-1631214540278-c3d6b6750d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 5, name: "Coral Dream Stick", category: "Lipsticks", price: "₹329", description: "Vibrant coral with moisturizing formula", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 6, name: "Classic Red Bullet", category: "Lipsticks", price: "₹399", description: "Timeless red shade for bold statements", image: "https://images.unsplash.com/photo-1631214540278-c3d6b6750d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

    // Foundations & Base (5 items)
    { id: 7, name: "Flawless Coverage Foundation", category: "Foundations & Base", price: "₹799", description: "Full coverage with natural finish", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 8, name: "Hydrating BB Cream", category: "Foundations & Base", price: "₹599", description: "Lightweight coverage with skincare benefits", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 9, name: "Color Correcting Primer", category: "Foundations & Base", price: "₹499", description: "Smooths skin and extends makeup wear", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 10, name: "Setting Powder Compact", category: "Foundations & Base", price: "₹549", description: "Sets makeup with silky finish", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 11, name: "Concealer Duo", category: "Foundations & Base", price: "₹449", description: "High coverage concealer in two shades", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

    // Eyeshadows (6 items)
    { id: 12, name: "Sunset Dreams Palette", category: "Eyeshadows", price: "₹899", description: "12 warm shades for stunning sunset looks", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 13, name: "Smokey Night Collection", category: "Eyeshadows", price: "₹799", description: "Deep shades for dramatic evening looks", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 14, name: "Neutral Essentials", category: "Eyeshadows", price: "₹699", description: "Everyday neutral shades for any occasion", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 15, name: "Shimmer Singles Duo", category: "Eyeshadows", price: "₹399", description: "Two highly pigmented shimmer shades", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 16, name: "Matte Magic Quad", category: "Eyeshadows", price: "₹549", description: "Four matte shades for sophisticated looks", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 17, name: "Glitter Bomb Single", category: "Eyeshadows", price: "₹299", description: "Ultra-sparkly glitter eyeshadow", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

    // Blush & Highlighters (5 items)
    { id: 18, name: "Golden Hour Highlighter", category: "Blush & Highlighters", price: "₹649", description: "Luminous glow for radiant skin", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 19, name: "Peach Blush Compact", category: "Blush & Highlighters", price: "₹499", description: "Natural peach flush for healthy glow", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 20, name: "Rose Bloom Blush", category: "Blush & Highlighters", price: "₹449", description: "Romantic rose shade with silky texture", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 21, name: "Bronzer & Highlight Duo", category: "Blush & Highlighters", price: "₹699", description: "Contour and highlight in one compact", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 22, name: "Liquid Blush Drops", category: "Blush & Highlighters", price: "₹399", description: "Buildable liquid blush for natural flush", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

    // Mascara & Eyeliners (5 items)
    { id: 23, name: "Volume Max Mascara", category: "Mascara & Eyeliners", price: "₹599", description: "Dramatic volume and length for lashes", image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 24, name: "Waterproof Liner Pen", category: "Mascara & Eyeliners", price: "₹399", description: "Precise application with long-lasting wear", image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 25, name: "Curl & Hold Mascara", category: "Mascara & Eyeliners", price: "₹549", description: "Lifts and curls lashes all day", image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 26, name: "Gel Eyeliner Pot", category: "Mascara & Eyeliners", price: "₹449", description: "Smooth gel formula with intense color", image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 27, name: "Lash Primer Base", category: "Mascara & Eyeliners", price: "₹349", description: "Preps lashes for maximum mascara impact", image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

    // Makeup Tools (5 items)
    { id: 28, name: "Professional Brush Set", category: "Makeup Tools", price: "₹999", description: "Complete 12-piece brush collection", image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 29, name: "Beauty Blender Duo", category: "Makeup Tools", price: "₹599", description: "Two makeup sponges for flawless blending", image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 30, name: "Kabuki Brush", category: "Makeup Tools", price: "₹399", description: "Soft kabuki brush for powder application", image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 31, name: "Precision Liner Brush", category: "Makeup Tools", price: "₹299", description: "Ultra-fine brush for detailed work", image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 32, name: "Contour Brush Set", category: "Makeup Tools", price: "₹699", description: "3 brushes for perfect contouring", image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

    // Accessories (5 items)
    { id: 33, name: "Rose Gold Mirror", category: "Accessories", price: "₹799", description: "Elegant compact mirror with LED lights", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 34, name: "Velvet Makeup Pouch", category: "Accessories", price: "₹549", description: "Luxurious storage for your makeup essentials", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 35, name: "Nail Polish Trio", category: "Accessories", price: "₹499", description: "Three coordinating nail polish shades", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 36, name: "Hair Accessory Set", category: "Accessories", price: "₹399", description: "Beautiful clips and ties for styling", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 37, name: "Travel Organizer", category: "Accessories", price: "₹699", description: "Perfect for organizing makeup on the go", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-blush-pink">
      <Navigation cartCount={3} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-deep-plum mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our complete collection of affordable luxury beauty products
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search products or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-gold focus:border-transparent"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-rose-gold text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-rose-gold hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Link 
                      to={`/product/${product.id}`}
                      className="flex items-center justify-center bg-white/90 text-deep-plum px-3 py-2 rounded-full text-sm font-medium hover:bg-white transition-colors"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-deep-plum mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-3 text-sm">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-rose-gold">
                    {product.price}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="btn-primary flex-1 flex items-center justify-center space-x-2 text-sm py-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                  <button className="bg-deep-plum hover:bg-deep-plum/90 text-white font-medium px-4 py-2 rounded-full transition-all duration-300 hover:shadow-lg text-sm">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products found matching your search.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Products;
