import styled from "styled-components";

import { BaseButton } from "../button/button.styles";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  min-height: 300px;
  object-fit: cover;
  margin-bottom: 5px;
  border-radius: 10px 10px 2px 2px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 550px;
  align-items: center;
  position: relative;

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    bottom: 50px;
    display: none;
  }

  &:hover {
    ${Image} {
      opacity: 0.8;
      transition: 0.5s;
    }

    ${BaseButton} {
      opacity: 0.85;
      display: flex;
      transition: 0.2s;
    }
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;
