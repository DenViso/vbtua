import React, { useState } from "react";
import { shopData } from "../../data/shopData";
import "../StartPage/startPageStyling.css";
import "./shop.css";
import { Filter } from "./Filter/Filter";
import { Link } from "react-router-dom";

export const Shop = ({ startPage }) => {
  const [activeItemId, setActiveItemId] = useState(null);
  const [products, setProducts] = useState(shopData);

  const handleClick = (id) => {
    const filteredProducts = shopData.filter((product) => product.id === id);
    setProducts(filteredProducts);
  };

  const handleMouseEnter = (id) => {
    setActiveItemId(id);
  };

  const handleMouseLeave = () => {
    setActiveItemId(null);
  };

  return (
    <div className="shop">
      {startPage ? null : <Filter />}
      <div className={!startPage ? "startPage" : "startPageFull"}>
        {shopData.map((item) => (
          <div
            key={item.id}
            className="shopItem"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="img-cont">
              <Link to={`/shop/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.header}
                  onClick={() => handleClick(item.id)}
                />
              </Link>
              {item.sale && <p className="sale">-%21</p>}
              {item.solOut && <p className="soldOut">Sold Out</p>}
            </div>
            {activeItemId === item.id && (
              <>
                <div
                  className={!startPage ? "hover-buttonFull" : "hover-button"}
                >
                  <button>Add To Cart</button>
                </div>
                <div className={!startPage ? "hover-icon" : "hover-iconFull"}>
                  <img src="./img/shop/icon/cart.svg" alt="" />
                  <img src="./img/shop/icon/eye.svg" alt="" />
                  <img src="./img/shop/icon/heart.svg" alt="" />
                </div>
              </>
            )}
            <h3 className="data-header">{item.header}</h3>
            <p className="data-text">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
