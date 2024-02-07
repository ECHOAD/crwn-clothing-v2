import Button from "../button/button.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import { InputSpinnerContainer, Number } from "./input-spinner.styles";

const InputSpinner = ({ value = 0, onIncrement, onDecrement }) => {
  return (
    <InputSpinnerContainer>
      <Button onClick={onDecrement}>
        <FontAwesomeIcon icon={faMinus} />
      </Button>
      <Number>{value}</Number>
      <Button onClick={onIncrement}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </InputSpinnerContainer>
  );
};

export default InputSpinner;
