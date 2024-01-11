import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setCartOpen } = useContext(CartContext);

  const toggleCartOpen = () => {
    setCartOpen(!isCartOpen);
  };
  return (
    <div
      className={
        isCartOpen ? "cart-icon-container open" : "cart-icon-container"
      }
      onClick={toggleCartOpen}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default CartIcon;
