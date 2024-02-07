import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
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

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const { addItem, removeItem, clearItem } = useContext(CartContext);

  const addItemToCart = () => {
    addItem(cartItem);
  };

  const removeItemFromCart = () => {
    removeItem(cartItem);
  };

  return (
    <CheckoutItemContainer>
      <Image className={"image"} src={imageUrl} alt={`product ${name}`} />
      <Content>
        <ConentHeader>
          <span className="name">{name}</span>
          <Button className="remove-button" onClick={() => clearItem(cartItem)}>
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
              onIncrement={addItemToCart}
              onDecrement={removeItemFromCart}
            />
          </QuantityContainer>
        </ContentFooter>
      </Content>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
