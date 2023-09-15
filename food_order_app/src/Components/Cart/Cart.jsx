import React, { useContext, useState } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const ctxData = useContext(CartContext);

  const totalAmount = ctxData.totalAmount.toFixed(2);
  const hasItems = ctxData.items.length > 0;

  const cartItemAddHandler = (item) => {
    ctxData.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    ctxData.removeItem(id);
  };

  const checkoutHandler = () => {
    setIsCheckout(true);
  };

  const cartItem = (
    <ul className={styles["cart-items"]}>
      {ctxData.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            /* bind pre configures the function for future execution and also pre-configures 
              the argument that function will receive when it is executed  */
            onAdd={cartItemAddHandler.bind(null, item)}
          />
          // <li>{item.name}</li>
        );
      })}
    </ul>
  );

  const cartActions = (
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={props.onHideCart}>
        Close
      </button>
      {hasItems && (
        <button className={styles.button} onClick={checkoutHandler}>
          Order
        </button>
      )}
    </div>
  );

  const sendingCartData = async(userData) => {
    setIsSubmitting(true);
    await fetch("https://react-http-9f1bd-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: ctxData.items,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    ctxData.clearCart();
  };

  const modalContent = (
    <>
      {" "}
      {cartItem}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{`$${totalAmount}`}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={sendingCartData} onClose={props.onHideCart} />
      )}
      {!isCheckout && cartActions}
    </>
  );

  const onSubmitModalContent = <p>Sending Order Data...</p>

  const afterSubmitModalContent = <>
    <p>Order Sent Successfully</p>
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={props.onHideCart}>
        Close
      </button>
    </div>
  </>

  return (
    <>
      <Modal onClose={props.onHideCart}>
        {!isSubmitting && !didSubmit && modalContent}
        {isSubmitting && onSubmitModalContent}
        {!isSubmitting && didSubmit && afterSubmitModalContent}
      </Modal>
    </>
  );
};

export default Cart;
