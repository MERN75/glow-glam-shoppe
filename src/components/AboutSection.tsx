
const AboutSection = () => {
  return (
    <section className="section-spacing bg-gradient-to-br from-blush-pink to-rose-gold/10">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-plum mb-8">
            About Rosélush
          </h2>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Rosélush is your go-to beauty destination for elegant and affordable makeup. Every product is handpicked to reflect your natural glow – with unique visuals, perfect pricing, and boutique-level charm.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We believe that everyone deserves to feel beautiful without breaking the bank. Our carefully curated collection brings you premium quality at accessible prices, because luxury should be within reach.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-deep-plum mb-2">Affordable Elegance</h3>
                <p className="text-gray-600">Premium quality without the premium price tag</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌹</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-deep-plum mb-2">Handpicked Collection</h3>
                <p className="text-gray-600">Each product selected for unique charm and quality</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💖</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-deep-plum mb-2">Natural Glow</h3>
                <p className="text-gray-600">Products that enhance your natural beauty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
