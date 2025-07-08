import React from "react";

function Card({ name, email, address }) {
  // name,email,address
  return (
    <div className="myCard">
      <div>
        <strong>Name:</strong> {name}
      </div>
      <div>
        <strong>Email:</strong> {email}
      </div>
      <div>
        <strong>Address:</strong> {address}
      </div>
    </div>
  );
}

export default Card;
