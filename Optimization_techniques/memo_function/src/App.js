import React, {useState, useCallback} from 'react';

import './App.css';
import DemoOutput from './Components/Demo/DemoOutput';
import Button from './Components/UI/Button/Button';

function App() {

  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING");

  const toggleParagraphHandler = useCallback(() =>{
    setShowParagraph((prevState)=> !prevState);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false}/>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
