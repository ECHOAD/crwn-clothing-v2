import { useSelector, useDispatch } from "react-redux";

import {
  CardContainer,
  Image,
  CardFooter,
  Name,
  Price,
} from "./product-card.styles";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  const { name, imageUrl, price } = product;
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
