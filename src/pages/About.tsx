
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
              About Glamistry
            </h1>
            <p className="text-xl text-gray-600">
              Where beauty meets comfort and affordability meets elegance
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
                  Welcome to Glamistry, where beauty meets comfort. We believe in affordable elegance. Our handpicked products are designed to bring out your natural glow, whether you're going bold or keeping it simple.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Trust us to deliver makeup that matches your vibe. Every product in our collection is carefully curated to ensure you get nothing but the best quality and results at prices that won't break the bank.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Glamistry makeup collection"
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
                Affordable Luxury
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Premium quality without the premium price tag. We believe everyone deserves to feel beautiful without breaking the bank.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
              <div className="w-16 h-16 bg-rose-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💕</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-deep-plum mb-4">
                Curated with Care
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Each product is selected with passion and purpose. We test everything ourselves to ensure it meets our high standards.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
              <div className="w-16 h-16 bg-rose-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-deep-plum mb-4">
                Your Vibe, Your Glow
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From bold statements to natural beauty, we have something for every mood, style, and occasion.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-r from-rose-gold/10 to-deep-plum/10 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="font-playfair text-3xl font-bold text-deep-plum mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              To make beauty accessible, enjoyable, and empowering for everyone. We're not just selling makeup – we're helping you express your unique style and feel confident in your own skin.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
