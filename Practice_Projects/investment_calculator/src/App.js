import { useState } from "react";
import Header from "./Components/Header/Header";
import NewInvestment from "./Components/NewInvestment/NewInvestment";
import Table from "./Components/Table/Table";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    setUserInput(userInput);
    // do something with yearlyData ...
  };
  
  const yearlyData = []; // per-year results

  if (userInput) {

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  // const savedDataHandler = (data) =>{
  //   console.log("Appp.js");
  //   console.log(data);
  //   setSavedData(data);
  // }

  return (
    <div>
      <Header />
      <NewInvestment onCalculate={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {!userInput && <p style={{textAlign:'center'}}>No investments calculated yet.</p>}
      {userInput && <Table investmentData={yearlyData} initialInvestment={userInput['current-savings']}/>}
    </div>
  );
}

export default App;
