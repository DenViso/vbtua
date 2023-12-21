import React, { useState } from "react";
import { shopData } from "../../data/shopData";
import "./startPageStyling.css";
import { Shop } from "../Shop/Shop";
import { Link, Outlet } from "react-router-dom";
// import { Outlet } from "react-router-dom";

export const StartPage = () => {
  const [startPage, setStartPage] = useState(true);
  const isStartPage = () => {
    setStartPage((prev) => !prev);
  };

  if (shopData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="shop-container">
      <div className="shop-header">
        <h1>Shop The Latest</h1>
        <Link onClick={() => isStartPage(false)} to="/shop">
          View All
        </Link>
      </div>
      <div className={startPage ? "startPageFull" : "startPage"}>
        <Shop startPage={startPage} />
      </div>
    </div>
  );
};
