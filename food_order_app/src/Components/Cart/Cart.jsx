import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const ctxData = useContext(CartContext);

  const totalAmount = ctxData.totalAmount.toFixed(2);
  const hasItems = ctxData.items.length > 0;

  const cartItemAddHandler = item => {

  }

  const cartItemRemoveHandler = id => {

  }

  const cartItem = (
    <ul className={styles["cart-items"]}>
      {ctxData.items.map((item) => {
        return (
            <CartItem
              key= {item.id}
              name= {item.name}
              price= {item.price}
              amount= {item.amount}
              onAdd= {cartItemAddHandler.bind(null, item)}
              onRemove= {cartItemRemoveHandler(null, item.id)}
            />
        );
      })}
    </ul>
  );

  return (
    <>
      <Modal onClose={props.onHideCart}>
        {cartItem}
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>{`$${totalAmount}`}</span>
        </div>

        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.onHideCart}>
            Close
          </button>
          {hasItems && <button className={styles.button}>Order</button>}
        </div>
      </Modal>
    </>
  );
};

export default Cart;
