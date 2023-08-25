import React from "react";
import styles from "./UsersList.module.css";
import Card from "../UI/Card/Card";

const UsersList = (props) => {


  // if(props.users.length === 0){

  // }

  return (
    <>
    {props.users.length > 0 && <Card className={styles.users}>
        <ul>
          {props.users.map((user) => {
            return (
              <li key={user.id}>
                {user.name} ({user.age} years old)
              </li>
            );
          })}
        </ul>
      </Card>}
    </>
  );
};

export default UsersList;
