
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowUp, ArrowDown } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Ruby Velvet Lipstick",
      price: 1299,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Sunset Dreams Palette",
      price: 2199,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Golden Hour Highlighter",
      price: 899,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-blush-pink">
      <Navigation cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-deep-plum mb-8 text-center">
            Your Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-6">Your cart is empty</p>
              <button className="btn-primary">Continue Shopping</button>
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="p-6 md:p-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 py-6 border-b border-gray-200 last:border-b-0">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-xl"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-playfair text-lg font-semibold text-deep-plum">
                        {item.name}
                      </h3>
                      <p className="text-rose-gold font-bold">₹{item.price}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-rose-gold hover:text-white transition-colors"
                      >
                        <ArrowDown className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-rose-gold hover:text-white transition-colors"
                      >
                        <ArrowUp className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-lg text-deep-plum">
                        ₹{item.price * item.quantity}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm mt-1"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-2xl font-bold text-deep-plum">Total:</span>
                  <span className="text-3xl font-bold text-rose-gold">₹{total}</span>
                </div>
                <button className="btn-primary w-full text-lg py-4">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
