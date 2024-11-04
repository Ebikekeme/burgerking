import React from 'react';
import logo from "../assets/burgerKinglogo.svg";
import { Link } from 'react-router-dom';

export default function OrderNav() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Burger King Logo" />

        </div>
        <ul className="navlinks-1">
          <Link to="/order">Order</Link>
          <Link to="/menu">Menu</Link>
          <Link to="#">Offer</Link>
          <Link to="#">Restaurants</Link>
          <Link to="#">Careers</Link>
          <Link to="#">News</Link>
        </ul>
        <div className="Register-button">
          <button
            style={{
              color: "white",
              backgroundColor: "red",
              borderRadius: "20px",
              fontSize: "16px", // Set a font size
              border: "none",
              padding: "12px 15px",
              marginLeft: "500px",
            }}
          >
            <Link to="/modal">Register</Link>
          </button>
        </div>
      </nav>
     
    </>
  );
}