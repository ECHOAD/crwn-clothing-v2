import { createSelector } from "reselect";

export const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartReducer) => cartReducer.items
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cartReducer) => cartReducer.isOpen
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const selectCartTotalAmount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
      0
    )
);
