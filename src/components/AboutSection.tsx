
const AboutSection = () => {
  return (
    <section className="section-spacing bg-gradient-to-br from-blush-pink to-rose-gold/10">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-plum mb-8">
            About GlowGlam
          </h2>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              GlowGlam is your beauty bestie! We bring handpicked makeup products that help you shine bright and feel beautiful inside and out.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Our goal is to make glam simple, elegant, and accessible. Every product in our collection is carefully curated to ensure you get nothing but the best quality and results.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-deep-plum mb-2">Premium Quality</h3>
                <p className="text-gray-600">Only the finest ingredients and formulations</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💕</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-deep-plum mb-2">Made with Love</h3>
                <p className="text-gray-600">Each product is selected with care and passion</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-deep-plum mb-2">Glow Guaranteed</h3>
                <p className="text-gray-600">Results that make you shine from within</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
