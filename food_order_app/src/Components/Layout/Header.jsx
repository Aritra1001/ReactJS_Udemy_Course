import React from 'react';
import mealsImg from '../../Assets/meals.jpg'  ;
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
        <header className={styles.header}>
            <h1>Deli Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={styles['main-image']}>
            <img src={mealsImg} alt='A table full of delicious meals'/>
        </div>
    </>
  )
}

export default Header