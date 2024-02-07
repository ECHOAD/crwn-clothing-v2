import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
`;

export const ButtonActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 10px;
  }
`;
