import React from "react";

const CustomerDetail = ({ customer }) => (
  <div>
    <h1>{customer.name}</h1>
    <p>Email: {customer.email}</p>
    <p>Phone: {customer.phone}</p>
  </div>
);

export default CustomerDetail;
