import React, {useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

  // By using useContext in this component, this component will be re-evaluated whenever the context is updated.

  let ctxData = useContext(CartContext);
  let numberOfCartItems = ctxData.items.reduce((currNumber, item)=>{
    return currNumber + item.amount;
  }, 0)

  return (
    <>
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span >Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    </>
  )
}

export default HeaderCartButton