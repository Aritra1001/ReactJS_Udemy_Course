import React from "react";
import "./Table.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Table = (props) => {
  return (
    <>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.investmentData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.year}</td>
                <td>{formatter.format(item.savingsEndOfYear)}</td>
                <td>{formatter.format(item.yearlyInterest)}</td>
                <td>
                  {formatter.format(
                    item.savingsEndOfYear -
                      props.initialInvestment -
                      item.yearlyContribution * item.year
                  )}
                </td>
                <td>
                  {formatter.format(props.initialInvestment +
                    item.yearlyContribution * item.year)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
