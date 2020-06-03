import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';


function App() {
   const openMenu = ()=>{
      document.querySelector(".sidebar").classList.add("open")
      
   }
   const closeMenu = ()=>{
      document.querySelector(".sidebar").classList.remove("open")
   }
  return (
     <BrowserRouter>
    <div className="grid-container">
               <header className="header">
                  <div className="brand">
                  <button onClick={openMenu}>
                     &#9776;
                  </button>
                     <Link to="/">mezuza</Link>
                  </div>
                  <div className="header-links">
                     <a href="cart.html" className="a">Cart</a>
                     <a href="signin.html" className="b">SignIn</a>
                  </div>
               </header>
               <aside className="sidebar">
                  <h3>shop category</h3>
                  <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                  <ul>
                  <li><a href="index.html">pants</a></li>
                  <li><a href="index.html">shirts</a></li>
                  </ul>
               </aside>
               <main className="main">
                <div className="content">

                <Route  path="/product/:id" component={ProductScreen}/>   
                <Route  path="/cart/:id?" component={CartScreen}/>   
                <Route exact path="/" component={HomeScreen}/> 
                 
               </div>
            </main>

               <footer className="footer">
                   react & node by -  <b>shneor bachar</b>
               </footer>
            </div>
</BrowserRouter>
  );
}

export default App;



















// <li>
// <div className="product">
//    <img className="product-image" src="/images/m1.jpg" alt="product"/>
//    <div className="product-name">
//       <a href="product.html">slimd ddwdede</a>
//    </div>
//    <div className="product-brand">nike</div>
//    <div className="product-price">6-$</div>
//    <div className="product-rating">*****</div>
// </div>
// </li>
// <li>
// <div className="product">
//    <img className="product-image" src="/images/m1.jpg" alt="product"/>
//    <div className="product-name">
//       <a href="product.html">slimd ddwdede</a>
//    </div>
//    <div className="product-brand">nike</div>
//    <div className="product-price">6-$</div>
//    <div className="product-rating">*****</div>
// </div>
// </li>
// <li>
// <div className="product">
//    <img className="product-image" src="/images/m1.jpg" alt="product"/>
//    <div className="product-name">
//       <a href="product.html">slimd ddwdede</a>
//    </div>
//    <div className="product-brand">nike</div>
//    <div className="product-price">6-$</div>
//    <div className="product-rating">*****</div>
// </div>
// </li>
// <li>
// <div className="product">
//    <img className="product-image" src="/images/m1.jpg" alt="product"/>
//    <div className="product-name">
//       <a href="product.html">slimd ddwdede</a>
//    </div>
//    <div className="product-brand">nike</div>
//    <div className="product-price">6-$</div>
//    <div className="product-rating">*****</div>
// </div>
// </li>
// <li>
// <div className="product">
//    <img className="product-image" src="/images/m1.jpg" alt="product"/>
//    <div className="product-name">
//       <a href="product.html">slimd ddwdede</a>
//    </div>
//    <div className="product-brand">nike</div>
//    <div className="product-price">6-$</div>
//    <div className="product-rating">*****</div>
// </div>
// </li>
// <li>
// <div className="product">
//    <img className="product-image" src="/images/m1.jpg" alt="product"/>
//    <div className="product-name">
//       <a href="product.html">slimd ddwdede</a>
//    </div>
//    <div className="product-brand">nike</div>
//    <div className="product-price">6-$</div>
//    <div className="product-rating">*****</div>
// </div>
// </li>
// <li>
// <div className="product">
//    <img className="product-image" src="/images/m1.jpg" alt="product"/>
//    <div className="product-name">
//       <a href="product.html">slimd ddwdede</a>
//    </div>
//    <div className="product-brand">nike</div>
//    <div className="product-price">6-$</div>
//    <div className="product-rating">*****</div>
// </div>
// </li>
// <li>
// <div className="product">
//    <img className="product-image" src="/images/m1.jpg" alt="product"/>
//    <div className="product-name">
//       <a href="product.html">slimd ddwdede</a>
//    </div>
//    <div className="product-brand">nike</div>
//    <div className="product-price">6-$</div>
//    <div className="product-rating">*****</div>
// </div>
// </li>
