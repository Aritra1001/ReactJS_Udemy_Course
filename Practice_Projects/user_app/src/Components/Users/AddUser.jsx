import React from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const AddUser = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form is submitted");
  };

  return (
    <>
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="user_name">Username</label>
          <input id="user_name" type="text" />
          <label htmlFor="user_age">Age(Years)</label>
          <input id="user_age" type="age" />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
