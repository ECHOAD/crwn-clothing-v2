import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CardContainer,
  Image,
  CardFooter,
  Name,
  Price,
} from "./product-card.styles";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItem } = useContext(CartContext);

  const addProductToCart = () => addItem(product);
  return (
    <CardContainer>
      <Image src={imageUrl} alt={`product ${name}`} className="image" />
      <CardFooter>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </CardFooter>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </CardContainer>
  );
};

export default ProductCard;
