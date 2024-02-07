import styled from "styled-components";
import { BaseButton } from "../button/button.styles";


export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }

  ${BaseButton}{
    @media screen and (max-width: 800px) {
      width: 100%;
    
    }
  }
`;

