import { useReducer } from "react";

// This is the hook created to use the useReducer hook to manage the value state and isTouched state instead of useState hook.

const initialStateValue = {
  value: "",
  isTouched: false,
};

const stateReducerFn = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
  return initialStateValue;
};

const useInput2 = (validateValue) => {
    const [inputState, dispatchFn] = useReducer(stateReducerFn, initialStateValue);

  // const [enteredValue, setEnteredValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(inputState.value);
  let hasError = !valueIsValid && inputState.isTouched;

  const inputChangeHandler = (event) => {
    dispatchFn({ type: "INPUT", value: event.target.value });
    //   setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    dispatchFn({ type: "BLUR" });
    //   setIsTouched(true);
  };

  const reset = () => {
    dispatchFn({ type: "RESET" });
    //   setEnteredValue('');
    //   setIsTouched(false);
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput2;
