import { useSelector, useDispatch } from "react-redux";

import {
  CartIconContainer,
  CartIconContainerOpen,
  ItemCountContainer,
  ShoppingIcon,
} from "./cart-icon.styles";

import {
  selectIsCartOpen,
  selectCartItemsCount,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
const getCartIconContainer = (isOpen) =>
  isOpen ? CartIconContainerOpen : CartIconContainer;

const CartIcon = () => {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const itemCount = useSelector(selectCartItemsCount);

  const CartIconContainer = getCartIconContainer(isCartOpen);

  const toggleCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };
  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
