/**Fetching the input value- we can listen on every keystroke and store it in some state variable or use a ref to get the value once
 * the user is done typing.
 * Validating the inputs is all about finding whether the input is valid and is touched and
 * if it is invalid and is touched, we will show error to the user.
 */

import { useState } from "react";

const SimpleInput = (props) => {
  //   const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  //   const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  let enteredInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const InputNameBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // validating when the form is submitted
    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    // const nameRefValue = nameInputRef.current.value;
    // console.log(nameRefValue);
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const inputNameClasses = enteredInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          //   ref={nameInputRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={enteredNameHandler}
          onBlur={InputNameBlurHandler}
        />
        {enteredInputIsInvalid && (
          <p className="error-text">Name cannot be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
