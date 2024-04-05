import { useSelector, useDispatch } from "react-redux";

import InputSpinner from "../input-spinner/input-spinner.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import Button from "../button/button.component";

import {
  CheckoutItemContainer,
  Image,
  Content,
  ConentHeader,
  ContentFooter,
  PriceContainer,
  PriceValue,
  QuantityContainer,
  QuantityLabel,
} from "./checkout-item.styles";

import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  removeItemToCart,
  clearItemInCart,
} from "../../store/cart/cart.action";

const CheckoutItem = ({ cartItem }) => {
  const cartItems = useSelector(selectCartItems);
  const dispath = useDispatch();

  const addItemToCartHandler = () => {
    dispath(addItemToCart(cartItems, cartItem));
  };

  const removeItemFromCartHandler = () => {
    dispath(removeItemToCart(cartItems, cartItem));
  };

  const clearItemFromCartHandler = () => {
    dispath(clearItemInCart(cartItems, cartItem));
  };

  const { imageUrl, name, quantity, price } = cartItem;

  return (
    <CheckoutItemContainer>
      <Image className={"image"} src={imageUrl} alt={`product ${name}`} />
      <Content>
        <ConentHeader>
          <span className="name">{name}</span>
          <Button
            className="remove-button"
            onClick={() => clearItemFromCartHandler(cartItem)}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </Button>
        </ConentHeader>

        <ContentFooter>
          <PriceContainer>
            Price:
            <PriceValue>${price}</PriceValue>
          </PriceContainer>

          <QuantityContainer>
            <QuantityLabel>Quantity</QuantityLabel>

            <InputSpinner
              value={quantity}
              onIncrement={addItemToCartHandler}
              onDecrement={removeItemFromCartHandler}
            />
          </QuantityContainer>
        </ContentFooter>
      </Content>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
