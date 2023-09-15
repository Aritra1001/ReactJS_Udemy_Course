import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const [formInputIsValid, setFormInputIsValid] = useState({
    name: true,
    street: true,
    city: true,
    postCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const isEmpty = (value) => value.trim() === "";
  const hasFiveChars = (value) => value.trim().length === 5;

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = hasFiveChars(enteredPostalCode);

    setFormInputIsValid({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;
    // console.log("form validity", formIsValid);
    // nameInputRef.current.value = "";
    if (!formIsValid) {
      return;
    }

    // Submit cart data..
    props.onConfirm({
      enteredName,
      enteredStreet,
      enteredCity,
      enteredPostalCode
    })
  };

  const nameInputClasses = `${classes.control} ${
    formInputIsValid.name ? "" : classes.invalid
  }`;

  const streetInputClasses = `${classes.control} ${
    formInputIsValid.street ? "" : classes.invalid
  }`;

  const cityInputClasses = `${classes.control} ${
    formInputIsValid.city ? "" : classes.invalid
  }`;

  const postCodeInputClasses = `${classes.control} ${
    formInputIsValid.postCode ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputIsValid.name && (
          <p className={classes["error-text"]}>Please enter a valid name.</p>
        )}
      </div>
      <div className={streetInputClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputIsValid.street && (
          <p className={classes["error-text"]}>Please enter a valid street.</p>
        )}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputIsValid.city && (
          <p className={classes["error-text"]}>Please enter a valid city.</p>
        )}
      </div>
      <div className={postCodeInputClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputIsValid.postCode && (
          <p className={classes["error-text"]}>
            Please enter a valid postal code (5 char long).
          </p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button className={classes.submit} onClick={confirmHandler}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
