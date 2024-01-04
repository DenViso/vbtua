import React, { useEffect, useState } from "react";
import "./cart.css";
import { shopData } from "../../../data/shopData";
import { Error } from "../../Error/Error";

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
  console.log(newCount);
  console.log(newProduct);
  return (
    <div className="cart">
      <h1>Shop Cart</h1>
      <div className="carts-conteiner">
        <div className="carts-conteiner-left">
          <div className="cart-left-info">
            {newProduct !== null ? (
              <div key={newProduct.id}>
                <img src={newProduct.image} alt="" />
                <p>{newProduct.header}</p>
                <p>${newProduct.price}</p>
                <div className="content-count">
                  <span onClick={increase}>+</span>
                  <span>{newCounts}</span>
                  <span onClick={decrease}>-</span>
                </div>
              </div>
            ) : (
              <Error />
            )}
          </div>
        </div>
        <div className="carts-conteiner-right"></div>
      </div>
    </div>
  );
};
