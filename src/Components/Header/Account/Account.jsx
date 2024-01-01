import React from "react";
import {Link,
  BrowserRouter as Router,Routes,Route
} from "react-router-dom";
import { Dashbord } from "./ComponentAcount/Dashbord";
import './account.css'

export const Account = () => {
  // const nav = useNavigate();
  return (
    <div className="account">
      <h1>My Account</h1>
      <div className="account-link">
        <Link to="/account/dashboard">Dashboard</Link>
        <Link to="/account/orders">Orders</Link>
        <Link to="/account/downloads">Downloads</Link>
        <Link to="/account/addresses">Addresses</Link>
        <Link to="/account/account-details">Account details</Link>
        <Link to="/account/logout">Logout</Link>
      </div>
      <div className="comonent-navication-render">
        <Routes>
          <Route path="/account/dashboard" component={<Dashbord/>} />
          {/* <Route path="/account/orders" component={Orders} />
          <Route path="/account/downloads" component={Downloads} />
          <Route path="/account/addresses" component={Addresses} />
          <Route path="/account/account-details" component={AccountDetails} />
          <Route path="/account/logout" component={Logout} /> */}
        </Routes>
      </div>
    </div>
  );
};
