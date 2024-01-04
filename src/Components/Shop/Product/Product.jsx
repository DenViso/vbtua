import React, { useEffect, useState } from "react";
import "./Product.css";
import { shopData } from "../../../data/shopData.js";
import { Error } from "../../Error/Error.jsx";
import { One } from "./One.jsx";
import { Two } from "./Two.jsx";
import { Three } from "./Three.jsx";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export const Product = () => {
  const { id } = useParams();
  const data = JSON.parse(localStorage.getItem("count", "product"));
  const [slide, setSlide] = useState(1);
  const [addToCard, setAddToCard] = useState(false);
  const [prodInfo, setProdInfo] = useState(<One />);
  const [count, setCount] = useState(data ? data : 1);
  const newShopData = (shopData, count = 3) => {
    return shopData.slice(0, count);
  };
  const filteredProducts = newShopData(shopData);

  const productItem = shopData.find((item) => item.id === id);

  const produInfo = (id) => {
    if (id === 1) {
      setProdInfo(<One />), setSlide(1);
    } else if (id === 2) {
      setProdInfo(<Two />), setSlide(2);
    } else if (id === 3) {
      setProdInfo(<Three />), setSlide(3);
    }
  };
  const hendleAddToCard = () => {
    setAddToCard(true);
    localStorage.setItem("count", count);
    localStorage.setItem("product", JSON.stringify(productItem));
    setTimeout(() => setAddToCard(false), 5000);
  };
  const increase = () => {
    setCount(Number(count) + 1);
    hendleAddToCard();
  };
  const decrease = () => {
    setCount(count - 1);
    if (count <= 1) {
      setCount(1);
    }
  };

  return (
    <div className="product">
      {addToCard ? (
        <div className="product-mesage">
          <div className="product-mesage-text">
            <span>✔</span>
            <p>The item added to your Shopping bag.</p>
          </div>
          <Link to="/">VIEW CART</Link>
        </div>
      ) : null}
      {productItem ? (
        <div className="product-container">
          <div className="product-item" key={productItem.id}>
            <div className="section-1">
              <div className="sub-section-1">
                {productItem.image ? (
                  <img src={productItem.image} alt={productItem.header} />
                ) : (
                  <Error />
                )}
              </div>
              <div className="sub-section-2">
                <img src={productItem.image} alt={productItem.header} />
              </div>
            </div>
            <div className="section-2">
              {productItem && (
                <div className="content">
                  <h3 className="data-header">{productItem.header}</h3>
                  <p className="data-text">${productItem.price}</p>
                  <div className="content-rev">
                    <p>
                      ★ ★ ★ ★ ★ <span></span>
                    </p>
                  </div>
                  <p className="data-desc">{productItem.description}</p>
                  <div className="content-add">
                    <div className="content-count">
                      <span onClick={increase}>+</span>
                      <span>{count}</span>
                      <span onClick={decrease}>-</span>
                    </div>
                    <Link to="/cart" onClick={hendleAddToCard}>
                      ADD TO CART
                    </Link>
                  </div>
                  <div className="content-link">
                    <a href="">
                      <img src=".\img\shop\productIcon\hart.png" alt="pic" />
                    </a>
                    <a href="">
                      <img src="./img/shop/productIcon/1.svg" alt="pic" />
                    </a>
                    <a href="">
                      <img src="./img/shop/productIcon/1.svg" alt="pic" />
                    </a>
                    <a href="">
                      <img src="./img/shop/productIcon/1.svg" alt="pic" />
                    </a>
                    <a href="">
                      <img src="./img/shop/productIcon/1.svg" alt="pic" />
                    </a>
                  </div>
                  <div className="content-info">
                    <p>
                      SKU:<span>12</span>
                    </p>
                    <p>
                      Categories:<span>Fashion, Style</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="product-info">
            <div className="product-info-header">
              <h1
                className={
                  slide === 1 ? "slide info-text-header" : "info-text-header"
                }
                onClick={() => produInfo(1)}
              >
                Description
              </h1>
              <h1
                className={
                  slide === 2 ? "slide info-text-header" : "info-text-header"
                }
                onClick={() => produInfo(2)}
              >
                Aditional information
              </h1>
              <h1
                className={
                  slide === 3 ? "slide info-text-header" : "info-text-header"
                }
                onClick={() => produInfo(3)}
              >
                Reviews(0)
              </h1>
            </div>
            <div className="product-info-text">
              {prodInfo && <p>{prodInfo}</p>}
            </div>
          </div>
          <h1>Similar Items</h1>
          <div className="similar-items">
            {filteredProducts.map((item) => (
              <div key={item.id} className="shopItem">
                <div className="img-cont">
                  <img src={item.image} alt={item.header} />
                </div>
                <h3 className="data-header">{item.header}</h3>
                <p className="data-text">${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="error">
          <h1>Error 401</h1>
        </div>
      )}
    </div>
  );
};
