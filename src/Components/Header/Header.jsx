import React from "react";
import "./headerStyling.css";
import {Slider} from './Slider/Slider'

export const Header = () => {
  return (
    <>
    <div className="header">
      <div className="logo-header">
        <a href="#" className="logoLink">
          <img src="./img/header/logo.svg" alt="" />
        </a>
      </div>
      <div className="nav-header">
        <ul>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Our Story</a>
          </li>
        </ul>
      </div>
      <div className="contact-header">
        <img src="./img/header/icon/find.svg" alt="" />
        <img src="./img/header/icon/cart.svg" alt="" />
        <img src="./img/header/icon/IogoIcon.svg" alt="" />
      </div>
    </div>
    <Slider/>
    </>
  );
};
