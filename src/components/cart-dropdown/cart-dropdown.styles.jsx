import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 380px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid black;
  top: 90px;
  right: 40px;
  z-index: 5;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  padding: 4px;
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  gap: 20px;

  &::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    

    &-thumb {
      background: black;
    }

    &-track {
      background: none;

      &:active {
        background: black;
      }
    }
  }
`;
