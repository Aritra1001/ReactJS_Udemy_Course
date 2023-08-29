import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const CartItem = (
    <ul className={styles["cart-items"]}>
      {[{ id: "1", name: "sushi", amount: "2", total: "23.45" }].map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <>
      <Modal onClose={props.onHideCart}>
        {CartItem}
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>35.66</span>
        </div>

        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.onHideCart} >Close</button>
          <button className={styles.button}>Order</button>
        </div>
      </Modal>
    </>
  );
};

export default Cart;
