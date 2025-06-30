
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-blush-pink">
      <Navigation cartCount={3} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-deep-plum mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              We'd love to hear from you. Get in touch with our beauty experts!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="font-playfair text-2xl font-bold text-deep-plum mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-rose-gold/20 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-rose-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-plum">Phone</h3>
                    <p className="text-gray-600">*****</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-rose-gold/20 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-rose-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-plum">Email</h3>
                    <p className="text-gray-600">*****</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-rose-gold/20 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-rose-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-plum">Address</h3>
                    <p className="text-gray-600">*****</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-playfair text-xl font-semibold text-deep-plum mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-rose-gold/20 rounded-full flex items-center justify-center hover:bg-rose-gold hover:text-white transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-rose-gold/20 rounded-full flex items-center justify-center hover:bg-rose-gold hover:text-white transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-rose-gold/20 rounded-full flex items-center justify-center hover:bg-rose-gold hover:text-white transition-colors">
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="font-playfair text-2xl font-bold text-deep-plum mb-6">
                Send us a Message
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-gold focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-gold focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-gold focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-gold focus:border-transparent resize-none"
                    placeholder="Tell us what's on your mind..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
