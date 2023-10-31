import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  const removeFromCart = (itemRemove) => {
    const indexToRemove = cartItems.findIndex(item => item === itemRemove);
  
    if (indexToRemove !== -1) {
      const newCartItems = [...cartItems];
      newCartItems.splice(indexToRemove, 1);
      setCartItems(newCartItems);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
