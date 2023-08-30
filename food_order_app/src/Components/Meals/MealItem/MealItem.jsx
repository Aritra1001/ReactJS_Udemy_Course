import React, {useContext} from "react";
import styles from './MealItem.module.css';
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {

    const ctxData = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;  //toFixed function rounds the number to the speicified number of decimals

    const addItemToCartHandler = (amount) => {
      ctxData.addItem({
        name: props.name,
        id: props.id,
        amount: amount,
        price: props.price
      })
    }

  return (
    <>
      <li className={styles.meal}>
        <div >
            <h3>{props.name}</h3>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.price}>{price}</div>
        </div>
        <div>
            <MealItemForm id={props.id} onAddtoCart={addItemToCartHandler}/>
        </div>
      </li>
    </>
  );
};

export default MealItem;
