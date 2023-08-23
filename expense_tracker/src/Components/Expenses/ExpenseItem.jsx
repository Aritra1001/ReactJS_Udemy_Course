import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2023, 2, 28);
  // const expenseItem = 'Car Insurance';
  // const expenseAmt = 300.20;

  return (
    <>
      <li>
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
          </div>
        </Card>
      </li>
    </>
  );
};

export default ExpenseItem;
