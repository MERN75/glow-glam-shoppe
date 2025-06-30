
const AboutSection = () => {
  return (
    <section className="section-spacing bg-gradient-to-br from-blush-pink to-rose-gold/10">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-plum mb-8">
            About Glamistry
          </h2>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Welcome to Glamistry, where beauty meets comfort. We believe in affordable elegance. Our handpicked products are designed to bring out your natural glow, whether you're going bold or keeping it simple.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Trust us to deliver makeup that matches your vibe. Every product in our collection is carefully curated to ensure you get nothing but the best quality and results at prices that won't break the bank.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-deep-plum mb-2">Affordable Luxury</h3>
                <p className="text-gray-600">Premium quality without the premium price tag</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💕</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-deep-plum mb-2">Curated with Care</h3>
                <p className="text-gray-600">Each product is selected with passion and purpose</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-deep-plum mb-2">Your Vibe, Your Glow</h3>
                <p className="text-gray-600">From bold statements to natural beauty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
