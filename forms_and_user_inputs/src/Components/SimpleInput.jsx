/**Fetching the input value- we can listen on every keystroke and store it in some state variable or use a ref to get the value once
 * the user is done typing.
 */

import { useState, useRef } from "react";

const SimpleInput = (props) => {

  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
        setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true)
    console.log(enteredName);
    const nameRefValue = nameInputRef.current.value;
    console.log(nameRefValue);
  };

  let enteredInputIsInvalid = !enteredNameIsValid && enteredNameTouched ;
  const inputNameClasses = enteredInputIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={enteredNameHandler}
        />
        {enteredInputIsInvalid && <p className="error-text">Name cannot be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
