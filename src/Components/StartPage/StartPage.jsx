import React, { useState } from "react";
import { shopData } from "../../data/shopData";
import "./startPageStyling.css";

export const StartPage = () => {
  const [activeItemId, setActiveItemId] = useState(null);

  const handleMouseEnter = (id) => {
    setActiveItemId(id);
  };

  const handleMouseLeave = () => {
    setActiveItemId(null);
  };

  if (shopData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="shop-container">
      <div className="shop-header">
        <h1>Shop The Latest</h1>
        <a href="#">View All</a>
      </div>
      <div className="startPage">
        {shopData.map((item) => (
          <div
            key={item.id}
            className="shopItem"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={item.image} alt={item.header} />
            {activeItemId === item.id && (
              <>
              <div className="hover-button">
                <button>Add To Cart</button>
              </div>
              <div className="hover-icon">
                <img src="./img/shop/icon/cart.svg" alt="" />
                <img src="./img/shop/icon/eye.svg" alt="" />
                <img src="./img/shop/icon/heart.svg" alt="" />
              </div>
              </>
            )}
            <h3>{item.header}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
