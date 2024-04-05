import { CART_ACTION_TYPES } from "./cart.types";

export const INITIAL_STATE = {
  isOpen: false,
  items: [],
  itemCount: 0,
  total: 0,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART:
      return { ...state, isOpen: payload };
    case CART_ACTION_TYPES.SET_ITEMS:
      return { ...state, items: payload };
    default:
      return state;
  }
};
