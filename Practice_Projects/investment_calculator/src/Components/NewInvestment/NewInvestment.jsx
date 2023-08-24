import React from 'react';
import InvestmentForm from './InvestmentForm';

const NewInvestment = (props) => {

    const inputFormDataHandler = (formData) =>{
        // console.log("New Investment");
        // console.log(formData);
        props.onCalculate(formData);
    }

  return (
    <>
        <InvestmentForm onInputFormData={inputFormDataHandler}/>
    </>
  )
}

export default NewInvestment