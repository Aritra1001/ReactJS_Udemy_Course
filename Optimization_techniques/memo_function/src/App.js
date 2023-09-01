import React, {useState, useCallback} from 'react';

import './App.css';
import DemoOutput from './Components/Demo/DemoOutput';
import Button from './Components/UI/Button/Button';

function App() {

  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP RUNNING");

  const allowToggleHandler = () =>{
     setAllowToggle(true);
  }

  const toggleParagraphHandler = useCallback(() =>{
    if(allowToggle){
      setShowParagraph((prevState)=> !prevState);
    }
  }, [allowToggle]); 
  //We are passing the dependency of the callback so that whenever 
  // that state changes useCallback stores the function in the memory with the updated values

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
