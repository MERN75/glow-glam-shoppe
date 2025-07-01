
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowUp, ArrowDown, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Cart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // Load cart items from localStorage
    const savedCart = JSON.parse(localStorage.getItem('roselushCart') || '[]');
    setCartItems(savedCart);
  }, []);

  const updateQuantity = (id: number, change: number) => {
    const updatedItems = cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );
    setCartItems(updatedItems);
    localStorage.setItem('roselushCart', JSON.stringify(updatedItems));
  };

  const removeItem = (id: number) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('roselushCart', JSON.stringify(updatedItems));
    
    toast({
      title: "Item removed",
      description: "Product has been removed from your cart",
      duration: 2000,
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('roselushCart');
    
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
      duration: 2000,
    });
  };

  const getNumericPrice = (priceString: string) => {
    return parseInt(priceString.replace('₹', ''));
  };

  const total = cartItems.reduce((sum, item) => sum + (getNumericPrice(item.price) * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    toast({
      title: "🎉 Order Placed Successfully!",
      description: `Thank you for your purchase of ₹${total}. Your order will be processed soon.`,
      duration: 5000,
    });
    
    // Clear cart after successful checkout
    setTimeout(() => {
      clearCart();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-blush-pink">
      <Navigation cartCount={totalItems} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-deep-plum mb-8 text-center">
            Your Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-6">Your cart is empty</p>
              <Link to="/products" className="btn-primary">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-deep-plum">Cart Items ({totalItems})</h2>
                  <button
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                  >
                    Clear Cart
                  </button>
                </div>

                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 py-6 border-b border-gray-200 last:border-b-0">
                    <img 
                      src={item.image || item.images?.[0]}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-xl"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-playfair text-lg font-semibold text-deep-plum">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-1">{item.category}</p>
                      <p className="text-rose-gold font-bold">{item.price}</p>
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
                        ₹{getNumericPrice(item.price) * item.quantity}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm mt-1 flex items-center gap-1"
                      >
                        <Trash2 className="h-3 w-3" />
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
                <div className="flex gap-4">
                  <Link 
                    to="/products" 
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-4 rounded-full text-center transition-all duration-300"
                  >
                    Continue Shopping
                  </Link>
                  <button 
                    onClick={handleCheckout}
                    className="flex-1 btn-primary text-lg py-4"
                  >
                    Proceed to Checkout
                  </button>
                </div>
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
