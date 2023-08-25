// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {

  const [enteredData, setEnteredData] = useState([]);
  const [input, setInput] = useState(null);

  const formDataHandler = (uName, uAge) => {
    // console.log("app.js");
    console.log(uName, uAge);
    const formData = {name: uName, age:uAge, id: Math.random().toString()}
    setEnteredData((prevUsersList) => {
        return [...prevUsersList, formData]
    });
    setInput(formData);
  }

  return (
    <>
      <AddUser onUserFormData={formDataHandler}/>
      {!input && <p style={{textAlign: 'center', color: 'white'}}>No User Data found. Maybe add one?</p>}
      {input && <UsersList users={enteredData}/>}
    </>
  );
}

export default App;
