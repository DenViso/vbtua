import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SingIn = () => {
  const [activePass, setActivePass] = useState(false);
  const [activePass2, setActivePass2] = useState(false);
  const [activeAgree, setActiveAgree] = useState(false);
  const handleActiveRadio = (id) => {
    if (id === 1) {
      setActivePass((prev) => !prev);
    } else if (id === 2) {
      setActivePass2((prev) => !prev);
    } else if (id === 3) {
      setActiveAgree((prev) => !prev);
      <Link to="/login"></Link>;
    }
  };
  return (
    <div className="form-log">
      <div className="login-form">
        <input type="text" placeholder="Email" />
        <div className="log-pass">
          <input
            type={!activePass ? "password" : "text"}
            placeholder="Password"
          />
          <span
            id="1"
            className={
              activePass
                ? "span-radio-pos span-radio-pos-active "
                : "span-radio-pos"
            }
            onClick={(id) => handleActiveRadio(1)}
          >
            {" "}
          </span>
        </div>
        <div className="login-rad-but">
          <span
            id="2"
            className={
              activePass2 ? "span-radio span-radio-pos-active " : "span-radio"
            }
            onClick={(id) => handleActiveRadio(2)}
          ></span>
          <p>Remember me</p>
        </div>
      </div>
      <button>SIGN IN</button>
      <Link to= "/account">SIGN IN</Link>
      <div className="login-forgot">
        {" "}
        <Link to="/forgot">
          {/* <span
            id="3"
            className={
              activeAgree ? "span-radio span-radio-pos-active " : "span-radio"
            }
            onClick={(id) => handleActiveRadio(3)}
          ></span> */}
          Have you forgotten your password?
        </Link>
      </div>
    </div>
  );
};
