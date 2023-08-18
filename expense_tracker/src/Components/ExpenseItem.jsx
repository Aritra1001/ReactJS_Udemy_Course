import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = (props) =>{

    // const expenseDate = new Date(2023, 2, 28);
    // const expenseItem = 'Car Insurance';
    // const expenseAmt = 300.20;

    const month = props.date.toLocaleString('en-US', {month: "long"});  //toLocaleSting takes two arguments - locales and options 
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return(
        <>
            <div className="expense-item">
                <div>
                    <div>{month}</div>
                    <div>{day}</div>
                    <div>{year}</div>
                </div>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </div>
        </>
    )
}

export default ExpenseItem;
