import {
  InputGroup,
  FormInput as Input,
  InputLabel,
} from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  const isShrink = otherProps.value.length;
  return (
    <InputGroup>
      <Input {...otherProps} />

      {label && <InputLabel shrink={isShrink}>{label}</InputLabel>}
    </InputGroup>
  );
};

export default FormInput;
