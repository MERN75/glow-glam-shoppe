
import { ArrowUp } from 'lucide-react';

const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      name: "Luxury Lipsticks",
      description: "Rich, long-lasting colors that make a statement",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "₹1,299"
    },
    {
      id: 2,
      name: "Eyeshadow Palettes",
      description: "Stunning shades for every occasion",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2335&q=80",
      price: "₹2,199"
    },
    {
      id: 3,
      name: "Radiant Highlighters",
      description: "Glow like never before with our signature highlighters",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
      price: "₹899"
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
              <div className="relative overflow-hidden">
                <img 
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
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
    </section>
  );
};

export default FeaturedCollections;
