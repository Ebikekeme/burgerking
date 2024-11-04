import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/burgerKinglogo.svg";
export const Menu = () => {
  return (
    <div>
      <nav className='navbar'>
      <div className="logo">
          <img src={logo} alt="Burger King Logo" />
        </div>
      <ul className="navlinks-1">
          <Link to="/order">Order</Link>
          
          <Link to="/menu"
           style={{
            color: "white",
            backgroundColor: "red",
            borderRadius: "20px",
            fontSize: "16px", // Set a font size
            border: "none",
            padding: "12px 15px",
                }}
          >Menu</Link>
          
          <Link to="#">Offer</Link>
          <Link to="#">Restaurants</Link>
          <Link to="#">Careers</Link>
          <Link to="#">News</Link>
        </ul>
      </nav>
      
      <nav className='navbar'>
      <ul className="navlinks-1">
          <Link to="#">Flame Grilled Burgers</Link>
          <Link to="/menu">Menu</Link>
          <Link to="#">Offer</Link>
          <Link to="#">Restaurants</Link>
          <Link to="#">Careers</Link>
          <Link to="#">News</Link>
        </ul>
      </nav>
    </div>













  );
};
export default Menu;
