/**Fetching the input value- we can listen on every keystroke and store it in some state variable or use a ref to get the value once
 * the user is done typing.
 * Validating the inputs is all about finding whether the input is valid and is touched and
 * if it is invalid and is touched, we will show error to the user.
 */

import { useState } from "react";

const SimpleInput = (props) => {
  //   const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  //   const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);
  //We want to change this overall form valid updating function whenerver one of the input changes.

  const enteredNameIsValid = enteredName.trim() !== "";
  let enteredNameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.trim() !== "";
  let enteredEmailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const enteredEmailIncludes = enteredEmail.includes("@");
  let enteredEmailInputExcludes = !enteredEmailIncludes && enteredEmailTouched;

  // useEffect(()=>{
  //   if(enteredNameIsValid){   //In the if condition we are checking each input validity is true or not .
  //     setFormIsValid(true);
  //   }else{
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid]) //In the dependencies we can use each input validity variables.

  // But here we are not handling any side effect for managing the overall form validity,
  // we are just deriving a value. So, instead of useEffect we can simply use a variable and if condition.

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid && enteredEmailIncludes) {
    formIsValid = true;
  }

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const InputNameBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const enteredEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const enteredEmailBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // validating when the form is submitted
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    if (!enteredNameIsValid || !enteredEmailIsValid || !enteredEmailIncludes) {
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);
    // const nameRefValue = nameInputRef.current.value;
    // console.log(nameRefValue);
    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  const inputNameClasses = enteredNameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses =
    enteredEmailInputIsInvalid || enteredEmailInputExcludes
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
        {enteredNameInputIsInvalid && (
          <p className="error-text">Name cannot be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={enteredEmailHandler}
          onBlur={enteredEmailBlurHandler}
        />
        {enteredEmailInputIsInvalid && (
          <p className="error-text">Email cannot be empty</p>
        )}
        {enteredEmailInputExcludes && !enteredEmailInputIsInvalid && (
          <p className="error-text">Email must contain @</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
