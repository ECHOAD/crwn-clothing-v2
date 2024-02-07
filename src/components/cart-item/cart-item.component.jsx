import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import InputSpinner from "../input-spinner/input-spinner.component";
import {
  CartItemContainer,
  CartItemImage,
  ItemDetails,
  ItemDetailsInfo,
  ItemDetailsInfoName,
  ItemDetailsInfoPrice,
} from "./cart-item.styles";

const CartItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;
  const { addItem, removeItem } = useContext(CartContext);

  const handleIncrement = () => {
    addItem(item);
  };

  const handleDecrement = () => {
    removeItem(item);
  };

  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetails>
        <ItemDetailsInfo>
          <ItemDetailsInfoName>{name}</ItemDetailsInfoName>
          <ItemDetailsInfoPrice>${price}</ItemDetailsInfoPrice>
        </ItemDetailsInfo>
      </ItemDetails>
      <div className="action">
        <InputSpinner
          value={quantity}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
    </CartItemContainer>
  );
};

export default CartItem;
