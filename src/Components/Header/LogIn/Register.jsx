import React, { useState } from "react";

export const Register = () => {
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
    }
  
  };

  return (
    <div className="form-log">
      <div className="login-form">
        <input type="email" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />
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
        <div className="log-pass">
          {" "}
          <input
            type={!activePass2 ? "password" : "text"}
            placeholder="Confirm your Password"
          />
          <span
            id="2"
            className={
              activePass2
                ? "span-radio-pos span-radio-pos-active "
                : "span-radio-pos"
            }
            onClick={(id) => handleActiveRadio(2)}
          ></span>
        </div>
        <div className="login-rad-but">
          <span
            id="3"
            className={
              activeAgree ? "span-radio span-radio-pos-active " : "span-radio"
            }
            onClick={(id) => handleActiveRadio(3)}
          ></span>
          <p>I agree with the terms and conditions</p>
        </div>
      </div>
      <button>Register</button>
    </div>
  );
};
