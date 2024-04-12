import logo from './logo.svg';

import './App.css';
import Header from './components/Layouts/Header'
import { Fragment,useState } from 'react';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';




function App() {
  const [showCart, setshowCart]=useState(false);

 const showCartHandeler=()=>{
setshowCart(true);

 }
 const hideCartHandeler=()=>{
setshowCart(false);

 }
  return (
    <CartProvider>
     {showCart && <Cart onHide={hideCartHandeler}/>}
      <Header onShow={showCartHandeler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
