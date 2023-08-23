import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () =>{
    setIsEditing(true);
  }

  const stopEditingHandler = () =>{
    setIsEditing(false);
  }

  const handleExpenseFormData = (expenseFormData) => {
    const expenseData = {
      ...expenseFormData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onSaveFormData(expenseData);
    setIsEditing(false);
  };

  return (
    <>
      <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onExpenseFormData={handleExpenseFormData} onCancel={stopEditingHandler}/>}
      </div>
    </>
  );
};

export default NewExpense;
