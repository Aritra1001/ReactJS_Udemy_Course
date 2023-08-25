// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {

  const [enteredData, setEnteredData] = useState([]);

  const formDataHandler = (uName, uAge) => {
    // console.log("app.js");
    console.log(uName, uAge);
    setEnteredData((prevUsersList) => {
        return [...prevUsersList, {name: uName, age:uAge, id: Math.random().toString()}]
    });
  }

  return (
    <>
      <AddUser onUserFormData={formDataHandler}/>
      <UsersList users={enteredData}/>
    </>
  );
}

export default App;
