import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  gap: 10px;
`;

export const CartItemImage = styled.img`
  width: 30%;
  object-fit: cover;
  border-radius: 10px;
`;

export const ItemDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ItemDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemDetailsInfoName = styled.span`
  font-size: 14px;
  min-width: 100px;
  max-width: 100px;
  text-overflow: ellipsis;
`;

export const ItemDetailsInfoPrice = styled.span`
  font-size: 14px;
  min-width: 30px;
  max-width: 30px;
  text-overflow: ellipsis;
`;
