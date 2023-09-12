/**We are creating this hook to manage the value of a given input, the touched state,
 *  also infer the validity and combine it with the touched state
 * The hook should also be felxible - the complete validation logic should be pssed to the hook from outside*/

import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  let hasError = !valueIsValid && isTouched;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  }

  const inputBlurHandler = () => {
    setIsTouched(true);
  }

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        reset
    }

};

export default useInput;
