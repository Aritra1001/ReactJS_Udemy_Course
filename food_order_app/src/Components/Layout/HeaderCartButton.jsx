import React, {useContext, useEffect, useState} from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  
  // By using useContext in this component, this component will be re-evaluated whenever the context is updated.
  let ctxData = useContext(CartContext);

  const {items} = ctxData;
  let numberOfCartItems = items.reduce((currNumber, item)=>{
    return currNumber + item.amount;
  }, 0)

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

  useEffect(()=>{
    
    if(items.length === 0){
      return;
    }

    setBtnIsHighlighted(true);

    let timer = setTimeout(()=>{
      setBtnIsHighlighted(false);
    }, 300);

    return ()=>{
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <>
        <button className={btnClasses} onClick={props.onClick}>
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