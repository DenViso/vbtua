import React from "react";
import "./error.css";
import { Link } from "react-router-dom";
export const Error = () => {
  return (
    <div className="error">
      <h1>404 Error</h1>
      <p>
        This page not found; <br /> back to home and start again
      </p>
      <Link to="/">HOMEPAGE</Link>
    </div>
  );
};
