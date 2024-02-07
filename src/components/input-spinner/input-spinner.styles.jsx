import styled from "styled-components";
import { BaseButton } from "../button/button.styles";

export const InputSpinnerContainer = styled.div`
  display: flex;
  width: 90px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  border-radius: 5px;

  ${BaseButton} {
    all: unset;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    cursor: pointer;
    font-size: 13px;

    &:first-child {
      border-top-left-radius: inherit;
      border-bottom-left-radius: inherit;
    }

    &:last-child {
      border-top-right-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    &:hover {
      color: black;
      background-color: #bdbdbd;
      border: none;
    }

    &:active {
      background-color: black;
      color: white;
      border: none;
    }

    &:disabled {
      color: #9e9e9e;
      cursor: not-allowed;
    }
  }
`;

export const Number = styled.span`
  padding: 0 10px;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
`;
