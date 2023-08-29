import React from 'react';
import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {

  const submitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <>
        <form className={styles.form}>
            <Input label='Amount' input={{
                type: 'number',
                id: 'amount_' + props.id,
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}/>
            <button onClick={submitHandler}>+ Add</button>
        </form>
    </>
  )
}

export default MealItemForm