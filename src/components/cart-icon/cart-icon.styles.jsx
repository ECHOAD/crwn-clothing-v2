import styled from "styled-components";

import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";

export const ShoppingIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  
`;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;

    & ${ShoppingIcon} {
      fill: white;
    }
  }
`;

export const CartIconContainerOpen = styled(CartIconContainer)`
  background-color: black;
  color: white;

  & ${ShoppingIcon} {
    fill: white;
  }
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
