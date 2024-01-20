import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavBar() {
  const cart = useSelector(state => state.cart)
  return (
    <div>
      <ul style={{display : "flex", listStyle :"none", gap : "5rem"}}>
        <Link to="/">
          {" "}
          <li>Home</li>
        </Link>
        <Link to="/cart">
          <li>Cart({cart.length})</li>
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
