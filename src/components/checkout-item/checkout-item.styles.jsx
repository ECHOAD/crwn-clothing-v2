import styled from "styled-components";
import { BaseButton } from "../button/button.styles";

const MAX_WIDTH = "800px";

export const CheckoutItemContainer = styled.div`
  display: flex;
  font-size: 20px;

  @media screen and (max-width: ${MAX_WIDTH}) {
    font-size: 16px;
  }
`;

export const Image = styled.img`
  width: 150px;
  background-size: cover;
  background-position: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  @media screen and (max-width: ${MAX_WIDTH}) {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 100%;
  padding: 10px;

  @media screen and (max-width: ${MAX_WIDTH}) {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const ConentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: inherit;

  ${BaseButton} {
    all: unset;
    cursor: pointer;

    &:hover {
      color: rgb(150, 16, 16);
    }
  }
`;

export const ItemName = styled.span`
  font-size: 20px;
  font-weight: 400;

  @media screen and (max-width: ${MAX_WIDTH}) {
    font-size: 16px;
  }
`;

export const ContentFooter = styled.div`
  display: flex;
  padding: inherit;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`;

export const PriceContainer = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: ${MAX_WIDTH}) {
    font-size: 1.4rem;

    align-items: center;
    gap: 10px;
  }
`;

export const PriceValue = styled.span`
  font-weight: bold;
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${MAX_WIDTH}) {
    font-size: 1.4rem;
  }
`;

export const QuantityLabel = styled.span`
  font-size: 1rem;
`;
