import React from "react";

export const Addresses = () => {
  return (
    <div className="addresses">
      <div className="billing">
        <h2>Billing Address</h2>
        <div className="billing-input-name">
          <input type="text" placeholder="First Name *" />
          <input type="text" placeholder="Last Name *" />
        </div>
        <input type="text" placeholder="Company *" />
        <select id="country-select">
          <option value="ukraine">Ukraine</option>
          <option value="usa">USA</option>
          <option value="germany">Germany</option>
        </select>
        <input type="text" placeholder="Street Address *" />
        <input type="text" placeholder="Postcode / ZIP *" />
        <input type="text" placeholder="Town / City *" />
        <input type="phone" placeholder="Phone *" />
        <input type="phone" placeholder="Phone *" />
        <input type="email" placeholder="Email *" />
        <button>SAVE ADDRESS</button>
      </div>
      <div className="billing">
        <h2>Shipping Address</h2>
        <a href="">ADD</a>
        <p>You have not set up this type of address yet.</p>
      </div>
    </div>
  );
};
