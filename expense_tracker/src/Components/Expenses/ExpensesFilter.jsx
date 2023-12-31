import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const handleSelectChange = (event) => {
    // console.log(event.target.value);
    props.onFilterChangeData(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={handleSelectChange}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;