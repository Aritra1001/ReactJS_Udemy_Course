import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found.</h2>
  }

  return (
    <>
      <ul className="expenses-list">
        {props.items.map((item) => {
          return (
            <div key={item.id}>
              <ExpenseItem
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default ExpenseList;
