import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, item) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...item, quantity: 1 }];
};

const removeCartItem = (cartItems, item) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== item.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, item) => {
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};

export const CartContext = createContext({
  isOpen: false,
  toggleCart: () => null,
  items: [],
  addItem: () => null,
  removeItem: () => null,
  clearItem: () => null,
  itemCount: 0,
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [isOpen, toggleCart] = useState(false);
  const [items, setItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const count = items.reduce((total, item) => total + item.quantity, 0);
    setItemCount(count);
  }, [items]);

  useEffect(() => {
    const total = items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setTotal(total);
  }, [items]);

  const value = {
    isOpen,
    toggleCart: (value) => toggleCart(value),
    items,
    addItem: (item) => setItems(addCartItem(items, item)),
    removeItem: (item) => setItems(removeCartItem(items, item)),
    clearItem: (item) => setItems(clearCartItem(items, item)),
    itemCount,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
