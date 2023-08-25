import React, { useState, useRef } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  const [error, setError] = useState();
  const nameRef = useRef();
  const ageRef = useRef();

  // const nameChangeHandler = (event) => {
  //   setName(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setAge(event.target.value);
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(nameRef.current.value);
    console.log("Form is submitted");
    const enteredName = nameRef.current.value;
    const enteredAge = ageRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).'
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).'
      })
      return;
    }
    // console.log(name, age);
    // const userData=[];
    // userData.push({name: name, age: age});
    props.onUserFormData(enteredName, enteredAge);
    // setName("");
    // setAge("");
    nameRef.current.value = "";
    ageRef.current.value = "";
  };

  const errorHandler = () =>{
    setError(null);
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="user_name">Username</label>
          <input
            id="user_name"
            type="text"
            // value={name}
            // onChange={nameChangeHandler}
            ref={nameRef}
          />
          <label htmlFor="user_age">Age(Years)</label>
          <input
            id="user_age"
            type="number"
            // value={age}
            // onChange={ageChangeHandler}
            ref={ageRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
