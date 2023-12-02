import React, { useState } from "react";
import { shopData } from "../../data/shopData";
import "./startPageStyling.css";
export const StartPage = () => {
  const [isActive, setIsActive] = useState(false);
 const handlMouse =(id)=>{
  const shopDataId = shopData.map((item)=>item.id)
  if(shopDataId.includes(id === id)){
    setIsActive(true)
  }
 }   
 console.log(shopData);
  return (
    <div className="shop-conteiner">
      <div className="shop-header">
        <h1>Shop The Latest</h1>
        <a href="#">View All</a>
      </div>
      <div className="startPage">
        {shopData.map((item) => (
          <div
            onMouseEnter={() => handlMouse(item.id)}
            onMouseLeave={() => setIsActive(false)}
            key={item.id}
            className="shopItem"
          >
            <img src={item.image} alt={item.header} />
            {isActive && (
              <div className="hover-butto">
                <button>Add To Cart</button>
              </div>
            )}
            <h3>{item.header}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
