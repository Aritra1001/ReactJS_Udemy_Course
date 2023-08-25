import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form is submitted");
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).'
      })
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).'
      })
      return;
    }
    // console.log(name, age);
    // const userData=[];
    // userData.push({name: name, age: age});
    props.onUserFormData(name, age);
    setName("");
    setAge("");
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
            value={name}
            onChange={nameChangeHandler}
          />
          <label htmlFor="user_age">Age(Years)</label>
          <input
            id="user_age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
