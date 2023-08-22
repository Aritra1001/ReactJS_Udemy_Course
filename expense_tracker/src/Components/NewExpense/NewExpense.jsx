import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  const handleExpenseFormData = (expenseFormData) =>{
    const expenseData = {
      ...expenseFormData,
      id: Math.random().toString(),
    }
    // console.log(expenseData);
    props.onSaveFormData(expenseData);
  }

  return (
    <>
        <div className="new-expense">
            <ExpenseForm onExpenseFormData={handleExpenseFormData}/>
        </div>
    </>
  )
}

export default NewExpense