import React, {useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

  useContext(CartContext);

  return (
    <>
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span >Your Cart</span>
            <span className={styles.badge}>3</span>
        </button>
    </>
  )
}

export default HeaderCartButton