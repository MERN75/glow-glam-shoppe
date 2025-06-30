
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowUp } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Lipsticks', 'Eyes & Brows', 'Face', 'Accessories'];

  const products = [
    {
      id: 1,
      name: "Ruby Velvet Lipstick",
      category: "Lipsticks",
      price: "₹1,299",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Sunset Dreams Palette",
      category: "Eyes & Brows",
      price: "₹2,199",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Golden Hour Highlighter",
      category: "Face",
      price: "₹899",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Rose Blush Foundation",
      category: "Face",
      price: "₹1,599",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "Coral Kiss Lipstick",
      category: "Lipsticks",
      price: "₹1,199",
      image: "https://images.unsplash.com/photo-1631214540278-c3d6b6750d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Professional Brush Set",
      category: "Accessories",
      price: "₹2,499",
      image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-blush-pink">
      <Navigation cartCount={3} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-deep-plum mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our complete collection of premium beauty products
          </p>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-deep-plum mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.category}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-rose-gold">
                    {product.price}
                  </span>
                  <button className="btn-primary flex items-center space-x-2">
                    <span>Add to Cart</span>
                    <ArrowUp className="h-4 w-4 rotate-45" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
