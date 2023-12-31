import React from "react";
import "./headerStyling.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
    <div className="header">
      <div className="logo-header">
        <Link to="/"  className="logoLink">
          <img src="/public/img/header/logo.svg" alt="" />
        </Link>
      </div>
      <div className="nav-header">
        <ul>
          <li>
          
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            {/* <a href="#">Blog</a> */}
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            {/* <a href="#">Our Story</a> */}
            <Link to={'/our-story'}>Our Story</Link>
          </li>
        </ul>
      </div>
      <div className="contact-header">
        <img src="/public/img/header/icon/find.svg" alt="" />
        <Link to='/cart'><img src="/public/img/header/icon/cart.svg" alt="" /></Link>
        <Link to="/login"><img src="/public/img/header/icon/IogoIcon.svg" alt="" /></Link>
      </div>
    </div>

    </>
  );
};
