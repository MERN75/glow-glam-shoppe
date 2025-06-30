
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blush-pink to-rose-gold/20 overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left animate-fade-in">
              <h1 className="font-playfair text-5xl md:text-7xl font-bold text-deep-plum mb-6 leading-tight">
                Beauty Meets{' '}
                <span className="text-rose-gold">Comfort</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Affordable elegance that brings out your natural glow. Whether bold or simple, we match your vibe.
              </p>
              <button className="btn-primary text-lg px-8 py-4 animate-glow">
                Shop Now
              </button>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-rose-gold/30 to-deep-plum/20 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Luxury makeup collection"
                  className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-rose-gold/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-deep-plum/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
