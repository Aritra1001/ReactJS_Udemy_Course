import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate ] = useState('');

//   const [userInput, setUserInput] = useState({
//     //creating a single state variable for managing multiple states.
//     title: "",
//     amount: "",
//     date: "",
//   });

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    // setUserInput({
    //   ...userInput, // We are using the spread operator to also store the rest of the values in the object.
    //   title: event.target.value,
    // });
  };

  const handleAmountChange = (event) =>{
    setAmount(event.target.value);
  }

  const handleDateChange = (event) =>{
    setDate(event.target.value);
  }

  // Using a single shared handler function
  // const inputChangeHandler = (identifier, value) =>{
  //   if(identifier === 'title'){
  //     setTitle(value);
  //   }
  //   else if(identifier === 'amount'){
  //     setAmount(value);
  //   }
  //   else{
  //     setDate(value);
  //   }
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredData = {
      title: title,
      amount: amount,
      date: new Date(date)
    }
    // console.log("data", enteredData);
    props.onExpenseFormData(enteredData);
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label className="new-expense__control label">Title</label>
            <input
              type="text"
              className="new-expense__control input"
              value={title}
              onChange={handleTitleChange}
              // onChange={(event)=> inputChangeHandler('title', event.target.value)}
            />
          </div>
          <div className="new-expense__control">
            <label className="new-expense__control label">Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              className="new-expense__control input"
              value={amount}
              onChange={handleAmountChange}
              // onChange={(event)=> inputChangeHandler('amount', event.target.value)}
            />
          </div>
          <div className="new-expense__control">
            <label className="new-expense__control label">Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              className="new-expense__control input"
              value={date}
              onChange={handleDateChange}
              // onChange={(event)=> inputChangeHandler('date', event.target.value)}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="Submit">
            Add Expense
          </button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
