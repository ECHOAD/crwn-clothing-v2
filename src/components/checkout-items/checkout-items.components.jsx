import { useSelector } from "react-redux";

import CheckoutItem from "../checkout-item/checkout-item.component";
import { CheckoutItemsContainer } from "./checkout-items.styles";

import { selectCartItems } from "../../store/cart/cart.selector";
const CheckoutItems = () => {
  const items = useSelector(selectCartItems);
  return (
    <CheckoutItemsContainer>
      {items.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </CheckoutItemsContainer>
  );
};

export default CheckoutItems;
