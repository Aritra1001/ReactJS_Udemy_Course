// import logo from './logo.svg';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';
import './App.css';

function App() {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () =>{
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <>
      {showCart && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </>
  );
}

export default App;
