import styled, { css } from "styled-components";
const MAIN_COLOR = "black";
const SUB_COLOR = "grey";

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${MAIN_COLOR};
  animation: 300ms ease all;
`;

export const InputGroup = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const InputLabel = styled.label`
  color: ${SUB_COLOR};
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;

  ${({ shrink }) => (shrink ? shrinkLabel : "")}

  transition: 300ms ease all;
`;

export const FormInput = styled.input`
  background-color: white;
  color: ${SUB_COLOR};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${SUB_COLOR};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${InputLabel} {
    ${shrinkLabel};
  }

  &[type="password"] {
    letter-spacing: 0.3em;
  }
`;

//Animation for the label on transition between shrink and normal and vice versa
