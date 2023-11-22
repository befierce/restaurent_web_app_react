import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";




function App() {
  const [cartIsShown,setShowCart]=useState(false);

const showCartHandler = ()=>{
  setShowCart(true);
}
const hideCartHandler = ()=>{
  setShowCart(false);
}
  return (
    <>
    {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      
      <main>
        <Meals />
      </main>
      
    </>
  );
}

export default App;
