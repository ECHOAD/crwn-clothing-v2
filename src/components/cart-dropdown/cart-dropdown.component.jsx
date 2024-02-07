import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContainer,CartItems, EmptyMessage } from "./cart-dropdown.styles";

import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { items, itemCount } = useContext(CartContext);

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
