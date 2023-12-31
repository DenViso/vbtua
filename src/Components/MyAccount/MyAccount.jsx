import React, { useState } from "react";
import "./myAccoun.css";
import { Dashboard } from "./Dashboard";
import{Orders} from "./Orders";
import{Downloads} from "./Downloads";
import{Addresses} from "./Addresses";
import{Account} from "./Account";
import{Logout} from "./Logout";
export const MyAccount = () => {
  const [isActiveAccountLink, setIsActiveAccountLink] = useState(1);

  const handleActiveAccountLink = (l) => {
    if (l === "Dashboard") {
     
      console.log(1);
      return setIsActiveAccountLink(1);
    } else if (l === "Orders") {
    
      console.log(2);
      return setIsActiveAccountLink(2);
    } else if (l === "Downloads") {
     
      console.log(3);
      return setIsActiveAccountLink(3);
    } else if (l === "Addresses") {
    
      console.log(4);
      return setIsActiveAccountLink(4);
    } else if (l === "Account ") {
     
      console.log(5);
      return setIsActiveAccountLink(5);
    } else if (l === "Logout") {
     
      console.log(6);
      return setIsActiveAccountLink(6);
    }
  };
  const renderAccount = () => {
    if(isActiveAccountLink === 1){
      return <Dashboard/>
    } else if(isActiveAccountLink === 2){
      return <Orders/>
    } else if (isActiveAccountLink === 3){
      return <Downloads/>
    }else if (isActiveAccountLink === 4){
      return <Addresses/>
    } else if (isActiveAccountLink === 5){
      return <Account/>
    }
    else if (isActiveAccountLink === 6){
      return <Logout/>
    }
  }
  console.log(isActiveAccountLink);
  return (
    <div className="my-account">
      <h1>My Account</h1>
      <div className="links-account-menu">
        <ul>
          <li
            id="dashboard"
            onClick={(l) => handleActiveAccountLink("Dashboard")}
            className={
              1 === isActiveAccountLink
                ? "account-link active-link"
                : "account-link"
            }
          >
            Dashboard
          </li>
          <li
            id="orders"
            onClick={(l) => handleActiveAccountLink("Orders")}
            className={
              2 === isActiveAccountLink
                ? "account-link active-link"
                : "account-link"
            }
          >
            Orders
          </li>
          <li
            id="downloads"
            onClick={(l) => handleActiveAccountLink("Downloads")}
            className={
              3 === isActiveAccountLink
                ? "account-link active-link"
                : "account-link"
            }
          >
            Downloads
          </li>
          <li
            id="addresses"
            onClick={(l) => handleActiveAccountLink("Addresses")}
            className={
              4 === isActiveAccountLink
                ? "account-link active-link"
                : "account-link"
            }
          >
            Addresses
          </li>
          <li
            id="account"
            onClick={(l) => handleActiveAccountLink("Account ")}
            className={
              5 === isActiveAccountLink
                ? "account-link active-link"
                : "account-link"
            }
          >
            Account details
          </li>
          <li
            id="logout"
            onClick={(l) => handleActiveAccountLink("Logout")}
            className={
              6 === isActiveAccountLink
                ? "account-link active-link"
                : "account-link"
            }
          >
            Logout
          </li>
        </ul>
      </div>
      <div className="account-render">
        {renderAccount()}
      </div>
    </div>
  );
};
