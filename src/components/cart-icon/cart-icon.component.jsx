import { useContext } from "react";
import {
  CartIconContainer,
  CartIconContainerOpen,
  ItemCountContainer,
  ShoppingIcon,
} from "./cart-icon.styles";

import { CartContext } from "../../contexts/cart.context";

const getCartIconContainer = (isOpen) =>
  isOpen ? CartIconContainerOpen : CartIconContainer;

const CartIcon = () => {
  const { isOpen, toggleCart, itemCount } = useContext(CartContext);

  const CartIconContainer = getCartIconContainer(isOpen);

  const toggleCartOpen = () => {
    toggleCart(!isOpen);
  };
  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
