import React from 'react';
import CartContext from './cart-context';

const ContextProvider = (props) => {

    const addItemToCart = () =>{

    }

    const removeItemFromCart = () => {

    }

    const cartContext = {
        item: [],
        totalAmount: 0,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
        }

  return (
    <>
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    </>
  )
}

export default ContextProvider