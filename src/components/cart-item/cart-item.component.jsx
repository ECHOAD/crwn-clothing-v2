import { useSelector, useDispatch } from "react-redux";

import InputSpinner from "../input-spinner/input-spinner.component";
import {
  CartItemContainer,
  CartItemImage,
  ItemDetails,
  ItemDetailsInfo,
  ItemDetailsInfoName,
  ItemDetailsInfoPrice,
} from "./cart-item.styles";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart, removeItemToCart } from "../../store/cart/cart.action";

const CartItem = ({ item }) => {
  const cartItems = useSelector(selectCartItems);
  const dispath = useDispatch();

  const { imageUrl, name, price, quantity } = item;

  const handleIncrement = () => {
    dispath(addItemToCart(cartItems, item));
  };

  const handleDecrement = () => {
    dispath(removeItemToCart(cartItems, item));
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
