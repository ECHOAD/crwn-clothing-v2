/*
Default

Inverted

Google Sign In
*/

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  inverted: "inverted",
  google: "google-sign-in",
};

const getButtonComponent = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const ButtonComponent = getButtonComponent(buttonType);
  return <ButtonComponent {...otherProps}>{children}</ButtonComponent>;
};

export default Button;
