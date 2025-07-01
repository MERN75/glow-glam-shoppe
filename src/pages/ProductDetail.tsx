
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, ShoppingCart, Heart, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [cartCount, setCartCount] = useState(0);

  // Product data (in a real app, this would come from an API or context)
  const products = [
    // Lipsticks
    { id: 1, name: "Rosé Nude Matte", category: "Lipsticks", price: "₹399", originalPrice: "₹599", description: "Long-lasting nude matte finish that provides elegant everyday wear. This luxurious lipstick delivers rich, velvety color that stays put for hours without drying out your lips.", features: ["Long-lasting formula (up to 8 hours)", "Highly pigmented for one-swipe coverage", "Comfortable matte finish", "Enriched with vitamin E", "Cruelty-free and paraben-free"], images: ["https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1631214540278-c3d6b6750d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"], rating: 4.8, reviews: 127, inStock: true },
    { id: 2, name: "BoldBerry Gloss", category: "Lipsticks", price: "₹449", originalPrice: "₹649", description: "Glossy berry red finish for bold statements. High-shine formula that provides vibrant color with a luscious, non-sticky feel.", features: ["High-shine glossy finish", "Bold berry red pigmentation", "Non-sticky formula", "Moisturizing ingredients", "Long-wearing color"], images: ["https://images.unsplash.com/photo-1631214540278-c3d6b6750d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1574745441045-25c1a2e61de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"], rating: 4.6, reviews: 89, inStock: true },
    { id: 3, name: "Coral Crush Satin", category: "Lipsticks", price: "₹429", originalPrice: "₹599", description: "Coral peach with luxurious satin finish. Perfect for adding a pop of warm color to your everyday look.", features: ["Satin finish with subtle shine", "Coral peach undertones", "Buildable coverage", "Comfortable wear", "Vitamin-enriched formula"], images: ["https://images.unsplash.com/photo-1574745441045-25c1a2e61de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"], rating: 4.7, reviews: 156, inStock: true },
    { id: 4, name: "Mauve Bloom", category: "Lipsticks", price: "₹399", originalPrice: "₹549", description: "Soft mauve perfect for daily wear. A versatile shade that complements all skin tones.", features: ["Universal mauve shade", "Daily wear formula", "Comfortable application", "Buildable color", "Natural finish"], images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"], rating: 4.5, reviews: 203, inStock: true },
    
    // Foundations
    { id: 5, name: "Soft Beige Foundation", category: "Foundations", price: "₹599", originalPrice: "₹799", description: "Light coverage foundation perfect for fair skin tones. Provides natural-looking coverage with a radiant finish.", features: ["Light to medium coverage", "Perfect for fair skin", "SPF 15 protection", "Oil-free formula", "12-hour wear"], images: ["https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1522338140262-f46f5913618a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"], rating: 4.4, reviews: 98, inStock: true },
    { id: 6, name: "Warm Tan Foundation", category: "Foundations", price: "₹599", originalPrice: "₹799", description: "Perfect for medium warm undertones. Provides buildable coverage with a natural, healthy glow.", features: ["Medium coverage", "Warm undertones", "Buildable formula", "Natural finish", "Long-lasting wear"], images: ["https://images.unsplash.com/photo-1522338140262-f46f5913618a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"], rating: 4.6, reviews: 134, inStock: true },
    { id: 7, name: "Golden Glow Foundation", category: "Foundations", price: "₹650", originalPrice: "₹850", description: "Rich golden tone with natural finish. Ideal for medium to deep skin tones with golden undertones.", features: ["Golden undertones", "Medium to full coverage", "Natural finish", "Blendable formula", "All-day wear"], images: ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1560472354-bb8565882c30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"], rating: 4.7, reviews: 112, inStock: true },
    { id: 8, name: "Deep Cocoa Foundation", category: "Foundations", price: "₹650", originalPrice: "₹850", description: "Deep rich coverage for darker skin tones. Provides full coverage with a natural, matte finish.", features: ["Full coverage", "Deep skin tones", "Matte finish", "Transfer-resistant", "16-hour wear"], images: ["https://images.unsplash.com/photo-1560472354-bb8565882c30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"], rating: 4.8, reviews: 167, inStock: true },

    // Add other products similarly...
    { id: 9, name: "Rose Nude Palette", category: "Eyeshadows", price: "₹549", originalPrice: "₹749", description: "Soft rose and nude shades perfect for everyday glamour. 12 versatile shades in matte and shimmer finishes.", features: ["12 coordinated shades", "Matte and shimmer finishes", "Highly pigmented", "Blendable formula", "Long-lasting color"], images: ["https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1583991919078-b1b0af2c133d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"], rating: 4.9, reviews: 245, inStock: true },
    { id: 10, name: "Smokey Night Palette", category: "Eyeshadows", price: "₹599", originalPrice: "₹799", description: "Deep smokey shades for dramatic evening looks. Perfect for creating sultry, sophisticated eye makeup.", features: ["Deep smokey shades", "Evening glamour", "High pigmentation", "Easy blending", "Professional results"], images: ["https://images.unsplash.com/photo-1583991919078-b1b0af2c133d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1607367716361-26a8eb36f0ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"], rating: 4.7, reviews: 189, inStock: true }
  ];

  const product = products.find(p => p.id === parseInt(id || '1'));

  if (!product) {
    return (
      <div className="min-h-screen bg-blush-pink flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-deep-plum mb-4">Product not found</h1>
          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    toast({
      title: "✔️ Item added to cart",
      description: `${product.name} (${product.price}) has been added to your cart`,
    });
  };

  return (
    <div className="min-h-screen bg-blush-pink">
      <Navigation cartCount={cartCount} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8">
          <Link to="/products" className="flex items-center text-gray-600 hover:text-rose-gold transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-xl">
              <img 
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={image}
                    alt={`${product.name} ${index + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="mb-6">
              <span className="text-rose-gold font-medium text-sm uppercase tracking-wide">
                {product.category}
              </span>
              <h1 className="font-playfair text-3xl md:text-4xl font-bold text-deep-plum mt-2 mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-rose-gold">{product.price}</span>
                <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {Math.round(((parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))) / parseInt(product.originalPrice.slice(1))) * 100)}% OFF
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-playfair text-xl font-semibold text-deep-plum mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-playfair text-xl font-semibold text-deep-plum mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-rose-gold rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <button 
                  onClick={handleAddToCart}
                  className="btn-primary flex-1 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
                <button className="p-3 border-2 border-rose-gold text-rose-gold rounded-full hover:bg-rose-gold hover:text-white transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
              <button className="w-full bg-deep-plum hover:bg-deep-plum/90 text-white font-medium py-4 rounded-full transition-all duration-300 hover:shadow-lg">
                Buy Now
              </button>
            </div>

            {/* Stock Status */}
            <div className="mt-6 p-4 bg-green-50 rounded-2xl">
              <div className="flex items-center text-green-800">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="font-medium">In Stock - Ready to Ship</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
