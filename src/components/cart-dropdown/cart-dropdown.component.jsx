import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

import {
  selectCartItems,
  selectCartItemsCount,
} from "../../store/cart/cart.selector";

const CartDropdown = () => {
  const items = useSelector(selectCartItems);
  const itemCount = useSelector(selectCartItemsCount);

  const navigate = useNavigate();

  return (
    <CartDropdownContainer>
      <CartItems>
        {items.length ? (
          items.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      {itemCount > 0 && (
        <Button onClick={() => navigate("checkout")}>GO TO CHECKOUT</Button>
      )}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
