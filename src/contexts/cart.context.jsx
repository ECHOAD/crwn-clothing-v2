import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.util";
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

const INITIAL_STATE = {
  isOpen: false,
  items: [],
  itemCount: 0,
  total: 0,
};

const ACTION_TYPES = {
  TOGGLE_CART: "TOGGLE_CART",
  SET_ITEMS: "SET_ITEMS",
};

/*
Reducer. The only responsibility of a reducer is to update the state based on the action it receives. 
No side effects, no API calls, no mutations, just state updates.

<br/>
The reducer scenario is good for when you on call to action update multiple states at once.
*/
const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.TOGGLE_CART:
      return { ...state, isOpen: payload };
    case ACTION_TYPES.SET_ITEMS:
      return { ...state, ...payload };
    default:
      throw new Error(`Unhandled action type: ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ isOpen, items, itemCount, total }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const updateCartItemsReducer = (newCartItems) => {
    const newCount = newCartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    const newTotal = newCartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );

    dispatch(
      createAction(ACTION_TYPES.SET_ITEMS, {
        items: newCartItems,
        itemCount: newCount,
        total: newTotal,
      })
    );
  };

  const addItemToCart = (item) => {
    const newCartItems = addCartItem(items, item);
    dispatch(createAction(ACTION_TYPES.SET_ITEMS, { items: newCartItems }));
    updateCartItemsReducer(newCartItems);
  };

  const removeItemToCart = (item) => {
    const newCartItems = removeCartItem(items, item);
    dispatch(createAction(ACTION_TYPES.SET_ITEMS, { items: newCartItems }));
    updateCartItemsReducer(newCartItems);
  };

  const clearItemInCart = (item) => {
    const newCartItems = clearCartItem(items, item);
    dispatch(createAction(ACTION_TYPES.SET_ITEMS, { items: newCartItems }));
    updateCartItemsReducer(newCartItems);
  };

  const toggleCart = (value) => {
    dispatch(createAction(ACTION_TYPES.TOGGLE_CART, value));
  };

  const value = {
    isOpen,
    toggleCart: (value) => toggleCart(value),
    items,
    addItem: (item) => addItemToCart(item),
    removeItem: (item) => removeItemToCart(item),
    clearItem: (item) => clearItemInCart(item),
    itemCount,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
