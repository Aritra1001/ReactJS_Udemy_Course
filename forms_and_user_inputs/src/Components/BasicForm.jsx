import useBasicInput from "../hooks/use-basicInput";

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: fNameReset,
  } = useBasicInput((value) => value.trim() !== "");

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lNameReset,
  } = useBasicInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useBasicInput((value) => value.trim() !== "" && value.includes("@"));

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Name", firstNameValue, lastNameValue);
    console.log("Email", emailValue);

    fNameReset();
    lNameReset();
    emailReset();
  };

  const classValidation = (inputType) => {
    if (inputType === "fname") {
      const fNameClasses = firstNameHasError
        ? "form-control invalid"
        : "form-control";
      return fNameClasses;
    } else if (inputType === "lname") {
      const lNameClasses = lastNameHasError
        ? "form-control invalid"
        : "form-control";
      return lNameClasses;
    } else if (inputType === "email") {
      const emailClasses = emailHasError
        ? "form-control invalid"
        : "form-control";
      return emailClasses;
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={classValidation("fname")}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">First Name cannot be empty</p>
          )}
        </div>
        <div className={classValidation("lname")}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Last Name cannot be empty</p>
          )}
        </div>
      </div>
      <div className={classValidation("email")}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Email cannot be empty and it must contain @</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
