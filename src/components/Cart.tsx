"use client";
import React, { useEffect, useState } from "react";
import { AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai"; 
import Link from "next/link"; 

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
}

const Cart = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(existingCart);
  }, []);

  const handleIncreaseQuantity = (id: string) => {
    setCartItems(prevItems => {
      const updatedCart = prevItems.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const handleDecreaseQuantity = (id: string) => {
    setCartItems(prevItems => {
      const updatedCart = prevItems.map(item => 
        item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  
  const handleClearCart = () => {
    setCartItems([]);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  return (
    <div className={`fixed top-0 right-0 md:w-1/3 w-80 theme shadow-lg transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} h-full`}>
      <button onClick={onClose} className="p-2 text-xl absolute top-0 right-0">
        <AiFillCloseCircle />
      </button>
      <h2 className="md:text-xl text-lg text-center py-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="flex justify-around items-center py-2 border-b text-base md:text-lg">
              <div className="flex flex-col">
                <span>{item.name}</span>
                <span>({item.color} / {item.size})</span>
              </div>
              <div className="flex items-center">
                <button onClick={() => handleDecreaseQuantity(item.id)} className="p-1">
                  <AiFillMinusCircle />
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.id)} className="p-1">
                  <AiFillPlusCircle />
                </button>
              </div>
              <div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="font-bold mt-16 text-center">
        Total Amount: $
        {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center p-9">
        <Link href="/checkout" className="cartbutton p-2 px-4">Proceed to Checkout</Link>
        <button onClick={handleClearCart} className="p-1 text-red-500 mt-4 md:mt-0">Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
