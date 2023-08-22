import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2022);

  const handleFilterChange = (filterYear) => {
    console.log(filterYear);
    setFilteredYear(filterYear);
  };

  const filteredExpenses = props.expenses.filter((item)=>{
    return item.date.getFullYear().toString() === filteredYear
  })

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChangeData={handleFilterChange}
        />
        {filteredExpenses.map((item) => {
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
      </Card>
    </>
  );
};

export default Expenses;
