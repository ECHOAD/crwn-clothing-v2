import { useState } from "react";

import {
  signInWithNativeEmailAndPasswordHandler,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {SignInContainer, ButtonActionsContainer} from "./sign-in-form.styles";
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    try {
      await signInWithNativeEmailAndPasswordHandler(email, password);

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log(error);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGooglePopup();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SignInContainer>
      <h1>I already have an account</h1>
      <span>Sign in with your email and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          required
          onChange={handleChange}
          value={password}
          autoComplete="on"
        />

        <ButtonActionsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={handleGoogleSignIn}
          >
            Sign in with google
          </Button>
        </ButtonActionsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
