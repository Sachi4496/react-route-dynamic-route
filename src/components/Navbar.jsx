import React from "react";
import { Nav } from "../stylecomponents/style";

export const Navbar = () => {
  return (
    <div>
      <Nav>
        <h1>Masai</h1>
        <div className="innerDiv">
          <p>Home</p>
          <p>All Product</p>
          <p>Product Details</p>
        </div>
      </Nav>
    </div>
  );
};
