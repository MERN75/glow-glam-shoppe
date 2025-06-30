
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-blush-pink">
      <Navigation cartCount={3} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-deep-plum mb-4">
              About Rosélush
            </h1>
            <p className="text-xl text-gray-600">
              Glow, Bloom, Blush – with Rosélush
            </p>
          </div>

          {/* Main Story */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-playfair text-3xl font-bold text-deep-plum mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Rosélush is your go-to beauty destination for elegant and affordable makeup. Every product is handpicked to reflect your natural glow – with unique visuals, perfect pricing, and boutique-level charm.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We believe that everyone deserves to feel beautiful without breaking the bank. Our carefully curated collection brings you premium quality at accessible prices, because luxury should be within reach.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Rosélush makeup collection"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
              <div className="w-16 h-16 bg-rose-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-deep-plum mb-4">
                Affordable Elegance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Premium quality without the premium price tag. We believe everyone deserves to feel beautiful without breaking the bank.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
              <div className="w-16 h-16 bg-rose-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌹</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-deep-plum mb-4">
                Handpicked Collection
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Each product is selected with passion and purpose. We curate everything ourselves to ensure boutique-level charm and quality.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
              <div className="w-16 h-16 bg-rose-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💖</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-deep-plum mb-4">
                Natural Glow
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Products that enhance your natural beauty and help you glow from within, whether you prefer bold or subtle looks.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-r from-rose-gold/10 to-deep-plum/10 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="font-playfair text-3xl font-bold text-deep-plum mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              To make beauty accessible, enjoyable, and empowering for everyone. We're not just selling makeup – we're helping you discover your unique glow with products that feel as good as they look.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
