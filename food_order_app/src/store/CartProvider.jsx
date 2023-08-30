import React, {useReducer} from "react";
import CartContext from "./cart-context";

// The goal of this component is to simply manage the cart context data and provide that context to all components that require the context.

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if(action.type === 'ADD'){
    let updatedItems = state.items.concat(action.item);
    let updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState
}

const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  // First we will check whether the item is already there in the cart, if its there we will just increase the count of that item in cart.
  // If its not there in cart we will add a new item.

  // Now we want that addItemToCartHandler is called and for that we need to go to a place where we want to call addItem in our context object
  // that is in the MealItemForm compo.
  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item})
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id})
  };

  // cartState is needed to construct this cartContext object
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <>
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
