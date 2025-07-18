
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Search, ShoppingCart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const { toast } = useToast();

  const categories = [
    'All', 
    'Lipsticks', 
    'Foundations', 
    'Eyeshadows', 
    'Blush & Highlighters', 
    'Mascara & Eyeliners', 
    'Tools & Brushes', 
    'Accessories'
  ];

  const products = [
    // Lipsticks (4 items, ₹399-₹449)
    { 
      id: 1, 
      name: "Rosé Nude Matte", 
      category: "Lipsticks", 
      price: "₹399", 
      description: "Nude matte finish for everyday elegance", 
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 2, 
      name: "Coral Crush Lipstick", 
      category: "Lipsticks", 
      price: "₹429", 
      description: "Coral peach with satin finish", 
      image: "https://images.unsplash.com/photo-1574745441045-25c1a2e61de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 3, 
      name: "Mauve Bloom Gloss", 
      category: "Lipsticks", 
      price: "₹399", 
      description: "Soft mauve gloss for daily wear", 
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 4, 
      name: "Ruby Velvet Matte", 
      category: "Lipsticks", 
      price: "₹449", 
      description: "Deep red matte for bold statements", 
      image: "https://images.unsplash.com/photo-1631214540278-c3d6b6750d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },

    // Foundations (4 items, ₹450-₹650)
    { 
      id: 5, 
      name: "Light Beige Foundation", 
      category: "Foundations", 
      price: "₹450", 
      description: "Light coverage for fair skin tones", 
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 6, 
      name: "Warm Tan Base", 
      category: "Foundations", 
      price: "₹550", 
      description: "Perfect for medium warm undertones", 
      image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 7, 
      name: "Golden Glow Coverage", 
      category: "Foundations", 
      price: "₹599", 
      description: "Rich golden tone with natural finish", 
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 8, 
      name: "Deep Cocoa Matte", 
      category: "Foundations", 
      price: "₹650", 
      description: "Deep rich coverage for darker skin", 
      image: "https://images.unsplash.com/photo-1560472354-bb8565882c30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },

    // Eyeshadows (4 items, ₹499-₹599)
    { 
      id: 9, 
      name: "Rosé Romance Palette", 
      category: "Eyeshadows", 
      price: "₹499", 
      description: "Soft rose and peach shades palette", 
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 10, 
      name: "Smokey Night Palette", 
      category: "Eyeshadows", 
      price: "₹599", 
      description: "Deep smokey shades for evening looks", 
      image: "https://images.unsplash.com/photo-1583991919078-b1b0af2c133d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 11, 
      name: "Glam Pop Palette", 
      category: "Eyeshadows", 
      price: "₹579", 
      description: "Shimmery glam colors for special occasions", 
      image: "https://images.unsplash.com/photo-1607367716361-26a8eb36f0ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 12, 
      name: "Daily Nude Set", 
      category: "Eyeshadows", 
      price: "₹520", 
      description: "Essential nude shades for everyday wear", 
      image: "https://images.unsplash.com/photo-1561049933-f0de12770ac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },

    // Blush & Highlighters (4 items, ₹250-₹499)
    { 
      id: 13, 
      name: "Peach Pop Blush", 
      category: "Blush & Highlighters", 
      price: "₹350", 
      description: "Fresh peach flush for natural glow", 
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 14, 
      name: "Rose Beam Blush", 
      category: "Blush & Highlighters", 
      price: "₹380", 
      description: "Romantic rose shade with silky texture", 
      image: "https://images.unsplash.com/photo-1605288650173-57a40dd8cb0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 15, 
      name: "Champagne Shine Highlighter", 
      category: "Blush & Highlighters", 
      price: "₹450", 
      description: "Luminous champagne glow", 
      image: "https://images.unsplash.com/photo-1560070094-e1f2ddec4337?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 16, 
      name: "Moonlit Glow Combo", 
      category: "Blush & Highlighters", 
      price: "₹499", 
      description: "Blush and highlighter duo set", 
      image: "https://images.unsplash.com/photo-1609979715715-e6e12ad54e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },

    // Mascara & Eyeliners (4 items, ₹249-₹499)
    { 
      id: 17, 
      name: "Black Curl Mascara", 
      category: "Mascara & Eyeliners", 
      price: "₹420", 
      description: "Dramatic curl and volume", 
      image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 18, 
      name: "Waterproof Eyeliner Pen", 
      category: "Mascara & Eyeliners", 
      price: "₹320", 
      description: "Precise waterproof application", 
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 19, 
      name: "Kajal & Liner Duo", 
      category: "Mascara & Eyeliners", 
      price: "₹380", 
      description: "Traditional kajal with modern liner", 
      image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 20, 
      name: "Everyday Mascara", 
      category: "Mascara & Eyeliners", 
      price: "₹280", 
      description: "Natural length and definition", 
      image: "https://images.unsplash.com/photo-1564171084394-1f7f9aa2c1b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },

    // Tools & Brushes (4 items, ₹199-₹599)
    { 
      id: 21, 
      name: "Blending Sponge", 
      category: "Tools & Brushes", 
      price: "₹250", 
      description: "Soft makeup sponge for flawless blending", 
      image: "https://images.unsplash.com/photo-1617626691157-5448a7f5f0d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 22, 
      name: "Blush Brush", 
      category: "Tools & Brushes", 
      price: "₹350", 
      description: "Professional blush application brush", 
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 23, 
      name: "Dual-ended Eye Brush", 
      category: "Tools & Brushes", 
      price: "₹300", 
      description: "Versatile eyeshadow application tool", 
      image: "https://images.unsplash.com/photo-1631214540278-c3d6b6750d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 24, 
      name: "Rosélush 3-Brush Mini Set", 
      category: "Tools & Brushes", 
      price: "₹550", 
      description: "Essential brush trio for beginners", 
      image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },

    // Accessories (4 items, ₹199-₹450)
    { 
      id: 25, 
      name: "Mini Travel Mirror", 
      category: "Accessories", 
      price: "₹280", 
      description: "Compact mirror with LED lights", 
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 26, 
      name: "Pink Pouch", 
      category: "Accessories", 
      price: "₹350", 
      description: "Elegant storage for makeup essentials", 
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 27, 
      name: "Rose Nail Paint Set", 
      category: "Accessories", 
      price: "₹420", 
      description: "Three coordinating rose nail colors", 
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 28, 
      name: "Beauty Comb Case", 
      category: "Accessories", 
      price: "₹230", 
      description: "Stylish comb with protective case", 
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    }
  ];

  // Create a global products array that can be accessed by other components
  if (typeof window !== 'undefined') {
    (window as any).roselushProducts = products;
  }

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product: typeof products[0]) => {
    setCartCount(prev => prev + 1);
    
    // Store cart items in localStorage
    const existingCart = JSON.parse(localStorage.getItem('roselushCart') || '[]');
    const existingItem = existingCart.find((item: any) => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('roselushCart', JSON.stringify(existingCart));
    
    toast({
      title: "✔️ Item added to cart",
      description: `${product.name} (${product.price}) has been added to your cart`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-blush-pink">
      <Navigation cartCount={cartCount} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-deep-plum mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked collection of elegant and affordable beauty products
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
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="btn-primary flex-1 flex items-center justify-center space-x-2 text-sm py-2"
                  >
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
