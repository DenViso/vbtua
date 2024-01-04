import React, { useEffect, useState } from "react";
import "./cart.css";
// import { shopData } from "../../../data/shopData";
// import { Error } from "../../Error/Error";
import { Link } from "react-router-dom";
export const Cart = () => {
  const newProduct = JSON.parse(localStorage.getItem("product"));
  const newCount = JSON.parse(localStorage.getItem("count"));
  const [newCounts, setNewCounts] = useState(newCount);
  const increase = () => {
    const updatedCount = newCounts + 1;
    setNewCounts(updatedCount);
    localStorage.setItem("count", updatedCount);
  };

  const decrease = () => {
    const updatedCount = newCounts - 1;
    if (updatedCount >= 1) {
      setNewCounts(updatedCount);
      localStorage.setItem("count", updatedCount);
    }
  };
  const closedWindow = () => {
    localStorage.removeItem("count");
    localStorage.removeItem("product");
    newProduct = null;
  }
  console.log(newCount);
  console.log(newProduct);
  return (
    <div className="cart">
      <h1>Shop Cart</h1>
      <div className="carts-conteiner">
        <div className="carts-conteiner-left">
     
            {newProduct !== null ? (<>
              <div className="cart-left-info" key={newProduct.id}>
                <img src={newProduct.image} alt="" />
               <div className="info-cont">
               <h2>{newProduct.header}</h2>
               <span>Black / Medium</span>
                <p>${newProduct.price}</p>
               </div>
                <div className="content-count  resize">
                  <span onClick={increase}>+</span>
                  <span>{newCounts}</span>
                  <span onClick={decrease}>-</span>
                </div>
                <button onClick={() => closedWindow()}>X</button>
              </div>
            <div className="cart-info-bottom">

            </div>

            </>  
            ) : (
              <div className="cart-error">
              <h1>Cart is empty, return to <Link to="/shop">Shop</Link></h1>
              </div>
            )}
          
        </div>
        <div className="carts-conteiner-left"></div>
      </div>
    </div>
  );
};
