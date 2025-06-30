
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, ShoppingCart, Heart, Star } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();

  // This would typically come from an API or state management
  const product = {
    id: parseInt(id || '1'),
    name: "Ruby Velvet Matte",
    category: "Lipsticks",
    price: "₹399",
    originalPrice: "₹599",
    description: "Long-lasting matte finish with intense color payoff. This luxurious lipstick delivers rich, velvety color that stays put for hours without drying out your lips.",
    features: [
      "Long-lasting formula (up to 8 hours)",
      "Highly pigmented for one-swipe coverage",
      "Comfortable matte finish",
      "Enriched with vitamin E",
      "Cruelty-free and paraben-free"
    ],
    images: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1631214540278-c3d6b6750d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviews: 127,
    inStock: true
  };

  return (
    <div className="min-h-screen bg-blush-pink">
      <Navigation cartCount={3} />
      
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
                  33% OFF
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
                <button className="btn-primary flex-1 flex items-center justify-center space-x-2">
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
