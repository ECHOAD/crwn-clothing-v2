import styled from "styled-components";

export const CheckoutItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
