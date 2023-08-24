import React, { useState } from "react";
import "./InvestmentForm.css";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const InvestmentForm = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log("form is submitted!");
    // const investmentFormData = {
    //   currentSavings: userInput['current-savings'],
    //   YearlySavings: userInput['yearly-contribution'],
    //   ExpectedInterest: userInput['expected-return'],
    //   InvestmentDuration: userInput['duration'],
    // };
    // console.log(investmentFormData);
    props.onInputFormData(userInput);
  };

  const resetHandler = () => {
    // console.log("reset");
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (identifier, value) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [identifier]: +value };
    });
  };

  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
                value={userInput['current-savings']}
              onChange={(e) =>
                inputChangeHandler("current-savings", e.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
                value={userInput['yearly-contribution']}
              onChange={(e) =>
                inputChangeHandler("yearly-contribution", e.target.value)
              }
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
                value={userInput['expected-return']}
              onChange={(e) =>
                inputChangeHandler("expected-return", e.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
                value={userInput['duration']}
              onChange={(e) => inputChangeHandler("duration", e.target.value)}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </>
  );
};

export default InvestmentForm;
