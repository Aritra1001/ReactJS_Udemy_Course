// import logo from './logo.svg';
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
import "./App.css";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

// The cart needs access to context data to render the cart items and also to edit them later
// Header needs access to context data to update the total number of cart items in the headerCartButton component
// Meals need access to context data coz we need to add the items to the cart from the MealItemForm

  return (
    <>
      <CartProvider>
        {showCart && <Cart onHideCart={hideCartHandler} />} 
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
    </>
  );
}

export default App;
