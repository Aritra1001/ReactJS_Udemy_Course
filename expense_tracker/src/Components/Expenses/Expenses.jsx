import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2022);

  const handleFilterChange = (filterYear) => {
    console.log(filterYear);
    setFilteredYear(filterYear);
  };

  const filteredExpenses = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChangeData={handleFilterChange}
        />

        {/* Conditional statements using ternary operator */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filteredExpenses.map((item) => {
            return (
              <div key={item.id}>
                <ExpenseItem
                  title={item.title}
                  amount={item.amount}
                  date={item.date}
                />
              </div>
            );
          })
        )} */}

        {/* Using Logical && operator */}
        {/* {filteredExpenses.length === 0 && <p>No Expenses FOund.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((item) => {
            return (
              <div key={item.id}>
                <ExpenseItem
                  title={item.title}
                  amount={item.amount}
                  date={item.date}
                />
              </div>
            );
          })} */}
          <ExpensesChart expenses={filteredExpenses}/>
          {/* Another alternative for lean jsx code */}
          <ExpenseList items={filteredExpenses}/>
      </Card>
    </>
  );
};

export default Expenses;
