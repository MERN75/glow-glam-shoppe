
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      name: "Ruby Velvet Matte",
      description: "Deep red matte for bold statements",
      image: "https://images.unsplash.com/photo-1631214540278-c3d6b6750d0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹449",
      productId: 4
    },
    {
      id: 9,
      name: "Rosé Romance Palette",
      description: "Stunning rose and peach shades for every occasion",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹499",
      productId: 9
    },
    {
      id: 15,
      name: "Champagne Shine Highlighter",
      description: "Glow like never before with our signature highlighter",
      image: "https://images.unsplash.com/photo-1560070094-e1f2ddec4337?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹450",
      productId: 15
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-plum mb-4">
            Trending Now
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most-loved products that are flying off the shelves
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.id} className="product-card group cursor-pointer">
              <Link to={`/product/${collection.productId}`}>
                <div className="relative overflow-hidden">
                  <img 
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Link>
              
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-deep-plum mb-2">
                  {collection.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {collection.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-rose-gold">
                    {collection.price}
                  </span>
                  <Link 
                    to={`/product/${collection.productId}`}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <span>View Details</span>
                    <ArrowUp className="h-4 w-4 rotate-45" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
