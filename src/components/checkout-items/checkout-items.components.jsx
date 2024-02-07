import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../checkout-item/checkout-item.component";

import { CheckoutItemsContainer } from "./checkout-items.styles";
const CheckoutItems = () => {
  const { items } = useContext(CartContext);
  return (
    <CheckoutItemsContainer>
      {items.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </CheckoutItemsContainer>
  );
};

export default CheckoutItems;
